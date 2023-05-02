import styles from "@/styles/components/Badge.module.scss";

function Badge({ count }) {
	if (!count) return null;

	return (
		<div className={styles.badge}>
			<span className="sr-only">Item Count:</span>
			{count}
		</div>
	);
}

export default Badge;
