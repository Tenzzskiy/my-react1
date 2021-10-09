import React from "react";
import s from './post.module.css';
import avatar from "./img/avatar.png"
const Post = (props) => {


    return (

        <div className={s.item}>
            <img
                src={avatar}
                alt=""/>
                {props.p}
        </div>
    );
}


export default Post;