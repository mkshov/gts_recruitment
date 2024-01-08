"use client";
import * as React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import {
  MyAccordion,
  MyAccordionSubtitle,
  MyAccordionTitle,
} from "../what-we-do/style";

export default function JoinUsAccardion() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box
      sx={{
        marginBottom: "100px",
      }}
    >
      <MyAccordion
        width="100%"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <MyAccordionTitle>So, how do we work?</MyAccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <MyAccordionSubtitle>
            Our team of experienced Recruitment Consultants uses a range of
            methods to identify and attract top talent. This includes
            networking, referrals, and targeted searches using advanced
            technology and databases. Once we have identified potential
            candidates, we conduct in-depth interviews and assessments to ensure
            they are right fit for the role and the client's culture.
          </MyAccordionSubtitle>
        </AccordionDetails>
      </MyAccordion>
      <MyAccordion width="100%">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <MyAccordionTitle>Why are we special?</MyAccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <MyAccordionSubtitle>
            We pride ourselves on our personalized approach to recruitment. We
            take time to understand our clients' specific needs and goals, and
            we use our expertise to match them with the best candidates. Our
            consultants are all highly skilled and experienced in their field,
            so your trust can be placed in our good hands. However it is not
            just our clients who benefit from our services. Our team members
            also enjoy a range of benefits, including the ability to work
            remotely. Which means better quality life-work balance, giving you
            the flexibility to manage your personal and professional commitments
            more efficiently.
          </MyAccordionSubtitle>
        </AccordionDetails>
      </MyAccordion>
    </Box>
  );
}
