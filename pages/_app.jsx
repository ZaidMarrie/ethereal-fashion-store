import { Oswald } from "next/font/google";
import { IconContext } from "react-icons";
import Layout from "@/components/global/Layout";
import "../styles/styles.scss";

const oswald = Oswald({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
	return (
		<div className={oswald.className}>
			<IconContext.Provider value={{ size: 34 }}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</IconContext.Provider>
		</div>
	);
}
