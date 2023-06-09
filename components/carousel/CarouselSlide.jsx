import Link from "next/link";
import Image from "next/image";
import styles from "./styles/CarouselSlide.module.scss";

function CarouselSlide({ slideData, elementId }) {
	return (
		<div id={elementId} className={styles.slide} role="tabpanel">
			<Image
				src={slideData.image.url}
				priority
				fill
				alt={slideData.image.alt_text}
			/>

			<div
				className={`${styles.textOverlay} text-neutral-50 text-center capitalize grid place-center`}
			>
				<h2>{slideData.text.title}</h2>

				<Link href={slideData.href} className="button button--light">
					{slideData.text.buttonText}
				</Link>
			</div>
		</div>
	);
}

export default CarouselSlide;
