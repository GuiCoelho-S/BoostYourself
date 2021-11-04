/* eslint-disable prettier/prettier */

interface AddTask {
    type: 'ADDTASK'
    payload: object
}

const tasksReducer = (state: Array<string> = [], action: AddTask) => {

    switch (action.type) {
        case 'ADDTASK':

            var toDoFilter = [...state, action.payload]

            console.log(toDoFilter)
            return toDoFilter
        default:
            return state
    }
}

export default tasksReducer
