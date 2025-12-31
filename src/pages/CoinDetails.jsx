import { useParams, Link } from 'react-router';
import { useState, useEffect } from 'react';

import Spinner from '../components/Spinner';
import CoinChart from '../components/CoinChart';

const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        if (!res.ok) throw new Error('Failed to fetch coin data');
        const data = await res.json();
        setCoin(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoin();
  }, [id]);

  if (loading) return <Spinner />;
  if (error)
    return <div className="p-8 text-red-400 text-center">❌ {error}</div>;

  // Added a check for market_data to prevent blank screens if the API returns partial data
  if (!coin || !coin.market_data)
    return <div className="p-8 text-white text-center">No data found.</div>;

  const marketData = coin.market_data;

  return (
    <div className="p-8 max-w-5xl mx-auto text-slate-100">
      <Link
        to="/"
        className="text-indigo-400 hover:underline mb-8 inline-block"
      >
        ← Back to Home
      </Link>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <img
          src={coin.image?.large || coin.image?.small || coin.image}
          alt={coin.name}
          className="w-32 h-32"
        />
        <div>
          <h1 className="text-4xl font-bold text-slate-400">
            {coin.name} ({coin.symbol?.toUpperCase()})
          </h1>
          <p className="text-slate-400 text-xl">
            Rank: #{coin.market_cap_rank}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <h3 className="text-xl font-bold mb-4 text-indigo-400">
            Market Stats
          </h3>
          <ul className="space-y-3">
            <li>
              Current Price: ${marketData.current_price?.usd?.toLocaleString()}
            </li>
            <li>Market Cap: ${marketData.market_cap?.usd?.toLocaleString()}</li>
            <li>24h High: ${marketData.high_24h?.usd?.toLocaleString()}</li>
            <li>24h Low: ${marketData.low_24h?.usd?.toLocaleString()}</li>
          </ul>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <h3 className="text-xl font-bold mb-4 text-indigo-400">Resources</h3>
          <p className="italic text-slate-400 mb-4">
            {coin.description?.en
              ? coin.description.en.split('. ')[0] + '.'
              : 'No description available.'}
          </p>
          <div className="flex gap-4">
            {coin.links?.homepage?.[0] && (
              <a
                href={coin.links.homepage[0]}
                target="_blank"
                rel="noreferrer"
                className="bg-indigo-600 px-4 py-2 rounded-lg"
              >
                Website
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <CoinChart coinId={id} />
      </div>
    </div>
  );
};

export default CoinDetails;
