import React, { Component } from 'react'
import _ from 'lodash'
import {
    Segment, 
    Button,
    Header,
    Icon,
    Container,
    List,
    Image,
    Modal,
    Card,
    Feed,
    Grid,
    Comment,
    Form,
    Reveal,
    Popup,
    Tab,
    Label,
    Menu
} from 'semantic-ui-react'
// import {Redirect} from 'react-router-dom'

class Semantic1 extends Component{

    handleBack = () => {
        this.props.history.push('/')
    }

    render(){

        const sizes = ['tiny', 'big']

        return (
        <div class="dashboard lightPadding">
            <Segment raised inverted color="gray">
                <Header as="h2" textAlign='center' margin-bottom='100px'>Semantic UI: Segment, Segment Group & Button</Header>
            </Segment>
                
            {/* Segment inside Container */}
            <Container>
                <Segment placeholder>
                    <Header icon>
                        <Icon name='pdf file outline' />
                        No documents are listed for this customer.
                        <div class="flex-even">
                            <Button color="brown">Add Document</Button>
                            <Button primary>Compress Document</Button>
                            <Button secondary>Delete File</Button>
                        </div>
                    </Header>    
                </Segment>
            </Container>

            {/* Button with Icons and Numbers Examples */}
            <Segment>
                <div class="flex-even">
                    <Button 
                        content = 'Like'
                        icon = 'heart'
                        label = {{ as: 'a', basic: true, content: '2,548'}}
                        labelPosition = 'right'
                    />
                    <Button 
                        content = 'Bought'
                        icon='shop'
                        label = {{ as: 'a', basic: true, content: '209'}}
                        labelPosition = 'right'
                    />
  
                    <Button 
                        icon = 'fork'
                        label = {{as : 'a', basic: true, content: 30}}
                        labelPosition = 'left'
                    />
                    <Button.Group>
                        <Button positive>Agree</Button>
                        <Button.Or />
                        <Button secondary>Disagree</Button>
                    </Button.Group>
                </div>
            </Segment>

            {/* Various Size of Segment: mini, tiny, big, large, massive, etc */}
            <div>
                {sizes.map((size) => (
                    <Segment.Group key={size} size={size}>
                        <Segment inverted secondary color='green'>It's a {size} segment</Segment>
                        <Segment tertiary textAlign="right">And it's a {size} segment, too</Segment>
                        <Segment color='teal' textAlign="center">Then, this is still {size} segment</Segment>
                    </Segment.Group>
                ))}
            </div>
            <br/>
            
            <Segment raised inverted color='gray' id="List-Examples">
                <Header as="h2" textAlign='center' margin-bottom='100px'>Semantic UI: List</Header>
            </Segment>

            <Header textAlign='center'>Examples of Lists with Icons, Images, others</Header>
            <div class='flex-even'>
                <Segment floated = 'left' > 
                    <strong>List with Shorthands</strong>
                    <List
                        items = {[
                            'Apples',
                            'Pears',
                            'Orange',
                            'Grapes',
                            'Pineapple'
                        ]}
                        // to separate with line and bigger space
                        divided relaxed
                    />
                </Segment>


                
                <Segment floated = 'left'>
                    <strong>Normal List with Icon</strong>
                    <List>
                        <List.Item>
                            <List.Icon name='volleyball ball' />
                            <List.Content>Watermelon</List.Content> 
                        </List.Item>
                        <List.Item>
                            <List.Icon name='rocket' />
                            <List.Content>Plum</List.Content> 
                        </List.Item>
                        <List.Item>Banana</List.Item>
                        <List.Item>Dragon Fruits</List.Item>
                    </List>
                </Segment>


                <Segment floated = 'left'> 
                    <strong>Shorthands with link and icon</strong>
                    <List divided>
                        <List.Item icon='users' content='Semantic UI' />
                        <List.Item icon='compass' content='Singapore'/>
                        <List.Item 
                            icon ='mail'
                            content= { <a href='mailto:revin@semantic-ui.com'>revin@semantic-ui.com</a> }
                        />
                        <List.Item 
                            icon ='mail'
                            content= { <a href='www.semantic-ui.com'>semantic-ui.com</a> }
                        />
                    </List>
                </Segment>

                <Segment floated='right'>
                        <List divided relaxed >
                            <List.Item>
                                <List.Icon name='github' size='large' verticalAlign='middle'/>
                                <List.Content>
                                    <List.Header>Semantic/youRather </List.Header>
                                    <List.Description>Updated 10mins ago</List.Description>
                                </List.Content>
                            </List.Item>

                            <List.Item>
                                
                                <List.Icon name='google drive' size='large' verticalAlign='middle'/>
                                <List.Content>
                                    <List.Header>G-drive/revintanri</List.Header>
                                    <List.Description>Updated 22mins ago</List.Description>
                                </List.Content>
                            </List.Item>

                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/matthew.png'/>
                                <List.Content>
                                    <List.Header as='a'>Library/PracticeUI</List.Header>
                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                </Segment>

                <Segment floated='right'>
                <List ordered>
                    <List.Item as='a'>Getting Started</List.Item>
                    <List.Item as='a'>Introduction</List.Item>
                    <List.Item>
                        Languages
                        <List.List as='ol'>
                            <List.Item as='li'>
                               <a href='#'>HTML</a>
                            </List.Item>
                            <List.Item as='li'>Javascript</List.Item>
                            <List.Item as='li'>CSS</List.Item>
                        </List.List>
                    </List.Item>
                    <List.Item>
                        Review
                        <List.List as='ul'>
                            <List.Item as='li'>
                                <a href='#'>Good</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href='#'>Bad</a>
                            </List.Item>
                        </List.List>
                    </List.Item>
                </List>
                </Segment>

            </div>


            <div class='mediumWidth'>
            <Header textAlign='center'>Typical Footer</Header>
                <Segment>
                    <List floated='right' horizontal>
                        <List.Item disabled href='#'>
                            © GitHub, Inc.
                        </List.Item>
                        <List.Item href='#'>Terms</List.Item>
                        <List.Item href='#'>Privacy</List.Item>
                        <List.Item href='#'>Contact</List.Item>
                        </List>

                        <List horizontal>
                        <List.Item href='#'>About Us</List.Item>
                        <List.Item href='#'>Jobs</List.Item>
                    </List> 
                </Segment>

                <Header textAlign='center'>List with Floating Button</Header>
                <Segment>
                <List divided verticalAlign='middle'>
                    <List.Item>
                    <List.Content floated='right'>
                        <Button>Add</Button>
                    </List.Content>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
                    <List.Content>Lena</List.Content>
                    </List.Item>
                    <List.Item>
                    <List.Content floated='right'>
                        <Button>Add</Button>
                    </List.Content>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
                    <List.Content>Lindsay</List.Content>
                    </List.Item>
                    <List.Item>
                    <List.Content floated='right'>
                        <Button>Add</Button>
                    </List.Content>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/mark.png' />
                    <List.Content>Mark</List.Content>
                    </List.Item>
                    <List.Item>
                    <List.Content floated='right'>
                        <Button>Add</Button>
                    </List.Content>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
                    <List.Content>Molly</List.Content>
                    </List.Item>
                </List>
                </Segment>
            </div>
            
            {/* Modal Examples */}
            <div>

                <Segment raised inverted color='gray'>
                    <Header as="h2" textAlign='center' margin-bottom='100px'>Semantic UI: Modal</Header>
                </Segment>

                <Header as ='h3' textAlign='center'>Normal Modal</Header>
                
                <div>
                    {/* Shorthanded Modal */}
                    <Modal
                        trigger={<Button>Shorthand Modal</Button>}
                        header='Reminder!'
                        content='Call Benny regarding the report submission'
                        actions={['Snooze', {key: 'done', content:'Done', positive: true}]}
                        size='small'
                        // size: mini, tiny, small, large, fullscreen
                    />

                </div>
            </div> <br/>

            {/* Card Examples */}
            <div>

                <Segment raised inverted color='gray'>
                    <Header as="h2" textAlign='center' margin-bottom='100px'>Semantic UI: Card</Header>
                </Segment>
                {/* Small Cards with 2 options */}

                <Header as ='h3' textAlign='center'>Cards with 2 op; Card with Feed list; 2 Items per row</Header>
                <div class="flex-even">
                <Card.Group itemsPerRow={2}>

                    <Card>
                        <Card.Content>
                            <Image
                            floated='right'
                            size='tiny'
                            src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
                            />
                            <Card.Header>Steve Sanders</Card.Header>
                            <Card.Meta>Friends of Elliot</Card.Meta>
                            <Card.Description>
                                Steve wants to add you to the group <strong>best friends</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                            </div>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Image
                                floated='right'
                                size='tiny'
                                src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                            />
                            <Card.Header>Jessica Bright</Card.Header>
                            <Card.Meta>New User</Card.Meta>
                            <Card.Description>Jessica want to add you in the group <strong>musicians</strong></Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                            </div>
                        </Card.Content>
                    </Card>

                    {/* Card with Group of Feed */}
                    <Card color="green" inverted>
                        <Card.Content>
                            <Card.Header>Title - Card with Feeds</Card.Header>
                        </Card.Content>
                        <Card.Content>
                        <Feed>
                            <Feed.Event>
                                <Feed.Label image='https://react.semantic-ui.com/images/avatar/large/molly.png' />
                                <Feed.Content>
                                    <Feed.Date content='1 day ago' />
                                    <Feed.Summary>
                                        You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                    </Feed.Summary>
                                </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                            <Feed.Label image='https://react.semantic-ui.com/images/avatar/large/molly.png' />
                            <Feed.Content>
                                <Feed.Date content='4 days ago' />
                                <Feed.Summary>
                                You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                                </Feed.Summary>
                            </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                            <Feed.Label image='https://react.semantic-ui.com/images/avatar/large/molly.png' />
                            <Feed.Content>
                                <Feed.Date content='4 days ago' />
                                <Feed.Summary>
                                You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                                </Feed.Summary>
                            </Feed.Content>
                            </Feed.Event>
                        </Feed>

                        </Card.Content>
                        <Card.Content extra>
                            <Icon name='user' /> 3 New Updates
                        </Card.Content>
                    </Card>

                    <Card
                        href='#List-Examples'
                        header='Links to Semantic UI:List'
                        meta='Card with Link'
                        description='Once you click this, it will goes to #id=List-Examples.'
                    />
                </Card.Group>

                </div>
            </div>
            <br />

            <Semantic2/>
         <div class="backButton">              
         <Button 
            color = 'green'
            content = 'Home'
            icon = 'arrow left'
            onClick = {this.handleBack}
            size="small"
        />
        </div>
    </div>


    )}
}


