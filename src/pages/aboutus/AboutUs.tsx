import { Box, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import PageBanner from "../../components/PageBanner";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Instagram } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

function AboutUs() {
  return (
    <>
      <PageBanner
        imageUrl="assets\aboutus\aboutus_banner_sairam.jpeg"
        content="AboutUs"
      />
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <Grid item md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Fade left>
            <Card
              sx={{ maxWidth: "500px", maxHeight: "500px", boxShadow: "none" }}
            >
              <img
                height="100%"
                width="100%"
                src="assets\aboutus\aboutpage_content_image.png"
                alt="about-sairam"
                style={{ borderRadius: "5px" }}
              />
            </Card>
          </Fade>
          <Box sx={{ paddingLeft: "10px" }}>
            <Bounce>
              <FacebookOutlinedIcon
                sx={{ color: "#0165E1", fontSize: "30px" }}
              />
            </Bounce>
            <Bounce>
              <Instagram sx={{ color: "#C13584", fontSize: "30px" }} />
            </Bounce>
            <Bounce>
              <WhatsAppIcon sx={{ color: "#25D366", fontSize: "30px" }} />
            </Bounce>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Fade right>
            <Box sx={{ margin: "0 20px" }}>
              <h1>About Us</h1>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "normal",
                  textAlign: "justify",
                }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </Typography>
            </Box>
          </Fade>
        </Grid>
      </Grid>
    </>
  );
}

export default AboutUs;
