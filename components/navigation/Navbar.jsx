import Link from "next/link";
import MenuIcon from "./MenuIcon";
import NavMenu from "./NavMenu";
import Logo from "@/components/global/Logo";
import Badge from "@/components/global/Badge";
import IconButton from "@/components/global/IconButton";
import CartMenu from "@/components/cart/CartMenu";
import { useState } from "react";
import { MdOutlineAccountCircle, MdOutlineShoppingBag } from "react-icons/md";
import styles from "@/styles/components/Navbar.module.scss";

function Navbar() {
	const [menuExpanded, setMenuExpanded] = useState(false);
	const [accountOpen, setAccountOpen] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);

	const toggleMenu = () => setMenuExpanded((prevState) => !prevState);
	const toggleAccount = () => setAccountOpen((prevState) => !prevState);
	const toggleCart = () => setCartOpen((prevState) => !prevState);

	return (
		<nav className={styles.nav}>
			<div className={styles.nav__wrapper}>
				<IconButton
					ariaControls="navMenu"
					ariaExpanded={menuExpanded}
					handleClick={toggleMenu}
				>
					<MenuIcon />
					<span className="sr-only">Open Menu</span>
				</IconButton>

				<NavMenu isMenuOpen={menuExpanded} handleClick={toggleMenu} />

				<Link href="/" className={styles.nav__logo}>
					<Logo />
				</Link>

				<div className={styles.nav__iconsGroup}>
					<IconButton
						ariaControls="account"
						ariaExpanded={accountOpen}
						handleClick={toggleAccount}
					>
						<MdOutlineAccountCircle />
						<span className="sr-only">My Account</span>
					</IconButton>

					<IconButton
						ariaControls="cartMenu"
						ariaExpanded={cartOpen}
						handleClick={toggleCart}
					>
						<MdOutlineShoppingBag />
						<span className="sr-only">My Cart</span>
						<Badge count={3} />
					</IconButton>

					<CartMenu isCartOpen={cartOpen} />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
