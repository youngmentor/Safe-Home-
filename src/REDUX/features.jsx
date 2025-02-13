import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  product: [],
  cart: [],
  RECENT: [],
  addProduct: [],
}
const features = createSlice({
  name: 'e-store',
  initialState,
  reducers: {
    AllProducts: (state, { payload }) => {
      state.product = payload;
    },
    addToCart: (state, { payload }) => {
      const check = state.cart.findIndex((i) => i.id === payload.id);
      if (check >= 0) {
        const amount = state.cart[check].QTY += 1;
        state.cart[check].total = amount * state.cart[check].price
      } else {
        const item = { ...payload, QTY: 1, total: payload.price };
        state.cart.push(item);
      }
    },
    removeItem: (state, { payload }) => {
      const remove = state.cart.filter((i) => i.id != payload.id);
      state.cart = remove;
    },
    clearAll: (state, { payload }) => {
      const clearAll = []
      state.cart = clearAll
    },
    Check: (state, { payload }) => {
      const check = state.cart.findIndex((i) => i.id === payload.id)
      if (state.cart[check].QTY > 1) {
        const newAmount = state.cart[check].QTY -= 1
        state.cart[check].total = newAmount * state.cart[check].price
      } else {
        const remove = state.cart.filter((i) => i.id != payload.id);
        state.cart = remove;
      }
    },
    recent: (state, { payload }) => {
      const check = state.RECENT.findIndex((i) => i.id === payload.id)
      // console.log(check)
      if (check === -1) {
        const recent = [...state.RECENT, payload]
        state.RECENT = recent
      }
    },
    addProduct:(state, { payload }) => {
    state.addProduct = [...state.addProduct, payload]
    }
  }
})

export const { AllProducts, addToCart, removeItem, clearAll, Check, recent,addProduct } = features.actions
export default features.reducer