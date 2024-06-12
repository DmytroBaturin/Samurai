export const Box = ({ children, classname, props, as }) => {
  const Tag = as || "div";
  return (
    <Tag {...props} className={classname}>
      {children}
    </Tag>
  );
};
