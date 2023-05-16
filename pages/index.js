import { client } from "@/sanity/client";
import Meta from "@/components/global/Meta";
import Layout from "@/components/global/Layout";
import Carousel from "@/components/carousel/Carousel";
import CarouselContextProvider from "@/context/CarouselContext";
import styles from "@/styles/Home.module.scss";
import ProductCard from "@/components/global/ProductCard";

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

						<div className="grid products-grid">
							{featuredProducts.map((product) => (
								<ProductCard key={product._id} product={product} />
							))}
						</div>

						<h1 className="fs-900">Zaid Marrie</h1>
					</section>
				</div>
			</Layout>
		</>
	);
}

export async function getServerSideProps() {
	// [0...11] is a slice operation of the first 12 items
	const query = `*[_type == 'product' && collection == 'featured'][0..21]`;
	const featuredProducts = await client.fetch(query);

	return {
		props: {
			featuredProducts,
		},
	};
}
