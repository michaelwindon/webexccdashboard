/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type UserModelCreateFormInputValues = {
    name?: string;
    email?: string;
    telephone?: string;
    profilepic?: string;
    role?: string;
};
export declare type UserModelCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    telephone?: ValidationFunction<string>;
    profilepic?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserModelCreateFormOverridesProps = {
    UserModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    telephone?: PrimitiveOverrideProps<TextFieldProps>;
    profilepic?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type UserModelCreateFormProps = React.PropsWithChildren<{
    overrides?: UserModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserModelCreateFormInputValues) => UserModelCreateFormInputValues;
    onSuccess?: (fields: UserModelCreateFormInputValues) => void;
    onError?: (fields: UserModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserModelCreateFormInputValues) => UserModelCreateFormInputValues;
    onValidate?: UserModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserModelCreateForm(props: UserModelCreateFormProps): React.ReactElement;
