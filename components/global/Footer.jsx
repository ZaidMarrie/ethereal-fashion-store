import Link from "next/link";
import Logo from "./Logo";
import styles from "./styles/Footer.module.scss";

function Footer() {
	return (
		<footer
			className={`${styles.footer} text-neutral-50`}
			aria-label="Additional links"
		>
			<div className={`${styles.footer__wrapper} grid`}>
				<div className={`${styles.footer__column}`}>
					<div className={`${styles.footer__logo}`}>
						<Link href="/">
							<Logo color="white" />
							<span className="sr-only">Go to Homepage</span>
						</Link>
					</div>
					<p>Shop the latest fashion trends.</p>
					<p>Your favorite destination for ethical fashion.</p>
				</div>

				<div className={`${styles.footer__column}`}>
					<h3 className="fs-600">Shop</h3>
					<ul className={`${styles.footer__list}`}>
						<li>
							<Link className="text-neutral-50 capitalize" href="/categories">
								All Categories
							</Link>
						</li>
						<li>
							<Link className="text-neutral-50 capitalize" href="/collections">
								All Collections
							</Link>
						</li>
						<li>
							<Link
								className="text-neutral-50 capitalize"
								href="/sales/summer-sale"
							>
								Summer Sale
							</Link>
						</li>
					</ul>
				</div>

				<div className={`${styles.footer__column}`}>
					<h3 className="fs-600">Account</h3>
					<ul className={`${styles.footer__list}`}>
						<li>
							<Link
								className="text-neutral-50 capitalize"
								href="/account/account-details"
							>
								Account Details
							</Link>
						</li>
						<li>
							<Link
								className="text-neutral-50 capitalize"
								href="/account/orders"
							>
								My Orders
							</Link>
						</li>
						<li>
							<Link
								className="text-neutral-50 capitalize"
								href="/account/wishlist"
							>
								My Wishlist
							</Link>
						</li>
						<li>
							<Link
								className="text-neutral-50 capitalize"
								href="/account/returns-exchanges"
							>
								Returns & exchanges
							</Link>
						</li>
					</ul>
				</div>

				<div className={`${styles.footer__column}`}>
					<h3 className="fs-600">Support</h3>
					<ul className={`${styles.footer__list}`}>
						<li>
							<Link
								className="text-neutral-50 capitalize"
								href="/support/help-center"
							>
								Help Center
							</Link>
						</li>
						<li>
							<Link
								className="text-neutral-50 capitalize"
								href="/support/payment-options"
							>
								Payment Options
							</Link>
						</li>
						<li>
							<Link
								className="text-neutral-50 capitalize"
								href="/support/delivery-options"
							>
								Delivery Options
							</Link>
						</li>
						<li>
							<Link
								className="text-neutral-50 capitalize"
								href="/support/privacy-policy"
							>
								Privacy Policy
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className={`${styles.footer__copyright} flex justify-center`}>
				<small className="fs-300 capitalize">
					Copyright &#169; 2023&#59; All rights reserved
				</small>
			</div>
		</footer>
	);
}

export default Footer;
