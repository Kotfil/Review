import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (



        <div className={s.item}>
            <img src='https://steemitimages.com/DQmZdFatQjDY6Qo6heBkwL8jWTHqEYXzGEVhCfXjpeR41Bt/Untitled-2.png'/>
            {props.message}

            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>


    );
}

export default Post;