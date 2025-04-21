import { Item } from "@/domain/models/components";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import _ from "lodash";
import { Label, SelectContainer } from "./style";

interface SelectLabelsProps {
  value?: string;
  onChange: (value: string) => void;
  helperText?: string;
  options: Item[];
  placeHolder?: Item;
  label?: string;
}

export default function SelectComponent(props: SelectLabelsProps): React.ReactNode {
  const { value, onChange, options, helperText, placeHolder, label } = props;

  function handleOnChange(event: SelectChangeEvent) {
    onChange(event.target.value);
  }

  return (
    <SelectContainer className="container-select-component">
      {!_.isEmpty(label) && (
        <div className="container-label">
          <Label>{label}</Label>
        </div>
      )}

      <FormControl>
        <Select defaultValue={value} onChange={handleOnChange}>
          {!_.isEmpty(placeHolder) && (
            <MenuItem disabled value={placeHolder.value}>
              <em>{placeHolder.label}</em>
            </MenuItem>
          )}

          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </SelectContainer>
  );
}

SelectComponent.defaultProps = {
  value: undefined,
  placeHolder: undefined,
  label: undefined,
};
