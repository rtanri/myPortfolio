import React, { Component } from "react";
import {
  Segment,
  Header,
  Image,
  Rail,
  Breadcrumb,
  Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../index.css"

class Game3 extends Component {
  render() {
    return (
      <div class="projectPage">
        <Segment.Group className="projectNotes">
          <PortfolioNotes />
          <Rail position="left" className="navRail">
            <LeftNavigation />
          </Rail>
        </Segment.Group>
      </div>
    );
  }
}
const BreadcrumbPanel = () => (
  <Breadcrumb>
    <Breadcrumb.Divider icon="left arrow" />
    <Breadcrumb.Section
      as={Link}
      to={"/"}
    >Home</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section>Job Hunter</Breadcrumb.Section>
  </Breadcrumb>
)


const LeftNavigation = () => (
  <div class="stickyContainer">
    <Segment className="navigationBar">
      <Header as="h3">Code Notes</Header>
      <p><a href="#overview">1. Simple Overview</a></p>
      <p><a href="#appFunctionality">2. Application Build</a></p>
      <p><a href="#workflowProcess">3. Page views</a></p>
    </Segment>
  </div>
)

const PortfolioNotes = () => (
  <div class="lightPadding">
    <BreadcrumbPanel />
    <Header
      content="Job Hunter"
      textAlign="center"
      as="h1"
    />
    <p className="subHeader">
      <span><a href="https://dreamy-edison-d56176.netlify.app/" target="_blank">Live Demo with Netlify</a></span>  ||  <span><a href="https://github.com/rtanri/project-one" target="_blank">Github Repo</a></span>
    </p>
    <Segment>
      <Header as="h3" id="overview">1. Simple Overview</Header>
      <Overview />
      <Screenshot source={"/images/job-hunter/opening.jpg"} />
      <Header as="h3" id="appFunctionality">2. Application Build</Header>
      <AppF12y />
      <Header as="h3" id="workflowProcess">3. Page Views</Header>
      <PageView />
    </Segment>

    <div class="projectFooter">
      <Button size="small" floated='left' as={Link} to={""} content="Back" />
      <p className="subHeader">
        <span><a href="https://dreamy-edison-d56176.netlify.app/" target="_blank">Live Demo with Netlify</a></span>  ||  <span><a href="https://github.com/rtanri/project-one" target="_blank">Github Repo</a></span>
      </p>
    </div>
  </div>
)

const Overview = () => (
  <div>
    <p>
      Inspired by "Plant vs Zombie", this game help all job applicants to get their dream job by doing some job-interviews from SMEs or Global companies.
    </p>
    <p>
      Game Objective: Player build company to send job interviews to Job Applicants. Everyone have to get a job!
    </p>
  </div >
)

const AppF12y = () => (
  <div>
    <p>
      Build with one fundamental 'GameObject' class that extended to other child objects like Tower, Builds, Enemies. GameObject set some get dimension() to help in calculating collision from multiple sides.
      <Screenshot source={"/images/job-hunter/getter.jpg"} />

    </p>
    <p>
      <strong>How to play:</strong>
      <ul>
        <li>Build companies (SMEs is 50 Gold, and Global is 200 Gold), then press "Done"</li>
        <li>Pressed "Wave Start" button to welcome job applicants</li>
        <li>Companies will automaticly send job interviews</li>
        <li>Demolish a tower will get 50% of cost, and build a new tower</li>
        <li>Beware: Boss Fight at level-3</li>
      </ul>
    </p>
  </div>
)


const PageView = () => (
  <p>
    Few game features that you will like:
    <ul>
      <li>Build tower by clicking button below and select the ground
        <Screenshot source={"/images/job-hunter/build-by-clicking.jpg"} />
      </li>
      <li>Each tower will auto-send bullet (job interviews) to people
        <Screenshot source={"/images/job-hunter/enemy-spawn-randomly.jpg"} />
      </li>
      <li>Demolish the tower and upgrade to stronger tower
        <Screenshot source={"/images/job-hunter/demolish.jpg"} />
      </li>

    </ul>

  </p>

)



const Screenshot = ({ source }) => (
  <Image size="big"
    src={source}
    centered
    bordered
    className="pictureMargin"
  />
)



export default Game3