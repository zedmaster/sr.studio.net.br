import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/simone.webp";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title} style={{color: '#FFFFFF'}}>Profissionais</h2>
      <div>
        <GridContainer>

        <GridItem xs={2} sm={2} md={2}>          
          </GridItem>

          <GridItem xs={8} sm={8} md={8}>
            <Card plain>
              <GridItem xs={8} sm={8} md={8} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Simone Ribeiro
                <br />
                <small className={classes.smallTitle}>Esteticista</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Sempre buscando as melhores metodologias e prezando a perfeição em cada trabalho.
                </p>
              </CardBody>             
            </Card>            
          </GridItem>

          <GridItem xs={2} sm={2} md={2}>          
          </GridItem>
          
        </GridContainer>
      </div>
    </div>
  );
}
