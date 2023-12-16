/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SwitchField } from "@aws-amplify/ui-react";
import { ContactCenterModel } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
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
    isholiday: false,
    isafterhours: false,
    issecondaryclosed: false,
  };
  const [isoverride, setIsoverride] = React.useState(initialValues.isoverride);
  const [isholiday, setIsholiday] = React.useState(initialValues.isholiday);
  const [isafterhours, setIsafterhours] = React.useState(
    initialValues.isafterhours
  );
  const [issecondaryclosed, setIssecondaryclosed] = React.useState(
    initialValues.issecondaryclosed
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = contactCenterModelRecord
      ? { ...initialValues, ...contactCenterModelRecord }
      : initialValues;
    setIsoverride(cleanValues.isoverride);
    setIsholiday(cleanValues.isholiday);
    setIsafterhours(cleanValues.isafterhours);
    setIssecondaryclosed(cleanValues.issecondaryclosed);
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
  const validations = {
    isoverride: [],
    isholiday: [],
    isafterhours: [],
    issecondaryclosed: [],
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
          isholiday,
          isafterhours,
          issecondaryclosed,
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
              isholiday,
              isafterhours,
              issecondaryclosed,
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
        label="Isholiday"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isholiday}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isoverride,
              isholiday: value,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.isholiday ?? value;
          }
          if (errors.isholiday?.hasError) {
            runValidationTasks("isholiday", value);
          }
          setIsholiday(value);
        }}
        onBlur={() => runValidationTasks("isholiday", isholiday)}
        errorMessage={errors.isholiday?.errorMessage}
        hasError={errors.isholiday?.hasError}
        {...getOverrideProps(overrides, "isholiday")}
      ></SwitchField>
      <SwitchField
        label="Isafterhours"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isafterhours}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isoverride,
              isholiday,
              isafterhours: value,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.isafterhours ?? value;
          }
          if (errors.isafterhours?.hasError) {
            runValidationTasks("isafterhours", value);
          }
          setIsafterhours(value);
        }}
        onBlur={() => runValidationTasks("isafterhours", isafterhours)}
        errorMessage={errors.isafterhours?.errorMessage}
        hasError={errors.isafterhours?.hasError}
        {...getOverrideProps(overrides, "isafterhours")}
      ></SwitchField>
      <SwitchField
        label="Issecondaryclosed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={issecondaryclosed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed: value,
            };
            const result = onChange(modelFields);
            value = result?.issecondaryclosed ?? value;
          }
          if (errors.issecondaryclosed?.hasError) {
            runValidationTasks("issecondaryclosed", value);
          }
          setIssecondaryclosed(value);
        }}
        onBlur={() =>
          runValidationTasks("issecondaryclosed", issecondaryclosed)
        }
        errorMessage={errors.issecondaryclosed?.errorMessage}
        hasError={errors.issecondaryclosed?.hasError}
        {...getOverrideProps(overrides, "issecondaryclosed")}
      ></SwitchField>
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
