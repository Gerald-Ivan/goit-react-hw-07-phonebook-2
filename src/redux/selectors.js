import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;


export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {

    if (!filter) {
      return contacts;
    }


    const lowerCaseFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(contact => {

      const lowerCaseContact = contact.toLowerCase();

      return lowerCaseContact.includes(lowerCaseFilter);
    });


    return visibleContacts;
  }
);