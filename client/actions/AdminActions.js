import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

export function signIn(email, pass) {
    return { type: types.SIGNIN_ADMIN, email, pass }
}

