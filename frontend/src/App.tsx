import * as React from 'react';
import './styles/body.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Category from './components/Category/Category';
import Posts from './components/Posts/Posts';
import Header from './components/Header/Header';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header/>
          <div className="homepage-wrapper">
            <Category/>
            <Posts/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
