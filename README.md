# React Native Jubas App

This is a React Native app responsible for managing all the services performed within Juba's barbershop.

### Setting up the Environment
>**Note**:The system was created with **React Native CLI**. Please refer to the official [documentation](https://reactnative.dev/docs/environment-setup?guide=native) for more details on how to set up the development environment. The backend of the project is available at [jubas-backend](https://github.com/marcelo-de-santana/jubas-backend).

# Getting Started

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

### Technologies and Libraries Used
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Formik:](https://formik.org/) form manager
- [Yup:](https://www.npmjs.com/package/yup) validation manager

### Screen Prototypes
The latest updates are available on [Figma](https://www.figma.com/file/5ilvDi7rBbEM8hG74pETXk/Barber-App).

<div display: flex; flex-wrap: wrap;">
    <p align="center">SignIn</p>
    <p align="center"><img src="https://github.com/marcelo-de-santana/jubas-app/blob/dev/src/assets/prints/SignIn.png?raw=true" width="300"/></p>
    <p align="center">SingUp</p>
    <p align="center"><img src="https://github.com/marcelo-de-santana/jubas-app/blob/dev/src/assets/prints/SignUp.png?raw=true" width="300"/></p>
    <p align="center">Recovery Password</p>
    <p align="center"><img src="https://github.com/marcelo-de-santana/jubas-app/blob/dev/src/assets/prints/RecoveryPassword.png?raw=true" width="300"/></p>
</div>


