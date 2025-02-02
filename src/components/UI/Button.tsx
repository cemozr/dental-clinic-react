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

export default function Button(
  props:
    | ButtonProps
    | LinkProps
    | HeaderButtonProps
    | ColoredLinkButton
    | ColoredLinkProps
    | WideButtonProps
    | TimeButton,
) {
  switch (props.el) {
    case "link":
      return (
        <button {...props}>
          <Link
            className="text-md font-semibold text-custom-dark-blue"
            to={props.to}
          >
            {props.children}
          </Link>
        </button>
      );
    case "colored-link":
      return (
        <button {...props}>
          <Link
            className="text-md font-bold text-custom-mid-blue"
            to={props.to}
          >
            {props.children}
          </Link>
        </button>
      );
    case "colored-link-button":
      return (
        <button
          {...props}
          className="h-14 w-34 rounded-lg bg-custom-mid-blue p-4 font-semibold text-secondary"
        >
          <Link to={props.to}>{props.children}</Link>
        </button>
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
          className="h-14 w-full rounded-lg bg-custom-mid-blue font-semibold text-secondary"
        ></button>
      );
    case "time-button":
      return (
        <button
          {...props}
          className="h-8 w-14 rounded-full bg-custom-mid-blue font-semibold text-secondary"
        ></button>
      );
    default:
      return (
        <button
          {...props}
          className="h-14 w-34 rounded-lg bg-custom-mid-blue font-semibold text-secondary"
        ></button>
      );
  }
}
