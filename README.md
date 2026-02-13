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

## Docker

Build and run the application using Docker:

```bash
# Build the image
docker build -t yahoo-movie-project .

# Run the container
docker run -p 8080:80 yahoo-movie-project
```

Or use Docker Compose:

```bash
docker compose up --build
```

The app will be available at `http://localhost:8080`.

**Image Details:**

- Multi-stage build using `node:22-alpine` for build and `nginx:alpine` for runtime
- Static build artifacts served by lightweight nginx
- Optimized for minimal image size (~100-150MB)

## CI/CD

This project uses GitHub Actions for continuous integration. The workflow runs on pull requests and pushes to the `main` branch.

**Steps:**

1. Checkout code
2. Setup Node.js 22
3. Install dependencies
4. Build application
5. Upload build artifacts

Workflow file: `.github/workflows/ci.yml`

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

## Dependencies

### Development

- `vite` - Fast build tool and dev server
- `eslint` - Code quality tool
- `babel-plugin-react-compiler` - React compiler optimization
- Various linting and type definition packages

## License

This project is open source and available under the MIT License.
## Contributors
 - Pirzada Muhammad Abdullah
 - Usman Siddique