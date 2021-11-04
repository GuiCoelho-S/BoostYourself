/* eslint-disable prettier/prettier */

export function addTask(textInput: string, id: string) {
    return {
        type: 'ADDTASK',
        payload: { textInput, id }
    }
}