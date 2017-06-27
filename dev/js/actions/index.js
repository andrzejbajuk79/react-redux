/**
 * Created by abajuk on 27.06.2017.
 */
export const selectUser = (user) => {
    console.log('klinales :',user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }

};

