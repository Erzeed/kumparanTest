import React, { Component ,Fragment} from "react";
import './dashboard.css'
import {connect} from 'react-redux'
import Profile from '../../../asset/img/profile.png'
import { Card } from "../../../components/card";
import { dataListPost } from "../../../config/redux/action/action";
import { Nav } from "../../../components/nav";
import { store } from '../../../config/redux/store/store'
import { Loading } from "../../../components/loading";

class dashboard extends Component {
    state={
        userData:[]
    }

    componentDidMount(){
        this.props.dataListPost()
    }


    onHandleClick = (id,userId) => {
        const { history } = this.props;
        store.dispatch({type: "POSTID", value: id})
        store.dispatch({type: "USERID", value: userId})
        history.push('/postDetail')
    }




    render(){
        const {listPost} = this.props
        return(
            <div className="container">
                <Nav />
                <main>
                    <section className="post">
                        {   
                            listPost.length !== 0 ?
                                <Fragment>
                                    {
                                        listPost.map(e => {
                                            
                                            return(
                                                <Card key={e.idPost} id={e.idPost} img={Profile} click={() => this.onHandleClick(e.idPost ,e.userId)} nama={e.name} namaCompany={e.nameCompany} title={e.title} body={e.body}/>
                                            )
                                        })
                                    }
                                </Fragment>
                                : 
                                <Loading />
                        }
                    </section>
                </main>
            </div>
        )
        
    }
    
}

const reduxState = (state) => ({
    listPost: state.listPost,
    userData: state.userData
})

const reduxReducer = (dispatch) => ({
    dataListPost: () => dispatch(dataListPost())
})

export default connect(reduxState,reduxReducer)(dashboard)