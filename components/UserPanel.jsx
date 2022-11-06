import React from "react";
import { Grid, Avatar, Typography } from "@mui/material";

const UserPanel = () => {
	return (
		<Grid gap={2} container alignItems="center">
			<Grid item>
				<Avatar
					src="https://i.pravatar.cc/300"
					sx={{ height: 56, width: 56 }}
				/>
			</Grid>

			<Grid item>
				<Typography variant="h6">User Name</Typography>
				<Typography>User id: Abc-24</Typography>
			</Grid>
		</Grid>
	);
};

export default UserPanel;
