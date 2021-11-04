/* eslint-disable prettier/prettier */

interface AddTask {
    type: 'ADDNOTE'
    payload: object
}

interface RemoveTask {
    type: 'REMOVENOTE'
    payload: string
}

type Action = AddTask | RemoveTask

const notesReducer = (state: Array<string> = [], action: Action) => {

    switch (action.type) {
        case 'ADDNOTE':
            return [...state, action.payload]

        case 'REMOVENOTE':
            return state.filter((item: any) => item.id !== action.payload)

        default:
            return state
    }
}

export default notesReducer
