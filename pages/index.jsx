import { client } from "@/sanity/client";
import Image from "next/image";
import Meta from "@/components/global/Meta";
import Layout from "@/components/global/Layout";
import Carousel from "@/components/carousel/Carousel";
import CarouselContextProvider from "@/context/CarouselContext";
import ProductCard from "@/components/global/ProductCard";
import bannerImage from "@/assets/images/banner-image-home.png";
import styles from "@/styles/Home.module.scss";
import SubscribeForm from "@/components/global/SubscribeForm";

export default function HomePage({ featuredProducts }) {
	return (
		<>
			<Meta />

			<Layout>
				<CarouselContextProvider>
					<Carousel />
				</CarouselContextProvider>

				<div className="container">
					<section aria-labelledby="featuredProducts">
						<h2
							id="featuredProducts"
							className="section-title fs-700 grid items-center"
						>
							Featured Products
						</h2>

						<div className="grid products-grid">
							{featuredProducts.map((product) => (
								<ProductCard key={product._id} product={product} />
							))}
						</div>
					</section>

					<section
						className={`${styles.banner} grid items-center`}
						aria-labelledby="shopCollections"
					>
						<div className={styles.banner__image}>
							<Image
								src={bannerImage}
								alt="A lady with both hands full of shopping bags"
								fill
							/>
						</div>

						<div className={`${styles.banner__content} text-center`}>
							<h2 className="fs-700 capitalize">Shop the collection</h2>

							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Laboriosam voluptatum iste consectetur! Dolore, quos facere
								magnam voluptatem minima tenetur fugiat similique quaerat
								praesentium! Nihil neque dolorem, maxime cupiditate aut est.
							</p>

							<button className="button">Shop By Collection</button>
						</div>
					</section>

					<section aria-labelledby="browseCategories">
						<h2
							id="browseCategories"
							className="section-title fs-700 grid items-center"
						>
							Browse Categories
						</h2>
					</section>

					<SubscribeForm />
				</div>
			</Layout>
		</>
	);
}

export async function getServerSideProps() {
	// [0...11] is a slice operation of the first 12 items
	const query = `*[_type == 'product' && collection == 'featured'][0..11]`;
	const featuredProducts = await client.fetch(query);

	return {
		props: {
			featuredProducts,
		},
	};
}
