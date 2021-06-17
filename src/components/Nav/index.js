import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function Nav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="About" component={Link} to={"/about"} />
        <Tab label="My work" component={Link} to={"/portfolio"} />
        <Tab label="Resume" component={Link} to={"/resume"} />
        <Tab label="Contact" component={Link} to={"/contact"} />
      </Tabs>
    </Paper>
  );
}

/* function Nav() {
  //change title of browser tab
  /* useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);
 
  return (
    <header className="flex-row px-1">
      <h2>
        <a a data-testid="link" href="/">
          Merriam Massey
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li>
            <a data-testid="about" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a data-testid="about" href="#portfolio">
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
*/
export default Nav;