class Semantic2 extends Component{

    render(){

        const columns1 = _.times(20, (i) => (
            <Grid.Column key={i}>
              <Image src='/images/wireframe/image.png' />
            </Grid.Column>
          ))

          const panes = [
            { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
            { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
            { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
          ]

          const panesWithIcon = [
            {
              menuItem: {key: 'users', icon: 'users', content: 'Users'},
              render: () => <Tab.Pane> Tab 1 - List of Song Artist</Tab.Pane>,
            },
            {
              menuItem: (
                <Menu.Item key='messages'>
                  Messages<Label>20</Label>
                </Menu.Item> 
              ),
              render: () => <Tab.Pane>Tab 2 - List of Chloe Ting Workout Plan and Videos</Tab.Pane>
            },
          ]
        

        return (
          
    <div>
            <Segment raised inverted color="gray">
                <Header as="h2" textAlign='center' margin-bottom='100px'>Semantic UI: Grid</Header>
            </Segment>
            
            <Segment>
              <Header textAlign='center' >Basic Grid</Header>
                <Grid>{columns1}</Grid>
            </Segment>

            {/* Grid with divider each rows */}
            <Segment>
            <Header textAlign='center'>Grid have divider between columns - Setting in Grid </Header>
                 <Grid columns={3} divided > {/* Set the number of columns as skeleton; columns='two' also can */}
                    <Grid.Row>
                        <Grid.Column>
                            <Image src='images/wireframe/media-paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='images/wireframe/media-paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='images/wireframe/media-paragraph.png' />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Image src='images/wireframe/media-paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='images/wireframe/media-paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='images/wireframe/media-paragraph.png' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>


            {/* Grid with diff Columns amound each rows */}
            <Segment>
            <Header textAlign='center'>Grid have divider between columns - Setting in Grid.Row </Header>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                    <Grid.Column>
                        <Image src='images/wireframe/paragraph.png' />
                    </Grid.Column>
                    <Grid.Column>
                         <Image src='images/wireframe/paragraph.png' />
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Image src='images/wireframe/paragraph.png' />
                        </Grid.Column>
                    <Grid.Column>
                            <Image src='images/wireframe/paragraph.png' />
                    </Grid.Column>
                        <Grid.Column>
                                <Image src='images/wireframe/paragraph.png' />      
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

                
            {/* Grid Celled */}
            <Segment>
                <Header textAlign='center'>Grid Celled Normal or Internally with Column Width</Header>
                <Grid celled='internally'>
                    <Grid.Row>
                    <Grid.Column width={4}>
                        <Reveal animated='rotate'>
                            <Reveal.Content visible>
                                <Image src='images/wireframe/image.png' />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <Image size = 'small' src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
                            </Reveal.Content>
                        </Reveal>
                        
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Image src='images/wireframe/centered-paragraph.png' />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Image src='images/wireframe/media-paragraph.png' />
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column width={3}>
                        <Image src='images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Image src='images/wireframe/paragraph.png' />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Image src='images/wireframe/image.png' />
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            {/* Grid with Stretch */}
            <Segment>
            <Header textAlign='center'>Grid with Stretch</Header>
            <Grid columns={3} divided>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Reveal animated='rotate'>
                            <Reveal.Content visible>
                                <Image src='images/wireframe/image.png' />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <Image src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
                            </Reveal.Content>
                        </Reveal>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        </Segment>
                        <Segment>
                            <Image src='images/wireframe/paragraph.png' />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>1</Segment>
                        <Segment>2</Segment>
                        <Segment>3</Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Segment>

            {/* Grid with responsive width */}
            <Segment>
            <Header textAlign='center'>Responsive Width: Doubling and Stackable</Header>
            <Grid>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid>

        <Grid>
          <Grid.Column largeScreen={2} widescreen={1}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column largeScreen={2} widescreen={1}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column largeScreen={2} widescreen={1}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column largeScreen={2} widescreen={1}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid>
            </Segment>

            {/* Comments with Comment Form */}
            <Segment>
                <Header textAlign='center'>Comments with Input Form</Header>
                <Comment.Group>
        <Header as='h3' dividing>
          Comments
        </Header>

        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/mark.png' />
          <Comment.Content>
            <Comment.Author as='a'>Elliot Fu</Comment.Author>
            <Comment.Metadata>
              <div>Yesterday at 12:30AM</div>
            </Comment.Metadata>
            <Comment.Text>
              <p>This has been very useful for my research. Thanks as well!</p>
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
              <Comment.Content>
                <Comment.Author as='a'>Jenny Hess</Comment.Author>
                <Comment.Metadata>
                  <div>Just now</div>
                </Comment.Metadata>
                <Comment.Text>Elliot you are always so right :</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Comment>

        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
          <Comment.Content>
            <Comment.Author as='a'>Joe Henderson</Comment.Author>
            <Comment.Metadata>
              <div>5 days ago</div>
            </Comment.Metadata>
            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Form reply>
          <Form.TextArea />
          <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Group>
            </Segment>

            {/* Reveal Pictures and Pop-up */}
            <Segment>
                    <Header textAlign='center'> Reveal 2nd Picture with Pop-up Feature</Header>
                    <Popup
                    trigger ={
                        <Reveal animated='fade' >
                            <Reveal.Content visible>
                                <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
                            </Reveal.Content>
                        </Reveal>
                        }
                    content = "This picture will change into different girl picture"
                    mouseLeaveDelay={800}  
                    inverted
                    />

                    <br/>
                    <Popup 
                        trigger={ 
                            <Button 
                                content = 'Add her photos'
                                icon = 'add'
                                label = {{ as: 'a', basic: true, content: '2,548 saved'}}
                                labelPosition = 'right'
                            />
                        }
                        content="When you click this, you will add this girl's photo to your phone"
                        basic
                    />
                    <br />
                    Find this girl?
                    <Popup 
                        trigger={ 
                            <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
                        }
                        content="Where can you find this missing girl?"
                        basic
                    />
            </Segment>

            {/*Tabs */}
            <Segment>
                <Header textAlign='center'>Tabs with vertical setup</Header>
                <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
                <br />

                <Header textAlign='center'>Tabs with horizontal setup</Header>
                <Tab panes={panes} />
                <br />

                <Header textAlign='center'>Tabs with Notifs & Icons</Header>
                <Tab panes ={panesWithIcon} />
                <br />

        </Segment>

            
    </div>
        )
    }
}

export default Semantic1;

