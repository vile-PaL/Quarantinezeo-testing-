# Category Icons for Help Command

This folder contains custom PNG icons for each help command category.

## File Naming Convention

Each category has its own PNG file named after the category:

| Category | File Name | Description |
|----------|-----------|-------------|
| Extra Owner | `extra-owner.png` | Extra owner system commands |
| Quarantine | `quarantine.png` | Quarantine management commands |
| Roles | `roles.png` | Role management commands |
| Voice | `voice.png` | Voice channel management commands |
| Channels | `channels.png` | Text/Voice channel commands |
| Media | `media.png` | Media and thread management |
| AutoMod | `automod.png` | Auto-moderation commands |
| Protection | `protection.png` | Security and protection commands |
| Server | `server.png` | Server management commands |
| Utility | `utility.png` | Utility and information commands |
| Developer | `developer.png` | Developer information |

## Image Specifications

- **Format**: PNG (Portable Network Graphics)
- **Recommended Size**: 64x64 pixels or 128x128 pixels
- **Transparency**: Supported (alpha channel)
- **Color Mode**: RGB or RGBA

## How to Add/Update Icons

1. Create or obtain your custom PNG icon
2. Name it according to the category (see table above)
3. Upload/replace the file in this folder
4. The bot code will automatically reference these icons

## Usage in Code

To reference these icons in your bot code:

```javascript
const iconPath = './category-icons/extra-owner.png';
// or
const iconPath = path.join(__dirname, 'category-icons', 'extra-owner.png');
```

## GitHub Upload Instructions

1. Navigate to this folder in your GitHub repository
2. Click "Add file" → "Upload files"
3. Drag and drop your PNG files
4. Ensure they follow the naming convention above
5. Commit the changes

---

**Note**: Placeholder `.gitkeep` files are included to maintain folder structure. Replace them with actual PNG files when ready.
