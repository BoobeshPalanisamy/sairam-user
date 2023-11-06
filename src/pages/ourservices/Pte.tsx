import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  PTE_course_eligibility,
  PTE_course_highlight,
  PTE_page,
  PTE_types,
} from "../../seed-data/seed-data";
import ContactUsForm from "../../components/ContactUsForm";
import theme from "../../theme/theme";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function Pte() {
  const belowMediumDevice = useMediaQuery("(max-width:600px)");
  const largeDevice = useMediaQuery("(min-width:1000px)");
  return (
    <>
      <Grid container>
        <Grid item md={7} xs={12}>
          <Box>
            <Box>
              <img
                src="assets\ourservices\PTE_sairam.jpg"
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
            Sir SaiRam PTE
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
              src="assets\ourservices\sairam_PTE.jpg"
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
                About PTE
              </Typography>
              <Typography sx={{ textAlign: "justify", fontSize: "15px" }}>
                {PTE_page.content}
              </Typography>
            </Container>
          </Grid>
        </Grid>
        <Grid container sx={{ border: { md: "1px solid black" } }} p={2} mt={2}>
          <Grid item md={6} xs={12}>
            <Typography
              sx={{
                fontWeight: "bolder",
                fontSize: "30px",
                color: theme.palette.primary.main,
              }}
            >
              {PTE_course_highlight.mainHeading}
            </Typography>
            <Typography p={1}>{PTE_course_highlight.mainContent}</Typography>
            <Typography sx={{ fontWeight: "bolder", fontSize: "20px" }}>
              {PTE_course_highlight.subHeading}
            </Typography>
            {PTE_course_highlight.contentPoints.map((point, index) => (
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
            <Typography>{PTE_course_highlight.tailContent}</Typography>
          </Grid>
          <Grid item md={6} xs={12} sx={{ marginTop: { xs: "10px" } }}>
            <Typography
              sx={{
                fontWeight: "bolder",
                fontSize: "30px",
                color: theme.palette.primary.main,
              }}
            >
              {PTE_course_eligibility.mainHeading}
            </Typography>
            <Typography p={1}>{PTE_course_eligibility.mainContent}</Typography>
            {PTE_course_eligibility.contentPoints.map((point, index) => (
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
        <Box mt={2} p={2} sx={{ bgcolor: "#f3f3f3" }}>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: "30px",
              color: theme.palette.primary.main,
            }}
          >
            {PTE_types.title}
          </Typography>
          <Typography p={1} textAlign="justify">
            {PTE_types.content}
          </Typography>
          {PTE_types.types.map((type, index) => (
            <Box key={index}>
              <Typography fontWeight="bolder">{type.title}</Typography>
              <Typography p={1} textAlign="justify">
                {type.content}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bolder",
            fontSize: "30px",
            color: theme.palette.secondary.main,
          }}
        >
          For asking queries about PTE and test and also for book demo/mock test
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
          >
            Book For Demo Class <ArrowRightIcon />
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Pte;
