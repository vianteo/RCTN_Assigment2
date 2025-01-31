
// statefull / Class
import React from 'react';
export default class Experience extends React.Component {
    constructor() {
        super()
        this.state = {
            Experience: 'This is my Experience page'
        }
    }
render() {
    return (
        <h1>This is my Experience page yang pakai stafefullclass</h1>
    )
}
}