import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MyAccordion = ({ children, title }) => {
  return (
    <div>
      <Accordion
        sx={{ width: { xs: "400px", sm: "600px", md: "800px", lg: "1000px" } }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography component="span">{title}</Typography>
        </AccordionSummary>

        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MyAccordion;
