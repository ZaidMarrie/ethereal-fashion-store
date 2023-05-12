const product = {
	name: "product",
	type: "document",
	title: "Product",
	fields: [
		{
			name: "name",
			type: "string",
			title: "Product Name",
		},
		{
			name: "slug",
			type: "slug",
			title: "Slug",
			options: {
				source: "name",
			},
		},
		{
			name: "category",
			type: "string",
			title: "Category",
		},
		{
			name: "collection",
			type: "string",
			title: "Collection",
		},
		{
			name: "price",
			type: "number",
			title: "Price",
		},
		{
			name: "has_discount",
			type: "boolean",
			title: "Has Discount",
			description:
				"Specifies if the selected product has a discounted price available",
		},
		{
			name: "discount_price",
			type: "number",
			title: "Discounted Price",
		},
		{
			name: "description",
			type: "text",
			title: "Product Description",
		},
		{
			name: "image",
			type: "image",
			title: "Product Image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt_text",
					type: "string",
					title: "Image Alternative Text",
				},
			],
		},
	],
};

export default product;
