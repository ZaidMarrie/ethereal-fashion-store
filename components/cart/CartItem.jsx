import { useCartStore } from "@/state/cartStore";
import { urlForImage } from "@/sanity/image";
import { FiTrash } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/CartItem.module.scss";

function CartItem({ product }) {
	// const cart = useCartStore(state => state.removeFromCart)
	const removeFromCart = useCartStore((state) => state.removeFromCart);

	return (
		<li className={`${styles.item} flex`}>
			<Image
				src={urlForImage(product.image).url()}
				width={75}
				height={90}
				alt={product.image.alt_text}
				className={styles.item__img}
			/>

			<div className="flex flex-column">
				<div className={`${styles.item__header} grid items-center`}>
					<Link
						href={`/categories/${product.category}/${product.slug.current}`}
						className="capitalize"
					>
						{product.name}
					</Link>
					<button
						className={`${styles.item__button} rounded-full`}
						onClick={() => removeFromCart(product._id)}
					>
						<span className="sr-only">Remove item from cart</span>
						<FiTrash size={25} />
					</button>
				</div>

				<div
					className={`${styles.item__details} fs-300 text-neutral-700 flex justify-between`}
				>
					<span>Qty: {product.quantity}</span>
					<span aria-label="item price:">
						&#36;{product.has_discount ? product.discount_price : product.price}
					</span>
				</div>
			</div>
		</li>
	);
}

export default CartItem;
