# SmartTrack: Test Build

This is a sample static web application built with React and Vite. It was generated to be fully compatible with deployment on GitHub Pages.

## Features

- **3 Pages**: Home, Attendance, and Insights.
- **Routing**: Client-side routing with `react-router-dom`.
- **Responsive Design**: Mobile-first layout that works on desktops, tablets, and phones.
- **Dark Mode**: A theme toggle to switch between light and dark modes.
- **Data Visualization**: A simple bar chart on the Insights page using `recharts`.
- **Source Code Export**: A "Download Source" button on the homepage to zip and download the entire project source.

## How to Run

### 1. Development

To run the app locally in development mode:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the dev server:**
    ```bash
    npm run dev
    ```

    This will start the Vite development server, typically at `http://localhost:5173`.

### 2. Building for Production

To create a production-ready build for deployment:

1.  **Run the build command:**
    ```bash
    npm run build
    ```

2.  The static files will be generated in the `/dist` directory.

### 3. Deploying to GitHub Pages

1.  Ensure your `vite.config.ts` has the correct `base` path for your repository. It's currently set to `'/smarttrack-test/'`.
2.  Build the project using `npm run build`.
3.  Push the contents of the `/dist` folder to the `gh-pages` branch of your repository.
