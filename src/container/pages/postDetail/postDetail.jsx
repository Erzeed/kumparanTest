import React, { Component, Fragment } from "react";
import { Card } from "../../../components/card";
import { Nav } from "../../../components/nav";
import './postDetail.css'
import imgProfile from '../../../asset/img/profile.png'
import { Comments } from "../../../components/comment";
import {connect} from 'react-redux'
import {CommentList} from '../../../config/redux/action/action'
import { store } from '../../../config/redux/store/store'
import { Loading } from "../../../components/loading";

class postDetail extends Component {
    state={
        postData :[]
    }

    componentDidMount() {
        this.onHandlePost()
    }

    onHandleClick = (userId) => {
        const { history } = this.props;
        store.dispatch({type: "USERID", value: userId})
        history.push('/userDetail')
    }

    onHandlePost = () => {
        const {postId ,listPost} = this.props
        
        listPost.forEach(e => {
            if(e.idPost === postId){
                this.props.onHandleComments(e.idPost)
                this.setState({
                    ...this.state,
                    postData: e
                })
            }
            
        })
    }

    render(){
        const {postData} = this.state
        const {commentData} = this.props
        return(
            <div className="container">
                <Nav />
                <main>
                    <section className="postDetail">
                        <div className="post"> 
                        {
                            postData.length !== 0 ?
                            <Fragment>
                                {
                                    <Card key={postData.userId} img={imgProfile} nama={postData.name} title={postData.title} body={postData.body} clickName={() => this.onHandleClick(postData.userId)} />
                                }
                            </Fragment>
                            :null
                        } 
                        </div>
                        <div className="commentContainer">
                            {
                                commentData.length !== 0 ?
                                <Fragment>
                                    {
                                        commentData.map(e => {
                                            return(
                                                <Comments key={e.id} id={e.id} img={imgProfile} name={e.name} body={e.body}/>
                                            )
                                        })
                                    }
                                </Fragment>
                                : <Loading />
                            }
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

const reduxState = (state) => ({
    userId: state.userId,
    postId: state.postId,
    listPost: state.listPost,
    commentData: state.comment
})

const reduxReducer = (dispatch) => ({
    onHandleComments: (id) => dispatch(CommentList(id)),
})

export default connect(reduxState,reduxReducer)(postDetail)