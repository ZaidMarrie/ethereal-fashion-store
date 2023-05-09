import Meta from "@/components/global/Meta";
import Layout from "@/components/global/Layout";
import Carousel from "@/components/carousel/Carousel";
import CarouselContextProvider from "@/components/carousel/context/CarouselContext";
import styles from "@/styles/pages/Home.module.scss";

export default function HomePage() {
	return (
		<>
			<Meta />

			<Layout>
				<CarouselContextProvider>
					<Carousel />
				</CarouselContextProvider>

				<div className="container">
					<section className={styles.section}>
						<h2 className="section-title">Featured Products</h2>
					</section>
				</div>
			</Layout>
		</>
	);
}
