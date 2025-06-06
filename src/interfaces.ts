
// Business concept components

export interface ProductInterface {
  id: number;  
  image: string;
  title: string;
  description: string;
  price: number;
}

export interface CartItemInterface {
    id: number;
    name: string;
    image: string
    price: number;
    description: string;
}

// UI Components

export interface MainButtonInterface {
  label?: string;  
  customClass?: string;
  onClick: () => void;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}