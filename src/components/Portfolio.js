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
import ProjectCard from "./ProjectCard";
import { NavLink, Link } from "react-router-dom";

class Portfolio extends Component {
  render() {
    const panes = [
      { menuItem: "Web Apps", render: () => <Tab.Pane>{<WebApp />}</Tab.Pane> },
      {
        menuItem: "Mobile Apps",
        render: () => <Tab.Pane>{<MobileApp />}</Tab.Pane>,
      },
      { menuItem: "Web Games", render: () => <Tab.Pane>{<Game />}</Tab.Pane> },
    ];

    return (
      <div className="dashboard">
        <Segment.Group className="contentPage">
          <BasicProfile />
          <BodyHeader />
          <Tab panes={panes} menu={{ pointing: true }} />
          <InterestHeader />
          <OtherProjects />
          <ExperimentHeader />
          <ExperimentContent />
        </Segment.Group>
      </div>
    );
  }
}

const MainHeader = () => (
  <Header as="h1">
    Revin Tanri
    <br />
    <Header.Subheader className="smallDetail">
      tanrirevin@gmail.com | +65 92779530
    </Header.Subheader>
  </Header>
);

const BodyHeader = () => (
  <Header as="h2" textAlign="center" className="headerMargin">
    <Header.Content>Programming Projects I Created:</Header.Content>
  </Header>
);

const InterestHeader = () => (
  <Header as="h2" textAlign="left" className="headerMargin">
    <Header.Content>First Sparks</Header.Content>
    <Header.Subheader>
      In past, these low-code platform & community sparked my interest to HTML,
      CSS and JS
    </Header.Subheader>
  </Header>
);

const ExperimentHeader = () => (
  <Header as="h2" textAlign="left" className="headerMargin">
    <Header.Content>Experiment</Header.Content>
    <Header.Subheader>
      Quick Prototype I have done in Javascript:
    </Header.Subheader>
  </Header>
);

class BasicProfile extends Component {
  render() {
    return (
      <div>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column size="tiny" width={5}>
              <Image src="images/dashboard/profile.jpg" size="medium" />
            </Grid.Column>

            <Grid.Column width={9}>
              <MainHeader />
              <p className="profileSummary">
                Junior Front-End Engineer, and currently intern in Endowus Singapore. I enjoyed to code with MERN framework and explore new FE tools
              </p>
              <Button
                className="contactButton"
                content="MY RESUME"
                icon="rocket"
                fontWeight='700'
                as="a"
                download
                href="resume/Revin-FrontEnd-Resume.pdf"
              />
            </Grid.Column>
            <Grid.Column width={2}>
              <Image
                src="images/dashboard/github-image.png"
                size="mini"
                as="a"
                href="https://github.com/rtanri"
                target="_blank"
              />
              <br />
              <br />
              <Image
                src="images/dashboard/linkedin.png"
                size="mini"
                as="a"
                href="https://www.linkedin.com/in/revintanri/"
                target="_blank"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div >
    );
  }
}

class WebApp extends Component {
  render() {
    return (
      <Segment className="minHeight">
        <div className="flexbox-row-projects">
          {
            <ProjectCard
              link="/freshstart"
              imageSource="/images/dashboard/freshstart.jpg"
              title="Freshstart"
              extra="React hook, Google Place API, MongoDB, EJS (fullstack)"
            />
          }

          {
            <ProjectCard
              link="/would-you-rather"
              imageSource="/images/dashboard/yourather.jpg"
              title="Would You Rather"
              extra="React class Based, React-Redux, Semantic UI"
            />
          }

          {
            <ProjectCard
              link="/e-library"
              imageSource="/images/dashboard/elibrary.jpg"
              title="React Library"
              extra="React class based, Categorization, Search Bar"
            />
          }

          {
            <ProjectCard
              link="/beautylash"
              imageSource="/images/dashboard/beautylash.jpg"
              title="Beautylash Saloon"
              extra="Booking System, Vanila JS, Node EJS, MongoDB (fullstack)"
            />
          }

          {
            <ProjectCard
              link="/resto-reviewer"
              imageSource="/images/dashboard/resto-reviewer.jpg"
              title="Cafe Reviewer"
              extra="Google Map Api, filtering lists, responsive web"
            />
          }
        </div>
      </Segment>
    );
  }
}

