"use client";
import * as React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MyAccordion, MyAccordionSubtitle, MyAccordionTitle } from "./style";
import { Box } from "@mui/material";

export default function WhatWeDoAccordion() {
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
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <MyAccordionTitle>Executive Search</MyAccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <MyAccordionSubtitle>
            To create a custom-fit suit, we start by gathering detailed
            measurements. Before starting any project, we thoroughly research
            the company that has entrusted us with the task, including its
            history, values, and long-term strategy. We provide a comprehensive
            understanding of the organizational context, ensuring our
            professionals are effectively onboarded. We also use a research
            model that assesses leadership abilities of the professionals
            involved, analyze their skills and provide our stakeholders with
            informed and strategic decisions. This allows us to make solid
            choices that benefit the company and provide a more comprehensive
            and structured comparison to the reference market.
          </MyAccordionSubtitle>
        </AccordionDetails>
      </MyAccordion>
      <MyAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <MyAccordionTitle>Tailored Head Hunting</MyAccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <MyAccordionSubtitle>
            To create a custom-fit suit, we start by gathering detailed
            measurements. Before starting any project, we thoroughly research
            the company that has entrusted us with the task, including its
            history, values, and long-term strategy. We provide a comprehensive
            understanding of the organizational context, ensuring our
            professionals are effectively onboarded. We also use a research
            model that assesses leadership abilities of the professionals
            involved, analyze their skills and provide our stakeholders with
            informed and strategic decisions. This allows us to make solid
            choices that benefit the company and provide a more comprehensive
            and structured comparison to the reference market.
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
            HR Consulting Market Mapping & Scouting
          </MyAccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <MyAccordionSubtitle>
            To create a custom-fit suit, we start by gathering detailed
            measurements. Before starting any project, we thoroughly research
            the company that has entrusted us with the task, including its
            history, values, and long-term strategy. We provide a comprehensive
            understanding of the organizational context, ensuring our
            professionals are effectively onboarded. We also use a research
            model that assesses leadership abilities of the professionals
            involved, analyze their skills and provide our stakeholders with
            informed and strategic decisions. This allows us to make solid
            choices that benefit the company and provide a more comprehensive
            and structured comparison to the reference market.
          </MyAccordionSubtitle>
        </AccordionDetails>
      </MyAccordion>
      <MyAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <MyAccordionTitle>Outsource In-House Recruitment</MyAccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <MyAccordionSubtitle>
            To create a custom-fit suit, we start by gathering detailed
            measurements. Before starting any project, we thoroughly research
            the company that has entrusted us with the task, including its
            history, values, and long-term strategy. We provide a comprehensive
            understanding of the organizational context, ensuring our
            professionals are effectively onboarded. We also use a research
            model that assesses leadership abilities of the professionals
            involved, analyze their skills and provide our stakeholders with
            informed and strategic decisions. This allows us to make solid
            choices that benefit the company and provide a more comprehensive
            and structured comparison to the reference market.
          </MyAccordionSubtitle>
        </AccordionDetails>
      </MyAccordion>
      <MyAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <MyAccordionTitle>Sustainable Growth</MyAccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <MyAccordionSubtitle>
            To create a custom-fit suit, we start by gathering detailed
            measurements. Before starting any project, we thoroughly research
            the company that has entrusted us with the task, including its
            history, values, and long-term strategy. We provide a comprehensive
            understanding of the organizational context, ensuring our
            professionals are effectively onboarded. We also use a research
            model that assesses leadership abilities of the professionals
            involved, analyze their skills and provide our stakeholders with
            informed and strategic decisions. This allows us to make solid
            choices that benefit the company and provide a more comprehensive
            and structured comparison to the reference market.
          </MyAccordionSubtitle>
        </AccordionDetails>
      </MyAccordion>
      <MyAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <MyAccordionTitle>Diversity & Inclusion Recruitment</MyAccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <MyAccordionSubtitle>
            To create a custom-fit suit, we start by gathering detailed
            measurements. Before starting any project, we thoroughly research
            the company that has entrusted us with the task, including its
            history, values, and long-term strategy. We provide a comprehensive
            understanding of the organizational context, ensuring our
            professionals are effectively onboarded. We also use a research
            model that assesses leadership abilities of the professionals
            involved, analyze their skills and provide our stakeholders with
            informed and strategic decisions. This allows us to make solid
            choices that benefit the company and provide a more comprehensive
            and structured comparison to the reference market.
          </MyAccordionSubtitle>
        </AccordionDetails>
      </MyAccordion>
    </Box>
  );
}
