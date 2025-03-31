export class ErrorField {
    hasError: boolean;
    message: string;
    nameField: string;

    constructor(hasError = false, message = "", nameField = "") {
        this.hasError = hasError;
        this.message = hasError ? message : "";
        this.nameField = nameField;
    }

    static parseError(name: string, errors: any): ErrorField {
        const isError = !!(
            errors && Object.prototype.hasOwnProperty.call(errors, name)
        );

        return new ErrorField(isError, isError ? errors[name].message : "");
    }
}
