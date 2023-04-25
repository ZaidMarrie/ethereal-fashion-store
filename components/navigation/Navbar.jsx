import Link from "next/link";
import IconButton from "../global/IconButton";
import Logo from "../global/Logo";
import NavMenu from "./NavMenu";
import CartModal from "./CartModal";
import AccountModal from "./AccountModal";
import { useState } from "react";
import { MdOutlineAccountCircle, MdOutlineShoppingBag } from "react-icons/md";
import styles from "@/styles/components/Navbar.module.scss";

function Navbar() {
	const [menuExpanded, setMenuExpanded] = useState(false);
	const [accountExpanded, setAccountExpanded] = useState(false);
	const [cartExpanded, setCartExpanded] = useState(false);

	const toggleMenu = () => {
		setMenuExpanded((prevState) => !prevState);
	};

	const toggleAccount = () => {
		setAccountExpanded((prevState) => !prevState);
	};

	const toggleCart = () => {
		setCartExpanded((prevState) => !prevState);
	};

	return (
		<nav className={styles.nav}>
			<div className={styles.nav__wrapper}>
				<IconButton srText="Menu" elementId="navMenu" clickHandler={toggleMenu}>
					<svg
						width="34"
						height="34"
						viewBox="0 0 34 34"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5.66667 25.5C5.26528 25.5 4.92859 25.364 4.65659 25.092C4.38459 24.82 4.24906 24.4838 4.25 24.0833C4.25 23.6819 4.38601 23.3453 4.65801 23.0733C4.93001 22.8013 5.26623 22.6657 5.66667 22.6667H28.3333C28.7347 22.6667 29.0714 22.8027 29.3434 23.0747C29.6154 23.3467 29.751 23.6829 29.75 24.0833C29.75 24.4847 29.614 24.8214 29.342 25.0934C29.07 25.3654 28.7338 25.5009 28.3333 25.5H5.66667ZM5.66667 18.4167C5.26528 18.4167 4.92859 18.2807 4.65659 18.0087C4.38459 17.7367 4.24906 17.4004 4.25 17C4.25 16.5986 4.38601 16.2619 4.65801 15.9899C4.93001 15.7179 5.26623 15.5824 5.66667 15.5833H28.3333C28.7347 15.5833 29.0714 15.7193 29.3434 15.9913C29.6154 16.2633 29.751 16.5996 29.75 17C29.75 17.4014 29.614 17.7381 29.342 18.0101C29.07 18.2821 28.7338 18.4176 28.3333 18.4167H5.66667ZM5.66667 11.3333C5.26528 11.3333 4.92859 11.1973 4.65659 10.9253C4.38459 10.6533 4.24906 10.3171 4.25 9.91667C4.25 9.51528 4.38601 9.17859 4.65801 8.90659C4.93001 8.63459 5.26623 8.49906 5.66667 8.5H28.3333C28.7347 8.5 29.0714 8.63601 29.3434 8.90801C29.6154 9.18001 29.751 9.51623 29.75 9.91667C29.75 10.3181 29.614 10.6548 29.342 10.9268C29.07 11.1988 28.7338 11.3343 28.3333 11.3333H5.66667Z"
							fill="hsl(var(--clr-neutral-900)"
						/>
					</svg>
				</IconButton>

				<Link href="/" className={styles.nav__logo}>
					<Logo />
				</Link>

				<div className={styles.nav__iconsGroup}>
					<IconButton srText="My Account" elementId="accountModal">
						<MdOutlineAccountCircle />
					</IconButton>

					<IconButton srText="My Cart" elementId="cartModal">
						<MdOutlineShoppingBag />
					</IconButton>
				</div>
			</div>

			<NavMenu isMenuExpanded={menuExpanded} clickHandler={toggleMenu} />
			<AccountModal
				isAccountExpanded={accountExpanded}
				clickHandler={toggleAccount}
			/>
			<CartModal isCartExpanded={cartExpanded} clickHandler={toggleCart} />
		</nav>
	);
}

export default Navbar;
