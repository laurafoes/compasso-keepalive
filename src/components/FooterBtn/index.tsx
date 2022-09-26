import { Button } from "./FooterBtnElements"

interface Props {
    variant: boolean,
    children?: React.ReactNode,
    onClick?: React.MouseEvent
}

export const FooterBtn = ({ variant, children }: Props) => {
    return(
        <Button
            variant={variant}
        >
            {children}
        </Button>
    )
}