import PropTypes from 'prop-types';
import { FriendListCard } from './FriendListCard';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friendList">
      {friends.map(friend => (
        <FriendListCard key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
