/**
 * Created by abajuk on 27.06.2017.
 */
export default function(state=null,action){
    switch(action.type) {
        case 'USER_SELECTED':
            return action.payload;
            break;
    }
    return state;
}