/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { ContactCenterModel } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function UpdateContactCenterWelcome(props) {
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
    ccname: "",
    welcomeprompt: "",
    ccdescription: "",
  };
  const [ccname, setCcname] = React.useState(initialValues.ccname);
  const [welcomeprompt, setWelcomeprompt] = React.useState(
    initialValues.welcomeprompt
  );
  const [ccdescription, setCcdescription] = React.useState(
    initialValues.ccdescription
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCcname(initialValues.ccname);
    setWelcomeprompt(initialValues.welcomeprompt);
    setCcdescription(initialValues.ccdescription);
    setErrors({});
  };
  const validations = {
    ccname: [],
    welcomeprompt: [],
    ccdescription: [],
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
          ccname,
          welcomeprompt,
          ccdescription,
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
          await DataStore.save(new ContactCenterModel(modelFields));
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
      {...getOverrideProps(overrides, "UpdateContactCenterWelcome")}
      {...rest}
    >
      <TextField
        label="Contact Center Name"
        isRequired={false}
        isReadOnly={false}
        value={ccname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname: value,
              welcomeprompt,
              ccdescription,
            };
            const result = onChange(modelFields);
            value = result?.ccname ?? value;
          }
          if (errors.ccname?.hasError) {
            runValidationTasks("ccname", value);
          }
          setCcname(value);
        }}
        onBlur={() => runValidationTasks("ccname", ccname)}
        errorMessage={errors.ccname?.errorMessage}
        hasError={errors.ccname?.hasError}
        {...getOverrideProps(overrides, "ccname")}
      ></TextField>
      <TextAreaField
        label="Welcome Prompt"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              welcomeprompt: value,
              ccdescription,
            };
            const result = onChange(modelFields);
            value = result?.welcomeprompt ?? value;
          }
          if (errors.welcomeprompt?.hasError) {
            runValidationTasks("welcomeprompt", value);
          }
          setWelcomeprompt(value);
        }}
        onBlur={() => runValidationTasks("welcomeprompt", welcomeprompt)}
        errorMessage={errors.welcomeprompt?.errorMessage}
        hasError={errors.welcomeprompt?.hasError}
        {...getOverrideProps(overrides, "welcomeprompt")}
      ></TextAreaField>
      <TextField
        label="Contact Center Description"
        isRequired={false}
        isReadOnly={false}
        value={ccdescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              welcomeprompt,
              ccdescription: value,
            };
            const result = onChange(modelFields);
            value = result?.ccdescription ?? value;
          }
          if (errors.ccdescription?.hasError) {
            runValidationTasks("ccdescription", value);
          }
          setCcdescription(value);
        }}
        onBlur={() => runValidationTasks("ccdescription", ccdescription)}
        errorMessage={errors.ccdescription?.errorMessage}
        hasError={errors.ccdescription?.hasError}
        {...getOverrideProps(overrides, "ccdescription")}
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
