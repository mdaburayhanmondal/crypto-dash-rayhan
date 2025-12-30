const SortSelector = ({ sortBy, onSortChange }) => (
  <div className="flex flex-col gap-1 flex-1 md:flex-none">
    <label className="text-[10px] uppercase tracking-tighter text-slate-500 font-bold ml-1">
      Sort By
    </label>
    <select
      value={sortBy}
      onChange={(e) => onSortChange(e.target.value)}
      className="bg-slate-900 border border-slate-700 text-slate-200 py-2 px-3 rounded-lg focus:ring-2 focus:ring-indigo-500/50"
    >
      <option value="market_cap_desc">Market Cap</option>
      <option value="price_desc">Price (High)</option>
      <option value="price_asc">Price (Low)</option>
    </select>
  </div>
);

export default SortSelector;
