import CoinCard from '../components/CoinCard';
import LimitSelector from '../components/LimitSelector';
import FilterInput from '../components/FilterInput';
import SortSelector from '../components/SortSelector';

const Home = ({
  coins,
  filter,
  setFilter,
  limit,
  setLimit,
  sortBy,
  setSortBy,
  loading,
  error,
}) => {
  const filteredCoins = coins
    .filter(
      (coin) =>
        coin.name.toLowerCase().includes(filter.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(filter.toLowerCase())
    )
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case 'market_cap_desc':
          return b.market_cap - a.market_cap;
        case 'price_desc':
          return b.current_price - a.current_price;
        case 'price_asc':
          return a.current_price - b.current_price;
        case 'change_desc':
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        case 'change_asc':
          return a.price_change_percentage_24h - b.price_change_percentage_24h;
        default:
          return 0;
      }
    });

  // UI
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 font-sans">
      <header className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-indigo-400 mb-2">
          🚀 Crypto Dash
        </h1>
        <p className="text-slate-400">Live Market Insights</p>
      </header>

      <div className="max-w-7xl mx-auto bg-slate-800/50 p-6 rounded-2xl border border-slate-700 shadow-xl mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <FilterInput filter={filter} onFilterChange={setFilter} />
          <div className="flex gap-4 w-full md:w-auto">
            <LimitSelector limit={limit} onLimitChange={setLimit} />
            <SortSelector sortBy={sortBy} onSortChange={setSortBy} />
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto">
        {loading && (
          <div className="text-center py-20 text-indigo-400 text-xl animate-pulse">
            Updating Market Data...
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg text-center">
            ❌ {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCoins.length > 0 ? (
              filteredCoins.map((coin) => (
                <CoinCard coin={coin} key={coin.id} />
              ))
            ) : (
              <p className="col-span-full text-center text-slate-500 py-10">
                No coins match your filter. 🔍
              </p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
