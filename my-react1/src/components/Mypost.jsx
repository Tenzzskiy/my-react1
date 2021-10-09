import React from "react";
import s from "./Mypost.module.css"
import Post from "./post"
import {findAllByDisplayValue} from "@testing-library/react";
import Users from "./Users";
import {DialogsData, MessagesData} from "./Dialogs";

const Mypost = (props) =>{

    let PostElements =
        props.posts.map( p => <Post p={p.message} /> )

    let addPost= () =>{
        let text = newPostElement.current.value;
        props.addPosts(text);
        newPostElement.current.value = '';
    }
    let newPostElement = React.createRef();


    return(
    <div>

        <div className={s.posts}>
        <img src="https://st.depositphotos.com/1006076/3995/i/600/depositphotos_39951147-stock-photo-spring-landscape-watercolor-flowering-trees.jpg" alt=""/>
        </div>
            <div className={s.align}>
                <div>

                <input  className={s.input} type="text" ref={newPostElement}/>

                </div>
                <button className={s.button} onClick={() => {
                    addPost()
                }}> Add post</button>

            {PostElements}
            </div>

    </div>

    );
}

export default Mypost;
