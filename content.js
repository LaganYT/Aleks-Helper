// content.js (your content script)
document.addEventListener("keydown", function (event) {
    // Check if the Enter key is pressed
    if (event.key === "Enter" || event.code === "Enter") {
        event.preventDefault(); // Prevent default Enter behavior
        handleEnterKeyPress();
    }
});

// Detect ALEKS cookie-block page and redirect to login based on preference
function checkAndRedirect() {
    try {
        const pageTitle = (document.title || "").toLowerCase();
        const bodyText = (document.body?.innerText || "").toLowerCase();
        
        const titleIndicators = [
            "session closed",
            "aleks - session closed",
            "aleks - sorry, this page cannot be displayed due to your browser setting."
        ];
        const bodyIndicators = [
            "cookies are blocked or not supported.",
            "sorry, this page cannot be displayed due to your browser setting.",
            "session closed",
            "this session is closed",
        ];
        
        const titleMatch = titleIndicators.some((phrase) => pageTitle.includes(phrase));
        const bodyMatch = bodyIndicators.some((phrase) => bodyText.includes(phrase));
        const isBlockedPage = titleMatch || bodyMatch;

        
        if (!isBlockedPage) return;

        console.log("InterALEKS: Redirecting...");
        chrome.storage?.sync.get({ interaleksLoginMethod: "aleks" }, (data) => {
            const method = data?.interaleksLoginMethod || "aleks";
            const targets = {
                aleks: "https://www.aleks.com/login",
                mcgrawhill: "https://my.mheducation.com/login/",
            };
            const targetUrl = targets[method] || targets.aleks;
            if (typeof window !== "undefined" && targetUrl) {
                window.location.replace(targetUrl);
            }
        });
    } catch (err) {
        console.error("InterALEKS redirect error", err);
    }
}

// Wait for page to be fully loaded before checking
function runCheckWithDelay() {
    checkAndRedirect();
    // Double-check after 3 seconds
    setTimeout(checkAndRedirect, 3000);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runCheckWithDelay);
} else if (document.readyState === 'interactive') {
    // DOM is loaded but resources might still be loading
    window.addEventListener('load', runCheckWithDelay);
} else {
    // Page is already fully loaded
    runCheckWithDelay();
}

function handleEnterKeyPress() {
    // Priority order as requested: Start now, Submit, Start, Continue my path, Check, Next, Try another, Check, Continue
    const idsInPriorityOrder = [
        // Start now
        "smt_bottomnav_button_input_goto_placement",
        // Submit
        "smt_bottomnav_button_input_nextItemAssess",
        "smt_bottomnav_button_input_submit",
        // Start
        "smt_bottomnav_button_input_startAssignment",
        "smt_bottomnav_button_input_startPrep",
        // Continue my path
        "smt_bottomnav_button_input_newItem",
        // Check (both variants)
        "smt_bottomnav_button_input_checkAnswer",
        "smt_bottomnav_button_input_nextItem",
        // Next (several variants)
        "smt_bottomnav_button_input_learningCorrect",
        "smt_bottomnav_button_input_nextQuestionAssignment",
        "smt_bottomnav_button_input_next",
        "smt_bottomnav_button_input_nextPage",
        "smt_bottomnav_button_input_nextSurvey",
        // Try another
        "smt_bottomnav_button_input_tryAnother",
        // Check again (fallback)
        "smt_bottomnav_button_input_checkAnswer",
        // Continue (variants)
        "smt_bottomnav_button_input_startItem",
        "smt_bottomnav_button_input_continue",
        // Generic learning/next
        "smt_bottomnav_button_input_learning",
    ];

    for (const id of idsInPriorityOrder) {
        const el = document.getElementById(id);
        if (el && !el.disabled && el.style.display !== "none") {
            el.click();
            return;
        }
    }
}
