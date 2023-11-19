import { Formik } from 'formik';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  SearchInput,
  ButtonImg,
} from './Searchbar.styled';

export const Searchbar = ({ handleSearch, isSearchDisabled }) => {
  return (
    <SearchBar>
      <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSearch}>
        <SearchForm>
          <SearchFormButton type="submit" disabled={isSearchDisabled}>
            <ButtonImg />
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormButton>

          <SearchInput
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </SearchBar>
  );
};
