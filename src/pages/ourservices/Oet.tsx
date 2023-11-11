import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  OET_course_eligibility,
  OET_course_highlight,
  OET_page,
} from "../../seed-data/seed-data";
import ContactUsForm from "../../components/ContactUsForm";
import theme from "../../theme/theme";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useEnquiryDialogContext } from "../../context/EnquiryDialogContext";

function Oet() {
  const belowMediumDevice = useMediaQuery("(max-width:600px)");
  const largeDevice = useMediaQuery("(min-width:1000px)");
  const { handleClickOpen } = useEnquiryDialogContext();
  return (
    <>
      <Grid container>
        <Grid item md={7} xs={12}>
          <Box>
            <Box>
              <img
                src="assets\ourservices\oet-exam_sairam.jpg"
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
            Sir SaiRam OET
          </span>
          &nbsp; Coaching and Guidance Centre
        </h1>
        <Grid container mt={3} mb={3} sx={{ background: "#f3f3f3" }}>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="assets\ourservices\Sairam_oet.jpg"
              alt="ielts_sairam"
              width="100%"
              style={{ height: largeDevice ? "70vh" : "50vh" }}
            />
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Container>
              <Typography style={{ fontSize: "25px", fontWeight: "bolder" }}>
                About OET
              </Typography>
              <Typography sx={{ textAlign: "justify", fontSize: "15px" }}>
                {OET_page.content}
              </Typography>
            </Container>
          </Grid>
        </Grid>
        <Grid container sx={{ bgcolor: "#f3f3f3" }} p={2} mt={2}>
          <Grid item md={6} xs={12}>
            <Typography
              sx={{
                fontWeight: "bolder",
                fontSize: "30px",
                color: theme.palette.primary.main,
              }}
            >
              {OET_course_highlight.mainHeading}
            </Typography>
            <Typography p={1}>{OET_course_highlight.mainContent}</Typography>
            <Typography sx={{ fontWeight: "bolder", fontSize: "20px" }}>
              {OET_course_highlight.subHeading}
            </Typography>
            {OET_course_highlight.contentPoints.map((point, index) => (
              <Box key={index}>
                <Typography>
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      color: theme.palette.secondary.main,
                    }}
                  >
                    {point.title}
                  </span>
                  {point.content}
                </Typography>
              </Box>
            ))}
          </Grid>
          <Grid item md={6} xs={12} sx={{ marginTop: { xs: "10px" } }}>
            <Typography
              sx={{
                fontWeight: "bolder",
                fontSize: "30px",
                color: theme.palette.primary.main,
              }}
            >
              {OET_course_eligibility.mainHeading}
            </Typography>
            <Typography p={1}>{OET_course_eligibility.mainContent}</Typography>
            {OET_course_eligibility.contentPoints.map((point, index) => (
              <Box key={index}>
                <Typography textAlign="justify">
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      color: theme.palette.primary.main,
                    }}
                  >
                    {point.title}
                  </span>
                  {point.content}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bolder",
            fontSize: "30px",
            color: theme.palette.secondary.main,
          }}
        >
          For asking queries about OET and test and also for book demo/mock test
          👇
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

export default Oet;
