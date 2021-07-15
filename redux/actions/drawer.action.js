import { drawer_type } from 'redux/constants'

export const openDrawer = id => ({ type: drawer_type.OPEN_DRAWER, payload: id })
export const closeDrawer = (status, id = null) => ({ type: drawer_type.CLOSE_DRAWER })
