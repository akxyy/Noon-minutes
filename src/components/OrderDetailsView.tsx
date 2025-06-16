import React, { useEffect, useRef } from 'react';
import { User } from 'lucide-react';
import { Order } from './Dashboard';

interface OrderDetailsViewProps {
  order: Order | null;
  onClose: () => void;
}

const statusStepsMap: { [key: string]: string[] } = {
  'Auto Dispatch Failed': ['Order Accepted'],
  'Pending': ['Order Accepted'],
  'Accepted': ['Order Accepted', 'Assigned', 'Accepted'],
  'Driver at Pickup': ['Order Accepted', 'Assigned', 'Accepted', 'Operation at Pickup'],
  'Picked': ['Order Accepted', 'Assigned', 'Accepted', 'Operation at Pickup', 'Picked'],
  'Driver at Dropoff': ['Order Accepted', 'Assigned', 'Accepted', 'Operation at Pickup', 'Picked', 'Dropoff'],
  'Completed': ['Order Accepted', 'Assigned', 'Accepted', 'Operation at Pickup', 'Picked', 'Dropoff', 'Completed']
};

const OrderDetailsView = ({ order, onClose }: OrderDetailsViewProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (order) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [order, onClose]);

  if (!order) return null;

  const completedSteps = statusStepsMap[order.status] || ['Order Accepted'];
  const allSteps = [
    'Order Accepted',
    'Assigned',
    'Accepted',
    'Operation at Pickup',
    'Picked',
    'Dropoff',
    'Completed'
  ];

  return (
    <div className="fixed inset-0 z-40 flex justify-center bg-black/20 overflow-y-auto">
      <div
        className="mt-[5%] bg-white rounded-lg shadow-xl border w-[520px] max-h-[400px] flex flex-col overflow-hidden"
        ref={modalRef}
      >
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {/* Profile Section */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{order.name}</p>
              </div>
            </div>

            {/* Status Steps */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="relative">
                <div className="absolute top-3 left-3 right-3 h-0.5 bg-gray-300"></div>
                <div className="flex justify-between items-start relative">
                  {allSteps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center relative">
                      <div
                        className={`w-6 h-6 rounded-full border-2 relative z-10 bg-white ${
                          completedSteps.includes(step)
                            ? 'bg-green-500 border-green-500'
                            : 'border-gray-300'
                        }`}
                      />
                      <span
                        className={`text-xs mt-2 text-center leading-tight ${
                          completedSteps.includes(step) ? 'text-gray-900' : 'text-gray-500'
                        }`}
                        style={{ maxWidth: '70px' }}
                      >
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Delivery Status */}
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <p className="text-sm text-gray-600">{order.name}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-3">
                  <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-700">
                    {order.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsView;