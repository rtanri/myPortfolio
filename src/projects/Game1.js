import React, {Component} from 'react'
import { 
    Segment,
    Header,
    Image,
    Rail,
} from 'semantic-ui-react'


class Game1 extends Component {
    // contextRef = createRef()

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
            content = "Would You Rather Apps"
            textAlign = "center"
            as = "h1"
        />

        <Segment>
            <Header as="h3">1. Project Requirement</Header>
            <Header as="h4">1.1. Simple Overview</Header>
            <Overview />
            <Header as="h4">1.2. App Functionality</Header>
            <LorumIpsum />
            <Screenshot />
            <Header as="h4">1.3. Workflow Process</Header>
            <LorumIpsum />
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
            <Header as="h3">4. Live Demo (Click here)</Header>
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


const Screenshot = () => (
    <Image size="large" src="/images/wireframe/image.png" />
)


export default Game1