import Head from "next/head";

function Meta({ title, description, children }) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="manifest" href="/site.webmanifest" />
			{children}
		</Head>
	);
}

Meta.defaultProps = {
	title: "Ethereal Fashion Store",
};

export default Meta;
