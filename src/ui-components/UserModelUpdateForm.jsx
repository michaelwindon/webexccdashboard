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
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getUserModel } from "../graphql/queries";
import { updateUserModel } from "../graphql/mutations";
const client = generateClient();
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
export default function UserModelUpdateForm(props) {
  const {
    id: idProp,
    userModel: userModelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    email: "",
    telephone: "",
    profilepic: "",
    role: "",
    group: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [telephone, setTelephone] = React.useState(initialValues.telephone);
  const [profilepic, setProfilepic] = React.useState(initialValues.profilepic);
  const [role, setRole] = React.useState(initialValues.role);
  const [group, setGroup] = React.useState(initialValues.group);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userModelRecord
      ? { ...initialValues, ...userModelRecord }
      : initialValues;
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setTelephone(cleanValues.telephone);
    setProfilepic(cleanValues.profilepic);
    setRole(cleanValues.role);
    setGroup(cleanValues.group ?? []);
    setCurrentGroupValue("");
    setErrors({});
  };
  const [userModelRecord, setUserModelRecord] =
    React.useState(userModelModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUserModel.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUserModel
        : userModelModelProp;
      setUserModelRecord(record);
    };
    queryData();
  }, [idProp, userModelModelProp]);
  React.useEffect(resetStateValues, [userModelRecord]);
  const [currentGroupValue, setCurrentGroupValue] = React.useState("");
  const groupRef = React.createRef();
  const validations = {
    name: [],
    email: [{ type: "Email" }],
    telephone: [{ type: "Phone" }],
    profilepic: [{ type: "URL" }],
    role: [],
    group: [],
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
          name: name ?? null,
          email: email ?? null,
          telephone: telephone ?? null,
          profilepic: profilepic ?? null,
          role: role ?? null,
          group: group ?? null,
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
          await client.graphql({
            query: updateUserModel.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userModelRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserModelUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              email,
              telephone,
              profilepic,
              role,
              group,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email: value,
              telephone,
              profilepic,
              role,
              group,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Telephone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={telephone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              telephone: value,
              profilepic,
              role,
              group,
            };
            const result = onChange(modelFields);
            value = result?.telephone ?? value;
          }
          if (errors.telephone?.hasError) {
            runValidationTasks("telephone", value);
          }
          setTelephone(value);
        }}
        onBlur={() => runValidationTasks("telephone", telephone)}
        errorMessage={errors.telephone?.errorMessage}
        hasError={errors.telephone?.hasError}
        {...getOverrideProps(overrides, "telephone")}
      ></TextField>
      <TextField
        label="Profilepic"
        isRequired={false}
        isReadOnly={false}
        value={profilepic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              telephone,
              profilepic: value,
              role,
              group,
            };
            const result = onChange(modelFields);
            value = result?.profilepic ?? value;
          }
          if (errors.profilepic?.hasError) {
            runValidationTasks("profilepic", value);
          }
          setProfilepic(value);
        }}
        onBlur={() => runValidationTasks("profilepic", profilepic)}
        errorMessage={errors.profilepic?.errorMessage}
        hasError={errors.profilepic?.hasError}
        {...getOverrideProps(overrides, "profilepic")}
      ></TextField>
      <SelectField
        label="Role"
        placeholder="Please select an option"
        isDisabled={false}
        value={role}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              telephone,
              profilepic,
              role: value,
              group,
            };
            const result = onChange(modelFields);
            value = result?.role ?? value;
          }
          if (errors.role?.hasError) {
            runValidationTasks("role", value);
          }
          setRole(value);
        }}
        onBlur={() => runValidationTasks("role", role)}
        errorMessage={errors.role?.errorMessage}
        hasError={errors.role?.hasError}
        {...getOverrideProps(overrides, "role")}
      >
        <option
          children="Admin"
          value="ADMIN"
          {...getOverrideProps(overrides, "roleoption0")}
        ></option>
        <option
          children="Manager"
          value="MANAGER"
          {...getOverrideProps(overrides, "roleoption1")}
        ></option>
        <option
          children="View"
          value="VIEW"
          {...getOverrideProps(overrides, "roleoption2")}
        ></option>
      </SelectField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              email,
              telephone,
              profilepic,
              role,
              group: values,
            };
            const result = onChange(modelFields);
            values = result?.group ?? values;
          }
          setGroup(values);
          setCurrentGroupValue("");
        }}
        currentFieldValue={currentGroupValue}
        label={"Group"}
        items={group}
        hasError={errors?.group?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("group", currentGroupValue)
        }
        errorMessage={errors?.group?.errorMessage}
        setFieldValue={setCurrentGroupValue}
        inputFieldRef={groupRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Group"
          isRequired={false}
          isReadOnly={false}
          value={currentGroupValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.group?.hasError) {
              runValidationTasks("group", value);
            }
            setCurrentGroupValue(value);
          }}
          onBlur={() => runValidationTasks("group", currentGroupValue)}
          errorMessage={errors.group?.errorMessage}
          hasError={errors.group?.hasError}
          ref={groupRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "group")}
        ></TextField>
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
          isDisabled={!(idProp || userModelModelProp)}
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
              !(idProp || userModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
