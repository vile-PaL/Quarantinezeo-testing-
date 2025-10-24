# 📤 How to Upload Custom Category Icons to GitHub

## Quick Start Guide

Follow these simple steps to upload your custom PNG icons to GitHub:

### Step 1: Prepare Your Icons

Create or download 11 PNG icon files with these exact names:

- ✅ `extra-owner.png`
- ✅ `quarantine.png`
- ✅ `roles.png`
- ✅ `voice.png`
- ✅ `channels.png`
- ✅ `media.png`
- ✅ `automod.png`
- ✅ `protection.png`
- ✅ `server.png`
- ✅ `utility.png`
- ✅ `developer.png`

**Important**: Make sure the file names match exactly (lowercase, with hyphens)

### Step 2: Upload to GitHub (Web Interface)

1. Go to your repository on GitHub
2. Navigate to the `category-icons/` folder
3. Click the **"Add file"** button → **"Upload files"**
4. Drag and drop all 11 PNG files into the upload area
5. Add a commit message (e.g., "Add custom category icons")
6. Click **"Commit changes"**

### Step 3: Upload to GitHub (Git Command Line)

```bash
# Navigate to your repository
cd /path/to/your/repository

# Copy your PNG files to the category-icons folder
cp /path/to/your/icons/*.png category-icons/

# Add the files to git
git add category-icons/*.png

# Commit the changes
git commit -m "Add custom category icons"

# Push to GitHub
git push origin main
```

### Step 4: Using the Icons in Your Code

Once uploaded, you can reference the icons in your bot code:

```javascript
const fs = require('fs');
const path = require('path');
const { AttachmentBuilder } = require('discord.js');

// Load a category icon
const iconPath = path.join(__dirname, 'category-icons', 'extra-owner.png');
const iconFile = new AttachmentBuilder(iconPath);

// Use in embed
const embed = new EmbedBuilder()
    .setTitle('Extra Owner Commands')
    .setThumbnail('attachment://extra-owner.png');

await channel.send({ embeds: [embed], files: [iconFile] });
```

## Alternative: Upload via Desktop Client

1. Open GitHub Desktop
2. Navigate to your repository
3. Copy the PNG files into the `category-icons/` folder
4. The files will appear in GitHub Desktop's changes list
5. Write a commit message
6. Click **"Commit to main"**
7. Click **"Push origin"**

## Troubleshooting

### Issue: Files not showing up
- ✅ Check that file names are exactly as specified
- ✅ Make sure files are in the correct `category-icons/` folder
- ✅ Verify files are PNG format (not JPEG or other formats)

### Issue: Icons too large
- ✅ Resize icons to 64x64 or 128x128 pixels
- ✅ Use PNG compression tools to reduce file size
- ✅ Keep file sizes under 1MB each

### Issue: Icons don't display in Discord
- ✅ Ensure PNG files have proper transparency
- ✅ Check that the bot has permission to attach files
- ✅ Verify the file path in your code is correct

## Recommended Icon Sources

- **Flaticon**: https://www.flaticon.com/
- **Icons8**: https://icons8.com/
- **Font Awesome**: https://fontawesome.com/
- **Material Icons**: https://fonts.google.com/icons
- **Custom Design**: Use Figma, Canva, or Photoshop

## Next Steps

After uploading your icons:
1. Update your bot code to use the new PNG files
2. Test the icons in Discord
3. Adjust sizes or designs as needed
4. Share your custom icons with your community!

---

**Need Help?** Check the main README.md in this folder for more details.
