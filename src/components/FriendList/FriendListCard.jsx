import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListCard = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.isOnline : css.offline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListCard.propTypes = {
  friend: PropTypes.exact({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
