import Link from "next/link";
import Image from "next/image";
import { FiTrash } from "react-icons/fi";
import cartImg from "@/assets/images/item-image.jpg";
import styles from "@/styles/components/CartItem.module.scss";

function CartItem() {
	return (
		<li className={styles.item}>
			<Image
				src={cartImg}
				width={75}
				height={75}
				alt="no alt yet"
				className={styles.item__img}
			/>

			<div>
				<div className={styles.item__header}>
					<Link href="/">Black Evening Maxi Dress</Link>
					<button className={styles.item__button}>
						<span className="sr-only">Remove item from cart</span>
						<FiTrash size={25} />
					</button>
				</div>

				<div className={styles.item__details}>
					<span>Qty: 1</span>
					<span aria-label="item price:">$339</span>
				</div>
			</div>
		</li>
	);
}

export default CartItem;
