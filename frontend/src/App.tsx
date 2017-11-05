import * as React from 'react';
import './styles/body.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import components
import Category from './components/Category/Category';
import Posts from './components/Posts/Posts';
import Header from './components/Header/Header';
import AddPost from './components/AddPost/AddPost';

// material-ui components
import RaisedButton from 'material-ui/RaisedButton';

class App extends React.Component {
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
    let styles : Object = {
      position: 'fixed',
      bottom: '5%',
      left: '3%'
    };
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header/>
          <div className="homepage-wrapper">
            <Category/>
            <Posts/>
            <RaisedButton
              onClick={this.openModal}
              style={styles}
              label="Add Post"
              secondary={true}/>
          </div>
          <AddPost closeModal={this.closeModal} openState={this.state.modalOpen}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
