import { Box, Card, Container, Grid, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import theme from "../../theme/theme";
import ReactPlayer from "react-player";
import { newsAndUpdate } from "../../seed-data/seed-data";
import { Link } from "react-router-dom";

function NewsAndUpdates() {
  return (
    <>
      <Container>
        <h1
          style={{ textAlign: "center", color: theme.palette.secondary.main }}
        >
          Live News And Job Updates
        </h1>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {newsAndUpdate.map((data, index) => (
            <Grid
              key={index}
              item
              md={4}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Card sx={{ height: "200px", width: "350px" }}>
                <Box>
                  {data.type == "video" ? (
                    <ReactPlayer
                      url={data.mediaURL}
                      width="350px"
                      height="200px"
                    />
                  ) : (
                    <img
                      src={data.mediaURL}
                      alt="News and Update"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </Box>
              </Card>
              <Link to={data.url} target="_blank">
                <Typography fontWeight="bolder" textAlign="justify" p={2}>
                  {data.content}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default NewsAndUpdates;
