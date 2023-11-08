import { Box, Typography, useMediaQuery } from "@mui/material";
import CommunicationTraining from "../../components/CommunicationTraining";

function CommunicationalTrainingPage() {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Box>
        <Box position="relative">
          <img
            src="assets\ourservices\CommunicationalTraining_sairam.jpg"
            alt="srisairam-academy-consultancy"
            width="100%"
            style={{ height: matches ? "250px" : "500px" }}
            className="homepage-banner"
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              width: "100%",
            }}
          >
            <h1
              style={{
                fontSize: matches ? "35px" : "50px",
                fontWeight: "bolder",
                color: "#fff",
                padding: "0 10px",
              }}
            >
              Sri SaiRam Academic and Career Consultancy
            </h1>
            <Typography
              sx={{
                fontSize: matches ? "30px" : "40px",
                fontWeight: "700",
                color: "orange",
              }}
            >
              Study,Work,Live Abroad
            </Typography>
          </Box>
        </Box>
      </Box>
      <CommunicationTraining />
    </>
  );
}

export default CommunicationalTrainingPage;
