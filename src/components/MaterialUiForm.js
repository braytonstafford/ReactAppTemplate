import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {
  Checkbox,
  RadioGroup,
  Select,
  TextField,
  Switch
} from "redux-form-material-ui";

import ActionLock from "@material-ui/icons/Lock";
import CommunicationMailOutline from "@material-ui/icons/MailOutline";
import SocialPerson from "@material-ui/icons/Person";

const styles = theme => ({
  formContainer: {},
  formCardLeft: {},
  formCardRight: {}
});

const newAccountValidation = values => {
  const errors = {};
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password mismatched";
  }

  return errors;
};

class NewAccountForm extends Component {
  static propTypes = {
    account: PropTypes.object.isRequired,
    createAccount: PropTypes.func.isRequired,
    active: PropTypes.string,
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    dirty: PropTypes.bool.isRequired,
    resetForm: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired
  };

  state = {
    showPassword: "password"
  };

  constructor(props) {
    super(props);
  }

  onSubmit(formData) {
    this.props.createAccount(formData);
  }

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const {
      classes,
      handleSubmit,
      resetForm,
      submitting,
      invalid,
      pristine,
      error
    } = this.props;

    return (
      <form
        autoComplete="off"
        className={classes.formContainer}
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <Grid container direction="row">
          <Grid item xs={12} className={classes.formCardLeft}>
            <div>
              <Paper style={{ padding: "0 1rem 3rem 2rem" }} zDepth={1} rounded>
                <Grid container direction="row" spacing={8}>
                  <Grid item xs={1}>
                    <SocialPerson
                      color={"hsla(0, 0%, 46%, 1)"}
                      style={{ marginTop: "2.65rem" }}
                    />
                  </Grid>
                  <Grid item xs={66}>
                    <div>
                      <Field
                        name="firstName"
                        component={TextField}
                        errorText={error}
                        placeholder="First Name"
                        label="First Name"
                        autoComplete="off"
                        style={{ width: "90%" }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={66}>
                    <div>
                      <Field
                        name="lastName"
                        component={TextField}
                        errorText={error}
                        placeholder="Last Name"
                        label="Last Name"
                        style={{ width: "90%" }}
                      />
                    </div>
                  </Grid>
                </Grid>
                <Grid container direction="row">
                  <Grid item xs={1}>
                    <CommunicationMailOutline
                      color={"hsla(0, 0%, 46%, 1)"}
                      style={{ marginTop: "2.65rem" }}
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <div>
                      <Field
                        name="email"
                        component={TextField}
                        errorText={error}
                        placeholder="hans.gruber@shiphawk.com"
                        label="Email"
                        style={{ width: "95%" }}
                      />
                    </div>
                  </Grid>
                </Grid>
                <Grid container direction="row">
                  <Grid item xs={1}>
                    <div>
                      <ActionLock
                        color={"hsla(0, 0%, 46%, 1)"}
                        style={{ marginTop: "2.65rem" }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={11}>
                    <div>
                      <Field
                        name="password"
                        type="password"
                        component={TextField}
                        errorText={error}
                        placeholder="Password"
                        label="Password"
                        style={{ width: "95%" }}
                        type={this.state.showPassword ? "text" : "password"}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="Toggle password visibility"
                                onClick={this.handleClickShowPassword}
                                onMouseDown={this.handleMouseDownPassword}
                              >
                                {this.state.showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                      />
                    </div>
                  </Grid>
                </Grid>
                <Grid container direction="row">
                  <Grid item xs={1}>
                    <div>
                      <ActionLock
                        color={"hsla(0, 0%, 46%, 0)"}
                        style={{ marginTop: "2.65rem" }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={11}>
                    <div>
                      <Field
                        name="confirmPassword"
                        type="password"
                        component={TextField}
                        errorText={error}
                        placeholder="Password Confirmation"
                        label="Password Confirmation"
                        style={{ width: "95%", marginBottom: "2.5rem" }}
                        type={this.state.showPassword ? "text" : "password"}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="Toggle password visibility"
                                onClick={this.handleClickShowPassword}
                                onMouseDown={this.handleMouseDownPassword}
                              >
                                {this.state.showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                      />
                    </div>
                  </Grid>
                </Grid>
                <Grid container direction="row">
                  <Grid item xs={12}>
                    <div>
                      <Field component={RadioGroup} name="featureSet">
                        <FormControlLabel
                          value="basic"
                          control={<Radio />}
                          label="Pro"
                        />
                        <FormControlLabel
                          value="enterprise"
                          control={<Radio />}
                          label="Enterprise"
                        />
                      </Field>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div>
                      <Field
                        name="marketoId"
                        component={TextField}
                        errorText={error}
                        placeholder="Marketo Lead ID"
                        label="Marketo Lead ID"
                        style={{ width: "97.5%" }}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>

          <Grid item xs={12} className={classes.formCardRight}>
            <div>
              <Paper
                style={{ padding: "0 1.5rem  3rem 2rem" }}
                zDepth={1}
                rounded
              >
                <Grid item xs={12}>
                  <div>
                    <Field
                      name="companyName"
                      component={TextField}
                      errorText={error}
                      placeholder="Company Name"
                      label="Company Name"
                      style={{ width: "97.5%" }}
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <Field
                      name="phoneNumber"
                      component={TextField}
                      errorText={error}
                      placeholder="3105501940"
                      label="Phone Number"
                      style={{ width: "97.5%" }}
                    />
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <div>
                    <Field
                      name="website"
                      component={TextField}
                      errorText={error}
                      placeholder="https://wwww.shiphawk.com"
                      label="Website"
                      style={{ width: "97.5%" }}
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <Field
                      name="address1"
                      component={TextField}
                      errorText={error}
                      placeholder="Address 1"
                      label="Address 1"
                      style={{ width: "97.5%" }}
                    />
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <div>
                    <Field
                      name="address2"
                      component={TextField}
                      errorText={error}
                      placeholder="Address 2"
                      label="Address 2"
                      style={{ width: "97.5%" }}
                    />
                  </div>
                </Grid>
                <Grid container direction="row">
                  <Grid item xs={12}>
                    <div>
                      <Field
                        name="city"
                        component={TextField}
                        errorText={error}
                        placeholder="City"
                        label="City"
                        primary
                        style={{ width: "97.5%" }}
                      />
                    </div>
                  </Grid>

                  <Grid item xs={12}>
                    <div>
                      <Field
                        name="state"
                        component={TextField}
                        errorText={error}
                        placeholder="State"
                        label="State"
                        style={{ width: "97.5%" }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div>
                      <Field
                        name="zip"
                        component={TextField}
                        errorText={error}
                        placeholder="Zip"
                        label="Zip"
                        style={{ width: "92.5%" }}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>
        </Grid>

        <div>
          <Button
            variant="outlined"
            style={{ margin: 8 }}
            color={"secondary"}
            onTouchTap={resetForm}
          >
            Reset
          </Button>
          <Button style={{ margin: 8 }} type="submit">
            Create Account
          </Button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "new-account",
  validate: newAccountValidation
})(withStyles(styles)(NewAccountForm));
