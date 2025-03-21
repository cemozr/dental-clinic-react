import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type WideButtonProps = {
  el: "wide-button";
} & ComponentPropsWithoutRef<"button">;

type TimeButton = {
  el: "time-button";
  isSelected: boolean;
} & ComponentPropsWithoutRef<"button">;

type HeaderButtonProps = {
  el: "header-button";
} & ComponentPropsWithoutRef<"button">;

type ColoredLinkButton = {
  el: "colored-link-button";
  to: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

type LinkProps = {
  el: "link";
  to: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

type ColoredLinkProps = {
  el: "colored-link";
  to: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

type IconButtonProps = {
  el: "icon-button";
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export default function Button(
  props:
    | ButtonProps
    | LinkProps
    | HeaderButtonProps
    | ColoredLinkButton
    | ColoredLinkProps
    | WideButtonProps
    | TimeButton
    | IconButtonProps,
) {
  switch (props.el) {
    case "link":
      return (
        <Link
          className="text-md font-semibold text-custom-dark-blue"
          to={props.to}
        >
          {props.children}
        </Link>
      );
    case "colored-link":
      return (
        <Link className="text-md font-bold text-custom-mid-blue" to={props.to}>
          {props.children}
        </Link>
      );
    case "colored-link-button":
      return (
        <Link
          className="h-14 w-34 rounded-lg bg-custom-mid-blue p-4 text-center font-semibold text-secondary hover:bg-blue-600 xl:w-40"
          to={props.to}
        >
          {props.children}
        </Link>
      );
    case "header-button":
      return (
        <button
          {...props}
          className="hidden h-14 w-34 rounded-lg bg-custom-mid-blue font-semibold text-secondary lg:block"
        ></button>
      );
    case "wide-button":
      return (
        <button
          {...props}
          className="h-14 w-full rounded-lg bg-custom-mid-blue font-semibold text-secondary hover:bg-blue-600"
        ></button>
      );
    case "time-button":
      const { isSelected, ...rest } = props;
      return (
        <button
          {...rest}
          className={`${props.isSelected ? "bg-secondary text-custom-mid-blue" : "bg-custom-mid-blue text-secondary hover:bg-blue-600"} h-8 w-14 rounded-full font-semibold`}
        ></button>
      );
    case "icon-button":
      return (
        <button
          className="text-2xl text-custom-mid-blue hover:text-custom-sky-blue"
          {...props}
        ></button>
      );
    default:
      return (
        <button
          {...props}
          className="h-14 w-34 rounded-lg bg-custom-mid-blue font-semibold text-secondary hover:bg-blue-600"
        ></button>
      );
  }
}
