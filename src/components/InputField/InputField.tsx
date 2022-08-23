import "./inputfield.css";

type InputFieldProps = {
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  value?: string;
};

export const InputField = ({
  label,
  onChange,
  className,
  placeholder,
  onKeyDown,
  value,
}: InputFieldProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        onKeyDown={onKeyDown}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
      />
    </>
  );
};
