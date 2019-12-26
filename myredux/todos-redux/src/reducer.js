import { VisibilityFilters, SET_VISIBILITY_FILTER } from './actions'

const initialState = {
  todos: [],
  visibilityFilter: VisibilityFilters.SHOW_ALL
}

// reducer
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return { ...sate, visibilityFilter: action.filter }
    default:
      return state
  }
}