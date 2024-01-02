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
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  ManagerModel,
  ContactCenterModel,
  GroupModel,
  ContactCenterModelManagerModel,
  GroupModelManagerModel,
} from "../models";
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
export default function ManagerModelCreateForm(props) {
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
    name: "",
    email: "",
    telephone: "",
    profilepic: "",
    role: "",
    ContactCenters: [],
    Groups: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [telephone, setTelephone] = React.useState(initialValues.telephone);
  const [profilepic, setProfilepic] = React.useState(initialValues.profilepic);
  const [role, setRole] = React.useState(initialValues.role);
  const [ContactCenters, setContactCenters] = React.useState(
    initialValues.ContactCenters
  );
  const [Groups, setGroups] = React.useState(initialValues.Groups);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setEmail(initialValues.email);
    setTelephone(initialValues.telephone);
    setProfilepic(initialValues.profilepic);
    setRole(initialValues.role);
    setContactCenters(initialValues.ContactCenters);
    setCurrentContactCentersValue(undefined);
    setCurrentContactCentersDisplayValue("");
    setGroups(initialValues.Groups);
    setCurrentGroupsValue(undefined);
    setCurrentGroupsDisplayValue("");
    setErrors({});
  };
  const [
    currentContactCentersDisplayValue,
    setCurrentContactCentersDisplayValue,
  ] = React.useState("");
  const [currentContactCentersValue, setCurrentContactCentersValue] =
    React.useState(undefined);
  const ContactCentersRef = React.createRef();
  const [currentGroupsDisplayValue, setCurrentGroupsDisplayValue] =
    React.useState("");
  const [currentGroupsValue, setCurrentGroupsValue] = React.useState(undefined);
  const GroupsRef = React.createRef();
  const getIDValue = {
    ContactCenters: (r) => JSON.stringify({ id: r?.id }),
    Groups: (r) => JSON.stringify({ id: r?.id }),
  };
  const ContactCentersIdSet = new Set(
    Array.isArray(ContactCenters)
      ? ContactCenters.map((r) => getIDValue.ContactCenters?.(r))
      : getIDValue.ContactCenters?.(ContactCenters)
  );
  const GroupsIdSet = new Set(
    Array.isArray(Groups)
      ? Groups.map((r) => getIDValue.Groups?.(r))
      : getIDValue.Groups?.(Groups)
  );
  const contactCenterModelRecords = useDataStoreBinding({
    type: "collection",
    model: ContactCenterModel,
  }).items;
  const groupModelRecords = useDataStoreBinding({
    type: "collection",
    model: GroupModel,
  }).items;
  const getDisplayValue = {
    ContactCenters: (r) =>
      `${r?.mainnumber ? r?.mainnumber + " - " : ""}${r?.id}`,
    Groups: (r) => `${r?.fullname ? r?.fullname + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    email: [{ type: "Email" }],
    telephone: [{ type: "Phone" }],
    profilepic: [{ type: "URL" }],
    role: [],
    ContactCenters: [],
    Groups: [],
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
          name,
          email,
          telephone,
          profilepic,
          role,
          ContactCenters,
          Groups,
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
          const modelFieldsToSave = {
            name: modelFields.name,
            email: modelFields.email,
            telephone: modelFields.telephone,
            profilepic: modelFields.profilepic,
            role: modelFields.role,
          };
          const managerModel = await DataStore.save(
            new ManagerModel(modelFieldsToSave)
          );
          const promises = [];
          promises.push(
            ...ContactCenters.reduce((promises, contactCenterModel) => {
              promises.push(
                DataStore.save(
                  new ContactCenterModelManagerModel({
                    managerModel,
                    contactCenterModel,
                  })
                )
              );
              return promises;
            }, [])
          );
          promises.push(
            ...Groups.reduce((promises, groupModel) => {
              promises.push(
                DataStore.save(
                  new GroupModelManagerModel({
                    managerModel,
                    groupModel,
                  })
                )
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "ManagerModelCreateForm")}
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
              ContactCenters,
              Groups,
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
              ContactCenters,
              Groups,
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
              ContactCenters,
              Groups,
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
              ContactCenters,
              Groups,
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
              ContactCenters,
              Groups,
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
              ContactCenters: values,
              Groups,
            };
            const result = onChange(modelFields);
            values = result?.ContactCenters ?? values;
          }
          setContactCenters(values);
          setCurrentContactCentersValue(undefined);
          setCurrentContactCentersDisplayValue("");
        }}
        currentFieldValue={currentContactCentersValue}
        label={"Contact centers"}
        items={ContactCenters}
        hasError={errors?.ContactCenters?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("ContactCenters", currentContactCentersValue)
        }
        errorMessage={errors?.ContactCenters?.errorMessage}
        getBadgeText={getDisplayValue.ContactCenters}
        setFieldValue={(model) => {
          setCurrentContactCentersDisplayValue(
            model ? getDisplayValue.ContactCenters(model) : ""
          );
          setCurrentContactCentersValue(model);
        }}
        inputFieldRef={ContactCentersRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Contact centers"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ContactCenterModel"
          value={currentContactCentersDisplayValue}
          options={contactCenterModelRecords
            .filter(
              (r) => !ContactCentersIdSet.has(getIDValue.ContactCenters?.(r))
            )
            .map((r) => ({
              id: getIDValue.ContactCenters?.(r),
              label: getDisplayValue.ContactCenters?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentContactCentersValue(
              contactCenterModelRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentContactCentersDisplayValue(label);
            runValidationTasks("ContactCenters", label);
          }}
          onClear={() => {
            setCurrentContactCentersDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.ContactCenters?.hasError) {
              runValidationTasks("ContactCenters", value);
            }
            setCurrentContactCentersDisplayValue(value);
            setCurrentContactCentersValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "ContactCenters",
              currentContactCentersDisplayValue
            )
          }
          errorMessage={errors.ContactCenters?.errorMessage}
          hasError={errors.ContactCenters?.hasError}
          ref={ContactCentersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "ContactCenters")}
        ></Autocomplete>
      </ArrayField>
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
              ContactCenters,
              Groups: values,
            };
            const result = onChange(modelFields);
            values = result?.Groups ?? values;
          }
          setGroups(values);
          setCurrentGroupsValue(undefined);
          setCurrentGroupsDisplayValue("");
        }}
        currentFieldValue={currentGroupsValue}
        label={"Groups"}
        items={Groups}
        hasError={errors?.Groups?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Groups", currentGroupsValue)
        }
        errorMessage={errors?.Groups?.errorMessage}
        getBadgeText={getDisplayValue.Groups}
        setFieldValue={(model) => {
          setCurrentGroupsDisplayValue(
            model ? getDisplayValue.Groups(model) : ""
          );
          setCurrentGroupsValue(model);
        }}
        inputFieldRef={GroupsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Groups"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search GroupModel"
          value={currentGroupsDisplayValue}
          options={groupModelRecords
            .filter((r) => !GroupsIdSet.has(getIDValue.Groups?.(r)))
            .map((r) => ({
              id: getIDValue.Groups?.(r),
              label: getDisplayValue.Groups?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentGroupsValue(
              groupModelRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentGroupsDisplayValue(label);
            runValidationTasks("Groups", label);
          }}
          onClear={() => {
            setCurrentGroupsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Groups?.hasError) {
              runValidationTasks("Groups", value);
            }
            setCurrentGroupsDisplayValue(value);
            setCurrentGroupsValue(undefined);
          }}
          onBlur={() => runValidationTasks("Groups", currentGroupsDisplayValue)}
          errorMessage={errors.Groups?.errorMessage}
          hasError={errors.Groups?.hasError}
          ref={GroupsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Groups")}
        ></Autocomplete>
      </ArrayField>
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
