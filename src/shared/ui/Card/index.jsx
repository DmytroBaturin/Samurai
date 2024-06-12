import "./index.scss";
import clsx from "clsx";
import { forwardRef } from "react";

export const Card = forwardRef(({ children, classname }, ref) => {
  return (
    <div className={clsx("card", classname)} ref={ref}>
      {children}
    </div>
  );
});
