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
  ContactCenterModel,
  ManagerModel,
  GroupModel,
  ContactCenterModelManagerModel,
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
export default function CreateContactCenterTitleDetails(props) {
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
    mainnumber: "",
    ccdescription: "",
    Managers: [],
    AssignedGroup: undefined,
    epiccontext: "",
  };
  const [ccname, setCcname] = React.useState(initialValues.ccname);
  const [mainnumber, setMainnumber] = React.useState(initialValues.mainnumber);
  const [ccdescription, setCcdescription] = React.useState(
    initialValues.ccdescription
  );
  const [Managers, setManagers] = React.useState(initialValues.Managers);
  const [AssignedGroup, setAssignedGroup] = React.useState(
    initialValues.AssignedGroup
  );
  const [epiccontext, setEpiccontext] = React.useState(
    initialValues.epiccontext
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCcname(initialValues.ccname);
    setMainnumber(initialValues.mainnumber);
    setCcdescription(initialValues.ccdescription);
    setManagers(initialValues.Managers);
    setCurrentManagersValue(undefined);
    setCurrentManagersDisplayValue("");
    setAssignedGroup(initialValues.AssignedGroup);
    setCurrentAssignedGroupValue(undefined);
    setCurrentAssignedGroupDisplayValue("");
    setEpiccontext(initialValues.epiccontext);
    setErrors({});
  };
  const [currentManagersDisplayValue, setCurrentManagersDisplayValue] =
    React.useState("");
  const [currentManagersValue, setCurrentManagersValue] =
    React.useState(undefined);
  const ManagersRef = React.createRef();
  const [
    currentAssignedGroupDisplayValue,
    setCurrentAssignedGroupDisplayValue,
  ] = React.useState("");
  const [currentAssignedGroupValue, setCurrentAssignedGroupValue] =
    React.useState(undefined);
  const AssignedGroupRef = React.createRef();
  const getIDValue = {
    Managers: (r) => JSON.stringify({ id: r?.id }),
    AssignedGroup: (r) => JSON.stringify({ id: r?.id }),
  };
  const ManagersIdSet = new Set(
    Array.isArray(Managers)
      ? Managers.map((r) => getIDValue.Managers?.(r))
      : getIDValue.Managers?.(Managers)
  );
  const AssignedGroupIdSet = new Set(
    Array.isArray(AssignedGroup)
      ? AssignedGroup.map((r) => getIDValue.AssignedGroup?.(r))
      : getIDValue.AssignedGroup?.(AssignedGroup)
  );
  const managerModelRecords = useDataStoreBinding({
    type: "collection",
    model: ManagerModel,
  }).items;
  const groupModelRecords = useDataStoreBinding({
    type: "collection",
    model: GroupModel,
  }).items;
  const getDisplayValue = {
    Managers: (r) => `${r?.name}`,
    AssignedGroup: (r) => `${r?.fullname}`,
  };
  const validations = {
    ccname: [],
    mainnumber: [{ type: "Required" }],
    ccdescription: [],
    Managers: [],
    AssignedGroup: [],
    epiccontext: [],
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
          mainnumber,
          ccdescription,
          Managers,
          AssignedGroup,
          epiccontext,
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
            ccname: modelFields.ccname,
            mainnumber: modelFields.mainnumber,
            ccdescription: modelFields.ccdescription,
            AssignedGroup: modelFields.AssignedGroup,
            epiccontext: modelFields.epiccontext,
          };
          const contactCenterModel = await DataStore.save(
            new ContactCenterModel(modelFieldsToSave)
          );
          const promises = [];
          promises.push(
            ...Managers.reduce((promises, managerModel) => {
              promises.push(
                DataStore.save(
                  new ContactCenterModelManagerModel({
                    contactCenterModel,
                    managerModel,
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
      {...getOverrideProps(overrides, "CreateContactCenterTitleDetails")}
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
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
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
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Contact Center Number</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={mainnumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber: value,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
            };
            const result = onChange(modelFields);
            value = result?.mainnumber ?? value;
          }
          if (errors.mainnumber?.hasError) {
            runValidationTasks("mainnumber", value);
          }
          setMainnumber(value);
        }}
        onBlur={() => runValidationTasks("mainnumber", mainnumber)}
        errorMessage={errors.mainnumber?.errorMessage}
        hasError={errors.mainnumber?.hasError}
        {...getOverrideProps(overrides, "mainnumber")}
      ></TextField>
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
              mainnumber,
              ccdescription: value,
              Managers,
              AssignedGroup,
              epiccontext,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers: values,
              AssignedGroup,
              epiccontext,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup: value,
              epiccontext,
            };
            const result = onChange(modelFields);
            value = result?.AssignedGroup ?? value;
          }
          setAssignedGroup(value);
          setCurrentAssignedGroupValue(undefined);
          setCurrentAssignedGroupDisplayValue("");
        }}
        currentFieldValue={currentAssignedGroupValue}
        label={"Assigned group"}
        items={AssignedGroup ? [AssignedGroup] : []}
        hasError={errors?.AssignedGroup?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("AssignedGroup", currentAssignedGroupValue)
        }
        errorMessage={errors?.AssignedGroup?.errorMessage}
        getBadgeText={getDisplayValue.AssignedGroup}
        setFieldValue={(model) => {
          setCurrentAssignedGroupDisplayValue(
            model ? getDisplayValue.AssignedGroup(model) : ""
          );
          setCurrentAssignedGroupValue(model);
        }}
        inputFieldRef={AssignedGroupRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Assigned group"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search GroupModel"
          value={currentAssignedGroupDisplayValue}
          options={groupModelRecords
            .filter(
              (r) => !AssignedGroupIdSet.has(getIDValue.AssignedGroup?.(r))
            )
            .map((r) => ({
              id: getIDValue.AssignedGroup?.(r),
              label: getDisplayValue.AssignedGroup?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentAssignedGroupValue(
              groupModelRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAssignedGroupDisplayValue(label);
            runValidationTasks("AssignedGroup", label);
          }}
          onClear={() => {
            setCurrentAssignedGroupDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.AssignedGroup?.hasError) {
              runValidationTasks("AssignedGroup", value);
            }
            setCurrentAssignedGroupDisplayValue(value);
            setCurrentAssignedGroupValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "AssignedGroup",
              currentAssignedGroupDisplayValue
            )
          }
          errorMessage={errors.AssignedGroup?.errorMessage}
          hasError={errors.AssignedGroup?.hasError}
          ref={AssignedGroupRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "AssignedGroup")}
        ></Autocomplete>
      </ArrayField>
      <SelectField
        label="Epic Context"
        placeholder="Please select an option"
        isDisabled={false}
        value={epiccontext}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext: value,
            };
            const result = onChange(modelFields);
            value = result?.epiccontext ?? value;
          }
          if (errors.epiccontext?.hasError) {
            runValidationTasks("epiccontext", value);
          }
          setEpiccontext(value);
        }}
        onBlur={() => runValidationTasks("epiccontext", epiccontext)}
        errorMessage={errors.epiccontext?.errorMessage}
        hasError={errors.epiccontext?.hasError}
        {...getOverrideProps(overrides, "epiccontext")}
      >
        <option
          children="Call Hub"
          value="Call Hub"
          {...getOverrideProps(overrides, "epiccontextoption0")}
        ></option>
        <option
          children="Scheduling"
          value="Scheduling"
          {...getOverrideProps(overrides, "epiccontextoption1")}
        ></option>
      </SelectField>
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
