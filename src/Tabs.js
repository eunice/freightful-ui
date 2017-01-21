import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import FontIcon from 'material-ui/FontIcon';
import ManifestTable from './ManifestTable';
import Analytics from './Analytics';
import Customers from './Customers';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}


// <Tab
//   label="onActive"
//   data-route="/home"
//   onActive={handleActive}
// >
//   <div>
//     <h2 style={styles.headline}>Tab Three</h2>
//     <p>
//       This is a third example tab.
//     </p>
//   </div>
// </Tab>

const TabsEl = () => (
  <Tabs>
    <Tab label="Manifests" >
      <div>
        <h2 style={styles.headline}>Manifests</h2>
      </div>
      <ManifestTable />
    </Tab>

    <Tab label="Customers" >
      <div>
        <h2 style={styles.headline}>Customers</h2>
      </div>
      <ManifestTable />
    </Tab>

    <Tab label="Analytics" >
      <div>
        <h2 style={styles.headline}>Analytics</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>

    <Tab
      label="Notifications"
      >
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>

  </Tabs>
);

export default TabsEl;
