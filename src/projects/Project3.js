import React, {Component} from 'react'
import { 
    Segment,
    Header,
    Image,
    Rail,
} from 'semantic-ui-react'


class Project3 extends Component {

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
            content = "Restaurant Reviewer"
            textAlign = "center"
            as = "h1"
        />
        <p className="subHeader"><span><a href="https://revin-resto-review.netlify.app">Live Demo</a>
                </span>  ||  <span>
                <a href="https://github.com/rtanri/restaurant-review-app" target="_blank">Github Repo</a></span></p>


        <Segment>
            <Header as="h3">1. Project Requirement</Header>
            <Header as="h4">1.1. Simple Overview</Header>
            <Overview />
            <Header as="h4">1.2. App Functionality</Header>
            <AppF12y />
            <Screenshot source="/images/dashboard/cafereviewer.jpg" />
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
            <Header 
                as="a" 
                href="https://revin-resto-review.netlify.app" 
                target='_blank' className="childHeader">
                3. Live Demo <span>✨</span>
            </Header>
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
    For the Restaurant Reviews projects, you will incrementally convert a 
    static webpage to a mobile-ready web application. In Stage One, you will 
    take a static design that lacks accessibility and convert the design to 
    be responsive on different sized displays and accessible for screen 
    reader use. You will also begin converting this to a Progressive Web 
    Application by caching some assets for offline use.
    </p>
     </div>
 )

const AppF12y = () => (
    <div>
        <p>
        In this game you have a Player and Enemies (bugs). 
        The goal of the player is to reach the water, without 
        colliding into any one of the enemies.
        </p>
        <ul>
            <li><strong>Make the provided site fully responsive.</strong> All of the page elements should be usable and visible in any viewport, 
                including desktop, tablet, and mobile displays. Images shouldn't overlap, and page elements should wrap when
                 the viewport is too small to display them side by side.</li> <br/>
            <li><strong>Make the site accessible.</strong> Using what you've learned about web accessibility, ensure that alt attributes are 
                present and descriptive for images. Add screen-reader-only attributes when appropriate to add useful 
                supplementary text. Use semantic markup where possible, and aria attributes when semantic markup is not 
                feasible.</li> <br />
            <li><strong>Cache the static site for offline use.</strong> Using Cache API and a ServiceWorker, cache the data for the website 
                so that any page (including images) that has been visited is accessible offline.</li> <br/>
        </ul>
    </div>
)

const Workflow = () => (
    <div>
    <p>
        This project clone the starter code from this <a href="https://github.com/udacity/mws-restaurant-stage-1" target="_blank">Udacity repository</a>.
    </p>
        <ol>
            <li>Get MapBox API Key to use Google map on your page,</li>
            <li>Get on the map on the screen,</li>
            <li>Convert the provided site to use a responsive design,</li>
            <li>Implement accessibility features in the site HTML,</li>
            <li>Add a ServiceWorker script</li> 
        </ol>
    </div>

)


const Screenshot = ({source}) => (
    <Image size="large" src={source} />
)


export default Project3