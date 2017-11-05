import * as React from 'react';
import './styles/body.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import components
import Header from './components/Header/Header';
import AddPost from './components/AddPost/AddPost';

// import views
import Home from './views/Home';
import SinglePost from './views/SinglePost';
import SingleCategory from './views/SingleCategory';

// material-ui components
import RaisedButton from 'material-ui/RaisedButton';

// react-router
import {Route, Switch} from 'react-router';

class App extends React.Component < any,
any > {
  state = {
    modalOpen: false
  };
  closeModal = () : void => {
    this.setState({modalOpen: false});
  }
  openModal = () : void => {
    this.setState({modalOpen: true});
  }
  render() {
    console.log(this.state);
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" render={() => (<Home/>)}/>
            <Route exact path="/:category" render={() => (<SingleCategory/>)}/>
            <Route path="/:category/:postId" component={SinglePost}/>
          </Switch>
          <RaisedButton
            onClick={this.openModal}
            className="addPost-btn"
            label="Add Post"
            secondary={true}/>
          <AddPost closeModal={this.closeModal} openState={this.state.modalOpen}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
