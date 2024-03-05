/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
    presentlangoption?: boolean;
    isholiday?: boolean;
    isafterhours?: boolean;
    issecondaryclosed?: boolean;
    epiccontext?: string;
    usecorporateholidays?: boolean;
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
    offerccb?: boolean;
    virtualvoicemail?: string;
};
export declare type UpdateMenuFormValidationValues = {
    menu0?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    presentlangoption?: ValidationFunction<boolean>;
    isholiday?: ValidationFunction<boolean>;
    isafterhours?: ValidationFunction<boolean>;
    issecondaryclosed?: ValidationFunction<boolean>;
    epiccontext?: ValidationFunction<string>;
    usecorporateholidays?: ValidationFunction<boolean>;
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
    offerccb?: ValidationFunction<boolean>;
    virtualvoicemail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateMenuFormOverridesProps = {
    UpdateMenuFormGrid?: PrimitiveOverrideProps<GridProps>;
    menu0?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Field0?: PrimitiveOverrideProps<SelectFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
    presentlangoption?: PrimitiveOverrideProps<SwitchFieldProps>;
    isholiday?: PrimitiveOverrideProps<SwitchFieldProps>;
    isafterhours?: PrimitiveOverrideProps<SwitchFieldProps>;
    issecondaryclosed?: PrimitiveOverrideProps<SwitchFieldProps>;
    epiccontext?: PrimitiveOverrideProps<TextFieldProps>;
    usecorporateholidays?: PrimitiveOverrideProps<SwitchFieldProps>;
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
    offerccb?: PrimitiveOverrideProps<SwitchFieldProps>;
    virtualvoicemail?: PrimitiveOverrideProps<TextFieldProps>;
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
