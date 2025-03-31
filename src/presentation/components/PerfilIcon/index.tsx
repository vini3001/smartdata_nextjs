import { ButtonContainer } from "./styles"

interface UserIconProps {
    style: React.CSSProperties | undefined
    size: 'small' | 'medium' | 'large'
}

export default function UserIcon({style, size}: UserIconProps) {
    return (
        <ButtonContainer style={style} size={size}>
           <span>C</span>
        </ButtonContainer>
    )
}