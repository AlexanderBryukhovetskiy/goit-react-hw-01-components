import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";


export const FriendListItem = ({avatar, name, isOnline}) => {
    const classNames = [css['status']];
    if (isOnline) classNames.push(css['isOnline']);

    return  <div className={css.item}>
                <span 
                className={classNames.join(" ")}
                >
                </span>

                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </div>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}
