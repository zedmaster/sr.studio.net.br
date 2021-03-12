/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import RoomIcon from '@material-ui/icons/Room';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
            href="#design"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >Design</Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#microblading"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >Microblading</Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#piercing"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >Piercing</Button>
      </ListItem>
      

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Siga-nos no facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/Simone-Ribeiro-Studio-103904081758904"
            title="Siga-nos no Facebook"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Siga-nos no instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/simoneribeiro.studio"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Localização"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            color="transparent"
            href="https://g.page/simone-ribeiro-studio?share"
            target="_blank"
            className={classes.navLink}
          >
            <RoomIcon />
          </IconButton>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="whatsApp-tooltip"
          title="Agende o seu horário"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5541998109882&text=Vi%20o%20seu%20site%20quero%20agendar%20um%20horario"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-whatsapp"} /> 
            <span className={classes.navLinkWhatsapp}>Agende o seu horário!</span>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
