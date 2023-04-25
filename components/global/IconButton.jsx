import styles from "@/styles/components/IconButton.module.scss";

function IconButton({ srText, elementId, clickHandler, children }) {
	return (
		<button
			className={styles.button}
			aria-controls={elementId}
			onClick={clickHandler}
		>
			{children}
			<span className="sr-only">{srText}</span>
		</button>
	);
}

export default IconButton;
