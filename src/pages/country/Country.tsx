import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import PageBanner from "../../components/PageBanner";
import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { countryDetails } from "../../seed-data/seed-data";

function Country() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageBanner
        imageUrl="assets/country/sairam_country_banner.jpeg"
        content="Country"
      />
      <Container sx={{ paddingTop: "20px" }}>
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {countryDetails.map((detail, index) => (
            <React.Fragment key={index}>
              <Grid item md={6}>
                <Fade left duration={1500}>
                  <Box className="country-card">
                    <Card sx={{ maxWidth: 345, height: "450px" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="200"
                          image={detail.cardImageUrl}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {detail.cardTitle}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: "20px" }}
                          >
                            {detail.cardContent}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Fade>
              </Grid>
              <Grid item md={6}>
                <Fade right duration={1500}>
                  <Box>
                    <Typography sx={{ fontSize: "40px" }}>
                      {detail.title}
                    </Typography>
                    <Typography sx={{ textAlign: "justify" }}>
                      {detail.content}
                    </Typography>
                  </Box>
                </Fade>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Country;
