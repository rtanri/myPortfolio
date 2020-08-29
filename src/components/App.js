import React, {Component} from 'react'
import {
    Tab,
} from 'semantic-ui-react'

import Semantic1 from './Semantic1'
import Portfolio from './Portfolio'



export class App extends Component{
    render(){
        const panes = [
            { menuItem: 'Portfolio', render: () => <Tab.Pane>{<Portfolio />}</Tab.Pane> },
            { menuItem: 'Semantic UI', render: () => <Tab.Pane>{<Semantic1/>}</Tab.Pane> },
          ]
        return(
            <Tab panes={panes} />
        )
    }
}


export default App;