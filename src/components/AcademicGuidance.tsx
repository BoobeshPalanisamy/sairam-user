import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ourServices_academicGuidance } from "../seed-data/seed-data";

function AcademicGuidance() {
  const matches = useMediaQuery("(min-width:1100px)");
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
          Academic
          <span style={{ color: "orange", fontSize: "40px" }}>
            Works & Guidance
          </span>
        </Typography>
        <Grid
          container
          spacing={3}
          mt={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {ourServices_academicGuidance.map((service, index) => (
            <Grid item md={4} key={index}>
              <Card
                sx={{
                  borderRadius: "20px",
                  boxShadow: "7px 7px 14px #cbced1,-7px -7px 14px #fff;",
                  height: matches ? "420px" : "auto",
                }}
              >
                <CardActionArea>
                  <Box
                    sx={{ display: "flex", justifyContent: "center" }}
                    mt={1}
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      height="200px"
                      width="200px"
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: "bolder" }}
                    >
                      {service.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "18px" }}
                    >
                      {service.content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default AcademicGuidance;
