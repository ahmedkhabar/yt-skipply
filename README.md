# YTSkipply - Skip Ads Instantly & Automatically for YouTube

**YTSkipply** is a lightweight Google Chrome extension designed to enhance your YouTube viewing experience by automatically skipping advertisements. No more waiting for the "Skip Ad" button to appear—YTSkipply handles it for you instantly.

## 🚀 Features

- **Automatic Skipping**: Instantly skips ads by jumping to the end of the advertisement.
- **Auto-Click**: Automatically triggers the "Skip Ad" button the moment it becomes available.
- **Lightweight**: Minimal performance impact, running efficiently in the background.
- **Seamless**: Works silently without any configuration required.

## 🛠️ How to Install

Since this extension is in development, you can add it to your browser manually using Developer Mode.

### For Google Chrome / Brave / Microsoft Edge

1. **Download the Project**:
   - Clone this repository: `git clone https://github.com/ahmedkhabar/yt-skipply.git`
   - Or download the source code as a ZIP file and extract it to a folder on your computer.

2. **Open Extensions Page**:
   - In your browser, navigate to `chrome://extensions/` (or `edge://extensions/` for Microsoft Edge).

3. **Enable Developer Mode**:
   - Toggle the **Developer mode** switch in the top-right corner of the page.

4. **Load the Extension**:
   - Click the **Load unpacked** button.
   - Select the folder where you extracted/cloned the project (the folder containing `manifest.json`).

5. **Pin for Easy Access**:
   - Click the puzzle icon (Extensions) in your browser toolbar and pin **YTSkipply** for quick access.

## 📂 Project Structure

- `manifest.json`: Configuration file for the extension.
- `content.js`: The core logic that detects and skips ads on YouTube pages.
- `icons/`: Directory containing extension icons in various sizes.

## 🧠 How it Works

The extension uses a lightweight content script that monitors the YouTube video player. When it detects an advertisement (`ad-showing` class), it:
1. Automatically sets the video's current time to its duration (skipping the ad).
2. Simulates a real click on the "Skip Ad" button if one is present on the screen.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
Created by [Ahmed Khabar](https://github.com/ahmedkhabar)
