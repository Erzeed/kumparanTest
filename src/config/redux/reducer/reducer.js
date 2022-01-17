const initialState = {
    listPost: [],
    userData: [],
    userId: '',
    postId: '',
    comment:[],
    album:[],
    listAlbum: [],
    photoId:'',
    photo: []
}

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case "LISTPOST":
            return {
                ...state,
                listPost : action.value
            }
        case "USERDATA":
            return {
                ...state,
                userData : action.value
            }
        case "USERID":
            return {
                ...state,
                userId : action.value
            }
        case "POSTID":
            return {
                ...state,
                postId : action.value
            }
        case "COMMENTS":
            return {
                ...state,
                comment : action.value
            }
        case "ALBUM":
            return {
                ...state,
                album : action.value
            }
        case "LISTALBUM":
            return {
                ...state,
                listAlbum : action.value
            }
        case "PHOTOID":
            return {
                ...state,
                photoId : action.value
            }
        case "PHOTO":
            return {
                ...state,
                photo : action.value
            }
    
        default:
            return state
    }
}

export default reducer