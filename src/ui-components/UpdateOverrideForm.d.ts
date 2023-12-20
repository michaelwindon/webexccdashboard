/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, GridProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type UpdateOverrideFormInputValues = {
    isoverride?: boolean;
    holiday?: string[];
    submenu1?: string;
    submenu3?: string;
    submenu4?: string;
    submenu5?: string;
    submenu6?: string;
    submenu7?: string;
    submenu8?: string;
    submenu9?: string;
    submenu0?: string;
    submenu1_sp?: string;
    submenu3_sp?: string;
    submenu4_sp?: string;
    submenu5_sp?: string;
    submenu6_sp?: string;
    submenu7_sp?: string;
    submenu8_sp?: string;
    submenu9_sp?: string;
    submenu0_sp?: string;
};
export declare type UpdateOverrideFormValidationValues = {
    isoverride?: ValidationFunction<boolean>;
    holiday?: ValidationFunction<string>;
    submenu1?: ValidationFunction<string>;
    submenu3?: ValidationFunction<string>;
    submenu4?: ValidationFunction<string>;
    submenu5?: ValidationFunction<string>;
    submenu6?: ValidationFunction<string>;
    submenu7?: ValidationFunction<string>;
    submenu8?: ValidationFunction<string>;
    submenu9?: ValidationFunction<string>;
    submenu0?: ValidationFunction<string>;
    submenu1_sp?: ValidationFunction<string>;
    submenu3_sp?: ValidationFunction<string>;
    submenu4_sp?: ValidationFunction<string>;
    submenu5_sp?: ValidationFunction<string>;
    submenu6_sp?: ValidationFunction<string>;
    submenu7_sp?: ValidationFunction<string>;
    submenu8_sp?: ValidationFunction<string>;
    submenu9_sp?: ValidationFunction<string>;
    submenu0_sp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateOverrideFormOverridesProps = {
    UpdateOverrideFormGrid?: PrimitiveOverrideProps<GridProps>;
    isoverride?: PrimitiveOverrideProps<SwitchFieldProps>;
    SectionalElement0?: PrimitiveOverrideProps<DividerProps>;
    holiday?: PrimitiveOverrideProps<TextFieldProps>;
    submenu1?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu3?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu4?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu5?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu6?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu7?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu8?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu9?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu0?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu1_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu3_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu4_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu5_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu6_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu7_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu8_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu9_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu0_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type UpdateOverrideFormProps = React.PropsWithChildren<{
    overrides?: UpdateOverrideFormOverridesProps | undefined | null;
} & {
    id?: string;
    contactCenterModel?: ContactCenterModel;
    onSubmit?: (fields: UpdateOverrideFormInputValues) => UpdateOverrideFormInputValues;
    onSuccess?: (fields: UpdateOverrideFormInputValues) => void;
    onError?: (fields: UpdateOverrideFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UpdateOverrideFormInputValues) => UpdateOverrideFormInputValues;
    onValidate?: UpdateOverrideFormValidationValues;
} & React.CSSProperties>;
export default function UpdateOverrideForm(props: UpdateOverrideFormProps): React.ReactElement;
