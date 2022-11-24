/// <reference types="react" />
declare module "app2/Button" {
    import { FC } from "react";
    const Button: FC<{
        className?: string;
    }>;
    export default Button;
}
