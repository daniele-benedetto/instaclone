const Input = ({ id, value, onChange, error, type, placeholder }) => {

  let classes = "w-full rounded-md h-10 p-2 focus:ring-indigo-500 focus:border-indigo-500 mb-3";
  let errorColor = "border-2 border-red-500 ";
  let defultColor = "border border-gray-300 ";
  
  if (error) {
    classes = `${classes} ${errorColor}`;
  } else {
    classes = `${classes} ${defultColor}`;
  }
  
  return (
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={classes}
    />
  );
};

export default Input;
  