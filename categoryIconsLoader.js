const fs = require('fs');
const path = require('path');
const { AttachmentBuilder } = require('discord.js');

/**
 * Category Icons Loader
 * Automatically loads custom PNG icons from the category-icons folder
 * Falls back to default if PNG files don't exist
 */

class CategoryIconsLoader {
    constructor() {
        this.iconsPath = path.join(__dirname, 'category-icons');
        this.iconConfig = this.loadIconConfig();
        this.cache = new Map(); // Cache for icon file checks
    }

    /**
     * Load the icons configuration file
     */
    loadIconConfig() {
        try {
            const configPath = path.join(this.iconsPath, 'icons-config.json');
            if (fs.existsSync(configPath)) {
                const config = require(configPath);
                console.log('✅ Category icons config loaded successfully');
                return config;
            }
        } catch (error) {
            console.warn('⚠️ Could not load icons config:', error.message);
        }
        return null;
    }

    /**
     * Check if a PNG icon exists for a category
     * @param {string} categoryKey - The category key (e.g., 'extra_owner', 'quarantine')
     * @returns {boolean}
     */
    iconExists(categoryKey) {
        // Check cache first
        if (this.cache.has(categoryKey)) {
            return this.cache.get(categoryKey);
        }

        if (!this.iconConfig || !this.iconConfig.categories[categoryKey]) {
            this.cache.set(categoryKey, false);
            return false;
        }

        const filename = this.iconConfig.categories[categoryKey].filename;
        const iconPath = path.join(this.iconsPath, filename);
        const exists = fs.existsSync(iconPath);
        
        this.cache.set(categoryKey, exists);
        return exists;
    }

    /**
     * Get the file path for a category icon
     * @param {string} categoryKey - The category key
     * @returns {string|null}
     */
    getIconPath(categoryKey) {
        if (!this.iconExists(categoryKey)) {
            return null;
        }

        const filename = this.iconConfig.categories[categoryKey].filename;
        return path.join(this.iconsPath, filename);
    }

    /**
     * Get an AttachmentBuilder for a category icon
     * @param {string} categoryKey - The category key
     * @returns {AttachmentBuilder|null}
     */
    getIconAttachment(categoryKey) {
        const iconPath = this.getIconPath(categoryKey);
        if (!iconPath) {
            return null;
        }

        try {
            const attachment = new AttachmentBuilder(iconPath);
            const filename = this.iconConfig.categories[categoryKey].filename;
            return attachment.setName(filename);
        } catch (error) {
            console.error(`Error creating attachment for ${categoryKey}:`, error.message);
            return null;
        }
    }

    /**
     * Get the attachment name for embedding in Discord
     * @param {string} categoryKey - The category key
     * @returns {string|null}
     */
    getAttachmentName(categoryKey) {
        if (!this.iconConfig || !this.iconConfig.categories[categoryKey]) {
            return null;
        }
        return this.iconConfig.categories[categoryKey].filename;
    }

    /**
     * Get category emoji
     * @param {string} categoryKey - The category key
     * @returns {string}
     */
    getCategoryEmoji(categoryKey) {
        if (this.iconConfig && this.iconConfig.categories[categoryKey]) {
            return this.iconConfig.categories[categoryKey].emoji || '📋';
        }
        return '📋';
    }

    /**
     * Get category color
     * @param {string} categoryKey - The category key
     * @returns {string}
     */
    getCategoryColor(categoryKey) {
        if (this.iconConfig && this.iconConfig.categories[categoryKey]) {
            return this.iconConfig.categories[categoryKey].color || '#af7cd2';
        }
        return '#af7cd2';
    }

    /**
     * Map category string to config key
     * @param {string} category - The category string from the select menu
     * @returns {string}
     */
    mapCategoryToKey(category) {
        const mapping = {
            'category_extra_owner': 'extra_owner',
            'category_quarantine': 'quarantine',
            'category_roles': 'roles',
            'category_voice': 'voice',
            'category_channels': 'channels',
            'category_media': 'media',
            'category_automod': 'automod',
            'category_protection': 'protection',
            'category_server': 'server',
            'category_utility': 'utility',
            'category_developer': 'developer'
        };
        return mapping[category] || null;
    }

    /**
     * Clear the cache (useful when icons are updated)
     */
    clearCache() {
        this.cache.clear();
        console.log('🔄 Category icons cache cleared');
    }

    /**
     * Reload configuration and clear cache
     */
    reload() {
        this.iconConfig = this.loadIconConfig();
        this.clearCache();
        console.log('🔄 Category icons configuration reloaded');
    }

    /**
     * Get list of all available icons
     * @returns {Array}
     */
    getAvailableIcons() {
        if (!this.iconConfig) return [];

        const available = [];
        for (const [key, config] of Object.entries(this.iconConfig.categories)) {
            if (this.iconExists(key)) {
                available.push({
                    key,
                    name: config.name,
                    filename: config.filename,
                    emoji: config.emoji
                });
            }
        }
        return available;
    }

    /**
     * Get statistics about available icons
     * @returns {object}
     */
    getStats() {
        if (!this.iconConfig) {
            return { total: 0, available: 0, missing: 0 };
        }

        const total = Object.keys(this.iconConfig.categories).length;
        const available = this.getAvailableIcons().length;
        const missing = total - available;

        return { total, available, missing };
    }
}

// Export singleton instance
module.exports = new CategoryIconsLoader();
