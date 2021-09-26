import React, { Component } from 'react'
import {
  Segment,
  Header,
  Image,
  Rail,
  Breadcrumb,
  Button,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Game1 extends Component {

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
    )
  }
}

const LeftNavigation = () => (
  <div class="stickyContainer">
    <Segment className="navigationBar">
      <Header as="h3">Code Notes</Header>
      <Header as="h4">1. Project Requirement</Header>
      <p><a href="#overview">1.1. Simple Overview</a></p>
      <p><a href="#appFunctionality">1.2. App Functionality</a></p>
      <p><a href="#workflowProcess">1.3. Workflow process  </a></p>
      <p><a href="#starterCode">1.4. Starter Code</a></p>

      <Header as="h4">2. Code Samples</Header>
      <p><a href="#firstSample">2.1. Enemy Object</a></p>
      <p><a href="#secondSample">2.2. Player Object</a></p>
      <p><a href="#thirdSample">2.3. Rendering All</a></p>
      <p><a href="#forthSample">2.4. Set initial position</a></p>
      <p><a href="#fifthSample">2.4. Keyboard Input Listener</a></p>

    </Segment>
  </div>
)


const PortfolioNotes = () => (
  <div class="lightPadding">
    <BreadcrumbPanel />
    <Header
      content="Frogger Arcade Game"
      textAlign="center"
      as="h1"
    />
    <p className="subHeader">
      <span><a href="https://revin-frogger-game.netlify.app">Live Demo</a></span>  ||  <span><a href="https://github.com/rtanri/Frogger-Game" target="_blank">Github Repo</a></span>
    </p>

    <Segment>
      <Header as="h2">1. Project Requirement</Header>
      <Header as="h3">1.1. Simple Overview</Header>
      <Overview />
      <Header as="h3">1.2. App Functionality</Header>
      <AppF12y />
      <Screenshot source="/images/dashboard/frogger.jpg" />
      <Header as="h3">1.3. Workflow Process</Header>
      <Workflow />
      <Header as="h3" id='starterCode'>1.4. Starter Code</Header>
      <StarterCode />
    </Segment>

    <Segment>
      <Header as="h2">2. Code Samples</Header>

      <Header as="h3" id="firstSample">2.1. Enemy Object Props</Header>
      <p>We create 1 enemy object and multiply it with <code>Object.prototype = new Character()</code>.
        In this setting, I include the collision effect with player by removing the heart
        - located at <code>/js/app.js</code>.</p>
      <Screenshot source="/images/frogger/enemy-object.jpg" />

      <Header as="h3" id="secondSample">2.2. Player Object Props</Header>
      <p>Player object consist of 2 character options that can be changed, scoring function, movement & initial position.
        Movement function consist of addEventListener from keyboard input that will give directed movement.
        - located at <code>/js/app.js</code>.</p>
      <Screenshot source="/images/frogger/player-object.jpg" />

      <Header as="h3" id="thirdSample">2.3. Rendering Enemy and Player</Header>
      <p>This step is for rendering player, and enemies within 3-rows and random speed across Y-axis.</p>
      <Screenshot source="/images/frogger/render-setting.jpg" />

      <Header as="h3" id="forthSample">2.4. Locating initial position</Header>
      <p>We create an array of multiple enemies with different value of initial position and speed, meanwhile fixed position for player.</p>
      <Screenshot source="/images/frogger/initiate-location.jpg" />

      <Header as="h3" id="fifthSample">2.5. Handling Keyboard Input</Header>
      <p>Example of addEventListener on capturing the keyboard input to give direction on player character.</p>
      <Screenshot source="/images/frogger/handle-input.jpg" />


    </Segment>
    <div class="projectFooter">
      <Button size="small" floated='left' as={Link} to={""} content="Back" />
      <p className="subHeader">
        <span><a href="https://revin-frogger-game.netlify.app" target='_blank'>Live Demo</a></span>  ||  <span><a href="https://github.com/rtanri/Frogger-Game" target="_blank">Github Repo</a></span>
      </p>
    </div>

  </div>
)


const BreadcrumbPanel = () => (

  <Breadcrumb>
    <Breadcrumb.Divider icon="left arrow" />
    <Breadcrumb.Section
      as={Link}
      to={"/"}
    >Home</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section>Frogger Game</Breadcrumb.Section>
  </Breadcrumb>
)


const Overview = () => (
  <div>
    <p>
      You will be provided visual assets and a game loop engine;
      using these tools you must add a number of entities to the
      game including the player characters and enemies to recreate the
      classic arcade game Frogger. This game is a good practice for Object Oriented Programming.
    </p>
  </div>
)

const AppF12y = () => (
  <div>
    <p>
      In this game you have a Player and Enemies (bugs).
      The goal of the player is to reach the water, without
      colliding into any one of the enemies.
    </p>
    <ul>
      <li>The player can move left, right, up and down; press 'space' to change character</li>
      <li>The enemies move at varying speeds on the paved block portion of the game board</li>
      <li>Once a the player collides with an enemy, the game is reset and the player moves back to the starting square</li>
      <li>Once the player reaches the water-on-top-list, score will be added +20pts.</li>
      <li>Game finishes when player got hit by the bugs 3 times.</li>
    </ul>
  </div>
)

const Workflow = () => (
  <div>
    <p>
      Create 'Player' and 'Enemies' classes using Object Oriented Programming.
    </p>
    <ol>
      <li>Add the 'Enemy' props (image, speed, initial locations, reset, movement direction),</li>
      <li>Set the logic on handling Collision in Enemy props,</li>
      <li>Set the 'Player' props (initial location, image, reset, addEventListener, Adding Score),</li>
      <li>Provide initial position and render all objects,</li>
      <li>Add the logic of 'Remove Heart', and 'End-Game'</li>
    </ol>
  </div>

)

const StarterCode = () => (
  <div>
    <p>
      Starter code with <code>/js/engine.js</code> to provide game loop functionality including render,
      and <code>/js/resource.js</code> to ease the process of loading images & caching files - <a href="https://github.com/udacity/frontend-nanodegree-arcade-game" target='_blank'>Udacity GitHub link.</a>
    </p>
  </div>
)

const Screenshot = ({ source }) => (
  <Image
    size="big"
    centered
    src={source} />
)



export default Game1