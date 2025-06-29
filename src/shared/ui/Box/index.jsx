export const Box = ({ children, classname, props, as, role}) => {
  const Tag = as || "div";
  return (
    <Tag {...props} role={role} className={classname}>
      {children}
    </Tag>
  );
};
