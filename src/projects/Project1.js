import React, {Component} from 'react'
import { 
    Segment,
    Header,
    Image,
    Rail,
    Breadcrumb,
    Button,
    Icon,
    Table,
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
                <p><a href="#storeData">2.3. Store Data</a></p>

                <Header as="h4">3. Coding Phase</Header>
                    <p><a href="#apiFunction">3.1. API Functions</a></p>
                    <p><a href="#actionCode">3.2. Action</a></p>
                    <p><a href="#reducerCode">3.3. Reducer</a></p>
                    <p><a href="#middleware">3.4. Middleware</a></p>
                    <p><a href="#initializeData">3.5. Initialize Data</a></p>
                    <p><a href="#loginNav">3.6. Login & Nav</a></p>
                    <p><a href="#dashboard">3.7. Dashboard</a></p>
                    <p><a href="#poll">3.8. Poll Component</a></p>
                    <p><a href="#pollResult">3.9. Poll Result</a></p>
                    <p><a href="#leaderboard">3.10. Leaderboard</a></p>
                    <p><a href="#newPoll">3.11. New Poll</a></p>
                    <p><a href="#error">3.12. Error 404</a></p>

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

        {/* Section 1 */}
        <Segment>
            <Header as="h2">1. Project Requirement</Header>
            <Header as="h3" id="overview">1.1. Simple Overview</Header>
            <Overview />
            <Header as="h3" id="appFunctionality">1.2. App Functionality</Header>
            <AppF12y />
            <Screenshot source="/images/dashboard/yourather.jpg" />
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
                <li>AuthedUser data</li> 
                <li>Text data for new question</li> 
                <li>Answer data for answered question</li> 
            </ul>  
            <br />
            If we present in table locating all data element in components:
            <TableData />
            </p>  
        </Segment>

        {/* Section 3 */}
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
            

            <Header as="h3" id="initializeData">3.5. Initialize Data</Header>
            <p>Invoke our <code>handleInitialUsers()</code> and <code>handleInitialPools()</code> think action creator that was created in <code>/src/actions/shared.js</code> 
            Depends on the usage type, typically we invoke these data in early stage of page-rendering with method: <code>componentWillMount()</code> or <code>componentDidMount()</code>. 
            In this project, this is invoked in:
            <ul>
                <li><code>components/App.js</code></li>
                <li><code>components/Dashboard.js</code></li>
            </ul>
            </p>
            
            
            <Header as="h3" id="loginNav">3.6. Login & Navigation</Header>
            <p>Login page work together with other components to authenticate user in navigation bar and whole app experience.</p>
            <ul>
                <li>App Component - <a href="https://github.com/rtanri/youRather/blob/master/src/components/App.js" target="_blank">find in my github</a></li> 
                <li>Login Component  - <a href="https://github.com/rtanri/youRather/blob/master/src/components/Login.js" target="_blank">find in my github</a>
                
                </li> 
                <li>Nav Component  - <a href="https://github.com/rtanri/youRather/blob/master/src/components/Nav.js" target="_blank">find in my github</a>

                </li> 
                <Screenshot source="/images/yourather/login.jpg"/>
            </ul> 

            <Header as="h3" id="dashboard">3.7. Dashboard</Header>
            <p>Consist of Navigation with logged-in user, Tab, List of Cards - located at <code>/src/components/Dashboard.js</code> <br/>
            You can find dashboard component code in my <a href="https://github.com/rtanri/youRather/blob/master/src/components/Dashboard.js" target="_blank">Github Page </a>.
            </p>
            <Image src="/images/yourather/dashboard.jpg" size="huge" bordered />

            
            <Header as="h3" id="poll">3.8. Poll Component</Header>
            <p>This component not only contain the design of single question card in dashboard, but also the error-handling measure when user searched for 
            unidentified question.id or null value in poll object. You can find dashboard component code in my <a href="https://github.com/rtanri/youRather/blob/master/src/components/Poll.js" target="_blank">Github Page</a> 
             - located at <code>/src/components/Poll.js</code>.
            </p>
            <Screenshot source="/images/yourather/poll-code.jpg"/>
            <Screenshot source="/images/yourather/poll-card.jpg"/>
            
            <Header as="h3" id="pollResult">3.9. Answering & Showing poll result</Header>
            <p>This step involved creating actions, action creators, and reducers for both the users and questions store slices - located at <code>/src/components/PollDetails.js</code><br/>
            You can find dashboard component code in my <a href="https://github.com/rtanri/youRather/blob/master/src/components/PollDetails.js" target="_blank">Github Page </a>.
            </p>
            <Screenshot source="/images/yourather/before-answer.jpg"/>
            <Screenshot source="/images/yourather/after-answer.jpg"/>
            
            <Header as="h3" id="leaderboard">3.10. Display Leaderboard</Header>
            <p>Table of users in order based on the number of questions answered - located at <code>/src/components/Leaderboard.js</code> <br/>
            You can find dashboard component code in my <a href="https://github.com/rtanri/youRather/blob/master/src/components/Leaderboard.js" target="_blank">Github Page </a>.
            </p>
            <Screenshot source="/images/yourather/leaderboard.jpg"/>
            
            <Header as="h3" id="newPoll">3.11. Create New Poll</Header>
            <p>The Add Question View allows a new poll to be created. This involves creating actions, action creators, & reducers for both the questions and users 
            store slices. Button will be disabled if only 1 box is filled or more than 25 characters - located 
            at <code>/src/components/addQuestion.js</code> <br/>
            You can find dashboard component code in my <a href="https://github.com/rtanri/youRather/blob/master/src/components/AddQuestion.js" target="_blank">Github Page </a>.
            </p>
            <Screenshot source="/images/yourather/newPoll.jpg"/>
            
            <Header as="h3" id="error">3.12. No Match 404 Page</Header>
            <p>Last part in 404 error where the bad path is used by user - located at <code>/src/components/PageNotFound.js</code> <br/>
            You can find dashboard component code in my <a href="https://github.com/rtanri/youRather/blob/master/src/components/PageNotFound.js" target="_blank">Github Page </a>.
            </p>
            <Screenshot source="/images/yourather/error.jpg"/>
            

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
    Web app that lets a user play the “Would You Rather?” game. Where a user is asked to answer a 
    question in the form: “Would you rather [option A] or [option B] ?”, 
    <br/> 
    <br/> 
    This app also allow to see other people voted, post questions, and see the ranking of users on the leaderboard.
    </p>
     </div>
 )

