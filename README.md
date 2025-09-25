# InterALEKS

InterALEKS, formerly known as ALEKS Helper is a Chrome extension that enables the Enter key for answer submission on ALEKS (Assessment and Learning in Knowledge Spaces).

## 📖 Overview

InterALEKS is a Chrome extension that streamlines ALEKS by enabling Enter-key actions and smart redirects, with a configurable settings popup.

## ✨ Features

- **Enter key actions**: Press Enter to trigger the right action automatically
  - Priority order (when visible/enabled): Start Now → Submit → Start → Continue My Path → Check → Next → Try Another → Check → Continue
  - Safeguards: Disables Enter if a Calculator heading is visible or if `#ej9lur1fx5` is on-screen
- **Auto-redirects**: Detects session closed/cookie-block pages and sends you to your chosen login
- **Configurable**: Toggle Enter and Redirect behavior, set delayed re-check, and pick login method (ALEKS or McGraw Hill)
- **Modern popup UI**: Dark themed, compact, with Save/Reset and synced settings

## 🚀 Installation

### From Chrome Web Store
1. Visit the [InterALEKS extension page](https://chromewebstore.google.com/detail/aleks-helper/obfahomodlignbjbgmajolpjicingedm)
2. Click "Add to Chrome"
3. Confirm the installation when prompted

### Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension folder
5. The extension will be installed and ready to use

## 🎯 How to Use

1. Install the extension from the Chrome Web Store
2. Navigate to any ALEKS course or assessment
3. When you're ready to submit an answer, simply press the **Enter** key
4. Click the InterALEKS icon to open Settings:
   - Choose your login method: ALEKS or McGraw Hill
   - Enable/disable Enter key actions
   - Enable/disable auto-redirects and set the double-check delay
5. Press Enter when working in ALEKS. The extension will click the most relevant action based on the current page state (see priority list above).

### Redirect behavior and settings
- If ALEKS shows a page saying "Sorry, this page cannot be displayed due to your browser setting" or the title contains "Session Closed", InterALEKS redirects to your chosen login.
- Title-based detection: "ALEKS - Session Closed" and "ALEKS - Sorry, this page cannot be displayed due to your browser setting."
- Body-text fallback detection for reliability.
- Settings available in the popup:
  - Login method
  - Enable Enter actions
  - Block Enter when Calculator is visible
  - Enable auto-redirects
  - Redirect double-check delay (No delay, 2s, 3s, 5s)
  - Login targets: **ALEKS** `https://www.aleks.com/login`, **McGraw Hill** `https://my.mheducation.com/login/`

## 🔧 Technical Details

- **Manifest Version**: 3
- **Permissions**: Storage; host access limited to ALEKS (redirects navigate to McGraw Hill without injection)
- **Content Script**: Injects functionality into ALEKS pages
- **Browser Support**: Chrome and Chromium-based browsers

## 📁 File Structure

```
InterALEKS/
├── manifest.json          # Extension configuration
├── content.js            # Main functionality script (enter + redirects)
├── popup.html            # Settings UI (modern dark design)
├── popup.js              # Settings logic (load/save/reset via sync storage)
└── README.md             # This file
```

## 🛠️ Development

### Prerequisites
- Chrome browser
- Basic knowledge of JavaScript and Chrome extension development

### Local Development
1. Clone the repository
2. Make your changes to the source files
3. Load the extension in Chrome using Developer mode
4. Test your changes on ALEKS

### Building
No build process required - the extension uses vanilla JavaScript and can be loaded directly.

## 📝 Privacy

This extension:
- Does not collect or store any personal data
- Does not track user activity
- Only operates on ALEKS domains
- Does not communicate with external servers

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvements or find bugs, please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source. Feel free to use, modify, and distribute according to your needs.

## 📞 Support

For support, questions, or feedback:
- Email: loganl4business@gmail.com
- Chrome Web Store: [InterALEKS](https://chromewebstore.google.com/detail/aleks-helper/obfahomodlignbjbgmajolpjicingedm)

## 🔄 Version History

- **v1.1** (September 25, 2025)
  - New popup design with dark theme and sections
  - Settings: Enable Enter, Block Calculator, Enable Redirects, Redirect Delay, Login Method
  - Title-based redirect detection; configurable double-check delay
  - Expanded Enter action coverage and safer button prioritization

- **v1.0** (November 23, 2024)
  - Initial release with Enter key support and basic detection

## ⚠️ Disclaimer

This extension is not affiliated with or endorsed by ALEKS or McGraw Hill. It is a third-party tool designed to improve the user experience on the ALEKS platform.

---

**Made with ❤️ for ALEKS students**
