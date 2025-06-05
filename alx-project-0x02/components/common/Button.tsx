// components/common/Button.tsx

import { type ButtonProps } from '@/interfaces'
import clsx from 'clsx'

const Button = ({ label, size = 'medium', shape = 'rounded-md', onClick }: ButtonProps) => {
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-5 py-3 text-lg',
  }

  return (
    <button
      onClick={onClick}
      className={clsx(
        'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none',
        sizeClasses[size],
        shape
      )}
    >
      {label}
    </button>
  )
}

export default Button
