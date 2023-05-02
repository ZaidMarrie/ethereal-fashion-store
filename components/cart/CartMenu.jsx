import Link from "next/link";
import styles from "@/styles/components/CartMenu.module.scss";

function CartMenu({ isCartOpen, itemCount, handleClick }) {
	return (
		<div id="cartMenu" className={styles.menu} data-expanded={isCartOpen}>
			<div className={styles.menu__header}>
				<span>Items In Cart</span>
				<span>3</span>
			</div>

			<ul className={styles.menu__list}></ul>

			<div className={styles.menu__footer}>
				<Link href="/account/cart" className="button button--full">
					Go to cart
				</Link>
			</div>
		</div>
	);
}

export default CartMenu;
