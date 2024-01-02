/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
import { MenuTypeIconmsgProps } from "./MenuTypeIconmsg";
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
export declare type MenuButtonOverridesProps = {
    "1"?: PrimitiveOverrideProps<TextProps>;
    MenuButton?: PrimitiveOverrideProps<FlexProps>;
    "MenuTypeIcon/msg"?: MenuTypeIconmsgProps;
    "Star 1"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type MenuButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    state?: "Default" | "focus" | "hover";
} & {
    overrides?: MenuButtonOverridesProps | undefined | null;
}>;
export default function MenuButton(props: MenuButtonProps): React.ReactElement;
