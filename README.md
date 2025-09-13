# ShopEasy - React Shopping Cart Application

A modern, responsive e-commerce shopping cart application built with React, featuring a sleek UI and seamless shopping experience.

## 🚀 Live Demo

[View Live Application](https://shopping-cart-kappa-tan.vercel.app)

## ✨ Features

- **Product Catalog**: Browse products fetched from FakeStore API
- **Shopping Cart**: Add, remove, and update item quantities
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Cart Updates**: Live cart count and total calculations
- **Modern UI**: Gradient backgrounds, smooth animations, and glassmorphism effects
- **Context API**: Centralized state management for cart operations
- **Loading States**: Skeleton loaders for better user experience
- **Error Handling**: Graceful error states with retry functionality

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **React Router DOM** - Navigation and routing
- **Context API** - State management
- **CSS3** - Styling with modern features (Grid, Flexbox, Animations)
- **FakeStore API** - Product data source
- **Vite** - Build tool and development server
- **Vercel** - Deployment platform

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:Sibonginhlanhla/shopping-cart.git
   cd shopping-cart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Key Components

### App.jsx
- Implements React Context for global state management
- Provides cart state and operations to all child components
- Handles routing with React Router

### Shop.jsx
- Fetches products from FakeStore API
- Displays products in a responsive grid layout
- Handles quantity selection and add-to-cart functionality
- Includes loading skeletons and error states

### Cart.jsx
- Displays cart items with quantity controls
- Calculates subtotals, tax, shipping, and final total
- Provides checkout simulation
- Handles item removal and cart clearing

### Navbar.jsx
- Responsive navigation with mobile menu
- Dynamic cart badge with item count
- Smooth scroll effects and active link highlighting

## 🎨 Design Features

- **Modern Gradient Backgrounds** - Eye-catching visual appeal
- **Glassmorphism Effects** - Semi-transparent elements with blur
- **Smooth Animations** - Hover effects, loading states, and transitions
- **Mobile-First Design** - Responsive across all device sizes
- **Consistent Spacing** - Well-structured layout with proper typography

## 🌐 API Integration

The application integrates with the [FakeStore API](https://fakestoreapi.com/) to fetch product data:

- **Endpoint**: `https://fakestoreapi.com/products`
- **Data**: Product information including title, price, description, image, and category
- **Error Handling**: Graceful fallbacks when API is unavailable

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- **Desktop** (1200px+) - Full layout with side-by-side content
- **Tablet** (768px - 1199px) - Adjusted grid layouts
- **Mobile** (320px - 767px) - Stacked layouts with mobile navigation

## 🎭 State Management

Uses React Context API for:

- **Cart State** - Centralized cart items management
- **Cart Operations** - Add, update, remove, and clear functions
- **Cross-Component Communication** - Shared state between Navbar, Shop, and Cart

## 🙏 Acknowledgments

- [FakeStore API](https://fakestoreapi.com/) for providing product data
- [Vercel](https://vercel.com/) for hosting
- React community for excellent documentation and resources