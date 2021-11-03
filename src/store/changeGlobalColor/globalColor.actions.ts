/* eslint-disable prettier/prettier */

export function changeGlobalColor(color: string) {
    return {
        type: 'GLOBALCOLOR',
        payload: [color]
    }
}

