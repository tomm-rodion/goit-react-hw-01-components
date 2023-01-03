import PropType from 'prop-types';

export const Statistics = ({ title, statis }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {statis.map(stat => (
          <li key={stat.id} className="item">
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.PropType = {
  title: PropType.string.isRequired,
  // statis: PropType.node.isRequired,
};
