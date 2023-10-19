import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Box, ListItem } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
// import { Link } from "react-router-dom";

function SocialMediaNavigator() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "280px",
        zIndex: "6",
        cursor: "pointer",
      }}
    >
      <List sx={{ width: "50%", height: "50px" }}>
        {/* <Link to={import.meta.env.VITE_LEADERS_FACEBOOK} target="_blank"> */}
        <ListItem
          sx={{
            background: "#34a5eb",
            padding: "15px",
            transition: "width 1s",
            "&:hover": {
              width: "100px",
            },
            justifyContent: "center",
          }}
        >
          <ListItemIcon sx={{ justifyContent: "center" }}>
            <a href="tel:+916379540914">
              <CallIcon sx={{ color: "#fff" }} />
            </a>
          </ListItemIcon>
        </ListItem>
        {/* <Link to={import.meta.env.VITE_LEADERS_FACEBOOK} target="_blank"> */}
        <ListItem
          sx={{
            background: "#3C5A98",
            padding: "15px",
            transition: "width 1s",
            "&:hover": {
              width: "100px",
            },
            justifyContent: "center",
          }}
        >
          <ListItemIcon sx={{ justifyContent: "center" }}>
            <FacebookOutlinedIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
        </ListItem>
        {/* </Link> */}
        {/* <Link to={import.meta.env.VITE_LEADERS_INSTAGRAM} target="_blank"> */}
        <ListItem
          sx={{
            background: "#DC4F42",
            padding: "15px",
            transition: "width 1s",
            "&:hover": {
              width: "100px",
            },
            justifyContent: "center",
          }}
        >
          <ListItemIcon sx={{ justifyContent: "center" }}>
            <InstagramIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
        </ListItem>
        {/* </Link> */}
        {/* <Link to={import.meta.env.VITE_LEADERS_WHATSAPP} target="_blank"> */}
        <ListItem
          sx={{
            background: "#25d366",
            padding: "15px",
            transition: "width 1s",
            "&:hover": {
              width: "100px",
            },
            justifyContent: "center",
          }}
        >
          <ListItemIcon sx={{ justifyContent: "center" }}>
            <WhatsAppIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
        </ListItem>
        {/* </Link> */}
      </List>
    </Box>
  );
}

export default SocialMediaNavigator;
