const TextArea = ({ id, value, type, onChange, placeholder }) => {
  return (
    <textarea
      id={id}
      name={id}
      type={type}
      rows={3}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-md p-2 mb-10"
    />
  );
}; 

export default TextArea;