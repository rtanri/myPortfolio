import React, {Component} from 'react'
import { 
    Segment,
    Header,
    Image,
    Rail,
} from 'semantic-ui-react'


class MoProject1 extends Component {

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
            content = "Mobile App: Flash Memory Cards"
            textAlign = "center"
            as = "h1"
        />
        <p className="subHeader">Local demo via <span><a href="https://github.com/rtanri/mobile-flashcards" target="_blank">Github Repo</a></span></p>


        <Segment>
            <Header as="h3">1. Project Requirement</Header>
            <Header as="h4">1.1. Simple Overview</Header>
            <Overview />
            <Header as="h4">1.2. App Functionality</Header>
            <AppF12y />
            <Screenshot source="/images/dashboard/flashcard.jpg" />
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
    urna interdum arcu gravida, et luctus nulla maximus. 
    </p>
)



const Overview =() => (
    <div>
    <p>
    Build a mobile application (Android or iOS - or both) that allows 
    users to study collections of flashcards. The app will allow users 
    to create different categories of flashcards called "decks", add flashcards
     to those decks, then take quizzes on those decks.
    </p>
     </div>
 )

const AppF12y = () => (
    <div>
        <p>
        This mobile app is initiated from 'create-react-native-app', no started code.
        </p>
        <ul>
            <li>Allow users to create a deck which can hold an unlimited number of cards.,</li>
            <li>Allow users to add a card to a specific deck,</li>
            <li>The front of the card should display the question,</li>
            <li>The back of the card should display the answer,</li>
            <li>Users should be able to quiz themselves on a specific deck and receive a score once they're done,</li>
            <li>Users should receive a notification to remind themselves to study if they haven't already for that day,</li>
        </ul>
    </div>
)


const Workflow = () => (
    <div>
    <p>
        Create 'Player' and 'Enemies' classes using Object Oriented Programming.
    </p>
        <ol>
            <li>Draw all the view of the mobile app,</li>
            <li>Break Each View Into a Hierarchy of Components,</li>
            <li>Plan out How Your App Will Manage Data,</li>
            <li>Install Redux and create Store,</li>
            <li>For each view that needs access to the store, create the component and connect it to the store.,</li>
            <li>Add react-router,</li>
            <li>Remember to add finishing touch and debug.</li>
        </ol>
    </div>

)


const Screenshot = ({source}) => (
    <Image size="large" src={source}/>
)


export default MoProject1