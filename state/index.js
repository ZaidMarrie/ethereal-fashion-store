import { create } from "zustand";

const useCartStore = create((set) => ({
	cart: [],
	addToCart: () => set((state) => ({ cart: [...cart, state] })),
	removeFromCart: () =>
		set((state) => ({ cart: cart.filter((item) => item !== state.item) })),
}));
