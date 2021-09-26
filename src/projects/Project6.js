import React, { Component } from "react";
import {
  Segment,
  Header,
  Image,
  Breadcrumb,
  Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../index.css"

class Project5 extends Component {
  render() {
    return (
      <div class="projectPage">
        <div className="projectNotes">
          <div className="projectNotes__left-item">
            <LeftNavigation />
          </div>
          <div className="projectNotes__right-item">
            <PortfolioNotes />
          </div>
        </div>
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
    <Breadcrumb.Section>Caloric Keep</Breadcrumb.Section>
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
      content="Caloric Keep"
      textAlign="center"
      as="h1"
    />
    <p className="subHeader">
      <span><a href="https://caloric-keep.herokuapp.com/" target="_blank">Live Demo with Heroku</a></span>  ||  <span><a href="https://github.com/rtanri/caloric-keep" target="_blank">Github Repo</a></span>
    </p>
    <Segment>
      <Header as="h3" id="overview">1. Simple Overview</Header>
      <Overview />
      <Screenshot source={"https://i.imgur.com/YDoLjLo.png"} />
      <Header as="h3" id="appFunctionality">2. Application Build</Header>
      <AppF12y />
      <Header as="h3" id="workflowProcess">3. Page Views</Header>
      <PageView />
    </Segment>

    <div class="projectFooter">
      <Button size="small" floated='left' as={Link} to={""} content="Back" />
      <p className="subHeader">
        <span><a href="https://caloric-keep.herokuapp.com/" target="_blank">Live Demo with Heroku</a></span>  ||  <span><a href="https://github.com/rtanri/caloric-keep" target="_blank">Github Repo</a></span>
      </p>
    </div>
  </div>
)

const Overview = () => (
  <div>
    <p>
      Caloric keep is a fullstack web app to track daily calories and
      available in 4 languages - English, Indonesia, Japanese, Chinese.
      <br />
    </p>
  </div>
)

const AppF12y = () => (
  <div>
    <p>
      Technology used to build this app:

      <ul>
        <li>Reuseable Component styling with Linaria (CSS-in-JS)</li>
        <li>React Context for 3 Providers (translations, authentication, card data)</li>
        <li>Firestore - database management</li>
        <li>Firebase - Email, password and Anonymous login</li>
      </ul>
    </p>
  </div>
)


const PageView = () => (
  <p>
    Main features build in this web app:
    <ul>
      <li>Login page with option for "Enter as guest"
        <Screenshot source={"https://i.imgur.com/D18b7nA.png"} />
      </li>
      <li>Create Reuseable components (Cards, Sections, Containers, Text, H1, H2) with Linaria.
        <MediumPicture source={"https://i.imgur.com/8UsZ0e5.png"} />
      </li>
      <li>Dashboard page in 3 other languages: Chinese, Japanese, Indonesia
        <Screenshot source={"https://i.imgur.com/foa6eAj.png"} />
        <Screenshot source={"https://i.imgur.com/1K6gcMs.png"} />
        <Screenshot source={"https://i.imgur.com/dMNCoS3.png"} />
      </li>
      <li>Each Languages is stored within json file and can be changed with TranslationProvider support
        <MediumPicture source={"https://i.imgur.com/B5EQYiu.png"} />
      </li>

      <li>Modal to enter daily meal intake
        <Screenshot source={"https://i.imgur.com/aSZV8qd.png"} />
      </li>
      <li>Modal to create new card
        <Screenshot source={"https://i.imgur.com/jDJyhSC.png"} />
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

const MediumPicture = ({ source }) => (
  <Image size="medium"
    src={source}
    centered
    bordered
    className="pictureMargin"
  />
)



export default Project5