import clsx from "clsx";
import c from "./button.module.css";

function CLSXButton({
  variant = "solid",
  size = "md",
  radius = "md",
  type,

  children,
}) {
  const classnames = clsx({
    [c.base]: true,
    [c[variant]]: variant,
    [c[size]]: size,
    [c[`radius-${radius}`]]: radius,
    [c[`${variant}-${type}`]]: type,
  });

  return <button className={classnames}>{children}</button>;
}

export default CLSXButton;
