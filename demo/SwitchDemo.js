/**
 * Switch Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

let Switch = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div style={{
                padding: 10
            }}>
                <Switch checkedChildren="显示" unCheckedChildren="隐藏" disabled={false} />
            </div>
        );
    }
};

module.exports = Demo;
