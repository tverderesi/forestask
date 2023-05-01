type ButtonProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode | React.ReactNode[];
};

export function HeroButton({
  size = "md",
  color = "primary",
  onClick,
  children,
}: ButtonProps) {
  const buttonClasses = `
    btn 
    btn-${size} 
    ${
      color === "primary"
        ? "bg-night-900 text-seal-brown-50"
        : "bg-white text-night-900"
    }
    hover:bg-mantis hover:text-night-900
    border-none 
    drop-shadow-lg
    `;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
