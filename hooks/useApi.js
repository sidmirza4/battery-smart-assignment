import axios from "axios";
import { useState, useEffect } from "react";

const useGetAllAlerts = (url, key) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setError(null);
		axios
			.get(url)
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, [url, key]);

	return { data, loading, error };
};

export default useGetAllAlerts;
