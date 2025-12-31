import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header'; // Fixed path
import NotFound from './pages/NotFound';
import CoinDetails from './pages/CoinDetails';

const API_URL = import.meta.env.VITE_COINS_API_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('market_cap_desc');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setLoading(true);
        setError(null);
        // If API_URL is undefined because of .env issues, this will catch it
        if (!API_URL)
          throw new Error('API URL is missing. Check your .env file.');

        const res = await fetch(`${API_URL}&per_page=${limit}&page=1`);

        if (res.status === 429)
          throw new Error('Rate limit exceeded. Wait 60s.');
        if (!res.ok) throw new Error('Failed to fetch data');

        const data = await res.json();
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, [limit]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              coins={coins}
              filter={filter}
              setFilter={setFilter}
              limit={limit}
              setLimit={setLimit}
              sortBy={sortBy}
              setSortBy={setSortBy}
              loading={loading}
              error={error}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
