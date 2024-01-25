/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
    presentlangoption?: boolean;
    holiday?: string[];
    epiccontext?: string;
};
export declare type UpdateOverrideFormValidationValues = {
    isoverride?: ValidationFunction<boolean>;
    presentlangoption?: ValidationFunction<boolean>;
    holiday?: ValidationFunction<string>;
    epiccontext?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateOverrideFormOverridesProps = {
    UpdateOverrideFormGrid?: PrimitiveOverrideProps<GridProps>;
    isoverride?: PrimitiveOverrideProps<SwitchFieldProps>;
    presentlangoption?: PrimitiveOverrideProps<SwitchFieldProps>;
    SectionalElement0?: PrimitiveOverrideProps<DividerProps>;
    holiday?: PrimitiveOverrideProps<TextFieldProps>;
    epiccontext?: PrimitiveOverrideProps<SelectFieldProps>;
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
