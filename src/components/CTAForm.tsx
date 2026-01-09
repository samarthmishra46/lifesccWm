interface CTAFormProps {
  buttonText?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  sourceSection?: string;
}

export function CTAForm({ buttonText = 'Book a Free Body Assessment', variant = 'primary', onClick }: CTAFormProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 px-6 rounded-button font-semibold transition-all duration-200 ${
        variant === 'primary'
          ? 'bg-gradient-cta hover:shadow-glow text-white shadow-soft-md'
          : 'bg-white hover:bg-neutral-light text-primary-600 border-2 border-primary-600'
      }`}
    >
      {buttonText}
    </button>
  );
}
