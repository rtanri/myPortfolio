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

const BreadcrumbPanel = () => (
    <Breadcrumb>
      <Breadcrumb.Divider icon="left arrow" />
      <Breadcrumb.Section 
        as= {Link}
        to= {"/"}
      >Home</Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section>Fitness App</Breadcrumb.Section>
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
            content = "Mobile App: Fitness App"
            textAlign = "center"
            as = "h1"
        />
        <p className="subHeader">Local Demo via  <span><a href="https://github.com/rtanri/fitnessApp" target="_blank">Github Repo</a></span></p>

        {/* Section 1 */}
        <Segment>
            <Header as="h2">1. Project Requirement</Header>

            <Header as="h3" id="overview">1.1. Simple Overview</Header>
            <Screenshot source="/images/fitness/all-display.jpg" />
            <Overview />

            <Header as="h3" id="appFunctionality">1.2. App Functionality</Header>
            <AppF12y />
          
            <Header as="h3" id="workflowProcess">1.3. Workflow Process</Header>
            <Workflow />
        </Segment>

        {/* Section 2 */}
        <Segment>
            <Header as="h2">2. ReactNative App</Header>
            <Header as="h3" id="view">2.1. Setting Up Development Environment</Header>
            <p>This app was built from scratch where it was initiated from <a href="https://reactnative.dev/docs/environment-setup" target="_blank">React Native CLI Quickstart.</a>.
            It's important to work on the initial setting and path for your iOS and Android simulators to be updated simultaneously. Need to pay attention on:
            <ul>
                <li>iOS Dependencies: Node, Watchman, Xcode, CocoaPods;</li>
                <li>Android Dependencies: Java Development Kit, Android Studio;</li>
            </ul>
            </p>

            <Header as="h3" id="componentHierarcy">2.2. Add API files in Utils</Header>
            <p>Add 3 API files: <code>_calendar.js</code>, <code>color.js</code>, and <code>helpers.js</code> - details in this <a href="https://github.com/rtanri/fitnessApp/tree/master/utils" target="_blank">github page</a>.
            <ul>
                <li>Next, add function <code>getMetricMetaInfo(metric)</code> to set unit, max-value, icons, and type of input for all activities (run, swim, cycling, sleep and eat) - in <code>utils/helpers.js</code> 
                    <Screenshot source="/images/fitness/getMetricMeta.jpg" />
                    <p class="pictureDetail">Code Samples for Run and Eat activities</p>
                </li> 
            </ul>
            </p> 

            <Header as="h3" id="storeData">2.3. AddEntry Component</Header>
                <Image src="/images/fitness/comp-addentry.jpg" floated="left" bordered className="floatLeft"/>
            <p>This component will receive and manage data input by user, in this step, I add few functions in component:
            <ul>
                <li>State (initial state is zero),</li> 
                <li>Increment(metric) : linked with <code>onIncrement()</code></li> 
                <li>Decrement(metric) : linked with <code>onDecrement()</code>,</li> 
                <li>Slide(metric, value) : linked with <code>onChange()</code>,</li> 
                <li>Submit : linked with <code>onPress()</code>,</li> 
            </ul>  
            Since this addEntry will be specific to each day, I add Date in the Header of AddEntry View Page. In addition, I also imported UdaciSlider & UdaciStepper in AddEntry Component:
            <ul>
            <li>Add Slide UI in <code>/components/UdaciSlider.js</code></li>
            <li>Add Stepper UI in <code>/components/UdaciSteppers.js</code></li>
            </ul>
            You can find the code for AddEntry Component here - <a href="https://github.com/rtanri/fitnessApp/blob/master/components/AddEntry.js" target="_blank">github page</a>.
            </p>  


            <Header as="h3" id="componentHierarcy">2.4. History Component with Calendar API</Header>
            <p>Add 3 API files: <code>_calendar.js</code>, <code>color.js</code>, and <code>helpers.js</code> - details in this <a href="https://github.com/rtanri/fitnessApp/tree/master/utils" target="_blank">github page</a>.
            <ul>
                <li>Next, add function <code>getMetricMetaInfo(metric)</code> to set unit, max-value, icons, and type of input for all activities (run, swim, cycling, sleep and eat) - in <code>utils/helpers.js</code> 
                    <p class="pictureDetail">Code Samples for Run and Eat activities</p>
                </li> 
            </ul>
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
    <Image size="big" 
    src={source}
    centered
    bordered
    className="pictureMargin"
    />
)



export default MoProject2