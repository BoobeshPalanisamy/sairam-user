import { Box, useMediaQuery } from "@mui/material";

interface IProps {
  imageUrl: string;
  content: string;
}

function PageBanner(props: IProps) {
  const matches = useMediaQuery("(max-width:500px)");
  const { imageUrl, content } = props;

  const imageHeight = matches ? "300px" : "500px";

  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Box className="page-banner" style={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "#84c0f5",
            opacity: 0.5,
            width: "100%",
            height: "100%",
          }}
        />
      <img
          src={imageUrl}
          alt={content}
          height={imageHeight}
          width="100%"
          style={{ zIndex: 1 }}
        />
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            zIndex: 2,
          }}
        >
          <h1 style={{ fontSize: "50px" }}>{content}</h1>
        </Box>
      </Box>
    </Box>
  );
}

export default PageBanner;
