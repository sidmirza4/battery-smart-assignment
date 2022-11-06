import React from "react";
import { Box, Divider, Grid } from "@mui/material";

import Header from "./Header";
import CreateAlert from "./CreateAlert";
import Table from "./Table";
import Chart from "./Chart";

export default function MainContent() {
	return (
		<Box
			p={4}
			sx={{
				height: "100vh",
				backgroundColor: "#ececec",
			}}
		>
			<Box
				sx={{
					backgroundColor: "#ececec",
					overflowY: "scroll",
					borderRadius: "28px",
					padding: "20px",
					height: "100%",
				}}
				component="main"
			>
				<Header />
				<Box my={1}>
					<Divider />
				</Box>

				{/* Chart */}
				<Box>
					<Chart />
				</Box>

				<Grid container mt={3} spacing={2}>
					<Grid item xs={12} md={4}>
						<CreateAlert />
					</Grid>

					<Grid item xs={12} md={8}>
						<Table />
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
