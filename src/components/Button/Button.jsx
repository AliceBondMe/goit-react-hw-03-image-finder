import { LoadMoreBtn } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <LoadMoreBtn type="button" aria-label="Load more" onClick={onClick}>
      Load more
    </LoadMoreBtn>
  );
};
