import React, { Component } from 'react';
import NewSingle from './NewSingle';
import './News.css';

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

    componentDidUpdate(prevProps, prevState) {
        if ( prevProps.topic !== this.props.topic ) {
            console.log('Hello');
        }
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
            <div> 
                <h2 className="title">{this.state.topic.title}</h2>
                <div className="row containerFlex">
                    {this.renderItems()}
                </div>
            </div>
        )
    }
}

export default News;
