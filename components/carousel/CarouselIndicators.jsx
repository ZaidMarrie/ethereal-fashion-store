import styles from "@/styles/components/Carousel.module.scss";
import { useCarouselContext } from "./context/CarouselContext";

function CarouselIndicators() {
	const { slideIndex, goToSlide } = useCarouselContext();

	return (
		<div className={styles.indicators}>
			<button
				onClick={() => goToSlide(0)}
				role="tab"
				aria-controls="tabPanel0"
				aria-selected={slideIndex === 0}
			>
				<span className="sr-only">Go to first Slide</span>
			</button>

			<button
				onClick={() => goToSlide(1)}
				role="tab"
				aria-controls="tabPanel1"
				aria-selected={slideIndex === 1}
			>
				<span className="sr-only">Go to second slide</span>
			</button>

			<button
				onClick={() => goToSlide(2)}
				role="tab"
				aria-controls="tabPanel2"
				aria-selected={slideIndex === 2}
			>
				<span className="sr-only">Go to last slide</span>
			</button>
		</div>
	);
}

export default CarouselIndicators;
