const FilterInput = ({ filter, onFilterChange }) => (
  <div className="w-full md:flex-1">
    <input
      type="text"
      placeholder="Search for a coin..."
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
      className="w-full bg-slate-900 border border-slate-700 text-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
    />
  </div>
);

export default FilterInput;
