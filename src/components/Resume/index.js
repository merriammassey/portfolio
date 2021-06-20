import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PDF from "../../assets/MasseyCV.pdf";
import "./style.css";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Resume() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      <div id="title">
        <h3>Resume</h3>
        <hr></hr>
      </div>
      <div id="resume">
        <ul id="tools">
          <h4>My tools</h4>
          <br />
          <li>
            {bull}
            {"  "}JavaScript
          </li>
          <li>
            {bull}
            {"  "}CSS3
          </li>
          <li>
            {bull}
            {"  "}HTML5
          </li>
          <li>
            {bull}
            {"  "}SQL
          </li>
          <li>
            {bull}
            {"  "}NoSQL
          </li>
          <li>
            {bull}
            {"  "}MongoDB
          </li>
          <li>
            {bull}
            {"  "}Heroku
          </li>
          <li>
            {bull}
            {"  "}AWS
          </li>
          <li>
            {bull}
            {"  "}Express
          </li>
          <li>
            {bull}
            {"  "}React
          </li>
          <li>
            {bull}
            {"  "}Node
          </li>
          <li>
            {bull}
            {"  "}Query
          </li>
          <li>
            {bull}
            {"  "}Bootstrap
          </li>
          <li>
            {bull}
            {"  "}Ajax
          </li>
          <li>
            {bull}
            {"  "}React
          </li>
          <li>{bull} Handlebars</li>
        </ul>
        <div className={classes.root}>
          <Button variant="contained" a href={PDF} target="_blank" id="rb">
            View resume
          </Button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Resume;
