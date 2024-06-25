
import AddContactContainer from './AddContactContainer';
import ContactList from './ContactList';
import styles from './Home.module.css';
import InputComponent from './InputComponent';
export default function Home() {
  return (
    <div className={styles.mainContainer}>
    <div className={styles.container}>
        <div className={styles.navbar}>
        <div className='logo-svg'>
            <img src='Images/logo.svg' alt='logo-svg'></img>
        </div>
        <div>
            <h3>Firebase Contact App</h3>
        </div>
        </div>
        <InputComponent />
       <ContactList />
       
    </div>
    {/* <AddContactContainer className={styles.addContactContainer}/> */}
    </div>
  )
}
