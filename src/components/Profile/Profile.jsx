import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.dribbble.com/users/925347/screenshots/6281667/image.png"/>
            </div>
            <div>ava+description
            </div>

            <div>
                <MyPosts/>
            </div>
        </div>
    );
}

export default Profile;