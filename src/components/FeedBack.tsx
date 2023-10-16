import { Box, Card, Container, Typography, useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "@mui/material/Rating";
import { feedbackSlider } from "../seed-data/seed-data";

function FeedBack() {
  const matches1 = useMediaQuery("(max-width:1100px)");
  const matches2 = useMediaQuery("(max-width:750px)");

  // Default Value
  let slidesToShow = 3;
  let slidesToScroll = 2;

  if (matches1) {
    slidesToShow = 2;
  }
  if (matches2) {
    slidesToShow = 1;
    slidesToScroll = 1;
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: true,
    arrow: true,
    accessibility: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <Container>
        <div>
          <Slider {...settings}>
            {feedbackSlider.length > 0 &&
              feedbackSlider.map((data, index) => (
                <Box key={index}>
                  <Card sx={{ height: "400px", margin: "0 10px" }}>
                    <Container>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <img
                            src={data.image}
                            alt={data.name}
                            height="50px"
                            width="50px"
                            style={{ borderRadius: "50%", marginRight: "10px" }}
                          />
                        </Box>
                        <Box>
                          <Rating defaultValue={5} readOnly />
                          <Typography sx={{ fontWeight: "bold" }}>
                            {data.name}
                          </Typography>
                          <Typography sx={{ fontWeight: "bold" }}>
                            {data.institute}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ margin: "10px 0" }}>
                        <Typography sx={{ textAlign: "justify" }}>
                          {data.review}
                        </Typography>
                      </Box>
                    </Container>
                  </Card>
                </Box>
              ))}
          </Slider>
        </div>
      </Container>
    </>
  );
}

export default FeedBack;
