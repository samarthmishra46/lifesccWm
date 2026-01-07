interface CTAFormProps {
  buttonText?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function CTAForm({ buttonText = 'Book a Free Body Assessment', variant = 'primary', onClick }: CTAFormProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
        variant === 'primary'
          ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl'
          : 'bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600'
      }`}
    >
      {buttonText}
    </button>
  );
}
