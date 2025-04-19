import { ReactNode } from "react";
import { FilterContainer } from "./styles";

interface ToolsBandProps {
  text: string;
  subTextComponent?: ReactNode;
  sideComponent: ReactNode;
}

export default function ToolsBand(toolsBandProps: ToolsBandProps) {
    const {text, subTextComponent, sideComponent} = toolsBandProps

    return (
        <FilterContainer>
            <div  className="header-container">
                <h4>{text}</h4>
                {subTextComponent}
            </div>
            {sideComponent}
        </FilterContainer>
    )
}