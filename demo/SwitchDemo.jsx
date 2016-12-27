/**
 * Switch Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');

const Switch = require('../src');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div
        style={{
          padding: 10,
        }}
      >
        <Switch
          checkedChildren="显示"
          unCheckedChildren="隐藏aaaaaaa"
          disabled={false}
          onChange={function () {}}
        />
      </div>
        );
  }
}

module.exports = Demo;
