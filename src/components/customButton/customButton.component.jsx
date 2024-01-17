const CustomButton = ({children, handleDownload, color, ...props}) => {
    return(
        <button {...props} onClick={handleDownload} className={`${color === 'secondary'? 'bg-[--secondary-color]' : 'bg-[--accent-color]'} h-[fit-content] w-[fit-content] text-white text-sm py-2 px-4 rounded-lg`}>{children}</button>
    )
}

export default CustomButton;