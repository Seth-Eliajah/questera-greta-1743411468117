import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ReactECharts from 'echarts-for-react';

const assetCategories = [
  {
    id: 'cars',
    title: 'Cars',
    count: 12,
    income: 24000,
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 'bikes',
    title: 'Bikes',
    count: 8,
    income: 4800,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 'trucks',
    title: 'Trucks',
    count: 5,
    income: 15000,
    image: 'https://images.unsplash.com/photo-1586191582056-b7f0394928fa?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 'houses',
    title: 'Rental Houses',
    count: 3,
    income: 9000,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=500'
  }
];

const incomeChartOption = {
  title: {
    text: 'Monthly Income by Category',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    bottom: '5%'
  },
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Cars',
      type: 'line',
      data: [24000, 25000, 23000, 24500, 24800, 24000]
    },
    {
      name: 'Bikes',
      type: 'line',
      data: [4800, 4900, 4700, 4850, 4900, 4800]
    },
    {
      name: 'Trucks',
      type: 'line',
      data: [15000, 14800, 15200, 15100, 14900, 15000]
    },
    {
      name: 'Houses',
      type: 'line',
      data: [9000, 9000, 9000, 9000, 9000, 9000]
    }
  ]
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {assetCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={`/assets/${category.id}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
                  <div className="mt-2 flex justify-between text-sm text-gray-600">
                    <span>Total: {category.count}</span>
                    <span>Income: ${category.income}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <ReactECharts option={incomeChartOption} style={{ height: '400px' }} />
      </div>
    </div>
  );
}