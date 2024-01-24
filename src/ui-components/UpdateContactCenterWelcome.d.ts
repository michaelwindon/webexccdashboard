/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type UpdateContactCenterWelcomeInputValues = {
    ccname?: string;
    welcomeprompt?: string;
    epiccontext?: string;
    ccdescription?: string;
};
export declare type UpdateContactCenterWelcomeValidationValues = {
    ccname?: ValidationFunction<string>;
    welcomeprompt?: ValidationFunction<string>;
    epiccontext?: ValidationFunction<string>;
    ccdescription?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateContactCenterWelcomeOverridesProps = {
    UpdateContactCenterWelcomeGrid?: PrimitiveOverrideProps<GridProps>;
    ccname?: PrimitiveOverrideProps<TextFieldProps>;
    welcomeprompt?: PrimitiveOverrideProps<TextFieldProps>;
    epiccontext?: PrimitiveOverrideProps<TextFieldProps>;
    ccdescription?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UpdateContactCenterWelcomeProps = React.PropsWithChildren<{
    overrides?: UpdateContactCenterWelcomeOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UpdateContactCenterWelcomeInputValues) => UpdateContactCenterWelcomeInputValues;
    onSuccess?: (fields: UpdateContactCenterWelcomeInputValues) => void;
    onError?: (fields: UpdateContactCenterWelcomeInputValues, errorMessage: string) => void;
    onChange?: (fields: UpdateContactCenterWelcomeInputValues) => UpdateContactCenterWelcomeInputValues;
    onValidate?: UpdateContactCenterWelcomeValidationValues;
} & React.CSSProperties>;
export default function UpdateContactCenterWelcome(props: UpdateContactCenterWelcomeProps): React.ReactElement;
