import React from "react";
import s from './post.module.css';

const Post = (props) => {


    return (

        <div className={s.item}>
            <img
                src="https://st.depositphotos.com/1006076/3995/i/600/depositphotos_39951147-stock-photo-spring-landscape-watercolor-flowering-trees.jpg"
                alt=""/>
                {props.p}
        </div>
    );
}


export default Post;