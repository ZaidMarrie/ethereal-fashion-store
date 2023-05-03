import Navbar from "../navigation/Navbar";

function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
}

export default Layout;
