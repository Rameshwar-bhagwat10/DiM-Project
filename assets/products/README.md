# Product Images

This folder is designated for product images used in the Moungiri Store website.

## Current Implementation

The website currently uses high-quality Unsplash images with the following features:

### Image Sources
- **Primary**: Unsplash API with optimized parameters (400x300, auto-format, q=80)
- **Fallback**: Category-based fallback images
- **Error Handling**: Automatic fallback system for failed image loads

### Supported Products
- Rice
- Wheat Flour  
- Sugar
- Tea Powder
- Biscuits
- Chips
- Detergent
- Soap
- Cold Drink
- Water Bottle

### Image Optimization Features
- Lazy loading for better performance
- Responsive sizing (400x300 optimized for web)
- Auto-format for best browser support
- Quality optimization (q=80)
- Shimmer loading animation
- Error handling with category fallbacks

### Future Enhancements
To use local images instead of Unsplash:
1. Add product images to this folder
2. Update the `getProductImage()` function in products.html
3. Use format: `assets/products/[product-name].jpg`

### Image Guidelines
- Recommended size: 400x300 pixels
- Format: JPG or WebP for best performance
- Quality: High quality, well-lit product photos
- Background: Clean, preferably white or neutral