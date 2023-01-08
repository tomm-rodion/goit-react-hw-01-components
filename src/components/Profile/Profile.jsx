import PropType from 'prop-types';
import css from './Profile.module.css';
import { MdAlternateEmail } from 'react-icons/md';
// import images from 'components/Images/user.jpg';

export function Profile({
  users: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) {
  return (
    <>
      <div className={css.profile}>
        <div className={css.description}>
          <img src={avatar} alt="User avatar" className={css.avatar} />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>
            <MdAlternateEmail className={css.iconEmail} />
            {tag}
          </p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.wrapperStats}>
            <span className={css.label}>Followers</span>
            <span className={css.quanteti}> {followers}</span>
          </li>
          <li className={css.wrapperStats}>
            <span className={css.label}>Views</span>
            <span className={css.quanteti}> {views}</span>
          </li>
          <li className={css.wrapperStats}>
            <span className={css.label}>Likes</span>
            <span className={css.quanteti}> {likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

Profile.defaultProps = {
  avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
};

Profile.propType = {
  users: PropType.arrayOf({
    avatar: PropType.string.isRequired,
    username: PropType.string.isRequired,
    tag: PropType.string.isRequired,
    location: PropType.string.isRequired,
    stats: PropType.objectOf(PropType.number).isRequired,
    followers: PropType.number.isRequired,
    views: PropType.number.isRequired,
    likes: PropType.number.isRequired,
  }),
};
