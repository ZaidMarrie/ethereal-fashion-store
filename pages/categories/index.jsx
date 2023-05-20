import { client } from "@/sanity/client";
import Meta from "@/components/global/Meta";
import ProductCard from "@/components/global/ProductCard";
import Link from "next/link";

function CategoriesPage({ dresses, bottoms, shoes }) {
	return (
		<>
			<Meta title="Shop By Category" />

			<h1 className="fs-900 text-center capitalize pt-700">Shop By Category</h1>

			<div className="container">
				<section aria-labelledby="dresses">
					<h2 id="dresses" className="section-title fs-700 grid items-center">
						Shop Dresses
					</h2>

					<div className="grid products-grid">
						{dresses.map((dress) => (
							<ProductCard key={dress._id} product={dress} />
						))}
					</div>

					<div className="flex justify-center mt-700">
						<Link
							className="button button--secondary"
							href="/categories/dresses"
						>
							Shop All Dresses
						</Link>
					</div>
				</section>

				<section aria-labelledby="bottoms">
					<h2 id="bottoms" className="section-title fs-700 grid items-center">
						Shop Bottoms
					</h2>

					<div className="grid products-grid">
						{bottoms.map((bottom) => (
							<ProductCard key={bottom._id} product={bottom} />
						))}
					</div>

					<div className="flex justify-center mt-700">
						<Link
							className="button button--secondary"
							href="/categories/bottoms"
						>
							Shop All Bottoms
						</Link>
					</div>
				</section>

				<section aria-labelledby="shoes">
					<h2 id="shoes" className="section-title fs-700 grid items-center">
						Shop Shoes
					</h2>

					<div className="grid products-grid">
						{shoes.map((shoe) => (
							<ProductCard key={shoe._id} product={shoe} />
						))}
					</div>

					<div className="flex justify-center mt-700">
						<Link className="button button--secondary" href="/categories/shoes">
							Shop All Shoes
						</Link>
					</div>
				</section>
			</div>
		</>
	);
}

export async function getServerSideProps() {
	const dressesQuery = `*[_type == 'product' && category == 'dresses'][0..9]`;
	const topsQuery = `*[_type == 'product' && category == 'tops'][0..9]`;
	const bottomsQuery = `*[_type == 'product' && category == 'bottoms'][0..9]`;
	const shoesQuery = `*[_type == 'product' && category == 'shoes'][0..9]`;
	const coatsJacketsQuery = `*[_type == 'product' && category == 'coats-jackets'][0..9]`;
	const accessoriesQuery = `*[_type == 'product' && category == 'accessories'][0..9]`;

	const dresses = await client.fetch(dressesQuery);
	const bottoms = await client.fetch(bottomsQuery);
	const shoes = await client.fetch(shoesQuery);

	return {
		props: { dresses, bottoms, shoes },
	};
}

export default CategoriesPage;
