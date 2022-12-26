/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react'
import SideBar from './SideBar';
import * as Css from './sideBarStyle';

function App() {
  return (
	  <div style={{ display:'flex'}}>
		  <div css={Css.sideBarContainer}>
			  <SideBar />
		  </div>
		  <div css={Css.mainContainer}>aaa</div>
		  
	  </div>
    
  );
}

export default App;
