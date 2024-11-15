import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "#87CEEB",
    },
  },
});

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  "& .MuiAccordionSummary-expandIcon": {
    color: "#fff",
  },
  "& .MuiTypography-root": {
    fontWeight: "bold",
  },
}));

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: "#f5f5f5",
}));

const faqData = [
  {
    question: "What is the check-in/check-out time?",
    answer: "Check-in is from 3:00 PM, and check-out is by 11:00 AM.",
  },
  {
    question: "Do you offer airport shuttle service?",
    answer:
      "Yes, we offer a complimentary shuttle service to and from the airport.",
  },
  {
    question: "Is breakfast included in the room rate?",
    answer: "Yes, a complimentary breakfast is included with your stay.",
  },
];

const FAQSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "20px" }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Frequently Asked Questions
        </Typography>
        {faqData.map((faq, index) => (
          <Accordion key={index} style={{ marginBottom: "10px" }}>
            <CustomAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h6">{faq.question}</Typography>
            </CustomAccordionSummary>
            <CustomAccordionDetails>
              <Typography>{faq.answer}</Typography>
            </CustomAccordionDetails>
          </Accordion>
        ))}
      </div>
    </ThemeProvider>
  );
};

export default FAQSection;
