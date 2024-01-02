/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { GroupModel } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function GroupModelCreateForm(props) {
  const {
    clearOnSuccess = true,
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
  };
  const [fullname, setFullname] = React.useState(initialValues.fullname);
  const [abbreviatedname, setAbbreviatedname] = React.useState(
    initialValues.abbreviatedname
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFullname(initialValues.fullname);
    setAbbreviatedname(initialValues.abbreviatedname);
    setErrors({});
  };
  const validations = {
    fullname: [],
    abbreviatedname: [],
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
          await DataStore.save(new GroupModel(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "GroupModelCreateForm")}
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
