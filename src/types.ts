export interface FoodProps {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export type InsertFoodProps = Omit<FoodProps, 'id' | 'available'>