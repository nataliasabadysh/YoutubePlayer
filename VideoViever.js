import React, { Component } from 'react';


export default class VideoViever extends Component {
    render() {
        const { url } = this.props;
        console.log(url)
        return (
            <video 
                width="320" 
                height="240" 
                controls
             >
            <source src={url} type="video/mp4" />   
         </video> 
        );
    }
}