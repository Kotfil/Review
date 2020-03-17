import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.dribbble.com/users/925347/screenshots/6281667/image.png"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
                </div>

            </div>

    );
}

export default ProfileInfo;