import { cardTitle, title } from "assets/jss/nextjs-material-kit.js";
import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.js";

const workStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    fontSize: "3rem",
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: "2rem"
  },
  smallTitle: {
    color: "#ebda5d",
    fontSize: "1.5rem"
  },
  description: {
    color: "#FFFFFF",
    fontSize: "1.4rem"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#FFFFFF"
  },
  margin5: {
    margin: "5px"
  },
  navLink: {
    color: "#FFFFFF",
    marginBlockStart: "0.3em"
  }
};

export default workStyle;
