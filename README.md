# 🎬 MovieApp - Cross-Platform Movie Discovery App

A modern, feature-rich movie discovery application built with React Native and Expo, featuring a beautiful dark theme UI with gradient accents. Browse, search, and save your favorite movies with real-time trending data and detailed movie information.

![React Native](https://img.shields.io/badge/React%20Native-0.76.7-blue.svg)
![Expo](https://img.shields.io/badge/Expo-~52.0.38-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC.svg)

## ✨ Features

### 🏠 **Home Screen**

- **Trending Movies Carousel**: Horizontal scrollable list of currently trending movies
- **Latest Movies Grid**: Browse the latest popular movies in a responsive grid layout
- **Search Integration**: Quick access to movie search functionality
- **Beautiful UI**: Dark theme with gradient highlights and smooth animations

### 🔍 **Search & Discovery**

- **Real-time Search**: Search movies with live results from The Movie Database (TMDB)
- **Search Analytics**: Track popular search terms using Appwrite database
- **Smart Suggestions**: Trending searches based on user behavior
- **Advanced Filtering**: Search by title, genre, and release year

### 💾 **Personal Collection**

- **Save Movies**: Bookmark favorite movies for later viewing
- **Organized Lists**: Manage saved movies in a clean, accessible interface
- **Persistent Storage**: Your saved movies are stored securely

### 👤 **User Profile**

- **Personalized Experience**: User profile management
- **Viewing History**: Track your movie browsing patterns
- **Preferences**: Customize app settings and preferences

### 🎯 **Movie Details**

- **Comprehensive Information**: Detailed movie pages with cast, crew, and synopsis
- **High-Quality Images**: HD posters and backdrop images
- **Ratings & Reviews**: TMDB ratings and user reviews
- **Related Movies**: Discover similar movies based on your interests

## 🛠 Tech Stack

### **Frontend & Mobile**

- **React Native 0.76.7**: Cross-platform mobile development
- **Expo 52.0.38**: Development platform and deployment
- **TypeScript 5.3.3**: Type-safe JavaScript development
- **Expo Router 4.0.18**: File-based navigation system

### **Styling & UI**

- **NativeWind 4.1.23**: Utility-first CSS framework for React Native
- **TailwindCSS 3.4.17**: Modern CSS framework with custom color scheme
- **Custom Design System**: Dark theme with purple/blue gradient accents
- **Responsive Design**: Optimized for all screen sizes

### **Backend & Data**

- **The Movie Database (TMDB) API**: Real-time movie data and images
- **Appwrite**: Backend-as-a-Service for user data and search analytics
- **React Native Appwrite 0.7.2**: Official Appwrite SDK for React Native

### **Navigation & Routing**

- **Expo Router**: File-based routing system
- **React Navigation**: Tab navigation and stack navigation
- **Deep Linking**: Support for custom URL schemes

### **Performance & Optimization**

- **React Native Reanimated 3.16.1**: High-performance animations
- **React Native Gesture Handler 2.20.2**: Smooth gesture interactions
- **Optimized Image Loading**: Lazy loading and caching for movie posters

## 🏗 Project Structure

```text
movie-app/
├── app/                          # Main application screens (Expo Router)
│   ├── (tabs)/                  # Tab-based navigation screens
│   │   ├── _layout.tsx          # Tab navigation layout and configuration
│   │   ├── index.tsx            # Home screen with trending and latest movies
│   │   ├── search.tsx           # Movie search functionality
│   │   ├── saved.tsx            # User's saved movies list
│   │   └── profile.tsx          # User profile and settings
│   ├── movies/
│   │   └── [id].tsx             # Dynamic movie details screen
│   ├── _layout.tsx              # Root layout configuration
│   └── globals.css              # Global Tailwind CSS styles
│
├── components/                   # Reusable UI components
│   ├── MovieCard.tsx            # Movie grid item component
│   ├── SearchBar.tsx            # Search input with styling
│   └── TrendingCard.tsx         # Trending movie carousel item
│
├── services/                     # API and data services
│   ├── api.ts                   # TMDB API integration and movie fetching
│   ├── appwrite.ts              # Appwrite backend services and analytics
│   └── useFetch.ts              # Custom React hook for data fetching
│
├── constants/                    # App constants and assets
│   ├── icons.ts                 # Icon asset exports
│   └── images.ts                # Image asset exports
│
├── interfaces/                   # TypeScript type definitions
│   └── interfaces.d.ts          # Movie, User, and API response types
│
├── assets/                       # Static assets
│   ├── icons/                   # App icons and UI elements
│   ├── images/                  # Background images and branding
│   └── fonts/                   # Custom font files
│
└── types/                        # Additional TypeScript declarations
    └── images.d.ts              # Image import type declarations
```

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+ installed
- Expo CLI installed globally: `npm install -g @expo/cli`
- iOS Simulator (macOS) or Android Emulator
- TMDB API key from [The Movie Database](https://www.themoviedb.org/settings/api)
- Appwrite project setup for analytics (optional)

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/slimkiddjudas/MovieApp.git
   cd movie-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory:

   ```env
   EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key_here
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
   EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id
   ```

4. **Start the development server**

   ```bash
   npx expo start
   ```

5. **Run on your device**

   - Scan the QR code with Expo Go app (iOS/Android)
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Press `w` for web browser

### **Available Scripts**

```bash
npm start          # Start Expo development server
npm run android    # Run on Android emulator
npm run ios        # Run on iOS simulator  
npm run web        # Run in web browser
npm test           # Run Jest tests
npm run lint       # Run ESLint code analysis
```

## 🎨 Design System

### **Color Palette**

```javascript
colors: {
  primary: '#030014',      // Deep space blue (main background)
  secondary: '#151312',    // Dark charcoal (secondary backgrounds)
  light: {
    100: '#D6C6FF',       // Light purple (primary text)
    200: '#A8B5DB',       // Muted blue (secondary text)
    300: '#9CA4AB'        // Light gray (disabled text)
  },
  dark: {
    100: '#221F3D',       // Dark purple (cards)
    200: '#0F0D23',       // Darker blue (nav bar)
  },
  accent: '#AB8BFF'       // Purple accent (highlights)
}
```

### **Typography**

- **Primary Font**: System default with custom weights
- **Monospace**: SpaceMono for special text elements
- **Font Weights**: 400 (regular), 600 (semibold), 700 (bold)

## 🔧 Configuration Files

### **Expo Configuration** (`app.json`)

- App metadata and build configuration
- Platform-specific settings for iOS and Android
- Asset and icon configuration

### **TypeScript Configuration** (`tsconfig.json`)

- Strict type checking enabled
- Path mapping for clean imports (`@/components`, `@/services`)
- React Native and Expo type definitions

### **Tailwind Configuration** (`tailwind.config.js`)

- Custom color theme matching app design
- NativeWind preset for React Native compatibility
- Responsive breakpoints and utilities

## 📱 Platform Support

- **iOS**: iPhone and iPad (iOS 13.0+)
- **Android**: Android 6.0+ (API level 23+)
- **Web**: Modern browsers with React Native Web

## 🔄 API Integration

### **The Movie Database (TMDB)**

- Movie search and discovery
- Trending movies data
- Detailed movie information
- High-resolution movie posters and backdrops

### **Appwrite Backend**

- User search analytics and trending data
- Saved movies storage
- User preference management
- Real-time data synchronization

## 🧪 Testing

```bash
npm test                 # Run all tests
npm test -- --watch     # Run tests in watch mode
npm test -- --coverage  # Generate coverage report
```

## 🚀 Deployment

### **Development Build**

```bash
expo build:android      # Build APK for Android
expo build:ios          # Build IPA for iOS
```

### **Production Build**

```bash
eas build --platform android    # EAS Build for Android
eas build --platform ios        # EAS Build for iOS
eas submit                       # Submit to app stores
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing comprehensive movie data
- [Expo](https://expo.dev/) for the excellent development platform
- [Appwrite](https://appwrite.io/) for backend services
- [NativeWind](https://www.nativewind.dev/) for bringing Tailwind CSS to React Native

## 📞 Support

If you have any questions or run into issues, please:

1. Check the [Issues](https://github.com/yourusername/movie-app/issues) page
2. Create a new issue with detailed information
3. Contact the development team

---
