import styled from 'styled-components';
import { IoMdContact } from "react-icons/io";
import { TfiPencil } from "react-icons/tfi";
import { MdDeleteOutline } from "react-icons/md";
export default function ContactList() {
  return (
    <ContactContainer>
        <IoMdContact className='contact-men'/>
        <div>
            <h4>Dummy Name</h4>
            <p>sy730113@gmail.com</p>
        </div>
        <div className='update-delete'>
<TfiPencil style={{cursor:'pointer'}}/>
<MdDeleteOutline style={{cursor:'pointer'}}/>
        </div>
    </ContactContainer>
  )
}

const ContactContainer=styled.div`
padding:0 10px;
background-color:#FFECA1;
height:50px;
border-radius:10px;
display:flex;
justify-content:space-between;
align-items:center;
.contact-men{
    font-size:30px;
}
.update-delete{
    font-size:30px;
    display:flex;
    gap:10px;
}
h4{
    line-height:0px;
}
p{
    line-height:0px;
    font-size:13px;
}

`;