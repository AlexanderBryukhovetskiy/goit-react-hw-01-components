import PropTypes from "prop-types";
import { FriendListItem } from "./friendListItem/FriendListItem";
import css from "../friendList/FriendList.module.css";

export const FriendList = ({ friends }) => {
    return  <ul className={css.friendList}>
                {friends.map( friend => 
                    <li key={friend.id} className={css.friendListItem}>
                        <FriendListItem friendData={friend}/>
                    </li>
                    )}
            </ul>
};

FriendList.propTypes = {
    friend: PropTypes.func
}