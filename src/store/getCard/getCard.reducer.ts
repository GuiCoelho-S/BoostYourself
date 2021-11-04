/* eslint-disable prettier/prettier */

interface AddTask {
    type: 'ADDTASK'
    payload: object
}

interface RemoveTask {
    type: 'REMOVETASK'
    payload: string
}

type Action = AddTask | RemoveTask

const tasksReducer = (state: Array<string> = [], action: Action) => {

    switch (action.type) {
        case 'ADDTASK':

            var toDoFilter = [...state, action.payload]
            return toDoFilter

        case 'REMOVETASK':
            return state.filter((item: any) => item.id !== action.payload)

        default:
            return state
    }
}

export default tasksReducer
