import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import theme from "../theme/theme";
import { manPower_content } from "../seed-data/seed-data";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";
import { paths } from "../routes/paths";

function ManpowerService() {
  const largeDevice = useMediaQuery("(min-width:1000px)");
  return (
    <Box>
      <h1 style={{ textAlign: "center" }}>
        <span style={{ color: theme.palette.primary.main }}>
          Sir SaiRam Manpower
        </span>
        &nbsp; Service
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
            src="assets\ourservices\ManpowerProvider_Sairam.jpg"
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
              Looking For Job?
            </Typography>
            {manPower_content.content.map((content, index) => (
              <Box key={index} sx={{ display: "flex" }}>
                <KeyboardDoubleArrowRightIcon />
                <Typography
                  sx={{
                    textAlign: "justify",
                    fontSize: "15px",
                    margin: "2px 0",
                  }}
                >
                  {content}
                </Typography>
              </Box>
            ))}
          </Container>
        </Grid>
      </Grid>
      {manPower_content.careers.length > 0 && (
        <Container>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontSize: "30px",
              fontWeight: "bolder",
            }}
            textAlign="center"
          >
            Current Vacancies
          </Typography>
          <Grid container spacing={2}>
            {manPower_content.careers.map((content, index) => (
              <Grid
                item
                md={3}
                xs={12}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={content.image}
                  alt={content.name}
                  height="300px"
                  width="200px"
                />
              </Grid>
            ))}
          </Grid>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontSize: "30px",
              fontWeight: "bolder",
            }}
            textAlign="center"
            mt={2}
          >
            For Further Enquries and Doubts. Feel Free to reach us
          </Typography>
          <Link
            to={paths.CONTACT}
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button variant="contained">Contact Us</Button>
            </Box>
          </Link>
        </Container>
      )}
    </Box>
  );
}

export default ManpowerService;
