import React, { Component } from "react";
import {
  Grid,
  Image,
  Header,
  Segment,
  Card,
  Tab,
  Button,
  Dimmer,
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
    console.log(this.state.isShown);
  };

  handleHide = boolean => {
    this.setState({
      isShown: boolean,
    });
    console.log(this.state.isShown);
  };

  makeAList = input => {
    return input.split(",");
  };

  render() {
    const listOfFeature = this.makeAList(this.props.extra);
    console.log(listOfFeature);
    return (
      <Dimmer.Dimmable dimmed={this.state.isShown}>
        <Link to={this.props.link}>
          <Card
            onMouseEnter={() => this.handleEnter(true)}
            onMouseLeave={() => this.handleHide(false)}
          >
            <Image src={this.props.imageSource} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{this.props.title}</Card.Header>
            </Card.Content>
          </Card>
        </Link>
        <Dimmer active={this.state.isShown} onClickOutside={this.handleHide}>
          <Header as="h2" icon inverted>
            Features:
          </Header>
          <ul>
            {listOfFeature.map(content => (
              <li>{content}</li>
            ))}
          </ul>
        </Dimmer>
      </Dimmer.Dimmable>
    );
  }
}

export default ProjectCard;
