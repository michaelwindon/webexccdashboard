/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ContactCenterModelUpdateFormInputValues = {
    mainnumber?: string;
    holiday?: string[];
    secondarytodopen?: string[];
    secondarytodclose?: string[];
    daystodopen?: string[];
    daystodclose?: string[];
    daysopen?: string[];
    ccdescription?: string;
    defaultroute?: string;
    ccname?: string;
    welcomeprompt?: string;
    welcomeprompt_sp?: string;
    updateduser?: string;
    issecondaryclosed?: boolean;
    isoverride?: boolean;
    isholiday?: boolean;
    isafterhours?: boolean;
    presentlangoption?: boolean;
};
export declare type ContactCenterModelUpdateFormValidationValues = {
    mainnumber?: ValidationFunction<string>;
    holiday?: ValidationFunction<string>;
    secondarytodopen?: ValidationFunction<string>;
    secondarytodclose?: ValidationFunction<string>;
    daystodopen?: ValidationFunction<string>;
    daystodclose?: ValidationFunction<string>;
    daysopen?: ValidationFunction<string>;
    ccdescription?: ValidationFunction<string>;
    defaultroute?: ValidationFunction<string>;
    ccname?: ValidationFunction<string>;
    welcomeprompt?: ValidationFunction<string>;
    welcomeprompt_sp?: ValidationFunction<string>;
    updateduser?: ValidationFunction<string>;
    issecondaryclosed?: ValidationFunction<boolean>;
    isoverride?: ValidationFunction<boolean>;
    isholiday?: ValidationFunction<boolean>;
    isafterhours?: ValidationFunction<boolean>;
    presentlangoption?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactCenterModelUpdateFormOverridesProps = {
    ContactCenterModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    mainnumber?: PrimitiveOverrideProps<TextFieldProps>;
    holiday?: PrimitiveOverrideProps<TextFieldProps>;
    secondarytodopen?: PrimitiveOverrideProps<TextFieldProps>;
    secondarytodclose?: PrimitiveOverrideProps<TextFieldProps>;
    daystodopen?: PrimitiveOverrideProps<TextFieldProps>;
    daystodclose?: PrimitiveOverrideProps<TextFieldProps>;
    daysopen?: PrimitiveOverrideProps<TextFieldProps>;
    ccdescription?: PrimitiveOverrideProps<TextFieldProps>;
    defaultroute?: PrimitiveOverrideProps<TextFieldProps>;
    ccname?: PrimitiveOverrideProps<TextFieldProps>;
    welcomeprompt?: PrimitiveOverrideProps<TextFieldProps>;
    welcomeprompt_sp?: PrimitiveOverrideProps<TextFieldProps>;
    updateduser?: PrimitiveOverrideProps<TextFieldProps>;
    issecondaryclosed?: PrimitiveOverrideProps<SwitchFieldProps>;
    isoverride?: PrimitiveOverrideProps<SwitchFieldProps>;
    isholiday?: PrimitiveOverrideProps<SwitchFieldProps>;
    isafterhours?: PrimitiveOverrideProps<SwitchFieldProps>;
    presentlangoption?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ContactCenterModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContactCenterModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contactCenterModel?: ContactCenterModel;
    onSubmit?: (fields: ContactCenterModelUpdateFormInputValues) => ContactCenterModelUpdateFormInputValues;
    onSuccess?: (fields: ContactCenterModelUpdateFormInputValues) => void;
    onError?: (fields: ContactCenterModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactCenterModelUpdateFormInputValues) => ContactCenterModelUpdateFormInputValues;
    onValidate?: ContactCenterModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContactCenterModelUpdateForm(props: ContactCenterModelUpdateFormProps): React.ReactElement;
