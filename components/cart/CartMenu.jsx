import Link from "next/link";
import styles from "@/styles/components/CartMenu.module.scss";
import CartItem from "./CartItem";

function CartMenu({ isCartOpen, itemCount, handleClick }) {
	return (
		<div id="cartMenu" className={styles.menu} data-expanded={isCartOpen}>
			<div className={styles.menu__header}>
				<span>Items In Cart</span>
				<span>1</span>
			</div>

			<ul className={styles.menu__list}>
				<CartItem />
			</ul>

			<div className={styles.menu__total}>
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

export default CartMenu;
