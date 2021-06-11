import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import './Conflict.css';
import MapChart from './MapChart';
import ReactTooltip from 'react-tooltip';
import {Graph, Scatterplot} from './Graph';

function ControlledTabs() {
    const [key, setKey] = useState('map');
    const [content, setContent] = useState("");
    
    return (
      <div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="map" title="Map">
            <div>
              <MapChart setTooltipContent={setContent} />
              <ReactTooltip>{content}</ReactTooltip>
            </div>
          </Tab>
          <Tab eventKey="Graph" title="Graph">
            <div>
              <Graph />
            </div>
          </Tab>
          <Tab eventKey="scatterplot" title="Scatterplot Map">
            <div>
             <Scatterplot />
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
  
  export default ControlledTabs;