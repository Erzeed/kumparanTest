import axios from 'axios'
const postApi = 'https://jsonplaceholder.typicode.com/posts'
const userApi = 'https://jsonplaceholder.typicode.com/users'
const commentApi = 'https://jsonplaceholder.typicode.com/posts'
const album = 'https://jsonplaceholder.typicode.com/albums'
const listAlbumPhoto = 'https://jsonplaceholder.typicode.com/photos?albumId='
const photo = 'https://jsonplaceholder.typicode.com/photos'


export const dataListPost = () =>  (dispatch) => {
    return new Promise((resolve , reject) => {
        axios.get(postApi).then(res => {
            const {data} = res
            const dataPost = []
            Object.keys(data).forEach((e,i)=> {
                
                axios.get(`${userApi}/${data[e].userId}`).then(a => {
                    const dataUsr = a.data
                    dataPost.push({
                        userId: data[e].userId ,
                        idPost: data[e].id,
                        name : dataUsr.id === data[e].userId ? dataUsr.name:null,
                        nameCompany: dataUsr.id === data[e].userId ? dataUsr.company.name:null,
                        title: data[e].title,
                        body: data[e].body
                    })
                })
            })
            setTimeout(() => {
            resolve(dataPost)
            dispatch({type: "LISTPOST", value: dataPost})
            },1500)
        }).catch( err => {
            reject(err)
        })
    })
}

export const CommentList = (id) => (dispatch) => {
    return new Promise((resolve , reject) => {
        axios.get(`${commentApi}/${id}/comments`).then(res => {
            const {data} = res
            resolve(data)
            dispatch({type: "COMMENTS", value: data})
        }).catch( err => {
            reject(err)
        })
    })
}

export const DataUser = (id) => (dispatch) => {
    return new Promise((resolve , reject) => {
        axios.get(`${userApi}/${id}`).then(res => {
            const {data} = res
            resolve(data)
            dispatch({type: "USERDATA", value: data})
        }).catch( err => {
            reject(err)
        })
    })
}

export const Album = (id) => (dispatch) => {
    return new Promise((resolve , reject) => {
        axios.get(`${album}/${id}`).then(res => {
            const {data} = res
            resolve(data)
            dispatch({type: "ALBUM", value: data})
        }).catch( err => {
            reject(err)
        })
    })
}

export const ListAlbum = (id) => (dispatch) => {
    return new Promise((resolve , reject) => {
        axios.get(`${listAlbumPhoto}${id}`).then(res => {
            const {data} = res
            resolve(data)
            dispatch({type: "LISTALBUM", value: data})
        }).catch( err => {
            reject(err)
        })
    })
}

export const Photo = (id) => (dispatch) => {
    return new Promise((resolve , reject) => {
        axios.get(`${photo}/${id}`).then(res => {
            const {data} = res
            resolve(data)
            dispatch({type: "PHOTO", value: data})
        }).catch( err => {
            reject(err)
        })
    })
}