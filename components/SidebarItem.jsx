import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, List, ListItem, Menu, MenuItem, Box } from "@mui/material";

export default function SidebarItem({ title, link, subItems }) {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div>
			<Accordion
				sx={{
					background: expanded ? "#245da4" : "transparent",
					color: "white",
					boxShadow: "none",
					my: 1,
				}}
				expanded={expanded === "panel"}
				onChange={handleChange("panel")}
			>
				<AccordionSummary
					sx={{ margin: "0px" }}
					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
					aria-controls="panel-content"
					id="panel-header"
				>
					<Typography>{title}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List>
						{subItems.map((item) => (
							<ListItem key={item.title}>
								<Link href={item.link} sx={{ color: "white" }}>
									{item.title}
								</Link>
							</ListItem>
						))}
					</List>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
