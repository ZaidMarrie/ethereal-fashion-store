import { IconContext } from "react-icons";
import { VscSignIn } from "react-icons/vsc";
import { BiHomeAlt, BiCategoryAlt } from "react-icons/bi";
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

import Link from "next/link";
import Logo from "@/components/global/Logo";
import IconButton from "@/components/global/IconButton";
import styles from "./styles/NavMenu.module.scss";

function NavMenu({ isMenuOpen, handleClick }) {
	return (
		<div
			id="navMenu"
			className={`${styles.menu} flex flex-column`}
			data-expanded={isMenuOpen}
		>
			<div
				className={`${styles.menu__header} flex items-center justify-between`}
			>
				<Link href="/">
					<Logo />
				</Link>

				<IconButton
					ariaControls="navMenu"
					ariaExpanded={isMenuOpen}
					handleClick={handleClick}
				>
					<MdOutlineClose />
					<span className="sr-only">Close Menu</span>
				</IconButton>
			</div>

			<IconContext.Provider
				value={{ color: "hsl(var(--clr-neutral-900))", size: 25 }}
			>
				<ul className={styles.menu__list} aria-label="Main Navigation Links">
					<li>
						<Link
							className={`${styles.menu__link} text-neutral-900 flex items-center`}
							href="/"
						>
							<BiHomeAlt /> Home
						</Link>
					</li>
					<li>
						<Link
							className={`${styles.menu__link} text-neutral-900 flex items-center`}
							href="/sales"
						>
							<HiOutlineTag /> Sales
						</Link>
					</li>
					<li>
						<Link
							className={`${styles.menu__link} text-neutral-900 flex items-center`}
							href="/collections"
						>
							<HiOutlineCollection /> Collections
						</Link>
					</li>
					<li>
						<Link
							className={`${styles.menu__link} text-neutral-900 flex items-center`}
							href="/categories"
						>
							<BiCategoryAlt /> Categories
						</Link>
					</li>
					<li>
						<Link
							className={`${styles.menu__link} text-neutral-900 flex items-center`}
							href="/account"
						>
							<MdOutlineAccountCircle /> My Account
						</Link>
					</li>
					<li>
						<Link
							className={`${styles.menu__link} text-neutral-900 flex items-center`}
							href="/support/help-center"
						>
							<MdOutlineHelpCenter /> Help Center
						</Link>
					</li>
				</ul>

				<ul className={styles.menu__list} aria-label="User Account Links">
					<li>
						<Link
							className={`${styles.menu__link} text-neutral-900 flex items-center`}
							href="/account/wishlist"
						>
							<HiOutlineHeart /> Wishlist
						</Link>
					</li>
					<li>
						<Link
							className={`${styles.menu__link} text-neutral-900 flex items-center`}
							href="/account/cart"
						>
							<MdOutlineShoppingBag /> My Cart
						</Link>
					</li>
				</ul>

				<div
					className={`${styles.menu__footer} flex items-center justify-between flex-wrap`}
				>
					<Link
						className={`${styles.footer__link} text-neutral-900 flex items-center`}
						href="/account/login"
					>
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
