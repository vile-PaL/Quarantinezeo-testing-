# 📁 Category Icons for Help Command

## ✨ **AUTOMATIC ICON LOADING** ✨

This folder contains custom PNG icons for help command categories. Just upload your PNG files here and they'll **automatically be used** in your help commands! No code changes needed!

---

## 🎯 Quick Start

### Step 1: Create Your PNG Icons
Create PNG files with these **exact names**:

| Icon File | Category | Emoji |
|-----------|----------|-------|
| `extra-owner.png` | Extra Owner System | 👑 |
| `quarantine.png` | Quarantine & Moderation | 🔒 |
| `roles.png` | Role Management | 🎭 |
| `voice.png` | Voice Management | 🎤 |
| `channels.png` | Channel Management | 📺 |
| `media.png` | Media & Threads | 🎬 |
| `automod.png` | Auto-Moderation | 🛡️ |
| `protection.png` | Protection & Security | 🔐 |
| `server.png` | Server Management | 🏠 |
| `utility.png` | Utility Commands | 🔧 |
| `developer.png` | Developer Info | 💻 |

### Step 2: Upload to GitHub
**Option A - Web Interface:**
1. Navigate to the `category-icons/` folder on GitHub
2. Click **"Add file"** → **"Upload files"**
3. Drag and drop your PNG files
4. Commit changes
5. **Done!** Icons will automatically load

**Option B - Command Line:**
```bash
# Copy your PNG files to this folder
cp /path/to/your/icons/*.png category-icons/

# Commit and push
git add category-icons/*.png
git commit -m "Add custom category icons"
git push
```

### Step 3: Restart Your Bot
The bot will automatically detect and use your custom icons!

---

## 📐 Image Specifications

- **Format**: PNG (Portable Network Graphics)
- **Recommended Size**: 64x64 or 128x128 pixels
- **Transparency**: Supported (alpha channel)
- **Max File Size**: < 8MB (Discord limit)
- **Color Mode**: RGB or RGBA

---

## 🔧 How It Works

The bot uses an **automatic icon loader** (`categoryIconsLoader.js`) that:

1. ✅ **Detects** PNG files in this folder automatically
2. ✅ **Loads** them when help commands are used
3. ✅ **Falls back** to default bot avatar if PNG doesn't exist
4. ✅ **Caches** for performance
5. ✅ **Reloads** when files are updated

**No code changes needed!** Just upload your PNG files and the bot handles the rest.

---

## 🎨 Customization

Each category has customizable properties in `icons-config.json`:
- **filename**: PNG file name
- **emoji**: Category emoji
- **color**: Embed color (hex code)
- **description**: Category description

---

## 📊 Icon Status

To check which icons are loaded, the bot automatically:
- ✅ Detects available icons on startup
- ⚠️ Falls back to defaults for missing icons
- 📝 Logs icon status in console

---

## 🔄 Updating Icons

To update an icon:
1. Upload the new PNG file with the **same name**
2. Restart the bot (or wait for auto-reload)
3. The new icon will be used immediately

---

## ❓ Troubleshooting

**Icons not showing?**
- ✅ Check file names match exactly (case-sensitive)
- ✅ Ensure files are in `category-icons/` folder
- ✅ Verify files are PNG format (not JPEG)
- ✅ Restart the bot after uploading

**Icons too large?**
- ✅ Resize to 64x64 or 128x128 pixels
- ✅ Compress PNG files to reduce size
- ✅ Keep under 8MB

---

## 🌐 Icon Resources

Get free icons from:
- [Flaticon](https://www.flaticon.com/)
- [Icons8](https://icons8.com/)
- [Font Awesome](https://fontawesome.com/)
- [Material Icons](https://fonts.google.com/icons)

---

## 📝 Notes

- Placeholder `.placeholder` files mark categories without custom icons
- Delete `.placeholder` files and upload PNG files with the same base name
- Icons are automatically cached for performance
- The bot checks for icons on every help command use

---

**🎉 That's it! Your custom icons will now appear in help commands automatically!**
