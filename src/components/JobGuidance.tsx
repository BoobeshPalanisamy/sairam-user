import { Box, Container, Grid, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";
import { ourServices_jobGuidance } from "../seed-data/seed-data";
import theme from "../theme/theme";

function JobGuidance() {
  return (
    <Container>
      <Fade right>
        <Grid container spacing={3} mt={2}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="assets\ourservices\job_guidance_sairam.jpeg"
              alt="student_visa_sairam"
              height="300px"
              width="300px"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "700", margin: "10px 0" }}
            >
              Job <span style={{ color: "orange" }}>Guidance</span>
            </Typography>
            <Typography textAlign="justify" fontWeight="bolder" fontSize="20px">
              Unlock Your Professional Potential with Our Writing Services
            </Typography>
            <Typography textAlign="justify">
              Are you ready to make a lasting impression on potential employers
              and take charge of your career? At SaiRam, we offer a suite of
              specialized writing services designed to elevate your professional
              profile and set you on the path to success.
            </Typography>
            {ourServices_jobGuidance.map((data, index) => (
              <Box key={index}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bolder",
                    color: theme.palette.primary.main,
                  }}
                >
                  {data.title}
                </Typography>
                <Typography sx={{ textAlign: "justify" }}>
                  {data.content}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
}

export default JobGuidance;
