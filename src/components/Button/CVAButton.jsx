import { cva } from "class-variance-authority";
import c from "./button.module.css";

function CVAButton({ variant, size, radius, type, children }) {
  const classnames = cva([c.base], {
    variants: {
      variant: {
        solid: c.solid,
        outline: c.outline,
        text: c.text,
      },
      type: {
        primary: c.primary,
        secondary: c.secondary,
        text: c.text,
        success: c.success,
        warning: c.warning,
        danger: c.danger,
      },
      size: {
        xs: c.xs,
        sm: c.sm,
        md: c.md,
        lg: c.lg,
      },
      radius: {
        none: c["radius-none"],
        sm: c["radius-sm"],
        md: c["radius-md"],
        lg: c["radius-lg"],
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        type: "primary",
        className: c["solid-primary"],
      },
      {
        variant: "solid",
        type: "danger",
        className: c["solid-danger"],
      },
      {
        variant: "solid",
        type: "success",
        className: c["solid-success"],
      },
      {
        variant: "outline",
        type: "primary",
        className: c["outline-primary"],
      },
      {
        variant: "outline",
        type: "danger",
        className: c["outline-danger"],
      },
      {
        variant: "outline",
        type: "success",
        className: c["outline-success"],
      },
      {
        variant: "text",
        type: "primary",
        className: c["text-primary"],
      },
      {
        variant: "text",
        type: "danger",
        className: c["text-danger"],
      },
      {
        variant: "text",
        type: "success",
        className: c["solid-success"],
      },
    ],
    defaultVariants: {
      variant: "solid",
      radius: "md",
      size: "lg",
    },
  });

  return (
    <button className={classnames({ variant, size, radius, type })}>
      {children}
    </button>
  );
}

export default CVAButton;
