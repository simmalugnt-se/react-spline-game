# Spline Game Boilerplate

This is a boilerplate project for creating Spline-based games using React and Splines game controls.

## Project Structure

- `src/App.tsx`: The main component where you will be integrating your Spline scene and adding the game logic.
- `src/components/Scoreboard.tsx`: A basic component for displaying game data such as score.
- `src/hooks/useCollisionHandler.ts`: A custom hook to handle object collisions in the Spline scene.
- `src/hooks/useSpline.ts`: A custom hook to initialize and manage the Spline instance.
- `src/helpers/parentGroupFinder.ts`: A helper function to find the name of the parent group for a given object UUID in the Spline scene.

## Getting Started

1. Clone this repository.
2. Install dependencies by running `npm install`.
3. Start the development server by running `npm start`.
4. Open your browser and go to `http://localhost:3000` to see the app running.
5. Import your Spline scene and start building your game!
