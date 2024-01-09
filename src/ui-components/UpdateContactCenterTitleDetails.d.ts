/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ContactCenterModel, ManagerModel, GroupModel } from "../models";
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
export declare type UpdateContactCenterTitleDetailsInputValues = {
    ccname?: string;
    mainnumber?: string;
    ccdescription?: string;
    Managers?: ManagerModel[];
    AssignedGroup?: GroupModel;
};
export declare type UpdateContactCenterTitleDetailsValidationValues = {
    ccname?: ValidationFunction<string>;
    mainnumber?: ValidationFunction<string>;
    ccdescription?: ValidationFunction<string>;
    Managers?: ValidationFunction<ManagerModel>;
    AssignedGroup?: ValidationFunction<GroupModel>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateContactCenterTitleDetailsOverridesProps = {
    UpdateContactCenterTitleDetailsGrid?: PrimitiveOverrideProps<GridProps>;
    ccname?: PrimitiveOverrideProps<TextFieldProps>;
    mainnumber?: PrimitiveOverrideProps<TextFieldProps>;
    ccdescription?: PrimitiveOverrideProps<TextFieldProps>;
    Managers?: PrimitiveOverrideProps<AutocompleteProps>;
    AssignedGroup?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type UpdateContactCenterTitleDetailsProps = React.PropsWithChildren<{
    overrides?: UpdateContactCenterTitleDetailsOverridesProps | undefined | null;
} & {
    id?: string;
    contactCenterModel?: ContactCenterModel;
    onSubmit?: (fields: UpdateContactCenterTitleDetailsInputValues) => UpdateContactCenterTitleDetailsInputValues;
    onSuccess?: (fields: UpdateContactCenterTitleDetailsInputValues) => void;
    onError?: (fields: UpdateContactCenterTitleDetailsInputValues, errorMessage: string) => void;
    onChange?: (fields: UpdateContactCenterTitleDetailsInputValues) => UpdateContactCenterTitleDetailsInputValues;
    onValidate?: UpdateContactCenterTitleDetailsValidationValues;
} & React.CSSProperties>;
export default function UpdateContactCenterTitleDetails(props: UpdateContactCenterTitleDetailsProps): React.ReactElement;
