import React, {Component} from 'react'
import { 
    Segment,
    Header,
    Image,
    Rail,
} from 'semantic-ui-react'


class Game2 extends Component {

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
            content = "Would You Rather Apps"
            textAlign = "center"
            as = "h1"
        />
        <p className="subHeader"><span><a href='https://revin-flipcard-game.netlify.app'>Live Demo</a></span>  ||  <span><a href="https://github.com/rtanri/Flip-card-game" target="_blank">Github Repo</a></span></p>

        <Segment>
            <Header as="h3">1. Project Requirement</Header>
            <Header as="h4">1.1. Simple Overview</Header>
            <Overview />
            <Header as="h4">1.2. App Functionality</Header>
            <AppF12y />
            <Screenshot source="/images/dashboard/flipcard.jpg" />
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
        <Header as="a" href='https://revin-flipcard-game.netlify.app' target='_blank' className="childHeader">3. Live Demo <span>✨</span></Header>
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
         The game board consists of sixteen "cards" arranged in a grid. The deck is made up of 
         eight different pairs of cards, each with different symbols on one side. The cards are 
         arranged randomly on the grid with the symbol face down. The gameplay rules are 
         very simple: flip over two hidden cards at a time to locate the ones that match!
         Each turn:
         </p>
 
         <ul> 
             <li>The player flips one card over to reveal its underlying symbol.</li>
             <li>The player then turns over a second card, trying to find the corresponding card with the same symbol.</li>
             <li>If the cards match, both cards stay flipped over. </li>
             <li>If the cards do not match, both cards are flipped face down. </li>
             <li>The game ends once all cards have been correctly matched. </li>
         </ul>
     </div>
 )

const AppF12y = () => (
    <div>
        <p>
        The real-life game, players flip over cards to locate the pairs 
        that match The goal is to recreate this effect in your project. 
        There are a couple of interactions that you'll need to handle:
        </p>
        <ul>
            <li>Flip card: turned to blue color</li>
            <li>Cards match: turned to green color, and stay opened</li>
            <li>Cards match: turned to red color, and close back </li>
            <li>Game finishes: Score board appear, then reset the cards, score, hearts & timer.</li>
        </ul>
    </div>
)

const Workflow = () => (
    <div>
    <p>
        For this project, I choose to work on the logic first than styling. I took some time to solve the error that
        did not insert "class" to card after you clicked few times, that because I accidentally insert class to "Icons"
        in the cards instead of the "Card".
    </p>
        <ol>
            <li>Start building the grid of cards,</li>
            <li>Add the functionality to handle clicks</li>
            <li>Work on matched and unmatched logics</li>
            <li>Create winning & losing conditions for the game</li>
        </ol>
    </div>

)


const Screenshot = ({source}) => (
    <Image size="large" src={source}/>
)



export default Game2