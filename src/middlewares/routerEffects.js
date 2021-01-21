import { SET_LOCATION } from '../actions/routerActions';
import { setFilter } from '../actions/searchFilterActions';

function parse(qs){
    //쿼리 스트링 값을 객체로 반환함
    const queryString = qs.substr(1);
    const chunk = queryString.split('&');
    return chunk
    .map((chunk)=>chunk.split("="))
    .reduce((result,[key,value])=>({
        ...result,[key]:value
    }),{});
}

export default store=>nextRunner=>action=>{
    const {type, payload } = action;
    const result = nextRunner(action);
    if(type === SET_LOCATION){ //주소 동기화 액션에서만 작동
        const {pathname,search} = payload.location;
        if(pathname ==='/'){ //경로가 일치할때만 작동
            store.dispatch(setFilter(parse(search)))
        }
    }
    return result;
}