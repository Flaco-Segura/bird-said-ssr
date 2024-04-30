interface productListItem {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
}

export const PRODUCT_LIST_MOCKS: Array<productListItem> = [
  {
    id: '1',
    title: 'Cute ornaments',
    image: '',
    description: 'Car Window Bumper Accessories Stickers',
    price: 1.75,
  },
  {
    id: '2',
    title: 'Bird nest',
    image: '',
    description: 'Creative Wooden Outdoor Parrot Villa Style',
    price: 12.77,
  },
  {
    id: '3',
    title: 'Attracts birds',
    image: '',
    description: 'Elegant Plastic Bird Feeder',
    price: 9.97,
  },
];

export default PRODUCT_LIST_MOCKS;