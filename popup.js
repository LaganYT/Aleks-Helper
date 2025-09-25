const el = (id) => document.getElementById(id);

const DEFAULTS = {
    interaleksLoginMethod: 'aleks',
    interaleksEnableEnter: true,
    interaleksBlockCalculator: true,
    interaleksEnableRedirect: true,
    interaleksRedirectDelayMs: 3000,
};

function showStatus(message) {
    const node = el('status');
    if (node) node.textContent = message;
}

async function loadSettings() {
    try {
        const data = await chrome.storage.sync.get(DEFAULTS);
        el('login-method').value = data.interaleksLoginMethod;
        el('enable-enter').checked = Boolean(data.interaleksEnableEnter);
        el('block-calculator').checked = Boolean(data.interaleksBlockCalculator);
        el('enable-redirect').checked = Boolean(data.interaleksEnableRedirect);
        el('redirect-delay').value = String(data.interaleksRedirectDelayMs);
    } catch (err) {
        console.error('Failed to load settings', err);
    }
}

async function saveSettings() {
    try {
        const payload = {
            interaleksLoginMethod: el('login-method').value,
            interaleksEnableEnter: el('enable-enter').checked,
            interaleksBlockCalculator: el('block-calculator').checked,
            interaleksEnableRedirect: el('enable-redirect').checked,
            interaleksRedirectDelayMs: Number(el('redirect-delay').value) || 0,
        };
        await chrome.storage.sync.set(payload);
        showStatus('Saved');
        setTimeout(() => showStatus(''), 1200);
    } catch (err) {
        console.error('Failed to save settings', err);
        showStatus('Failed to save');
    }
}

async function resetSettings() {
    try {
        await chrome.storage.sync.set(DEFAULTS);
        await loadSettings();
        showStatus('Reset to defaults');
        setTimeout(() => showStatus(''), 1200);
    } catch (err) {
        console.error('Failed to reset settings', err);
        showStatus('Failed to reset');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    el('save')?.addEventListener('click', saveSettings);
    el('reset')?.addEventListener('click', resetSettings);
});


