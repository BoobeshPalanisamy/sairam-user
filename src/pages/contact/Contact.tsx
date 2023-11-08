import { Box, Container, Grid } from "@mui/material";
import ContactAddress from "../../footer/ContactAddress";
import PageBanner from "../../components/PageBanner";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import ContactUsForm from "../../components/ContactUsForm";

function Contact() {
  return (
    <>
      <PageBanner
        imageUrl="assets\contactus\sairam_contact_banner.jpg"
        content="Contact Us"
      />
      <Box sx={{ marginTop: "30px" }}>
        <Container>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item md={6}>
              <Box sx={{ display: "flex" }}>
                <Fade left duration={1000}>
                  <Box>
                    <ContactAddress color="#4962fd" />
                  </Box>
                </Fade>
                <Zoom>
                  <img
                    src="assets\contactus\LocationQR.png"
                    alt="sairam-location"
                    height="120px"
                    width="120px"
                  />
                </Zoom>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box>
                <ContactUsForm />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.9851147700583!2d78.0051127!3d11.1144863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babd59049754957%3A0xb5f405938315a7f7!2sSri%20SaiRam%20Academy%20%26%20Career%20Services!5e0!3m2!1sen!2sin!4v1698233564339!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0", marginTop: "20px" }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          // loading="lazy"
        ></iframe>
      </Box>
    </>
  );
}

export default Contact;
