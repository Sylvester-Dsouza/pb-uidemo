import { ProductData } from './types';

export const productData: ProductData = {
  id: 'L168',
  code: 'L168',
  name: 'Biking Masha',
  price: 12.99,
  rating: 4.8,
  reviews: 124,
  description: "Bring the fun of Masha and the Bear to your party with this delightful foil balloon featuring Masha on her tricycle. Perfect for birthdays and special celebrations!",
  images: [
    'https://www.grabo-balloons.com/cm-files/img/products/l168-biking-masha-b.jpg', // Main Biking Masha Image
    'https://www.grabo-balloons.com/cm-files/img/products/l168-p-b.jpg', // Girl at party with balloon
  ],
  attributes: [
    { label: 'Color', value: 'Multicolor' },
    { label: 'Size', value: '31" / 45x79 cm' },
    { label: 'Material', value: 'Foil Metallized' },
    { label: 'Gas', value: 'Helium' },
    { label: 'Country of Origin', value: 'India' },
    { label: 'Gas Cost', value: '₹15-20' },
  ],
  tags: ['#Boy', '#Girl'],
  coordinated: [
    { id: '1', name: 'Coordinated 1', image: '/Cordinated-images/c1.jpg' },
    { id: '2', name: 'Coordinated 2', image: '/Cordinated-images/c2.jpg' },
    { id: '3', name: 'Coordinated 3', image: '/Cordinated-images/c3.jpg' },
    { id: '4', name: 'Coordinated 4', image: '/Cordinated-images/c4.jpg' },
    { id: '5', name: 'Coordinated 5', image: '/Cordinated-images/c5.jpg' },
    { id: '6', name: 'Coordinated 6', image: '/Cordinated-images/c6.jpg' },
    { id: '7', name: 'Coordinated 7', image: '/Cordinated-images/c7.jpg' },
    { id: '8', name: 'Coordinated 8', image: '/Cordinated-images/c8.jpg' },
  ]
};
