import { Box } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Instagram } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Bounce from "react-reveal/Bounce";

interface IProps {
  color: string;
}

function ContactAddress(props: IProps) {
  const { color } = props;
  return (
    <>
      <h1 style={{ margin: 0 }}>Contact Us </h1>
      <Box sx={{ display: "flex", paddingTop: "10px" }}>
        <LocalPhoneIcon
          sx={{
            color: { color },
          }}
        />
        <Box sx={{ paddingLeft: "10px" }}>
          {["81225 80079", "99943 37623", "74181 37623"].map(
            (phoneNumber, index) => (
              <h3 key={index} style={{ fontWeight: "100", margin: 0 }}>
                {phoneNumber}
              </h3>
            )
          )}
        </Box>
      </Box>
      <Box sx={{ display: "flex", padding: "10px 0" }}>
        <MailOutlineIcon
          sx={{
            color: { color },
          }}
        />
        <h3 style={{ fontWeight: "100", paddingLeft: "10px", margin: 0 }}>
          ssacs2023@gmail.com
        </h3>
      </Box>
      <Box sx={{ display: "flex" }}>
        <LocationOnIcon
          sx={{
            color: { color },
          }}
        />
        <Box sx={{ paddingLeft: "10px" }}>
          {[
            "Krishna Tower",
            "Near Malar School",
            "CollegeRoad",
            "P.Velur",
            "Namakkal Dt - 638 182",
          ].map((address, index) => (
            <h3 key={index} style={{ fontWeight: "100", margin: 0 }}>
              {address}
            </h3>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          paddingTop: "10px",
        }}
      >
        <Bounce>
          <FacebookOutlinedIcon
            sx={{
              fontSize: "2.5rem",
              padding: "0 10px",
              color: { color },
            }}
          />
        </Bounce>
        <Bounce>
          <Instagram
            sx={{
              fontSize: "2.5rem",
              padding: "0 10px",
              color: { color },
            }}
          />
        </Bounce>
        <Bounce>
          <WhatsAppIcon
            sx={{
              fontSize: "2.5rem",
              padding: "0 10px",
              color: { color },
            }}
          />
        </Bounce>
      </Box>
    </>
  );
}

export default ContactAddress;
