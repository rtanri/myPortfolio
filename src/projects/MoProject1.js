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


const BreadcrumbPanel = () => (
    <Breadcrumb>
      <Breadcrumb.Divider icon="left arrow" />
      <Breadcrumb.Section 
        as= {Link}
        to= {"/"}
      >Home</Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section>ReactNative Flash Card</Breadcrumb.Section>
    </Breadcrumb>
)

const LeftNavigation = () => (
    <div class="stickyContainer">
        <Segment className="navigationBar">
            <Header as="h3">Code Notes</Header>

                <Header as="h4">1. Project Requirement</Header>
                    <p><a href="#overview">1.1. Simple Overview</a></p>
                    <p><a href="#appFunctionality">1.2. App Functionality</a></p>
                    <p><a href="#workflowProcess">1.3. Workflow process  </a></p>

                <Header as="h4">2. App Design</Header>
                    <p><a href="#view">2.1. View</a></p>
                    <p><a href="#componentHierarcy">2.2. Component Hierarcy</a></p>

                <Header as="h4">3. Coding Phase</Header>
                    <p><a href="#apiFunction">3.1. App Component</a></p>
                    <p><a href="#a">3.2. Component</a></p>
                    <p><a href="#b">3.3. Component</a></p>
                    <p><a href="#c">3.4. Component</a></p>
                    <p><a href="#d">3.5. Component</a></p>
        </Segment>
    </div>
)


const PortfolioNotes = () => (
    <div class="lightPadding">
        <BreadcrumbPanel />
        <Header
            content = "Mobile App: Flash Card"
            textAlign = "center"
            as = "h1"
        />
        <p className="subHeader">Local Demo via  <span><a href="https://github.com/rtanri/fitnessApp" target="_blank">Github Repo</a></span></p>

        {/* Section 1 */}
        <Segment>
            <Header as="h2">1. Project Requirement</Header>

            <Header as="h3" id="overview">1.1. Simple Overview</Header>
            <Screenshot source="/images/flashcard/all-pages.jpg" />
            <Overview />

            <Header as="h3" id="appFunctionality">1.2. App Functionality</Header>
            <AppF12y />
          
            <Header as="h3" id="workflowProcess">1.3. Workflow Process</Header>
            <Workflow />
        </Segment>

        {/* Section 2 */}
        <Segment>
            <Header as="h2">2. App Design</Header>
            <Header as="h3" id="view">2.1. View</Header>
            <p>The designing view layout has been done on each page using React Semantic-UI format. </p>

            <Header as="h3" id="componentHierarcy">2.2. Component Hierarcy</Header>
            <p>This step is to determine component hierarchy. Since a component should ideally only do one 
            thing, it is important to see the flow of data and state across view and components. For example:
            <ul>
                <li>Dashboard View Page
                <Screenshot source="/images/yourather/component-hie.jpg"/>
                </li> 
            </ul>
            </p> 

            <Header as="h3" id="storeData">2.3. Store Data</Header>
            <p>Determining what data lives in the store and what should live in the component. The data elements in Redux that we are using in this app:
            <ul>
                <li>Users data</li> 
                <li>Questions data</li> 
            </ul>  
            <br />
            </p>  
        </Segment>

        {/* Section 3 */}
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

        <div class="projectFooter">
            <Button size="small" floated='left' as={Link} to={""} content="Back"/>
          
            <p className="subHeader">Local Demo via  <span><a href="https://github.com/rtanri/fitnessApp" target="_blank">Github Repo</a></span></p>
       
        </div>

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
    <Image size="big" 
    src={source}
    centered
    bordered
    className="pictureMargin"
    />
)



export default MoProject1