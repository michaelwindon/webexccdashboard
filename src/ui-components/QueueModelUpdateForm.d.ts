/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { QueueModel, GroupModel } from "../models";
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
export declare type QueueModelUpdateFormInputValues = {
    name?: string;
    Group?: GroupModel;
};
export declare type QueueModelUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    Group?: ValidationFunction<GroupModel>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QueueModelUpdateFormOverridesProps = {
    QueueModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Group?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type QueueModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: QueueModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    queueModel?: QueueModel;
    onSubmit?: (fields: QueueModelUpdateFormInputValues) => QueueModelUpdateFormInputValues;
    onSuccess?: (fields: QueueModelUpdateFormInputValues) => void;
    onError?: (fields: QueueModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QueueModelUpdateFormInputValues) => QueueModelUpdateFormInputValues;
    onValidate?: QueueModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QueueModelUpdateForm(props: QueueModelUpdateFormProps): React.ReactElement;
