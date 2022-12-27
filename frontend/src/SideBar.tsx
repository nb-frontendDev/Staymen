/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react'
import * as Css from './sideBarStyle';

const SideBar = () => {
  return (
      <div css={Css.sideBarContainer}>
          <div css={Css.pageListContainer}>
              <h5>PAGES</h5>
              <div>
                  <h6>Pages</h6>
                  <ul>
                      <li>Profile</li>
                      <li>Settings</li>
                      <li>Blank Page</li>
                  </ul>  
              </div>
              <div>
                  <h6>Tasks</h6>
              </div>
              <div>
                  <h6>Calender</h6>
              </div>
              <div>
                  <h6>Auth</h6>
                  <ul>
                      <li>Sign In</li>
                      <li>Sign up</li>
                      <li>Change Password</li>
                  </ul>  
              </div>
          </div>
          <div css={Css.pageListContainer}>
              <h5>ELEMENTS</h5>
              <div>
                  <ul>
                      <li>Profile</li>
                      <li>Settings</li>
                      <li>Blank Page</li>
                  </ul>  
              </div>
              <div>
                  <div>Tasks</div>
              </div>
              <div>
                  <div>Calender</div>
              </div>
              <div>
                  <div>Auth</div>
                  <ul>
                      <li>Sign In</li>
                      <li>Sign up</li>
                      <li>Change Password</li>
                  </ul>  
              </div>
         </div>
      </div>
      
  )
}

export default SideBar