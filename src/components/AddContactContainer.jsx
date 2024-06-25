import styled from 'styled-components';
export default function AddContactContainer() {
  return (
    <AddContactContainers>
        <form>
            <label>Name</label>
            <input type="text" placeholder="Enter Name" />
            <label>Email</label>
            <input type="text" placeholder="Enter Email" />
            <button>Add Contact</button>
        </form>
    </AddContactContainers>
  )
}
const AddContactContainers=styled.div`
padding:10px;
position:absolute;
top:150px;
background-color:#32B2B7;
z-index:50;
width:300px;
border-radius:10px;
min-height:210px;
input{
    width:90%;
    padding:10px;
    border-radius:5px;
   
    margin-bottom:10px;
    &:focus{
        outline:1px solid black;
    }
}
button{
    width:100px;
    position:absolute;
    padding:10px;
    border-radius:5px;
    background-color:black;
    color:white;
    border:none;
    right:10px;
    bottom:10px;
    &:hover{
        background-color:white;
        color:black;
    }
}
`;