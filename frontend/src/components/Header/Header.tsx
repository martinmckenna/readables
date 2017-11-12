import * as React from 'react';
import AppBar from 'material-ui/AppBar';

import {connect} from 'react-redux';

import {push} from 'react-router-redux';

const Header = (props : any) => {
    return (<AppBar
        titleStyle={{
        cursor: 'pointer'
    }}
        onTitleTouchTap={() => {
        props.dispatch(push('/'));
    }}
        showMenuIconButton={false}
        title="App Title Goes Here"/>);
};

const mapDispatchToProps = (dispatch : any) => {
    return {dispatch};
};
export default connect(mapDispatchToProps)(Header);