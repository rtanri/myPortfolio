import React, { Component } from "react";
import {
  Grid,
  Image,
  Header,
  Segment,
  Card,
  Tab,
  Button,
} from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

class ProjectCard extends React.Component {
  state = {
    isShown: false,
  };

  handleEnter = boolean => {
    this.setState({
      isShown: boolean,
    });
  };

  handleHide = boolean => {
    this.setState({
      isShown: boolean,
    });
  };

  makeAList = input => {
    return input.split(",");
  };

  render() {
    // const listOfFeature = this.makeAList(this.props.extra);
    const listOfFeature = this.props.extra;
    console.log(listOfFeature);
    return (
      <Link to={this.props.link}>
        <div className="project-card--wrapper">
          <Card
            onMouseEnter={() => this.handleEnter(true)}
            onMouseLeave={() => this.handleHide(false)}
            class="project-card--styling"
          >
            <Image src={this.props.imageSource} wrapped ui={false} class="project-card__image" />
            <Card.Content>
              <h3 className="project-card__card-content--title">{this.props.title}</h3>
              <p className="project-card__card-content--extra">{listOfFeature}</p>
            </Card.Content>
          </Card>
        </div>
      </Link>
    );
  }
}

export default ProjectCard;

