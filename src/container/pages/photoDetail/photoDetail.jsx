import React, { Component }from 'react'
import {connect} from 'react-redux'
import { Nav } from '../../../components/nav'
import plus from '../../../asset/icons/add-line.png'
import refresh from '../../../asset/icons/refresh-line.png'
import substract from '../../../asset/icons/subtract-line.png'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import './photoDetail.css'
import { Photo } from '../../../config/redux/action/action'
import { Loading } from '../../../components/loading'

class DetailPhoto extends Component {

    componentDidMount(){
        const {photoId,photo} = this.props
        photo(photoId)
    }

    render(){
        const {photoImg} = this.props
        return(
            <div className="container">
                <Nav />
                <main>
                    <div className="photoDetail">
                        <TransformWrapper
                            initialScale={1}
                            initialPositionX={0}
                            initialPositionY={0}
                        >
                            {({ zoomIn, zoomOut, resetTransform }) => (
                            <React.Fragment>
                                <div className="tools">
                                    <button onClick={() => zoomIn()}>
                                        <img src={plus} alt="plus" />
                                    </button>
                                    <button onClick={() => zoomOut()}>
                                        <img src={substract} alt="minus" />
                                    </button>
                                    <button onClick={() => resetTransform()}>
                                        <img src={refresh} alt="refresh" />
                                    </button>
                                </div>
                                <TransformComponent>
                                    {
                                        photoImg.length !== 0 ? 
                                            <img src={photoImg.url} alt="Photo" />
                                        : <Loading />
                                    }
                                </TransformComponent>
                            </React.Fragment>
                            )}
                        </TransformWrapper>
                    </div>
                </main>
            </div>
        )
    }
}

const reduxState = (state) => ({
    photoId: state.photoId,
    photoImg: state.photo
})

const reduxReducer = (dispatch) => ({
    photo: (id) => dispatch(Photo(id))
})

export default connect(reduxState,reduxReducer)(DetailPhoto)