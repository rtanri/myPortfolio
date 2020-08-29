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
        { menuItem: 'Creative Projects', render: () => <Tab.Pane>{<OtherProjects />}</Tab.Pane>},
    ]

    return (
      <div class="dashboard">
        <MainHeader />
          <BasicProfile />
        <BodyHeader />
          <Tab panes={panes} 
            menu={{pointing: true}}
            // className="tab"
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
    <Header.Content>Projects</Header.Content>
  </Header>
)


const BasicProfile = () => (
  <Segment className="basicProfile">
    <Grid columns='two' divided>
      <Grid.Row stretched>
        <Grid.Column width="6">
          <Image size="medium" src='images/wireframe/image.png' />
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

      <Grid columns='three' divided>

      <Grid.Row>
        <Grid.Column>
          {<ProjectCard 
            imageSource = '/images/wireframe/image.png'
            title = 'Would You Rather'
            extra = 'React, Redux, Semantic UI'
          />}
        </Grid.Column>

        <Grid.Column>
          {<ProjectCard 
            imageSource = '/images/wireframe/image.png'
            title = 'eBook Readers (DIY Kindle)'
            extra = 'React, Redux'
          />}
        </Grid.Column>

        <Grid.Column>
          {<ProjectCard 
            imageSource = '/images/wireframe/image.png'
            title = 'Cafe Reviewer (DIY Yelp)'
            extra = 'Using Google Map API'
          />}
        </Grid.Column>
      </Grid.Row>


      <Grid.Row>
        <Grid.Column>
          {<ProjectCard 
            imageSource = '/images/wireframe/image.png'
            title = 'Jasmine Testing'
            extra = 'Using Jasmine, Gulp'
          />}
        </Grid.Column>

        <Grid.Column>
          {<ProjectCard 
            imageSource = '/images/wireframe/image.png'
            title = 'Game: Frogger'
            extra = 'Randomizer Object Creator, Object Oriented, DOM, EventListener'
          />}
        </Grid.Column>

        <Grid.Column>
          {<ProjectCard 
            imageSource = '/images/wireframe/image.png'
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
              imageSource = '/images/wireframe/image.png'
              title = 'Flash Card Mobile App'
              extra = 'ReactNative'
            />}
          </Grid.Column>

          <Grid.Column>
            {<ProjectCard 
              imageSource = '/images/wireframe/image.png'
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
        <Image src='images/wireframe/image.png' />
        <Header as='h3'>NTU MAE Club Website</Header>
      </Grid.Column>

      <Grid.Column verticalAlign='center'>
        <Image src='images/wireframe/image.png' />
        <Header as='h3'>Armapillow</Header>
      </Grid.Column>

      <Grid.Column verticalAlign='center'>
        <Image src='images/wireframe/image.png' />
        <Header as='h3'>Shopee Market Research</Header>
      </Grid.Column>

    </Grid.Row>
  </Grid>
  </Segment>
)

const ProjectCard = ({imageSource, title, extra}) => (
    <Card>
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
