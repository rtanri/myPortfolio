import React, {Component} from 'react'
import { 
    Segment,
    Header,
    Image,
    Rail,
    Breadcrumb,
    Button,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


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
            <p><a href="#firstSample">2.1. Handling click on cards</a></p>
            <p><a href="#secondSample">2.2. Arranging Cards Arrays </a></p>
            <p><a href="#thirdSample">2.3. Managing Stars </a></p>
            <p><a href="#forthSample">2.4. Setting Timer </a></p>

        </Segment>
    </div>
)

const PortfolioNotes = () => (
    <div class="lightPadding">
        <BreadcrumbPanel />
        <Header
            content = "Flip Card Game"
            textAlign = "center"
            as = "h1"
        />
        <p className="subHeader">
            <span><a href='https://revin-flipcard-game.netlify.app'>Live Demo</a></span>  ||  <span><a href="https://github.com/rtanri/Flip-card-game" target="_blank">Github Repo</a></span>
        </p>

        <Segment>
            <Header as="h2">1. Project Requirement</Header>
            <Header as="h3" id='overview'>1.1. Simple Overview</Header>
            <Overview />
            <Header as="h3" id='appFunctionality'>1.2. App Functionality</Header>
            <AppF12y />
            <Screenshot source="/images/dashboard/flipcard.jpg" />
            <Header as="h3" id='workflowProcess'>1.3. Workflow Process</Header>
            <Workflow />
            <Header as="h3" id='starterCode'>1.4. Starter Code</Header>
            <StarterCode />
        </Segment>

        <Segment>
            <Header as="h2">2. Code Samples</Header>
        
            <Header as="h3" id="firstSample">2.1. Handling click on cards</Header>
            <p>This step is done by adding 'minute' and 'second' label with span - located at <code>/js/app.js</code></p>
            <Screenshot source="/images/flipcard/onClick-setting.jpg"/>

            <Header as="h3" id="secondSample">2.2. Arranging Cards Arrays</Header>
            <p>We need to collect the eventListener of card clicked and checked if those 2 cards are matched or different.
             These arrays are created to compore both cards and prevent errors - located at <code>/js/app.js</code>.</p>
            <Screenshot source="/images/flipcard/card-array.jpg" />

            <Header as="h3" id="thirdSample">2.3. Managing Stars - add & delete</Header>
            <p>We need to connect star quantity depends on the result of card matching. 
            Adding 1 if both cards matched, and deleting 1 if both cards mismatched - located at <code>/js/app.js</code>.</p>
            <Screenshot source="/images/flipcard/star-setting.jpg" />

            <Header as="h3" id="forthSample">2.4. Setting Timer</Header>
            <p>Create a continuous flow on timer innerHTML by adding  +1sec  interval with <code>setTime()</code>. 
            We also need to add <code>myStopFunction()</code> to stop the timer when the game has ended - located at <code>/js/app.js</code>.</p>
            <Screenshot source="/images/flipcard/time-setting.jpg" />
        </Segment>

        <div class="projectFooter">
            <Button size="small" floated='left' as={Link} to={""} content="Back"/>
            <p className="subHeader"><span><a href='https://revin-flipcard-game.netlify.app'>Live Demo</a></span>  ||  <span><a href="https://github.com/rtanri/Flip-card-game" target="_blank">Github Repo</a></span></p>
        </div>
    
    </div>
)


const BreadcrumbPanel = () => (

    <Breadcrumb>
      <Breadcrumb.Divider icon="left arrow" />
      <Breadcrumb.Section 
        as= {Link}
        to= {"/"}
      >Home</Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section>Flip Card Game</Breadcrumb.Section>
    </Breadcrumb>
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

const StarterCode = () => (
    <div>
    <p>
    Starter code with the ready to use HTML and CSS - <a href="https://github.com/udacity/fend-project-memory-game" target='_blank'>Udacity GitHub link.</a>
    </p>
    </div>
)





const Screenshot = ({source}) => (
    <Image 
        size="big" 
        //size="huge"
        centered
        src={source}/>
)



export default Game2