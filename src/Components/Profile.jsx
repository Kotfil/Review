import React from "react";
import s from './Profile.module.css'

const Profile = () =>
{
    return (
        <div className={s.content}>
            <div>
                <img src="https://cdn.dribbble.com/users/925347/screenshots/6281667/image.png"/>
            </div>
            <div>ava+description
            </div>
            <div>MyPosts
            </div>
            <div>New Post
            </div>
            <div>
                <div>
                    Post1
                </div>
                <div>
                    Post2
                </div>
            </div>
        </div>
    );
}

export default Profile;