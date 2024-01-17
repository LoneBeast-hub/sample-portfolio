const SectionLabel = ({children, color}) => {
    return(
        <div className='flex items-center gap-1'>
            <div className={`w-[18px] h-[2px] ${color === 'primary'? 'bg-[--primary-color]' : ''} ${color === 'accent'? 'bg-[--accent-color]' : ''} ${color === 'secondary'? 'bg-[--secondary-color]' : ''}`}></div>
            <span className={`${color === 'primary'? 'text-[--primary-color]' : ''} ${color === 'accent'? 'text-[--accent-color]' : ''} ${color === 'secondary'? 'text-[--secondary-color]' : ''}`}>{children}</span>
        </div>
    )
}

export default SectionLabel;