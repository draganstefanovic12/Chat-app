type ButtonProps = {
  children: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};

export const Button = ({
  children,
  onClick,
  className,
  disabled,
  type,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
};