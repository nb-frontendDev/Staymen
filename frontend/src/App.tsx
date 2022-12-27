/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react'
import SideBar from './SideBar';
import * as Css from './sideBarStyle';

function App() {
  return (
	  <div style={{ display:'flex'}}>
		  <div>
			  <SideBar />
		  </div>
		  <div css={Css.sectionContainer}>aaa</div>
		  
	  </div>
    
  );
}

export default App;
