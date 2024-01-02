/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type GroupModelUpdateFormInputValues = {
    fullname?: string;
    abbreviatedname?: string;
};
export declare type GroupModelUpdateFormValidationValues = {
    fullname?: ValidationFunction<string>;
    abbreviatedname?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GroupModelUpdateFormOverridesProps = {
    GroupModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fullname?: PrimitiveOverrideProps<TextFieldProps>;
    abbreviatedname?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GroupModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: GroupModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    groupModel?: GroupModel;
    onSubmit?: (fields: GroupModelUpdateFormInputValues) => GroupModelUpdateFormInputValues;
    onSuccess?: (fields: GroupModelUpdateFormInputValues) => void;
    onError?: (fields: GroupModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GroupModelUpdateFormInputValues) => GroupModelUpdateFormInputValues;
    onValidate?: GroupModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GroupModelUpdateForm(props: GroupModelUpdateFormProps): React.ReactElement;
