/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ContactCenterModelCreateFormInputValues = {
    mainnumber?: string;
    menu0?: string;
    menu1?: string;
    menu2?: string;
    menu3?: string;
    menu4?: string;
    menu5?: string;
    menu6?: string;
    menu7?: string;
    menu8?: string;
    menu9?: string;
    holiday?: string[];
    secondarytodclose?: string[];
    secondarytodopen?: string[];
    daysopen?: string[];
    daystodopen?: string[];
    daystodclose?: string[];
    welcomeprompt?: string;
    afterhours?: string;
    ccdescription?: string;
    ccname?: string;
    defaultroute?: string;
    holidayoption?: string;
    isoverride?: boolean;
    submenu2?: string;
    welcomeprompt_sp?: string;
    submenu2_sp?: string;
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
    version?: string;
    Managers?: ManagerModel[];
    AssignedGroup?: GroupModel;
    override?: string;
    secondaryclose?: string;
    updateduser?: string;
};
export declare type ContactCenterModelCreateFormValidationValues = {
    mainnumber?: ValidationFunction<string>;
    menu0?: ValidationFunction<string>;
    menu1?: ValidationFunction<string>;
    menu2?: ValidationFunction<string>;
    menu3?: ValidationFunction<string>;
    menu4?: ValidationFunction<string>;
    menu5?: ValidationFunction<string>;
    menu6?: ValidationFunction<string>;
    menu7?: ValidationFunction<string>;
    menu8?: ValidationFunction<string>;
    menu9?: ValidationFunction<string>;
    holiday?: ValidationFunction<string>;
    secondarytodclose?: ValidationFunction<string>;
    secondarytodopen?: ValidationFunction<string>;
    daysopen?: ValidationFunction<string>;
    daystodopen?: ValidationFunction<string>;
    daystodclose?: ValidationFunction<string>;
    welcomeprompt?: ValidationFunction<string>;
    afterhours?: ValidationFunction<string>;
    ccdescription?: ValidationFunction<string>;
    ccname?: ValidationFunction<string>;
    defaultroute?: ValidationFunction<string>;
    holidayoption?: ValidationFunction<string>;
    isoverride?: ValidationFunction<boolean>;
    submenu2?: ValidationFunction<string>;
    welcomeprompt_sp?: ValidationFunction<string>;
    submenu2_sp?: ValidationFunction<string>;
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
    version?: ValidationFunction<string>;
    Managers?: ValidationFunction<ManagerModel>;
    AssignedGroup?: ValidationFunction<GroupModel>;
    override?: ValidationFunction<string>;
    secondaryclose?: ValidationFunction<string>;
    updateduser?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactCenterModelCreateFormOverridesProps = {
    ContactCenterModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    mainnumber?: PrimitiveOverrideProps<TextFieldProps>;
    menu0?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu1?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu2?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu3?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu4?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu5?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu6?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu7?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu8?: PrimitiveOverrideProps<TextAreaFieldProps>;
    menu9?: PrimitiveOverrideProps<TextAreaFieldProps>;
    holiday?: PrimitiveOverrideProps<TextFieldProps>;
    secondarytodclose?: PrimitiveOverrideProps<TextFieldProps>;
    secondarytodopen?: PrimitiveOverrideProps<TextFieldProps>;
    daysopen?: PrimitiveOverrideProps<TextFieldProps>;
    daystodopen?: PrimitiveOverrideProps<TextFieldProps>;
    daystodclose?: PrimitiveOverrideProps<TextFieldProps>;
    welcomeprompt?: PrimitiveOverrideProps<TextFieldProps>;
    afterhours?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ccdescription?: PrimitiveOverrideProps<TextFieldProps>;
    ccname?: PrimitiveOverrideProps<TextFieldProps>;
    defaultroute?: PrimitiveOverrideProps<TextFieldProps>;
    holidayoption?: PrimitiveOverrideProps<TextAreaFieldProps>;
    isoverride?: PrimitiveOverrideProps<SwitchFieldProps>;
    submenu2?: PrimitiveOverrideProps<TextAreaFieldProps>;
    welcomeprompt_sp?: PrimitiveOverrideProps<TextFieldProps>;
    submenu2_sp?: PrimitiveOverrideProps<TextAreaFieldProps>;
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
    version?: PrimitiveOverrideProps<TextFieldProps>;
    Managers?: PrimitiveOverrideProps<AutocompleteProps>;
    AssignedGroup?: PrimitiveOverrideProps<AutocompleteProps>;
    override?: PrimitiveOverrideProps<TextAreaFieldProps>;
    secondaryclose?: PrimitiveOverrideProps<TextAreaFieldProps>;
    updateduser?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactCenterModelCreateFormProps = React.PropsWithChildren<{
    overrides?: ContactCenterModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactCenterModelCreateFormInputValues) => ContactCenterModelCreateFormInputValues;
    onSuccess?: (fields: ContactCenterModelCreateFormInputValues) => void;
    onError?: (fields: ContactCenterModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactCenterModelCreateFormInputValues) => ContactCenterModelCreateFormInputValues;
    onValidate?: ContactCenterModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContactCenterModelCreateForm(props: ContactCenterModelCreateFormProps): React.ReactElement;
