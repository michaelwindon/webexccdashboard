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
export declare type UserModelUpdateFormInputValues = {
    name?: string;
    email?: string;
    telephone?: string;
    profilepic?: string;
    role?: string;
    group?: string[];
};
export declare type UserModelUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    telephone?: ValidationFunction<string>;
    profilepic?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
    group?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserModelUpdateFormOverridesProps = {
    UserModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    telephone?: PrimitiveOverrideProps<TextFieldProps>;
    profilepic?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<SelectFieldProps>;
    group?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userModel?: any;
    onSubmit?: (fields: UserModelUpdateFormInputValues) => UserModelUpdateFormInputValues;
    onSuccess?: (fields: UserModelUpdateFormInputValues) => void;
    onError?: (fields: UserModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserModelUpdateFormInputValues) => UserModelUpdateFormInputValues;
    onValidate?: UserModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserModelUpdateForm(props: UserModelUpdateFormProps): React.ReactElement;