const AppF12y = () => (
    <div>
        <p>
        User will impersonate/log-in as an existing user. Web-app should work correctly regardless of which user is selected. Once the user logs in, the home page should be shown.
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


const TableData = () => (
    <Table celled className="dataTable">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Component</Table.HeaderCell>
        <Table.HeaderCell>Users</Table.HeaderCell>
        <Table.HeaderCell>Polls</Table.HeaderCell>
        <Table.HeaderCell>AuthedUser</Table.HeaderCell>
        <Table.HeaderCell>Text</Table.HeaderCell>
        <Table.HeaderCell>Answer</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>App</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell positives centered><Icon name='checkmark' /></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      
      <Table.Row>
        <Table.Cell>Login</Table.Cell>
        <Table.Cell positives><Icon name='checkmark' /></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell positives><Icon name='checkmark' /></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      
      <Table.Row>
        <Table.Cell>Nav</Table.Cell>
        <Table.Cell positives><Icon name='checkmark' /></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell positives><Icon name='checkmark' /></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      
      <Table.Row>
        <Table.Cell>Dashboard</Table.Cell>
        <Table.Cell positives><Icon name='checkmark' /></Table.Cell>
        <Table.Cell positives><Icon name='checkmark' /></Table.Cell>
        <Table.Cell positives><Icon name='checkmark' /></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      
      <Table.Row>
        <Table.Cell>Poll</Table.Cell>
        <Table.Cell positives><Icon name='checkmark' /></Table.Cell>
        <Table.Cell positives><Icon name='checkmark' /></Table.Cell>
        <Table.Cell positives><Icon name='checkmark' /></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      
      <Table.Row>
        <Table.Cell>Poll Detail</Table.Cell>
        <Table.Cell positives><Icon name='checkmark' /></Table.Cell>
        <Table.Cell positives><Icon name='checkmark' /></Table.Cell>
        <Table.Cell positives><Icon name='checkmark' /></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell positives><Icon name='checkmark' /></Table.Cell>
      </Table.Row>
      
      <Table.Row>
        <Table.Cell>New Poll</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell positives><Icon name='checkmark' /></Table.Cell>
        <Table.Cell positives><Icon name='checkmark' /></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      
      <Table.Row>
        <Table.Cell>Leaderboard</Table.Cell>
        <Table.Cell positives><Icon name='checkmark' /></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

const Screenshot = ({source}) => (
    <Image size="big" 
    src={source}
    centered
    bordered
    className="pictureMargin"
    />
)



export default Project1