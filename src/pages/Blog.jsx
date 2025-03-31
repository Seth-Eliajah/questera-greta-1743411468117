import { motion } from 'framer-motion';
import { format } from 'date-fns';

const mockPosts = [
  {
    id: 1,
    title: 'Getting Started with Fleet Management',
    excerpt: 'Learn the basics of managing a successful fleet business...',
    author: 'John Smith',
    date: '2024-02-20',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 2,
    title: 'Maximizing ROI on Rental Properties',
    excerpt: 'Discover proven strategies to increase your rental income...',
    author: 'Sarah Johnson',
    date: '2024-02-18',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=300'
  }
];

export default function Blog() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Fleet Management Blog</h2>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Write Article
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>{post.author}</span>
                  <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
                </div>
                <span>{post.readTime}</span>
              </div>
              <button className="mt-4 text-primary-600 font-medium hover:text-primary-700 transition-colors">
                Read More →
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}