import React from "react";
import s from './Profile.module.css';
import Post from "./post";
import PostData from "./../index";
import Mypost from "./Mypost";



const Profile = (props) => {


    return(
    <div>
        <div>
            <Mypost posts={props.state.posts} addPosts={props.addPost}/>
        </div>
        ava
        <div className={s.item}>

        </div>


        </div>

    );
}

export default Profile;
