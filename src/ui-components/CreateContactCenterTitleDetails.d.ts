/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ManagerModel, GroupModel } from "../models";
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
export declare type CreateContactCenterTitleDetailsInputValues = {
    ccname?: string;
    mainnumber?: string;
    ccdescription?: string;
    Managers?: ManagerModel[];
    AssignedGroup?: GroupModel;
    epiccontext?: string;
};
export declare type CreateContactCenterTitleDetailsValidationValues = {
    ccname?: ValidationFunction<string>;
    mainnumber?: ValidationFunction<string>;
    ccdescription?: ValidationFunction<string>;
    Managers?: ValidationFunction<ManagerModel>;
    AssignedGroup?: ValidationFunction<GroupModel>;
    epiccontext?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateContactCenterTitleDetailsOverridesProps = {
    CreateContactCenterTitleDetailsGrid?: PrimitiveOverrideProps<GridProps>;
    ccname?: PrimitiveOverrideProps<TextFieldProps>;
    mainnumber?: PrimitiveOverrideProps<TextFieldProps>;
    ccdescription?: PrimitiveOverrideProps<TextFieldProps>;
    Managers?: PrimitiveOverrideProps<AutocompleteProps>;
    AssignedGroup?: PrimitiveOverrideProps<AutocompleteProps>;
    epiccontext?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateContactCenterTitleDetailsProps = React.PropsWithChildren<{
    overrides?: CreateContactCenterTitleDetailsOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateContactCenterTitleDetailsInputValues) => CreateContactCenterTitleDetailsInputValues;
    onSuccess?: (fields: CreateContactCenterTitleDetailsInputValues) => void;
    onError?: (fields: CreateContactCenterTitleDetailsInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateContactCenterTitleDetailsInputValues) => CreateContactCenterTitleDetailsInputValues;
    onValidate?: CreateContactCenterTitleDetailsValidationValues;
} & React.CSSProperties>;
export default function CreateContactCenterTitleDetails(props: CreateContactCenterTitleDetailsProps): React.ReactElement;
