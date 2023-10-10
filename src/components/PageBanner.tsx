import { Box, Typography } from "@mui/material";

interface IProps {
  imageUrl: string;
  content: string;
  description?: string;
}
function PageBanner(props: IProps) {
  const { imageUrl, content } = props;
  return (
    <>
      <Box
        className="page-banner-area"
        style={{
          backgroundImage: `url(${imageUrl})`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box className="page-banner-content">
          <Typography
            sx={{
              textTransform: "uppercase",
              marginBottom: "0 !important",
              color: "#fff",
            }}
            variant="h4"
            fontWeight={"medium"}
          >
            {content}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default PageBanner;
