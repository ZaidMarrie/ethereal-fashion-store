import Meta from "@/components/global/Meta";
import Layout from "@/components/global/Layout";
import Button from "@/components/global/Button";
import styles from "@/styles/pages/Home.module.scss";

export default function HomePage() {
	return (
		<>
			<Meta />

			<Layout>
				{/* <Navbar /> */}
				<h1 className={styles.title}>Off to a legendary start!</h1>
				<div
					style={{
						marginTop: "2rem",
						display: "flex",
						gap: "1rem",
						justifyContent: "center",
					}}
				>
					<Button>This is a button</Button>
					<Button variant="secondary">This is a button</Button>
				</div>
			</Layout>
		</>
	);
}
