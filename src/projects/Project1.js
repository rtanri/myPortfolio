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


class Project1 extends Component {

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
                <p><a href="#storeData">2.3. Store Data</a></p>`


                <Header as="h4">3. Coding Phase</Header>
                    <p><a href="#firstSample">3.1. API Functions</a></p>
                    <p><a href="#secondSample">3.2. Actions and Reducers</a></p>
                    <p><a href="#thirdSample">3.3. Middleware</a></p>
                    <p><a href="#forthSample">3.4. Initialize App Data</a></p>
                    <p><a href="#fifthSample">3.4. Login Page</a></p>

        </Segment>
    </div>
)

const PortfolioNotes = () => (
    <div class="lightPadding">
        <BreadcrumbPanel />
        <Header
            content = "Would You Rather Apps"
            textAlign = "center"
            as = "h1"
        />
        <p className="subHeader">
            <span><a href="https://wouldyourathertoeat.netlify.app">Live Demo</a></span>  ||  <span><a href="https://github.com/rtanri/youRather" target="_blank">Github Repo</a></span>
        </p>


        <Segment>
            <Header as="h2">1. Project Requirement</Header>
            <Header as="h3">1.1. Simple Overview</Header>
            <Overview />
            <Header as="h3">1.2. App Functionality</Header>
            <AppF12y />
            <Screenshot source="/images/dashboard/yourather.jpg" />
            <Header as="h3">1.3. Workflow Process</Header>
            <Workflow />
        </Segment>

        <Segment>
            <Header as="h2">2. App Design</Header>
            <Header as="h3">2.1. View</Header>
            <LorumIpsum />
            <Header as="h3">2.2. Component Hierarcy</Header>
            <LorumIpsum />
            <Screenshot />
            <Header as="h3">2.3. Store Data</Header>
            <LorumIpsum />
        </Segment>

        <Segment>
            <Header as="h2">3. Coding Phase</Header>

            <Header as="h3" id="apiFunction">3.1. API Function</Header>
            <p>The first step is to create a set of function wrappers to our async data requests. The methods would be direct database fetch requests and include:
                <ul>
                    <li>_getUsers</li> 
                    <li>_getUser</li> 
                    <li>_getQuestions</li> 
                    <li>_saveQuestion</li> 
                    <li>_saveQuestionAnswer</li> 
                </ul>
            We want to create the following API function wrappers for these:
                <ul>
                    <li>getInitialUsers - takes in _getUsers</li> 
                    <li>getUser - takes in particular user with 'id'</li> 
                    <li>getInitialPolls - takes in _getQuestions</li> 
                    <li>savePollAPI - location to format data for post request</li> 
                    <li>savePollAnswerAPI - location to format data for post request</li> 
                </ul>
            This is located at <code>/utils/api.js</code> 
            </p>
            <Screenshot source="/images/yourather/api.jpg"/>
            
            <Header as="h3" id="actionCode">3.2. Action</Header>
            <p>Next step is to create a set of actions and action creators - created in <code>/src/actions/</code>
                <ul>
                    <li>authedUser.js - located at: <code>/src/actions/authedUser.js</code> </li> 
                    <Screenshot source="/images/yourather/action-auth.jpg"/>
                    
                    <li>polls.js - located at: <code>/src/actions/polls.js</code> </li> 
                    <Screenshot source="/images/yourather/action-poll.jpg"/>

                    <li>user.js - located at: <code>/src/actions/user.js</code> </li> 
                    <Screenshot source="/images/yourather/action-user.jpg"/>

                    <li>shared.js - located at: <code>/src/actions/shared.js</code> </li> 
                    <Screenshot source="/images/yourather/action-shared.jpg"/>
                </ul>
            </p>
            
            
            <Header as="h3" id="reducerCode">3.3. Reducer</Header>
            <p>The next step is to create our reducers. We start by creating the following files in <code>/src/reducers/</code>:
                <ul>
                    <li>authedUser.js - located at: <code>/src/reducers/authedUser.js</code> </li> 
                    <Screenshot source="/images/yourather/reducer-auth.jpg"/>
                    
                    <li>polls.js - located at: <code>/src/reducers/polls.js</code> </li> 
                    <Screenshot source="/images/yourather/reducer-poll.jpg"/>

                    <li>user.js - located at: <code>/src/reducers/user.js</code> </li> 
                    <Screenshot source="/images/yourather/reducer-user.jpg"/>

                    <li>index.js - located at: <code>/src/reducers/index.js</code> </li> 
                    <Screenshot source="/images/yourather/reducer-index.jpg"/>

                    <li>Add Redux Provider code to entry point, to instantiated the store and passes it to Provider which wraps App and acts as a Context 
                    - located at: <code>/src/index.js</code> </li> 
                    <Screenshot source="/images/yourather/reducer-mainIndex.jpg"/>
                </ul>
            </p>


            <Header as="h3" id="middleware">3.4. Middleware</Header>
            <p>Create middleware functions that will be <strong>logger.js and index.js</strong> 
            - all middleware follows this pattern <br/> <code>const logger = (store) => (next) => (action) => ...</code>
            <ul>
                <li>Logger - that will print out output for "action" and "state" - located at: <code>/src/middleware/logger.js</code> </li>
                <Screenshot source="/images/yourather/logger.jpg"/>

                <li>Index - to compile all middlewares  - located at: <code>/src/middleware/index.js</code> 
                <Screenshot source="/images/yourather/middlewareIndex.jpg"/>
                Note that middleware gets run after the action creator returns an object or function but before getting sent to the reducer. 
                Middleware also gets run in the order we apply (Thunks need to run first so that it can properly handle logger). </li> <br/>

                <li>Add Redux Middleware to code entry point -  - located at: <code>/src/index.js</code> </li>
                <Screenshot source="/images/yourather/reducer-mainIndex.jpg"/>
            </ul>
            </p>
            

            <Header as="h3" id="firstSample">2.1. Middleware</Header>
            <p>This step is done by adding 'minute' and 'second' label with span - located at <code>/js/app.js</code></p>
            <Screenshot source="/images/flipcard/onClick-setting.jpg"/>
            
            <Header as="h3" id="firstSample">2.1. Middleware</Header>
            <p>This step is done by adding 'minute' and 'second' label with span - located at <code>/js/app.js</code></p>
            <Screenshot source="/images/flipcard/onClick-setting.jpg"/>
            
            <Header as="h3" id="firstSample">2.1. Middleware</Header>
            <p>This step is done by adding 'minute' and 'second' label with span - located at <code>/js/app.js</code></p>
            <Screenshot source="/images/flipcard/onClick-setting.jpg"/>
            

        </Segment>

        <div class="projectFooter">
            <Button size="small" floated='left' as={Link} to={""} content="Back"/>
            <p className="subHeader">
                <span><a href="https://wouldyourathertoeat.netlify.app">Live Demo</a></span>  ||  <span><a href="https://github.com/rtanri/youRather" target="_blank">Github Repo</a></span>
            </p>
        </div>

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

const BreadcrumbPanel = () => (
    <Breadcrumb>
      <Breadcrumb.Divider icon="left arrow" />
      <Breadcrumb.Section 
        as= {Link}
        to= {"/"}
      >Home</Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section>Would You Rather</Breadcrumb.Section>
    </Breadcrumb>
)


const Overview =() => (
    <div>
    <p>
    In the "Would You Rather?" Project, you'll build a web app that lets a user 
    play the “Would You Rather?” game. The game goes like this: A user is asked a 
    question in the form: “Would you rather [option A] or [option B] ?”. 
    Answering "neither" or "both" is against the rules. 
    <br/>
    In your app, users will be able to answer questions, see which questions 
    they haven’t answered, see how other people have voted, post questions, 
    and see the ranking of users on the leaderboard.
    </p>
     </div>
 )

const AppF12y = () => (
    <div>
        <p>
        The person using your application should have a way of impersonating/logging in as an existing user. 
        Web-app should work correctly regardless of which user is selected. Once the user logs in, the home page should be shown.
        The logged-in user will see their name and profile on top navigation, and they can toggle unanswered/answered question in homepage.
        </p>
        <ul>
            <li>Once clicked, each polling question should link to the details. The details is also available at 'questions/:question_id' route</li>
            <li>Application will show Page 404 if the 'question_id' is not existed,</li>
            <li>Upon voting in a poll, all of the information of an answered poll should be displayed. 
            The user’s response should be recorded and clearly visible on the poll details page. <br/>
            Users can only vote once per poll; </li>
            <li>The form for posting new polling questions with 2 options should be available at the '/add' route,</li>
            <li>Let's have a healthy competition going on, check the player status on '/leaderboard'.</li>
        </ul>
    </div>
)


const Workflow = () => (
    <div>
    <p>
        Running through the apps planning, most of application state should be managed by Redux.
    </p>
        <ol>
            <li>Draw all the views of the app,</li>
            <li>Break Each View Into a Hierarchy of Components,</li>
            <li>Determine What Events Happen in the App,</li>
            <li>Determine What Data Lives in the Store,</li>
            <li>Design shape of 'state', create reducers, and Redux Store. Connect the middleware as well.</li>
            <li>Code all layout pages in presentable components,</li>
            <li>Import store to related components, code the logics and add React Router.</li>
        </ol>
    </div>

)


const Screenshot = ({source}) => (
    <Image size="big" 
    src={source}
    centered
    className="pictureMargin"
    />
)




export default Project1