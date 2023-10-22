import c from "./button.module.css";

function Button({
  variant = "solid",
  size = "lg",
  radius = "md",
  type,
  children,
}) {
  const classNames = [c.base, c[size], c[`radius-${radius}`], c[variant]];

  if (type) {
    classNames.push(c[`${variant}-${type}`]);
  }

  return <button className={classNames.join(" ")}>{children}</button>;
}

export default Button;
