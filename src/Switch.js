/**
 * Switch Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const RcSwitch = require('rc-switch');

class Switch extends RcSwitch {
    constructor(props) {
        super(props);
    }
}

Switch.defaultProps = {
    prefixCls: 'kuma-switch'
}


// http://facebook.github.io/react/docs/reusable-components.html
Switch.propTypes = {
}

Switch.displayName = "Switch";

module.exports = Switch;