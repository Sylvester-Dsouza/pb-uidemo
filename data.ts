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
    { label: 'Language', value: 'No text' },
    { label: 'Gas Capacity', value: '0,032 m3' },
  ],
  tags: ['#Boy', '#Girl'],
  coordinated: [
    { id: '1', name: 'Rainbow Balloons', image: 'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&q=80&w=400' },
    { id: '2', name: 'Gold Confetti', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=400' },
    { id: '3', name: 'Pink Heart Foil', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=400' },
    { id: '4', name: 'Number Balloons', image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=400' },
    { id: '5', name: 'Party Balloons', image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&q=80&w=400' },
    { id: '6', name: 'Pastel Mix', image: 'https://images.unsplash.com/photo-1481162854517-d9e353af153d?auto=format&fit=crop&q=80&w=400' },
    { id: '7', name: 'Metallic Balloons', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400' },
  ]
};
