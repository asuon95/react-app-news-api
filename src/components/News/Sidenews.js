import React, { Component } from 'react';
import SingleSide from './SingleSide';

class Sidenews extends Component {
    //setState news to empty array
    constructor(props) {
        super(props);
        this.state = {
            topic: props.topic,
            sidenews: []
        };
    }
    
    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.state.topic.contentType}?${this.state.topic.query}&apiKey=7791c59538534dd8bec5e8190b4b0249`;
        
        // axios.get(url)
        //     .then( response => {
        //         this.setState({
        //             sidenews: response.data.articles
        //         })
        //     })
        //     .catch( err => console.log(err));

        fetch(url)
            .then( data => data.json() )
            .then( data => this.setState({ sidenews: data.articles }))
            .catch(err => console.log());
    }

    //iterates through the data
    renderItems() {
        return (
            this.state.sidenews.map( newsItem => (
                <SingleSide key={newsItem.url} newsItem={newsItem} />
            ))
        )
    }

    //component render()
    render() {
        return(
            <div>
                {this.renderItems()}
            </div>
        )
    }
}

export default Sidenews;