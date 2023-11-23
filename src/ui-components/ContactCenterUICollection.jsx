/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import ContactCenterUI from "./ContactCenterUI";
import { getOverrideProps } from "./utils";
import { Collection } from "@aws-amplify/ui-react";
export default function ContactCenterUICollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "ContactCenterUICollection")}
      {...rest}
    >
      {(item, index) => (
        <ContactCenterUI
          height="auto"
          width="auto"
          margin="0 0 0 10px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ContactCenterUI>
      )}
    </Collection>
  );
}
