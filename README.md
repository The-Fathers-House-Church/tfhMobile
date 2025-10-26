# TFH Mobile - React Native Church App

![React Native](https://img.shields.io/badge/React%20Native-0.71+-61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-4.8+-blue) ![iOS](https://img.shields.io/badge/iOS-Compatible-black) ![Android](https://img.shields.io/badge/Android-Compatible-green)

The official mobile application for The Father's House Church, built with React Native. This cross-platform app provides church members with on-the-go access to spiritual content, events, and community features.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Screens & Navigation](#screens--navigation)
- [Installation & Setup](#installation--setup)
- [Platform Setup](#platform-setup)
- [Development](#development)
- [Build & Release](#build--release)
- [State Management](#state-management)

## 🎯 Overview

The TFH Mobile App brings The Father's House Church experience directly to members' mobile devices, featuring:

- **Daily Devotionals**: "The Father's Menu" accessible offline
- **Event Information**: Browse and stay updated on church events
- **Testimony Sharing**: Submit and read community testimonies
- **Church Information**: About section with church history and vision
- **Contact & Locations**: Find church branches and contact information
- **Offline Support**: Content caching for offline reading
- **Cross-Platform**: Native iOS and Android applications

**Download**: Available on Google Play Store (`com.tfhmobile`)

## ✨ Features

### 🙏 Spiritual Content
- **Daily Devotionals ("The Father's Menu")**
  - Complete devotional content with scripture
  - Bible reading plans and confessions
  - Offline reading capability
  - Date navigation and favorites
- **Testimony Sharing**
  - Submit personal testimonies
  - Browse approved community testimonies
  - Category filtering and search

### 📅 Church Life
- **Event Information**
  - View upcoming church events
  - Event details and registration
  - Event reminders and notifications
- **Announcements**
  - Important church updates
  - Priority-based notifications

### ℹ️ Church Information
- **About Section**
  - Church history and vision
  - Leadership information
  - Church locations and branches
- **Contact Features**
  - Direct calling and messaging
  - Email integration
  - Social media links

### 📱 Mobile-Specific Features
- **Native Performance**: Optimized for mobile devices
- **Offline Support**: Content caching and offline reading
- **Push Notifications**: Event reminders and updates (when configured)
- **Sharing**: Share devotionals and testimonies
- **Dark Mode**: Theme support (if implemented)

## 🛠️ Technology Stack

### Core Framework
- **React Native 0.71**: Cross-platform mobile development
- **React 18.2**: Modern React with hooks
- **TypeScript 4.8**: Type-safe development

### Navigation & UI
- **React Navigation v6**: Navigation system
  - **Native Stack Navigator**: Screen navigation
  - **Bottom Tabs Navigator**: Tab-based navigation
- **React Native SVG**: SVG icon support
- **React Native Modal**: Modal dialogs
- **React Native Toast Message**: User notifications

### State Management & Storage
- **Redux Toolkit**: Predictable state management
- **React Redux**: React bindings for Redux
- **AsyncStorage**: Local data persistence
- **React Native Config**: Environment configuration

### Forms & Validation
- **Formik**: Form handling and management
- **Yup**: Schema-based form validation

### Device & Platform
- **React Native Device Info**: Device information
- **React Native Safe Area Context**: Safe area handling
- **React Native Screens**: Native screen management
- **React Native Splash Screen**: Splash screen management

### Development Tools
- **Metro**: React Native bundler
- **Flipper**: Development and debugging
- **React Native SVG Transformer**: SVG transformation

## 📁 Project Structure

```
tfhMobile/
├── src/
│   ├── screens/                # App screens
│   │   ├── About/             # About church screen
│   │   ├── Auth/              # Authentication screens
│   │   ├── Contact/           # Contact screens
│   │   ├── Devotional/        # Devotional screens
│   │   ├── Event/             # Event screens
│   │   ├── Home/              # Home/dashboard screen
│   │   ├── Testimony/         # Testimony screens
│   │   └── [additional screens]
│   ├── components/            # Reusable components
│   │   ├── common/            # Common UI components
│   │   ├── forms/             # Form components
│   │   ├── navigation/        # Navigation components
│   │   └── screens/           # Screen-specific components
│   ├── routes/                # Navigation configuration
│   │   ├── AppNavigator.tsx   # Main navigation
│   │   ├── AuthNavigator.tsx  # Auth flow navigation
│   │   ├── TabNavigator.tsx   # Bottom tab navigation
│   │   └── types.ts           # Navigation types
│   ├── store/                 # Redux store
│   │   ├── slices/            # Redux slices
│   │   ├── hooks.ts           # Typed hooks
│   │   └── store.ts           # Store configuration
│   ├── api/                   # API integration
│   │   └── axios.ts           # HTTP client setup
│   ├── functions/             # Utility functions
│   │   ├── auth.ts            # Authentication utilities
│   │   ├── font.ts            # Font utilities
│   │   └── utils.ts           # General utilities
│   ├── theme/                 # Design system
│   │   ├── colors.ts          # Color definitions
│   │   ├── fonts.ts           # Font configurations
│   │   └── dimensions.ts      # Sizing and spacing
│   ├── types/                 # TypeScript definitions
│   └── assets/                # Images, icons, fonts
│       ├── icons/
│       ├── images/
│       └── fonts/
├── android/                   # Android-specific files
│   ├── app/
│   │   ├── src/
│   │   ├── build.gradle       # Android build configuration
│   │   └── [Android files]
│   ├── gradle/
│   └── [Android configuration]
├── ios/                       # iOS-specific files
│   ├── tfhMobile/
│   │   ├── Images.xcassets/   # iOS assets
│   │   ├── Info.plist         # iOS configuration
│   │   └── [iOS files]
│   └── [iOS configuration]
├── App.tsx                    # Main app component
├── index.js                   # App entry point
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── metro.config.js            # Metro bundler configuration
├── react-native.config.js     # React Native configuration
└── babel.config.js            # Babel configuration
```

## 📱 Screens & Navigation

### Navigation Structure
```
App Navigator
├── Auth Stack (if not authenticated)
│   ├── Login
│   ├── Register
│   └── Forgot Password
└── Main Tab Navigator (if authenticated)
    ├── Home Tab
    │   ├── Dashboard
    │   └── Announcements
    ├── Devotional Tab
    │   ├── Today's Devotional
    │   ├── Devotional Archive
    │   └── Devotional Details
    ├── Events Tab
    │   ├── Event List
    │   └── Event Details
    ├── Testimony Tab
    │   ├── Submit Testimony
    │   └── Browse Testimonies
    └── More Tab
        ├── About Church
        ├── Contact
        ├── Profile
        └── Settings
```

### Key Screens

#### Home Screens
- **Dashboard**: Overview with today's devotional and upcoming events
- **Announcements**: Church announcements and updates

#### Devotional Screens
- **Today's Devotional**: Current day's spiritual content
- **Devotional Archive**: Browse past devotionals
- **Devotional Details**: Full devotional content with sharing options

#### Event Screens
- **Event List**: Upcoming and past church events
- **Event Details**: Complete event information

#### Testimony Screens
- **Submit Testimony**: Form to share personal testimonies
- **Browse Testimonies**: Read approved community testimonies

#### About & Contact Screens
- **About Church**: Church history, vision, and leadership
- **Contact**: Church contact information and locations

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- React Native CLI or Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- TFH Backend API running

### Installation Steps

1. **Clone and Install**
```bash
git clone [repository-url]
cd tfhMobile
npm install
```

2. **Environment Configuration**
```bash
# Create environment configuration
cp .env.example .env
# Edit .env with your API configuration
```

3. **Install iOS Dependencies** (macOS only)
```bash
cd ios
pod install
cd ..
```

4. **Start Metro Bundler**
```bash
npm start
```

5. **Run on Device/Emulator**
```bash
# Android
npm run android

# iOS (macOS only)
npm run ios
```

## 🔧 Platform Setup

### Android Setup

1. **Install Android Studio**
2. **Configure Android SDK**
3. **Create Virtual Device** (or connect physical device)
4. **Enable Developer Options** on physical device

**Build Commands**:
```bash
# Development build
npm run android

# Release build
npm run assemble

# Bundle for Play Store
npm run bundle

# Clean build
npm run clean
```

### iOS Setup (macOS only)

1. **Install Xcode** from App Store
2. **Install Command Line Tools**
3. **Configure iOS Simulator** or connect physical device
4. **Install CocoaPods dependencies**

**Build Commands**:
```bash
# Development build
npm run ios

# Production build (via Xcode)
# Open ios/tfhMobile.xcworkspace in Xcode
# Product -> Archive
```

## 👨‍💻 Development

### Available Scripts

```bash
npm start                # Start Metro bundler
npm run android         # Run Android app
npm run ios            # Run iOS app
npm test               # Run tests
npm run bundle         # Create Android bundle
npm run assemble       # Create Android APK
npm run clean          # Clean Android build
```

### Development Guidelines

#### Component Structure
```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ComponentProps {
  title: string;
  onPress?: () => void;
}

const Component: React.FC<ComponentProps> = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002F72',
  },
});

export default Component;
```

#### Screen Structure
```typescript
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'ScreenName'>;

const Screen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Screen content */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Screen;
```

### API Integration

```typescript
// API service example
import axios from 'axios';
import Config from 'react-native-config';

const api = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'x-api-key': Config.API_KEY,
  },
});

export const getDevotionals = async () => {
  try {
    const response = await api.get('/devotional/user');
    return response.data;
  } catch (error) {
    throw error;
  }
};
```

### State Management

```typescript
// Redux slice example
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DevotionalState {
  devotionals: any[];
  loading: boolean;
  error: string | null;
}

const devotionalSlice = createSlice({
  name: 'devotional',
  initialState,
  reducers: {
    setDevotionals: (state, action: PayloadAction<any[]>) => {
      state.devotionals = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});
```

## 🚀 Build & Release

### Android Release

1. **Generate Keystore**
```bash
keytool -genkeypair -v -keystore tfh-mobile.keystore -alias tfh-mobile -keyalg RSA -keysize 2048 -validity 10000
```

2. **Configure Gradle**
```gradle
// android/app/build.gradle
signingConfigs {
    release {
        storeFile file('tfh-mobile.keystore')
        storePassword 'your-store-password'
        keyAlias 'tfh-mobile'
        keyPassword 'your-key-password'
    }
}
```

3. **Build Release**
```bash
# Create bundle for Play Store
npm run bundle

# Create APK for direct distribution
npm run assemble
```

### iOS Release

1. **Configure Code Signing** in Xcode
2. **Archive Application**
```
Xcode -> Product -> Archive
```
3. **Upload to App Store Connect**
4. **Submit for Review**

### Environment Configuration

```bash
# .env file
API_URL=https://your-backend-api.com/api/v2
API_KEY=your_api_key
APP_VERSION=1.4
```

## 📊 State Management

### Redux Store Structure
```typescript
interface RootState {
  auth: AuthState;
  devotional: DevotionalState;
  events: EventState;
  testimony: TestimonyState;
  app: AppState;
}
```

### AsyncStorage Usage
```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Store data
await AsyncStorage.setItem('devotionals', JSON.stringify(devotionals));

// Retrieve data
const storedDevotionals = await AsyncStorage.getItem('devotionals');
const devotionals = storedDevotionals ? JSON.parse(storedDevotionals) : [];
```

## 🔍 Testing

### Unit Testing
```bash
npm test
```

### E2E Testing (Detox - if configured)
```bash
npm run test:e2e
```

### Manual Testing Checklist
- [ ] Authentication flow
- [ ] Devotional loading and offline access
- [ ] Event browsing and details
- [ ] Testimony submission
- [ ] Navigation between screens
- [ ] API error handling
- [ ] Offline functionality

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Follow React Native best practices
4. Test on both iOS and Android
5. Ensure TypeScript types are properly defined
6. Commit changes (`git commit -m 'Add amazing feature'`)
7. Push to branch (`git push origin feature/amazing-feature`)
8. Create Pull Request

### Development Checklist
- [ ] TypeScript types added
- [ ] Tested on iOS and Android
- [ ] API integration working
- [ ] Offline support considered
- [ ] Performance optimized
- [ ] Accessibility implemented

---

**Built with ❤️ for The Father's House Church**

Download the app: [Google Play Store](https://play.google.com/store/apps/details?id=com.tfhmobile)

### Church Website
https://tfhconline.org.ng/

Feel free to download and use as a template to create the mobile app for the church you belong to