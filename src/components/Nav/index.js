import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import "./style.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "rgb(69, 73, 77)",
    textColor: "rgb(122, 211, 213)",
    indicatorColor: "rgb(122, 211, 213)",
  },
});

function AppNav() {
  const classes = useStyles();
  const [value, setValue] = React.(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <div>
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="About" component={Link} to={"/about"} />
        <Tab label="My work" component={Link} to={"/myportfolio"} />
        <Tab label="Resume" component={Link} to={"/resume"} />
        <Tab label="Contact" component={Link} to={"/contact"} />
      </Tabs>
    </Paper>
    /* <div id="header">
        <h3 value={value} onChange={handleChange}>
          {value}
        </h3>
        <hr></hr>
      </div> */
    /* </div> */
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
export default AppNav;
