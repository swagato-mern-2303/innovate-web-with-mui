import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import logo from "../assets/logo.png";

const pages = ["Home", "About", "Service", "Portfolio", "Price", "Blog"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "transparent",
        boxShadow: "0",
        py: "20px",
      }}
      position="absolute"
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <picture>
            <img src={logo} alt="Logo" />
          </picture>

          <Box
            sx={{
              display: { xs: "flex", lg: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", lg: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ color: "black" }} textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "none", lg: "flex" }, columnGap: "50px" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 1,
                  color: "#192239",
                  display: "block",
                  fontSize: "20px",
                  fontWeight: 600,
                  "&:hover": {
                    color: "#FF7628",
                  },
                }}
              >
                {page}
              </Button>
            ))}
            <Button
              sx={{
                backgroundColor: "#FF7628",
                borderRadius: "100px",
                px: "28px",
                fontSize: "18px",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#d95e17",
                },
              }}
              variant="contained"
            >
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
