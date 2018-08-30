// @flow
import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Input, InputLabel } from "@material-ui/core";
import { FormControl, FormHelperText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import orange from "@material-ui/core/colors/orange";

type LogInContainerProps = {
  signIn: Function,
  client: Object
};

type LogInContainerState = {
  errors?: boolean
};

class LogInContainer extends PureComponent<
  LogInContainerProps,
  LogInContainerState
> {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.dispatch(userActions.logout());

    this.state = {
      username: "",
      password: "",
      submitted: false,
      errors: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSignIn = e => {
    e.preventDefault();
    this.setState({ submitted: true });

    const { username, password, errors } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(
        userActions.login(
          username,
          password,
          this.props.location &&
            this.props.location.state &&
            this.props.location.state.from
        )
      );
    }
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <Paper>
        <Grid container spacing={24} alignItems={"center"} justify={"center"}>
          <Grid
            item
            sm={3}
            style={{
              //backgroundImage: `url(${loginBackground})`,
              maxWidth: 343
            }}
            className={classes.sideBar}
          >
            <div className={classes.paper}>
              <Typography
                type="headline"
                gutterBottom
                className={classes.descriptionText}
              >
                My App
              </Typography>
              <br />
              <br />
              <Typography
                type="caption"
                gutterBottom
                className={classes.descriptionText}
              >
                www.myapp.com
              </Typography>
            </div>
          </Grid>
          <Grid item className={classes.loginGrid}>
            <Card className={classes.loginCard}>
              <CardHeader title="Sign In" />
              <form onSubmit={this.handleSignIn}>
                <CardContent>
                  <FormControl component="fieldset" fullWidth>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input
                      id="username"
                      name="username"
                      onChange={this.handleChange}
                      autoFocus
                    />
                  </FormControl>
                  <br />
                  <br />
                  <br />
                  <FormControl
                    fullWidth
                    error={!!errors}
                    component="fieldset"
                    fullWidth
                  >
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      onChange={this.handleChange}
                    />
                    <FormHelperText>{errors}</FormHelperText>
                  </FormControl>
                </CardContent>
                <CardActions>
                  <Button
                    variant="raised"
                    color="primary"
                    className={classes.cssRoot}
                  >
                    Sign In
                  </Button>
                </CardActions>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const styles = theme => ({
  container: {
    height: "100%"
  },
  paper: {
    height: "100vh"
  },
  sideBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.text.primary
  },
  logoWhite: {
    padding: "9px",
    width: "209px",
    height: "53px",
    margin: "0 auto 50px",
    backgroundPosition: "center"
  },
  descriptionText: {
    padding: 16,
    color: "#F2F3F5",
    textAlign: "center",
    textShadow:
      "0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)"
  },
  loginGrid: {
    flex: 1
  },
  loginCard: {
    width: "400px",
    justify: "center"
  },
  cssRoot: {
    //color: theme.palette.getContrastText(orange[500]),
    //backgroundColor: orange[500],
    "&:hover": {
      color: theme.palette.getContrastText(orange[500]),
      backgroundColor: orange[500]
    }
  }
});

function mapStateToProps(state) {
  const { loggingIn } = state.authState;

  return {
    loggingIn
  };
}

export default withRouter(connect()(withStyles(styles)(LogInContainer)));
