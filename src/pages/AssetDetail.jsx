import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { FaUserCircle, FaPhone, FaIdCard, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const mockAssets = {
  cars: [
    {
      id: 1,
      name: 'Tesla Model 3',
      rentalFee: 100,
      status: 'Rented',
      lastMaintenance: '2024-02-15',
      image: 'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?auto=format&fit=crop&q=80&w=300',
      renter: {
        name: 'John',
        surname: 'Doe',
        phone: '+1 234 567 8900',
        idNumber: 'ID123456',
        email: 'john.doe@email.com',
        paymentStatus: 'Paid',
        paymentDate: '2024-02-20',
        rentalStart: '2024-02-15',
        rentalEnd: '2024-03-15'
      }
    },
    {
      id: 2,
      name: 'BMW 3 Series',
      rentalFee: 90,
      status: 'Rented',
      lastMaintenance: '2024-02-10',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=300',
      renter: {
        name: 'Alice',
        surname: 'Smith',
        phone: '+1 234 567 8901',
        idNumber: 'ID789012',
        email: 'alice.smith@email.com',
        paymentStatus: 'Pending',
        paymentDate: null,
        rentalStart: '2024-02-10',
        rentalEnd: '2024-03-10'
      }
    }
  ],
  bikes: [
    {
      id: 1,
      name: 'Harley Davidson',
      rentalFee: 50,
      status: 'Available',
      lastMaintenance: '2024-02-12',
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=300'
    }
  ],
  trucks: [
    {
      id: 1,
      name: 'Ford F-150',
      rentalFee: 150,
      status: 'Maintenance',
      lastMaintenance: '2024-02-01',
      image: 'https://images.unsplash.com/photo-1586191582056-b7f0394928fa?auto=format&fit=crop&q=80&w=300'
    }
  ],
  houses: [
    {
      id: 1,
      name: 'Beach House',
      rentalFee: 200,
      status: 'Available',
      lastMaintenance: '2024-01-30',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=300'
    }
  ]
};

const statusColors = {
  'Available': 'bg-green-100 text-green-800',
  'Rented': 'bg-blue-100 text-blue-800',
  'Maintenance': 'bg-yellow-100 text-yellow-800'
};

export default function AssetDetail() {
  const { category } = useParams();
  const assets = mockAssets[category] || [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 capitalize">{category}</h2>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Add New {category.slice(0, -1)}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {assets.map((asset, index) => (
          <motion.div
            key={asset.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={asset.image} 
                alt={asset.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-800">{asset.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[asset.status]}`}>
                  {asset.status}
                </span>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Rental Fee</span>
                  <span className="font-medium">${asset.rentalFee}/day</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Last Maintenance</span>
                  <span className="font-medium">
                    {format(new Date(asset.lastMaintenance), 'MMM dd, yyyy')}
                  </span>
                </div>
              </div>

              {asset.renter && (
                <div className="mt-4 border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Current Renter</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <FaUserCircle className="text-gray-500" />
                      <span>{asset.renter.name} {asset.renter.surname}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <FaPhone className="text-gray-500" />
                      <span>{asset.renter.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <FaIdCard className="text-gray-500" />
                      <span>{asset.renter.idNumber}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Payment Status:</span>
                      <div className="flex items-center space-x-1">
                        {asset.renter.paymentStatus === 'Paid' ? (
                          <>
                            <FaCheckCircle className="text-green-500" />
                            <span className="text-green-500">Paid</span>
                            <span className="text-gray-500 ml-2">
                              ({format(new Date(asset.renter.paymentDate), 'MMM dd, yyyy')})
                            </span>
                          </>
                        ) : (
                          <>
                            <FaTimesCircle className="text-red-500" />
                            <span className="text-red-500">Pending</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Rental Period:</span>
                      <span>
                        {format(new Date(asset.renter.rentalStart), 'MMM dd')} - {format(new Date(asset.renter.rentalEnd), 'MMM dd, yyyy')}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-4 flex space-x-2">
                <button className="flex-1 bg-primary-100 text-primary-600 px-3 py-2 rounded-lg hover:bg-primary-200 transition-colors">
                  Edit
                </button>
                <button className="flex-1 bg-red-100 text-red-600 px-3 py-2 rounded-lg hover:bg-red-200 transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}