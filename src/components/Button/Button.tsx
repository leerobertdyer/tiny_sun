type PropsDefinition = {
    children: React.ReactNode;
    type: 'primary' | 'secondary' | 'tertiary' | 'playButton';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, type, onClick }: PropsDefinition) {
    let buttonClass = 'border-2 border-tinyBlack-base p-4 flex gap-2 justify-center items-center  ';
    let buttonType = undefined

    switch (type) {
        case 'primary':
            buttonClass += "bg-tinyBlue-base hover:bg-tinyBlue-light rounded-lg h-[3.5rem]";
            break;
        case 'secondary':
            buttonClass += "text-[10px] bg-tinyPink-light hover:bg-tinyPink-lighter rounded-lg h-[3.5rem]";
            break;
        case 'tertiary':
            buttonClass += "text-[1.25rem] bg-tinyPink-light hover:bg-white hover:text-tinyPink-dark rounded-lg h-[3.5rem]";
            buttonType = 'submit' as "submit" | "button" | "reset" | undefined
            break;
        case 'playButton': 
            buttonClass += "bg-tinyPink-light hover:bg-tinyPink-lighter rounded-full w-[5.5rem] h-[1.5rem]"
            break;
        default:
            break;
    }

    return (
        <button 
        type={buttonType ?? 'button'}
        className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
}
