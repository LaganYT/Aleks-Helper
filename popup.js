const RADIO_SELECTOR = 'input[name="login"]';
const SAVE_BUTTON_ID = 'save';

function getSelectedLoginChoice() {
    const radios = document.querySelectorAll(RADIO_SELECTOR);
    for (const radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null;
}

function setSelectedLoginChoice(value) {
    const radios = document.querySelectorAll(RADIO_SELECTOR);
    for (const radio of radios) {
        radio.checked = radio.value === value;
    }
}

function showStatus(message) {
    const el = document.querySelector('#status small');
    if (el) el.textContent = message;
}

async function loadPreference() {
    try {
        const { interaleksLoginMethod } = await chrome.storage.sync.get({ interaleksLoginMethod: 'aleks' });
        setSelectedLoginChoice(interaleksLoginMethod);
    } catch (err) {
        console.error('Failed to load preference', err);
    }
}

async function savePreference() {
    const value = getSelectedLoginChoice() || 'aleks';
    try {
        await chrome.storage.sync.set({ interaleksLoginMethod: value });
        showStatus('Saved');
        setTimeout(() => showStatus(''), 1200);
    } catch (err) {
        console.error('Failed to save preference', err);
        showStatus('Failed to save');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadPreference();
    document.getElementById(SAVE_BUTTON_ID)?.addEventListener('click', savePreference);
});


