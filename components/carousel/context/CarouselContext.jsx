import { useState, useContext, createContext } from "react";

const CarouselContext = createContext();

export const useCarouselContext = () => {
	return useContext(CarouselContext);
};

function CarouselContextProvider({ children }) {
	const [slideIndex, setSlideIndex] = useState(0);

	// Cycle through to the next slide
	const nextSlide = () => {
		setSlideIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
	};

	// Cycle through to the previous slide
	const prevSlide = () => {
		setSlideIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
	};

	// Goes to the selected slide
	const goToSlide = (idx) => {
		setSlideIndex(idx);
	};

	return (
		<CarouselContext.Provider
			value={{ slideIndex, prevSlide, nextSlide, goToSlide }}
		>
			{children}
		</CarouselContext.Provider>
	);
}

export default CarouselContextProvider;
