const initialState = {
    "id"     : "create-wallet",
    "result" : "0",
    "params" :
        {
            "private_key" : "",
            "public_key"  : ""
        }
};

export default (state = {"wallet" : initialState }, action) => {
    switch (action.type) {
        case "SET_WALLET_SUCCESS":
            return {
                ...state,
                item : action.wallet
            };
        case"CREATE_WALLET_SUCCESS":
            return {
                ...state,
                createWalletSuccess : action.createWalletSuccess
            };
        default:
            return { item : state.wallet };
    }
};
