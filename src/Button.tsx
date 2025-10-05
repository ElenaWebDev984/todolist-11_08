type BtnTypes = {
    title: string
    onClick: () => void
    isDisabled?: boolean
}

export const Button = ({title, onClick, isDisabled}: BtnTypes) => {
    return (
        <button disabled={isDisabled}
                onClick={onClick}>
            {title}
        </button>
    )
};

