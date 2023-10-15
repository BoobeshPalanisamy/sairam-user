import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import ContactAddress from "../../footer/ContactAddress";
import PageBanner from "../../components/PageBanner";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function Contact() {
  return (
    <>
      <PageBanner
        imageUrl="assets\contactus\sairam_contact_banner.jpg"
        content="Contact"
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
            <Grid item md={6}>
              <Box>
                <Fade right duration={500}>
                  <Container>
                    <form
                      style={{
                        backgroundColor: "#f0f4f5",
                        padding: "20px",
                        borderRadius: "20px",
                        boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Typography
                            variant="h4"
                            sx={{ color: "black", mb: 2 }}
                          >
                            Contact Us
                          </Typography>
                          <TextField
                            label="Enter Child Name"
                            fullWidth
                            size="small"
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Enter Age"
                            fullWidth
                            size="small"
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Enter Phone no"
                            required
                            fullWidth
                            size="small"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Enter Email"
                            fullWidth
                            required
                            type="email"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Message"
                            multiline
                            rows={4}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} textAlign={"center"}>
                          <Button
                            variant="contained"
                            type="submit"
                            sx={{
                              mt: 1,
                            }}
                            fullWidth
                          >
                            Submit
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Container>
                </Fade>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5865.863141553983!2d78.00123703445087!3d11.113824062465573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDA2JzUyLjAiTiA3OMKwMDAnMTguNCJF!5e0!3m2!1sen!2sin!4v1696919174863!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0", marginTop: "20px" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </Box>
    </>
  );
}

export default Contact;
