import styles from "@/styles/components/IconButton.module.scss";

function IconButton({ ariaControls, ariaExpanded, handleClick, children }) {
	return (
		<button
			className={styles.button}
			aria-controls={ariaControls}
			aria-expanded={ariaExpanded}
			onClick={handleClick}
		>
			{children}
		</button>
	);
}

export default IconButton;
