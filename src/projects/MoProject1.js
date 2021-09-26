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
                    <p><a href="#viewPlanning">2.1. Sketching App</a></p>
                    <p><a href="#initialSetup">2.2. Initial ReactNative Setup</a></p>
                    <p><a href="#tabAndStack">2.3. Tab & Stack Navigation</a></p>
                    <p><a href="#sampleData">2.4. Data Sample & API</a></p>
                    <p><a href="#actionReducer">2.5. Action & Reducer</a></p>
                    <p><a href="#homeComp">2.6. Connect Initial Data</a></p>
                    <p><a href="#adddeckComp">2.7. Adding New Deck</a></p>
                    <p><a href="#decksettingComp">2.8. DeckSetting & AddCard</a></p>
                    <p><a href="#quizComp">2.9. Quiz Layout & Machine</a></p>
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

        <Segment>
            <Header as="h2">2. ReactNative App</Header>

            <Header as="h3" id="viewPlanning">2.1. Planning for View, Components and Data Locations</Header>
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

            <Header as="h3" id="tabAndStack">2.3. Work on Tab & Stack Navigation</Header>
            <p>This step you can create minimum-viable-pages throughout each components. Then I focus to work on the RouteConfigs, Icon and Style of Tabs panel that can be different in both iOS and Android. 
            Then Stack Navigator construct the other components based on the initial plan - located in <code>/MainApp.js</code>.
            <br/><br/>
            You can see code in <code>MainApp.js</code> in my <a href="https://github.com/rtanri/mobile-flashcards/blob/master/MainApp.js">Github page</a>.
            </p>  

            <Header as="h3" id="sampleData">2.4. Add Sample Data and API function</Header>
            <p>Add the sample initial data for deck & card in <code>utils/api.js</code> then build API functions that will help the data movement around the components.
            <ol>
                <li><strong>Initial data for Deck and Card</strong></li>
                <Screenshot source="/images/flashcard/data-sample.jpg" />
                <p class="pictureDetail">Figure: Data for Food Deck and Card</p>
                
                <li><strong>Few API Function</strong> like 
                <code>getData</code>, <code>getDecks</code>, <code>saveNewDeck</code>, <code>addCardToDeck</code>, <code>removeDeck</code>
                </li>
                

            </ol>
            You can visit my <a href="https://github.com/rtanri/mobile-flashcards/blob/master/utils/api.js">Github page</a> to see the initial data and API functions mentioned.
            </p>  

            <Header as="h3" id="actionReducer">2.5. Create Actions, Reducers and Middleware</Header>
            <p>As a first step, We need to Install react-redux, redux, redux-thunk. Then we create these few files to manage the store and data movement:
            <ul>
                <li>Dispatch functions based on action id - located in <code>/actions/index.js</code>,</li>
                <li>Set the data movement or object reaction depended on each action function called - located in <code>/reducers/index.js</code>,</li>
                <li>Contain logger and thunk middleware - located in <code>/middleware/logger.js</code> and <code>/middleware/index.js</code></li>
            </ul>
            </p>  

            
            <Header as="h3" id="homeComp">2.6. Import Initial data to Home Components</Header>
            <Screenshot source="/images/flashcard/home-deck.jpg" />
            <p class="pictureDetail">Figure: Imported 2 decks in Home Screen</p>
            <p>
            We need to import the initial decks with few questions cards into our home component, with this few steps:
            <ol class="biggerSpace">
                <li>In Home tab, modelled the style of each deck and deck-list by importing <code>/component/Deck.js</code> in <code>/component/Home.js</code></li>
                <li>Import data into <code>/component/Home.js</code> with <code>ComponentDidMount</code> dispatching handleInitialData,
                 connecting redux store 'deck' with <code>mapStateToProps(decks)</code> - see <a href="https://github.com/rtanri/mobile-flashcards/blob/master/components/Home.js" target="_blank">code in Github.</a>
                <Screenshot source="/images/flashcard/addInitialData.jpg" />
                </li>
                <li>Navigate the user to <code>/components/DeckSetting.js</code> once deck is pressed</li>
                <Screenshot source="/images/flashcard/deck-onPress.jpg" />
            </ol>
            </p>  
        

            <Header as="h3" id="adddeckComp">2.7. AddDeck Component</Header>
            <p>This step involved Text-input that is connected to State, once it is pressed - not only it will dispatch <code>handleAddDeck()</code>function sending 'input' state to Store, but also reset the 'input' state data. 
            Then, user will be navigated into <code>components/DeckSetting.js</code>. <br/><br/>
            You can find addDeck component code in my <a href="https://github.com/rtanri/mobile-flashcards/blob/master/components/AddDeck.js" target="_blank">Github page</a>.
            <Screenshot source="/images/flashcard/new-deck.jpg" />
            <p class="pictureDetail">Figure: Adding new deck with compulsory title field</p>
            </p>  


            <Header as="h3" id="decksettingComp">2.8. DeckSetting and AddCard Component</Header>
            <Image src="/images/flashcard/deck-setting.jpg" floated="left" bordered className="floatLeft"/>
            <p>This step presented the options that user can manage in deck like 'add card', 'delete deck' and 'start quiz'. The detail in each components:
            <ol class="biggerSpace">
                <li><strong>DeckSetting Page</strong></li>
                <p>
                <ul>
                    <li>Add Card -> Simple navigation to <code>/components/AddCard.js</code></li>
                    <li>Start Quiz -> Navigate user to <code>/components/Quiz.js</code>, but will be disabled if deck has no question card.</li>
                    <li>Delete Deck -> Delete current deck with 'title' as the 'id', then return user to <code>/components/Home.js</code></li>
                </ul>
                </p>
                <li><strong>AddCard Page</strong></li>
                <p>
                This component will be shown after user press the <strong>"Add Card"</strong> button, it contains of text inputs collecting question and answer with submit button on below. 
                Then I categorize Question input as the "front", and Answer input as the "back" - in which will be ingested to a card with flip-animation in quiz.
                <br/><br/>
                You can visit my Github to see <a href="https://github.com/rtanri/mobile-flashcards/blob/master/components/DeckSetting.js" target="_blank">DeckSetting.js</a> and <a href="https://github.com/rtanri/mobile-flashcards/blob/master/components/AddCard.js" target="_blank">AddCard.js</a>  - located at <code>/components/***</code>.
                </p>
            </ol>
            
            </p>  


            <Header as="h3" id="quizComp">2.9. Quiz layout and machine</Header>
            <p>After we have created the style of page layout and button, It is important to create animation value before the component is created using <code>componentWillMount()</code>. Key things that I add to make this quiz interesting:
            <ul>
                <li>Displaying the card sequence and number of cards left,</li>
                <li>Flip card animation between Question/Answer,</li>
                <li>Score in the end of Quiz,</li>
                <li>Restart button to redo the quiz.</li>
            </ul>
            You can visit my Github to see <a href="https://github.com/rtanri/mobile-flashcards/blob/master/Quiz.js" target="_blank">Quiz.js</a> - located at <code>components/Quiz.js</code>.
            <Screenshot source="/images/flashcard/quiz-layout.jpg" />
            <p class="pictureDetail">Figure: On-going quiz page and Score Result</p>
            </p>  

            <br/>
        </Segment>


        <div class="projectFooter">
            <Button size="small" floated='left' as={Link} to={""} content="Back"/>
          
            <p className="subHeader">Local Demo via  <span><a href="https://github.com/rtanri/fitnessApp" target="_blank">Github Repo</a></span></p>
       
        </div>

    </div>
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