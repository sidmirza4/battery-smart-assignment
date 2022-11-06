import mongoose from "mongoose";

const AlertSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	criteria: {
		type: String,
		enum: ["greater", "less"],
		required: true,
	},

	value: {
		type: Number,
		required: true,
	},

	days: {
		type: [String],
		enum: [
			"monday",
			"tuesday",
			"wednesday",
			"thursday",
			"friday",
			"saturday",
			"sunday",
		],
		required: true,
	},

	email: {
		type: String,
		required: true,
	},

	phone: {
		type: String,
		required: true,
	},
});

export default mongoose.models.Alert || mongoose.model("Alert", AlertSchema);
