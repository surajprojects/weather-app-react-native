---

# Weather App

A simple and responsive **Weather mobile app** built using **React Native CLI** with **NativeWind** for styling.
This app allows users to search for locations and view real-time weather information with temperature, conditions, and forecasts.

## Features

- Search for locations
- Display real-time weather data
- Show current temperature and weather conditions
- Display location name and time
- Weather forecast information
- Responsive mobile UI
- Styled using NativeWind (Tailwind for React Native)

## Tech Stack

- **React Native CLI**
- **TypeScript**
- **NativeWind**
- **TailwindCSS (for RN)**
- **React Navigation**
- **WeatherAPI.com** (for weather data)

## ScreenShots

![Screenshot](/public/weather-app-screenshot.jpg)

## Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed
- **Node.js** (v20 or higher)
- **npm** or **yarn**
- **Java Development Kit (JDK)** (v11 or higher)
- **Android SDK** with API level 34 or higher
- **Android Studio** (recommended) or Android command-line tools
- **Gradle** (compatible with the Android Gradle Plugin)

### Step 1: Clone and Install Dependencies

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd Weather
   ```

2. Navigate to the project folder and install dependencies
   ```bash
   npm install
   # or if you use yarn
   yarn install
   ```

### Step 2: Android Gradle Configuration

1. **Configure `gradle.properties`** (optional but recommended)
   - Edit `android/gradle.properties` to customize your build environment
   - Default JVM args are set to `-Xmx2048m` for better performance

2. **Update SDK versions** (if needed)
   - Edit `android/build.gradle` and `android/app/build.gradle`
   - Ensure `compileSdkVersion` and `targetSdkVersion` match your Android SDK

### Step 3: Keystore Configuration (For Release Builds)

#### Generate a New Keystore File (First Time Only)

1. Navigate to the Android app directory
   ```bash
   cd android/app
   ```

2. Generate a keystore file using keytool
   ```bash
   keytool -genkey -v -keystore my-upload-key.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias
   ```

   You'll be prompted to enter
   - Keystore password
   - Key password
   - Your name, organization, city, state, and country

3. Keep the keystore file and passwords safe. You'll need them for future builds.

#### Configure Signing in Gradle

1. Create or update `android/app/gradle.properties` with your keystore credentials
   ```properties
   MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
   MYAPP_UPLOAD_STORE_PASSWORD=<your-keystore-password>
   MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
   MYAPP_UPLOAD_KEY_PASSWORD=<your-key-password>
   ```

2. The `android/app/build.gradle` is already configured to use these properties for release builds

### Step 4: Start Metro Bundler

In your project root directory, start the Metro Bundler

```bash
npm start
# or
yarn start
```

Keep this terminal running while developing.

### Step 5: Build and Run

#### Debug Build (for development)

In a new terminal, run on Android device or emulator

```bash
npm run android
# or
react-native run-android
```

#### Release Build (for production)

To build a release APK

```bash
cd android
./gradlew assembleRelease
# On Windows, use:
gradlew.bat assembleRelease
```

The APK will be located at
```
android/app/build/outputs/apk/release/app-release.apk
```

To build for Google Play (AAB - Android App Bundle)

```bash
cd android
./gradlew bundleRelease
# On Windows, use:
gradlew.bat bundleRelease
```

The AAB will be located at
```
android/app/build/outputs/bundle/release/app-release.aab
```

### iOS Build (Optional)

If you want to build for iOS

```bash
npm run ios
# or
react-native run-ios
```

For iOS release builds, use Xcode or the following command

```bash
cd ios
xcodebuild -workspace Weather.xcworkspace -scheme Weather -configuration Release
```

## API Configuration

This app uses **WeatherAPI.com** for fetching weather data. The API key is already configured in the codebase for development purposes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Made with ❤️ by Tiger

---
