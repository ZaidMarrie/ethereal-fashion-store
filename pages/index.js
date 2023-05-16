import { client } from "@/sanity/client";
import Meta from "@/components/global/Meta";
import Layout from "@/components/global/Layout";
import Carousel from "@/components/carousel/Carousel";
import CarouselContextProvider from "@/context/CarouselContext";
import styles from "@/styles/Home.module.scss";

export default function HomePage({ featuredProducts }) {
	return (
		<>
			<Meta />

			<Layout>
				<CarouselContextProvider>
					<Carousel />
				</CarouselContextProvider>

				<div className="container">
					<section className={styles.section}>
						<h2 className="section-title fs-700 grid items-center">
							Featured Products
						</h2>

						{featuredProducts.map((product) => product.name)}

						<h1 className="fs-900">Zaid Marrie</h1>
					</section>
				</div>
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const query = "*[_type == 'product']";
	const featuredProducts = await client.fetch(query);

	return {
		props: {
			featuredProducts,
		},
	};
}
