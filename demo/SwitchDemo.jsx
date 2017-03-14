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
      checked: false,
    };
  }

  render() {
    return (
      <div
        style={{
          padding: 10,
        }}
      >
        <h2>开启</h2>
        <Switch
          defaultChecked
          checkedChildren="显示"
          unCheckedChildren="隐藏"
          disabled={false}
        />
        <h2>关闭</h2>
        <Switch
          checkedChildren="显示"
          unCheckedChildren="隐藏"
          disabled={false}
        />
        <h2>禁用</h2>
        <Switch
          checkedChildren="显示"
          unCheckedChildren="隐藏"
          disabled
        />
        <h2>受控</h2>
        <Switch
          checked={this.state.checked}
          checkedChildren="显示"
          unCheckedChildren="隐藏"
          onChange={() => {
            this.setState({
              checked: !this.state.checked,
            });
          }}
        />
        <h2>无文字的</h2>
        <Switch
          className="kuma-switch-no-text"
          checkedChildren=""
          unCheckedChildren=""
        />
      </div>
    );
  }
}

module.exports = Demo;
