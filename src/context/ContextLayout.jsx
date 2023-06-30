import ContextProvider from './Context'
import { useOutlet } from 'react-router-dom';

const ContextLayout = () => {
    const outlet = useOutlet();
    return (
        <ContextProvider>
            {outlet}
        </ContextProvider>
    )
}

export default ContextLayout

