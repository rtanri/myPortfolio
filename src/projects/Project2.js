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


class Project2 extends Component {

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
      <Breadcrumb.Section>E-Library (DIY Kindle)</Breadcrumb.Section>
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
                <p><a href="#storeData">2.3. Store Data</a></p>

                <Header as="h4">3. Coding Phase</Header>
                    <p><a href="#apiFunction">3.1. API Functions</a></p>
                    <p><a href="#actionCode">3.2. Action</a></p>
                    <p><a href="#reducerCode">3.3. Reducer</a></p>
                    <p><a href="#middleware">3.4. Middleware</a></p>
                    <p><a href="#initializeData">3.5. Initialize Data</a></p>
                    <p><a href="#loginNav">3.6. Login & Nav</a></p>
                    <p><a href="#dashboard">3.7. Dashboard</a></p>
        </Segment>
    </div>
)


const PortfolioNotes = () => (
    <div class="lightPadding">
        <BreadcrumbPanel />
        <Header
            content = "E-Library (DIY Kindle)"
            textAlign = "center"
            as = "h1"
        />
        <p className="subHeader">
            <span><a href="https://diy-kindle.netlify.app">Live Demo</a></span>  ||  <span><a href="https://github.com/rtanri/MyRead" target="_blank">Github Repo</a></span>
        </p>


        <Segment>
            <Header as="h2">1. Project Requirement</Header>
            <Header as="h3" id="overview">1.1. Simple Overview</Header>
            <Overview />
            <Header as="h3" id="appFunctionality">1.2. App Functionality</Header>
            <AppF12y />
            <Screenshot source="/images/dashboard/elibrary.jpg" />
            <Header as="h3" id="workflowProcess">1.3. Workflow Process</Header>
            <Workflow />
            <Header as="h3" id='starterCode'>1.4. Starter Code</Header>
            <StarterCode />
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
            <Header as="h4">3.3. Middleware</Header>
            <LorumIpsum />
        </Segment>

        <div class="projectFooter">
            <Button size="small" floated='left' as={Link} to={""} content="Back"/>
            <p className="subHeader">
                <span><a href="https://diy-kindle.netlify.app">Live Demo</a></span>  ||  <span><a href="https://github.com/rtanri/MyRead" target="_blank">Github Repo</a></span>
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



const Overview =() => (
    <div>
    <p>
    A bookshelf app that allows you to select and categorize books you 
    have read, are currently reading, or want to read. The project 
    emphasizes using React to build the application and provides an API 
    server and client library that you will use to persist information as 
    you interact with the application. 
    </p>
     </div>
 )

const AppF12y = () => (
    <div>
        <p>
        In this application, the main page displays a list of "shelves" (i.e. categories), 
        each of which contains a number of books. The three shelves are:
        </p>
        <ul>
            <li>Currently Reading,</li>
            <li>Want to Read,</li>
            <li>Read.</li>
        </ul>
        Each book has a control that lets you select the shelf for that book. 
        When you select a different shelf, the book moves there. 
        Note that the default value for the control should always be the current shelf the book is in. 
        Main page also has a link to <code>/search</code> that allows you to 
        find books to add to library.
        <br/>
    </div>
)


const Workflow = () => (
    <div>
    <p>
        If you used starter package, you can skip step 1 and 2 - straight to deciding the data & creating Redux store and connect with component.
    </p>
        <ol>
            <li>Draw all the views of app,</li>
            <li>Break each views into a Hierarchy of Components,</li>
            <li>Determine the data each component needs and the location of that data should live in,</li>
            <li>Passing data through to the components that need it,</li>
            <li>Debug and check if everything when well,</li>
            <li>Add Navigation and routing,</li>
            <li>Build the <code>/search</code> feature,</li>
        </ol>
    </div>

)

const StarterCode = () => (
    <div>
    <p>
    Starter code with the ready to use HTML and CSS - <a href="https://github.com/udacity/reactnd-project-myreads-starter" target='_blank'>Udacity GitHub link.</a>
    </p>
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


export default Project2