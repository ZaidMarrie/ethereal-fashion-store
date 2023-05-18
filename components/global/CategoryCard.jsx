import Link from "next/link";
import Image from "next/image";
import styles from "./styles/CategoryCard.module.scss";

function CategoryCard({ category }) {
	return (
		<div className={`${styles.card} rounded-200 grid place-center`}>
			<div className={`${styles.card__image}`}>
				<Image
					src={category.image.url}
					alt={category.image.alt_text}
					width={250}
					height={150}
				/>
			</div>

			<div className={`${styles.card__content}`}>
				<Link className="fs-600 text-neutral-50" href={category.href}>
					{category.name}
				</Link>
			</div>
		</div>
	);
}

export default CategoryCard;
