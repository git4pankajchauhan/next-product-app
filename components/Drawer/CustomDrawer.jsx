import { Close } from '@material-ui/icons'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeDrawer } from 'redux/actions/drawer.action'
import { Drawer } from './CustomDrawerStyle'

const CustomDrawer = ({ headTitle, children, id }) => {
  const containerRef = useRef(null)

  const drawer = useSelector(state => state.drawer)
  const dispatch = useDispatch()

  const onClose = e => {
    if (containerRef.current === e.target) {
      dispatch(closeDrawer())
    }
  }

  return drawer.isOpen && drawer.id === id ? (
    <Drawer ref={containerRef} onClick={onClose}>
      <div className='c-drawer-container'>
        <div className='c-drawer-head'>
          <Close onClick={() => dispatch(closeDrawer())} /> {headTitle}
        </div>
        <div className='c-drawer-children'>{children}</div>
      </div>
    </Drawer>
  ) : null
}

export default CustomDrawer
