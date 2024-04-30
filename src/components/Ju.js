import React from 'react'
 
export default function Ju() {
 const  tt = (search, Notes) => {
   return Notes.filter(
     (note) =>
       search === null ||
       search === "" ||
       note?.text?.toLowerCase().includes(search) ||
       note?.category?.toLowerCase().includes(search)
   );
 };

}


