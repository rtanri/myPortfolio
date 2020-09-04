import React, {Component} from 'react'
import { 
    Segment,
    Header,
    Image,
    Rail,
} from 'semantic-ui-react'


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


const PortfolioNotes = () => (
    <div class="lightPadding">
        <Header
            content = "Would You Rather Apps"
            textAlign = "center"
            as = "h1"
        />
        <p className="subHeader"><span><a href="https://wouldyourathertoeat.netlify.app">Live Demo</a></span>  ||  <span><a href="https://github.com/rtanri/youRather" target="_blank">Github Repo</a></span></p>


        <Segment>
            <Header as="h3">1. Project Requirement</Header>
            <Header as="h4">1.1. Simple Overview</Header>
            <Overview />
            <Header as="h4">1.2. App Functionality</Header>
            <AppF12y />
            <Screenshot source="/images/dashboard/yourather.jpg" />
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
    <Image size="large" src={source}/>
)


export default Project1