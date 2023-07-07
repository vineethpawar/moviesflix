# MoviesFlix

🚧 **UNDER DEVELOPMENT** 🚧

MoviesFlix is a mobile application built with React Native that allows users to stream and watch movies of different genres. It offers various features like user account creation, subscription management (not real), payment integration, and an extensive library of movies to choose from. The app utilizes popular technologies such as React Native, NativeBase, Redux, Redux Saga, and TheMovieDatabase API to provide a seamless movie streaming experience.


## Features

- **User account creation:** Users can create their accounts within the app, enabling them to personalize their movie-watching experience.
- **Subscription management:** Users can manage their subscriptions within the app, allowing them to upgrade, downgrade, or cancel their subscription plan (not real).
- **Payment integration:** The app supports payment integration to provide users with a seamless subscription purchasing experience (not real).
- **Genre-based movie selection:** Users can browse and select movies based on their preferred genre.
- **Trailer popups:** On hovering over a movie, users can view a trailer popup to get a glimpse of the movie before deciding to watch it.
- **Watch party feature:** Users will be able to host and join watch parties to enjoy movies together in real-time using sockets.

## Installation

Before proceeding with the installation, ensure that you have the following prerequisites:

- Node.js (version 12 or above)
- npm or yarn package manager
- React Native CLI

Follow these steps to install and run the MoviesFlix app:

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/moviesflix.git
```

2. **Change to the project directory:**
```bash
cd moviesflix
```

3. **Install the dependencies:**
```bash
npm install
# or
yarn install
```

4. **Start the development server:**
```bash
npm start
# or
yarn start
```

5. **Launch the app on an emulator or a physical device:**
```bash
npm run android
# or
npm run ios
```
*Note: Make sure you have an Android emulator running or a physical device connected for Android, or a macOS computer with Xcode installed for iOS.*

## Configuration

To configure the app for your specific environment, follow these steps:

1. Create an account on TheMovieDatabase (TMDb) website: [https://www.themoviedb.org/](https://www.themoviedb.org/).
2. Obtain an API key from TMDb by following their instructions.
3. Open the project in your favorite code editor.
4. Locate the `.env.example` file in the project root directory and rename it to `.env`.
5. Update the `TMDB_API_KEY` value in the `.env` file with your TMDb API key.

## Tech Stack

The MoviesFlix app is built with the following technologies:

- **React Native:** A framework for building cross-platform mobile applications using JavaScript and React.
- **NativeBase:** A popular UI component library for React Native, providing a set of reusable UI components.
- **Redux:** A predictable state container for JavaScript applications, used for managing the app's global state.
- **Redux Saga:** A middleware library for Redux, used for managing side effects like asynchronous operations.
- **TheMovieDatabase API:** An API that provides access to a vast collection of movie data, including genres, trailers, and more.
- **Payment integration service:** A service or library used for integrating payment functionality into the app (not real).
- **Sockets:** Real-time communication technology to enable the watch party feature.

## Contributing

Contributions to MoviesFlix are welcome! If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit your code.
4. Push your changes to your forked repository.
5. Submit a pull request, describing your changes and the problem or feature they address.

Please ensure that your contributions adhere to the project's coding conventions and style guidelines.

## License

The MoviesFlix app is open-source and distributed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.
