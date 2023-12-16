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
  SwitchField,
  Text,
  TextAreaField,
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
export default function ContactCenterModelCreateForm(props) {
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
    mainnumber: "",
    menu0: "",
    menu1: "",
    menu2: "",
    menu3: "",
    menu4: "",
    menu5: "",
    menu6: "",
    menu7: "",
    menu8: "",
    menu9: "",
    holiday: [],
    holidayoption: "",
    secondarytodopen: [],
    secondarytodclose: [],
    secondaryclose: "",
    daystodopen: [],
    daystodclose: [],
    daysopen: [],
    afterhours: "",
    ccdescription: "",
    defaultroute: "",
    ccname: "",
    welcomeprompt: "",
    welcomeprompt_sp: "",
    submenu2: "",
    submenu2_sp: "",
    menu0_sp: "",
    menu1_sp: "",
    menu2_sp: "",
    menu3_sp: "",
    menu4_sp: "",
    menu5_sp: "",
    menu6_sp: "",
    menu7_sp: "",
    menu8_sp: "",
    menu9_sp: "",
    override: "",
    Managers: [],
    AssignedGroup: undefined,
    updateduser: "",
    version: "",
    isoverride: false,
    isholiday: false,
    isafterhours: false,
    issecondaryclosed: false,
  };
  const [mainnumber, setMainnumber] = React.useState(initialValues.mainnumber);
  const [menu0, setMenu0] = React.useState(initialValues.menu0);
  const [menu1, setMenu1] = React.useState(initialValues.menu1);
  const [menu2, setMenu2] = React.useState(initialValues.menu2);
  const [menu3, setMenu3] = React.useState(initialValues.menu3);
  const [menu4, setMenu4] = React.useState(initialValues.menu4);
  const [menu5, setMenu5] = React.useState(initialValues.menu5);
  const [menu6, setMenu6] = React.useState(initialValues.menu6);
  const [menu7, setMenu7] = React.useState(initialValues.menu7);
  const [menu8, setMenu8] = React.useState(initialValues.menu8);
  const [menu9, setMenu9] = React.useState(initialValues.menu9);
  const [holiday, setHoliday] = React.useState(initialValues.holiday);
  const [holidayoption, setHolidayoption] = React.useState(
    initialValues.holidayoption
  );
  const [secondarytodopen, setSecondarytodopen] = React.useState(
    initialValues.secondarytodopen
  );
  const [secondarytodclose, setSecondarytodclose] = React.useState(
    initialValues.secondarytodclose
  );
  const [secondaryclose, setSecondaryclose] = React.useState(
    initialValues.secondaryclose
  );
  const [daystodopen, setDaystodopen] = React.useState(
    initialValues.daystodopen
  );
  const [daystodclose, setDaystodclose] = React.useState(
    initialValues.daystodclose
  );
  const [daysopen, setDaysopen] = React.useState(initialValues.daysopen);
  const [afterhours, setAfterhours] = React.useState(initialValues.afterhours);
  const [ccdescription, setCcdescription] = React.useState(
    initialValues.ccdescription
  );
  const [defaultroute, setDefaultroute] = React.useState(
    initialValues.defaultroute
  );
  const [ccname, setCcname] = React.useState(initialValues.ccname);
  const [welcomeprompt, setWelcomeprompt] = React.useState(
    initialValues.welcomeprompt
  );
  const [welcomeprompt_sp, setWelcomeprompt_sp] = React.useState(
    initialValues.welcomeprompt_sp
  );
  const [submenu2, setSubmenu2] = React.useState(initialValues.submenu2);
  const [submenu2_sp, setSubmenu2_sp] = React.useState(
    initialValues.submenu2_sp
  );
  const [menu0_sp, setMenu0_sp] = React.useState(initialValues.menu0_sp);
  const [menu1_sp, setMenu1_sp] = React.useState(initialValues.menu1_sp);
  const [menu2_sp, setMenu2_sp] = React.useState(initialValues.menu2_sp);
  const [menu3_sp, setMenu3_sp] = React.useState(initialValues.menu3_sp);
  const [menu4_sp, setMenu4_sp] = React.useState(initialValues.menu4_sp);
  const [menu5_sp, setMenu5_sp] = React.useState(initialValues.menu5_sp);
  const [menu6_sp, setMenu6_sp] = React.useState(initialValues.menu6_sp);
  const [menu7_sp, setMenu7_sp] = React.useState(initialValues.menu7_sp);
  const [menu8_sp, setMenu8_sp] = React.useState(initialValues.menu8_sp);
  const [menu9_sp, setMenu9_sp] = React.useState(initialValues.menu9_sp);
  const [override, setOverride] = React.useState(initialValues.override);
  const [Managers, setManagers] = React.useState(initialValues.Managers);
  const [AssignedGroup, setAssignedGroup] = React.useState(
    initialValues.AssignedGroup
  );
  const [updateduser, setUpdateduser] = React.useState(
    initialValues.updateduser
  );
  const [version, setVersion] = React.useState(initialValues.version);
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
    setMainnumber(initialValues.mainnumber);
    setMenu0(initialValues.menu0);
    setMenu1(initialValues.menu1);
    setMenu2(initialValues.menu2);
    setMenu3(initialValues.menu3);
    setMenu4(initialValues.menu4);
    setMenu5(initialValues.menu5);
    setMenu6(initialValues.menu6);
    setMenu7(initialValues.menu7);
    setMenu8(initialValues.menu8);
    setMenu9(initialValues.menu9);
    setHoliday(initialValues.holiday);
    setCurrentHolidayValue("");
    setHolidayoption(initialValues.holidayoption);
    setSecondarytodopen(initialValues.secondarytodopen);
    setCurrentSecondarytodopenValue("");
    setSecondarytodclose(initialValues.secondarytodclose);
    setCurrentSecondarytodcloseValue("");
    setSecondaryclose(initialValues.secondaryclose);
    setDaystodopen(initialValues.daystodopen);
    setCurrentDaystodopenValue("");
    setDaystodclose(initialValues.daystodclose);
    setCurrentDaystodcloseValue("");
    setDaysopen(initialValues.daysopen);
    setCurrentDaysopenValue("");
    setAfterhours(initialValues.afterhours);
    setCcdescription(initialValues.ccdescription);
    setDefaultroute(initialValues.defaultroute);
    setCcname(initialValues.ccname);
    setWelcomeprompt(initialValues.welcomeprompt);
    setWelcomeprompt_sp(initialValues.welcomeprompt_sp);
    setSubmenu2(initialValues.submenu2);
    setSubmenu2_sp(initialValues.submenu2_sp);
    setMenu0_sp(initialValues.menu0_sp);
    setMenu1_sp(initialValues.menu1_sp);
    setMenu2_sp(initialValues.menu2_sp);
    setMenu3_sp(initialValues.menu3_sp);
    setMenu4_sp(initialValues.menu4_sp);
    setMenu5_sp(initialValues.menu5_sp);
    setMenu6_sp(initialValues.menu6_sp);
    setMenu7_sp(initialValues.menu7_sp);
    setMenu8_sp(initialValues.menu8_sp);
    setMenu9_sp(initialValues.menu9_sp);
    setOverride(initialValues.override);
    setManagers(initialValues.Managers);
    setCurrentManagersValue(undefined);
    setCurrentManagersDisplayValue("");
    setAssignedGroup(initialValues.AssignedGroup);
    setCurrentAssignedGroupValue(undefined);
    setCurrentAssignedGroupDisplayValue("");
    setUpdateduser(initialValues.updateduser);
    setVersion(initialValues.version);
    setIsoverride(initialValues.isoverride);
    setIsholiday(initialValues.isholiday);
    setIsafterhours(initialValues.isafterhours);
    setIssecondaryclosed(initialValues.issecondaryclosed);
    setErrors({});
  };
  const [currentHolidayValue, setCurrentHolidayValue] = React.useState("");
  const holidayRef = React.createRef();
  const [currentSecondarytodopenValue, setCurrentSecondarytodopenValue] =
    React.useState("");
  const secondarytodopenRef = React.createRef();
  const [currentSecondarytodcloseValue, setCurrentSecondarytodcloseValue] =
    React.useState("");
  const secondarytodcloseRef = React.createRef();
  const [currentDaystodopenValue, setCurrentDaystodopenValue] =
    React.useState("");
  const daystodopenRef = React.createRef();
  const [currentDaystodcloseValue, setCurrentDaystodcloseValue] =
    React.useState("");
  const daystodcloseRef = React.createRef();
  const [currentDaysopenValue, setCurrentDaysopenValue] = React.useState("");
  const daysopenRef = React.createRef();
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
    Managers: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    AssignedGroup: (r) => `${r?.fullname ? r?.fullname + " - " : ""}${r?.id}`,
  };
  const validations = {
    mainnumber: [{ type: "Required" }],
    menu0: [{ type: "JSON" }],
    menu1: [{ type: "JSON" }],
    menu2: [{ type: "JSON" }],
    menu3: [{ type: "JSON" }],
    menu4: [{ type: "JSON" }],
    menu5: [{ type: "JSON" }],
    menu6: [{ type: "JSON" }],
    menu7: [{ type: "JSON" }],
    menu8: [{ type: "JSON" }],
    menu9: [{ type: "JSON" }],
    holiday: [],
    holidayoption: [{ type: "JSON" }],
    secondarytodopen: [],
    secondarytodclose: [],
    secondaryclose: [{ type: "JSON" }],
    daystodopen: [],
    daystodclose: [],
    daysopen: [],
    afterhours: [{ type: "JSON" }],
    ccdescription: [],
    defaultroute: [],
    ccname: [],
    welcomeprompt: [],
    welcomeprompt_sp: [],
    submenu2: [{ type: "JSON" }],
    submenu2_sp: [{ type: "JSON" }],
    menu0_sp: [{ type: "JSON" }],
    menu1_sp: [{ type: "JSON" }],
    menu2_sp: [{ type: "JSON" }],
    menu3_sp: [{ type: "JSON" }],
    menu4_sp: [{ type: "JSON" }],
    menu5_sp: [{ type: "JSON" }],
    menu6_sp: [{ type: "JSON" }],
    menu7_sp: [{ type: "JSON" }],
    menu8_sp: [{ type: "JSON" }],
    menu9_sp: [{ type: "JSON" }],
    override: [{ type: "JSON" }],
    Managers: [],
    AssignedGroup: [],
    updateduser: [],
    version: [],
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
          mainnumber,
          menu0,
          menu1,
          menu2,
          menu3,
          menu4,
          menu5,
          menu6,
          menu7,
          menu8,
          menu9,
          holiday,
          holidayoption,
          secondarytodopen,
          secondarytodclose,
          secondaryclose,
          daystodopen,
          daystodclose,
          daysopen,
          afterhours,
          ccdescription,
          defaultroute,
          ccname,
          welcomeprompt,
          welcomeprompt_sp,
          submenu2,
          submenu2_sp,
          menu0_sp,
          menu1_sp,
          menu2_sp,
          menu3_sp,
          menu4_sp,
          menu5_sp,
          menu6_sp,
          menu7_sp,
          menu8_sp,
          menu9_sp,
          override,
          Managers,
          AssignedGroup,
          updateduser,
          version,
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
            mainnumber: modelFields.mainnumber,
            holiday: modelFields.holiday,
            secondarytodopen: modelFields.secondarytodopen,
            secondarytodclose: modelFields.secondarytodclose,
            daystodopen: modelFields.daystodopen,
            daystodclose: modelFields.daystodclose,
            daysopen: modelFields.daysopen,
            ccdescription: modelFields.ccdescription,
            defaultroute: modelFields.defaultroute,
            ccname: modelFields.ccname,
            welcomeprompt: modelFields.welcomeprompt,
            welcomeprompt_sp: modelFields.welcomeprompt_sp,
            AssignedGroup: modelFields.AssignedGroup,
            updateduser: modelFields.updateduser,
            version: modelFields.version,
            isoverride: modelFields.isoverride,
            isholiday: modelFields.isholiday,
            isafterhours: modelFields.isafterhours,
            issecondaryclosed: modelFields.issecondaryclosed,
            menu0: modelFields.menu0
              ? JSON.parse(modelFields.menu0)
              : modelFields.menu0,
            menu1: modelFields.menu1
              ? JSON.parse(modelFields.menu1)
              : modelFields.menu1,
            menu2: modelFields.menu2
              ? JSON.parse(modelFields.menu2)
              : modelFields.menu2,
            menu3: modelFields.menu3
              ? JSON.parse(modelFields.menu3)
              : modelFields.menu3,
            menu4: modelFields.menu4
              ? JSON.parse(modelFields.menu4)
              : modelFields.menu4,
            menu5: modelFields.menu5
              ? JSON.parse(modelFields.menu5)
              : modelFields.menu5,
            menu6: modelFields.menu6
              ? JSON.parse(modelFields.menu6)
              : modelFields.menu6,
            menu7: modelFields.menu7
              ? JSON.parse(modelFields.menu7)
              : modelFields.menu7,
            menu8: modelFields.menu8
              ? JSON.parse(modelFields.menu8)
              : modelFields.menu8,
            menu9: modelFields.menu9
              ? JSON.parse(modelFields.menu9)
              : modelFields.menu9,
            holidayoption: modelFields.holidayoption
              ? JSON.parse(modelFields.holidayoption)
              : modelFields.holidayoption,
            secondaryclose: modelFields.secondaryclose
              ? JSON.parse(modelFields.secondaryclose)
              : modelFields.secondaryclose,
            afterhours: modelFields.afterhours
              ? JSON.parse(modelFields.afterhours)
              : modelFields.afterhours,
            submenu2: modelFields.submenu2
              ? JSON.parse(modelFields.submenu2)
              : modelFields.submenu2,
            submenu2_sp: modelFields.submenu2_sp
              ? JSON.parse(modelFields.submenu2_sp)
              : modelFields.submenu2_sp,
            menu0_sp: modelFields.menu0_sp
              ? JSON.parse(modelFields.menu0_sp)
              : modelFields.menu0_sp,
            menu1_sp: modelFields.menu1_sp
              ? JSON.parse(modelFields.menu1_sp)
              : modelFields.menu1_sp,
            menu2_sp: modelFields.menu2_sp
              ? JSON.parse(modelFields.menu2_sp)
              : modelFields.menu2_sp,
            menu3_sp: modelFields.menu3_sp
              ? JSON.parse(modelFields.menu3_sp)
              : modelFields.menu3_sp,
            menu4_sp: modelFields.menu4_sp
              ? JSON.parse(modelFields.menu4_sp)
              : modelFields.menu4_sp,
            menu5_sp: modelFields.menu5_sp
              ? JSON.parse(modelFields.menu5_sp)
              : modelFields.menu5_sp,
            menu6_sp: modelFields.menu6_sp
              ? JSON.parse(modelFields.menu6_sp)
              : modelFields.menu6_sp,
            menu7_sp: modelFields.menu7_sp
              ? JSON.parse(modelFields.menu7_sp)
              : modelFields.menu7_sp,
            menu8_sp: modelFields.menu8_sp
              ? JSON.parse(modelFields.menu8_sp)
              : modelFields.menu8_sp,
            menu9_sp: modelFields.menu9_sp
              ? JSON.parse(modelFields.menu9_sp)
              : modelFields.menu9_sp,
            override: modelFields.override
              ? JSON.parse(modelFields.override)
              : modelFields.override,
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
      {...getOverrideProps(overrides, "ContactCenterModelCreateForm")}
      {...rest}
    >
      <TextField
        label="Mainnumber"
        isRequired={true}
        isReadOnly={false}
        value={mainnumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber: value,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
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
      <TextAreaField
        label="Menu0"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0: value,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu0 ?? value;
          }
          if (errors.menu0?.hasError) {
            runValidationTasks("menu0", value);
          }
          setMenu0(value);
        }}
        onBlur={() => runValidationTasks("menu0", menu0)}
        errorMessage={errors.menu0?.errorMessage}
        hasError={errors.menu0?.hasError}
        {...getOverrideProps(overrides, "menu0")}
      ></TextAreaField>
      <TextAreaField
        label="Menu1"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1: value,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu1 ?? value;
          }
          if (errors.menu1?.hasError) {
            runValidationTasks("menu1", value);
          }
          setMenu1(value);
        }}
        onBlur={() => runValidationTasks("menu1", menu1)}
        errorMessage={errors.menu1?.errorMessage}
        hasError={errors.menu1?.hasError}
        {...getOverrideProps(overrides, "menu1")}
      ></TextAreaField>
      <TextAreaField
        label="Menu2"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2: value,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu2 ?? value;
          }
          if (errors.menu2?.hasError) {
            runValidationTasks("menu2", value);
          }
          setMenu2(value);
        }}
        onBlur={() => runValidationTasks("menu2", menu2)}
        errorMessage={errors.menu2?.errorMessage}
        hasError={errors.menu2?.hasError}
        {...getOverrideProps(overrides, "menu2")}
      ></TextAreaField>
      <TextAreaField
        label="Menu3"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3: value,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu3 ?? value;
          }
          if (errors.menu3?.hasError) {
            runValidationTasks("menu3", value);
          }
          setMenu3(value);
        }}
        onBlur={() => runValidationTasks("menu3", menu3)}
        errorMessage={errors.menu3?.errorMessage}
        hasError={errors.menu3?.hasError}
        {...getOverrideProps(overrides, "menu3")}
      ></TextAreaField>
      <TextAreaField
        label="Menu4"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4: value,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu4 ?? value;
          }
          if (errors.menu4?.hasError) {
            runValidationTasks("menu4", value);
          }
          setMenu4(value);
        }}
        onBlur={() => runValidationTasks("menu4", menu4)}
        errorMessage={errors.menu4?.errorMessage}
        hasError={errors.menu4?.hasError}
        {...getOverrideProps(overrides, "menu4")}
      ></TextAreaField>
      <TextAreaField
        label="Menu5"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5: value,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu5 ?? value;
          }
          if (errors.menu5?.hasError) {
            runValidationTasks("menu5", value);
          }
          setMenu5(value);
        }}
        onBlur={() => runValidationTasks("menu5", menu5)}
        errorMessage={errors.menu5?.errorMessage}
        hasError={errors.menu5?.hasError}
        {...getOverrideProps(overrides, "menu5")}
      ></TextAreaField>
      <TextAreaField
        label="Menu6"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6: value,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu6 ?? value;
          }
          if (errors.menu6?.hasError) {
            runValidationTasks("menu6", value);
          }
          setMenu6(value);
        }}
        onBlur={() => runValidationTasks("menu6", menu6)}
        errorMessage={errors.menu6?.errorMessage}
        hasError={errors.menu6?.hasError}
        {...getOverrideProps(overrides, "menu6")}
      ></TextAreaField>
      <TextAreaField
        label="Menu7"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7: value,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu7 ?? value;
          }
          if (errors.menu7?.hasError) {
            runValidationTasks("menu7", value);
          }
          setMenu7(value);
        }}
        onBlur={() => runValidationTasks("menu7", menu7)}
        errorMessage={errors.menu7?.errorMessage}
        hasError={errors.menu7?.hasError}
        {...getOverrideProps(overrides, "menu7")}
      ></TextAreaField>
      <TextAreaField
        label="Menu8"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8: value,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu8 ?? value;
          }
          if (errors.menu8?.hasError) {
            runValidationTasks("menu8", value);
          }
          setMenu8(value);
        }}
        onBlur={() => runValidationTasks("menu8", menu8)}
        errorMessage={errors.menu8?.errorMessage}
        hasError={errors.menu8?.hasError}
        {...getOverrideProps(overrides, "menu8")}
      ></TextAreaField>
      <TextAreaField
        label="Menu9"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9: value,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu9 ?? value;
          }
          if (errors.menu9?.hasError) {
            runValidationTasks("menu9", value);
          }
          setMenu9(value);
        }}
        onBlur={() => runValidationTasks("menu9", menu9)}
        errorMessage={errors.menu9?.errorMessage}
        hasError={errors.menu9?.hasError}
        {...getOverrideProps(overrides, "menu9")}
      ></TextAreaField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday: values,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
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
          isRequired={false}
          isReadOnly={false}
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
      <TextAreaField
        label="Holidayoption"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption: value,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.holidayoption ?? value;
          }
          if (errors.holidayoption?.hasError) {
            runValidationTasks("holidayoption", value);
          }
          setHolidayoption(value);
        }}
        onBlur={() => runValidationTasks("holidayoption", holidayoption)}
        errorMessage={errors.holidayoption?.errorMessage}
        hasError={errors.holidayoption?.hasError}
        {...getOverrideProps(overrides, "holidayoption")}
      ></TextAreaField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen: values,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            values = result?.secondarytodopen ?? values;
          }
          setSecondarytodopen(values);
          setCurrentSecondarytodopenValue("");
        }}
        currentFieldValue={currentSecondarytodopenValue}
        label={"Secondarytodopen"}
        items={secondarytodopen}
        hasError={errors?.secondarytodopen?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "secondarytodopen",
            currentSecondarytodopenValue
          )
        }
        errorMessage={errors?.secondarytodopen?.errorMessage}
        setFieldValue={setCurrentSecondarytodopenValue}
        inputFieldRef={secondarytodopenRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Secondarytodopen"
          isRequired={false}
          isReadOnly={false}
          value={currentSecondarytodopenValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.secondarytodopen?.hasError) {
              runValidationTasks("secondarytodopen", value);
            }
            setCurrentSecondarytodopenValue(value);
          }}
          onBlur={() =>
            runValidationTasks("secondarytodopen", currentSecondarytodopenValue)
          }
          errorMessage={errors.secondarytodopen?.errorMessage}
          hasError={errors.secondarytodopen?.hasError}
          ref={secondarytodopenRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "secondarytodopen")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose: values,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            values = result?.secondarytodclose ?? values;
          }
          setSecondarytodclose(values);
          setCurrentSecondarytodcloseValue("");
        }}
        currentFieldValue={currentSecondarytodcloseValue}
        label={"Secondarytodclose"}
        items={secondarytodclose}
        hasError={errors?.secondarytodclose?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "secondarytodclose",
            currentSecondarytodcloseValue
          )
        }
        errorMessage={errors?.secondarytodclose?.errorMessage}
        setFieldValue={setCurrentSecondarytodcloseValue}
        inputFieldRef={secondarytodcloseRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Secondarytodclose"
          isRequired={false}
          isReadOnly={false}
          value={currentSecondarytodcloseValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.secondarytodclose?.hasError) {
              runValidationTasks("secondarytodclose", value);
            }
            setCurrentSecondarytodcloseValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "secondarytodclose",
              currentSecondarytodcloseValue
            )
          }
          errorMessage={errors.secondarytodclose?.errorMessage}
          hasError={errors.secondarytodclose?.hasError}
          ref={secondarytodcloseRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "secondarytodclose")}
        ></TextField>
      </ArrayField>
      <TextAreaField
        label="Secondaryclose"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose: value,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.secondaryclose ?? value;
          }
          if (errors.secondaryclose?.hasError) {
            runValidationTasks("secondaryclose", value);
          }
          setSecondaryclose(value);
        }}
        onBlur={() => runValidationTasks("secondaryclose", secondaryclose)}
        errorMessage={errors.secondaryclose?.errorMessage}
        hasError={errors.secondaryclose?.hasError}
        {...getOverrideProps(overrides, "secondaryclose")}
      ></TextAreaField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen: values,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            values = result?.daystodopen ?? values;
          }
          setDaystodopen(values);
          setCurrentDaystodopenValue("");
        }}
        currentFieldValue={currentDaystodopenValue}
        label={"Daystodopen"}
        items={daystodopen}
        hasError={errors?.daystodopen?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("daystodopen", currentDaystodopenValue)
        }
        errorMessage={errors?.daystodopen?.errorMessage}
        setFieldValue={setCurrentDaystodopenValue}
        inputFieldRef={daystodopenRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Daystodopen"
          isRequired={false}
          isReadOnly={false}
          value={currentDaystodopenValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.daystodopen?.hasError) {
              runValidationTasks("daystodopen", value);
            }
            setCurrentDaystodopenValue(value);
          }}
          onBlur={() =>
            runValidationTasks("daystodopen", currentDaystodopenValue)
          }
          errorMessage={errors.daystodopen?.errorMessage}
          hasError={errors.daystodopen?.hasError}
          ref={daystodopenRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "daystodopen")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose: values,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            values = result?.daystodclose ?? values;
          }
          setDaystodclose(values);
          setCurrentDaystodcloseValue("");
        }}
        currentFieldValue={currentDaystodcloseValue}
        label={"Daystodclose"}
        items={daystodclose}
        hasError={errors?.daystodclose?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("daystodclose", currentDaystodcloseValue)
        }
        errorMessage={errors?.daystodclose?.errorMessage}
        setFieldValue={setCurrentDaystodcloseValue}
        inputFieldRef={daystodcloseRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Daystodclose"
          isRequired={false}
          isReadOnly={false}
          value={currentDaystodcloseValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.daystodclose?.hasError) {
              runValidationTasks("daystodclose", value);
            }
            setCurrentDaystodcloseValue(value);
          }}
          onBlur={() =>
            runValidationTasks("daystodclose", currentDaystodcloseValue)
          }
          errorMessage={errors.daystodclose?.errorMessage}
          hasError={errors.daystodclose?.hasError}
          ref={daystodcloseRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "daystodclose")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen: values,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            values = result?.daysopen ?? values;
          }
          setDaysopen(values);
          setCurrentDaysopenValue("");
        }}
        currentFieldValue={currentDaysopenValue}
        label={"Daysopen"}
        items={daysopen}
        hasError={errors?.daysopen?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("daysopen", currentDaysopenValue)
        }
        errorMessage={errors?.daysopen?.errorMessage}
        setFieldValue={setCurrentDaysopenValue}
        inputFieldRef={daysopenRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Daysopen"
          isRequired={false}
          isReadOnly={false}
          value={currentDaysopenValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.daysopen?.hasError) {
              runValidationTasks("daysopen", value);
            }
            setCurrentDaysopenValue(value);
          }}
          onBlur={() => runValidationTasks("daysopen", currentDaysopenValue)}
          errorMessage={errors.daysopen?.errorMessage}
          hasError={errors.daysopen?.hasError}
          ref={daysopenRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "daysopen")}
        ></TextField>
      </ArrayField>
      <TextAreaField
        label="Afterhours"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours: value,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.afterhours ?? value;
          }
          if (errors.afterhours?.hasError) {
            runValidationTasks("afterhours", value);
          }
          setAfterhours(value);
        }}
        onBlur={() => runValidationTasks("afterhours", afterhours)}
        errorMessage={errors.afterhours?.errorMessage}
        hasError={errors.afterhours?.hasError}
        {...getOverrideProps(overrides, "afterhours")}
      ></TextAreaField>
      <TextField
        label="Ccdescription"
        isRequired={false}
        isReadOnly={false}
        value={ccdescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription: value,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
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
      <TextField
        label="Defaultroute"
        isRequired={false}
        isReadOnly={false}
        value={defaultroute}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute: value,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.defaultroute ?? value;
          }
          if (errors.defaultroute?.hasError) {
            runValidationTasks("defaultroute", value);
          }
          setDefaultroute(value);
        }}
        onBlur={() => runValidationTasks("defaultroute", defaultroute)}
        errorMessage={errors.defaultroute?.errorMessage}
        hasError={errors.defaultroute?.hasError}
        {...getOverrideProps(overrides, "defaultroute")}
      ></TextField>
      <TextField
        label="Ccname"
        isRequired={false}
        isReadOnly={false}
        value={ccname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname: value,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
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
        label="Welcomeprompt"
        isRequired={false}
        isReadOnly={false}
        value={welcomeprompt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt: value,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
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
      ></TextField>
      <TextField
        label="Welcomeprompt sp"
        isRequired={false}
        isReadOnly={false}
        value={welcomeprompt_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp: value,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.welcomeprompt_sp ?? value;
          }
          if (errors.welcomeprompt_sp?.hasError) {
            runValidationTasks("welcomeprompt_sp", value);
          }
          setWelcomeprompt_sp(value);
        }}
        onBlur={() => runValidationTasks("welcomeprompt_sp", welcomeprompt_sp)}
        errorMessage={errors.welcomeprompt_sp?.errorMessage}
        hasError={errors.welcomeprompt_sp?.hasError}
        {...getOverrideProps(overrides, "welcomeprompt_sp")}
      ></TextField>
      <TextAreaField
        label="Submenu2"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2: value,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.submenu2 ?? value;
          }
          if (errors.submenu2?.hasError) {
            runValidationTasks("submenu2", value);
          }
          setSubmenu2(value);
        }}
        onBlur={() => runValidationTasks("submenu2", submenu2)}
        errorMessage={errors.submenu2?.errorMessage}
        hasError={errors.submenu2?.hasError}
        {...getOverrideProps(overrides, "submenu2")}
      ></TextAreaField>
      <TextAreaField
        label="Submenu2 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp: value,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.submenu2_sp ?? value;
          }
          if (errors.submenu2_sp?.hasError) {
            runValidationTasks("submenu2_sp", value);
          }
          setSubmenu2_sp(value);
        }}
        onBlur={() => runValidationTasks("submenu2_sp", submenu2_sp)}
        errorMessage={errors.submenu2_sp?.errorMessage}
        hasError={errors.submenu2_sp?.hasError}
        {...getOverrideProps(overrides, "submenu2_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Menu0 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp: value,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu0_sp ?? value;
          }
          if (errors.menu0_sp?.hasError) {
            runValidationTasks("menu0_sp", value);
          }
          setMenu0_sp(value);
        }}
        onBlur={() => runValidationTasks("menu0_sp", menu0_sp)}
        errorMessage={errors.menu0_sp?.errorMessage}
        hasError={errors.menu0_sp?.hasError}
        {...getOverrideProps(overrides, "menu0_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Menu1 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp: value,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu1_sp ?? value;
          }
          if (errors.menu1_sp?.hasError) {
            runValidationTasks("menu1_sp", value);
          }
          setMenu1_sp(value);
        }}
        onBlur={() => runValidationTasks("menu1_sp", menu1_sp)}
        errorMessage={errors.menu1_sp?.errorMessage}
        hasError={errors.menu1_sp?.hasError}
        {...getOverrideProps(overrides, "menu1_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Menu2 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp: value,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu2_sp ?? value;
          }
          if (errors.menu2_sp?.hasError) {
            runValidationTasks("menu2_sp", value);
          }
          setMenu2_sp(value);
        }}
        onBlur={() => runValidationTasks("menu2_sp", menu2_sp)}
        errorMessage={errors.menu2_sp?.errorMessage}
        hasError={errors.menu2_sp?.hasError}
        {...getOverrideProps(overrides, "menu2_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Menu3 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp: value,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu3_sp ?? value;
          }
          if (errors.menu3_sp?.hasError) {
            runValidationTasks("menu3_sp", value);
          }
          setMenu3_sp(value);
        }}
        onBlur={() => runValidationTasks("menu3_sp", menu3_sp)}
        errorMessage={errors.menu3_sp?.errorMessage}
        hasError={errors.menu3_sp?.hasError}
        {...getOverrideProps(overrides, "menu3_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Menu4 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp: value,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu4_sp ?? value;
          }
          if (errors.menu4_sp?.hasError) {
            runValidationTasks("menu4_sp", value);
          }
          setMenu4_sp(value);
        }}
        onBlur={() => runValidationTasks("menu4_sp", menu4_sp)}
        errorMessage={errors.menu4_sp?.errorMessage}
        hasError={errors.menu4_sp?.hasError}
        {...getOverrideProps(overrides, "menu4_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Menu5 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp: value,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu5_sp ?? value;
          }
          if (errors.menu5_sp?.hasError) {
            runValidationTasks("menu5_sp", value);
          }
          setMenu5_sp(value);
        }}
        onBlur={() => runValidationTasks("menu5_sp", menu5_sp)}
        errorMessage={errors.menu5_sp?.errorMessage}
        hasError={errors.menu5_sp?.hasError}
        {...getOverrideProps(overrides, "menu5_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Menu6 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp: value,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu6_sp ?? value;
          }
          if (errors.menu6_sp?.hasError) {
            runValidationTasks("menu6_sp", value);
          }
          setMenu6_sp(value);
        }}
        onBlur={() => runValidationTasks("menu6_sp", menu6_sp)}
        errorMessage={errors.menu6_sp?.errorMessage}
        hasError={errors.menu6_sp?.hasError}
        {...getOverrideProps(overrides, "menu6_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Menu7 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp: value,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu7_sp ?? value;
          }
          if (errors.menu7_sp?.hasError) {
            runValidationTasks("menu7_sp", value);
          }
          setMenu7_sp(value);
        }}
        onBlur={() => runValidationTasks("menu7_sp", menu7_sp)}
        errorMessage={errors.menu7_sp?.errorMessage}
        hasError={errors.menu7_sp?.hasError}
        {...getOverrideProps(overrides, "menu7_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Menu8 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp: value,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu8_sp ?? value;
          }
          if (errors.menu8_sp?.hasError) {
            runValidationTasks("menu8_sp", value);
          }
          setMenu8_sp(value);
        }}
        onBlur={() => runValidationTasks("menu8_sp", menu8_sp)}
        errorMessage={errors.menu8_sp?.errorMessage}
        hasError={errors.menu8_sp?.hasError}
        {...getOverrideProps(overrides, "menu8_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Menu9 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp: value,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.menu9_sp ?? value;
          }
          if (errors.menu9_sp?.hasError) {
            runValidationTasks("menu9_sp", value);
          }
          setMenu9_sp(value);
        }}
        onBlur={() => runValidationTasks("menu9_sp", menu9_sp)}
        errorMessage={errors.menu9_sp?.errorMessage}
        hasError={errors.menu9_sp?.hasError}
        {...getOverrideProps(overrides, "menu9_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Override"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override: value,
              Managers,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.override ?? value;
          }
          if (errors.override?.hasError) {
            runValidationTasks("override", value);
          }
          setOverride(value);
        }}
        onBlur={() => runValidationTasks("override", override)}
        errorMessage={errors.override?.errorMessage}
        hasError={errors.override?.hasError}
        {...getOverrideProps(overrides, "override")}
      ></TextAreaField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers: values,
              AssignedGroup,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
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
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup: value,
              updateduser,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
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
      <TextField
        label="Updateduser"
        isRequired={false}
        isReadOnly={false}
        value={updateduser}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser: value,
              version,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.updateduser ?? value;
          }
          if (errors.updateduser?.hasError) {
            runValidationTasks("updateduser", value);
          }
          setUpdateduser(value);
        }}
        onBlur={() => runValidationTasks("updateduser", updateduser)}
        errorMessage={errors.updateduser?.errorMessage}
        hasError={errors.updateduser?.hasError}
        {...getOverrideProps(overrides, "updateduser")}
      ></TextField>
      <TextField
        label="Version"
        isRequired={false}
        isReadOnly={false}
        value={version}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version: value,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
            };
            const result = onChange(modelFields);
            value = result?.version ?? value;
          }
          if (errors.version?.hasError) {
            runValidationTasks("version", value);
          }
          setVersion(value);
        }}
        onBlur={() => runValidationTasks("version", version)}
        errorMessage={errors.version?.errorMessage}
        hasError={errors.version?.hasError}
        {...getOverrideProps(overrides, "version")}
      ></TextField>
      <SwitchField
        label="Isoverride"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isoverride}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
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
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
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
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
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
              mainnumber,
              menu0,
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
              holiday,
              holidayoption,
              secondarytodopen,
              secondarytodclose,
              secondaryclose,
              daystodopen,
              daystodclose,
              daysopen,
              afterhours,
              ccdescription,
              defaultroute,
              ccname,
              welcomeprompt,
              welcomeprompt_sp,
              submenu2,
              submenu2_sp,
              menu0_sp,
              menu1_sp,
              menu2_sp,
              menu3_sp,
              menu4_sp,
              menu5_sp,
              menu6_sp,
              menu7_sp,
              menu8_sp,
              menu9_sp,
              override,
              Managers,
              AssignedGroup,
              updateduser,
              version,
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
