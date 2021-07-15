import { drawer_type } from 'redux/constants'

const initialState = {
  isOpen: false,
  id: null,
}

export default function DrawerReducer(state = initialState, { type, payload }) {
  if (type === drawer_type.OPEN_DRAWER) {
    return {
      ...state,
      isOpen: true,
      id: payload,
    }
  }
  if (type === drawer_type.CLOSE_DRAWER) {
    return {
      ...state,
      ...initialState,
    }
  }
  return state
}
