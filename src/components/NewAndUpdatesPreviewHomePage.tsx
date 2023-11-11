import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import theme from "../theme/theme";
import ReactPlayer from "react-player";
import { newsAndUpdate } from "../seed-data/seed-data";
import { Link, useNavigate } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { paths } from "../routes/paths";

function NewAndUpdatesPreviewHomePage() {
  const previewNewsAndUpdate = newsAndUpdate.slice(0, 3);
  const navigate = useNavigate();
  const handleNavigateToNewsandUpdatePage = () => {
    navigate(paths.NEWSANDUPDATES);
  };
  return (
    <>
      <Container>
        <h2
          style={{
            textAlign: "center",
            fontSize: "35px",
            margin: "0",
            paddingTop: "20px",
          }}
        >
          Get Our Live &nbsp;
          <span style={{ color: theme.palette.primary.main }}>News</span>
          &nbsp;&&nbsp;
          <span style={{ color: theme.palette.primary.main }}>Job</span>
          &nbsp;Updates
        </h2>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
          mt={2}
        >
          {previewNewsAndUpdate.map((data, index) => (
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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            onClick={handleNavigateToNewsandUpdatePage}
          >
            See All News and Jobs
            <KeyboardDoubleArrowRightIcon />
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default NewAndUpdatesPreviewHomePage;
