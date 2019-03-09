import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/">
                Ema
              </Link>
              <div className="navbar-item">|</div>
              <Link className="navbar-item" to="/un-endroit-ou-aller">
                Un Endroit où aller
              </Link>
              <div className="navbar-item">|</div>
              <Link className="navbar-item" to="/comme-si-de-rien">
                Comme si de rien
              </Link>
              <div className="navbar-item">|</div>
              <Link className="navbar-item" to="/elles-travaillent-pour-ema">
                Elles travaillent pour Ema
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
