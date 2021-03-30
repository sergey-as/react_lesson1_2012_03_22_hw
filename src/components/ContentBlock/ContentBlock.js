// import React from "react";
import React, {Component} from 'react';

export class ContentBlock extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h4>{this.props.title}:</h4>
                <h5>{this.props.body}</h5>
            </div>
        );
    }
}

// export default ContentBlock;