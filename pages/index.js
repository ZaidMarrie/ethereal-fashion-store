import Meta from "@/components/global/Meta";
import Layout from "@/components/global/Layout";
import styles from "@/styles/pages/Home.module.scss";

export default function HomePage() {
	return (
		<>
			<Meta />

			<Layout>
				<h1 className={styles.title}>Off to a legendary start!</h1>
			</Layout>
		</>
	);
}
