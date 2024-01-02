/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ManagerModel } from "../models";
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
export declare type ManagerModelUpdateFormInputValues = {
    name?: string;
    email?: string;
    telephone?: string;
    profilepic?: string;
    role?: string;
};
export declare type ManagerModelUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    telephone?: ValidationFunction<string>;
    profilepic?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ManagerModelUpdateFormOverridesProps = {
    ManagerModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    telephone?: PrimitiveOverrideProps<TextFieldProps>;
    profilepic?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ManagerModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: ManagerModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    managerModel?: ManagerModel;
    onSubmit?: (fields: ManagerModelUpdateFormInputValues) => ManagerModelUpdateFormInputValues;
    onSuccess?: (fields: ManagerModelUpdateFormInputValues) => void;
    onError?: (fields: ManagerModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ManagerModelUpdateFormInputValues) => ManagerModelUpdateFormInputValues;
    onValidate?: ManagerModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ManagerModelUpdateForm(props: ManagerModelUpdateFormProps): React.ReactElement;
