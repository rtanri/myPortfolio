import React, {Component} from 'react'
import { 
    Segment,
    Header,
    Image,
    Rail,
} from 'semantic-ui-react'


class Game1 extends Component {

    render(){
        return(
            <div class="projectPage">
                <Segment.Group className="projectNotes">
                    <PortfolioNotes/>

                    <Rail position="left" className="navRail"> 
                        <LeftNavigation/>
                    </Rail>
                </Segment.Group>
            </div>
        )
    }
}


const PortfolioNotes = () => (
    <div class="lightPadding">
        <Header
            content = "Frogger Arcade Game"
            textAlign = "center"
            as = "h1"
        />
        <p className="subHeader"><span><a href="https://revin-frogger-game.netlify.app">Live Demo</a></span>  ||  <span><a href="https://github.com/rtanri/Frogger-Game" target="_blank">Github Repo</a></span></p>

        <Segment>
            <Header as="h3">1. Project Requirement</Header>
            <Header as="h4">1.1. Simple Overview</Header>
            <Overview />
            <Header as="h4">1.2. App Functionality</Header>
            <AppF12y />
            <Screenshot source="/images/dashboard/frogger.jpg" />
            <Header as="h4">1.3. Workflow Process</Header>
            <Workflow />
        </Segment>

        <Segment>
            <Header as="h3">2. Coding Phase</Header>
            <Header as="h4">2.1. API Function</Header>
            <LorumIpsum />
            <Header as="h4">2.2. Action & Reducers</Header>
            <LorumIpsum />
            <Screenshot />
            <Header as="h4">2.3. Middleware</Header>
            <LorumIpsum />
        </Segment>

        <Segment>
            <Header as="a" href="https://revin-frogger-game.netlify.app" target='_blank' className="childHeader">3. Live Demo <span>✨</span></Header>
        </Segment>

    </div>
)

const LeftNavigation = () => (
    <div class="stickyContainer">
        <Segment className="navigationBar">
            <Header as="h3">Code Notes</Header>
            <Header as="h4">1. Project Requirement</Header>
            <Header.Subheader>1.1. Simple Overview</Header.Subheader>
            <Header.Subheader>1.2. App Functionality </Header.Subheader>
            <Header.Subheader>1.3. Workflow process </Header.Subheader>

            <Header as="h4">2. Coding Phase</Header>
            <Header.Subheader>2.1. API Functions</Header.Subheader>
            <Header.Subheader>2.2. Actions & Reducers</Header.Subheader>
            <Header.Subheader>2.3. Middleware</Header.Subheader>
            <Header.Subheader>2.4. Initialize App Data</Header.Subheader>

            <Header as="h4"></Header>

        </Segment>
    </div>
)

const LorumIpsum = () => (
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nisl at leo 
    tempor maximus eget quis velit. Vivamus tincidunt imperdiet suscipit. Donec dapibus 
    quis magna ac porta. Etiam id tempus tellus, ornare consectetur tortor. Praesent porta 
    urna interdum arcu gravida, et luctus nulla maximus. 
    </p>
)


const Overview =() => (
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
            <li>Set the 'Enemies' props (image, speed, initial locations, movement direction),</li>
            <li>Set the logic on handling Collision with 'Player',</li>
            <li>Set the 'Player' props (initial location, image, handleInput from key pressed),</li>
            <li>Add the logic of 'Adding Score', 'Decreasing Life', and 'End-Game'</li>
        </ol>
    </div>

)


const Screenshot = ({source}) => (
    <Image size="large" src={source}/>
)



export default Game1