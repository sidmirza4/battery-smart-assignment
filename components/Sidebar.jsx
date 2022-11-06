import React from "react";
import { Box, Button, Divider, Grid, Link, Typography } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import SidebarItem from "./SidebarItem";
import UserPanel from "./UserPanel";

const sideBarItems = [
	{
		title: "Dashboard",
		link: "#",
	},

	{
		title: "E3 Apps",
		link: "#",
		subItems: [
			{
				title: "Peak shaving and alert",
				link: "#",
			},
			{
				title: "Ventilation",
				link: "#",
			},
		],
	},

	{
		title: "Demand response",
		link: "#",
	},
];

const Sidebar = () => {
	const router = useRouter();
	const logoutHandler = () => {
		Cookies.remove("loggedIn");
		router.push("/");
	};

	return (
		<Grid
			container
			direction="column"
			sx={{
				height: "100vh",
				overflowY: "scroll",
				color: "white",
				padding: "2rem",
			}}
		>
			<Box>
				<Typography variant="h5">Grid Manager 2.0</Typography>
				<Divider sx={{ backgroundColor: "#cecece", mb: 4 }} />
				<UserPanel />
			</Box>

			<Grid
				container
				flexDirection="column"
				justifyContent="space-between"
				sx={{ flexGrow: 1 }}
			>
				<Box mt={3}>
					{sideBarItems.map((item) => {
						if (item.subItems) {
							return (
								<SidebarItem
									key={item.title}
									title={item.title}
									link={item.link}
									subItems={item.subItems}
								/>
							);
						} else {
							return (
								<Link
									key={item.title}
									href={item.link}
									sx={{ color: "#fff", ml: 2 }}
								>
									{item.title}
								</Link>
							);
						}
					})}
				</Box>

				<Box ml={1}>
					<Button sx={{ color: "#fff" }} onClick={logoutHandler}>
						Logout
					</Button>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Sidebar;
