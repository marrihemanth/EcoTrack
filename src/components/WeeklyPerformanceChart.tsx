import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { TrendingUp } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const WeeklyPerformanceChart: React.FC = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'CO₂ Saved (kg)',
        data: [8.2, 12.5, 15.3, 9.8, 18.7, 22.1, 16.4],
        borderColor: 'rgba(34, 197, 94, 1)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgba(34, 197, 94, 1)',
        pointBorderColor: 'rgba(255, 255, 255, 1)',
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: 'rgba(34, 197, 94, 1)',
        pointHoverBorderColor: 'rgba(255, 255, 255, 1)',
        pointHoverBorderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: 'rgba(31, 41, 55, 1)',
        bodyColor: 'rgba(31, 41, 55, 1)',
        borderColor: 'rgba(34, 197, 94, 0.2)',
        borderWidth: 1,
        cornerRadius: 12,
        displayColors: false,
        titleFont: {
          size: 14,
          weight: 'bold',
        },
        bodyFont: {
          size: 13,
        },
        callbacks: {
          title: function(context: any) {
            return context[0].label;
          },
          label: function(context: any) {
            return `${context.parsed.y} kg CO₂ saved`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: 'rgba(107, 114, 128, 1)',
          font: {
            size: 12,
            weight: '500',
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(229, 231, 235, 0.5)',
          drawBorder: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: 'rgba(107, 114, 128, 1)',
          font: {
            size: 12,
            weight: '500',
          },
          callback: function(value: any) {
            return value + ' kg';
          }
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-transparent pointer-events-none"></div>
      
      <div className="relative">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Weekly Performance</h3>
            <p className="text-gray-600">CO₂ savings trend this week</p>
          </div>
          <div className="flex items-center space-x-2 bg-green-100/80 px-4 py-2 rounded-full">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <span className="text-sm font-semibold text-green-700">+24% vs last week</span>
          </div>
        </div>

        <div className="h-80">
          <Line data={data} options={options} />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-white/40 rounded-2xl">
            <div className="text-2xl font-bold text-gray-800">102.8 kg</div>
            <div className="text-sm text-gray-600">Total this week</div>
          </div>
          <div className="text-center p-4 bg-white/40 rounded-2xl">
            <div className="text-2xl font-bold text-gray-800">14.7 kg</div>
            <div className="text-sm text-gray-600">Daily average</div>
          </div>
          <div className="text-center p-4 bg-white/40 rounded-2xl">
            <div className="text-2xl font-bold text-green-600">22.1 kg</div>
            <div className="text-sm text-gray-600">Best day</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyPerformanceChart;