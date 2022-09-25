import { Button } from "./FootenBtnElements"

interface Props {
    variant: boolean,
    children?: React.ReactNode
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