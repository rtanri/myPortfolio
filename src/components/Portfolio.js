import React, {Component} from 'react';
import {
  Grid,
  Image,
  Header,
  Segment
} from 'semantic-ui-react'


class Portfolio extends Component {
  render() {
    return (
      <div class="dashboard">
        <MainHeader />
        <BasicProfile />
        <Projects />
        <LandingPages />
      </div>
      
    )
  }
}

const MainHeader = () => (
  <Header as='h2' textAlign='center' padded>
    <Header.Content>Revin Tanri's Portfolio</Header.Content>
    <Header.Subheader>tanrirevin@gmail.com  |  +65 92779530</Header.Subheader>
  </Header>
)

const BasicProfile = () => (
  <Segment>
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

class Projects extends Component {
  render(){
    return(
      <Segment> 
      <Header as='h3' textAlign='center'>
          <Header.Content>Past Projects in Object Oriented JS, ServiceWorker, React, ReactNative</Header.Content>
      </Header>
      <br />
      <Grid columns='three' divided>
      <Grid.Row>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
      </Grid.Row>
  
      <Grid.Row>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Segment>
    )
  }
}

const LandingPages = () => (
  <Segment>
  <Header as='h3' textAlign='center' padded>
      <Header.Content>Landing Page for few Marketing Campaigns</Header.Content>
  </Header>
  <br />
  <Grid>
    <Grid.Row columns={3} >
      <Grid.Column verticalAlign='center'>
        <Image src='images/wireframe/image.png' />
        <Header as='h3'>Armapillow</Header>
      </Grid.Column>

      <Grid.Column verticalAlign='center'>
        <Image src='images/wireframe/image.png' />
        <Header as='h3'>Shopee Market Research</Header>
      </Grid.Column>
      
      <Grid.Column verticalAlign='center'>
        <Image src='images/wireframe/image.png' />
        <Header as='h3'>Prochem Tutor</Header>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Segment>
)


export default Portfolio;
