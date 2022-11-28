import React from 'react'

interface IButtonProps {
  child: JSX.Element
  type: 'primary' | 'success' | 'warning' | 'danger'
  size: 'small' | 'normal' | 'large'
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function IButton(props: IButtonProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    props.onClick && props.onClick(e)
  }
  return (
    <button
      type="button"
      className="lg:ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={handleClick}
    >
      {props.child}
    </button>
  )
}
