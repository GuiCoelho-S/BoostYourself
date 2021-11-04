/* eslint-disable prettier/prettier */

export function addTask(textInput: string, id: string) {
    return {
        type: 'ADDTASK',
        payload: { textInput, id }
    }
}

export function removeTask(id: string | undefined) {
    return {
        type: 'REMOVETASK',
        payload: id
    }
}