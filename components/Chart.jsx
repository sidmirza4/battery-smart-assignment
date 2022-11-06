import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";

const Charts = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {
	chart: {
		id: "basic-bar",
	},
	xaxis: {
		categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
	},
	stroke: {
		curve: "smooth",
	},
};

const series = [
	{
		name: "DK-1",
		data: [30, 40, 45, 50, 49, 60, 70, 91],
	},

	{
		name: "DK-2",
		data: [20, 10, 5, 6, 80, 90, 40, 20],
	},
];

const Chart = () => {
	return (
		<Box
			sx={{
				width: "100%",
				bgcolor: "#fff",
				borderRadius: 2,
			}}
		>
			<Charts
				options={options}
				series={series}
				type="line"
				width={600}
				height="300"
			/>
		</Box>
	);
};

export default Chart;
