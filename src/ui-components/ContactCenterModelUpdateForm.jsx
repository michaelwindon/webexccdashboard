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
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getContactCenterModel } from "../graphql/queries";
import { updateContactCenterModel } from "../graphql/mutations";
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
export default function ContactCenterModelUpdateForm(props) {
  const {
    id: idProp,
    contactCenterModel: contactCenterModelModelProp,
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
    holiday: [],
    secondarytodclose: [],
    secondarytodopen: [],
    daysopen: [],
    daystodopen: [],
    daystodclose: [],
    welcomeprompt: "",
    ccdescription: "",
    ccname: "",
    defaultroute: "",
    isoverride: false,
    welcomeprompt_sp: "",
    menu0_sp: "",
    group: "",
    version: "",
  };
  const [mainnumber, setMainnumber] = React.useState(initialValues.mainnumber);
  const [holiday, setHoliday] = React.useState(initialValues.holiday);
  const [secondarytodclose, setSecondarytodclose] = React.useState(
    initialValues.secondarytodclose
  );
  const [secondarytodopen, setSecondarytodopen] = React.useState(
    initialValues.secondarytodopen
  );
  const [daysopen, setDaysopen] = React.useState(initialValues.daysopen);
  const [daystodopen, setDaystodopen] = React.useState(
    initialValues.daystodopen
  );
  const [daystodclose, setDaystodclose] = React.useState(
    initialValues.daystodclose
  );
  const [welcomeprompt, setWelcomeprompt] = React.useState(
    initialValues.welcomeprompt
  );
  const [ccdescription, setCcdescription] = React.useState(
    initialValues.ccdescription
  );
  const [ccname, setCcname] = React.useState(initialValues.ccname);
  const [defaultroute, setDefaultroute] = React.useState(
    initialValues.defaultroute
  );
  const [isoverride, setIsoverride] = React.useState(initialValues.isoverride);
  const [welcomeprompt_sp, setWelcomeprompt_sp] = React.useState(
    initialValues.welcomeprompt_sp
  );
  const [menu0_sp, setMenu0_sp] = React.useState(initialValues.menu0_sp);
  const [group, setGroup] = React.useState(initialValues.group);
  const [version, setVersion] = React.useState(initialValues.version);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = contactCenterModelRecord
      ? { ...initialValues, ...contactCenterModelRecord }
      : initialValues;
    setMainnumber(cleanValues.mainnumber);
    setHoliday(cleanValues.holiday ?? []);
    setCurrentHolidayValue("");
    setSecondarytodclose(cleanValues.secondarytodclose ?? []);
    setCurrentSecondarytodcloseValue("");
    setSecondarytodopen(cleanValues.secondarytodopen ?? []);
    setCurrentSecondarytodopenValue("");
    setDaysopen(cleanValues.daysopen ?? []);
    setCurrentDaysopenValue("");
    setDaystodopen(cleanValues.daystodopen ?? []);
    setCurrentDaystodopenValue("");
    setDaystodclose(cleanValues.daystodclose ?? []);
    setCurrentDaystodcloseValue("");
    setWelcomeprompt(cleanValues.welcomeprompt);
    setCcdescription(cleanValues.ccdescription);
    setCcname(cleanValues.ccname);
    setDefaultroute(cleanValues.defaultroute);
    setIsoverride(cleanValues.isoverride);
    setWelcomeprompt_sp(cleanValues.welcomeprompt_sp);
    setMenu0_sp(cleanValues.menu0_sp);
    setGroup(cleanValues.group);
    setVersion(cleanValues.version);
    setErrors({});
  };
  const [contactCenterModelRecord, setContactCenterModelRecord] =
    React.useState(contactCenterModelModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getContactCenterModel.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getContactCenterModel
        : contactCenterModelModelProp;
      setContactCenterModelRecord(record);
    };
    queryData();
  }, [idProp, contactCenterModelModelProp]);
  React.useEffect(resetStateValues, [contactCenterModelRecord]);
  const [currentHolidayValue, setCurrentHolidayValue] = React.useState("");
  const holidayRef = React.createRef();
  const [currentSecondarytodcloseValue, setCurrentSecondarytodcloseValue] =
    React.useState("");
  const secondarytodcloseRef = React.createRef();
  const [currentSecondarytodopenValue, setCurrentSecondarytodopenValue] =
    React.useState("");
  const secondarytodopenRef = React.createRef();
  const [currentDaysopenValue, setCurrentDaysopenValue] = React.useState("");
  const daysopenRef = React.createRef();
  const [currentDaystodopenValue, setCurrentDaystodopenValue] =
    React.useState("");
  const daystodopenRef = React.createRef();
  const [currentDaystodcloseValue, setCurrentDaystodcloseValue] =
    React.useState("");
  const daystodcloseRef = React.createRef();
  const validations = {
    mainnumber: [{ type: "Required" }],
    holiday: [],
    secondarytodclose: [],
    secondarytodopen: [],
    daysopen: [],
    daystodopen: [],
    daystodclose: [],
    welcomeprompt: [],
    ccdescription: [],
    ccname: [],
    defaultroute: [],
    isoverride: [],
    welcomeprompt_sp: [],
    menu0_sp: [],
    group: [],
    version: [],
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
          holiday: holiday ?? null,
          secondarytodclose: secondarytodclose ?? null,
          secondarytodopen: secondarytodopen ?? null,
          daysopen: daysopen ?? null,
          daystodopen: daystodopen ?? null,
          daystodclose: daystodclose ?? null,
          welcomeprompt: welcomeprompt ?? null,
          ccdescription: ccdescription ?? null,
          ccname: ccname ?? null,
          defaultroute: defaultroute ?? null,
          isoverride: isoverride ?? null,
          welcomeprompt_sp: welcomeprompt_sp ?? null,
          menu0_sp: menu0_sp ?? null,
          group: group ?? null,
          version: version ?? null,
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
            query: updateContactCenterModel.replaceAll("__typename", ""),
            variables: {
              input: {
                id: contactCenterModelRecord.id,
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
      {...getOverrideProps(overrides, "ContactCenterModelUpdateForm")}
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
              holiday,
              secondarytodclose,
              secondarytodopen,
              daysopen,
              daystodopen,
              daystodclose,
              welcomeprompt,
              ccdescription,
              ccname,
              defaultroute,
              isoverride,
              welcomeprompt_sp,
              menu0_sp,
              group,
              version,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              mainnumber,
              holiday: values,
              secondarytodclose,
              secondarytodopen,
              daysopen,
              daystodopen,
              daystodclose,
              welcomeprompt,
              ccdescription,
              ccname,
              defaultroute,
              isoverride,
              welcomeprompt_sp,
              menu0_sp,
              group,
              version,
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
              mainnumber,
              holiday,
              secondarytodclose: values,
              secondarytodopen,
              daysopen,
              daystodopen,
              daystodclose,
              welcomeprompt,
              ccdescription,
              ccname,
              defaultroute,
              isoverride,
              welcomeprompt_sp,
              menu0_sp,
              group,
              version,
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
              mainnumber,
              holiday,
              secondarytodclose,
              secondarytodopen: values,
              daysopen,
              daystodopen,
              daystodclose,
              welcomeprompt,
              ccdescription,
              ccname,
              defaultroute,
              isoverride,
              welcomeprompt_sp,
              menu0_sp,
              group,
              version,
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
              holiday,
              secondarytodclose,
              secondarytodopen,
              daysopen: values,
              daystodopen,
              daystodclose,
              welcomeprompt,
              ccdescription,
              ccname,
              defaultroute,
              isoverride,
              welcomeprompt_sp,
              menu0_sp,
              group,
              version,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              mainnumber,
              holiday,
              secondarytodclose,
              secondarytodopen,
              daysopen,
              daystodopen: values,
              daystodclose,
              welcomeprompt,
              ccdescription,
              ccname,
              defaultroute,
              isoverride,
              welcomeprompt_sp,
              menu0_sp,
              group,
              version,
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
              holiday,
              secondarytodclose,
              secondarytodopen,
              daysopen,
              daystodopen,
              daystodclose: values,
              welcomeprompt,
              ccdescription,
              ccname,
              defaultroute,
              isoverride,
              welcomeprompt_sp,
              menu0_sp,
              group,
              version,
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
              holiday,
              secondarytodclose,
              secondarytodopen,
              daysopen,
              daystodopen,
              daystodclose,
              welcomeprompt: value,
              ccdescription,
              ccname,
              defaultroute,
              isoverride,
              welcomeprompt_sp,
              menu0_sp,
              group,
              version,
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
        label="Ccdescription"
        isRequired={false}
        isReadOnly={false}
        value={ccdescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              holiday,
              secondarytodclose,
              secondarytodopen,
              daysopen,
              daystodopen,
              daystodclose,
              welcomeprompt,
              ccdescription: value,
              ccname,
              defaultroute,
              isoverride,
              welcomeprompt_sp,
              menu0_sp,
              group,
              version,
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
        label="Ccname"
        isRequired={false}
        isReadOnly={false}
        value={ccname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              holiday,
              secondarytodclose,
              secondarytodopen,
              daysopen,
              daystodopen,
              daystodclose,
              welcomeprompt,
              ccdescription,
              ccname: value,
              defaultroute,
              isoverride,
              welcomeprompt_sp,
              menu0_sp,
              group,
              version,
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
        label="Defaultroute"
        isRequired={false}
        isReadOnly={false}
        value={defaultroute}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              holiday,
              secondarytodclose,
              secondarytodopen,
              daysopen,
              daystodopen,
              daystodclose,
              welcomeprompt,
              ccdescription,
              ccname,
              defaultroute: value,
              isoverride,
              welcomeprompt_sp,
              menu0_sp,
              group,
              version,
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
              holiday,
              secondarytodclose,
              secondarytodopen,
              daysopen,
              daystodopen,
              daystodclose,
              welcomeprompt,
              ccdescription,
              ccname,
              defaultroute,
              isoverride: value,
              welcomeprompt_sp,
              menu0_sp,
              group,
              version,
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
              holiday,
              secondarytodclose,
              secondarytodopen,
              daysopen,
              daystodopen,
              daystodclose,
              welcomeprompt,
              ccdescription,
              ccname,
              defaultroute,
              isoverride,
              welcomeprompt_sp: value,
              menu0_sp,
              group,
              version,
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
      <SelectField
        label="Menu0 sp"
        placeholder="Please select an option"
        isDisabled={false}
        value={menu0_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              holiday,
              secondarytodclose,
              secondarytodopen,
              daysopen,
              daystodopen,
              daystodclose,
              welcomeprompt,
              ccdescription,
              ccname,
              defaultroute,
              isoverride,
              welcomeprompt_sp,
              menu0_sp: value,
              group,
              version,
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
      >
        <option
          children="Msg"
          value="MSG"
          {...getOverrideProps(overrides, "menu0_spoption0")}
        ></option>
        <option
          children="Forward"
          value="FORWARD"
          {...getOverrideProps(overrides, "menu0_spoption1")}
        ></option>
        <option
          children="Queue"
          value="QUEUE"
          {...getOverrideProps(overrides, "menu0_spoption2")}
        ></option>
        <option
          children="Submenu"
          value="SUBMENU"
          {...getOverrideProps(overrides, "menu0_spoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Group"
        isRequired={false}
        isReadOnly={false}
        value={group}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mainnumber,
              holiday,
              secondarytodclose,
              secondarytodopen,
              daysopen,
              daystodopen,
              daystodclose,
              welcomeprompt,
              ccdescription,
              ccname,
              defaultroute,
              isoverride,
              welcomeprompt_sp,
              menu0_sp,
              group: value,
              version,
            };
            const result = onChange(modelFields);
            value = result?.group ?? value;
          }
          if (errors.group?.hasError) {
            runValidationTasks("group", value);
          }
          setGroup(value);
        }}
        onBlur={() => runValidationTasks("group", group)}
        errorMessage={errors.group?.errorMessage}
        hasError={errors.group?.hasError}
        {...getOverrideProps(overrides, "group")}
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
              holiday,
              secondarytodclose,
              secondarytodopen,
              daysopen,
              daystodopen,
              daystodclose,
              welcomeprompt,
              ccdescription,
              ccname,
              defaultroute,
              isoverride,
              welcomeprompt_sp,
              menu0_sp,
              group,
              version: value,
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
          isDisabled={!(idProp || contactCenterModelModelProp)}
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
