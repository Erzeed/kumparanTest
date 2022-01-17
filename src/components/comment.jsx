import React from 'react'

export const Comments = ({id,img,name,body}) => {
    return(
        <div className="comments" id={id}>
            <div className="commentHeader">
                <div className="commentImg">
                    <img src={img} alt="" />
                </div>
                <div className="commentName">
                    <p>{name}</p>
                </div>
            </div>
            <div className="commentBody">
                <p>{body}</p>
            </div>
        </div>
    )
}
