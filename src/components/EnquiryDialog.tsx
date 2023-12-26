import Dialog from "@mui/material/Dialog";
import { useEnquiryDialogContext } from "../context/EnquiryDialogContext";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";

export default function EnquiryDialog() {
  const { open, handleClose, handleClickOpen } = useEnquiryDialogContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClickOpen();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Box>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <form
          style={{
            padding: "20px 20px 10px 20px",
            borderRadius: "20px",
            // boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h4"
              sx={{ color: "black", mb: 2, fontFamily: "cursive" }}
            >
              Contact Us
            </Typography>
            <Box>
              <IconButton onClick={handleClose}>
                <CloseIcon
                  color="warning"
                  sx={{
                    backgroundColor: "#f7ebee",
                    padding: "5px",
                    borderRadius: "50%",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ padding: "5px 0" }}>
            <TextField label="Enter Name" fullWidth size="small" required />
          </Box>
          <Box sx={{ padding: "5px 0" }}>
            <TextField label="Enter Age" fullWidth size="small" required />
          </Box>
          <Box sx={{ padding: "5px 0" }}>
            <TextField label="Enter Phone no" required fullWidth size="small" />
          </Box>
          <Box sx={{ padding: "5px 0" }}>
            <TextField
              label="Enter Email"
              fullWidth
              required
              type="email"
              size="small"
            />
          </Box>
          <Box sx={{ padding: "5px 0" }}>
            <TextField label="Message" multiline rows={4} fullWidth />
          </Box>
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
        </form>
        <Button
          variant="outlined"
          sx={{ margin: "0 20px 20px 20px" }}
          onClick={handleClose}
        >
          Remind Me Later
        </Button>
      </Dialog>
    </Box>
  );
}
