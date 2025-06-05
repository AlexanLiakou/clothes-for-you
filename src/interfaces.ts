export interface ProductInterface {
  id: number,  
  image: string,
  title: string,
  description: string,
  price: number,
}

// UI Components

export interface MainButtonInterface {
  label?: string,  
  customClass?: string,
  onClick: () => void,
  icon?: React.ReactNode,
  children?: React.ReactNode,
}