# 🚀 Quick Start - Custom Category Icons

## **3 SIMPLE STEPS TO ADD CUSTOM ICONS**

### Step 1: Create PNG Icons

Create PNG files with these **EXACT** names:

```
extra-owner.png     → Extra Owner System
quarantine.png      → Quarantine & Moderation
roles.png           → Role Management
voice.png           → Voice Management
channels.png        → Channel Management
media.png           → Media & Threads
automod.png         → Auto-Moderation
protection.png      → Protection & Security
server.png          → Server Management
utility.png         → Utility Commands
developer.png       → Developer Info
```

**Specs**: 64x64 or 128x128 pixels, PNG format, < 8MB

---

### Step 2: Upload to GitHub

#### Method A: GitHub Web Interface
1. Go to your repository on GitHub
2. Navigate to `category-icons/` folder
3. Click **"Add file"** → **"Upload files"**
4. Drag & drop your PNG files
5. Click **"Commit changes"**

#### Method B: Git Command Line
```bash
cd /path/to/your/repo
cp /path/to/your/icons/*.png category-icons/
git add category-icons/*.png
git commit -m "Add custom category icons"
git push
```

---

### Step 3: Restart Bot

Restart your bot and the icons will **automatically** be used!

```bash
# The bot will show in console:
✅ Category icons config loaded successfully
```

---

## ✅ That's It!

Your custom icons now appear in help command embeds automatically!

## 🧪 Test It

1. Run the help command: `/help` or `!help`
2. Select a category from the dropdown menu
3. See your custom icon as the thumbnail!

## 🔧 How It Works

The bot **automatically**:
- ✅ Detects PNG files in the `category-icons/` folder
- ✅ Loads them when help commands are used
- ✅ Falls back to default if PNG is missing
- ✅ Caches for performance

**No code changes needed!**

---

## 📝 Need Help?

- Read `README.md` for detailed information
- Check `UPLOAD-GUIDE.md` for step-by-step instructions
- See `icons-config.json` for category configuration

## 🎨 Icon Resources

Get free icons:
- [Flaticon](https://www.flaticon.com/)
- [Icons8](https://icons8.com/)
- [Font Awesome](https://fontawesome.com/)
- [Material Icons](https://fonts.google.com/icons)

---

**🎉 Enjoy your custom help command icons!**
