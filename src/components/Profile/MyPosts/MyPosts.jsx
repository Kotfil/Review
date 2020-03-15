import React from "react";
import s from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div>
            MyPosts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
            <Post message='Hello My name is Fil' likesCount='534'/>
            <Post message='I am 27 old'  likesCount='1532'/>


            </div>
        </div>
    );
}

export default MyPosts;