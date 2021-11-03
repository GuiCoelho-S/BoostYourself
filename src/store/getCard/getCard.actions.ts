/* eslint-disable prettier/prettier */

export function addTask(text: string) {
    return {
        type: 'ADDTASK',
        payload: [{ text }]
    }
}