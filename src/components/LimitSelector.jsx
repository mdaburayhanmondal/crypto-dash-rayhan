const LimitSelector = ({ limit, onLimitChange }) => (
  <div className="flex flex-col gap-1 flex-1 md:flex-none">
    <label className="text-[10px] uppercase tracking-tighter text-slate-500 font-bold ml-1">
      Limit
    </label>
    <select
      value={limit}
      onChange={(e) => onLimitChange(Number(e.target.value))}
      className="bg-slate-900 border border-slate-700 text-slate-200 py-2 px-3 rounded-lg focus:ring-2 focus:ring-indigo-500/50"
    >
      <option value="5">5</option>
      <option value="10">10</option>
    </select>
  </div>
);

export default LimitSelector;
