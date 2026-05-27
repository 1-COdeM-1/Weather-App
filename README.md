# 🌤️ Real-Time Weather Application

A modern, high-performance Weather Application built with **React**, **TypeScript**, and **Vite**. The application fetches real-time meteorological data for any city or country worldwide and features an automatic live-refresh mechanism to ensure data accuracy.

---

## 🚀 Live Demo
🔗 **Check out the live project here:** [Your Vercel Live Link Goes Here]

---

## ✨ Features

- **Global Location Search:** Fetch precise weather details by searching for either a city name or a country.
- **Multi-City Display:** Compare weather metrics simultaneously by viewing data for multiple cities at once.
- **15-Second Live Refresh:** Automated background polling mechanism that updates the weather statistics every 15 seconds without lagging the UI.
- **Comprehensive Metrics:** Displays vital weather parameters including current temperature and **wind speed**.
- **Robust State Management:** Architected using `React Context API` to streamline data flow and eliminate prop-drilling.
- **Component-Driven Architecture:** Clean separation of concerns with dedicated components and custom hooks for scalable development.
- **Modern UI/UX:** A fully responsive, slick user interface styled using **Tailwind CSS**.

---

## 🛠️ Tech Stack

- **Frontend Library:** React (Vite-powered)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (with responsive utility classes)
- **State Management:** React Context API
- **Version Control:** Git & GitHub

---

## 📦 Project Architecture Overview

The project follows a clean and structured directory layout to maintain high code quality:
```text
src/
├── components/          # Reusable UI components (Logo, SearchBar, WeatherCards, etc.)
├── context/             # Global State Management (Profile & Weather Providers)
├── hooks/               # Custom hooks handling API fetching and interval timers
├── App.tsx              # Main entry layout configurations
└── main.tsx             # Application mounting point