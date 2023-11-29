/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ContactCenterModel } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UpdateMenuFormInputValues = {
    menu0?: string;
    Field0?: string;
    Field1?: string;
};
export declare type UpdateMenuFormValidationValues = {
    menu0?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateMenuFormOverridesProps = {
    UpdateMenuFormGrid?: PrimitiveOverrideProps<GridProps>;
    menu0?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Field0?: PrimitiveOverrideProps<SelectFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UpdateMenuFormProps = React.PropsWithChildren<{
    overrides?: UpdateMenuFormOverridesProps | undefined | null;
} & {
    id?: string;
    contactCenterModel?: ContactCenterModel;
    onSubmit?: (fields: UpdateMenuFormInputValues) => UpdateMenuFormInputValues;
    onSuccess?: (fields: UpdateMenuFormInputValues) => void;
    onError?: (fields: UpdateMenuFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UpdateMenuFormInputValues) => UpdateMenuFormInputValues;
    onValidate?: UpdateMenuFormValidationValues;
} & React.CSSProperties>;
export default function UpdateMenuForm(props: UpdateMenuFormProps): React.ReactElement;
