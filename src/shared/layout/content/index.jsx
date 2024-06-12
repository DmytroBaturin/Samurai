import "./index.scss";
import clsx from "clsx";
export const ContentLayout = ({ children, as, classname }) => {
  const Tag = as || "div";
  return <Tag className={clsx("contentlayout", classname)}>{children}</Tag>;
};
