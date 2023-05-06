import { GrPrevious, GrNext } from "react-icons/gr";
import styles from "@/styles/components/Carousel.module.scss";
import { useCarouselContext } from "./context/CarouselContext";

function CarouselButtons() {
	const { prevSlide, nextSlide } = useCarouselContext();

	return (
		<div className={styles.controls}>
			<button onClick={prevSlide}>
				<div className="sr-only">Previous Slide</div>
				<GrPrevious size={25} color="hsl(var(--clr-neutral-900))" />
			</button>

			<button onClick={nextSlide}>
				<div className="sr-only">Next Slide</div>
				<GrNext size={25} color="hsl(var(--clr-neutral-900))" />
			</button>
		</div>
	);
}

export default CarouselButtons;
