import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';
import {
  selectFilter,
  selectVisibleContacts,
  selectIsLoading,
  selectError,
} from '../redux/selectors';

export const App = () => {


  const visibleContacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleSetFilter = newFilter => {

    dispatch(setFilter(newFilter));
  };

  return (
    <div>
      <ContactForm addContact={handleAddContact} contacts={visibleContacts} />
      <Filter filter={filter} setFilter={handleSetFilter} />
      {isLoading && (
        <b style={{ display: 'block', padding: '0 0 20px 10px' }}>Loading...</b>
      )}
      {error && <b>Error: {error}</b>}
      {visibleContacts && (
        <ContactList
          contacts={visibleContacts}
          deleteContact={handleDeleteContact}
        />
      )}
    </div>
  );
};