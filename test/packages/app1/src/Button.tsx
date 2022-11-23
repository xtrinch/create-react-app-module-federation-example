import React from "react";
//@ts-expect-error
import { NameContextProvider } from 'shared-library';

const Button = () => {
    const ctx = React.useContext(NameContextProvider) as any;

return (<button onClick={()=>{
    ctx.setName("Lojza")
}}>{ctx.name}: Hello from app1</button>) };
export default Button;
