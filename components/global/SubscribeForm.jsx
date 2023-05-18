import { useState } from "react";
import styles from "./styles/SubscribeForm.module.scss";

function SubscribeForm() {
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<section
			className={`${styles.section} text-center`}
			aria-labelledby="subscribe"
		>
			<h2 id="subscribe" className="fs-700 capitalize">
				Subscribe to our newsletter for news on our latest products and sales
			</h2>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita
				minus non?
			</p>

			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={`${styles.form__wrapper} grid`}>
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						aria-label="Enter your email"
						className={`${styles.form__input} rounded-300`}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<button className="button">Subscribe</button>
				</div>
			</form>

			<small className="fs-200">
				You will be able to unsubscribe at any time.
			</small>
		</section>
	);
}

export default SubscribeForm;
