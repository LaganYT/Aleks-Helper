# ALEKS Helper

A Chrome extension that enables the Enter key for answer submission on ALEKS (Assessment and Learning in Knowledge Spaces).

## 📖 Overview

ALEKS Helper is a simple but useful Chrome extension that allows you to press the Enter key when submitting answers on the ALEKS platform. This improves the user experience by providing a more intuitive way to submit answers without having to click the submit button with your mouse.

## ✨ Features

- **Enter Key Support**: Press Enter to submit your answers on ALEKS
- **Smart Button Detection**: Automatically detects and clicks the appropriate button (Check Answer or Next)
- **Non-intrusive**: Works seamlessly in the background without affecting ALEKS functionality
- **Lightweight**: Minimal resource usage with only 3.75KiB size

## 🚀 Installation

### From Chrome Web Store
1. Visit the [ALEKS Helper extension page](https://chromewebstore.google.com/detail/aleks-helper/obfahomodlignbjbgmajolpjicingedm)
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
4. The extension will automatically click the appropriate button:
   - "Check Answer" button (if available and not disabled)
   - "Next" button (if "Check Answer" is not available)

## 🔧 Technical Details

- **Manifest Version**: 3
- **Permissions**: Only requires access to ALEKS domains (`https://*.aleks.com/*`)
- **Content Script**: Injects functionality into ALEKS pages
- **Browser Support**: Chrome and Chromium-based browsers

## 📁 File Structure

```
ALEKS Helper/
├── manifest.json          # Extension configuration
├── content.js            # Main functionality script
└── README.md            # This file
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
- Chrome Web Store: [ALEKS Helper](https://chromewebstore.google.com/detail/aleks-helper/obfahomodlignbjbgmajolpjicingedm)

## 🔄 Version History

- **v1.0** (November 23, 2024)
  - Initial release
  - Enter key support for ALEKS answer submission
  - Smart button detection for Check Answer and Next buttons

## ⚠️ Disclaimer

This extension is not affiliated with or endorsed by ALEKS or McGraw Hill. It is a third-party tool designed to improve the user experience on the ALEKS platform.

---

**Made with ❤️ for ALEKS students**
