import React, { Component } from "react";
import {
  Segment,
  Header,
  Image,
  Rail,
  Breadcrumb,
  Button,
  Icon,
  Table,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../index.css"

class Project4 extends Component {
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
    <Breadcrumb.Section>Freshstart</Breadcrumb.Section>
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
      content="Freshstart - Delivery for brokenhearted"
      textAlign="center"
      as="h1"
    />
    <p className="subHeader">
      <span><a href="https://freshstart-deployment.herokuapp.com/" target="_blank">Live Demo with Heroku</a></span>  ||  <span><a href="https://github.com/rtanri/fe-project3" target="_blank">Github Repo</a></span>
    </p>
    <Segment>
      <Header as="h3" id="overview">1. Simple Overview</Header>
      <Overview />
      <Header as="h3" id="appFunctionality">2. Application Build</Header>
      <AppF12y />
      <Header as="h3" id="workflowProcess">3. Page Views</Header>
      <PageView />
    </Segment>

    <div class="projectFooter">
      <Button size="small" floated='left' as={Link} to={""} content="Back" />
      <p className="subHeader">
        <span><a href="https://freshstart-deployment.herokuapp.com/" target="_blank">Live Demo with Heroku</a></span>  ||  <span><a href="https://github.com/rtanri/fe-project3" target="_blank">Github Repo</a></span>
      </p>
    </div>
  </div>
)

const Overview = () => (
  <div>
    <p>
      Freshstart app is built to support brokenhearted people in returning their sentimental items without meeting their ex-lovers face-to-face.
      <br />
      <br />
      This platform is well equiped with features like forum and delivery services to all users.
    </p>
  </div>
)

const AppF12y = () => (
  <div>
    <p>
      Frontend was created with:

      <ul>
        <li>100% React-hooks (useState, useEffect, useParams, etc),</li>
        <li>Consist of 9 pages and 2 additional compoentns (navbar and footer),</li>
        <li>Using material UI, google place API, react-cookie, React Toastify, and React Credit Cards; </li>
      </ul>
    </p>
    <p>
      And our backend was supported with:

      <ul>
        <li>Seamless backend file storage with Cloudinary,</li>
        <li>Consist of 6 collections in MongoDB,</li>
        <li>Build with 21 routes controllers,</li>
        <li>Login user with JWT token</li>
      </ul>
    </p>
  </div>
)


const PageView = () => (
  <p>
    Few Freshstart applications screenshots:
    <ul>
      <li>Guest Landing Page
        <Screenshot source={'https://i.imgur.com/Kb9KBnQ.png'} />
      </li>
      <li>Sign-up and Login
        <Screenshot source={'https://i.imgur.com/zePG7Ze.png'} />
      </li>
      <li>Delivery/Collection Services
        <Screenshot source={'https://i.imgur.com/jiF6HDC.png'} />
      </li>
      <li>Add Items to be delivered
        <Screenshot source={'https://i.imgur.com/U98zMGR.png'} />
      </li>
      <li>Dashboard - to show all deliveries with various status
        <Screenshot source={'https://i.imgur.com/ChRGp1T.png'} />
      </li>
      <li>Forum
        <Screenshot source={'https://i.imgur.com/OZMQT6s.png'} />
      </li>
      <li>Credit Card Payment
        <Screenshot source={'https://i.imgur.com/h2VQggJ.png'} />
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



export default Project4