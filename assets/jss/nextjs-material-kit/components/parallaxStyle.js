const parallaxStyle = theme => ({
  parallax: {
    height: "100vh",
    maxHeight: "1400px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "380px"
  },
  parallaxResponsive: {
    [theme.breakpoints.down("lg")]: {
      height: "90vh",
      //minHeight: "660px"
    },
    [theme.breakpoints.down("md")]: {
      height: "80vh",
      //minHeight: "660px"
    },
    [theme.breakpoints.down("sm")]: {
      height: "70vh",
      //minHeight: "660px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "45vh",
      //minHeight: "660px"
    }
  }
});

export default parallaxStyle;
