// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../lib/dbConnect";
import Alert from "../../../models/Alert";

export default async function handler(req, res) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const alerts = await Alert.find(
					{}
				); /* find all the data in our database */
				res.status(200).json({ success: true, data: alerts });
			} catch (error) {
				res.status(400).json({ success: false });
			}

			break;

		case "POST":
			try {
				// validate the data
				const alert = await Alert.create(
					req.body
				); /* create a new model in the database */
				res.status(201).json({ success: true, data: alert });
			} catch (error) {
				res.status(400).json({ success: false });
			}

			break;
	}
}
