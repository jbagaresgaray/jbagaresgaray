import React from "react";
import PropTypes from "prop-types";

import bootstrap from "../../assets/img/bootstrap.png";
import angular from "../../assets/img/angular.png";
import react from "../../assets/img/react1.png";
import vue from "../../assets/img/vue.png";
import javascript from "../../assets/img/javascript.png";
import node from "../../assets/img/node.png";
import mysql from "../../assets/img/mysql1.png";
import ionic from "../../assets/img/ionic.png";
import capacitor from "../../assets/img/capacitor.png";
import electron from "../../assets/img/electron1.png";

function LogoCircle(props) {
  const renderImage = () => {
    switch (props.stack) {
      case "bootstrap":
        return (
          <img
            src={bootstrap}
            alt={props.stack}
            tooltip={props.stack}
            height="17px"
          />
        );
      case "angular":
        return (
          <img
            src={angular}
            alt={props.stack}
            tooltip={props.stack}
            height="17px"
          />
        );
      case "react":
        return (
          <img
            src={react}
            alt={props.stack}
            tooltip={props.stack}
            height="17px"
          />
        );
      case "vue":
        return (
          <img
            src={vue}
            alt={props.stack}
            tooltip={props.stack}
            height="17px"
          />
        );
      case "javascript":
        return (
          <img
            src={javascript}
            alt={props.stack}
            tooltip={props.stack}
            height="17px"
          />
        );
      case "node":
        return (
          <img
            src={node}
            alt={props.stack}
            tooltip={props.stack}
            height="17px"
          />
        );
      case "mysql":
        return (
          <img
            src={mysql}
            alt={props.stack}
            tooltip={props.stack}
            height="17px"
          />
        );
      case "ionic":
        return (
          <img
            src={ionic}
            alt={props.stack}
            tooltip={props.stack}
            height="17px"
          />
        );
      case "capacitor":
        return (
          <img
            src={capacitor}
            alt={props.stack}
            tooltip={props.stack}
            height="17px"
          />
        );
      case "electron":
        return (
          <img
            src={electron}
            alt={props.stack}
            tooltip={props.stack}
            height="17px"
          />
        );
      default:
        return (
          <img
            src={bootstrap}
            alt={props.stack}
            tooltip={props.stack}
            height="17px"
          />
        );
    }
  };
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a class="logo-circle d-flex align-items-center justify-content-center me-2 hover-shadow">
      {renderImage()}
    </a>
  );
}

LogoCircle.propTypes = {
  stack: PropTypes.oneOf([
    "bootstrap",
    "angular",
    "react",
    "vue",
    "javascript",
    "node",
    "mysql",
    "ionic",
    "capacitor",
    "electron",
  ]),
};

LogoCircle.defaultProps = {
  stack: "bootstrap",
};

export default LogoCircle;
