/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { ContactCenterModel } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
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
export default function UpdateOverrideForm(props) {
  const {
    id: idProp,
    contactCenterModel: contactCenterModelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    isoverride: false,
    presentlangoption: false,
    holiday: [],
  };
  const [isoverride, setIsoverride] = React.useState(initialValues.isoverride);
  const [presentlangoption, setPresentlangoption] = React.useState(
    initialValues.presentlangoption
  );
  const [holiday, setHoliday] = React.useState(initialValues.holiday);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = contactCenterModelRecord
      ? { ...initialValues, ...contactCenterModelRecord }
      : initialValues;
    setIsoverride(cleanValues.isoverride);
    setPresentlangoption(cleanValues.presentlangoption);
    setHoliday(cleanValues.holiday ?? []);
    setCurrentHolidayValue("");
    setErrors({});
  };
  const [contactCenterModelRecord, setContactCenterModelRecord] =
    React.useState(contactCenterModelModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ContactCenterModel, idProp)
        : contactCenterModelModelProp;
      setContactCenterModelRecord(record);
    };
    queryData();
  }, [idProp, contactCenterModelModelProp]);
  React.useEffect(resetStateValues, [contactCenterModelRecord]);
  const [currentHolidayValue, setCurrentHolidayValue] = React.useState("");
  const holidayRef = React.createRef();
  const validations = {
    isoverride: [],
    presentlangoption: [],
    holiday: [],
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
          isoverride,
          presentlangoption,
          holiday,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
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
          await DataStore.save(
            ContactCenterModel.copyOf(contactCenterModelRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UpdateOverrideForm")}
      {...rest}
    >
      <SwitchField
        label="Isoverride"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isoverride}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isoverride: value,
              presentlangoption,
              holiday,
            };
            const result = onChange(modelFields);
            value = result?.isoverride ?? value;
          }
          if (errors.isoverride?.hasError) {
            runValidationTasks("isoverride", value);
          }
          setIsoverride(value);
        }}
        onBlur={() => runValidationTasks("isoverride", isoverride)}
        errorMessage={errors.isoverride?.errorMessage}
        hasError={errors.isoverride?.hasError}
        {...getOverrideProps(overrides, "isoverride")}
      ></SwitchField>
      <SwitchField
        label="Present Spanish Option"
        defaultChecked={false}
        isDisabled={false}
        isChecked={presentlangoption}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isoverride,
              presentlangoption: value,
              holiday,
            };
            const result = onChange(modelFields);
            value = result?.presentlangoption ?? value;
          }
          if (errors.presentlangoption?.hasError) {
            runValidationTasks("presentlangoption", value);
          }
          setPresentlangoption(value);
        }}
        onBlur={() =>
          runValidationTasks("presentlangoption", presentlangoption)
        }
        errorMessage={errors.presentlangoption?.errorMessage}
        hasError={errors.presentlangoption?.hasError}
        {...getOverrideProps(overrides, "presentlangoption")}
      ></SwitchField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Divider>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              isoverride,
              presentlangoption,
              holiday: values,
            };
            const result = onChange(modelFields);
            values = result?.holiday ?? values;
          }
          setHoliday(values);
          setCurrentHolidayValue("");
        }}
        currentFieldValue={currentHolidayValue}
        label={"Holiday"}
        items={holiday}
        hasError={errors?.holiday?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("holiday", currentHolidayValue)
        }
        errorMessage={errors?.holiday?.errorMessage}
        setFieldValue={setCurrentHolidayValue}
        inputFieldRef={holidayRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Holiday"
          descriptiveText="Enter the date the contact center will be closed for holiday."
          isRequired={false}
          isReadOnly={false}
          placeholder="MM/DD/YYYY"
          value={currentHolidayValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.holiday?.hasError) {
              runValidationTasks("holiday", value);
            }
            setCurrentHolidayValue(value);
          }}
          onBlur={() => runValidationTasks("holiday", currentHolidayValue)}
          errorMessage={errors.holiday?.errorMessage}
          hasError={errors.holiday?.hasError}
          ref={holidayRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "holiday")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || contactCenterModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
