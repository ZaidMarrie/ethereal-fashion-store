import { create } from "zustand";

const wishlistStore = create((set) => ({
	wishlist: [],
}));
