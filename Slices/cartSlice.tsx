import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types/product';

interface CartState {
  items: Product[];
  quantity: number; // This represents total items in cart
}

const initialState: CartState = {
  items: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product & { quantity: number }>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        // Add new item with the quantity selected by the user
        state.items.push({ ...newItem });
      } else {
        // Update existing item quantity by adding the new amount
        existingItem.quantity = (existingItem.quantity || 0) + newItem.quantity;
      }
      
      // Update the total global quantity count
      state.quantity += newItem.quantity;
    },
    
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.quantity -= existingItem.quantity || 0;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;