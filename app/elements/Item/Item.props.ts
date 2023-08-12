import { DetailedHTMLProps, LinkHTMLAttributes } from "react";

export interface ItemProps
  extends DetailedHTMLProps<
    LinkHTMLAttributes<HTMLLinkElement>,
    HTMLLinkElement
  > {
  children: string;
  href: string;
}
