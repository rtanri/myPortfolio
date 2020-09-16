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
            <Image centered src="/images/fitness/all-display.jpg" className="largeImage"/>
            <p class="pictureDetail">Figure: All views in the Fitness Mobile-App</p>

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
                    <p class="pictureDetail">Figure: Code Samples for Run and Eat activities</p>
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
            In addition, I also imported 3 components (UdaciSlider, UdaciStepper & DateHeader) into AddEntry Component - with purpose:
            <ul>
            <li>Add Slide UI in <code>/components/UdaciSlider.js</code></li>
            <li>Add Stepper UI in <code>/components/UdaciSteppers.js</code></li>
            <li>Add different date in header <code>/components/DateHeader.js</code></li>
            </ul>
            You can find the code for AddEntry Component here - <a href="https://github.com/rtanri/fitnessApp/blob/master/components/AddEntry.js" target="_blank">github page</a>.
            </p>  


            <Header as="h3" id="addAPI">2.4. Add API calls & AsyncsStorage</Header>
            <p>Create the api file and insert functions that will handle "submit" and "reset" methods in AddEntry - located in <code>/utils/api.js</code> 
            <Screenshot source="/images/fitness/api1.jpg" />
            </p> 


            <Header as="h3" id="reduxReactNative">2.5. Redux and React Native</Header>
            <p>Install react-redux and redux in your terminal. Then, I add actions file and reducers file to receive and add entries - with details:
            <ul>
                <li><code>actions/index.js</code></li>
                <Screenshot source="/images/fitness/actions.jpg" />
                <li><code>reducers/index.js</code></li>
                <Screenshot source="/images/fitness/reducers.jpg" />
                <li>Remember to import "connect" from react-redux, and "addEntry" from actions.</li>
            </ul>
            </p> 


            <Header as="h3" id="dailyReminder">2.6. Build Daily Reminder</Header>
            <p>Create new function <code>getDailyReminderValue()</code> as a value of date with empty activities in <code>utils/helpers.js</code> 
            </p> 

            <Header as="h3" id="platformCSS">2.7. Update different CSS for iOS and Android</Header>
            <p>In AddEntry component, "Platform" and "stylesheet" is imported with purpose to differentiate the CSS of button, color or layout in 
            iOS and Android platform. Remember to edit the CSS for slider in and stepper as well.
            <Screenshot source="/images/fitness/platform.jpg" />
            <p class="pictureDetail">Figure: Platform.OS change the CSS in iOS and Android</p>
            <Screenshot source="/images/fitness/stylesheet.jpg" />
            <p class="pictureDetail">Figure: Stylesheet help to compile all CSS within that component</p>
            </p> 

            <Header as="h3" id="historyComp">2.8. Import Calendar API under History Component</Header>
            <Image src="/images/fitness/history-calendar.jpg" floated="left" bordered className="floatLeft"/>
            <p>There are few steps that we can do to import calendar into our app:
            <ol class="biggerSpace">
                <li>In <code>api.js</code> - Import _formatCalendarResults and add function <code>fetchCalendarResults()</code>  - visit my <a href="https://github.com/rtanri/fitnessApp/commit/f2156978bc18954b536782886bace7972835ecd9#diff-ac9f2309c33b0a3a94437d30e93062c2">Github page</a> to see the code.</li>
                <li>Add Calendar in <code>components/History.js</code> - visit my <a href="https://github.com/rtanri/fitnessApp/commit/f2156978bc18954b536782886bace7972835ecd9#diff-ac9f2309c33b0a3a94437d30e93062c2">Github page</a> to see the code.
                </li>
                <li>Install udacifitness-calendar in your terminal and import to the <code>components/History.js</code>,</li>
                <li>In History component, we need to render the calendar with few props (items, renderItem, renderEmptyDate)</li>
                <li>Render the calendar in History component with props.</li>
            </ol>
            </p> 

            <Header as="h3" id="tabNavigation">2.9. Tab Navigation Switch</Header>
            <p>Create new function <code>getDailyReminderValue()</code> as a value of date with empty activities in <code>utils/helpers.js</code> 
            </p> 

            <Header as="h3" id="dailyReminder">2.6. Build Daily Reminder</Header>
            <p>Create new function <code>getDailyReminderValue()</code> as a value of date with empty activities in <code>utils/helpers.js</code> 
            </p> 

            <Header as="h3" id="dailyReminder">2.6. Build Daily Reminder</Header>
            <p>Create new function <code>getDailyReminderValue()</code> as a value of date with empty activities in <code>utils/helpers.js</code> 
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