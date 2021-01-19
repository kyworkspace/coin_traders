import createActions from '../api-redux-pack/createActions';

const {create} = createActions('users');

export function createUser(data,onComplete){
    return create(
        data,
        {},
        {
            notification : {success : '회원가입 , 성공적'},
            onSuccess : onComplete,
        }
    )
}