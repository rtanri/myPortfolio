import React, {Component} from 'react';
import {
  Grid,
  Image,
  Header,
  Segment,
  Card,
  Tab,
  Button,
} from 'semantic-ui-react'
import {NavLink, Link} from 'react-router-dom'



class Portfolio extends Component {
  render() {

    const panes = [
        { menuItem: 'Web Apps', render: () => <Tab.Pane>{<WebApp />}</Tab.Pane>},
        { menuItem: 'Mobile: ReactNative', render: () => <Tab.Pane>{<MobileApp />}</Tab.Pane>},
        { menuItem: 'Web Game', render: () => <Tab.Pane>{<Game />}</Tab.Pane>},
    ]

    return (
      <div class="dashboard">
        <Segment.Group className="contentPage">
          <BasicProfile />
          <BodyHeader />
            <Tab panes={panes} 
              menu={{pointing: true}}
            />
          <InterestHeader />
            <OtherProjects />
          <ExperimentHeader />
            <ExperimentContent />
        </Segment.Group>
      </div>
      
    )
  }
}


const MainHeader = () => (
  <Header as='h1'>
    Revin Tanri
    <br />
    <Header.Subheader>tanrirevin@gmail.com  |  +65 92779530</Header.Subheader>
  </Header>
  
)

const BodyHeader = () => (
  <Header as='h2' textAlign='center' className="headerMargin">
    <Header.Content>Programming Projects Created by Me:</Header.Content>
  </Header>
)

const InterestHeader = () => (
  <Header as='h2' textAlign='left' className="headerMargin">
    <Header.Content>First Sparks</Header.Content>
    <Header.Subheader>In past, these low-code platform & community sparked my 
    interest to HTML, CSS and JS
     </Header.Subheader>
  </Header>
)

const ExperimentHeader = () => (
  <Header as='h2' textAlign='left' className="headerMargin">
  <Header.Content>Experiment</Header.Content>
  <Header.Subheader>Quick Prototype or old projects I have done in Javascript:</Header.Subheader> 
</Header>
)

class BasicProfile extends Component {

  render(){

    return(

  <div>
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column size="tiny" width={5}>
          <Image src='images/dashboard/profile.jpg' size="medium" />
        </Grid.Column>

        <Grid.Column width={9}> 
          <MainHeader />
          <p class="profileSummary">
          Front-End Developer located in Singapore, and I enjoyed Javascript with React framework the most. 
          </p>
          <Button 
            className="contactButton"
            content="Contact"
            icon="rocket"
            as="a"
            href="mailto:tanrirevin@gmail.com"
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <Image 
            src='images/dashboard/github-image.png' 
            size='mini' 
            as='a'
            href='https://github.com/rtanri'
            target="_blank"
          />
          <br />
          <br />
          <Image 
            src='images/dashboard/linkedin.png' 
            size='mini' 
            as='a'
            href='https://www.linkedin.com/in/revintanri/'
            target="_blank"
          />
        </Grid.Column>
      </Grid.Row>

    </Grid>
    </div>
        )
      }
}


class WebApp extends Component {
  render(){
    return(
      <Segment className="minHeight"> 

      <Grid columns={3}>

      <Grid.Row>
        <Grid.Column>
          {<ProjectCard 
            link='/would-you-rather'
            imageSource = '/images/dashboard/yourather.jpg'
            title = 'Would You Rather'
            extra = 'React, Redux Store, React-Router, Login page, Custom Navbar, Semantic UI'
          />}
        </Grid.Column>

        <Grid.Column>
          {<ProjectCard
            link = "/e-library"
            imageSource = '/images/dashboard/elibrary.jpg'
            title = 'E-Library (DIY Kindle)'
            extra = 'Basic React, Data Location, Search Bar'
          />}
        </Grid.Column>

        <Grid.Column>
          {<ProjectCard 
            link = "/resto-reviewer"
            imageSource = '/images/dashboard/resto-reviewer.jpg'
            title = 'Cafe Reviewer (DIY Yelp)'
            extra = 'Google Map API, Web Responsive, Service-Worker Offline Cache'
          />}
        </Grid.Column>
      </Grid.Row>

    </Grid>
    </Segment>
    )
  }
}


