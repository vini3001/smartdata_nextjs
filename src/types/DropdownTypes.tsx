import { sd_cargo, sd_departamento } from "@prisma/client";

export type DropdownType = sd_cargo[] | sd_departamento[]

export type CommonDropdownItem = {
    id: number | string;
    label: string;
};

type Props = {
    data: DropdownType;
    onChange: (item: sd_cargo | sd_departamento) => void;
};