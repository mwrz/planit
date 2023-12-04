import { PropsWithChildren, createContext, useContext, useReducer } from 'react';
import { tokenReducer } from './tokenReducer';

interface TickTickTokenContextProps {
    tickTickToken: string | null;
    updateTickTickToken: (newToken: string) => void;
}

const initialToken = localStorage.getItem("token");
const TickTickTokenContext = createContext<TickTickTokenContextProps>({ tickTickToken: initialToken, updateTickTickToken: (newToken: string) => { } });


export function TickTickTokenProvider({ children }: PropsWithChildren) {
    const [token, dispatch] = useReducer(tokenReducer, initialToken);

    const updateTickTickToken = (newToken: string) => {
        dispatch({
            type: "changed",
            token: newToken
        });
    };

    const value = {
        tickTickToken: token,
        updateTickTickToken
    }
    return (
        <TickTickTokenContext.Provider value={value}>
            {children}
        </TickTickTokenContext.Provider>
    );
}

export function useTickTickToken() {
    return useContext(TickTickTokenContext);
}