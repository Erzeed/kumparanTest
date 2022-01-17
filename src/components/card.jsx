import React from 'react'

export const Card = ({nama,namaCompany,title,body,img,id,click,clickName}) => {
    return (
        <div className="card" id={id} onClick={click}>
            <div className="cardheader">
                <div className="profile">
                    <img src={img} alt="profile" />
                </div>
                <div className="name">
                    <p onClick={clickName}>{nama}</p>
                    <small>{namaCompany}</small>
                </div>
            </div>
            <div className="cardBody">
                <div className="title">
                    <p>{title}</p>
                </div>
                <div className="body">
                    <p>{body}</p>
                </div>
            </div>
        </div>
    )
}