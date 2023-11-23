/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { GroupModel } from "../models";
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
export declare type QueueModelCreateFormInputValues = {
    name?: string;
    Group?: GroupModel;
};
export declare type QueueModelCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    Group?: ValidationFunction<GroupModel>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QueueModelCreateFormOverridesProps = {
    QueueModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Group?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type QueueModelCreateFormProps = React.PropsWithChildren<{
    overrides?: QueueModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: QueueModelCreateFormInputValues) => QueueModelCreateFormInputValues;
    onSuccess?: (fields: QueueModelCreateFormInputValues) => void;
    onError?: (fields: QueueModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QueueModelCreateFormInputValues) => QueueModelCreateFormInputValues;
    onValidate?: QueueModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function QueueModelCreateForm(props: QueueModelCreateFormProps): React.ReactElement;
