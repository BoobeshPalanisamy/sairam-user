import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ourServices_communicationTraining } from "../../seed-data/seed-data";
import theme from "../../theme/theme";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router";

function CommunicationTraining() {
  const matches = useMediaQuery("(min-width:1100px)");
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <Box
      sx={{
        fontWeight: "700",
        backgroundColor: "#f5f5f5",
      }}
      pb={2}
    >
      <Container>
        <Typography variant="h3">
          Communication <span style={{ color: "orange" }}>Training</span>
        </Typography>
        <Grid
          container
          spacing={3}
          mt={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {ourServices_communicationTraining.map((service, index) => (
            <Grid item md={4} onClick={() => handleNavigate(service.path)}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bolder",
                  color: theme.palette.primary.main,
                  cursor: "pointer",
                }}
              >
                {service.title}
              </Typography>
              <Paper
                elevation={0}
                key={index}
                sx={{
                  height: matches ? "200px" : "auto",
                  borderRadius: "20px",
                  boxShadow: "7px 7px 14px #cbced1,-7px -7px 14px #fff;",
                  "&:hover": {
                    backgroundColor: "#cbd4d3",
                  },
                }}
              >
                <Container>
                  <Typography
                    sx={{
                      textAlign: "justify",
                      fontSize: "18px",
                      padding: "10px 0",
                    }}
                  >
                    {service.content}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: theme.palette.secondary.main,
                        marginBottom: "5px",
                      }}
                    >
                      Learn More
                      <KeyboardDoubleArrowRightIcon />
                    </Button>
                  </Box>
                </Container>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default CommunicationTraining;
