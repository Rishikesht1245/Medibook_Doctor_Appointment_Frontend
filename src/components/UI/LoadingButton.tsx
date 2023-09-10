interface LoadingButtonProps {
  className?: string;
}

function LoadingButton({ className }: LoadingButtonProps) {
  return (
    <button
      type="button"
      className={`bg-primary text-white text-center rounded-md p-2 tracking-wider flex justify-center ${className}`}
    >
      <img
        className="animate-spin h-6 w-6"
        src="https://res.cloudinary.com/djcn6luvw/image/upload/v1693814593/Medibook/loading_zwsigy.png"
        alt="Loading Button"
      />
    </button>
  );
}

export default LoadingButton;
