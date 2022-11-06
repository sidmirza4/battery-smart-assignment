import React from "react";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { CircleNotifications } from "@mui/icons-material";

const Header = () => {
	return (
		<Grid container justifyContent="space-between" alignItems="center">
			<Typography variant="h6">Peak shaving and alert</Typography>
			<Stack direction="row" alignItems="center">
				<Typography variant="h6">Carisberg group</Typography>
				<IconButton>
					<CircleNotifications />
				</IconButton>
			</Stack>
		</Grid>
	);
};

export default Header;
