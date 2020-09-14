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

const BreadcrumbPanel = () => (
    <Breadcrumb>
      <Breadcrumb.Divider icon="left arrow" />
      <Breadcrumb.Section 
        as= {Link}
        to= {"/"}
      >Home</Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section>Restaurant Reviewer</Breadcrumb.Section>
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
                    <p><a href="#starterCode">1.4. Starter Code  </a></p>

                <Header as="h4">2. Work Process</Header>
                    <p><a href="#googleAPI">2.1. Google Map API</a></p>
                    <p><a href="#flexImg">2.2. Flex Images</a></p>
                    <p><a href="#responsive">2.3. Responsive Design</a></p>
                    <p><a href="#serviceWorker">2.4. SW with Cache API</a></p>
        </Segment>
    </div>
)



const PortfolioNotes = () => (
    <div class="lightPadding">
        <BreadcrumbPanel />
        <Header
            content = "Singapore Restaurant Reviewer"
            textAlign = "center"
            as = "h1"
        />
        <p className="subHeader">
            <span>Demo with localhost:8000 via <a href="https://github.com/rtanri/restaurant-review-app" target="_blank">Github Repo</a></span>
        </p>

        <Segment>
            <Header as="h2">1. Project Requirement</Header>
            <Header as="h3" id="overview">1.1. Simple Overview</Header>
            <Overview />
            <Header as="h3" id="appFunctionality">1.2. App Functionality</Header>
            <AppF12y />
            <Screenshot source="/images/dashboard/resto-reviewer.jpg" />
            <Header as="h3" id="workflowProcess">1.3. Workflow Process</Header>
            <Workflow />
            <Header as="h3" id='starterCode'>1.4. Starter Code</Header>
            <StarterCode />
        </Segment>

        <Segment>
            <Header as="h2">2. Work Process</Header>

            <Header as="h3" id="googleAPI">2.1. Google Map API</Header>
            <p>
            Connect the Map and Position-Marker with Google Map API by create your personal GoogleMap Key, insert the API Key, and code the JS API (if needed) into your files:
                <ul>
                    <li><code>index.html</code> - find my code detail in <a href="https://github.com/rtanri/restaurant-review-app/blob/master/index.html" target="_blank">Github</a>,</li>
                    <li><code>restaurant.html</code> - find my code detail in <a href="https://github.com/rtanri/restaurant-review-app/blob/master/restaurant.html" target="_blank">Github</a>,</li>
                    <li><code>main.js</code> - find my code detail in <a href="https://github.com/rtanri/restaurant-review-app/blob/master/js/main.js" target="_blank">Github</a>,</li>
                    <li><code>restaurant_info.js</code> - find my code detail in <a href="https://github.com/rtanri/restaurant-review-app/blob/master/js/restaurant_info.js" target="_blank">Github</a>,</li>
                    <li><code>dbhelper.js</code> - find my code detail in <a href="https://github.com/rtanri/restaurant-review-app/blob/master/js/dbhelper.js" target="_blank">Github</a>,</li>
                </ul>
            </p>
            
            <Screenshot source="/images/resto/home-map.jpg"/> 
                <p class="pictureDetail">Map API result in Homepage</p>
            <Screenshot source="/images/resto/resto-detail.jpg"/> 
                <p class="pictureDetail">Map API result in Restaurant Detail Page</p>

            
            <Header as="h3" id="flexImg">2.2. Flex Restaurant List</Header>
            <p>From the starter code, list of restaurant is not in flex sequence. I add flex setting in #restaurant-list CSS with code sample below 
            - located at <code>/css/styles.css</code> <br/>
            <Screenshot source="/images/resto/flex-image.jpg"/>
            </p>
            


            <Header as="h3" id="responsive">2.3. Responsive Design</Header>
            <p>Starting small, i created few breakpoints according to where the layout naturally needed it. Here are breakpoints that I chose:
                <ul>
                    <li>min-width 460px</li> 
                    <li>min-width 640px, and max-width 950px</li> 
                    <li>min-width 950px</li> 
                </ul>
            You can find my responsive CSS code in my <a href="https://github.com/rtanri/restaurant-review-app/blob/master/css/responsive.css" target="_blank">Github</a>.
            </p>
            <Screenshot source="/images/resto/home-responsive.jpg"/>
            <p class="pictureDetail">Homepage in different screen sizes</p>
            <Screenshot source="/images/resto/resto-responsive.jpg"/>
            <p class="pictureDetail">Restaurant page in different screen sizes</p>


            <Header as="h3" id="serviceWorker">2.4. SW with Cache API</Header>
            <p>
            Create and register service worker to allow cache to be saved and website can be accessed again while no internet, 2 files added:
                <ul>
                    <li><code>/sw.js</code> - find my code detail in <a href="https://github.com/rtanri/restaurant-review-app/blob/master/sw.js" target="_blank">Github</a>,</li>
                    <li><code>/js/sw_register.js</code> - find my code detail in <a href="https://github.com/rtanri/restaurant-review-app/blob/master/js/sw_register.js" target="_blank">Github</a>,</li>
               </ul>
            </p>
            <Image src="/images/resto/sw.jpg" size="huge" bordered/><br/>
            <p class="pictureDetail">Successfully registered SW with cache for offline mode</p>

        </Segment>


        <div class="projectFooter">
            <Button size="small" floated='left' as={Link} to={""} content="Back"/>
            <p className="subHeader">
                <span>Demo with localhost:8000 via <a href="https://github.com/rtanri/restaurant-review-app" target="_blank">Github Repo</a></span>
            </p>
        </div>

    </div>
)


const Overview =() => (
    <div>
    <p>
    It's a mobile-ready web application with Google Map API. Some Assets like images were cached for offline use on different sized displays and accessible for screen 
    reader use.
    </p>
     </div>
 )

const AppF12y = () => (
    <div>

        <ul>
            <li><strong>Fully responsive.</strong> All of the page elements were usable and visible in any viewport, 
                including desktop, tablet, and mobile displays. Images didnot overlap, and page elements wrapped when
                 the viewport is too small.</li> <br/>
            <li><strong>Make the site accessible.</strong> ALT attributes are 
                present and descriptive for images. Added screen-reader-only attributes when appropriate to add useful 
                supplementary text. Used semantic markup and aria attributes when semantic markup is not feasible.</li> <br />
            <li><strong>Cache the static site for offline use.</strong> Using Cache API and a ServiceWorker, cache the data for the website 
                so that any page (including images) that has been visited is accessible offline.</li> <br/>
        </ul>
    </div>
)

const Workflow = () => (
    <div>
        <ol>
            <li>Get MapBox API Key to use Google map on your page,</li>
            <li>Get on the map on the screen,</li>
            <li>Manage the images flex design,</li>
            <li>Convert the provided site to use a responsive design and accesability features,</li>
            <li>Add a ServiceWorker script</li> 
        </ol>
    </div>

)

const StarterCode = () => (
    <div>
        <p>
        Starter code with ready-to-use HTML, and Restaurant Image - <a href="https://github.com/udacity/mws-restaurant-stage-1" target='_blank'>Udacity GitHub link.</a>
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

export default Project3