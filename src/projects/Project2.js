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

                <Header as="h4">3. Coding Phase</Header>
                    <p><a href="#apiFunction">3.1. API Functions</a></p>
                    <p><a href="#app">3.2. App Component</a></p>
                    <p><a href="#book">3.3. Book</a></p>
                    <p><a href="#category">3.4. Category</a></p>
                    <p><a href="#booksearch">3.5. Book Search</a></p>
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
            <span><a href="https://diy-kindle.netlify.app" target="_blank">Live Demo</a></span>  ||  <span><a href="https://github.com/rtanri/MyRead" target="_blank">Github Repo</a></span>
        </p>

        {/* 1st Section */}
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

        {/* 2nd section */}
        <Segment>
            <Header as="h2">2. App Design</Header>
            <Header as="h3">2.1. View</Header>
            <p>If you use starter code, you can use or follow the inbuild home view from there.</p>
            <Header as="h3" id="componentHierarcy">2.2. Component Hierarcy</Header>
            <p>This step is to determine hieracy of components resides in a view. For example in home page, it contained:
            <ul>
                <li>Book</li>
                <li>BookSearch</li>
                <li>Category</li>
            </ul>
            <Screenshot source="/images/elibrary/component-hie.jpg"/>
            </p>
        </Segment>

        {/* 3rd section */}
        <Segment>
            <Header as="h2">3. Coding Phase</Header>

            <Header as="h3" id="apiFunction">3.1. API Function</Header>
            <p>The first step is to create a set of function wrappers to our async data requests. If you used the starter code, the <code>BooksAPI.js</code> file consist of:
                <ul>
                    <li>get(bookId)</li> 
                    <li>getAll</li> 
                    <li>update(book, shelf)</li> 
                    <li>search(query)</li> 
                </ul>
            These functions will be imported in related component where in this case: <code>App.js</code> and <code>BookSearch.js</code>
            </p>
            <Screenshot source="/images/elibrary/api.jpg"/>


            <Header as="h3" id="app">3.2. App Component</Header>
            <p>Invoke <code>getAll()</code> and <code>updateShelf()</code> with 'Book' state to save the current book on shelves. In this App component, 
            we also import Routing for <strong>home</strong> and <strong>search</strong> page 
            - located at <code>/src/App.js</code> <br/>
            You can find dashboard component code in my <a href="https://github.com/rtanri/youRather/blob/master/src/components/Dashboard.js" target="_blank">Github Page </a>.
            </p>
            <Screenshot source="/images/elibrary/bookApp.jpg"/>


            <Header as="h3" id="book">3.3. Book Component</Header>
            <p>Consist of book layout and dropdown shelf categories - located at <code>/components/Book.js</code> <br/>
            </p>
            <Screenshot source="/images/elibrary/book.jpg"/>


            <Header as="h3" id="category">3.4. Category Component</Header>
            <p>In this component import the <code>Book.js</code> and allocate them based on the book properties <code>this.props.updateShelf</code>. For the "none" category will be deleted from all shelves. - located at <code>/components/Category.js</code> <br/>
            You can find dashboard component code in my <a href="https://github.com/rtanri/MyRead/blob/master/src/components/Category.js" target="_blank">Github Page </a>.
            </p>
            

            <Header as="h3" id="booksearch">3.5. BookSearch Component</Header>
            <p>User can find book searched by on title and author typed in the search bar - located at <code>/src/components/Dashboard.js</code> <br/>
            You can find dashboard component code in my <a href="https://github.com/rtanri/MyRead/blob/master/src/components/BookSearch.js" target="_blank">Github Page </a>.
            </p>

        </Segment>

        <div class="projectFooter">
            <Button size="small" floated='left' as={Link} to={""} content="Back"/>
            <p className="subHeader">
                <span><a href="https://diy-kindle.netlify.app">Live Demo</a></span>  ||  <span><a href="https://github.com/rtanri/MyRead" target="_blank">Github Repo</a></span>
            </p>
        </div>
    </div>
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
            <li>Break each views into a Hierarchy of Components (Book, BookSearch, Category),</li>
            <li>Determine the data each component needs and the location of that data should live in,</li>
            <li>Connect BookAPI in <code>/src/App.js</code>,</li>
            <li>Work on the display & layout of each book in <code>/components/Book.js</code>,</li>
            <li>Method to find new book based on title & author in <code>/components/BookSearch.js</code>,</li>
            <li>Setting for book allocation based on certain category in <code>/components/Category.js</code>,</li>
            <li>Add Navigation and routing,</li>
            <li>Always Debug and check if everything when well,</li>
        </ol>
    </div>

)

const StarterCode = () => (
    <div>
    <p>
    Starter code with ready-to-use HTML, React app and Book API - <a href="https://github.com/udacity/reactnd-project-myreads-starter" target='_blank'>Udacity GitHub link.</a>
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