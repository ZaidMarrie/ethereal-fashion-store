import styles from "./styles/IconButton.module.scss";

function IconButton({ ariaControls, ariaExpanded, handleClick, children }) {
	return (
		<button
			className={`${styles.button} rounded-full grid place-center`}
			aria-controls={ariaControls}
			aria-expanded={ariaExpanded}
			onClick={handleClick}
		>
			{children}
		</button>
	);
}

export default IconButton;
