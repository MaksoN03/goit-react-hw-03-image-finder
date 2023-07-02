import css from 'styles.module.css';

export const ImageGalleryItem = ({  webformatURL, onClick, tags }) => {
  return (
    <>
      <li onClick={onClick} className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItem_image}
          src={webformatURL}
          alt={tags}
        />
      </li>
    </>
  );
};