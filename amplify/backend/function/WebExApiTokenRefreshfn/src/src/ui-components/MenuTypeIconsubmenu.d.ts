/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type MenuTypeIconsubmenuOverridesProps = {
    MenuTypeIconsubmenu?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 25"?: PrimitiveOverrideProps<ViewProps>;
    "Vector 59"?: PrimitiveOverrideProps<IconProps>;
    "Vector 60"?: PrimitiveOverrideProps<IconProps>;
    "Vector 61"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type MenuTypeIconsubmenuProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MenuTypeIconsubmenuOverridesProps | undefined | null;
}>;
export default function MenuTypeIconsubmenu(props: MenuTypeIconsubmenuProps): React.ReactElement;
