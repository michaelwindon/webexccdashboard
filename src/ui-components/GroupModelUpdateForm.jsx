/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { GroupModel, ManagerModel, GroupModelManagerModel } from "../models";
import {
  fetchByPath,
  getOverrideProps,
  useDataStoreBinding,
  validateField,
} from "./utils";
import { DataStore } from "aws-amplify/datastore";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function GroupModelUpdateForm(props) {
  const {
    id: idProp,
    groupModel: groupModelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fullname: "",
    abbreviatedname: "",
    Managers: [],
  };
  const [fullname, setFullname] = React.useState(initialValues.fullname);
  const [abbreviatedname, setAbbreviatedname] = React.useState(
    initialValues.abbreviatedname
  );
  const [Managers, setManagers] = React.useState(initialValues.Managers);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = groupModelRecord
      ? { ...initialValues, ...groupModelRecord, Managers: linkedManagers }
      : initialValues;
    setFullname(cleanValues.fullname);
    setAbbreviatedname(cleanValues.abbreviatedname);
    setManagers(cleanValues.Managers ?? []);
    setCurrentManagersValue(undefined);
    setCurrentManagersDisplayValue("");
    setErrors({});
  };
  const [groupModelRecord, setGroupModelRecord] =
    React.useState(groupModelModelProp);
  const [linkedManagers, setLinkedManagers] = React.useState([]);
  const canUnlinkManagers = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(GroupModel, idProp)
        : groupModelModelProp;
      setGroupModelRecord(record);
      const linkedManagers = record
        ? await Promise.all(
            (
              await record.Managers.toArray()
            ).map((r) => {
              return r.managerModel;
            })
          )
        : [];
      setLinkedManagers(linkedManagers);
    };
    queryData();
  }, [idProp, groupModelModelProp]);
  React.useEffect(resetStateValues, [groupModelRecord, linkedManagers]);
  const [currentManagersDisplayValue, setCurrentManagersDisplayValue] =
    React.useState("");
  const [currentManagersValue, setCurrentManagersValue] =
    React.useState(undefined);
  const ManagersRef = React.createRef();
  const getIDValue = {
    Managers: (r) => JSON.stringify({ id: r?.id }),
  };
  const ManagersIdSet = new Set(
    Array.isArray(Managers)
      ? Managers.map((r) => getIDValue.Managers?.(r))
      : getIDValue.Managers?.(Managers)
  );
  const managerModelRecords = useDataStoreBinding({
    type: "collection",
    model: ManagerModel,
  }).items;
  const getDisplayValue = {
    Managers: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    fullname: [],
    abbreviatedname: [],
    Managers: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          fullname,
          abbreviatedname,
          Managers,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const promises = [];
          const managersToLinkMap = new Map();
          const managersToUnLinkMap = new Map();
          const managersMap = new Map();
          const linkedManagersMap = new Map();
          Managers.forEach((r) => {
            const count = managersMap.get(getIDValue.Managers?.(r));
            const newCount = count ? count + 1 : 1;
            managersMap.set(getIDValue.Managers?.(r), newCount);
          });
          linkedManagers.forEach((r) => {
            const count = linkedManagersMap.get(getIDValue.Managers?.(r));
            const newCount = count ? count + 1 : 1;
            linkedManagersMap.set(getIDValue.Managers?.(r), newCount);
          });
          linkedManagersMap.forEach((count, id) => {
            const newCount = managersMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                managersToUnLinkMap.set(id, diffCount);
              }
            } else {
              managersToUnLinkMap.set(id, count);
            }
          });
          managersMap.forEach((count, id) => {
            const originalCount = linkedManagersMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                managersToLinkMap.set(id, diffCount);
              }
            } else {
              managersToLinkMap.set(id, count);
            }
          });
          managersToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const groupModelManagerModelRecords = await DataStore.query(
              GroupModelManagerModel,
              (r) =>
                r.and((r) => {
                  return [
                    r.managerModelId.eq(recordKeys.id),
                    r.groupModelId.eq(groupModelRecord.id),
                  ];
                })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(groupModelManagerModelRecords[i]));
            }
          });
          managersToLinkMap.forEach((count, id) => {
            const managerModelToLink = managerModelRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new GroupModelManagerModel({
                    groupModel: groupModelRecord,
                    managerModel: managerModelToLink,
                  })
                )
              );
            }
          });
          const modelFieldsToSave = {
            fullname: modelFields.fullname,
            abbreviatedname: modelFields.abbreviatedname,
          };
          promises.push(
            DataStore.save(
              GroupModel.copyOf(groupModelRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "GroupModelUpdateForm")}
      {...rest}
    >
      <TextField
        label="Fullname"
        isRequired={false}
        isReadOnly={false}
        value={fullname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname: value,
              abbreviatedname,
              Managers,
            };
            const result = onChange(modelFields);
            value = result?.fullname ?? value;
          }
          if (errors.fullname?.hasError) {
            runValidationTasks("fullname", value);
          }
          setFullname(value);
        }}
        onBlur={() => runValidationTasks("fullname", fullname)}
        errorMessage={errors.fullname?.errorMessage}
        hasError={errors.fullname?.hasError}
        {...getOverrideProps(overrides, "fullname")}
      ></TextField>
      <TextField
        label="Abbreviatedname"
        isRequired={false}
        isReadOnly={false}
        value={abbreviatedname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              abbreviatedname: value,
              Managers,
            };
            const result = onChange(modelFields);
            value = result?.abbreviatedname ?? value;
          }
          if (errors.abbreviatedname?.hasError) {
            runValidationTasks("abbreviatedname", value);
          }
          setAbbreviatedname(value);
        }}
        onBlur={() => runValidationTasks("abbreviatedname", abbreviatedname)}
        errorMessage={errors.abbreviatedname?.errorMessage}
        hasError={errors.abbreviatedname?.hasError}
        {...getOverrideProps(overrides, "abbreviatedname")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              fullname,
              abbreviatedname,
              Managers: values,
            };
            const result = onChange(modelFields);
            values = result?.Managers ?? values;
          }
          setManagers(values);
          setCurrentManagersValue(undefined);
          setCurrentManagersDisplayValue("");
        }}
        currentFieldValue={currentManagersValue}
        label={"Managers"}
        items={Managers}
        hasError={errors?.Managers?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Managers", currentManagersValue)
        }
        errorMessage={errors?.Managers?.errorMessage}
        getBadgeText={getDisplayValue.Managers}
        setFieldValue={(model) => {
          setCurrentManagersDisplayValue(
            model ? getDisplayValue.Managers(model) : ""
          );
          setCurrentManagersValue(model);
        }}
        inputFieldRef={ManagersRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Managers"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ManagerModel"
          value={currentManagersDisplayValue}
          options={managerModelRecords
            .filter((r) => !ManagersIdSet.has(getIDValue.Managers?.(r)))
            .map((r) => ({
              id: getIDValue.Managers?.(r),
              label: getDisplayValue.Managers?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentManagersValue(
              managerModelRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentManagersDisplayValue(label);
            runValidationTasks("Managers", label);
          }}
          onClear={() => {
            setCurrentManagersDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Managers?.hasError) {
              runValidationTasks("Managers", value);
            }
            setCurrentManagersDisplayValue(value);
            setCurrentManagersValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Managers", currentManagersDisplayValue)
          }
          errorMessage={errors.Managers?.errorMessage}
          hasError={errors.Managers?.hasError}
          ref={ManagersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Managers")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || groupModelModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || groupModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
