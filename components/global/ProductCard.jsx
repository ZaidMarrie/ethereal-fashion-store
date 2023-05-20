import { useState } from "react";
import { useCartStore } from "@/state/cartStore";
import { urlForImage } from "@/sanity/image";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { MdAddShoppingCart } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/ProductCard.module.scss";

function ProductCard({ product }) {
	const [wishlisted, setWishlisted] = useState(false);

	const cart = useCartStore((state) => state.cart);
	const addToCart = useCartStore((state) => state.addToCart);
	const increaseQuantity = useCartStore((state) => state.increaseQuantity);

	const handleCartAdd = () => {
		const cartHasProduct = cart.some((item) => item._id === product._id);

		if (!cartHasProduct) {
			addToCart({ ...product, quantity: 1 });
			return;
		}

		increaseQuantity(product._id);
	};

	return (
		<div className={`${styles.card} rounded-300 flex flex-column`}>
			<div className={`${styles.card__image}`}>
				<Image
					src={urlForImage(product.image).url()}
					alt={product.image.alt_text}
					fill
				/>
			</div>

			<div className={`${styles.card__wrapper}`}>
				<h3 className={`${styles.card__title} fs-500`}>
					<Link
						className="capitalize"
						href={`/categories/${product.category}/${product.slug.current}`}
					>
						{product.name}
					</Link>
				</h3>

				<div>
					{product.has_discount && (
						<div
							className={`${styles.card__label} text-neutral-50 rounded-100`}
						>
							{product.collection === "summer-sale" ? "30% Off" : "15% Off"}
						</div>
					)}

					<button
						className={`${styles.card__heart} rounded-full`}
						onClick={() => setWishlisted((prevState) => !prevState)}
					>
						<span className="sr-only">Add To Wishlist</span>
						{wishlisted ? (
							<HiHeart color="hsl(var(--clr-primary-800)" />
						) : (
							<HiOutlineHeart color="hsl(var(--clr-primary-800)" />
						)}
					</button>
				</div>

				<div className="flex items-center justify-between">
					<div className={`${styles.card__price} flex`}>
						<div>
							<span className="sr-only">Current Price</span>
							&#36;
							{product.has_discount ? product.discount_price : product.price}
						</div>

						{product.has_discount && (
							<div className="text-neutral-700 line-through">
								<span className="sr-only">Original Price</span>
								&#36;{product.price}
							</div>
						)}
					</div>

					<button
						className={`${styles.card__button} rounded-100`}
						onClick={handleCartAdd}
					>
						<div className="sr-only">Add To Cart</div>
						<MdAddShoppingCart size={28} color="hsl(var(--clr-neutral-100)" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
