import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PDF from "../../assets/MasseyCV.pdf";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Resume() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          a
          href={PDF}
          target="_blank"
        >
          Resume
        </Button>
        <h2>Proficiencies</h2>
        <ul>
          <li>JavaScript ES6+</li>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>SQL</li>
          <li>NoSQL</li>
          <li>MongoDB</li>
          <li>Heroku</li>
          <li>AWS</li>
          <li>Express</li>
          <li>React</li>
          <li>Node</li>
          <li>Handlebars</li>
          <li>Query</li>
          <li>Bootstrap</li>
          <li>Ajax</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
