import React from "react";
//import headshot from "../../assets/headshot.png";
import "./style.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <section>
      <div id="homephoto">
        <div id="text">
          <div id="mni">
            <p>MY NAME IS</p>
          </div>
          <div id="mm">
            <h1>
              Merriam <br />
              Massey
            </h1>
          </div>
          <div id="iaa">
            <p>I am a fullstack developer based in Phoenix, Arizona.</p>
          </div>
          <br />
          <div id="connectbutton" className={classes.root}>
            <Button variant="contained" component={Link} to={"/contact"}>
              Let's connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
