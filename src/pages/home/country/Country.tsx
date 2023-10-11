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
import PageBanner from "../../../components/PageBanner";
import React from "react";
import Fade from "react-reveal/Fade";

function Country() {
  const countryDetails = [
    {
      cardImageUrl: "public/assets/sairam_country_banner.jpeg",
      cardTitle: "UK",
      cardContent:
        " The UK is renowned for its world-class universities, offering top-notch education, and its vibrant cities including London, which is a global financial hub.",
      title: "UK",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley   of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      cardImageUrl: "public/assets/sairam_country_banner.jpeg",
      cardTitle: "Canada",
      cardContent:
        " Canada is renowned for its world-class universities, offering top-notch education, and its vibrant cities including Toronto, which is a global financial hub.",
      title: "Canada",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley   of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      cardImageUrl: "public/assets/sairam_country_banner.jpeg",
      cardTitle: "USA",
      cardContent:
        " The USA is renowned for its world-class universities, offering top-notch education, and its vibrant cities including New York, which is a global financial hub.",
      title: "USA",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley   of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      cardImageUrl: "public/assets/sairam_country_banner.jpeg",
      cardTitle: "New Zealand",
      cardContent:
        " New Zealand is renowned for its world-class universities, offering top-notch education, and its natural beauty.",
      title: "New Zealand",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley   of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      cardImageUrl: "public/assets/sairam_country_banner.jpeg",
      cardTitle: "Australia",
      cardContent:
        " Australia is renowned for its world-class universities, offering top-notch education, and its diverse landscapes.",
      title: "Australia",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley   of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  return (
    <>
      <PageBanner
        imageUrl="public\assets\sairam_country_banner.jpeg"
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
                    <Typography>{detail.content}</Typography>
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
