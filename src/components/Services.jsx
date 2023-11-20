import { Fragment } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import patternImg from "../assets/pattern.png";
import marketingStrategyIcon from "../assets/marketing-strategy-icon.png";
import socialMarketingIcon from "../assets/social-marketing-icon.png";
import contentMarketingIcon from "../assets/content-marketing-icon.png";

const cardData = [
  {
    header: "Marketing Strategy",
    description:
      "Social Media has changed the way we interact & do business while creating",
    bgColor: "#EBF7E9",
    icon: marketingStrategyIcon,
  },
  {
    header: "Social Marketing",
    description:
      "Social Media has changed the way we interact & do business while creating a new avenue",
    bgColor: "#D8EAFF",
    icon: socialMarketingIcon,
  },
  {
    header: "Content Marketing",
    description:
      "Content Marketing is the other fold of online advertisement. If you are looking to build",
    bgColor: "#FBF1EC",
    icon: contentMarketingIcon,
  },
];

function Services() {
  return (
    <section style={{ marginTop: "60px" }}>
      <Box
        sx={{ maxWidth: "332px", mx: "auto", mb: "52px", textAlign: "center" }}
      >
        <img src={patternImg} alt="pattern" />
        <Typography
          variant="h2"
          sx={{
            fontSize: "48px",
            fontWeight: 800,
            letterSpacing: "0.5px",
            color: "#192239",
            my: 2,
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "18px", fontFamily: "paprika", color: "#6C7D93" }}
        >
          We have been providing great flooring solutions service.
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {cardData.map((item, index) => (
            <Fragment key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  px: "45px",
                  py: "55px",
                  boxShadow: "0px 30px 60px 0px rgba(162, 169, 192, 0.15)",
                  borderRadius: "20px",
                  backgroundColor: `${item.bgColor}`,
                }}
              >
                <CardMedia
                  sx={{ height: "64px", width: "64px", mx: "auto" }}
                  image={item.icon}
                  title="hello world"
                />
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "30px",
                      fontWeight: 600,
                      color: "#202427",
                      mt: "28px",
                      mb: "20px",
                    }}
                  >
                    {item.header}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "18px",
                      fontFamily: "paprika",
                      color: "#6C7D93",
                      maxWidth: "250px",
                      mx: "auto",
                      lineHeight: "30px",
                    }}
                  >
                    Social Media has changed the way we interact & do business
                    while creating
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      px: "16px",
                      mx: "auto",
                      mt: "24px",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#202427",
                      position: "relative",
                      zIndex: 1,
                      "&:before": {
                        content: "''",
                        height: "36px",
                        width: "36px",
                        backgroundColor: "#FF7628",
                        position: "absolute",
                        left: "0",
                        top: "50%",
                        transform: "translateY(-50%)",
                        borderRadius: "100px",
                        zIndex: -1,
                        opacity: 0.5,
                        transition: "300ms",
                      },
                      "&:hover": {
                        "&:before": {
                          width: "100%",
                        },
                      },
                    }}
                  >
                    read more
                  </Button>
                </CardActions>
              </Card>
            </Fragment>
          ))}
        </Toolbar>
      </Container>
    </section>
  );
}

export default Services;
