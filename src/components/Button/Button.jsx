import css from 'styles.module.css';

export const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={css.Button}>
      <span className="button-label">Load more</span>
    </button>
  );
};