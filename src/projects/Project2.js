import React, {Component} from 'react'
import { 
    Segment,
    Header,
    Image,
    Rail,
} from 'semantic-ui-react'


class Project2 extends Component {

    render(){
        return(
            <div class="projectPage">
                <Segment.Group className="projectNotes">
                    <PortfolioNotes/>

                    {/* sticky navigation on the left */}
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
            content = "E-Library (DIY Kindle)"
            textAlign = "center"
            as = "h1"
        />
        <p className="subHeader"><span><a href="https://diy-kindle.netlify.app">Live Demo</a></span>  ||  <span><a href="https://github.com/rtanri/MyRead" target="_blank">Github Repo</a></span></p>


        <Segment>
            <Header as="h3">1. Project Requirement</Header>
            <Header as="h4">1.1. Simple Overview</Header>
            <Overview />
            <Header as="h4">1.2. App Functionality</Header>
            <AppF12y />
            <Screenshot source="/images/dashboard/elibrary.jpg" />
            <Header as="h4">1.3. Workflow Process</Header>
            <Workflow />
        </Segment>

        <Segment>
            <Header as="h3">2. App Design</Header>
            <Header as="h4">2.1. View</Header>
            <LorumIpsum />
            <Header as="h4">2.2. Component Hierarcy</Header>
            <LorumIpsum />
            <Screenshot />
            <Header as="h4">2.3. Store Data</Header>
            <LorumIpsum />
        </Segment>

        <Segment>
            <Header as="h3">3. Coding Phase</Header>
            <Header as="h4">3.1. API Function</Header>
            <LorumIpsum />
            <Header as="h4">3.2. Action & Reducers</Header>
            <LorumIpsum />
            <Screenshot />
            <Header as="h4">3.3. Middleware</Header>
            <LorumIpsum />
        </Segment>

        <Segment>
            <Header as="a" href="https://wouldyourathertoeat.netlify.app" target='_blank' className="childHeader">4. Live Demo <span>✨</span></Header>
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

            <Header as="h4">2. App Design</Header>
            <Header.Subheader>2.1. View</Header.Subheader>
            <Header.Subheader>2.2. Component Hierarcy</Header.Subheader>
            <Header.Subheader>2.2. Store Data</Header.Subheader>

            <Header as="h4">3. Coding Phase</Header>
            <Header.Subheader>3.1. API Functions</Header.Subheader>
            <Header.Subheader>3.2. Actions & Reducers</Header.Subheader>
            <Header.Subheader>3.3. Middleware</Header.Subheader>
            <Header.Subheader>3.4. Initialize App Data</Header.Subheader>
            <Header.Subheader>3.4. Login Page</Header.Subheader>

            <Header as="h4">4. Finished: Live Demo</Header>
        </Segment>
    </div>
)


const LorumIpsum = () => (
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nisl at leo 
    tempor maximus eget quis velit. Vivamus tincidunt imperdiet suscipit. Donec dapibus 
    quis magna ac porta. Etiam id tempus tellus, ornare consectetur tortor. Praesent porta 
    urna interdum arcu gravida, et luctus nulla maximus. Praesent ut viverra sem, eget ultricies nisi. 
    Fusce a sagittis tortor, ac maximus nibh. Phasellus id justo eu nulla volutpat tempus. 
    Nullam nunc ante, iaculis a cursus eu, placerat id risus. Donec tincidunt scelerisque augue at iaculis. 
    Sed vel leo eu tellus iaculis vehicula.
    </p>
)



const Overview =() => (
    <div>
    <p>
    A bookshelf app that allows you to select and categorize books you 
    have read, are currently reading, or want to read. The project 
    emphasizes using React to build the application and provides an API 
    server and client library that you will use to persist information as 
    you interact with the application. 
    This is the <a href="https://github.com/udacity/reactnd-project-myreads-starter" target="_blank">starting code</a> repo.
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


export default Project2