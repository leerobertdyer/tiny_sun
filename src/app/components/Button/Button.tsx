type PropsDefinition = {
    children: React.ReactNode;
    type: 'primary' | 'secondary';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, type, onClick }: PropsDefinition) {
    let buttonClass = 'border-2 border-tinyBlack-base p-4 rounded-lg ';

    switch (type) {
        case 'primary':
            buttonClass += "bg-tinyBlue-base flex gap-2 justify-center items-center w-[10rem] hover:bg-tinyBlue-light";
            console.log(buttonClass)
            break;
        case 'secondary':
            buttonClass += "text-[10px] bg-tinyPink-light flex gap-2 justify-center items-center w-[10rem] hover:bg-tinyPink-lighter";
            break;
        default:
            break;
    }

    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
}
