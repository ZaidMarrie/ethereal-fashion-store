import { useCartStore } from "@/state/cartStore";
import Link from "next/link";
import CartItem from "./CartItem";
import styles from "./styles/CartDialog.module.scss";

function CartDialog({ isCartOpen }) {
	const cart = useCartStore((state) => state.cart);
	const cartItemCount = cart.length;

	const cartTotal = cart.reduce((total, item) => {
		const itemPrice = item.has_discount ? item.discount_price : item.price;
		return total + itemPrice * item.quantity;
	}, 0);

	return (
		<div
			id="cartDialog"
			className={`${styles.menu} rounded-200`}
			data-expanded={isCartOpen}
		>
			{cartItemCount < 1 && (
				<div className={`${styles.menu__header} fs-500 text-center`}>
					No items in your cart
				</div>
			)}

			{cartItemCount > 0 && (
				<>
					<div className={`${styles.menu__header} flex justify-between`}>
						<span>Items In Cart</span>
						<span>{cartItemCount}</span>
					</div>

					<ul className={styles.menu__list}>
						{cart.map((item) => (
							<CartItem key={item._id} product={item} />
						))}
					</ul>

					<div className={`${styles.menu__total} flex justify-between`}>
						<span>Total</span>
						<span>&#36;{cartTotal}</span>
					</div>
				</>
			)}

			<div className={styles.menu__button}>
				<Link href="/account/cart" className="button button--full">
					Go to cart
				</Link>
			</div>
		</div>
	);
}

export default CartDialog;
