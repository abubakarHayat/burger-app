import React from 'react'
import Aux from '../../hoc/Aux'
import Toolbar from '../UI/Nav/Toolbar/Toolbar'
import classes from './Layout.module.css'
const layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )
}

export default layout
