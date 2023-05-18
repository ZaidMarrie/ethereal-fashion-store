import { useCarouselContext } from "@/context/CarouselContext";
import CarouselSlide from "./CarouselSlide";
import CarouselButtons from "./CarouselButtons";
import CarouselIndicators from "./CarouselIndicators";
import slides from "@/data/carouselSlides";
import styles from "./styles/Carousel.module.scss";

function Carousel() {
	const { slideIndex } = useCarouselContext();

	return (
		<header className={styles.carousel}>
			<div
				className={`${styles.carousel__slides} flex`}
				style={{ transform: `translateX(${slideIndex * -100}%)` }}
			>
				{slides.map((slide, index) => (
					<CarouselSlide
						key={slide.id}
						slideData={slide}
						elementId={`tapPanel${index}`}
					/>
				))}
			</div>
			<CarouselButtons />
			<CarouselIndicators />
		</header>
	);
}

export default Carousel;
