import s from "./Button.module.scss";
import { getClassNames } from "@shared/utils";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={getClassNames(s["button"], {}, [className])} {...props}>
      {children}
    </button>
  );
};
