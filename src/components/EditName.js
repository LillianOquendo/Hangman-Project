import React from "react";


function EditName({id, name}){
    return(
        <li>
<h1>{name}</h1>
PATCH:
<form onSubmit = {(e)=> handlePatch(id,e)}>
    Name: <input type= 'text' name ='name'/>
    <input type='submit' value ='Submit'/>
</form>
        </li>
    )
}
export default EditName;