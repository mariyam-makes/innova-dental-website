import React from 'react';

interface ToothIconProps {
  className?: string;
  variant?: 'outline' | 'solid';
}

export const ToothIcon: React.FC<ToothIconProps> = ({ className = 'w-5 h-5', variant = 'outline' }) => {
  if (variant === 'solid') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2.5C10.5 1.5 8.2 1.5 6.5 2.8C4.5 4.3 3.8 7.2 4.2 10.5C4.7 14 6.2 18.2 8.2 21.2C8.8 22.1 9.8 22.1 10.4 20.8C11.1 19.3 11.6 16.8 12 15.5C12.4 16.8 12.9 19.3 13.6 20.8C14.2 22.1 15.2 22.1 15.8 21.2C17.8 18.2 19.3 14 19.8 10.5C20.2 7.2 19.5 4.3 17.5 2.8C15.8 1.5 13.5 1.5 12 2.5Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 3.2C10.6 2.2 8.4 2.2 6.8 3.4C4.9 4.8 4.2 7.5 4.7 10.6C5.2 13.9 6.6 17.8 8.4 20.6C8.8 21.2 9.5 21.3 10 20.3C10.7 18.9 11.2 16.5 12 15.2C12.8 16.5 13.3 18.9 14 20.3C14.5 21.3 15.2 21.2 15.6 20.6C17.4 17.8 18.8 13.9 19.3 10.6C19.8 7.5 19.1 4.8 17.2 3.4C15.6 2.2 13.4 2.2 12 3.2Z" />
      <path d="M9.5 7.5C10.2 6.8 11 6.5 12 6.5C13 6.5 13.8 6.8 14.5 7.5" strokeWidth="1.5" strokeOpacity="0.7" />
    </svg>
  );
};
