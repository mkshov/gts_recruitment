"use client";
import * as React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  MainAccordion,
  MyAccordion,
  MyAccordionSubtitle,
  MyAccordionTitle,
} from "./style";
import { Box } from "@mui/material";

export default function WhatWeDoAccordion() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <MainAccordion>
      <MyAccordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <MyAccordionTitle>
            Client Consultation and Needs Assessment:
          </MyAccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <MyAccordionSubtitle>
            We start by thoroughly understanding your organization's
            requirements, company culture, and specific attributes sought in a
            candidate through in-depth consultations.Project
          </MyAccordionSubtitle>
        </AccordionDetails>
      </MyAccordion>
      <MyAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <MyAccordionTitle>
            Customization and Bespoke Approach:
          </MyAccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <MyAccordionSubtitle>
            Unlike traditional methods, we eschew databases and
            cross-information with competitors, starting each project from
            scratch. This allows us to tailor our approach uniquely to your
            needs.
          </MyAccordionSubtitle>
        </AccordionDetails>
      </MyAccordion>
      <MyAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <MyAccordionTitle>
            Innovative Sourcing and Market Analysis
          </MyAccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <MyAccordionSubtitle>
            Leveraging our industry expertise, we employ cutting-edge
            recruitment technologies and creative sourcing strategies,
            conducting continuous market research to stay informed and identify
            the most suitable candidates.
          </MyAccordionSubtitle>
        </AccordionDetails>
      </MyAccordion>
      <MyAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <MyAccordionTitle>
            Rigorous Candidate Screening and Assessment:
          </MyAccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <MyAccordionSubtitle>
            Our commitment to quality ensures a thorough screening process,
            evaluating skills, qualifications, and cultural fit. Only candidates
            meeting stringent standards are presented to you.
          </MyAccordionSubtitle>
        </AccordionDetails>
      </MyAccordion>
      <MyAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <MyAccordionTitle>
            Client Collaboration and Feedback Loop:
          </MyAccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <MyAccordionSubtitle>
            We value your input throughout the process, fostering collaboration
            for adjustments and refinements based on your feedback. This ensures
            the search aligns seamlessly with your evolving needs.
          </MyAccordionSubtitle>
        </AccordionDetails>
      </MyAccordion>
      <MyAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <MyAccordionTitle>
            Final Selection, Placement, and Post-Placement Support:
          </MyAccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <MyAccordionSubtitle>
            Once the final selection is made, we guide you through the offer and
            negotiation process, ensuring a successful placement. Our commitment
            extends beyond, with post-placement follow-ups to ensure ongoing
            satisfaction for both the client and the candidate.
          </MyAccordionSubtitle>
        </AccordionDetails>
      </MyAccordion>
    </MainAccordion>
  );
}
