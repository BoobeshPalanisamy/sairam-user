import {
  Avatar,
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  studyVisaPage_WorkAuthorization,
  studyVisaPage_content,
} from "../../seed-data/seed-data";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import theme from "../../theme/theme";
import { useEffect } from "react";

function StudyVisa() {
  const matches = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Box>
        <h1
          style={{
            fontSize: "40px",
            textAlign: "center",
            color: theme.palette.primary.main,
          }}
        >
          Study Visa
        </h1>
      </Box>
      <Grid container mt={3} mb={3} sx={{ background: "#f3f3f3" }}>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="assets\ourservices\studyVisa\study_visa_sairam.jpg"
            alt="studyvisa_sairam"
            width="100%"
            style={{ height: matches ? "50vh" : "75vh" }}
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
              About Study Visa
            </Typography>
            <Typography sx={{ textAlign: "justify", fontSize: "15px" }}>
              {studyVisaPage_content.aboutStudyVisa}
            </Typography>
            <Typography style={{ fontSize: "25px", fontWeight: "bolder" }}>
              Why Sai Ram?
            </Typography>
            <Typography sx={{ textAlign: "justify", fontSize: "15px" }}>
              {studyVisaPage_content.whySaiRam}
            </Typography>
            <Typography style={{ fontSize: "25px", fontWeight: "bolder" }}>
              Intakes
            </Typography>
            {studyVisaPage_content.intakes.map((intake, index) => (
              <Typography
                sx={{ textAlign: "justify", fontSize: "15px" }}
                key={index}
              >
                &#11166;&nbsp;{intake}
              </Typography>
            ))}
          </Container>
        </Grid>
      </Grid>
      <h2
        style={{
          fontSize: "35px",
          color: theme.palette.primary.main,
          textAlign: "center",
        }}
      >
        Why Study Abroad?
      </h2>
      {studyVisaPage_content.whyStudentVisa.map((data, index) => (
        <Box
          key={index}
          sx={{ display: "flex", alignItems: "center", margin: "10px 30px" }}
        >
          <Avatar>
            <KeyboardDoubleArrowRightIcon />
          </Avatar>
          <Box ml={2}>
            <Typography sx={{ fontSize: "25px", fontWeight: "400" }}>
              {data.title}
            </Typography>
            <Typography sx={{ fontSize: "15px" }}>{data.content}</Typography>
          </Box>
        </Box>
      ))}
      <h2
        style={{
          fontSize: "35px",
          color: theme.palette.primary.main,
          textAlign: "center",
        }}
      >
        Work Authorization
      </h2>
      <Grid container mt={3} mb={3} sx={{ background: "#f3f3f3" }}>
        <Grid item md={6} p={2}>
          <Container>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "bolder",
                color: theme.palette.secondary.main,
                textAlign: "center",
              }}
            >
              For Students
            </Typography>
            {studyVisaPage_WorkAuthorization.student_Applicants.map(
              (data, index) => (
                <Box key={index}>
                  <Typography sx={{ fontWeight: "bolder", fontSize: "20px" }}>
                    {data.title}
                  </Typography>
                  <Typography textAlign="justify">{data.content}</Typography>
                </Box>
              )
            )}
          </Container>
        </Grid>
        <Grid item md={6} p={2}>
          <Container>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "bolder",
                color: theme.palette.secondary.main,
                textAlign: "center",
              }}
            >
              For Dependent
            </Typography>
            {studyVisaPage_WorkAuthorization.spouse_Work_Authorization.map(
              (data, index) => (
                <Box key={index}>
                  <Typography sx={{ fontWeight: "bolder", fontSize: "20px" }}>
                    {data.title}
                  </Typography>
                  <Typography textAlign="justify">{data.content}</Typography>
                </Box>
              )
            )}
          </Container>
        </Grid>
      </Grid>
      <h2
        style={{
          fontSize: "35px",
          color: theme.palette.primary.main,
          textAlign: "center",
        }}
      >
        Get Admission in Top Universities
      </h2>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {studyVisaPage_content.universities.map((university, index) => (
          <Grid item md={3} xs={6}>
            <Paper
              elevation={2}
              key={index}
              sx={{
                padding: "10px 5px",
                "&:hover": {
                  background: "#f3f3f3",
                },
                textAlign: "center",
              }}
            >
              {university}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default StudyVisa;
