import Link from "next/link";
import CartItem from "./CartItem";
import styles from "./styles/CartDialog.module.scss";

function CartDialog({ isCartOpen, itemCount, handleClick }) {
	return (
		<div
			id="cartDialog"
			className={`${styles.menu} rounded-200`}
			data-expanded={isCartOpen}
		>
			<div className={`${styles.menu__header} flex justify-between`}>
				<span>Items In Cart</span>
				<span>3</span>
			</div>

			<ul className={styles.menu__list}>
				<CartItem />
			</ul>

			<div className={`${styles.menu__total} flex justify-between`}>
				<span>Total</span>
				<span>$339</span>
			</div>

			<div className={styles.menu__button}>
				<Link href="/account/cart" className="button button--full">
					Go to cart
				</Link>
			</div>
		</div>
	);
}

export default CartDialog;
