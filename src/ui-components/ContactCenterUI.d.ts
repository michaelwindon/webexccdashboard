/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ContactCenterModel } from "../models";
import { ButtonProps, DividerProps, FlexProps, SwitchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactCenterUIOverridesProps = {
    ContactCenterUI?: PrimitiveOverrideProps<FlexProps>;
    headerbar?: PrimitiveOverrideProps<FlexProps>;
    titlesection?: PrimitiveOverrideProps<FlexProps>;
    ccname?: PrimitiveOverrideProps<TextProps>;
    ccmainnumber?: PrimitiveOverrideProps<TextProps>;
    statesection?: PrimitiveOverrideProps<FlexProps>;
    "Current State"?: PrimitiveOverrideProps<TextProps>;
    currentstatsvalue?: PrimitiveOverrideProps<TextProps>;
    border3869763?: PrimitiveOverrideProps<FlexProps>;
    Divider3869742?: PrimitiveOverrideProps<DividerProps>;
    welcomepromptsec?: PrimitiveOverrideProps<FlexProps>;
    "Thank you for calling Houston Methodist, Customer Service. <break time=\"1s\"/> If this is an emergency, please hangup, and dial 911. <break time=\"1s\"/>This call may be recorded for quality and training purposes. <break time=\"1s\"/>"?: PrimitiveOverrideProps<TextProps>;
    mainivrcontent?: PrimitiveOverrideProps<FlexProps>;
    ivrbuttonsec?: PrimitiveOverrideProps<FlexProps>;
    rowone?: PrimitiveOverrideProps<ViewProps>;
    ButtonOne?: PrimitiveOverrideProps<ButtonProps>;
    ButtonTwo?: PrimitiveOverrideProps<ButtonProps>;
    ButtonThree?: PrimitiveOverrideProps<ButtonProps>;
    rowtwo?: PrimitiveOverrideProps<ViewProps>;
    ButtonFour?: PrimitiveOverrideProps<ButtonProps>;
    ButtonFive?: PrimitiveOverrideProps<ButtonProps>;
    ButtonSix?: PrimitiveOverrideProps<ButtonProps>;
    rowthree?: PrimitiveOverrideProps<ViewProps>;
    ButtonSeven?: PrimitiveOverrideProps<ButtonProps>;
    ButtonEight?: PrimitiveOverrideProps<ButtonProps>;
    ButtonNine?: PrimitiveOverrideProps<ButtonProps>;
    row4?: PrimitiveOverrideProps<ViewProps>;
    ButtonZero?: PrimitiveOverrideProps<ButtonProps>;
    todsec?: PrimitiveOverrideProps<FlexProps>;
    daysec?: PrimitiveOverrideProps<FlexProps>;
    Days?: PrimitiveOverrideProps<TextProps>;
    MON?: PrimitiveOverrideProps<TextProps>;
    TUE?: PrimitiveOverrideProps<TextProps>;
    WED?: PrimitiveOverrideProps<TextProps>;
    THU?: PrimitiveOverrideProps<TextProps>;
    FRI?: PrimitiveOverrideProps<TextProps>;
    SAT?: PrimitiveOverrideProps<TextProps>;
    SUN?: PrimitiveOverrideProps<TextProps>;
    openttodsec?: PrimitiveOverrideProps<FlexProps>;
    opentitle?: PrimitiveOverrideProps<TextProps>;
    openlabel1?: PrimitiveOverrideProps<TextProps>;
    openlabel2?: PrimitiveOverrideProps<TextProps>;
    openlabel3?: PrimitiveOverrideProps<TextProps>;
    openlabel4?: PrimitiveOverrideProps<TextProps>;
    openlabel5?: PrimitiveOverrideProps<TextProps>;
    openlabel6?: PrimitiveOverrideProps<TextProps>;
    openlabel0?: PrimitiveOverrideProps<TextProps>;
    "2ndclosettodsec"?: PrimitiveOverrideProps<FlexProps>;
    secclosetitle?: PrimitiveOverrideProps<TextProps>;
    seccloselabel1?: PrimitiveOverrideProps<TextProps>;
    seccloselabel2?: PrimitiveOverrideProps<TextProps>;
    seccloselabel3?: PrimitiveOverrideProps<TextProps>;
    seccloselabel4?: PrimitiveOverrideProps<TextProps>;
    seccloselabel5?: PrimitiveOverrideProps<TextProps>;
    seccloselabel6?: PrimitiveOverrideProps<TextProps>;
    seccloselabel0?: PrimitiveOverrideProps<TextProps>;
    closetodsec38746950?: PrimitiveOverrideProps<FlexProps>;
    secopentitle?: PrimitiveOverrideProps<TextProps>;
    secopenlabel1?: PrimitiveOverrideProps<TextProps>;
    secopenlabel2?: PrimitiveOverrideProps<TextProps>;
    secopenlabel3?: PrimitiveOverrideProps<TextProps>;
    secopenlabel4?: PrimitiveOverrideProps<TextProps>;
    secopenlabel5?: PrimitiveOverrideProps<TextProps>;
    secopenlabel6?: PrimitiveOverrideProps<TextProps>;
    secopenlabel7?: PrimitiveOverrideProps<TextProps>;
    closetodsec38746969?: PrimitiveOverrideProps<FlexProps>;
    Closetitle?: PrimitiveOverrideProps<TextProps>;
    closelabel1?: PrimitiveOverrideProps<TextProps>;
    closelabel2?: PrimitiveOverrideProps<TextProps>;
    closelabel3?: PrimitiveOverrideProps<TextProps>;
    closelabel4?: PrimitiveOverrideProps<TextProps>;
    closelabel5?: PrimitiveOverrideProps<TextProps>;
    closelabel6?: PrimitiveOverrideProps<TextProps>;
    closelabel0?: PrimitiveOverrideProps<TextProps>;
    border38746981?: PrimitiveOverrideProps<FlexProps>;
    Divider38746982?: PrimitiveOverrideProps<DividerProps>;
    altmenus?: PrimitiveOverrideProps<FlexProps>;
    SwitchField?: PrimitiveOverrideProps<SwitchFieldProps>;
    ButtonOverride?: PrimitiveOverrideProps<ButtonProps>;
    ButtonAfterhours?: PrimitiveOverrideProps<ButtonProps>;
    ButtonHoliday?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ContactCenterUIProps = React.PropsWithChildren<Partial<FlexProps> & {
    contactcentermodel?: ContactCenterModel;
} & {
    overrides?: ContactCenterUIOverridesProps | undefined | null;
}>;
export default function ContactCenterUI(props: ContactCenterUIProps): React.ReactElement;
