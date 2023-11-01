import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import { homePageTrainingAndService } from "../seed-data/seed-data";

function HomePageTrainingandServices() {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <Grid
      container
      spacing={matches ? 0 : 2}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {homePageTrainingAndService.map((service, index) => (
        <Grid item md={6}>
          <Accordion
            key={index}
            sx={{
              boxShadow:
                "15px 20px 19px -8px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  height="50px"
                  width="50px"
                />
                <Typography ml={2}>{service.content}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{service.description}</Typography>
              <Box
                sx={{ width: "100%", display: "flex", justifyContent: "end" }}
              >
                <Button variant="contained" size="small">
                  Know More &#11166;
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Grid>
      ))}
    </Grid>
  );
}

export default HomePageTrainingandServices;
