/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { ContactCenterModel } from "../models";
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
export declare type UpdateMenuFormInputValues = {
    menu0?: string;
<<<<<<< HEAD
    menu1?: string;
    menu2?: string;
    menu3?: string;
    menu4?: string;
    menu5?: string;
    menu6?: string;
    menu7?: string;
    menu8?: string;
    menu9?: string;
    menu0_sp?: string;
    menu1_sp?: string;
    menu2_sp?: string;
    menu3_sp?: string;
    menu4_sp?: string;
    menu5_sp?: string;
    menu6_sp?: string;
    menu7_sp?: string;
    menu8_sp?: string;
    menu9_sp?: string;
    issecondaryclosed?: boolean;
=======
    Field0?: string;
    Field1?: string;
    presentlangoption?: boolean;
    isholiday?: boolean;
    isafterhours?: boolean;
    issecondaryclosed?: boolean;
    epiccontext?: string;
>>>>>>> dev
    submenu1?: string;
    submenu2?: string;
    submenu3?: string;
    submenu4?: string;
    submenu5?: string;
    submenu6?: string;
    submenu7?: string;
    submenu8?: string;
    submenu9?: string;
    submenu0?: string;
    submenu1_sp?: string;
    submenu2_sp?: string;
    submenu3_sp?: string;
    submenu4_sp?: string;
    submenu5_sp?: string;
    submenu6_sp?: string;
    submenu7_sp?: string;
    submenu8_sp?: string;
    submenu9_sp?: string;
    submenu0_sp?: string;
};
export declare type UpdateMenuFormValidationValues = {
    menu0?: ValidationFunction<string>;
<<<<<<< HEAD
    menu1?: ValidationFunction<string>;
    menu2?: ValidationFunction<string>;
    menu3?: ValidationFunction<string>;
    menu4?: ValidationFunction<string>;
    menu5?: ValidationFunction<string>;
    menu6?: ValidationFunction<string>;
    menu7?: ValidationFunction<string>;
    menu8?: ValidationFunction<string>;
    menu9?: ValidationFunction<string>;
    menu0_sp?: ValidationFunction<string>;
    menu1_sp?: ValidationFunction<string>;
    menu2_sp?: ValidationFunction<string>;
    menu3_sp?: ValidationFunction<string>;
    menu4_sp?: ValidationFunction<string>;
    menu5_sp?: ValidationFunction<string>;
    menu6_sp?: ValidationFunction<string>;
    menu7_sp?: ValidationFunction<string>;
    menu8_sp?: ValidationFunction<string>;
    menu9_sp?: ValidationFunction<string>;
    issecondaryclosed?: ValidationFunction<boolean>;
=======
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    presentlangoption?: ValidationFunction<boolean>;
    isholiday?: ValidationFunction<boolean>;
    isafterhours?: ValidationFunction<boolean>;
    issecondaryclosed?: ValidationFunction<boolean>;
    epiccontext?: ValidationFunction<string>;
>>>>>>> dev
    submenu1?: ValidationFunction<string>;
    submenu2?: ValidationFunction<string>;
    submenu3?: ValidationFunction<string>;
    submenu4?: ValidationFunction<string>;
    submenu5?: ValidationFunction<string>;
    submenu6?: ValidationFunction<string>;
    submenu7?: ValidationFunction<string>;
    submenu8?: ValidationFunction<string>;
    submenu9?: ValidationFunction<string>;
    submenu0?: ValidationFunction<string>;
    submenu1_sp?: ValidationFunction<string>;
    submenu2_sp?: ValidationFunction<string>;
    submenu3_sp?: ValidationFunction<string>;
    submenu4_sp?: ValidationFunction<string>;
    submenu5_sp?: ValidationFunction<string>;
    submenu6_sp?: ValidationFunction<string>;
    submenu7_sp?: ValidationFunction<string>;
    submenu8_sp?: ValidationFunction<string>;
    submenu9_sp?: ValidationFunction<string>;
    submenu0_sp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateMenuFormOverridesProps = {
    UpdateMenuFormGrid?: PrimitiveOverrideProps<GridProps>;
    menu0?: PrimitiveOverrideProps<TextAreaFieldProps>;
<<<<<<< HEAD
    menu1?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu2?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu3?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu4?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu5?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu6?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu7?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu8?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu9?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu0_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu1_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu2_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu3_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu4_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu5_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu6_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu7_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu8_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu9_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    issecondaryclosed?: PrimitiveOverrideProps<SwitchFieldProps>;
=======
    Field0?: PrimitiveOverrideProps<SelectFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
    presentlangoption?: PrimitiveOverrideProps<SwitchFieldProps>;
    isholiday?: PrimitiveOverrideProps<SwitchFieldProps>;
    isafterhours?: PrimitiveOverrideProps<SwitchFieldProps>;
    issecondaryclosed?: PrimitiveOverrideProps<SwitchFieldProps>;
    epiccontext?: PrimitiveOverrideProps<TextFieldProps>;
>>>>>>> dev
    submenu1?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu2?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu3?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu4?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu5?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu6?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu7?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu8?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu9?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu0?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu1_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu2_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu3_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu4_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu5_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu6_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu7_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu8_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu9_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submenu0_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type UpdateMenuFormProps = React.PropsWithChildren<{
    overrides?: UpdateMenuFormOverridesProps | undefined | null;
} & {
    id?: string;
    contactCenterModel?: ContactCenterModel;
    onSubmit?: (fields: UpdateMenuFormInputValues) => UpdateMenuFormInputValues;
    onSuccess?: (fields: UpdateMenuFormInputValues) => void;
    onError?: (fields: UpdateMenuFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UpdateMenuFormInputValues) => UpdateMenuFormInputValues;
    onValidate?: UpdateMenuFormValidationValues;
} & React.CSSProperties>;
export default function UpdateMenuForm(props: UpdateMenuFormProps): React.ReactElement;
