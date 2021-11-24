import React from "react";
import ContactForm from "../ContactForm";
import { makeStyles } from "@material-ui/core/styles";
//import { validateEmail } from "../../utils/helpers";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./style.css";
import Footer from "../Footer";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

/* const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
 */
function Contact() {
  const classes = useStyles();
  const cardstyle = {
    width: "500px",
    margin: "10px",
    padding: "10px",
  };
  /* const formstyle = {
    margin: "20px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  }; */
  //const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <div id="title">
        <h3>Contact</h3>
        <hr></hr>
      </div>
      <div className="flex-row">
        <Card className={classes.root} style={cardstyle}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Get in Touch
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Keep up to date with my latest projects or reach out to
              collaborate.
            </Typography>
            <br />
            <a href="https://linkedin.com/in/merriammassey">
              <Typography variant="h5" component="h2">
                LinkedIn:
                <Typography id="name" color="textSecondary">
                  merriammassey
                </Typography>
              </Typography>
            </a>
            <br />
            <a href="https://github.com/merriammassey">
              <Typography variant="h5" component="h2">
                GitHub:{" "}
                <Typography id="name" color="textSecondary">
                  merriammassey
                </Typography>
              </Typography>
            </a>
            <br />{" "}
            <a href="mailto:merriammassey@gmail.com" id="textDecoration">
              <Typography variant="h5" component="h2">
                Email:{" "}
                <Typography
                  id="name"
                  style={{ textDecoration: "none" }}
                  color="textSecondary"
                >
                  merriammassey@gmail.com
                </Typography>
              </Typography>
            </a>
            <br />
          </CardContent>
          {/* <ContactForm fullWidth></ContactForm> */}
        </Card>

        {/*<Card className={classes.root} style={cardstyle}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              Get in Touch
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Complete the form below and I will respond as soon as possible.
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
          <ContactForm></ContactForm>
  </Card> */}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
