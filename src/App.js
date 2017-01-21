import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';
import Tabs from './Tabs';
import ManifestTable from './ManifestTable';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
      <div>
        <Navbar />
        <Tabs />
        
      </div>
    </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// ReactDOM.render(
//   <Table />,
//   document.getElementById('table')
// );
