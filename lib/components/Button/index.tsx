export type ButtonProps = {
  color?: "blue" | "red" | "green";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ color = "blue", children, ...rest }) => {
  let colorClasses = "bg-blue-500";

  if (color === "red") {
    colorClasses = "bg-red-500";
  } else if (color === "green") {
    colorClasses = "bg-green-500";
  }

  return (
    <button
      className={`${colorClasses} text-xl font-medium text-white transition-colors px-6 py-2 rounded-md`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
