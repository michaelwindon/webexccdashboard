/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { KeyStore } from "../models";
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
export declare type KeyStoreUpdateFormInputValues = {
    org_id?: string;
    access_token?: string;
    expires_in?: number;
    refresh_token?: string;
    refresh_token_expires_in?: number;
    token_type?: string;
};
export declare type KeyStoreUpdateFormValidationValues = {
    org_id?: ValidationFunction<string>;
    access_token?: ValidationFunction<string>;
    expires_in?: ValidationFunction<number>;
    refresh_token?: ValidationFunction<string>;
    refresh_token_expires_in?: ValidationFunction<number>;
    token_type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KeyStoreUpdateFormOverridesProps = {
    KeyStoreUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    org_id?: PrimitiveOverrideProps<TextFieldProps>;
    access_token?: PrimitiveOverrideProps<TextFieldProps>;
    expires_in?: PrimitiveOverrideProps<TextFieldProps>;
    refresh_token?: PrimitiveOverrideProps<TextFieldProps>;
    refresh_token_expires_in?: PrimitiveOverrideProps<TextFieldProps>;
    token_type?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type KeyStoreUpdateFormProps = React.PropsWithChildren<{
    overrides?: KeyStoreUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    keyStore?: KeyStore;
    onSubmit?: (fields: KeyStoreUpdateFormInputValues) => KeyStoreUpdateFormInputValues;
    onSuccess?: (fields: KeyStoreUpdateFormInputValues) => void;
    onError?: (fields: KeyStoreUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: KeyStoreUpdateFormInputValues) => KeyStoreUpdateFormInputValues;
    onValidate?: KeyStoreUpdateFormValidationValues;
} & React.CSSProperties>;
export default function KeyStoreUpdateForm(props: KeyStoreUpdateFormProps): React.ReactElement;
