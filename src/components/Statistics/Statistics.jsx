import PropTypes from 'prop-types';
import css from './statistics.module.css';
import { AiOutlinePercentage } from 'react-icons/ai';

export const Statistics = ({ title, statis }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        {statis.map(stat => (
          <li
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
            className={css.item}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>
              {stat.percentage}
              <AiOutlinePercentage className={css.iconPercentage} />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  statis: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 4576103)
    .toString(16)
    .padStart(6, 0)}`;
}
