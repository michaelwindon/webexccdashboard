/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ContactCenterModelCreateFormInputValues = {
    mainnumber?: string;
    holiday?: string[];
    secondarytodclose?: string[];
    secondarytodopen?: string[];
    daysopen?: string[];
    daystodopen?: string[];
    daystodclose?: string[];
    welcomeprompt?: string;
    ccdescription?: string;
    ccname?: string;
    defaultroute?: string;
    isoverride?: boolean;
    welcomeprompt_sp?: string;
    menu0_sp?: string;
    group?: string;
    version?: string;
};
export declare type ContactCenterModelCreateFormValidationValues = {
    mainnumber?: ValidationFunction<string>;
    holiday?: ValidationFunction<string>;
    secondarytodclose?: ValidationFunction<string>;
    secondarytodopen?: ValidationFunction<string>;
    daysopen?: ValidationFunction<string>;
    daystodopen?: ValidationFunction<string>;
    daystodclose?: ValidationFunction<string>;
    welcomeprompt?: ValidationFunction<string>;
    ccdescription?: ValidationFunction<string>;
    ccname?: ValidationFunction<string>;
    defaultroute?: ValidationFunction<string>;
    isoverride?: ValidationFunction<boolean>;
    welcomeprompt_sp?: ValidationFunction<string>;
    menu0_sp?: ValidationFunction<string>;
    group?: ValidationFunction<string>;
    version?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactCenterModelCreateFormOverridesProps = {
    ContactCenterModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    mainnumber?: PrimitiveOverrideProps<TextFieldProps>;
    holiday?: PrimitiveOverrideProps<TextFieldProps>;
    secondarytodclose?: PrimitiveOverrideProps<TextFieldProps>;
    secondarytodopen?: PrimitiveOverrideProps<TextFieldProps>;
    daysopen?: PrimitiveOverrideProps<TextFieldProps>;
    daystodopen?: PrimitiveOverrideProps<TextFieldProps>;
    daystodclose?: PrimitiveOverrideProps<TextFieldProps>;
    welcomeprompt?: PrimitiveOverrideProps<TextFieldProps>;
    ccdescription?: PrimitiveOverrideProps<TextFieldProps>;
    ccname?: PrimitiveOverrideProps<TextFieldProps>;
    defaultroute?: PrimitiveOverrideProps<TextFieldProps>;
    isoverride?: PrimitiveOverrideProps<SwitchFieldProps>;
    welcomeprompt_sp?: PrimitiveOverrideProps<TextFieldProps>;
    menu0_sp?: PrimitiveOverrideProps<SelectFieldProps>;
    group?: PrimitiveOverrideProps<TextFieldProps>;
    version?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactCenterModelCreateFormProps = React.PropsWithChildren<{
    overrides?: ContactCenterModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactCenterModelCreateFormInputValues) => ContactCenterModelCreateFormInputValues;
    onSuccess?: (fields: ContactCenterModelCreateFormInputValues) => void;
    onError?: (fields: ContactCenterModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactCenterModelCreateFormInputValues) => ContactCenterModelCreateFormInputValues;
    onValidate?: ContactCenterModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContactCenterModelCreateForm(props: ContactCenterModelCreateFormProps): React.ReactElement;
