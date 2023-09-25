import { useDispatch, useSelector } from 'react-redux';
import { FilterLabel, FilterWrapper, FilterInput } from './Filter.styled';
import { changeContactFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <FilterWrapper>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name..."
        value={filter.filter}
        onChange={event => {
          dispatch(changeContactFilter(event.target.value));
        }}
      />
    </FilterWrapper>
  );
};
