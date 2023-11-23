/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, View } from "@aws-amplify/ui-react";
export default function MenuTypeIconmsg(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { sound_max_light: {}, MenuTypeIconmsg: {} },
      variantValues: { type: "msg" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "MenuTypeIconmsg")}
      {...rest}
    >
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "sound_max_light")}
      ></View>
    </Flex>
  );
}
