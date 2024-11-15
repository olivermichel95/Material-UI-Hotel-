import TextField from "@mui/material/TextField";

const InputField = ({ label, value, onChange, type = "text", ...props }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      fullWidth
      margin="normal"
      {...props}
    />
  );
};

export default InputField;
