/* eslint-disable prettier/prettier */

interface AddTask {
    type: 'ADDTASK'
    payload: Array<object>
}

const tasksReducer = (state: Array<object> = [], action: AddTask) => {

    switch (action.type) {
        case 'ADDTASK':
            return [...state, ...action.payload]
        default:
            return state
    }
}

export default tasksReducer
