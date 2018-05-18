const initialState = {
    id: 'get-wallet-state',
    result: '0',
    params: {
        tokens: 0,
        coins: 0,
        is_node: '1',
        node_address: 'node address',
        last_transaction_id: 'unit',
        exist: 1,
    },
};

export default (state = { token : initialState }, action) => {
    switch (action.type) {
        case "SET_TOKEN_SUCCESS":
            return {
                ...state,
                item : action.token
            };
        case"SET_TOKEN_NOT_FOUND":
            return {
                ...state,
                tokenNotFount: action.tokenNotFount
            };
        case"SET_WALLET_STATE_SUCCESS":
            return {
                ...state,
                walletStateSuccess: action.walletStateSuccess
            };
        case"SET_SEND_TOKEN_SUCCESS":
            return {
                ...state,
                sendTokenSuccess: action.sendTokenSuccess
            };
        default:
            return { item : state.token };
    }
};
