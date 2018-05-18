import api from '../Api';
import {wallets} from "../apiJson/respons";

const initialState = {
    "id"     : "create-wallet",
    "result" : "0",
    "params" :
        {
            "private_key" : "",
            "public_key"  : ""
        }
};

const setCreateWalletSuccess = ()=>(dispatch)=>{
    dispatch({
        type: 'CREATE_WALLET_SUCCESS',
        createWalletSuccess: true
    });
};
export const setDefaultWalletsValues = ()=>(dispatch)=>{
    dispatch({
        type: 'CREATE_WALLET_SUCCESS',
        createWalletSuccess: false
    });
};

export const createWallet = (params = {}) => (dispatch) =>{
    const key = Object.keys(wallets)[Math.floor(Math.random() * 16)];
    initialState.params.private_key = key;
    initialState.params.public_key = "public_" + key;
    dispatch({
        type: 'SET_WALLET_SUCCESS',
        wallet: initialState
    });
    dispatch(setCreateWalletSuccess());
    return;
    const response = api.Post('/', params);
    response.then((success) => {
        dispatch({
            type: 'SET_WALLET_SUCCESS',
            wallet: success,
        })
    }, (error) => {
        dispatch({
            type: 'SET_WALLET_SUCCESS',
            wallet: error,
        })
    });
};


export const getWalletKeys = (wallet) => (dispatch) => {
    dispatch({
        type: 'SET_WALLET_KEYS_SUCCESS',
        wallet,
    })
};

export const getWalletState = (wallet) => (dispatch) => {
    dispatch({
        type: 'SET_WALLET_STATE_SUCCESS',
        wallet,
    })
};