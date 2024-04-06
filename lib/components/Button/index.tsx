export type ButtonProps = {
  color?: "blue" | "red" | "green";
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ color = "blue", children, variant, ...rest }) => {
  let colorClasses = "bg-blue-500";
  let variantClasses = "primary";

  if (color === "red") {
    colorClasses = "bg-red-500";
  } else if (color === "green") {
    colorClasses = "bg-green-500";
  }

  if (variant === "secondary") {
    variantClasses = "secondary";
  }

  return (
    <button
      className={`${colorClasses} ${variantClasses} text-xl font-medium text-white transition-colors px-6 py-2 rounded-md`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
