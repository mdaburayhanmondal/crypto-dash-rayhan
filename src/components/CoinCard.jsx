const CoinCard = ({ coin }) => {
  const isPositive = coin.price_change_percentage_24h >= 0;

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-indigo-500/10 hover:shadow-2xl group">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={coin.image}
          alt={coin.name}
          className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all"
        />
        <div>
          <h2 className="text-lg font-bold text-slate-100 leading-tight">
            {coin.name}
          </h2>
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            {coin.symbol}
          </p>
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-sm text-slate-400 italic">Current Price</p>
        <p className="text-2xl font-semibold text-indigo-300">
          ${coin.current_price.toLocaleString()}
        </p>
        <p
          className={`text-sm font-medium ${
            isPositive ? 'text-emerald-400' : 'text-rose-400'
          }`}
        >
          {isPositive ? '▲' : '▼'}{' '}
          {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

export default CoinCard;
