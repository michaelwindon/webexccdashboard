/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ContactCenterModel } from "../models";
import { DividerProps, FlexProps, SwitchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MenuButtonProps } from "./MenuButton";
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
    "Single Billing Office"?: PrimitiveOverrideProps<TextProps>;
    "713-366-5600"?: PrimitiveOverrideProps<TextProps>;
    statesection?: PrimitiveOverrideProps<FlexProps>;
    "Current State"?: PrimitiveOverrideProps<TextProps>;
    Open38746979?: PrimitiveOverrideProps<TextProps>;
    border3869763?: PrimitiveOverrideProps<FlexProps>;
    Divider3869742?: PrimitiveOverrideProps<DividerProps>;
    welcomepromptsec?: PrimitiveOverrideProps<FlexProps>;
    "Thank you for calling Houston Methodist, Customer Service. <break time=\"1s\"/> If this is an emergency, please hangup, and dial 911. <break time=\"1s\"/>This call may be recorded for quality and training purposes. <break time=\"1s\"/>"?: PrimitiveOverrideProps<TextProps>;
    mainivrcontent?: PrimitiveOverrideProps<FlexProps>;
    ivrbuttonsec?: PrimitiveOverrideProps<FlexProps>;
    MenuButton38716751?: MenuButtonProps;
    MenuButton38716767?: MenuButtonProps;
    MenuButton38716903?: MenuButtonProps;
    MenuButton38716783?: MenuButtonProps;
    MenuButton38716791?: MenuButtonProps;
    MenuButton38716799?: MenuButtonProps;
    MenuButton38716807?: MenuButtonProps;
    MenuButton38716832?: MenuButtonProps;
    MenuButton38716840?: MenuButtonProps;
    blanksec?: PrimitiveOverrideProps<ViewProps>;
    MenuButton38611821?: MenuButtonProps;
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
    Open38726942?: PrimitiveOverrideProps<TextProps>;
    "8:00 AM38726943"?: PrimitiveOverrideProps<TextProps>;
    "8:00 AM38726944"?: PrimitiveOverrideProps<TextProps>;
    "8:00 AM38726945"?: PrimitiveOverrideProps<TextProps>;
    "8:00 AM38726946"?: PrimitiveOverrideProps<TextProps>;
    "8:00 AM38726947"?: PrimitiveOverrideProps<TextProps>;
    Closed38726948?: PrimitiveOverrideProps<TextProps>;
    Closed38726949?: PrimitiveOverrideProps<TextProps>;
    "2ndclosettodsec"?: PrimitiveOverrideProps<FlexProps>;
    "2nd Close"?: PrimitiveOverrideProps<TextProps>;
    "11:30 AM38746962"?: PrimitiveOverrideProps<TextProps>;
    "11:30 AM38746963"?: PrimitiveOverrideProps<TextProps>;
    "11:30 AM38746964"?: PrimitiveOverrideProps<TextProps>;
    "11:30 AM38746965"?: PrimitiveOverrideProps<TextProps>;
    "11:30 AM38746966"?: PrimitiveOverrideProps<TextProps>;
    NA38746967?: PrimitiveOverrideProps<TextProps>;
    NA38746968?: PrimitiveOverrideProps<TextProps>;
    closetodsec38746950?: PrimitiveOverrideProps<FlexProps>;
    "2nd Open"?: PrimitiveOverrideProps<TextProps>;
    "1:30 PM38746952"?: PrimitiveOverrideProps<TextProps>;
    "1:30 PM38746953"?: PrimitiveOverrideProps<TextProps>;
    "1:30 PM38746954"?: PrimitiveOverrideProps<TextProps>;
    "1:30 PM38746955"?: PrimitiveOverrideProps<TextProps>;
    "1:30 PM38746956"?: PrimitiveOverrideProps<TextProps>;
    NA38746957?: PrimitiveOverrideProps<TextProps>;
    NA38746958?: PrimitiveOverrideProps<TextProps>;
    closetodsec38746969?: PrimitiveOverrideProps<FlexProps>;
    Close?: PrimitiveOverrideProps<TextProps>;
    "5:00 PM38746971"?: PrimitiveOverrideProps<TextProps>;
    "5:00 PM38746972"?: PrimitiveOverrideProps<TextProps>;
    "5:00 PM38746973"?: PrimitiveOverrideProps<TextProps>;
    "5:00 PM38746974"?: PrimitiveOverrideProps<TextProps>;
    "5:00 PM38746975"?: PrimitiveOverrideProps<TextProps>;
    Closed38746976?: PrimitiveOverrideProps<TextProps>;
    Closed38746977?: PrimitiveOverrideProps<TextProps>;
    border38746981?: PrimitiveOverrideProps<FlexProps>;
    Divider38746982?: PrimitiveOverrideProps<DividerProps>;
    altmenus?: PrimitiveOverrideProps<FlexProps>;
    SwitchField?: PrimitiveOverrideProps<SwitchFieldProps>;
    MenuButton3878751?: MenuButtonProps;
    MenuButton3878759?: MenuButtonProps;
    MenuButton3878767?: MenuButtonProps;
} & EscapeHatchProps;
export declare type ContactCenterUIProps = React.PropsWithChildren<Partial<FlexProps> & {
    contactcenter?: ContactCenterModel;
} & {
    overrides?: ContactCenterUIOverridesProps | undefined | null;
}>;
export default function ContactCenterUI(props: ContactCenterUIProps): React.ReactElement;
