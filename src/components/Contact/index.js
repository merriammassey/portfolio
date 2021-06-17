import React /*, { useState }*/ from "react";
import ContactForm from "../ContactForm";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
//import { validateEmail } from "../../utils/helpers";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root} style={cardstyle}>
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
    </Card>
    /*    <div className={classes.root}>
      <Grid container spacing={3} style={formstyle}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <ContactForm></ContactForm>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid> 
    </div>*/
  );
}

export default Contact;
