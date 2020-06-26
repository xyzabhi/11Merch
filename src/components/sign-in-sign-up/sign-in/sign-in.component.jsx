import React, { Component } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButton from "../../custom-button/custom-button.component";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>SIGN-IN</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />

          <FormInput
            name="password"
            label="Password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />

          <CustomButton type="submit">Sign-In</CustomButton>
        </form>
        <Link className="link" to="/signup">
          I don't have account
        </Link>
      </div>
    );
  }
}
