import { Box, Typography, useMediaQuery } from "@mui/material";
import Marquee from "react-fast-marquee";
import { countryFlag } from "../seed-data/seed-data";
import { useNavigate } from "react-router";
import { paths } from "../routes/paths";

function FlagSlider() {
  const matches = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();
  const handleNavigateToCountryPage = () => {
    navigate(paths.COUNTRY);
  };
  return (
    <Box>
      <Marquee>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          {countryFlag.map((item, index) => (
            <Box
              className="box"
              key={index}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              alignItems={"center"}
              sx={{ margin: matches ? "0 20px" : "0 40px" }}
              onClick={handleNavigateToCountryPage}
            >
              <img
                src={item.image}
                style={{
                  width: matches ? "100px" : "200px",
                  height: matches ? "50px" : "100px",
                }}
              />
              <Typography
                pt={2}
                style={{
                  fontSize: matches ? "15px" : "20px",
                  fontWeight: "600",
                }}
              >
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Marquee>
    </Box>
  );
}

export default FlagSlider;
