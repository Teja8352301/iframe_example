// packages
import {
  Switch,
  Route
} from "react-router-dom";


// All Routes
import { routes } from "../routes";

import React, { useState } from 'react'

// style
import styles from './style.module.css'

export default class App extends React.Component {

  render(){
  return (
    <div className={styles.app_wrapper}>
          <Switch>
            {routes.map(({ component, exact, path, isProtected }, index) =>
             <Route path={path} component={component} exact={true}/>
            )}
            <Route path="*" render={()=>{return <h1>Component Not Found</h1>}} />
          </Switch>
    </div>
  );
}
}
