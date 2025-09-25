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
        
        console.log("InterALEKS: Page title:", pageTitle);
        console.log("InterALEKS: Body text preview:", bodyText.substring(0, 200));
        
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
        
        console.log("InterALEKS: Title match:", titleMatch);
        console.log("InterALEKS: Body match:", bodyMatch);
        console.log("InterALEKS: Is blocked page:", isBlockedPage);
        
        if (!isBlockedPage) return;

        console.log("InterALEKS: Redirecting...");
        chrome.storage?.sync.get({ interaleksLoginMethod: "aleks" }, (data) => {
            const method = data?.interaleksLoginMethod || "aleks";
            const targets = {
                aleks: "https://www.aleks.com/login",
                mcgrawhill: "https://my.mheducation.com/login/",
            };
            const targetUrl = targets[method] || targets.aleks;
            console.log("InterALEKS: Redirecting to:", targetUrl);
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
    // Double-check after 2 seconds
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
    // Try to click the "Check Answer" button first
    const checkAnswerButton = document.getElementById("smt_bottomnav_button_input_checkAnswer");
    if (checkAnswerButton && !checkAnswerButton.disabled) {
        checkAnswerButton.click();
        return;
    }

    // If "Check Answer" is not available, try the "Next" button
    const nextButton = document.getElementById("smt_bottomnav_button_input_learningCorrect");
    if (nextButton && !nextButton.disabled) {
        nextButton.click();
        return;
    }

    console.log("No actionable button found");
}
