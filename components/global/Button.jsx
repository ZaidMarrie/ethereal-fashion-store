import styles from "@/styles/components/Button.module.scss";

function Button({ variant, children }) {
	return (
		<button
			className={`${styles.button} ${
				variant === "secondary" && styles["button--secondary"]
			}`}
		>
			{children}
		</button>
	);
}

Button.defaultProps = {
	variant: "default",
};

export default Button;
