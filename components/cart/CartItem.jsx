import { FiTrash } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import cartImg from "@/assets/images/item-image.jpg";
import styles from "./styles/CartItem.module.scss";

function CartItem() {
	return (
		<li className={`${styles.item} flex`}>
			<Image
				src={cartImg}
				width={75}
				height={75}
				alt="no alt yet"
				className={styles.item__img}
			/>

			<div className="flex flex-column">
				<div
					className={`${styles.item__header} flex items-center justify-between`}
				>
					<Link href="/" className="capitalize">
						Black Evening Maxi Dress
					</Link>
					<button className={`${styles.item__button} rounded-full`}>
						<span className="sr-only">Remove item from cart</span>
						<FiTrash size={25} />
					</button>
				</div>

				<div
					className={`${styles.item__details} fs-300 text-neutral-700 flex justify-between`}
				>
					<span>Qty: 3</span>
					<span aria-label="item price:">$339</span>
				</div>
			</div>
		</li>
	);
}

export default CartItem;
