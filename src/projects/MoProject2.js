import React, {Component} from 'react'
import { 
    Segment,
    Header,
    Image,
    Rail,
} from 'semantic-ui-react'


class MoProject2 extends Component {

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
            content = "Mobile App: Fitness App"
            textAlign = "center"
            as = "h1"
        />
        <p className="subHeader">Local Demo via  <span><a href="https://github.com/rtanri/fitnessApp" target="_blank">Github Repo</a></span></p>


        <Segment>
            <Header as="h3">1. Project Requirement</Header>
            <Header as="h4">1.1. Simple Overview</Header>
            <Overview />
            <Header as="h4">1.2. App Functionality</Header>
            <AppF12y />
            <Screenshot source="/images/dashboard/fitnessapp.jpg" />
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
    Mobile Application with ReactNative where anyone interested in triathlon preparation or
    trainings can record, track their progress and monitor most of relevant aspect while exercising.
    </p>
     </div>
 )

const AppF12y = () => (
    <div>
        <p>
        App will be published in iOS and Android by ReactNative, integrated with in-app calendar, 
        and all record wil be based on each day. <br />
        There will be 3 main tab categories:
        
        </p>
        <ul>
            <li>Your Log: Consist of Calendar, and quick summary on selected dates.</li>
            <li>Add Entry: Where user can log their running, cycling, swimming, sleeping hours and calories intake;</li>
            <li>Live: direction navigation, speed & altitude of the user while exercising</li>
        </ul>
    </div>
)


const Workflow = () => (
    <div>
    <p>
    Start with create a new 'ReactNative CLI Quickstart', and connect with both iOS simulator and Android simulator. Followed by adding the utils files (colors, helpers and calendar) as a starting code package.
    </p>
        <ol>
            <li>Connect user inputs in new component: AddEntry,</li>
            <li>Work on handleInput for 'Slider' and 'Stepper' input types,</li>
            <li>Connect input types with 5 metrics in AddEntry-page,</li>
            <li>Create Store by installing Redux,</li>
            <li>Render the Calendar with EntryDetail in each date pressed,</li>
            <li>Set Live-page, and remember to ask permission for location & notification.</li>
        </ol>
    </div>

)


const Screenshot = ({source}) => (
    <Image size="large" src={source}/>
)


export default MoProject2