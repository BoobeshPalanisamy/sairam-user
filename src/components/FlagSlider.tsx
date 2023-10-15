import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { countryFlag } from "../seed-data/seed-data";

function FlagSlider() {
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
              sx={{ margin: "0 40px" }}
            >
              <img
                src={item.image}
                style={{
                  width: "200px",
                  height: "100px",
                }}
              />
              <Typography
                pt={2}
                style={{ fontSize: "20px", fontWeight: "600" }}
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
