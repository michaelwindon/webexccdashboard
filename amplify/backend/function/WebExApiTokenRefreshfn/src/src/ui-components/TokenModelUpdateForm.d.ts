/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TokenModel } from "../models";
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
export declare type TokenModelUpdateFormInputValues = {
    org_id?: string;
    access_token?: string;
    expires_in?: number;
    refresh_token?: string;
    refresh_token_expires_in?: string;
    token_type?: string;
};
export declare type TokenModelUpdateFormValidationValues = {
    org_id?: ValidationFunction<string>;
    access_token?: ValidationFunction<string>;
    expires_in?: ValidationFunction<number>;
    refresh_token?: ValidationFunction<string>;
    refresh_token_expires_in?: ValidationFunction<string>;
    token_type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TokenModelUpdateFormOverridesProps = {
    TokenModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    org_id?: PrimitiveOverrideProps<TextFieldProps>;
    access_token?: PrimitiveOverrideProps<TextFieldProps>;
    expires_in?: PrimitiveOverrideProps<TextFieldProps>;
    refresh_token?: PrimitiveOverrideProps<TextFieldProps>;
    refresh_token_expires_in?: PrimitiveOverrideProps<TextFieldProps>;
    token_type?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TokenModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: TokenModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tokenModel?: TokenModel;
    onSubmit?: (fields: TokenModelUpdateFormInputValues) => TokenModelUpdateFormInputValues;
    onSuccess?: (fields: TokenModelUpdateFormInputValues) => void;
    onError?: (fields: TokenModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TokenModelUpdateFormInputValues) => TokenModelUpdateFormInputValues;
    onValidate?: TokenModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TokenModelUpdateForm(props: TokenModelUpdateFormProps): React.ReactElement;
