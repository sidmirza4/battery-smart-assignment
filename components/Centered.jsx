import React from "react";
import { Box } from "@mui/material";

const Centered = ({ children }) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
				width: "100%",
			}}
		>
			{children}
		</Box>
	);
};

export default Centered;
