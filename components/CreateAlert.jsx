import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
	TextField,
	RadioGroup,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	Stack,
	Select,
	InputLabel,
	MenuItem,
	Box,
	Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";
import axios from "axios";

const days = [
	{ value: "monday", label: "Monday" },
	{ value: "tuesday", label: "Tuesday" },
	{ value: "wednesday", label: "Wednesday" },
	{ value: "thursday", label: "Thursday" },
	{ value: "friday", label: "Friday" },
	{ value: "saturday", label: "Saturday" },
	{ value: "sunday", label: "Sunday" },
];

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
	name: Yup.string().required("Name is required"),
	criteria: Yup.string().oneOf(["greater", "less"], "Criteria is required"),
	value: Yup.number().required("Value is required"),
	days: Yup.array().of(Yup.string()).required("Days is required"),
	email: Yup.string().email("Email is invalid").required("Email is required"),
	phone: Yup.string().matches(phoneRegExp, "Phone number is invalid"),
});

const CreateAlert = () => {
	const { enqueueSnackbar } = useSnackbar();

	const formik = useFormik({
		initialValues: {
			name: "",
			criteria: "",
			value: "",
			days: [],
			email: "",
			phone: "",
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			try {
				const { name, criteria, value, days, email, phone } = values;
				const response = await axios.post("/api/alert", {
					name,
					criteria,
					value,
					days,
					email,
					phone,
				});

				if (response.status === 201) {
					formik.resetForm();
					enqueueSnackbar("Alert created successfully", { variant: "success" });
				}
			} catch (error) {
				console.log(error.message);
				enqueueSnackbar("Something went wrong", { variant: "error" });
			}
		},
	});

	return (
		<Box sx={{ bgcolor: "#fff", p: 4, borderRadius: 2 }}>
			<Typography variant="h6" mb={3}>
				Create Alert
			</Typography>
			<Stack component="form" spacing={3} onSubmit={formik.handleSubmit}>
				<TextField
					fullWidth
					id="name"
					name="name"
					label="Name"
					value={formik.values.name}
					onChange={formik.handleChange}
					error={formik.touched.name && Boolean(formik.errors.name)}
					helperText={formik.touched.name && formik.errors.name}
				/>

				<FormControl component="fieldset">
					<FormLabel component="legend">Criteria</FormLabel>
					<RadioGroup
						aria-label="criteria"
						name="criteria"
						value={formik.values.criteria}
						onChange={formik.handleChange}
					>
						<Stack direction="row">
							<FormControlLabel
								value="greater"
								control={<Radio />}
								label="Greater than"
							/>
							<FormControlLabel
								value="less"
								control={<Radio />}
								label="Less than"
							/>
						</Stack>
					</RadioGroup>
				</FormControl>

				<TextField
					fullWidth
					id="value"
					name="value"
					label="Value"
					type="number"
					value={formik.values.value}
					onChange={formik.handleChange}
					error={formik.touched.value && Boolean(formik.errors.value)}
					helperText={formik.touched.value && formik.errors.value}
				/>

				<FormControl fullWidth>
					<InputLabel id="days-label">Days</InputLabel>
					<Select
						labelId="days-label"
						id="days"
						name="days"
						value={formik.values.days}
						multiple
						label="Days"
						onChange={formik.handleChange}
					>
						{days.map((day) => (
							<MenuItem key={day.value} value={day.value}>
								{day.label}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<TextField
					fullWidth
					id="email"
					name="email"
					label="Email"
					type="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>

				<TextField
					fullWidth
					id="phone"
					name="phone"
					label="Phone"
					type="number"
					value={formik.values.phone}
					onChange={formik.handleChange}
					error={formik.touched.phone && Boolean(formik.errors.phone)}
					helperText={formik.touched.phone && formik.errors.phone}
				/>

				<LoadingButton
					type="submit"
					variant="contained"
					loading={formik.isSubmitting}
					sx={{ alignSelf: "flex-end" }}
				>
					Submit
				</LoadingButton>
			</Stack>
		</Box>
	);
};

export default CreateAlert;
