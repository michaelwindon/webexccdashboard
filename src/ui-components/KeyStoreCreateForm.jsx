/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { KeyStore } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function KeyStoreCreateForm(props) {
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
    org_id: "",
    access_token: "",
    expires_in: "",
    refresh_token: "",
    refresh_token_expires_in: "",
    token_type: "",
  };
  const [org_id, setOrg_id] = React.useState(initialValues.org_id);
  const [access_token, setAccess_token] = React.useState(
    initialValues.access_token
  );
  const [expires_in, setExpires_in] = React.useState(initialValues.expires_in);
  const [refresh_token, setRefresh_token] = React.useState(
    initialValues.refresh_token
  );
  const [refresh_token_expires_in, setRefresh_token_expires_in] =
    React.useState(initialValues.refresh_token_expires_in);
  const [token_type, setToken_type] = React.useState(initialValues.token_type);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setOrg_id(initialValues.org_id);
    setAccess_token(initialValues.access_token);
    setExpires_in(initialValues.expires_in);
    setRefresh_token(initialValues.refresh_token);
    setRefresh_token_expires_in(initialValues.refresh_token_expires_in);
    setToken_type(initialValues.token_type);
    setErrors({});
  };
  const validations = {
    org_id: [],
    access_token: [],
    expires_in: [],
    refresh_token: [],
    refresh_token_expires_in: [],
    token_type: [],
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
          org_id,
          access_token,
          expires_in,
          refresh_token,
          refresh_token_expires_in,
          token_type,
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
          await DataStore.save(new KeyStore(modelFields));
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
      {...getOverrideProps(overrides, "KeyStoreCreateForm")}
      {...rest}
    >
      <TextField
        label="Org id"
        isRequired={false}
        isReadOnly={false}
        value={org_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              org_id: value,
              access_token,
              expires_in,
              refresh_token,
              refresh_token_expires_in,
              token_type,
            };
            const result = onChange(modelFields);
            value = result?.org_id ?? value;
          }
          if (errors.org_id?.hasError) {
            runValidationTasks("org_id", value);
          }
          setOrg_id(value);
        }}
        onBlur={() => runValidationTasks("org_id", org_id)}
        errorMessage={errors.org_id?.errorMessage}
        hasError={errors.org_id?.hasError}
        {...getOverrideProps(overrides, "org_id")}
      ></TextField>
      <TextField
        label="Access token"
        isRequired={false}
        isReadOnly={false}
        value={access_token}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              org_id,
              access_token: value,
              expires_in,
              refresh_token,
              refresh_token_expires_in,
              token_type,
            };
            const result = onChange(modelFields);
            value = result?.access_token ?? value;
          }
          if (errors.access_token?.hasError) {
            runValidationTasks("access_token", value);
          }
          setAccess_token(value);
        }}
        onBlur={() => runValidationTasks("access_token", access_token)}
        errorMessage={errors.access_token?.errorMessage}
        hasError={errors.access_token?.hasError}
        {...getOverrideProps(overrides, "access_token")}
      ></TextField>
      <TextField
        label="Expires in"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={expires_in}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              org_id,
              access_token,
              expires_in: value,
              refresh_token,
              refresh_token_expires_in,
              token_type,
            };
            const result = onChange(modelFields);
            value = result?.expires_in ?? value;
          }
          if (errors.expires_in?.hasError) {
            runValidationTasks("expires_in", value);
          }
          setExpires_in(value);
        }}
        onBlur={() => runValidationTasks("expires_in", expires_in)}
        errorMessage={errors.expires_in?.errorMessage}
        hasError={errors.expires_in?.hasError}
        {...getOverrideProps(overrides, "expires_in")}
      ></TextField>
      <TextField
        label="Refresh token"
        isRequired={false}
        isReadOnly={false}
        value={refresh_token}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              org_id,
              access_token,
              expires_in,
              refresh_token: value,
              refresh_token_expires_in,
              token_type,
            };
            const result = onChange(modelFields);
            value = result?.refresh_token ?? value;
          }
          if (errors.refresh_token?.hasError) {
            runValidationTasks("refresh_token", value);
          }
          setRefresh_token(value);
        }}
        onBlur={() => runValidationTasks("refresh_token", refresh_token)}
        errorMessage={errors.refresh_token?.errorMessage}
        hasError={errors.refresh_token?.hasError}
        {...getOverrideProps(overrides, "refresh_token")}
      ></TextField>
      <TextField
        label="Refresh token expires in"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={refresh_token_expires_in}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              org_id,
              access_token,
              expires_in,
              refresh_token,
              refresh_token_expires_in: value,
              token_type,
            };
            const result = onChange(modelFields);
            value = result?.refresh_token_expires_in ?? value;
          }
          if (errors.refresh_token_expires_in?.hasError) {
            runValidationTasks("refresh_token_expires_in", value);
          }
          setRefresh_token_expires_in(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "refresh_token_expires_in",
            refresh_token_expires_in
          )
        }
        errorMessage={errors.refresh_token_expires_in?.errorMessage}
        hasError={errors.refresh_token_expires_in?.hasError}
        {...getOverrideProps(overrides, "refresh_token_expires_in")}
      ></TextField>
      <TextField
        label="Token type"
        isRequired={false}
        isReadOnly={false}
        value={token_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              org_id,
              access_token,
              expires_in,
              refresh_token,
              refresh_token_expires_in,
              token_type: value,
            };
            const result = onChange(modelFields);
            value = result?.token_type ?? value;
          }
          if (errors.token_type?.hasError) {
            runValidationTasks("token_type", value);
          }
          setToken_type(value);
        }}
        onBlur={() => runValidationTasks("token_type", token_type)}
        errorMessage={errors.token_type?.errorMessage}
        hasError={errors.token_type?.hasError}
        {...getOverrideProps(overrides, "token_type")}
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
