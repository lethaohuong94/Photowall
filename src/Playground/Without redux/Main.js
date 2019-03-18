import React, {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'

// const posts = [{
//     id: 0,
//     description: "cute cat !!!",
//     imageLink: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
// }, {
//     id: 1,
//     description: "cute, but angry cat",
//     imageLink: "https://www.catster.com/wp-content/uploads/2017/11/Angry-cat-growling-or-hissing-ears-back.jpg"
// }, {
//     id: 2,
//     description: "deep cat ...",
//     imageLink: "https://www.economist.com/sites/default/files/imagecache/1280-width/20171216_BKP511_0.jpg"
// }
// ]

class Main extends Component {
    constructor() {
        // super should only be used for intialization
        super()
        this.state = {
            posts: [{
                id: 0,
                description: "cute cat !!!",
                imageLink: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
            }, {
                id: 1,
                description: "cute, but angry cat",
                imageLink: "https://www.catster.com/wp-content/uploads/2017/11/Angry-cat-growling-or-hissing-ears-back.jpg"
            }, {
                id: 2,
                description: "deep cat ...",
                imageLink: "https://www.economist.com/sites/default/files/imagecache/1280-width/20171216_BKP511_0.jpg"
            }],
            screen: 'photos' //photos, addPhoto
        }
        this.removePhoto = this.removePhoto.bind(this);
        //this.navigate = this.navigate.bind(this);
        //console.log('constructor')
    }

    removePhoto(postRemoved) {
        //console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    addPhoto(postSubmitted) {
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }
    // navigate() {
    //     this.setState ({
    //         screen: 'addPhoto'
    //     })
    // }

    componentDidMount() {
        // const data = SimulatedFetchFromDatabase()
        // this.setState({
        //     posts: data
        // })
        //console.log('componentDidMount')
    }

    //triggered whenever a state is updated
    componentDidUpdate(prevProps, prevState) {
        //alert('re-render')
        console.log(prevState.posts)
        console.log(this.state)
    }

    render() {
        console.log(this.state.posts)
        return <div>
                    <Route exact path = "/" render={() => (
                    <div>
                        <Title title = {'Photowall'}/>
                        <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>
                    </div>
                    )}/>

                    <Route path = "/AddPhoto" render = {({history}) => (
                        <AddPhoto onAddPhoto={(addedPost) => {
                            this.addPhoto(addedPost)
                            history.push("/")
                        }}/>
                    )}/>
                    
                </div>;
        }

}

// function SimulatedFetchFromDatabase() {
//     return [{
//         id: 0,
//         description: "cute cat !!!",
//         imageLink: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
//     }, {
//         id: 1,
//         description: "cute, but angry cat",
//         imageLink: "https://www.catster.com/wp-content/uploads/2017/11/Angry-cat-growling-or-hissing-ears-back.jpg"
//     }, {
//         id: 2,
//         description: "deep cat ...",
//         imageLink: "https://www.economist.com/sites/default/files/imagecache/1280-width/20171216_BKP511_0.jpg"
//     }]
// }

export default Main;