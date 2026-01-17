# 🎬 Movie Explorer

A modern web application for exploring movies using the OMDB API. Built with React, Vite, and React Router, this app allows users to search for movies and view detailed information about each film.

## Features

- 🔍 **Movie Search**: Search for movies by title using the OMDB API
- 📺 **Movie Details**: View comprehensive information about each movie including:
  - Title, release date, and poster image
  - Genre and plot summary
  - Director, actors, and ratings
- 🎨 **Responsive Design**: Clean and modern UI with intuitive navigation
- ⚡ **Fast Performance**: Built with Vite for optimized development and production builds
- 📱 **Client-Side Routing**: Seamless navigation between home and movie detail pages

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite (with Rolldown)
- **Routing**: React Router DOM 7.12.0
- **Styling**: CSS
- **API**: OMDB API (Open Movie Database)
- **Development Tools**: ESLint, Babel plugin React Compiler

## Project Structure

```
yahoo-movie-project/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── MovieCard.jsx    # Individual movie card
│   │   └── MovieList.jsx    # Grid of movie cards
│   ├── pages/           # Page components
│   │   ├── Home.jsx         # Movie search and list
│   │   └── MovieDetail.jsx  # Detailed movie view
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── app.css          # Global styles
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Dependencies and scripts
```

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd yahoo-movie-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your OMDB API key:
     ```
     VITE_API_KEY=your_omdb_api_key_here
     ```
   - Get your free API key from [OMDB API](http://www.omdbapi.com/apikey.aspx)

## Available Scripts

- `npm run dev` - Start development server with hot module reloading
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## How to Use

1. **Search for Movies**:
   - Enter a movie title in the search box on the home page
   - Click "Search 🔎" or press Enter
   - Browse the search results

2. **View Movie Details**:
   - Click "Details" on any movie card
   - View complete information about the movie
   - Use the navigation to return to the home page

3. **Default Content**:
   - The app loads with Avengers movies by default
   - You can search for any movie available in the OMDB database

## Key Components

### Home.jsx

- Displays search form and movie list
- Fetches movies from OMDB API based on search query
- Shows loading state while fetching data

### MovieDetail.jsx

- Displays detailed information about a selected movie
- Fetches individual movie data from OMDB API using IMDb ID
- Includes error handling and loading states

### MovieCard.jsx

- Reusable component for displaying individual movie entries
- Shows poster, title, year, and details link

### Navbar.jsx

- Navigation header with app logo and home link
- Provides consistent navigation across pages

## Dependencies

### Production

- `react@^19.2.0` - UI library
- `react-dom@^19.2.0` - React DOM binding
- `react-router-dom@^7.12.0` - Client-side routing

### Development

- `vite` - Fast build tool and dev server
- `eslint` - Code quality tool
- `babel-plugin-react-compiler` - React compiler optimization
- Various linting and type definition packages


## License

This project is open source and available under the MIT License.
