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

class Project5 extends Component {
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
    <Breadcrumb.Section>Beautylash Eyelash Saloon</Breadcrumb.Section>
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
      content="Beautylash Eyelash Saloon"
      textAlign="center"
      as="h1"
    />
    <p className="subHeader">
      <span><a href="https://beautylash.herokuapp.com/beautylash" target="_blank">Live Demo with Heroku</a></span>  ||  <span><a href="https://github.com/rtanri/project-two" target="_blank">Github Repo</a></span>
    </p>
    <Segment>
      <Header as="h3" id="overview">1. Simple Overview</Header>
      <Overview />
      <Screenshot source={"/images/beautylash/homepage.jpg"} />
      <Header as="h3" id="appFunctionality">2. Application Build</Header>
      <AppF12y />
      <Header as="h3" id="workflowProcess">3. Page Views</Header>
      <PageView />
    </Segment>

    <div class="projectFooter">
      <Button size="small" floated='left' as={Link} to={""} content="Back" />
      <p className="subHeader">
        <span><a href="https://beautylash.herokuapp.com/beautylash" target="_blank">Live Demo with Heroku</a></span>  ||  <span><a href="https://github.com/rtanri/project-two" target="_blank">Github Repo</a></span>
      </p>
    </div>
  </div>
)

const Overview = () => (
  <div>
    <p>
      Beautylash is a fully developed web for eyelash extension booking services, customer dashboard, authenticated user login (session-cookie), and product category filtering.
      <br />
    </p>
  </div>
)

const AppF12y = () => (
  <div>
    <p>
      Extension and library installed

      <ul>
        <li>Frontend with Vanilla JS, and backend with Express EJS,</li>
        <li>FullCalendar API library,</li>
        <li>Mongoose - database management</li>
        <li>Lodash, dotenv, moment.js, flash message</li>
        <li>Password SHA protection - Crypto and uuid</li>
      </ul>
    </p>
  </div>
)


const PageView = () => (
  <p>
    Main features build in this web app:
    <ul>
      <li>Booking system is opened for authenticated user and limited available timeslots
        <Screenshot source={"/images/beautylash/booking-system.jpeg"} />
      </li>
      <li>Booking system is locked for guest (non-login user)
        <Screenshot source={"/images/beautylash/non-login-user.jpeg"} />
      </li>
      <li>Carousel - sorted with lastest uploaded image is shown in front
        <Screenshot source={"/images/beautylash/carousel.jpg"} />
      </li>
      <li>Filter based on category
        <Screenshot source={"/images/beautylash/customer-page.jpg"} />
      </li>
      <li>User Dashboard
        <Screenshot source={"/images/beautylash/new-dashboard.jpg"} />
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



export default Project5