import PropTypes from "prop-types";
// import clsx from "clsx";
import css from "./FriendListItem.module.css";


export const FriendListItem = ({ friendData: {avatar, name, isOnline}}) => {
    const classNames = ["status"];
    if (isOnline) classNames.push("isOnline");

    return  <li className={css.item}>
                <span 
                className={classNames.join(" ")}
                >
                </span>

                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>
}

FriendListItem.propTypes = {
    friendData: PropTypes.func,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
    name: PropTypes.string
}
