import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    //setState news to empty array
    constructor(props) {
        super(props);
        this.state = {
            topic: props.topic,
            news: []
        };
    }
    
    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.state.topic.contentType}?${this.state.topic.query}&apiKey=7791c59538534dd8bec5e8190b4b0249`;
        fetch(url)
            .then(data => data.json())
            .then(data => this.setState({ news: data.articles })) 
            .catch(err => console.log(err));           
    }

    //iterates through the data
    renderItems() {
        return (
            this.state.news.map( newsItem => (
                <NewSingle key={newsItem.url} newsItem={newsItem} />
            ))
        )
    }

    //component render()
    render() {
        return(
            <div className="row">
                {this.renderItems()}
            </div>
        )
    }
}

export default News;