const MobileApp = () => (
  <Segment className="minHeight">
    <div className="flexbox-row-projects">
      {
        <ProjectCard
          link="/reactnative-flash-card"
          imageSource="/images/dashboard/flashcard.jpg"
          title="Flash Card Mobile App"
          extra="ReactNative, Animation, Redux, JSON Initial Data, Add Question Card, Quiz"
        />
      }

      {
        <ProjectCard
          link="/reactnative-fitness-app"
          imageSource="/images/dashboard/fitnessapp.jpg"
          title="Fitness Mobile App"
          extra="Redux, ReactNative, Calendar, Tab & Stack Nav, Ask for Location and Notification"
        />
      }
    </div>
  </Segment>
);

const Game = () => (
  <Segment className="minHeight">
    <div className="flexbox-row-projects">
      {
        <ProjectCard
          link="/job-hunter"
          imageSource="/images/dashboard/job-hunter.jpg"
          title="Job Hunter"
          extra="like Plant Vs Zombie - Build with OOP, DOM, eventlistener"
        />
      }

      {
        <ProjectCard
          link="/frogger"
          imageSource="/images/dashboard/frogger.jpg"
          title="Frogger"
          extra="Object.Prototype, DOM, EventListener, Canvas Basic"
        />
      }

      {
        <ProjectCard
          link="/flip-card"
          imageSource="/images/dashboard/flipcard.jpg"
          title="Flip Card"
          extra="Web Responsive, Arrays, DOM, EventListener, Fetch API, Timer function"
        />
      }
    </div>
  </Segment>
);

const OtherProjects = () => (
  <div className="deepPadding">
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column width={4}>
          <Image src="/images/dashboard/maeclub.png" size="medium" />
        </Grid.Column>
        <Grid.Column width={10}>
          <div className="flexboxCenter">

            <h2 className="experiment-item-header"><a href="https://www.maeclub.com " target="_blank">
              <span>⚙️</span> NTU Mechanical Engineering Web Admin
            </a>
            </h2>
            <p className="first-spark-item__content">
              Set new hosting name, initiate JOOMLA, plan the layout and template;
              and maintain the content
            </p>
          </div>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>

      <Grid.Row columns={2}>
        <Grid.Column width={4}>
          <Image src="/images/dashboard/shopee.png" size="medium" />
        </Grid.Column>

        <Grid.Column width={10}>
          <div className="flexboxCenter">
            <h2 className="experiment-item-header"><a href="http://unbouncepages.com/onlinemp/" target="_blank">
              <span>🛒</span> Shopee Market Research
            </a>
            </h2>
            <p className="first-spark-item__content">
              One page market research & personal recommendation on Shopee market
              expansion to Indonesia in 2015
            </p>
          </div>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>

    </Grid>
  </div>
);

const ExperimentContent = () => (
  <div className="flexbox-row-experiment">

    <div className="experiment-item-wrapper">
      <h2 className="experiment-item-header"><a href="https://github.com/rtanri/caloric-keep" target="_blank">
        🦺 Caloric Keep App
      </a>
      </h2>
      <p className="listItemStyling">
        Combining react, ramda, redux sagas, linaria, react intl in creating monitoring tool for daily calories intake
      </p>
    </div>
    <div className="experiment-item-wrapper">
      <h2 className="experiment-item-header"><a href="https://jasmine-testing.netlify.app" target="_blank">
        🕵️‍♀️ Jasmine Testing
      </a>
      </h2>
      <p className="listItemStyling">
        Jasmine to checking the API status and proptype of objects
      </p>
    </div>
  </div >
);


export default Portfolio;
