import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Login = () => {
	const router = useRouter();

	const handleLogin = () => {
		Cookies.set("loggedIn", "true");
		router.push("/peak");
	};

	return (
		<Box
			sx={{
				width: 500,
				backgroundColor: "#fff",
				borderRadius: 2,
				boxShadow: 1,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				margin: "0 auto",
				transform: "translateY(50%)",
				p: 4,
			}}
		>
			<TextField
				id="email"
				label="Email"
				variant="outlined"
				sx={{ width: "100%", marginBottom: 2 }}
			/>
			<TextField
				id="password"
				label="Password"
				variant="outlined"
				sx={{ width: "100%", marginBottom: 2 }}
			/>
			<Button variant="contained" sx={{ width: "100%" }} onClick={handleLogin}>
				Login
			</Button>
		</Box>
	);
};

export default Login;
