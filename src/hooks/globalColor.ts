/* eslint-disable prettier/prettier */
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

const useGlobalColor = () => {
    const globalColor = useSelector((state: RootState) => state.globalColor)

    return globalColor
}

export default useGlobalColor