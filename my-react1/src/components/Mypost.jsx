import React from "react";
import s from "./Mypost.module.css"
import Post from "./post"
import {findAllByDisplayValue} from "@testing-library/react";
import Users from "./Users";
import {DialogsData, MessagesData} from "./Dialogs";

const Mypost = (props) =>{

    let PostElements =
        props.posts.map( p => <Post p={p.message} /> )
    return(
    <div>
        <div className={s.posts}>
        <img src="https://st.depositphotos.com/1006076/3995/i/600/depositphotos_39951147-stock-photo-spring-landscape-watercolor-flowering-trees.jpg" alt=""/>

            {PostElements}
        </div>
    </div>

    );
}

export default Mypost;
