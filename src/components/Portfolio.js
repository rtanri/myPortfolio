import React, {Component} from 'react';
import {
  Grid,
  Image,
  Header,
  Segment,
  Card,
  Tab,
} from 'semantic-ui-react'


class Portfolio extends Component {
  render() {

    const panes = [
        { menuItem: 'Web Apps', render: () => <Tab.Pane>{<WebApp />}</Tab.Pane>},
        { menuItem: 'Mobile Apps', render: () => <Tab.Pane>{<MobileApp />}</Tab.Pane>},
        { menuItem: 'Low-code Projects', render: () => <Tab.Pane>{<OtherProjects />}</Tab.Pane>},
    ]

    return (
      <div class="dashboard">
        <MainHeader />
          <BasicProfile />
        <BodyHeader />
          <Tab panes={panes} 
            menu={{pointing: true}}
          />
      </div>
      
    )
  }
}


const MainHeader = () => (
  <Header as='h2' textAlign='center'>
    <Header.Content>Revin Tanri's Portfolio</Header.Content>
    <Header.Subheader>tanrirevin@gmail.com  |  +65 92779530</Header.Subheader>
  </Header>
)

const BodyHeader = () => (
  <Header as='h2' textAlign='center'>
    <Header.Content>Programming Projects</Header.Content>
  </Header>
)


const BasicProfile = () => (
  <Segment className="basicProfile">
    <Grid columns='two' divided>
      <Grid.Row stretched>
        <Grid.Column width="6">
          <Image src='images/dashboard/profile.jpg' />
        </Grid.Column>

        <Grid.Column width="10">
          <Segment>
              <Image src='images/wireframe/media-paragraph.png' />
          </Segment>
          <Segment>
              <Image src='images/wireframe/media-paragraph.png' />
          </Segment>
          
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Segment>
)


class WebApp extends Component {
  render(){
    return(
      <Segment> 

      <Grid columns='three'>

      <Grid.Row>
        <Grid.Column>
          {<ProjectCard 
            link = "https://wouldyourathertoeat.netlify.app/"
            imageSource = '/images/dashboard/yourather.png'
            title = 'Would You Rather'
            extra = 'React, Redux, Semantic UI'
          />}
        </Grid.Column>

        <Grid.Column>
          {<ProjectCard
            link = "https://diy-kindle.netlify.app" 
            imageSource = '/images/dashboard/elibrary.png'
            title = 'E-Library (DIY Kindle)'
            extra = 'React, Redux'
          />}
        </Grid.Column>

        <Grid.Column>
          {<ProjectCard 
            link = "https://revin-resto-review.netlify.app"
            imageSource = '/images/dashboard/cafereviewer.jpeg'
            title = 'Cafe Reviewer (DIY Yelp)'
            extra = 'Using Google Map API'
          />}
        </Grid.Column>
      </Grid.Row>


      <Grid.Row>
        <Grid.Column>
          {<ProjectCard 
            link = 'https://jasmine-testing.netlify.app'
            imageSource = '/images/dashboard/jasmine.jpeg'
            title = 'Jasmine Testing'
            extra = 'Using Jasmine, Gulp'
          />}
        </Grid.Column>

        <Grid.Column>
          {<ProjectCard 
            link = "https://revin-frogger-game.netlify.app"
            imageSource = '/images/dashboard/frogger.png'
            title = 'Game: Frogger'
            extra = 'Randomizer Object Creator, Object Oriented, DOM, EventListener'
          />}
        </Grid.Column>

        <Grid.Column>
          {<ProjectCard 
            link = 'https://revin-flipcard-game.netlify.app'
            imageSource = '/images/dashboard/flipcard.png'
            title = 'Game: Flip Card'
            extra = 'Using Web Responsive, Object Oriented, DOM, EventListener, Fetch API'
          />}
        </Grid.Column>
      </Grid.Row>

    </Grid>
    </Segment>
    )
  }
}


const MobileApp = () => (
  <Segment>

    <Grid>
      <Grid.Row columns={3}>

        <Grid.Column >
            {<ProjectCard 
              imageSource = '/images/dashboard/flashcard.jpeg'
              title = 'Flash Card Mobile App'
              extra = 'ReactNative'
            />}
          </Grid.Column>

          <Grid.Column>
            {<ProjectCard 
              imageSource = '/images/dashboard/fitnessapp.jpeg'
              title = 'Fitness Mobile App'
              extra = 'ReactNative'
            />}
          </Grid.Column>

      </Grid.Row>

    </Grid>

  </Segment>

)


const OtherProjects = () => (
  <Segment>

  <Grid>
    <Grid.Row columns={3} >

      <Grid.Column verticalAlign='center'>
        {<ProjectCard 
              imageSource = '/images/dashboard/maeclub.png'
              title = 'NTU MAE Club Website'
              extra = 'Set new hosting name, initiate JOOMLA, plan the layout and template; and maintain the content'
              link = 'https://www.maeclub.com/'
            />}
      </Grid.Column>

      <Grid.Column verticalAlign='center'>
        {<ProjectCard 
              link = 'http://unbouncepages.com/onlinemp/'
              imageSource = '/images/dashboard/shopee.png'
              title = 'Shopee Market Research'
              extra = 'One Page Project on market research, USP and competitive analytics on Shopee expansion in Indonesia in 2015'
            />}
      </Grid.Column>

      <Grid.Column verticalAlign='center'>
        {<ProjectCard 
              link = 'http://unbouncepages.com/rindoucard/'
              imageSource = '/images/dashboard/rindoucard.png'
              title = 'RindouCard Printing'
              extra = 'Landing page to capture potential buyers during university side-hustling'
            />}
      </Grid.Column>

    </Grid.Row>
  </Grid>
  </Segment>
)

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
