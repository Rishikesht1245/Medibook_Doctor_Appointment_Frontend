interface ButtonProps {
  //limiting the values of props using union
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
  children?: string;
  onClick?: () => any;
}

function Button({ type, className, children, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary text-white text-center rounded-md p-2 tracking-wider hover:brightness-125 hover:shadow-lg active:shadow-inner active:brightness-100 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
