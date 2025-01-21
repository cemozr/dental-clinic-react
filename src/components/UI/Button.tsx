import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type HeaderButtonProps = {
  el: "header-button";
} & ComponentPropsWithoutRef<"button">;

type LinkButtonProps = {
  el: "link";
  to: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

type ColoredLinkButton = {
  el: "colored-link-button";
  to: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export default function Button(
  props: ButtonProps | LinkButtonProps | HeaderButtonProps | ColoredLinkButton,
) {
  if (props.el === "link") {
    return (
      <button {...props}>
        <Link className="text-md font-semibold text-black" to={props.to}>
          {props.children}
        </Link>
      </button>
    );
  }
  if (props.el === "colored-link-button") {
    return (
      <button
        {...props}
        className="h-14 w-34 rounded-lg bg-custom-mid-blue p-4 font-semibold text-secondary"
      >
        <Link to={props.to}>{props.children}</Link>
      </button>
    );
  }

  if (props.el === "header-button") {
    return (
      <button
        {...props}
        className="hidden h-14 w-34 rounded-lg bg-custom-mid-blue font-semibold text-secondary lg:block"
      ></button>
    );
  }
  return (
    <button
      {...props}
      className="h-14 w-34 rounded-lg bg-custom-mid-blue font-semibold text-secondary"
    ></button>
  );
}
