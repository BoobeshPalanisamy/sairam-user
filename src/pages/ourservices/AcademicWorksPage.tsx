import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import theme from "../../theme/theme";
import { academicWorksPage } from "../../seed-data/seed-data";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import { useEnquiryDialogContext } from "../../context/EnquiryDialogContext";

function AcademicWorksPage() {
  const { handleClickOpen } = useEnquiryDialogContext();
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: theme.palette.primary.main,
          margin: "20px 0 5px 0",
        }}
      >
        Sri SaiRam Academic Writing and Guidance
      </h1>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "20px",
          margin: "0",
          fontWeight: "bolder",
          color: theme.palette.secondary.main,
        }}
      >
        Professional Writing Solutions Tailored for Discerning Scholars
      </Typography>
      <Container sx={{ paddingTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Paper
              sx={{
                padding: "20px",
                minHeight: { md: "230px" },
                backgroundColor: "#e6ebf2",
                "&:hover": {
                  backgroundColor: "#fff",
                },
              }}
              elevation={3}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <LockPersonIcon sx={{ fontSize: "50px" }} />
              </Box>
              <Typography
                textAlign="center"
                fontWeight="bolder"
                fontSize="20px"
              >
                Complete Confidentiality Assured:
              </Typography>
              <Typography textAlign="justify">
                Rest easy with our commitment to 100% confidentiality. Every
                client is assigned a unique identifier, and we go a step further
                by securing Non-Disclosure Agreements (NDAs) with our writers,
                ensuring absolute privacy for all personally identifiable
                information.
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper
              sx={{
                padding: "20px",
                minHeight: { md: "230px" },
                backgroundColor: "#e6ebf2",
                "&:hover": {
                  backgroundColor: "#fff",
                },
              }}
              elevation={3}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <AccessTimeIcon sx={{ fontSize: "50px" }} />
              </Box>
              <Typography
                textAlign="center"
                fontWeight="bolder"
                fontSize="20px"
              >
                Punctual Delivery, Every Time:
              </Typography>
              <Typography textAlign="justify">
                Trust in our proven track record of on-time delivery, boasting
                an impressive 98.5% success rate in meeting deadlines. Your
                orders are guaranteed to be in your hands precisely when you
                need them.
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper
              sx={{
                padding: "20px",
                backgroundColor: "#e6ebf2",
                minHeight: { md: "230px" },
                "&:hover": {
                  backgroundColor: "#fff",
                },
              }}
              elevation={3}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <AssuredWorkloadIcon sx={{ fontSize: "50px" }} />
              </Box>
              <Typography
                textAlign="center"
                fontWeight="bolder"
                fontSize="20px"
              >
                Reliable and Transparent Operations:
              </Typography>
              <Typography textAlign="justify">
                Experience confidence in our operations with a commitment to
                reliability and transparency. Our client-centric approach
                ensures a smooth process from order placement to delivery,
                maintaining the highest standards of service throughout.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          background:
            "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(135,253,45,0.7559816162793243) 100%)",
        }}
        mt={2}
        p={2}
      >
        <Grid container>
          <Grid item md={6}>
            <Container>
              <Typography fontSize="30px" fontWeight="bolder" color="#e22282">
                Genuine, Handcrafted Content
              </Typography>
              <Typography fontSize="20px" fontWeight="600" textAlign="justify">
                Your satisfaction is our utmost priority. We craft each piece of
                content manually, avoiding any use of automated tools. Our
                approach involves sourcing information from reputable databases
                and meticulously reviewing every paper to ensure authenticity.
                Cutting-edge software is employed to check for originality,
                eliminating any concerns related to generated content or other
                potential issues.
              </Typography>
            </Container>
          </Grid>
          <Grid item md={6}>
            <Container>
              <Typography fontSize="30px" fontWeight="bolder" color="#e22282">
                Types of Services We Offer
              </Typography>
              {academicWorksPage.ourWorks.map((work, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                  <PlayArrowIcon />
                  <Typography fontSize="20px" fontWeight="600">
                    {work}
                  </Typography>
                </Box>
              ))}
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Container>
        <Typography fontSize="30px" fontWeight="bolder" color="#e22282">
          Our Disciplines
        </Typography>
        <Grid container spacing={1}>
          {academicWorksPage.academic_disciplines.map((topic, index) => (
            <Grid item md={4} xs={12} key={index}>
              <Paper
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "5px 3px",
                  "&:hover": {
                    backgroundColor: "#EBEBEB",
                  },
                }}
                elevation={3}
              >
                <PlayArrowIcon />
                <Typography fontSize="20px" fontWeight="600">
                  {topic}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h5" textAlign="center" fontWeight="bolder">
          To Get Our Service &nbsp;
        </Typography>
        <Button variant="outlined" onClick={handleClickOpen}>
          Click Here
        </Button>
      </Box>
    </>
  );
}

export default AcademicWorksPage;
