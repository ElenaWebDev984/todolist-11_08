type BtnTypes = {
    title: string
    onClick?: () => void
}

export const Button = ({title, onClick}: BtnTypes) => {
    return <button onClick={onClick}>{title}</button>
};

