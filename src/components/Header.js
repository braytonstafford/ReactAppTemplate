import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Menu, MenuItem } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 0
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  margin: {
    padding: `0 ${theme.spacing.unit * 2}px`
  },
  tabs: {
    marginLeft: 9
  },
  tabWithMore: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  tabLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  spacer: {
    flex: 1
  }
});

class Home extends PureComponent {
  state = {
    selectedTab: 0,
    viewsMenuAnchorEl: null
  };

  handleToggleTabMenu = event => {
    this.setState({
      viewsMenuAnchorEl:
        this.state.viewsMenuAnchorEl === null ? event.currentTarget : null
    });
  };

  handleViewClick = view => event => {
    this.setState({ viewsMenuAnchorEl: null });
    this.props.history.push(`/${view}`);
  };

  handleChange = (event, newTab) => {
    this.setState({ selectedTab: newTab });
  };

  render() {
    const { classes } = this.props;
    const { selectedTab, viewsMenuAnchorEl } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              MyApp
            </Typography>
            <Tabs
              value={selectedTab}
              onChange={this.handleChange}
              className={classes.tabs}
            >
              <Tab
                label="Dashboard"
                onClick={this.handleViewClick("dashboard")}
              />
              <Tab
                key={`Tab w Menu`}
                label={
                  <div className={classes.tabWithMore}>
                    {`Tab w Menu`}
                    <ExpandMoreIcon
                      className={classes.margin}
                      color="secondary"
                      style={{
                        padding: 0
                      }}
                    />
                    <Menu
                      id="view-menu"
                      anchorEl={viewsMenuAnchorEl}
                      open={Boolean(viewsMenuAnchorEl)}
                      onClose={this.handleToggleTabMenu}
                    >
                      <MenuItem onClick={this.handleViewClick("table")}>
                        Table
                      </MenuItem>
                      <MenuItem onClick={this.handleViewClick("form")}>
                        Form
                      </MenuItem>
                      <MenuItem onClick={this.handleViewClick("action")}>
                        Action
                      </MenuItem>
                    </Menu>
                  </div>
                }
                value={`Tab w Menu`}
                className={classes.tabLink}
                component={Button}
                aria-owns={viewsMenuAnchorEl ? "view-menu" : null}
                aria-haspopup="true"
                onClick={this.handleToggleTabMenu}
              />
            </Tabs>
            <span className={classes.spacer} />
            <Button color="inherit" onClick={this.handleViewClick("login")}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Home));
