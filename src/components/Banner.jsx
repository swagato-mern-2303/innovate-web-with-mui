import { Box, Button, Container, Typography } from "@mui/material";
import bannerBg from "../assets/banner-bg.png";
import bannerContentPattern from "../assets/pattern.png";

function Banner() {
  return (
    <main
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: 0,
        marginTop: 0,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            paddingTop: "214px",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <Box sx={{ maxWidth: "686px" }}>
            <img src={bannerContentPattern} alt="Pattern" />
            <Typography
              variant="h1"
              sx={{
                fontSize: "72px",
                fontWeight: 800,
                lineHeight: "normal",
                color: "#192239",
              }}
            >
              We Are Digital <span style={{ color: "#FF7628" }}>Marketing</span>{" "}
              Agency
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: "20px",
                mb: 6,
                maxWidth: "570px",
                color: "#6C7D93",
                fontSize: "20px",
                lineHeight: "36px",
                fontFamily: "paprika",
              }}
            >
              Use customer data to build great and solid product experiences
              that convert. Digital marketing&apos;s development has changed the
              way brands and businesses use technology for marketing.
            </Typography>
            <Button
              variant="contained"
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                px: "40px",
                py: "20px",
                borderRadius: "100px",
                backgroundColor: "#FF7628",
                "&:hover": {
                  backgroundColor: "#d95e17",
                },
              }}
            >
              get free quote
            </Button>
          </Box>

          <Box sx={{ position: "relative", mt: "150px", alignSelf: "center" }}>
            <img
              style={{
                position: "absolute",
                top: "-230px",
                right: "-300px",
                borderRadius: "60px",
              }}
              src="https://placehold.co/462x434?text=placeholder"
              alt=""
            />
            <img
              style={{
                borderRadius: "60px",
                border: "8px solid white",
                position: "relative",
              }}
              src="https://placehold.co/462x434?text=placeholder"
              alt=""
            />
          </Box>
        </Box>
      </Container>
    </main>
  );
}

export default Banner;
