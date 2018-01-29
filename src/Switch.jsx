/**
 * Switch Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

import RcSwitch from 'rc-switch';
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Switch extends React.Component {
  render() {
    const { loading, className, disabled, ...otherProps } = this.props;
    return (
      <RcSwitch
        {...otherProps}
        className={classnames({
          [`${this.props.prefixCls}-loading`]: !!loading,
          [`${this.props.prefixCls}-no-text`]: !this.props.checkedChildren && !this.props.unCheckedChildren,
          [className]: !!className,
        })}
        disabled={disabled || loading}
      />
    );
  }
}

Switch.defaultProps = {
  ...RcSwitch.defaultProps,
  prefixCls: 'kuma-switch',
  loading: false,
};

// http://facebook.github.io/react/docs/reusable-components.html
Switch.propTypes = {
  ...RcSwitch.propTypes,
  loading: PropTypes.bool,
};

Switch.displayName = 'Switch';

module.exports = Switch;
