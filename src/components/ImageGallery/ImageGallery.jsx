import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImagesList } from './ImageGallery.styled';

export const ImageGallery = ({ items, handleOpenModal }) => {
  return (
    <ImagesList>
      {items.map(item => (
        <ImageGalleryItem item={item} key={item.id} onClick={handleOpenModal} />
      ))}
    </ImagesList>
  );
};
