import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Container, CustomDateTimePickerContainerFilled, CustomDateTimePickerContainerStandard, styles } from "./style";
import 'dayjs/locale/pt';
import {LocalizationProvider } from '@mui/x-date-pickers';
import openPickerIcon from '@/assets/Schedule/calendar-icon.svg'
import { ErrorField } from '@/domain/services';
import { Controller, useForm } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';
import React from 'react';
import dayjs from 'dayjs';
import Image from "next/image";

interface DateTimePickerProps {
    props: TextFieldProps;
    containerProps: React.CSSProperties | undefined
    handleDate: (date: Date | undefined) => void
    error?: ErrorField
    controlCustom?: any
    text: string
    type: 'standard' | 'filled'
}

export default function DateTimePickerCustom(DateTimeField: DateTimePickerProps) {

    const {text, type, error, controlCustom, props, containerProps, handleDate} = DateTimeField

    const name = props.name ? props.name : "";

    const CalendarIconStandard = () => {
        return <Image style={{width: 'fit-content', height: 'fit-content'}} width={200} height={100} src={openPickerIcon} alt="Calendar" />
    }

    const { control } = useForm({});

    const makeError = (): React.ReactNode => {
        return error?.hasError ? (
            <span title={error?.message}>{error?.message}</span>
        ) : (
            <></>
        );
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt'>
                <Controller
                    name={name}
                    control={controlCustom ? controlCustom : control}
                    render={({ field: { onChange, value }, fieldState }) => (
                    <Container style={containerProps}>
                        {type === "standard" ? (
                        <>
                            {text !== "" && <a className="text-container">{text}</a>}
                            <CustomDateTimePickerContainerStandard
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": { borderColor: "#828DD4" },
                                "&.Mui-focused fieldset": { borderColor: "#828DD4" },
                                },
                            }}
                            value={value ? dayjs(value) : null}
                            onChange={(newValue) => onChange(newValue ? newValue.toDate() : null)}
                            views={["year", "month", "day"]}
                            slots={{ layout: styles, openPickerIcon: CalendarIconStandard }}
                            slotProps={{
                                calendarHeader: { format: "MMMM / YYYY" },
                                textField: {
                                variant: "standard",
                                error: !!fieldState.error,
                                helperText: fieldState.error?.message || "",
                                },
                            }}
                            dayOfWeekFormatter={(prop) =>
                                `${prop.format("ddd").charAt(0).toUpperCase() + prop.format("ddd").slice(1)}`
                            }
                            />
                        </>
                        ) : (
                        <CustomDateTimePickerContainerFilled
                            sx={{
                            "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": { borderColor: "#828DD4" },
                                "&.Mui-focused fieldset": { borderColor: "#828DD4" },
                            },
                            }}
                            value={value ? dayjs(value) : null}
                            onChange={(newValue) => onChange(newValue ? newValue.toDate() : null)}
                            views={["year", "month", "day"]}
                            slots={{ layout: styles, openPickerIcon: CalendarIconStandard }}
                            slotProps={{
                            textField: {
                                placeholder: text,
                                error: error?.hasError,
                                helperText: makeError()
                            },
                            calendarHeader: { format: "MMMM / YYYY" },
                            }}
                            dayOfWeekFormatter={(prop) =>
                            `${prop.format("ddd").charAt(0).toUpperCase() + prop.format("ddd").slice(1)}`
                            }
                        />
                        )}
                    </Container>
                    )}
                />
        </LocalizationProvider>
    )
}