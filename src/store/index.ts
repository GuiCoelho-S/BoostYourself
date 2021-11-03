import { createStore, combineReducers } from 'redux'

import globalColorReducer from './changeGlobalColor/globalColor.reducer'

const rootReducer = combineReducers({ globalColor: globalColorReducer })

const store = createStore(rootReducer)

export default store

export type RootState = ReturnType<typeof rootReducer>
