import api from '../Api';
import {wallets} from "../apiJson/respons";

const getWalletState = {
    id: 'get-wallet-state',
    params: {
        wallet_name: '',
        public_key: '',
    },
};

const setTokenNotFount = () => (dispatch) => {
    dispatch({
        type: 'SET_TOKEN_NOT_FOUND',
        tokenNotFount: true,
    });
};

const setWalletStateSuccess = () => (dispatch) => {
    dispatch({
        type: 'SET_WALLET_STATE_SUCCESS',
        walletStateSuccess: true,
    });
};

const setSendTokenSuccess = () => (dispatch) => {
    dispatch({
        type: 'SET_SEND_TOKEN_SUCCESS',
        sendTokenSuccess: true,
    });
};

export const setDefaultTokenValues = ()=>(dispatch)=>{
    dispatch({
        type: 'SET_TOKEN_NOT_FOUND',
        tokenNotFount: false,
    });
    dispatch({
        type: 'SET_WALLET_STATE_SUCCESS',
        walletStateSuccess: false,
    });
    dispatch({
        type: 'SET_SEND_TOKEN_SUCCESS',
        sendTokenSuccess: false,
    });
};

export const walletState = (params = {}) => (dispatch) => {
    setTimeout(()=>{
        getWalletState.params = params;
        if(wallets[params.private_key]){
            dispatch(setWalletStateSuccess());
            dispatch({
                type: 'SET_TOKEN_SUCCESS',
                token: wallets[params.private_key]
            });
        }else{
            dispatch(setTokenNotFount());
        }
    }, 1000);
    return;

    const response = api.Post('/', params);
    response.then((success) => {
        dispatch({
            type: 'SET_TOKEN_SUCCESS',
            wallet: success,
        })
    }, (error) => {
        dispatch({
            type: 'SET_TOKEN_ERROR',
            wallet: error,
        })
    });
};

export const sendToken = (params = {}) => (dispatch) => {
    setTimeout(()=>{
        dispatch(setSendTokenSuccess());
    }, 1000);
    return;

    const response = api.Post('/', params);
    response.then((success) => {
        dispatch({
            type: 'SET_SEND_TOKEN_SUCCESS',
            sendToken: true,
        })
    }, (error) => {
        dispatch({
            type: 'SET_TOKEN_ERROR',
            sendToken: false,
        })
    });
};