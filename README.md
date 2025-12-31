# 🚀 Crypto Dash

A sleek, elegant Cryptocurrency Dashboard that provides real-time market data. Built with **React**, **Tailwind CSS**, and powered by the **CoinGecko API**.

## ✨ Features

- **Dynamic Routing**: Seamlessly navigate between the home dashboard and detailed coin pages using **React Router 7**.
- **Interactive Price Charts**: 7-day historical price trends visualized with **Chart.js** and `react-chartjs-2`.
- **Live Data Fetching**: Fetches the latest market prices, market caps, and 24h changes using the `useEffect` hook.
- **Reactive UI**: Automatically updates the market list when the "Show Limit" is changed via the dependency array.
- **Instant Search**: Local filtering allows you to search for coins by name or symbol without additional API calls.
- **Smart Sorting**: Sort data by Market Cap or Price using immutable array patterns (`.slice().sort()`).
- **Environment Security**: API configurations are managed via Vite environment variables (`.env`).
- **Elegant Design**: Fully responsive, dark-themed UI built with Tailwind CSS, featuring professional loading spinners.

## 🛠️ Tech Stack

- **React** (Vite)
- **React Router 7**
- **Tailwind CSS**
- **Chart.js**
- **CoinGecko API**
