/* eslint-disable prettier/prettier */
import { createStore, combineReducers } from 'redux'

import globalColorReducer from './changeGlobalColor/globalColor.reducer'
import tasksReducer from './getCard/getCard.reducer'

const rootReducer = combineReducers({
    globalColor: globalColorReducer,
    globalTasks: tasksReducer
})

const store = createStore(rootReducer)

export default store

export type RootState = ReturnType<typeof rootReducer>
