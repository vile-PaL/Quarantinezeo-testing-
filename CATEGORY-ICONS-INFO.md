# 📁 Category Icons Folder Structure

## What Was Created

A complete folder structure for uploading custom PNG icons for help command categories.

### Location
```
/workspace/category-icons/
```

### Files Created

#### Documentation Files
- **README.md** - Complete overview of the icon system and specifications
- **UPLOAD-GUIDE.md** - Step-by-step instructions for uploading PNG files to GitHub
- **icons-config.json** - JSON configuration mapping categories to icon files

#### Placeholder Files (Replace with actual PNGs)
- `extra-owner.png.placeholder` → Replace with `extra-owner.png`
- `quarantine.png.placeholder` → Replace with `quarantine.png`
- `roles.png.placeholder` → Replace with `roles.png`
- `voice.png.placeholder` → Replace with `voice.png`
- `channels.png.placeholder` → Replace with `channels.png`
- `media.png.placeholder` → Replace with `media.png`
- `automod.png.placeholder` → Replace with `automod.png`
- `protection.png.placeholder` → Replace with `protection.png`
- `server.png.placeholder` → Replace with `server.png`
- `utility.png.placeholder` → Replace with `utility.png`
- `developer.png.placeholder` → Replace with `developer.png`

## Quick Start

### 1. Prepare Your PNG Icons
Create 11 PNG icons (64x64 or 128x128 pixels) with the exact names listed above.

### 2. Upload to GitHub
**Option A - Web Interface:**
1. Navigate to `category-icons/` folder on GitHub
2. Click "Add file" → "Upload files"
3. Drag and drop your PNG files
4. Commit changes

**Option B - Command Line:**
```bash
git add category-icons/*.png
git commit -m "Add custom category icons"
git push
```

### 3. Use in Code
```javascript
const path = require('path');
const { AttachmentBuilder } = require('discord.js');

// Load icon configuration
const iconConfig = require('./category-icons/icons-config.json');

// Get icon path for a specific category
const iconPath = path.join(__dirname, 'category-icons', iconConfig.categories.roles.filename);
const iconFile = new AttachmentBuilder(iconPath);

// Use in embed
const embed = new EmbedBuilder()
    .setTitle('Role Management Commands')
    .setThumbnail('attachment://roles.png');

await channel.send({ embeds: [embed], files: [iconFile] });
```

## Category Reference

| Category ID | File Name | Emoji | Description |
|-------------|-----------|-------|-------------|
| `extra_owner` | extra-owner.png | 👑 | Extra owner commands |
| `quarantine` | quarantine.png | 🔒 | Quarantine system |
| `roles` | roles.png | 🎭 | Role management |
| `voice` | voice.png | 🎤 | Voice management |
| `channels` | channels.png | 📺 | Channel management |
| `media` | media.png | 🎬 | Media & threads |
| `automod` | automod.png | 🛡️ | Auto-moderation |
| `protection` | protection.png | 🔐 | Protection & security |
| `server` | server.png | 🏠 | Server management |
| `utility` | utility.png | 🔧 | Utility commands |
| `developer` | developer.png | 💻 | Developer info |

## File Structure
```
category-icons/
├── README.md                      # Main documentation
├── UPLOAD-GUIDE.md                # Upload instructions
├── icons-config.json              # Category configuration
├── .gitkeep                       # Keeps folder in git
├── extra-owner.png.placeholder    # Replace with PNG
├── quarantine.png.placeholder     # Replace with PNG
├── roles.png.placeholder          # Replace with PNG
├── voice.png.placeholder          # Replace with PNG
├── channels.png.placeholder       # Replace with PNG
├── media.png.placeholder          # Replace with PNG
├── automod.png.placeholder        # Replace with PNG
├── protection.png.placeholder     # Replace with PNG
├── server.png.placeholder         # Replace with PNG
├── utility.png.placeholder        # Replace with PNG
└── developer.png.placeholder      # Replace with PNG
```

## Next Steps

1. ✅ Folder structure is ready
2. 📝 Read the UPLOAD-GUIDE.md in the category-icons folder
3. 🎨 Create or download your custom PNG icons
4. 📤 Upload them to GitHub
5. 💻 Update your bot code to use the icons
6. 🚀 Deploy and enjoy your custom category icons!

## Benefits

✨ **Easy to Upload** - Clear file naming makes GitHub uploads simple  
📁 **Organized** - All icons in one dedicated folder  
📚 **Well Documented** - Complete guides and examples  
🔧 **Developer Friendly** - JSON config for programmatic access  
🎨 **Customizable** - Replace with your own brand designs  

---

**Location**: `/workspace/category-icons/`  
**Created**: October 24, 2025  
**Status**: Ready for PNG uploads
