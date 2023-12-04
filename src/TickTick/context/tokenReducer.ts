interface Action {
    type: 'changed';
    token: string | null;
}

export function tokenReducer(state: string | null, action: Action) {
    switch (action.type) {
        case 'changed': {
            if (state === action.token || !!!action.token) {
                return state;
            } else {
                localStorage.setItem("token", action.token as string);
                return action.token;
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}