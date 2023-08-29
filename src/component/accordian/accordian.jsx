import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import { ReactComponent as ExpandBelow } from "../../assets/ExpandBelow.svg";
import styles from "./accordian.module.css";

export default function BasicAccordion() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>FAQS</div>
      <div className={styles.accordian}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{
            width: 900,
            border: "1px solid white",
            borderRadius: "6px",
            margin: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandBelow />}
            aria-controls="panel1d-content"
            id="panel1d-header"
            style={{
              borderRadius: "6px",
              backgroundColor: "#121212",
              color: "white",
              padding: "10px",
            }}
          >
            <Typography>Is Qtify free to use ? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ padding: "10px" }}>
              Yes! It is 100% free,and 0% ads
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{
            width: 900,
            border: "1px solid white",

            borderRadius: "6px",
            margin: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandBelow />}
            aria-controls="panel2d-content"
            id="panel2d-header"
            style={{
              borderRadius: "6px",
              backgroundColor: "#121212",
              color: "white",
              padding: "10px",
            }}
          >
            <Typography>Can I download and listen to songs offline</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ padding: "10px" }}>
              Sorry,unfortunately we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
