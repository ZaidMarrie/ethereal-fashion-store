import { useState } from "react";
import { useCartStore } from "@/state/cartStore";
import { MdOutlineAccountCircle, MdOutlineShoppingBag } from "react-icons/md";
import Link from "next/link";
import MenuIcon from "./MenuIcon";
import NavMenu from "./NavMenu";
import Logo from "@/components/global/Logo";
import Badge from "@/components/global/Badge";
import IconButton from "@/components/global/IconButton";
import CartDialog from "@/components/cart/CartDialog";
import styles from "./styles/Navbar.module.scss";

function Navbar() {
	const [menuExpanded, setMenuExpanded] = useState(false);
	const [accountOpen, setAccountOpen] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);

	const cartItemCount = useCartStore((state) => state.cart).length;

	const toggleMenu = () => setMenuExpanded((prevState) => !prevState);
	const toggleAccount = () => setAccountOpen((prevState) => !prevState);
	const toggleCart = () => setCartOpen((prevState) => !prevState);

	return (
		<nav className={styles.nav}>
			<div
				className={`${styles.nav__wrapper} flex items-center justify-between`}
			>
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

				<div className={`${styles.nav__iconsGroup} flex`}>
					<IconButton
						ariaControls="accountDialog"
						ariaExpanded={accountOpen}
						handleClick={toggleAccount}
					>
						<MdOutlineAccountCircle />
						<span className="sr-only">My Account</span>
					</IconButton>

					<IconButton
						ariaControls="cartDialog"
						ariaExpanded={cartOpen}
						handleClick={toggleCart}
					>
						<MdOutlineShoppingBag />
						<span className="sr-only">My Cart</span>
						{cartItemCount > 0 && <Badge count={cartItemCount} />}
					</IconButton>

					<CartDialog isCartOpen={cartOpen} />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
