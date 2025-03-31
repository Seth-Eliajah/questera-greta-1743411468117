import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaClock, FaGavel, FaDollarSign, FaUser } from 'react-icons/fa';

const mockListings = [
  {
    id: 1,
    title: '2022 Tesla Model 3',
    type: 'Car',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?auto=format&fit=crop&q=80&w=300',
    seller: 'John Doe',
    posted: '2 days ago',
    auction: {
      currentBid: 45000,
      endTime: '2024-03-25T15:00:00',
      minimumBid: 45500,
      totalBids: 12
    }
  },
  {
    id: 2,
    title: 'Luxury Beach House',
    type: 'House',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=300',
    seller: 'Jane Smith',
    posted: '5 days ago',
    auction: {
      currentBid: 500000,
      endTime: '2024-03-30T18:00:00',
      minimumBid: 505000,
      totalBids: 8
    }
  }
];

function AuctionTimer({ endTime }) {
  const [timeLeft, setTimeLeft] = useState('');

  useState(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const end = new Date(endTime).getTime();
      const difference = end - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        
        return `${days}d ${hours}h ${minutes}m`;
      }
      
      return 'Auction ended';
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="flex items-center space-x-1 text-sm">
      <FaClock className="text-gray-500" />
      <span>{timeLeft}</span>
    </div>
  );
}

export default function Marketplace() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Marketplace</h2>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Create Auction
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockListings.map((listing, index) => (
          <motion.div
            key={listing.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={listing.image} 
                alt={listing.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm">
                <AuctionTimer endTime={listing.auction.endTime} />
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-800">{listing.title}</h3>
                <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded-full text-xs font-medium">
                  {listing.type}
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <FaDollarSign className="text-gray-500" />
                    <span className="font-bold text-xl">${listing.auction.currentBid.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <FaGavel />
                    <span>{listing.auction.totalBids} bids</span>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <p>Minimum next bid: ${listing.auction.minimumBid.toLocaleString()}</p>
                </div>

                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <FaUser className="text-gray-500" />
                  <span>{listing.seller}</span>
                </div>

                <p className="text-sm text-gray-600">{listing.location}</p>
              </div>

              <div className="mt-4 space-y-2">
                <button className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  Place Bid
                </button>
                <button className="w-full border border-primary-600 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}