export interface MenuItem {
  name: string
  description: string
}

export interface MenuCategory {
  id: string
  title: string
  description: string
  image: string
  items: MenuItem[]
}

import platterImg from '../assets/platter.jpg'
import corporateImg from '../assets/corporate.jpg'
import dessertImg from '../assets/dessert.jpg'
import heroImg from '../assets/hero.jpg'
import galleryImg from '../assets/gallery2.jpg'

export const menuCategories: MenuCategory[] = [
  {
    id: 'everyday',
    title: 'Everyday Meals',
    description: 'Fresh, satisfying meals for everyday enjoyment — simple, wholesome and flavourful.',
    image: platterImg,
    items: [
      { name: 'Grilled Chicken & Rice', description: 'Marinated grilled chicken served with seasoned rice and vegetables.' },
      { name: 'Beef Stew with Pap', description: 'Slow-cooked beef stew served with soft maize pap.' },
      { name: 'Chicken Curry', description: 'Mild, aromatic chicken curry with rice.' },
      { name: 'Vegetable Stir-Fry', description: 'Seasonal vegetables tossed in a light savoury sauce.' },
    ],
  },
  {
    id: 'traditional',
    title: 'Traditional Botswana-Inspired Dishes',
    description: 'Local favourites and familiar flavours, prepared with care and beautiful presentation.',
    image: '/traditional-food.jpg',
    items: [
      { name: 'Seswaa', description: 'Slow-pounded beef, traditionally prepared and served with pap.' },
      { name: 'Bogobe jwa Lerotse', description: 'Sorghum porridge served with melon.' },
      { name: 'Morogo', description: 'Wild spinach cooked with onions and tomatoes.' },
      { name: 'Dikgobe', description: 'Bean and maize dish, hearty and nourishing.' },
    ],
  },
  {
    id: 'platters',
    title: 'Party Platters',
    description: 'Generous, colourful platters designed to impress your guests at any celebration.',
    image: heroImg,
    items: [
      { name: 'Cold Meat & Cheese Platter', description: 'Assorted cold meats, cheeses, crackers and fruit.' },
      { name: 'Finger Foods Platter', description: 'Mini samosas, spring rolls, sliders and dips.' },
      { name: 'Fruit Platter', description: 'Fresh seasonal fruit, beautifully arranged.' },
      { name: 'Dessert Platter', description: 'Brownies, cookies and sweet treats for sharing.' },
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate Catering',
    description: 'Professional catering for meetings, launches, workshops and office events.',
    image: corporateImg,
    items: [
      { name: 'Working Lunch Buffet', description: 'A balanced buffet with mains, sides and salads.' },
      { name: 'Tea & Coffee Station', description: 'Hot beverages with biscuits and light snacks.' },
      { name: 'Executive Plated Lunch', description: 'A plated meal for smaller executive groups.' },
      { name: 'Snack Boxes', description: 'Individual snack boxes for delegates on the go.' },
    ],
  },
  {
    id: 'occasions',
    title: 'Special Occasion Catering',
    description: 'Tailored menus for weddings, birthdays, baby showers and private celebrations.',
    image: galleryImg,
    items: [
      { name: 'Wedding Buffet', description: 'A generous buffet tailored to your celebration.' },
      { name: 'Birthday Party Menu', description: 'Fun, crowd-pleasing dishes for all ages.' },
      { name: 'Baby Shower Spread', description: 'Light bites, platters and sweet treats.' },
      { name: 'Family Gathering Feast', description: 'A hearty spread for family reunions.' },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts & Treats',
    description: 'Sweet finishes and baked goods to complete any occasion.',
    image: dessertImg,
    items: [
      { name: 'Chocolate Cake', description: 'Rich chocolate cake with a smooth ganache.' },
      { name: 'Vanilla Cupcakes', description: 'Light vanilla cupcakes with buttercream.' },
      { name: 'Milk Tart', description: 'Classic creamy milk tart.' },
      { name: 'Fruit Salad', description: 'Fresh fruit salad with a light dressing.' },
    ],
  },
]