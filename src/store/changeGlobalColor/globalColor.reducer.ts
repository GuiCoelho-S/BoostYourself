/* eslint-disable prettier/prettier */
interface GlobalColor {
    type: 'GLOBALCOLOR'
    payload: string
}

const initialColor = '#94E7FA'

const globalColorReducer = (state: string = initialColor, action: GlobalColor) => {

    switch (action.type) {
        case 'GLOBALCOLOR':
            return action.payload
        default:
            return state
    }
}

export default globalColorReducer
