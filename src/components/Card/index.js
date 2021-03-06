import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ project }) {
  const classes = useStyles();
  const cardstyle = {
    width: "500px",
    margin: "10px",
  };
  return (
    <Card style={cardstyle} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={project.image}
          name={project.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {project.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={project.deployment} target="_blank" rel="noreferrer">
            Visit
          </a>
        </Button>
        <Button size="small" color="primary">
          <a href={project.repo} target="_blank" rel="noreferrer">
            Repo
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}
