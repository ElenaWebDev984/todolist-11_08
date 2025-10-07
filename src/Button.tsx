type BtnTypes = {
    title: string
    onClick: () => void
    isDisabled?: boolean
    classes?: string
}

export const Button = ({title, onClick, isDisabled, classes}: BtnTypes) => {
    return (
        <button disabled={isDisabled}
                onClick={onClick}
                className={classes}>
            {title}
        </button>
    )
};

