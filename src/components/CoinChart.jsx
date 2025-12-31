import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale
);

const CoinChart = ({ coinId }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
        );
        const data = await res.json();

        if (data.prices) {
          setChartData({
            datasets: [
              {
                label: 'Price (USD)',
                data: data.prices.map((p) => ({ x: p[0], y: p[1] })),
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                fill: true,
                pointRadius: 0,
                tension: 0.3,
              },
            ],
          });
        }
      } catch (err) {
        console.error('Chart Error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchChartData();
  }, [coinId]);

  if (loading)
    return <div className="text-indigo-400 p-4">Loading Chart...</div>;
  if (!chartData)
    return <div className="text-slate-500 p-4">Chart data unavailable.</div>;

  return (
    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 h-64">
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { type: 'time', time: { unit: 'day' } },
            y: { ticks: { callback: (val) => `$${val.toLocaleString()}` } },
          },
        }}
      />
    </div>
  );
};

export default CoinChart;
