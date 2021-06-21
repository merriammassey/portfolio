import React from "react";
//import headshot from "../../assets/headshot.png";
import "./style.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useSpring, animated, set, config, flip } from "react-spring";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Home() {
  const classes = useStyles();
  const mni = useSpring({
    to: { opacity: 1, paddingTop: 0 },
    from: { opacity: 0, paddingTop: 200 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  const mm = useSpring({
    to: { opacity: 1, paddingLeft: 0 },
    from: { opacity: 0, paddingLeft: 80 },
    reset: true,
    reverse: flip,
    delay: 700,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  const iaa = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 900,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <section>
      <div id="homephoto">
        <div id="text">
          <animated.div style={mni}>
            <p>MY NAME IS</p>
          </animated.div>
          <animated.div style={mm}>
            <h1>
              Merriam <br />
              Massey
            </h1>
          </animated.div>
          <animated.div style={iaa}>
            <p>I am a fullstack developer based in Phoenix, Arizona.</p>
            <br />
            <div id="connectbutton" className={classes.root}>
              <Button variant="contained" component={Link} to={"/contact"}>
                Let's connect
              </Button>
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
}

export default Home;
