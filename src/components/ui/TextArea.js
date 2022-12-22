const TextArea = ({ id, value, type, onChange, placeholder, error }) => {

  let classes = "w-full border rounded-md p-2 mb-10 ";
  let errorColor = "border-2 border-red-500 ";
  let defultColor = "border border-gray-300 ";

  if (error) {
    classes = `${classes} ${errorColor}`;
  } else {
    classes = `${classes} ${defultColor}`;
  }

  return (
    <textarea
      id={id}
      name={id}
      type={type}
      rows={3}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={classes}
    />
  );
}; 

export default TextArea;