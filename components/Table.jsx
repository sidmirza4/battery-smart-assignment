import React, { useReducer, useState } from "react";
import {
	Box,
	Button,
	Stack,
	CircularProgress,
	IconButton,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { Edit, Delete, Refresh } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

import Centered from "./Centered";
import useGetAllAlerts from "../hooks/useApi";

const Table = () => {
	const [key, setKey] = useState("");
	const { data, loading, error } = useGetAllAlerts("/api/alert", key);
	const { enqueueSnackbar } = useSnackbar();

	const deleteHandler = async (id) => {
		try {
			await axios.delete(`/api/alert/${id}`);
			setKey(Math.random());
			enqueueSnackbar("Alert deleted successfully", { variant: "success" });
		} catch (error) {
			console.log(error);
		}
	};

	const columns = [
		{ field: "name", headerName: "Name", width: 100 },
		{
			field: "criteria",
			headerName: "Criteria",
			width: 100,
			valueGetter: (params) => `${params.row.criteria} than`,
		},
		{ field: "value", headerName: "Value", width: 70 },
		{ field: "days", headerName: "Days", width: 250 },
		{ field: "email", headerName: "Email", width: 200 },
		{
			field: "actions",
			headerName: "Actions",
			width: 100,
			renderCell: (params) => (
				<strong>
					<IconButton>
						<Edit />
					</IconButton>
					<IconButton
						onClick={() => {
							deleteHandler(params.row._id);
						}}
					>
						<Delete />
					</IconButton>
				</strong>
			),
		},
	];

	const refreshHandler = () => {
		setKey(Date.now());
	};

	function getContent() {
		if (loading) {
			return (
				<Centered>
					<CircularProgress />
				</Centered>
			);
		} else if (error) {
			return <div>{error}</div>;
		} else {
			return (
				<DataGrid
					rows={data.data}
					columns={columns}
					getRowId={(row) => row._id}
					disableSelectionOnClick
				/>
			);
		}
	}

	return (
		<Box
			sx={{
				backgroundColor: "white",
				borderRadius: 2,
				p: 4,
				height: "100%",
			}}
		>
			<Stack direction="row" alignItems="center" justifyContent="space-between">
				<Stack direction="row" gap={2}>
					<Button variant="contained">Alerts</Button>
					<Button variant="outlined" disabled>
						Triggered Alerts
					</Button>
				</Stack>

				<IconButton onClick={refreshHandler}>
					<Refresh />
				</IconButton>
			</Stack>

			{/* data grid */}
			<Box sx={{ height: 520, width: "100%", mt: 3 }}>{getContent()}</Box>
		</Box>
	);
};

export default Table;
