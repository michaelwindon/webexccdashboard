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
    ccname: "",
    mainnumber: "",
    ccdescription: "",
    Managers: [],
    AssignedGroup: undefined,
    epiccontext: "",
    presentlangoption: false,
    isoverride: false,
    isholiday: false,
    isafterhours: false,
    issecondaryclosed: false,
    welcomeprompt: "",
    welcomeprompt_sp: "",
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
    secondarytodopen: [],
    secondarytodclose: [],
    daystodopen: [],
    daystodclose: [],
    daysopen: [],
    holidayoption: "",
    afterhours: "",
    secondaryclose: "",
    override: "",
    defaultroute: "",
    updateduser: "",
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
    submenu1: "",
    submenu2: "",
    submenu3: "",
    submenu4: "",
    submenu5: "",
    submenu6: "",
    submenu7: "",
    submenu8: "",
    submenu9: "",
    submenu0: "",
    submenu1_sp: "",
    submenu2_sp: "",
    submenu3_sp: "",
    submenu4_sp: "",
    submenu5_sp: "",
    submenu6_sp: "",
    submenu7_sp: "",
    submenu8_sp: "",
    submenu9_sp: "",
    submenu0_sp: "",
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
  const [presentlangoption, setPresentlangoption] = React.useState(
    initialValues.presentlangoption
  );
  const [isoverride, setIsoverride] = React.useState(initialValues.isoverride);
  const [isholiday, setIsholiday] = React.useState(initialValues.isholiday);
  const [isafterhours, setIsafterhours] = React.useState(
    initialValues.isafterhours
  );
  const [issecondaryclosed, setIssecondaryclosed] = React.useState(
    initialValues.issecondaryclosed
  );
  const [welcomeprompt, setWelcomeprompt] = React.useState(
    initialValues.welcomeprompt
  );
  const [welcomeprompt_sp, setWelcomeprompt_sp] = React.useState(
    initialValues.welcomeprompt_sp
  );
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
  const [secondarytodopen, setSecondarytodopen] = React.useState(
    initialValues.secondarytodopen
  );
  const [secondarytodclose, setSecondarytodclose] = React.useState(
    initialValues.secondarytodclose
  );
  const [daystodopen, setDaystodopen] = React.useState(
    initialValues.daystodopen
  );
  const [daystodclose, setDaystodclose] = React.useState(
    initialValues.daystodclose
  );
  const [daysopen, setDaysopen] = React.useState(initialValues.daysopen);
  const [holidayoption, setHolidayoption] = React.useState(
    initialValues.holidayoption
  );
  const [afterhours, setAfterhours] = React.useState(initialValues.afterhours);
  const [secondaryclose, setSecondaryclose] = React.useState(
    initialValues.secondaryclose
  );
  const [override, setOverride] = React.useState(initialValues.override);
  const [defaultroute, setDefaultroute] = React.useState(
    initialValues.defaultroute
  );
  const [updateduser, setUpdateduser] = React.useState(
    initialValues.updateduser
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
  const [submenu1, setSubmenu1] = React.useState(initialValues.submenu1);
  const [submenu2, setSubmenu2] = React.useState(initialValues.submenu2);
  const [submenu3, setSubmenu3] = React.useState(initialValues.submenu3);
  const [submenu4, setSubmenu4] = React.useState(initialValues.submenu4);
  const [submenu5, setSubmenu5] = React.useState(initialValues.submenu5);
  const [submenu6, setSubmenu6] = React.useState(initialValues.submenu6);
  const [submenu7, setSubmenu7] = React.useState(initialValues.submenu7);
  const [submenu8, setSubmenu8] = React.useState(initialValues.submenu8);
  const [submenu9, setSubmenu9] = React.useState(initialValues.submenu9);
  const [submenu0, setSubmenu0] = React.useState(initialValues.submenu0);
  const [submenu1_sp, setSubmenu1_sp] = React.useState(
    initialValues.submenu1_sp
  );
  const [submenu2_sp, setSubmenu2_sp] = React.useState(
    initialValues.submenu2_sp
  );
  const [submenu3_sp, setSubmenu3_sp] = React.useState(
    initialValues.submenu3_sp
  );
  const [submenu4_sp, setSubmenu4_sp] = React.useState(
    initialValues.submenu4_sp
  );
  const [submenu5_sp, setSubmenu5_sp] = React.useState(
    initialValues.submenu5_sp
  );
  const [submenu6_sp, setSubmenu6_sp] = React.useState(
    initialValues.submenu6_sp
  );
  const [submenu7_sp, setSubmenu7_sp] = React.useState(
    initialValues.submenu7_sp
  );
  const [submenu8_sp, setSubmenu8_sp] = React.useState(
    initialValues.submenu8_sp
  );
  const [submenu9_sp, setSubmenu9_sp] = React.useState(
    initialValues.submenu9_sp
  );
  const [submenu0_sp, setSubmenu0_sp] = React.useState(
    initialValues.submenu0_sp
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
    setPresentlangoption(initialValues.presentlangoption);
    setIsoverride(initialValues.isoverride);
    setIsholiday(initialValues.isholiday);
    setIsafterhours(initialValues.isafterhours);
    setIssecondaryclosed(initialValues.issecondaryclosed);
    setWelcomeprompt(initialValues.welcomeprompt);
    setWelcomeprompt_sp(initialValues.welcomeprompt_sp);
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
    setSecondarytodopen(initialValues.secondarytodopen);
    setCurrentSecondarytodopenValue("");
    setSecondarytodclose(initialValues.secondarytodclose);
    setCurrentSecondarytodcloseValue("");
    setDaystodopen(initialValues.daystodopen);
    setCurrentDaystodopenValue("");
    setDaystodclose(initialValues.daystodclose);
    setCurrentDaystodcloseValue("");
    setDaysopen(initialValues.daysopen);
    setCurrentDaysopenValue("");
    setHolidayoption(initialValues.holidayoption);
    setAfterhours(initialValues.afterhours);
    setSecondaryclose(initialValues.secondaryclose);
    setOverride(initialValues.override);
    setDefaultroute(initialValues.defaultroute);
    setUpdateduser(initialValues.updateduser);
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
    setSubmenu1(initialValues.submenu1);
    setSubmenu2(initialValues.submenu2);
    setSubmenu3(initialValues.submenu3);
    setSubmenu4(initialValues.submenu4);
    setSubmenu5(initialValues.submenu5);
    setSubmenu6(initialValues.submenu6);
    setSubmenu7(initialValues.submenu7);
    setSubmenu8(initialValues.submenu8);
    setSubmenu9(initialValues.submenu9);
    setSubmenu0(initialValues.submenu0);
    setSubmenu1_sp(initialValues.submenu1_sp);
    setSubmenu2_sp(initialValues.submenu2_sp);
    setSubmenu3_sp(initialValues.submenu3_sp);
    setSubmenu4_sp(initialValues.submenu4_sp);
    setSubmenu5_sp(initialValues.submenu5_sp);
    setSubmenu6_sp(initialValues.submenu6_sp);
    setSubmenu7_sp(initialValues.submenu7_sp);
    setSubmenu8_sp(initialValues.submenu8_sp);
    setSubmenu9_sp(initialValues.submenu9_sp);
    setSubmenu0_sp(initialValues.submenu0_sp);
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
    presentlangoption: [],
    isoverride: [],
    isholiday: [],
    isafterhours: [],
    issecondaryclosed: [],
    welcomeprompt: [],
    welcomeprompt_sp: [],
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
    secondarytodopen: [],
    secondarytodclose: [],
    daystodopen: [],
    daystodclose: [],
    daysopen: [],
    holidayoption: [{ type: "JSON" }],
    afterhours: [{ type: "JSON" }],
    secondaryclose: [{ type: "JSON" }],
    override: [{ type: "JSON" }],
    defaultroute: [],
    updateduser: [],
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
    submenu1: [{ type: "JSON" }],
    submenu2: [{ type: "JSON" }],
    submenu3: [{ type: "JSON" }],
    submenu4: [{ type: "JSON" }],
    submenu5: [{ type: "JSON" }],
    submenu6: [{ type: "JSON" }],
    submenu7: [{ type: "JSON" }],
    submenu8: [{ type: "JSON" }],
    submenu9: [{ type: "JSON" }],
    submenu0: [{ type: "JSON" }],
    submenu1_sp: [{ type: "JSON" }],
    submenu2_sp: [{ type: "JSON" }],
    submenu3_sp: [{ type: "JSON" }],
    submenu4_sp: [{ type: "JSON" }],
    submenu5_sp: [{ type: "JSON" }],
    submenu6_sp: [{ type: "JSON" }],
    submenu7_sp: [{ type: "JSON" }],
    submenu8_sp: [{ type: "JSON" }],
    submenu9_sp: [{ type: "JSON" }],
    submenu0_sp: [{ type: "JSON" }],
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
          presentlangoption,
          isoverride,
          isholiday,
          isafterhours,
          issecondaryclosed,
          welcomeprompt,
          welcomeprompt_sp,
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
          secondarytodopen,
          secondarytodclose,
          daystodopen,
          daystodclose,
          daysopen,
          holidayoption,
          afterhours,
          secondaryclose,
          override,
          defaultroute,
          updateduser,
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
          submenu1,
          submenu2,
          submenu3,
          submenu4,
          submenu5,
          submenu6,
          submenu7,
          submenu8,
          submenu9,
          submenu0,
          submenu1_sp,
          submenu2_sp,
          submenu3_sp,
          submenu4_sp,
          submenu5_sp,
          submenu6_sp,
          submenu7_sp,
          submenu8_sp,
          submenu9_sp,
          submenu0_sp,
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
            presentlangoption: modelFields.presentlangoption,
            isoverride: modelFields.isoverride,
            isholiday: modelFields.isholiday,
            isafterhours: modelFields.isafterhours,
            issecondaryclosed: modelFields.issecondaryclosed,
            welcomeprompt: modelFields.welcomeprompt,
            welcomeprompt_sp: modelFields.welcomeprompt_sp,
            holiday: modelFields.holiday,
            secondarytodopen: modelFields.secondarytodopen,
            secondarytodclose: modelFields.secondarytodclose,
            daystodopen: modelFields.daystodopen,
            daystodclose: modelFields.daystodclose,
            daysopen: modelFields.daysopen,
            defaultroute: modelFields.defaultroute,
            updateduser: modelFields.updateduser,
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
            afterhours: modelFields.afterhours
              ? JSON.parse(modelFields.afterhours)
              : modelFields.afterhours,
            secondaryclose: modelFields.secondaryclose
              ? JSON.parse(modelFields.secondaryclose)
              : modelFields.secondaryclose,
            override: modelFields.override
              ? JSON.parse(modelFields.override)
              : modelFields.override,
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
            submenu1: modelFields.submenu1
              ? JSON.parse(modelFields.submenu1)
              : modelFields.submenu1,
            submenu2: modelFields.submenu2
              ? JSON.parse(modelFields.submenu2)
              : modelFields.submenu2,
            submenu3: modelFields.submenu3
              ? JSON.parse(modelFields.submenu3)
              : modelFields.submenu3,
            submenu4: modelFields.submenu4
              ? JSON.parse(modelFields.submenu4)
              : modelFields.submenu4,
            submenu5: modelFields.submenu5
              ? JSON.parse(modelFields.submenu5)
              : modelFields.submenu5,
            submenu6: modelFields.submenu6
              ? JSON.parse(modelFields.submenu6)
              : modelFields.submenu6,
            submenu7: modelFields.submenu7
              ? JSON.parse(modelFields.submenu7)
              : modelFields.submenu7,
            submenu8: modelFields.submenu8
              ? JSON.parse(modelFields.submenu8)
              : modelFields.submenu8,
            submenu9: modelFields.submenu9
              ? JSON.parse(modelFields.submenu9)
              : modelFields.submenu9,
            submenu0: modelFields.submenu0
              ? JSON.parse(modelFields.submenu0)
              : modelFields.submenu0,
            submenu1_sp: modelFields.submenu1_sp
              ? JSON.parse(modelFields.submenu1_sp)
              : modelFields.submenu1_sp,
            submenu2_sp: modelFields.submenu2_sp
              ? JSON.parse(modelFields.submenu2_sp)
              : modelFields.submenu2_sp,
            submenu3_sp: modelFields.submenu3_sp
              ? JSON.parse(modelFields.submenu3_sp)
              : modelFields.submenu3_sp,
            submenu4_sp: modelFields.submenu4_sp
              ? JSON.parse(modelFields.submenu4_sp)
              : modelFields.submenu4_sp,
            submenu5_sp: modelFields.submenu5_sp
              ? JSON.parse(modelFields.submenu5_sp)
              : modelFields.submenu5_sp,
            submenu6_sp: modelFields.submenu6_sp
              ? JSON.parse(modelFields.submenu6_sp)
              : modelFields.submenu6_sp,
            submenu7_sp: modelFields.submenu7_sp
              ? JSON.parse(modelFields.submenu7_sp)
              : modelFields.submenu7_sp,
            submenu8_sp: modelFields.submenu8_sp
              ? JSON.parse(modelFields.submenu8_sp)
              : modelFields.submenu8_sp,
            submenu9_sp: modelFields.submenu9_sp
              ? JSON.parse(modelFields.submenu9_sp)
              : modelFields.submenu9_sp,
            submenu0_sp: modelFields.submenu0_sp
              ? JSON.parse(modelFields.submenu0_sp)
              : modelFields.submenu0_sp,
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
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
        label="Number"
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
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
          placeholder="Assign Manager"
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
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
          placeholder="Assign Group"
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
        label="EPIC Screen Pop Context"
        placeholder="Please select EPIC Context"
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
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
      <SwitchField
        label="Presentlangoption"
        defaultChecked={false}
        isDisabled={false}
        isChecked={presentlangoption}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption: value,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
      <SwitchField
        label="Isoverride"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isoverride}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride: value,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday: value,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours: value,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed: value,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
      <TextField
        label="Welcomeprompt"
        isRequired={false}
        isReadOnly={false}
        value={welcomeprompt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt: value,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp: value,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
        label="Menu0"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen: values,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose: values,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen: values,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose: values,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen: values,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
        label="Holidayoption"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption: value,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
      <TextAreaField
        label="Afterhours"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours: value,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
      <TextAreaField
        label="Secondaryclose"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose: value,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
      <TextAreaField
        label="Override"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override: value,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
      <TextField
        label="Defaultroute"
        isRequired={false}
        isReadOnly={false}
        value={defaultroute}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute: value,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
        label="Updateduser"
        isRequired={false}
        isReadOnly={false}
        value={updateduser}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser: value,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
      <TextAreaField
        label="Menu0 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
        label="Submenu1"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1: value,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
            };
            const result = onChange(modelFields);
            value = result?.submenu1 ?? value;
          }
          if (errors.submenu1?.hasError) {
            runValidationTasks("submenu1", value);
          }
          setSubmenu1(value);
        }}
        onBlur={() => runValidationTasks("submenu1", submenu1)}
        errorMessage={errors.submenu1?.errorMessage}
        hasError={errors.submenu1?.hasError}
        {...getOverrideProps(overrides, "submenu1")}
      ></TextAreaField>
      <TextAreaField
        label="Submenu2"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2: value,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
        label="Submenu3"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3: value,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
            };
            const result = onChange(modelFields);
            value = result?.submenu3 ?? value;
          }
          if (errors.submenu3?.hasError) {
            runValidationTasks("submenu3", value);
          }
          setSubmenu3(value);
        }}
        onBlur={() => runValidationTasks("submenu3", submenu3)}
        errorMessage={errors.submenu3?.errorMessage}
        hasError={errors.submenu3?.hasError}
        {...getOverrideProps(overrides, "submenu3")}
      ></TextAreaField>
      <TextAreaField
        label="Submenu4"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4: value,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
            };
            const result = onChange(modelFields);
            value = result?.submenu4 ?? value;
          }
          if (errors.submenu4?.hasError) {
            runValidationTasks("submenu4", value);
          }
          setSubmenu4(value);
        }}
        onBlur={() => runValidationTasks("submenu4", submenu4)}
        errorMessage={errors.submenu4?.errorMessage}
        hasError={errors.submenu4?.hasError}
        {...getOverrideProps(overrides, "submenu4")}
      ></TextAreaField>
      <TextAreaField
        label="Submenu5"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5: value,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
            };
            const result = onChange(modelFields);
            value = result?.submenu5 ?? value;
          }
          if (errors.submenu5?.hasError) {
            runValidationTasks("submenu5", value);
          }
          setSubmenu5(value);
        }}
        onBlur={() => runValidationTasks("submenu5", submenu5)}
        errorMessage={errors.submenu5?.errorMessage}
        hasError={errors.submenu5?.hasError}
        {...getOverrideProps(overrides, "submenu5")}
      ></TextAreaField>
      <TextAreaField
        label="Submenu6"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6: value,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
            };
            const result = onChange(modelFields);
            value = result?.submenu6 ?? value;
          }
          if (errors.submenu6?.hasError) {
            runValidationTasks("submenu6", value);
          }
          setSubmenu6(value);
        }}
        onBlur={() => runValidationTasks("submenu6", submenu6)}
        errorMessage={errors.submenu6?.errorMessage}
        hasError={errors.submenu6?.hasError}
        {...getOverrideProps(overrides, "submenu6")}
      ></TextAreaField>
      <TextAreaField
        label="Submenu7"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7: value,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
            };
            const result = onChange(modelFields);
            value = result?.submenu7 ?? value;
          }
          if (errors.submenu7?.hasError) {
            runValidationTasks("submenu7", value);
          }
          setSubmenu7(value);
        }}
        onBlur={() => runValidationTasks("submenu7", submenu7)}
        errorMessage={errors.submenu7?.errorMessage}
        hasError={errors.submenu7?.hasError}
        {...getOverrideProps(overrides, "submenu7")}
      ></TextAreaField>
      <TextAreaField
        label="Submenu8"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8: value,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
            };
            const result = onChange(modelFields);
            value = result?.submenu8 ?? value;
          }
          if (errors.submenu8?.hasError) {
            runValidationTasks("submenu8", value);
          }
          setSubmenu8(value);
        }}
        onBlur={() => runValidationTasks("submenu8", submenu8)}
        errorMessage={errors.submenu8?.errorMessage}
        hasError={errors.submenu8?.hasError}
        {...getOverrideProps(overrides, "submenu8")}
      ></TextAreaField>
      <TextAreaField
        label="Submenu9"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9: value,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
            };
            const result = onChange(modelFields);
            value = result?.submenu9 ?? value;
          }
          if (errors.submenu9?.hasError) {
            runValidationTasks("submenu9", value);
          }
          setSubmenu9(value);
        }}
        onBlur={() => runValidationTasks("submenu9", submenu9)}
        errorMessage={errors.submenu9?.errorMessage}
        hasError={errors.submenu9?.hasError}
        {...getOverrideProps(overrides, "submenu9")}
      ></TextAreaField>
      <TextAreaField
        label="Submenu0"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0: value,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
            };
            const result = onChange(modelFields);
            value = result?.submenu0 ?? value;
          }
          if (errors.submenu0?.hasError) {
            runValidationTasks("submenu0", value);
          }
          setSubmenu0(value);
        }}
        onBlur={() => runValidationTasks("submenu0", submenu0)}
        errorMessage={errors.submenu0?.errorMessage}
        hasError={errors.submenu0?.hasError}
        {...getOverrideProps(overrides, "submenu0")}
      ></TextAreaField>
      <TextAreaField
        label="Submenu1 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp: value,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
            };
            const result = onChange(modelFields);
            value = result?.submenu1_sp ?? value;
          }
          if (errors.submenu1_sp?.hasError) {
            runValidationTasks("submenu1_sp", value);
          }
          setSubmenu1_sp(value);
        }}
        onBlur={() => runValidationTasks("submenu1_sp", submenu1_sp)}
        errorMessage={errors.submenu1_sp?.errorMessage}
        hasError={errors.submenu1_sp?.hasError}
        {...getOverrideProps(overrides, "submenu1_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Submenu2 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp: value,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
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
        label="Submenu3 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp: value,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
            };
            const result = onChange(modelFields);
            value = result?.submenu3_sp ?? value;
          }
          if (errors.submenu3_sp?.hasError) {
            runValidationTasks("submenu3_sp", value);
          }
          setSubmenu3_sp(value);
        }}
        onBlur={() => runValidationTasks("submenu3_sp", submenu3_sp)}
        errorMessage={errors.submenu3_sp?.errorMessage}
        hasError={errors.submenu3_sp?.hasError}
        {...getOverrideProps(overrides, "submenu3_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Submenu4 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp: value,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
            };
            const result = onChange(modelFields);
            value = result?.submenu4_sp ?? value;
          }
          if (errors.submenu4_sp?.hasError) {
            runValidationTasks("submenu4_sp", value);
          }
          setSubmenu4_sp(value);
        }}
        onBlur={() => runValidationTasks("submenu4_sp", submenu4_sp)}
        errorMessage={errors.submenu4_sp?.errorMessage}
        hasError={errors.submenu4_sp?.hasError}
        {...getOverrideProps(overrides, "submenu4_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Submenu5 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp: value,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
            };
            const result = onChange(modelFields);
            value = result?.submenu5_sp ?? value;
          }
          if (errors.submenu5_sp?.hasError) {
            runValidationTasks("submenu5_sp", value);
          }
          setSubmenu5_sp(value);
        }}
        onBlur={() => runValidationTasks("submenu5_sp", submenu5_sp)}
        errorMessage={errors.submenu5_sp?.errorMessage}
        hasError={errors.submenu5_sp?.hasError}
        {...getOverrideProps(overrides, "submenu5_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Submenu6 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp: value,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
            };
            const result = onChange(modelFields);
            value = result?.submenu6_sp ?? value;
          }
          if (errors.submenu6_sp?.hasError) {
            runValidationTasks("submenu6_sp", value);
          }
          setSubmenu6_sp(value);
        }}
        onBlur={() => runValidationTasks("submenu6_sp", submenu6_sp)}
        errorMessage={errors.submenu6_sp?.errorMessage}
        hasError={errors.submenu6_sp?.hasError}
        {...getOverrideProps(overrides, "submenu6_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Submenu7 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp: value,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
            };
            const result = onChange(modelFields);
            value = result?.submenu7_sp ?? value;
          }
          if (errors.submenu7_sp?.hasError) {
            runValidationTasks("submenu7_sp", value);
          }
          setSubmenu7_sp(value);
        }}
        onBlur={() => runValidationTasks("submenu7_sp", submenu7_sp)}
        errorMessage={errors.submenu7_sp?.errorMessage}
        hasError={errors.submenu7_sp?.hasError}
        {...getOverrideProps(overrides, "submenu7_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Submenu8 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp: value,
              submenu9_sp,
              submenu0_sp,
            };
            const result = onChange(modelFields);
            value = result?.submenu8_sp ?? value;
          }
          if (errors.submenu8_sp?.hasError) {
            runValidationTasks("submenu8_sp", value);
          }
          setSubmenu8_sp(value);
        }}
        onBlur={() => runValidationTasks("submenu8_sp", submenu8_sp)}
        errorMessage={errors.submenu8_sp?.errorMessage}
        hasError={errors.submenu8_sp?.hasError}
        {...getOverrideProps(overrides, "submenu8_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Submenu9 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp: value,
              submenu0_sp,
            };
            const result = onChange(modelFields);
            value = result?.submenu9_sp ?? value;
          }
          if (errors.submenu9_sp?.hasError) {
            runValidationTasks("submenu9_sp", value);
          }
          setSubmenu9_sp(value);
        }}
        onBlur={() => runValidationTasks("submenu9_sp", submenu9_sp)}
        errorMessage={errors.submenu9_sp?.errorMessage}
        hasError={errors.submenu9_sp?.hasError}
        {...getOverrideProps(overrides, "submenu9_sp")}
      ></TextAreaField>
      <TextAreaField
        label="Submenu0 sp"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ccname,
              mainnumber,
              ccdescription,
              Managers,
              AssignedGroup,
              epiccontext,
              presentlangoption,
              isoverride,
              isholiday,
              isafterhours,
              issecondaryclosed,
              welcomeprompt,
              welcomeprompt_sp,
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
              secondarytodopen,
              secondarytodclose,
              daystodopen,
              daystodclose,
              daysopen,
              holidayoption,
              afterhours,
              secondaryclose,
              override,
              defaultroute,
              updateduser,
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
              submenu1,
              submenu2,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu2_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp: value,
            };
            const result = onChange(modelFields);
            value = result?.submenu0_sp ?? value;
          }
          if (errors.submenu0_sp?.hasError) {
            runValidationTasks("submenu0_sp", value);
          }
          setSubmenu0_sp(value);
        }}
        onBlur={() => runValidationTasks("submenu0_sp", submenu0_sp)}
        errorMessage={errors.submenu0_sp?.errorMessage}
        hasError={errors.submenu0_sp?.hasError}
        {...getOverrideProps(overrides, "submenu0_sp")}
      ></TextAreaField>
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
