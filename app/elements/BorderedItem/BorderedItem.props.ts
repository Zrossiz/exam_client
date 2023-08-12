import { DetailedHTMLProps, LinkHTMLAttributes } from "react";

export interface BorderedItemProps
  extends DetailedHTMLProps<
    LinkHTMLAttributes<HTMLLinkElement>,
    HTMLLinkElement
  > {
  color?: "red" | "green" | "grey";
  arrow?: boolean;
  children: string;
  weight: "normal" | "bold";
  href: string;
}
