import Link from "next/link";
import Logo from "../global/Logo";
import IconButton from "../global/IconButton";
import { IconContext } from "react-icons";
import { VscSignIn } from "react-icons/vsc";
import { BiHomeAlt, BiCategoryAlt, BiHeart } from "react-icons/bi";
import {
	HiOutlineTag,
	HiOutlineCollection,
	HiOutlineHeart,
} from "react-icons/hi";
import {
	MdOutlineClose,
	MdOutlineAccountCircle,
	MdOutlineHelpCenter,
	MdOutlineShoppingBag,
} from "react-icons/md";
import styles from "@/styles/components/Navbar.module.scss";

function NavMenu({ isMenuExpanded, clickHandler }) {
	return (
		<div id="navMenu" className={styles.menu} aria-expanded={isMenuExpanded}>
			<div className={styles.menu__header}>
				<Link href="/">
					<Logo />
				</Link>

				<IconButton
					srText="Close Menu"
					elementId="navMenu"
					clickHandler={clickHandler}
				>
					<MdOutlineClose />
				</IconButton>
			</div>

			<IconContext.Provider
				value={{ color: "hsl(var(--clr-neutral-900))", size: 25 }}
			>
				<ul className={styles.menu__list} aria-label="Main Navigation Links">
					<li>
						<Link className={styles.menu__link} href="/">
							<BiHomeAlt /> Home
						</Link>
					</li>
					<li>
						<Link className={styles.menu__link} href="/sales">
							<HiOutlineTag /> Sales
						</Link>
					</li>
					<li>
						<Link className={styles.menu__link} href="/collections">
							<HiOutlineCollection /> Collections
						</Link>
					</li>
					<li>
						<Link className={styles.menu__link} href="/categories">
							<BiCategoryAlt /> Categories
						</Link>
					</li>
					<li>
						<Link className={styles.menu__link} href="/account">
							<MdOutlineAccountCircle /> My Account
						</Link>
					</li>
					<li>
						<Link className={styles.menu__link} href="/support/help-center">
							<MdOutlineHelpCenter /> Help Center
						</Link>
					</li>
				</ul>

				<ul className={styles.menu__list} aria-label="User Account Links">
					<li>
						<Link className={styles.menu__link} href="/account/wishlist">
							<HiOutlineHeart /> Wishlist
						</Link>
					</li>
					<li>
						<Link className={styles.menu__link} href="/account/cart">
							<MdOutlineShoppingBag /> My Cart
						</Link>
					</li>
				</ul>

				<div className={styles.menu__footer}>
					<Link className={styles.footer__link} href="/account/login">
						<VscSignIn /> Login
					</Link>
					<p>
						Don&apos;t have an account{" "}
						<Link href="/account/register">register</Link>.
					</p>
				</div>
			</IconContext.Provider>
		</div>
	);
}

export default NavMenu;
