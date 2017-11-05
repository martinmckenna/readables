import * as React from 'react';
import './styles/body.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import components
import Header from './components/Header/Header';
import AddPost from './components/AddPost/AddPost';
import Home from './views/Home';

// material-ui components
import RaisedButton from 'material-ui/RaisedButton';

// react-router
import {Route} from 'react-router';

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
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header/>
          <Route exact path="/" component={Home}/>
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
