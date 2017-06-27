/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "andrzej",
            last: "bajuk",
            job : 'programista',
            "thumbnail": "http://dummyimage.com/167x180.png/dddddd/000000"
        },
        {
            id: 2,
            first: "Janek",
            last: "Wasilenko",
            job : 'dyrektor',
            "thumbnail": "http://dummyimage.com/183x234.png/5fa2dd/ffffff"

        },
        {
            id: 3,
            first: "gosia",
            last: "Porankiewicz",
            job : 'kierowca',
            "thumbnail": "http://dummyimage.com/221x179.png/ff4444/ffffff"

        }
    ]
}
