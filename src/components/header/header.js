/** @jsx jsx */
import { jsx, Container, Flex, Button, Label } from "theme-ui";
import { keyframes } from "@emotion/core";

// react-scroll is a library on npm, basically all this does is that
// it provide links and when we click on that it scroll to that part of the page as we saw in navbar
import { Link } from "react-scroll";
import Logo from "components/logo";
import LogoLight from "assets/logo.png";
import LogoDark from "assets/darkLogo.png";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import IconButton from "@material-ui/core/IconButton";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";
import BrightnessHighRoundedIcon from "@material-ui/icons/BrightnessHighRounded";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import { Button as Btn } from "@material-ui/core";

export default function Header({ className, dark, setDark }) {
  return (
    <header sx={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        <Logo src={dark ? LogoDark : LogoLight} />
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, i) => (
            <Link
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
            >
              {menuItem.label}
            </Link>
          ))}
        </Flex>

        <Button
          className="donate__btn"
          variant="secondary"
          aria-label="Get Started"
        >
          Get Started
        </Button>

        <button
          sx={styles.Btn}
          onClick={() => setDark((prevState) => !prevState)}
        >
          <IconButton>
            {dark === true ? (
              <BrightnessHighIcon
                color="primary"
                aria-label="Toggle light/dark mode"
              />
            ) : (
              <Brightness4RoundedIcon />
            )}
          </IconButton>
        </button>

        <MobileDrawer dark={dark} />
      </Container>
    </header>
  );
}

//**************** Styles ****************//
const positionAnim = keyframes`
  from {
    position: fixed; 
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "header_background",
      color: "text",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "primary",
      },
      "&.active": {
        color: "primary",
      },
    },
  },
  Btn: {
    position: "relative",
    backgroundColor: "transparent",
    border: 0,
    left: "20px",
    "@media screen and (max-width: 600px)": {
      left: "0",
    },
  },
};
