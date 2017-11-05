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
    modalOpen: false,
    selectedCategory: '',
    selectedPost: ''
  };
  closeModal = () : void => {
    this.setState({modalOpen: false});
  }
  openModal = () : void => {
    this.setState({modalOpen: true});
  }
  changeSelectedCategory = (newCategory : string) : void => {
    this.setState({selectedCategory: newCategory});
  }
  changeSelectedPost = (newPost : string) : void => {
    this.setState({selectedPost: newPost});
  }
  render() {
    console.log(this.state);
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header/>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (<Home
              changeCategory={this.changeSelectedCategory}
              changePost={this.changeSelectedPost}/>)}/>
            <Route
              exact
              path="/:category"
              render={() => (<SingleCategory whichCategory={this.state.selectedCategory}/>)}/>
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
