````
# Flight Booking UI

A flight booking user interface built with **React** (Create React App) and custom **CSS**. It includes features for sorting, filtering, and searching flights, all within a responsive design that adapts to desktop, tablet, and mobile screens.

## Features

-   **Flight booking UI** built with Create React App (`react-scripts`).
-   **Hardcoded sample flight data** (`src/flightsData.js`).
-   **Sorting** by price, duration, and departure time.
-   **Filtering** by maximum price.
-   **Search** by airline, origin (`from`), or destination (`to`).
-   **Custom CSS** only (no Tailwind) with hover effects and smooth transitions.
-   **Responsive layout** for desktop, tablet, and mobile devices.

---

## Installation

1.  Install dependencies by running the following command in your terminal:

    ```bash
    npm install
    ```

2.  Start the application with:

    ```bash
    npm start
    ```

4.  Open your browser and navigate to `http://localhost:3000` to view the app.

---

## Project Structure

-   `src/App.js` – The main application component.
-   `src/components/FlightRow.js` – The component for displaying a single flight row.
-   `src/styles.css` – The custom stylesheet for all the styling.
-   `src/flightsData.js` – The file containing the sample flight data.

---

## Notes

-   This project uses `react-scripts`, a part of Create React App, for a quick and simple setup.
-   All styling is done with custom CSS, avoiding frameworks to keep the project lightweight and showcase fundamental CSS skills.
````