import React, {Component} from 'react';
import {
  Segment,
  Grid,
  Image,
  Header,
} from 'semantic-ui-react'


class App extends Component {
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
  <div class="contentList">
    <Grid columns='two' divided>
      <Grid.Row>
        <Grid.Column width="4">
          <Image size="medium" src='images/wireframe/image.png' />
        </Grid.Column>

        <Grid.Column width="7">
            <Image src='images/wireframe/media-paragraph.png' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

class Projects extends Component {
  render(){
    return(
      <div class="contentList">
      <Header as='h3' textAlign='center' padded>
          <Header.Content>Past Projects in Object Oriented JS, ServiceWorker, React, ReactNative</Header.Content>
      </Header>
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
    </Grid></div>
    )
  }
}

const LandingPages = () => (
  <div class="contentList">
  <Header as='h3' textAlign='center' padded>
      <Header.Content>Landing Page for few Marketing Campaigns</Header.Content>
  </Header>
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column width="3">
        <Image src='images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width="3">
        <Image src='images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width="3">
        <Image src='images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
)


export default App;
