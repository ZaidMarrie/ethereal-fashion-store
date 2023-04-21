import { Oswald } from "next/font/google";
import "@/components/styles/globals.css";

const oswald = Oswald({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
	return (
		<div className={oswald.className}>
			<Component {...pageProps} />
		</div>
	);
}
