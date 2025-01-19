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

export default function Button(
  props: ButtonProps | LinkButtonProps | HeaderButtonProps,
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
  if (props.el === "header-button") {
    return (
      <button
        {...props}
        className="w-34 bg-custom-mid-blue text-secondary hidden h-14 rounded-lg font-semibold lg:block"
      ></button>
    );
  }
  return (
    <button
      {...props}
      className="w-34 bg-custom-mid-blue text-secondary h-14 rounded-lg font-semibold"
    ></button>
  );
}
