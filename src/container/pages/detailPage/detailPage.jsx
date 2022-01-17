import React,{ Component , Fragment} from 'react'
import {connect} from 'react-redux'
import { Nav } from '../../../components/nav'
import imgBanner from '../../../asset/img/kumparant.png'
import imgProfile from '../../../asset/img/profile.png'
import './detailPage.css'
import { Card } from '../../../components/card'
import { Album, DataUser, ListAlbum } from '../../../config/redux/action/action'
import { store } from '../../../config/redux/store/store'
import { Loading } from '../../../components/loading'

class DetailPage extends Component {

    componentDidMount(){
        const {userId ,userData,onAlbum} = this.props
        userData(userId)
        onAlbum(userId)
    }

    componentDidUpdate() {
        const {album ,listAlbumPhoto } = this.props
        listAlbumPhoto(album.id)
    }

    onHandleCLick = (id) => {
        const { history } = this.props;
        store.dispatch({type: "PHOTOID", value: id})
        history.push('/detailPhoto')
    }

    render(){
        const {listUser ,album,listAlbum } = this.props
        return(
            <div className="container">
                <Nav />
                <main>
                    <section className="dataUser">
                        <div className="dataProfil">
                            <div className="banner">
                                <img src={imgBanner} alt="" />
                            </div>
                            <div className="profileData">
                                {
                                    listUser.length !== 0 ? 
                                        <Card img={imgProfile} nama={listUser.name} namaCompany={listUser.company.name}/>
                                    : null
                                }
                            </div>
                            <div className="profileDetail">
                                {
                                    listUser.length !== 0 ? 
                                        <div className="email">
                                            <label >User Email</label>
                                            <p>Email <span>: {listUser.email}</span></p>
                                        </div>
                                    :null
                                } 
                                {
                                    listUser.length !== 0 ? 
                                        <div className="address">
                                            <label >User Adrees</label>
                                            <div className="userAdress">
                                                <p>Street <span>: {listUser.address.street}</span></p>
                                                <p>Suite <span>: {listUser.address.suite}</span></p>
                                                <p>City <span>: {listUser.address.city}</span></p>
                                                <p>ZipCode <span>: {listUser.address.zipcode}</span></p>
                                            </div>
                                        </div>
                                    : null
                                }
                            </div>
                        </div>
                        <div className="album">
                            <div className="title">
                                {
                                    album.length !== 0 ?
                                        <h1>{album.title}</h1>
                                    :<Loading />
                                }
                            </div>
                            <div className="allAlbum">
                                {
                                    listAlbum.length !== 0 ?
                                        <Fragment>
                                            {
                                                listAlbum.map(e => {
                                                    return(
                                                        <img key={e.id} src={e.thumbnailUrl} alt="photo" onClick={() => this.onHandleCLick(e.id)} />
                                                    )
                                                })
                                            }
                                        </Fragment>
                                    : <Loading />
                                }
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
    
}

const reduxState = (state) => ({
    userId: state.userId,
    listUser : state.userData,
    album : state.album,
    listAlbum: state.listAlbum

})

const reduxReducer = (dispatch) => ({
    userData: (id) => dispatch(DataUser(id)),
    onAlbum: (id) => dispatch(Album(id)),
    listAlbumPhoto: (id) => dispatch(ListAlbum(id))
})


export default connect(reduxState,reduxReducer)(DetailPage)
