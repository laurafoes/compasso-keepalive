import { useNavigate } from "react-router-dom"
import { auth } from "../../services/FirebaseConfig"
import { Button } from "./FooterBtnElements"

interface Props {
    variant: boolean,
    children?: React.ReactNode,
}

export const FooterBtn = ({ variant, children }: Props) => {
    const navigateTo = useNavigate();
    const handleLogout = () => {
        if(variant) {
            auth.signOut();
            navigateTo('/');
        }
    }

    return(
        <Button
            variant={variant}
            onClick={handleLogout}
        >
            {children}
        </Button>
    )
}