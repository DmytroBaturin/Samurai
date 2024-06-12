export const Button = ({ children, classname, props }) => {
  return (
    <button {...props} className={classname}>
      {children}
    </button>
  );
};
