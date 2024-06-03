const Button = ({ coloring = "primary", block, children }) => {
  return (
    <button
      className={`border flex font-montserrat gap-2 items-center justify-center px-7 py-4 rounded-full text-lg whitespace-nowrap ${
        coloring === "primary"
          ? "bg-coral border-coral text-white"
          : coloring === "secondary"
          ? "bg-white border-neutral text-neutral"
          : "bg-coral border-coral text-white"
      } ${block ? "w-full" : undefined}`}
    >
      {children}
    </button>
  );
};

export default Button;
