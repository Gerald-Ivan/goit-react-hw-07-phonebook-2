import css from './ContactListItem.module.css'
import { Notify } from 'notiflix';
export const ContactListItem = ({ filteredContact, deleteContact }) => {
    const handleDelete = () => {
        deleteContact(filteredContact.id);
        Notify.success(
          `${filteredContact.name} was successfully deleted from your contacts!`,
          { position: 'top-left' })
      };

  return (
    <>
        <li className={css.listItem}>
            <p>{filteredContact.name}:</p>
            <p>{filteredContact.number}</p>
            <button onClick={handleDelete}>Delete</button>
        </li>
    </>
  )
}
