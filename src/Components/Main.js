import React, {Component} from 'react';
//import Title from './Title';
import Photowall from './Photowall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
//import {removePost} from '../redux/action'
import Single from './Single'

class Main extends Component {
    // constructor() {
    //     // super should only be used for intialization
    //     super()
        
    // }

    componentDidMount() {
        //this.props.dispatch(removePost(1))
        //this.props.removePost(1)
    }

    render() {
        //console.log(this.props)
        return <div>
                    <h1>
                        <Link to="/">Photowall</Link>
                    </h1>
                    <Route exact path = "/" render={() => (
                    <div>    
                        <Photowall {...this.props}/>
                    </div>
                    )}/>

                    <Route path = "/AddPhoto" render = {({history}) => (
                        <AddPhoto {...this.props} onHistory={history}/>
                    )}/>

                    <Route path="/single/:id" render = {(params) => (
                        <Single {...this.props} {...params}/>
                    )} />
                </div>;
        }

}

export default Main;