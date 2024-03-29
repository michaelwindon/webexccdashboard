/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { ContactCenterModel } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import SmallContactCenterCard from "./SmallContactCenterCard";
import { Collection } from "@aws-amplify/ui-react";
export default function SmallContactCenterCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: ContactCenterModel,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          AssignedGroup: await item.AssignedGroup,
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={24}
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "SmallContactCenterCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <SmallContactCenterCard
          contactCenterModel={item}
          height="auto"
          width="auto"
          margin="2px 2px 0 2px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></SmallContactCenterCard>
      )}
    </Collection>
  );
}
