import styles from "./styles/Badge.module.scss";

function Badge({ count }) {
	if (!count) return null;

	return (
		<div
			className={`${styles.badge} text-neutral-50 rounded-full grid place-center`}
		>
			<span className="sr-only">Item Count:</span>
			{count}
		</div>
	);
}

export default Badge;
