import React from "react";
import NameContextProvider from 'library/NameContextProvider';

const Button = () => {
    const ctx = React.useContext(NameContextProvider) as any;

return (<button onClick={()=>{
    ctx.setName("Lojza")
}}>{ctx.name}: Hello from app1</button>) };
export default Button;
