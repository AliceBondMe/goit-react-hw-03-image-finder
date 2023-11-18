import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item, onClick }) => {
  return (
    <Item onClick={onClick}>
      <Image src={item.webformatURL} alt={item.tags} id={item.id} />
    </Item>
  );
};
