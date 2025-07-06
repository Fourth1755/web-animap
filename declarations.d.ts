
import type {
  ButtonProps,
  InputProps,
  TypographyProps,
  AvatarProps,
  MenuListProps,
  MenuItemProps,
  DialogProps,
  SelectProps,
  DialogBodyProps,
  DialogFooterProps,
  DialogHeaderProps,
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
  export const Avatar: ForwardRefExoticComponent<
    PropsWithoutRef<AvatarProps> & RefAttributes<HTMLParagraphElement>
    >;
  export const MenuList: ForwardRefExoticComponent<
    PropsWithoutRef<MenuListProps> & RefAttributes<HTMLParagraphElement>
    >;
  export const MenuItem: ForwardRefExoticComponent<
    PropsWithoutRef<MenuItemProps> & RefAttributes<HTMLParagraphElement>
    >;
  export const Dialog: ForwardRefExoticComponent<
    PropsWithoutRef<DialogProps> & RefAttributes<HTMLParagraphElement>
    >;
  export const Select: ForwardRefExoticComponent<
    PropsWithoutRef<SelectProps> & RefAttributes<HTMLParagraphElement>
    >;
  export const DialogBody: ForwardRefExoticComponent<
    PropsWithoutRef<DialogBodyProps> & RefAttributes<HTMLParagraphElement>
    >;
  export const DialogFooter: ForwardRefExoticComponent<
    PropsWithoutRef<DialogFooterProps> & RefAttributes<HTMLParagraphElement>
    >;
  export const DialogHeader: ForwardRefExoticComponent<
    PropsWithoutRef<DialogHeaderProps> & RefAttributes<HTMLParagraphElement>
    >;

}
