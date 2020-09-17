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

                <Header as="h4">2. App Development</Header>
                    <p><a href="#initialSetup">2.1. Initial Setup</a></p>
                    <p><a href="#addAPI">2.2. Add API files in Utils</a></p>
                    <p><a href="#addEntryComp">2.3. AddEntry Component</a></p>
                    <p><a href="#apiCalls">2.4. API calls & AsyncsStorage</a></p>
                    <p><a href="#reduxReactNative">2.5. Redux and ReactNative</a></p>
                    <p><a href="#dailyReminder">2.6. Daily Reminder</a></p>
                    <p><a href="#platformCSS">2.7. CSS for iOS and Android</a></p>
                    <p><a href="#historyComp">2.8. History Component</a></p>
                    <p><a href="#tabStack">2.9. Tab & Stack Navigation</a></p>
                    <p><a href="#entryDetail">2.10. EntryDetail Component</a></p>
                    <p><a href="#liveComp">2.11. Live Component</a></p>
                    <p><a href="#permission">2.12. Ask Location and Notification</a></p>
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
            <Image centered src="/images/flashcard/most-view.jpg" className="largeImage"/>
            <p class="pictureDetail">Figure: Example of views in the Flashcard Mobile-App</p>

            <Overview />

            <Header as="h3" id="appFunctionality">1.2. App Functionality</Header>
            <AppF12y />
          
            <Header as="h3" id="workflowProcess">1.3. Workflow Process</Header>
            <Workflow />
        </Segment>

        {/* Section 2 */}
        <Segment>
            <Header as="h2">2. ReactNative App</Header>

            <Header as="h3" id="initialSetup">2.1. Planning for View, Components and Data Locations</Header>
            <p>In this mobile apps, I sketched the views and interactions between them on paper, then decided to create:
            <ul>
                <li>
                6 main components : <strong>Home, AddDeck, Deck, DeckSetting, AddCard, Quiz</strong>.
                </li>
                <li>
                2 Tabs : <strong>Decks & Add Decks</strong>.
                </li>
                <li>
                4 Stacks : <strong>TabNav, DeckSetting, AddCard & Quiz </strong>.
                </li>
            </ul> 
            </p>
            <Screenshot source="/images/flashcard/planning.jpg" />
            <p class="pictureDetail">Figure: Sketch on app planning</p>


            <Header as="h3" id="initialSetup">2.2. Setting Up Development Environment</Header>
            <p>This app was built from scratch where it was initiated from <a href="https://reactnative.dev/docs/environment-setup" target="_blank">React Native CLI Quickstart.</a>.
            It's important to work on the initial setting and path for your iOS and Android simulators to be updated simultaneously. Need to pay attention on:
            <ul>
                <li>iOS Dependencies: Node, Watchman, Xcode, CocoaPods;</li>
                <li>Android Dependencies: Java Development Kit, Android Studio;</li>
            </ul>
            If your iOS simulator using an iphone 10 and above, you need to install & import "SafeAreaProvider" in your <code>App.js</code> to ensure your UI in readable space.
            </p>

            <Header as="h3" id="storeData">2.3. Work on Tab & Stack Navigation</Header>
            <p>This step you can create minimum-viable-pages throughout each components. Then I focus to work on the RouteConfigs, Icon and Style of Tabs panel that can be different in both iOS and Android. 
            Then Stack Navigator construct the other components based on the initial plan - located in <code>/MainApp.js</code>.
            <br/><br/>
            You can see code in <code>MainApp.js</code> in my <a href="https://github.com/rtanri/mobile-flashcards/blob/master/MainApp.js">Github page</a>.
            </p>  

            <Header as="h3" id="storeData">2.3. MainApp </Header>
            <p>This step I set the RouteConfigs and style of Tabs panel that can be different in both iOS and Android. Then Stack Navigator construct the other components based on the initial plan - located in <code>/MainApp.js</code>.<br/>
            You can visit my <a href="https://github.com/rtanri/mobile-flashcards/blob/master/MainApp.js">Github page</a> to see the code.
            </p>  

            <Header as="h3" id="storeData">2.3. MainApp </Header>
            <p>This step I set the RouteConfigs and style of Tabs panel that can be different in both iOS and Android. Then Stack Navigator construct the other components based on the initial plan - located in <code>/MainApp.js</code>.<br/>
            You can visit my <a href="https://github.com/rtanri/mobile-flashcards/blob/master/MainApp.js">Github page</a> to see the code.
            </p>  
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