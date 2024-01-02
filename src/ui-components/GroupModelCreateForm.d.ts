/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type GroupModelCreateFormInputValues = {
    fullname?: string;
    abbreviatedname?: string;
    Managers?: ManagerModel[];
};
export declare type GroupModelCreateFormValidationValues = {
    fullname?: ValidationFunction<string>;
    abbreviatedname?: ValidationFunction<string>;
    Managers?: ValidationFunction<ManagerModel>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GroupModelCreateFormOverridesProps = {
    GroupModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fullname?: PrimitiveOverrideProps<TextFieldProps>;
    abbreviatedname?: PrimitiveOverrideProps<TextFieldProps>;
    Managers?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type GroupModelCreateFormProps = React.PropsWithChildren<{
    overrides?: GroupModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GroupModelCreateFormInputValues) => GroupModelCreateFormInputValues;
    onSuccess?: (fields: GroupModelCreateFormInputValues) => void;
    onError?: (fields: GroupModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GroupModelCreateFormInputValues) => GroupModelCreateFormInputValues;
    onValidate?: GroupModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function GroupModelCreateForm(props: GroupModelCreateFormProps): React.ReactElement;
