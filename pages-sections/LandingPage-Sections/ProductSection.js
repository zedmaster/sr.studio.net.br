import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">        
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Serviços</h2>
          <h5 className={classes.description}>
            O SR Studio trabalha com alguns segmentos de micropigmentação e piercing, confira:
          </h5>
        </GridItem>
      </GridContainer>

      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4} id="design">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require("assets/img/01_servico.webp")}
                  title="Design"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2" className={classes.typoTitle}>
                    Design
                  </Typography>
                  <Typography variant="body2" component="p">
                      Design profissional de sobrancelhas, trazendo harmonia e beleza, respeitando cada personalidade.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4} id="microblading">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require("assets/img/02_servico.webp")}
                  title="Microblading"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2" className={classes.typoTitle}>
                    Microblading
                  </Typography>
                  <Typography variant="body2" component="p">
                    Utilizando técnica de micropigmentação fio a fio ultrarealista, desenvolvemos sobrancelhas mais realistas e harmonizadas com o seu perfil.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4} id="piercing">

            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require("assets/img/03_servico.webp")}
                  title="Piercing"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2" className={classes.typoTitle}>
                    Piercing
                  </Typography>
                  <Typography variant="body2" component="p">
                    Utilizando as técnicas adequadas para colocação de piercing, temos vários modelos de joias para sua livre escolha.
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>


          </GridItem>
        </GridContainer>
      </div>
      
    </div>
  );
}
