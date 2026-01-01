# 🛒 Bazaar E-Commerce

A modern, responsive e-commerce platform built with React and TypeScript. Browse products, view details, and enjoy a seamless shopping experience with a beautiful, user-friendly interface.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript&logoColor=white)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, responsive design with Tailwind CSS-inspired styling
- 🛍️ **Product Catalog** - Browse featured products with detailed information
- 🔍 **Product Search** - Search functionality for finding products quickly
- 📱 **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- 🎯 **Product Details** - Comprehensive product pages with ratings, descriptions, and pricing
- 🏷️ **Categories** - Organized product categories for easy navigation
- ⚡ **Fast Performance** - Optimized with Vite for lightning-fast builds and hot reload
- 🎭 **Hero Slider** - Eye-catching promotional banners
- 🔐 **Authentication** - Login and registration pages ready for integration

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bazaar-ecommerce.git
cd bazaar-ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment

### GitHub Pages

This project is automatically deployed to GitHub Pages using GitHub Actions. The site will be available at:

**https://basirulakhlakborno.github.io/bazaar-ecommerce/**

#### Automatic Deployment

Every time you push to the `main` branch, GitHub Actions will automatically:
1. Build the project
2. Deploy it to GitHub Pages

#### Manual Deployment Setup

If you need to set up GitHub Pages manually:

1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select:
   - **Source**: `Deploy from a branch`
   - **Branch**: `gh-pages` / `/ (root)`
4. **Important**: Do NOT set a custom domain - use GitHub's default domain
5. The workflow will automatically deploy on the next push to `main`

#### Domain Configuration

This project is configured to use GitHub's default domain:
- **Production URL**: `https://basirulakhlakborno.github.io/bazaar-ecommerce/`
- All paths are configured for the `/bazaar-ecommerce/` subdirectory
- Do not configure a custom domain as it will cause path issues

#### Local Testing

To test the production build locally with the correct base path:

```bash
npm run build
npm run preview
```

Then visit `http://localhost:4173/bazaar-ecommerce/`

## 🏗️ Project Structure

```
bazaar-ecommerce/
├── public/
│   ├── logo.svg              # Main logo
│   └── logo-small.svg        # Small logo (favicon)
├── src/
│   ├── components/
│   │   ├── Header/           # Navigation header
│   │   ├── Footer/           # Site footer
│   │   ├── BottomNav/        # Mobile bottom navigation
│   │   ├── ProductSection/   # Product grid display
│   │   ├── CategorySidebar/  # Category navigation
│   │   ├── HeroSlider/       # Hero banner slider
│   │   ├── Menu/             # Mobile menu
│   │   └── LoadingScreen/    # Loading animation
│   ├── pages/
│   │   ├── Home/             # Homepage
│   │   ├── ProductDetails/   # Product detail page
│   │   └── Auth/             # Authentication pages
│   ├── data/
│   │   └── products.js       # Product data
│   ├── App.jsx               # Main app component
│   └── main.jsx              # Entry point
├── package.json
└── README.md
```

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next-generation frontend tooling
- **React Router DOM** - Client-side routing
- **Less** - CSS preprocessor for styling
- **Ant Design Icons** - Icon library

## 🎨 Key Components

### Product Section
Displays featured products in a responsive grid layout with product cards showing images, names, brands, and prices.

### Product Details
Comprehensive product pages featuring:
- High-quality product images
- Product information (name, brand, category)
- Star ratings
- Detailed descriptions
- Pricing with discount badges
- Related products

### Category Sidebar
Organized product categories including:
- Electronics
- Mobile & Accessories
- Fashion
- Home & Kitchen
- Health & Beauty
- Sports & Fitness
- Gifts
- All Products

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1200px+)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌟 Features in Detail

### Product Catalog
- Grid layout with hover effects
- Discount badges for sale items
- Original and discounted pricing
- Product ratings display

### Navigation
- Sticky header with search functionality
- Mobile-friendly bottom navigation
- Category sidebar for easy browsing
- Responsive mobile menu

### User Experience
- Smooth page transitions
- Loading screens
- Error handling
- Accessible design (ARIA labels, semantic HTML)

## 🚧 Future Enhancements

- [ ] Shopping cart functionality
- [ ] User authentication integration
- [ ] Payment gateway integration
- [ ] Product filtering and sorting
- [ ] Wishlist feature
- [ ] Product reviews and ratings
- [ ] Order tracking
- [ ] Admin dashboard
- [ ] Multi-language support
- [ ] Dark mode

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For questions or support, please open an issue in the GitHub repository.

---

## 👨‍💻 Made By

**Basirul Akhlak Borno**

- 🌐 Website: [basirulakhlak.tech](https://basirulakhlak.tech/)
- 💻 GitHub: [@basirulakhlakborno](https://github.com/basirulakhlakborno)

Made with ❤️ using React and Vite
