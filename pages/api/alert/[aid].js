import dbConnect from "../../../lib/dbConnect";
import Alert from "../../../models/Alert";

export default async function handler(req, res) {
	const { method } = req;
	await dbConnect();
	switch (method) {
		case "DELETE":
			try {
				const alert = await Alert.deleteOne({ _id: req.query.aid });
				if (!alert) {
					return res.status(404).json({ success: false });
				}
				res.status(200).json({ success: true, data: {} });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
	}
}
