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
import Semantic1 from './Semantic1'


class Portfolio extends Component {
  render() {

    const panes = [
        { menuItem: 'Web Apps', render: () => <Tab.Pane>{<WebApp />}</Tab.Pane>},
        { menuItem: 'Mobile: ReactNative', render: () => <Tab.Pane>{<MobileApp />}</Tab.Pane>},
        { menuItem: 'Web Game', render: () => <Tab.Pane>{<Game />}</Tab.Pane>},
        // { menuItem: 'Low-code Projects', render: () => <Tab.Pane>{<OtherProjects />}</Tab.Pane>},
    ]

    return (
      <div class="dashboard">
        <Segment.Group className="contentPage">
          {/* <MainHeader /> */}
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
            link = "https://wouldyourathertoeat.netlify.app/"
            imageSource = '/images/dashboard/yourather.jpg'
            title = 'Would You Rather'
            extra = 'React, Redux, Semantic UI'
          />}
        </Grid.Column>

        <Grid.Column>
          {<ProjectCard
            link = "https://diy-kindle.netlify.app" 
            imageSource = '/images/dashboard/elibrary.jpg'
            title = 'E-Library (DIY Kindle)'
            extra = 'React, Redux'
          />}
        </Grid.Column>

        <Grid.Column>
          {<ProjectCard 
            link = "https://revin-resto-review.netlify.app"
            imageSource = '/images/dashboard/cafereviewer.jpg'
            title = 'Cafe Reviewer (DIY Yelp)'
            extra = 'Using Google Map API'
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
              imageSource = '/images/dashboard/flashcard.jpg'
              title = 'Flash Card Mobile App'
              extra = 'ReactNative'
            />}
          </Grid.Column>

          <Grid.Column>
            {<ProjectCard 
              imageSource = '/images/dashboard/fitnessapp.jpg'
              title = 'Fitness Mobile App'
              extra = 'ReactNative'
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
              link = "https://revin-frogger-game.netlify.app"
              imageSource = '/images/dashboard/frogger.jpg'
              title = 'Game: Frogger'
              extra = 'Randomizer Object Creator, Object Oriented, DOM, EventListener'
            />}
          </Grid.Column>

          <Grid.Column>
            {<ProjectCard 
              link = 'https://revin-flipcard-game.netlify.app'
              imageSource = '/images/dashboard/flipcard.jpg'
              title = 'Game: Flip Card'
              extra = 'Using Web Responsive, Object Oriented, DOM, EventListener, Fetch API'
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
          <Header as="h4" className="childHeaderItem">One Page Project on market research, USP and competitive 
          analytics on Shopee expansion in Indonesia in 2015'
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
        {/* work on Semantic Page Redirect */}
            <h3 class='childHeader'><a href={<Semantic1/>} target="_blank"><span>🦺</span> Semantic UI React</a></h3>
            <h4>Implement & tinkering Semantic UI format for REACT</h4>
        </Grid.Column>
        <Grid.Column>
          <h3 class='childHeader'><a href='https://jasmine-testing.netlify.app' target="_blank"><span>🕵️‍♀️</span> Jasmine Testing</a></h3>
          <h4>Using Jasmine to checking the API status and proptype of objects</h4>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

// {<ProjectCard 
//   link = 'https://jasmine-testing.netlify.app'
//   imageSource = '/images/dashboard/jasmine.jpeg'
//   title = 'Jasmine Testing'
//   extra = 'Using Jasmine, Gulp'
// />}

const ProjectCard = ({link, imageSource, title, extra}) => (
    <Card
      as='a' href={link} target='_blank'
    >
      <Image src={imageSource} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
      </Card.Content>

      <Card.Content extra>
          {extra}
      </Card.Content>
    </Card>
)



export default Portfolio;
