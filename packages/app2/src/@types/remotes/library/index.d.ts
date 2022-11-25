/// <reference types="react" />
declare module "library/NameContextProvider" {
    import React from "react";
    const _default: React.Context<{
        name: string;
        setName: (name: string) => void;
    }>;
    export default _default;
}
declare module "library/SurnameContextProvider" {
    import React from 'react';
    const _default_1: React.Context<{
        name: string;
        setName: (name: string) => void;
    }>;
    export default _default_1;
}
declare module "library/Button" {
    import { FC } from "react";
    const Button: FC<{
        className?: string;
    }>;
    export default Button;
}
