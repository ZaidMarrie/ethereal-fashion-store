import { client } from "@/sanity/client";
import Link from "next/link";
import Meta from "@/components/global/Meta";
import ProductCard from "@/components/global/ProductCard";

function CollectionsPage({
	featuredProducts,
	trendingProducts,
	newArrivalsProducts,
}) {
	return (
		<>
			<Meta title="Shop By Collection" />

			<h1 className="fs-900 text-center capitalize pt-700">
				Shop By Collection
			</h1>

			<div className="container">
				<section aria-labelledby="newArrivals">
					<h2
						id="newArrivals"
						className="section-title fs-700 grid items-center"
					>
						Shop New Arrivals
					</h2>

					<div className="grid products-grid">
						{newArrivalsProducts.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
					</div>

					<div className="flex justify-center mt-700">
						<Link
							className="button button--secondary"
							href="/collections/new-arrivals"
						>
							Shop All New Arrivals
						</Link>
					</div>
				</section>

				<section aria-labelledby="featuredProducts">
					<h2
						id="featuredProducts"
						className="section-title fs-700 grid items-center"
					>
						Shop Featured Products
					</h2>

					<div className="grid products-grid">
						{featuredProducts.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
					</div>

					<div className="flex justify-center mt-700">
						<Link
							className="button button--secondary"
							href="/collections/featured"
						>
							Shop All Featured
						</Link>
					</div>
				</section>

				<section aria-labelledby="trendingProducts">
					<h2
						id="trendingProducts"
						className="section-title fs-700 grid items-center"
					>
						Shop Trending Products
					</h2>

					<div className="grid products-grid">
						{trendingProducts.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
					</div>

					<div className="flex justify-center mt-700">
						<Link
							className="button button--secondary"
							href="/collections/trending"
						>
							Shop All Trending
						</Link>
					</div>
				</section>
			</div>
		</>
	);
}

export async function getServerSideProps() {
	const featuredQuery = `*[_type == 'product' && collection == 'featured'][0..9]`;
	const trendingQuery = `*[_type == 'product' && collection == 'trending'][0..9]`;
	const newArrivalsQuery = `*[_type == 'product' && collection == 'new-arrivals'][0..9]`;

	const featuredProducts = await client.fetch(featuredQuery);
	const trendingProducts = await client.fetch(trendingQuery);
	const newArrivalsProducts = await client.fetch(newArrivalsQuery);

	return {
		props: { featuredProducts, trendingProducts, newArrivalsProducts },
	};
}

export default CollectionsPage;
