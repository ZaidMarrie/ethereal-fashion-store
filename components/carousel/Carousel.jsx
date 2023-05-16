import { useCarouselContext } from "./context/CarouselContext";
import CarouselSlide from "./CarouselSlide";
import CarouselButtons from "./CarouselButtons";
import CarouselIndicators from "./CarouselIndicators";
import styles from "./styles/Carousel.module.scss";

function Carousel() {
	const { slideIndex } = useCarouselContext();
	const slidesData = [
		{
			id: 1,
			image: {
				url: "/images/carousel-image-03.jpg",
				altText: "Three leather handbags hanging from a hook",
			},
			text: {
				title: "Shop our accessories and get 15% off selected products",
				buttonText: "Shop Accessories",
			},
			href: "/sales/accessories",
		},
		{
			id: 2,
			image: {
				url: "/images/carousel-image-02.jpg",
				altText: "Four left block heeled ankle boots with different variations",
			},
			text: {
				title: "Shop our new arrivals to get the latest trends",
				buttonText: "Shop New Arrivals",
			},
			href: "/collections/new-arrivals",
		},
		{
			id: 3,
			image: {
				url: "/images/carousel-image-01.jpg",
				altText: "Lady wearing floral white dress carrying a woven handbag",
			},
			text: {
				title: "Shop our summer dress sale and get 30% Off all summer dresses",
				buttonText: "Shop Summer Collection",
			},
			href: "/sales/summer-sale",
		},
	];

	return (
		<header className={styles.carousel}>
			<div
				className={`${styles.carousel__slides} flex`}
				style={{ transform: `translateX(${slideIndex * -100}%)` }}
			>
				{slidesData.map((slide, index) => (
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
