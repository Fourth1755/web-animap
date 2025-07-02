
import type {
  ButtonProps,
  InputProps,
  TypographyProps,
} from "@material-tailwind/react";
import type {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";

declare module "@material-tailwind/react" {
  export const Button: ForwardRefExoticComponent<
    PropsWithoutRef<ButtonProps> & RefAttributes<HTMLButtonElement>
  >;
  export const Input: ForwardRefExoticComponent<
    PropsWithoutRef<InputProps> & RefAttributes<HTMLInputElement>
  >;
  export const Typography: ForwardRefExoticComponent<
    PropsWithoutRef<TypographyProps> & RefAttributes<HTMLParagraphElement>
  >;
}
