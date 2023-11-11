import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ContactUsForm from "../../components/ContactUsForm";
import theme from "../../theme/theme";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useEnquiryDialogContext } from "../../context/EnquiryDialogContext";

function InterviewTraining() {
  const belowMediumDevice = useMediaQuery("(max-width:600px)");
  const { handleClickOpen } = useEnquiryDialogContext();
  return (
    <>
      <Grid container>
        <Grid item md={7} xs={12}>
          <Box>
            <Box>
              <img
                src="assets\ourservices\InterviewTraining_Sairam.jpg"
                alt="srisairam-academy-consultancy"
                width="100%"
                style={{ height: belowMediumDevice ? "250px" : "500px" }}
                className="homepage-banner"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item md={5} xs={12} sx={{ padding: "20px 0" }}>
          <ContactUsForm />
        </Grid>
      </Grid>
      <Container>
        <h1 style={{ textAlign: "center" }}>
          <span style={{ color: theme.palette.primary.main }}>
            Sir SaiRam Interview Training
          </span>
          &nbsp; and Guidance Centre
        </h1>
        <Box sx={{ bgcolor: "#f3f3f3" }} p={2} mt={2}>
          <Typography fontWeight="bolder" fontSize="20px">
            Understanding the Credibility Interview
          </Typography>
          <Typography textAlign="justify">
            The credibility interview serves as a means to verify your status as
            a genuine student planning to study in the United Kingdom. This
            interview typically lasts between 15 to 30 minutes and is conducted
            as a one-on-one session with a university admissions representative.
            The specific questions asked during the interview may vary depending
            on the university. The interview covers various aspects, including
            your background, immigration history, the course you intend to
            pursue in the UK, your choice of university, your financial plans to
            support your studies, and how these academic pursuits align with
            your career goals. Additionally, the credibility interview provides
            an opportunity for the university to assess your communication
            skills. Therefore, it's advisable to respond clearly and concisely,
            without rushing your answers. If you find the interviewer's pace
            challenging, don't hesitate to request a slower delivery or ask for
            a question to be repeated.
          </Typography>
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bolder",
            fontSize: "30px",
            color: theme.palette.secondary.main,
          }}
        >
          For asking queries and also for book demo/mock Interview 👇
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          <Button
            variant="contained"
            sx={{
              margin: 1,
              "&:hover": {
                backgroundColor: "#fff",
                color: theme.palette.primary.main,
              },
            }}
            onClick={handleClickOpen}
          >
            Book For Mock Test
            <ArrowRightIcon />
          </Button>
          <Button
            variant="contained"
            sx={{
              margin: 1,
              "&:hover": {
                backgroundColor: "#fff",
                color: theme.palette.primary.main,
              },
            }}
            onClick={handleClickOpen}
          >
            Book For Demo Class <ArrowRightIcon />
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default InterviewTraining;
