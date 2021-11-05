/* eslint-disable prettier/prettier */

export function addNote(data: object) {
    return {
        type: "ADDNOTE",
        payload: data
    }
}

export function removeNote(id: string | undefined) {
    return {
        type: "REMOVENOTE",
        payload: id
    }
}