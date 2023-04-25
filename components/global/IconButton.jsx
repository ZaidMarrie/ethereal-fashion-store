import styles from "@/styles/components/IconButton.module.scss";

function IconButton({ srText, children }) {
	return (
		<button className={styles.button}>
			{children}
			<span className="sr-only">{srText}</span>
		</button>
	);
}

export default IconButton;
