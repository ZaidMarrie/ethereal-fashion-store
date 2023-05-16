import { GrPrevious, GrNext } from "react-icons/gr";
import { useCarouselContext } from "@/context/CarouselContext";
import styles from "./styles/Carousel.module.scss";

function CarouselButtons() {
	const { prevSlide, nextSlide } = useCarouselContext();

	return (
		<div className={`${styles.controls} flex justify-between`}>
			<button onClick={prevSlide}>
				<div className="sr-only">Previous Slide</div>
				<GrPrevious size={25} color="hsl(var(--clr-neutral-900))" />
			</button>

			<button className="grid place-center" onClick={nextSlide}>
				<div className="sr-only">Next Slide</div>
				<GrNext size={25} color="hsl(var(--clr-neutral-900))" />
			</button>
		</div>
	);
}

export default CarouselButtons;
