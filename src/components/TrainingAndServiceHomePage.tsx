import { Box, Grid, Typography } from "@mui/material";
import { homePageTrainingAndService } from "../seed-data/seed-data";

function TrainingAndServiceHomePage() {
  return (
    <>
      <Box sx={{ backgroundColor: "#d9f8fa", padding: "20px" }}>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          {homePageTrainingAndService.map((content, index) => (
            <Grid
              item
              md={3.5}
              xs={6}
              sx={{
                padding: "10px",
                boxShadow: "7px 7px 14px #cbced1,-7px -7px 14px #fff",
              }}
            >
              <Box key={index}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={content.image}
                    alt={content.name}
                    height="100px"
                    width="100px"
                  />
                </Box>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                >
                  {content.content}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default TrainingAndServiceHomePage;
