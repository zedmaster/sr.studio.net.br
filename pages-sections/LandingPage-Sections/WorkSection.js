import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import IconButton from "@material-ui/core/IconButton";
import RoomIcon from '@material-ui/icons/Room';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

import team1 from "assets/img/studio_01.webp";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title} style={{color: '#FFFFFF'}}>Espaço</h2>
      <div>
        <GridContainer>

          <GridItem xs={2} sm={2} md={2}>          
          </GridItem>

          <GridItem xs={8} sm={8} md={8}>
            <Card plain>
              <GridItem xs={8} sm={8} md={8} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              
              <CardBody>
                <p className={classes.description}>
                  Espaço agradável para atendimento, estacionamento seguro.
                </p>
                
              </CardBody>             
            </Card>            
          </GridItem>

          <GridItem xs={2} sm={2} md={2}></GridItem>
          
        </GridContainer>

      </div>



      <GridContainer style={{color: '#FFFFFF', paddingTop: "70px"}}>
        <GridItem xs={6} sm={6} md={6}>
        <h3>Obrigado por nos apoiar!</h3>
          <Button
            title="Siga-nos no Instagram"
            color="transparent"
            href="https://www.instagram.com/simoneribeiro.studio"
            target="_blank"
          >
            <i className={classes.socials + " fab fa-instagram"} style={{ fontSize: 40 }} />
          </Button>
          <Button 
            title="Siga-nos no Facebook"
            color="transparent"
            href="https://www.facebook.com/Simone-Ribeiro-Studio-103904081758904"
            target="_blank"
          >
            <i className={classes.socials + " fab fa-facebook-square"} style={{ fontSize: 40 }} />
          </Button>
          <Button
            title="Agende o seu horário!"
            color="transparent"
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5541998109882&text=Vi%20o%20seu%20site%20quero%20agendar%20um%20horario"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-whatsapp"} style={{ fontSize: 40, whiteSpace: "break-spaces", textTransform: "unset" }} /> 
            
          </Button>
        </GridItem>

        <GridItem xs={6} sm={6} md={6} >
          
            <IconButton
              color="primary"
              href="https://g.page/simone-ribeiro-studio?share"
              target="_blank"
              className={classes.navLink}
              simple
            >
              <RoomIcon style={{ fontSize: 30 }} />
              <span style={{ fontSize: 20 }}> Rua Paula Prevedello Gusso - Curitiba</span>
            </IconButton>

            <Button
              title="Agende o seu horário!"
              color="primary"
              href="https://api.whatsapp.com/send?1=pt_BR&phone=5541998109882&text=Vi%20o%20seu%20site%20quero%20agendar%20um%20horario"
              target="_blank"
              className={classes.navLink}
              simple
            >            
              <i className={classes.socialIcons + " fab fa-whatsapp"} style={{ fontSize: 40, color: "#FFFFFF" }} /> 
              <span style={{ fontSize: 20, color: "#FFFFFF" }}> (41) 99810-9882</span>
            </Button>
          
        </GridItem>
      </GridContainer>

    </div>
  );
}
