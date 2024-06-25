import { IoAddCircleSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import styles from './InputContainer.module.css';
export default function InputComponent() {
  return (
    <div className={styles.inputContainer}>
         <div className={styles.searchContainer}>
        <input  placeholder="Search Contact ..." />
        <IoSearch className={styles.searchIcon}/>
      </div>
        <IoAddCircleSharp className={styles.addIcon} style={{cursor:'pointer'}}/>

    </div>
  )
}
