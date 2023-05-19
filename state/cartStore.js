import { create } from "zustand";

const cartStore = (set) => ({
	cart: [],
	addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
	removeFromCart: (id) =>
		set((state) => ({
			cart: state.cart.filter((item) => item._id !== id),
		})),
	increaseQuantity: (id) =>
		set((state) => ({
			cart: state.cart.map((item) =>
				item._id !== id ? item : { ...item, quantity: item.quantity + 1 }
			),
		})),
	decreaseQuantity: (id) =>
		set((state) => ({
			cart: state.cart.map((item) => {
				if (item._id !== id) return item;

				return {
					...item,
					quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
				};
			}),
		})),
});

export const useCartStore = create(cartStore);