const MobileApp = () => (
  <Segment className="minHeight">

    <Grid>
      <Grid.Row columns={3}>

        <Grid.Column >
            {<ProjectCard 
              link="/reactnative-flash-card"
              imageSource = '/images/dashboard/flashcard.jpg'
              title = 'Flash Card Mobile App'
              extra = 'ReactNative'
            />}
          </Grid.Column>

          <Grid.Column>
            {<ProjectCard 
              link='/reactnative-fitness-app'
              imageSource = '/images/dashboard/fitnessapp.jpg'
              title = 'Fitness Mobile App'
              extra = 'Redux, ReactNative, Calendar, Tab & Stack Nav, Ask for Location and Notification'
            />}
          </Grid.Column>

      </Grid.Row>

    </Grid>

  </Segment>

)

const Game = () => (
  <Segment className="minHeight">
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column>
            {<ProjectCard 
              link = "/frogger"
              imageSource = '/images/dashboard/frogger.jpg'
              title = 'Game: Frogger'
              extra = 'Object.Prototype, DOM, EventListener, Canvas Basic'
            />}
          </Grid.Column>

          <Grid.Column>
            {<ProjectCard 
              link = '/flip-card'
              imageSource = '/images/dashboard/flipcard.jpg'
              title = 'Game: Flip Card'
              extra = 'Web Responsive, Arrays, DOM, EventListener, Fetch API, Timer function'
            />}
          </Grid.Column>

      </Grid.Row>
    </Grid>
  </Segment>

)


const OtherProjects = () => (
  <div class="deepPadding">
  <Grid>
    <Grid.Row columns={3} >
        <Grid.Column width={4}>
          <Image src="/images/dashboard/maeclub.png" size="small" />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="a" href="https://www.maeclub.com/" target='_blank' ><span>⚙️</span> NTU Mechanical Engineering Web Admin</Header>
          <Header as="h4" className="childHeaderItem">Set new hosting name, initiate JOOMLA, plan the layout and template; and maintain the content</Header>
        </Grid.Column>
        <Grid.Column width={1} />

    </Grid.Row>

    <Grid.Row columns={2} >
        <Grid.Column width={4}>
          <Image src="/images/dashboard/shopee.png" size="small" />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="a" href='http://unbouncepages.com/onlinemp/' target='_blank' ><span>🛒</span> Shopee Market Research</Header>
          <Header as="h4" className="childHeaderItem">One page market research & personal recommendation on Shopee market expansion to Indonesia in 2015
          </Header>
        </Grid.Column>
        <Grid.Column width={4} />

    </Grid.Row >

    <Grid.Row columns={2} >
        <Grid.Column width={4}>
          <Image src="/images/dashboard/rindoucard.png" size="small" />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="a" href='http://unbouncepages.com/rindoucard/' target='_blank' className="childHeader"><span>📮</span> Unbounce Landing Page</Header>
          <Header as="h4" className="childHeaderItem">Landing page to capture potential buyers on name card printing side-hustle
          </Header>
        </Grid.Column>
        <Grid.Column width={1} />

    </Grid.Row>

  </Grid>
  </div>
)

const ExperimentContent = () => (
    <div class="marginTop">
      <Grid>
        <Grid.Row columns={3}>

          <Grid.Column>
          <Header 
            as={NavLink}
            to='/react-semanticui' 
            content="🦺 Semantic UI React"
          />
            <Header as="h4" className="childHeaderItem">Implement & tinkering Semantic UI format for REACT</Header>
          </Grid.Column>

          <Grid.Column>
            <Header as="a" href='https://jasmine-testing.netlify.app' target='_blank' className="childHeader"><span>🕵️‍♀️</span> Jasmine Testing</Header>
            <Header as="h4" className="childHeaderItem">
                Jasmine to checking the API status and proptype of objects
            </Header>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </div>
)


const ProjectCard = ({link, imageSource, title, extra}) => (
    <Link to={link}>
    <Card>
      <Image src={imageSource} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
      </Card.Content>

      <Card.Content extra>
          {extra}
      </Card.Content>
    </Card>
    </Link>
)



export default Portfolio;
