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
  SelectField,
  SwitchField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { ContactCenterModel } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function UpdateMenuForm(props) {
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
    menu0: "",
    Field0: "",
    Field1: "",
    presentlangoption: false,
    isholiday: false,
    isafterhours: false,
    issecondaryclosed: false,
    epiccontext: "",
    usecorporateholidays: false,
    submenu1: "",
    submenu3: "",
    submenu4: "",
    submenu5: "",
    submenu6: "",
    submenu7: "",
    submenu8: "",
    submenu9: "",
    submenu0: "",
    submenu1_sp: "",
    submenu3_sp: "",
    submenu4_sp: "",
    submenu5_sp: "",
    submenu6_sp: "",
    submenu7_sp: "",
    submenu8_sp: "",
    submenu9_sp: "",
    submenu0_sp: "",
    offerccb: false,
    virtualvoicemail: "",
  };
  const [menu0, setMenu0] = React.useState(initialValues.menu0);
  const [Field0, setField0] = React.useState(initialValues.Field0);
  const [Field1, setField1] = React.useState(initialValues.Field1);
  const [presentlangoption, setPresentlangoption] = React.useState(
    initialValues.presentlangoption
  );
  const [isholiday, setIsholiday] = React.useState(initialValues.isholiday);
  const [isafterhours, setIsafterhours] = React.useState(
    initialValues.isafterhours
  );
  const [issecondaryclosed, setIssecondaryclosed] = React.useState(
    initialValues.issecondaryclosed
  );
  const [epiccontext, setEpiccontext] = React.useState(
    initialValues.epiccontext
  );
  const [usecorporateholidays, setUsecorporateholidays] = React.useState(
    initialValues.usecorporateholidays
  );
  const [submenu1, setSubmenu1] = React.useState(initialValues.submenu1);
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
  const [offerccb, setOfferccb] = React.useState(initialValues.offerccb);
  const [virtualvoicemail, setVirtualvoicemail] = React.useState(
    initialValues.virtualvoicemail
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = contactCenterModelRecord
      ? { ...initialValues, ...contactCenterModelRecord }
      : initialValues;
    setMenu0(
      typeof cleanValues.menu0 === "string" || cleanValues.menu0 === null
        ? cleanValues.menu0
        : JSON.stringify(cleanValues.menu0)
    );
    setField0(cleanValues.Field0);
    setField1(cleanValues.Field1);
    setPresentlangoption(cleanValues.presentlangoption);
    setIsholiday(cleanValues.isholiday);
    setIsafterhours(cleanValues.isafterhours);
    setIssecondaryclosed(cleanValues.issecondaryclosed);
    setEpiccontext(cleanValues.epiccontext);
    setUsecorporateholidays(cleanValues.usecorporateholidays);
    setSubmenu1(
      typeof cleanValues.submenu1 === "string" || cleanValues.submenu1 === null
        ? cleanValues.submenu1
        : JSON.stringify(cleanValues.submenu1)
    );
    setSubmenu3(
      typeof cleanValues.submenu3 === "string" || cleanValues.submenu3 === null
        ? cleanValues.submenu3
        : JSON.stringify(cleanValues.submenu3)
    );
    setSubmenu4(
      typeof cleanValues.submenu4 === "string" || cleanValues.submenu4 === null
        ? cleanValues.submenu4
        : JSON.stringify(cleanValues.submenu4)
    );
    setSubmenu5(
      typeof cleanValues.submenu5 === "string" || cleanValues.submenu5 === null
        ? cleanValues.submenu5
        : JSON.stringify(cleanValues.submenu5)
    );
    setSubmenu6(
      typeof cleanValues.submenu6 === "string" || cleanValues.submenu6 === null
        ? cleanValues.submenu6
        : JSON.stringify(cleanValues.submenu6)
    );
    setSubmenu7(
      typeof cleanValues.submenu7 === "string" || cleanValues.submenu7 === null
        ? cleanValues.submenu7
        : JSON.stringify(cleanValues.submenu7)
    );
    setSubmenu8(
      typeof cleanValues.submenu8 === "string" || cleanValues.submenu8 === null
        ? cleanValues.submenu8
        : JSON.stringify(cleanValues.submenu8)
    );
    setSubmenu9(
      typeof cleanValues.submenu9 === "string" || cleanValues.submenu9 === null
        ? cleanValues.submenu9
        : JSON.stringify(cleanValues.submenu9)
    );
    setSubmenu0(
      typeof cleanValues.submenu0 === "string" || cleanValues.submenu0 === null
        ? cleanValues.submenu0
        : JSON.stringify(cleanValues.submenu0)
    );
    setSubmenu1_sp(
      typeof cleanValues.submenu1_sp === "string" ||
        cleanValues.submenu1_sp === null
        ? cleanValues.submenu1_sp
        : JSON.stringify(cleanValues.submenu1_sp)
    );
    setSubmenu3_sp(
      typeof cleanValues.submenu3_sp === "string" ||
        cleanValues.submenu3_sp === null
        ? cleanValues.submenu3_sp
        : JSON.stringify(cleanValues.submenu3_sp)
    );
    setSubmenu4_sp(
      typeof cleanValues.submenu4_sp === "string" ||
        cleanValues.submenu4_sp === null
        ? cleanValues.submenu4_sp
        : JSON.stringify(cleanValues.submenu4_sp)
    );
    setSubmenu5_sp(
      typeof cleanValues.submenu5_sp === "string" ||
        cleanValues.submenu5_sp === null
        ? cleanValues.submenu5_sp
        : JSON.stringify(cleanValues.submenu5_sp)
    );
    setSubmenu6_sp(
      typeof cleanValues.submenu6_sp === "string" ||
        cleanValues.submenu6_sp === null
        ? cleanValues.submenu6_sp
        : JSON.stringify(cleanValues.submenu6_sp)
    );
    setSubmenu7_sp(
      typeof cleanValues.submenu7_sp === "string" ||
        cleanValues.submenu7_sp === null
        ? cleanValues.submenu7_sp
        : JSON.stringify(cleanValues.submenu7_sp)
    );
    setSubmenu8_sp(
      typeof cleanValues.submenu8_sp === "string" ||
        cleanValues.submenu8_sp === null
        ? cleanValues.submenu8_sp
        : JSON.stringify(cleanValues.submenu8_sp)
    );
    setSubmenu9_sp(
      typeof cleanValues.submenu9_sp === "string" ||
        cleanValues.submenu9_sp === null
        ? cleanValues.submenu9_sp
        : JSON.stringify(cleanValues.submenu9_sp)
    );
    setSubmenu0_sp(
      typeof cleanValues.submenu0_sp === "string" ||
        cleanValues.submenu0_sp === null
        ? cleanValues.submenu0_sp
        : JSON.stringify(cleanValues.submenu0_sp)
    );
    setOfferccb(cleanValues.offerccb);
    setVirtualvoicemail(cleanValues.virtualvoicemail);
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
    menu0: [{ type: "JSON" }],
    Field0: [],
    Field1: [],
    presentlangoption: [],
    isholiday: [],
    isafterhours: [],
    issecondaryclosed: [],
    epiccontext: [],
    usecorporateholidays: [],
    submenu1: [{ type: "JSON" }],
    submenu3: [{ type: "JSON" }],
    submenu4: [{ type: "JSON" }],
    submenu5: [{ type: "JSON" }],
    submenu6: [{ type: "JSON" }],
    submenu7: [{ type: "JSON" }],
    submenu8: [{ type: "JSON" }],
    submenu9: [{ type: "JSON" }],
    submenu0: [{ type: "JSON" }],
    submenu1_sp: [{ type: "JSON" }],
    submenu3_sp: [{ type: "JSON" }],
    submenu4_sp: [{ type: "JSON" }],
    submenu5_sp: [{ type: "JSON" }],
    submenu6_sp: [{ type: "JSON" }],
    submenu7_sp: [{ type: "JSON" }],
    submenu8_sp: [{ type: "JSON" }],
    submenu9_sp: [{ type: "JSON" }],
    submenu0_sp: [{ type: "JSON" }],
    offerccb: [],
    virtualvoicemail: [],
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
          menu0,
          Field0,
          Field1,
          presentlangoption,
          isholiday,
          isafterhours,
          issecondaryclosed,
          epiccontext,
          usecorporateholidays,
          submenu1,
          submenu3,
          submenu4,
          submenu5,
          submenu6,
          submenu7,
          submenu8,
          submenu9,
          submenu0,
          submenu1_sp,
          submenu3_sp,
          submenu4_sp,
          submenu5_sp,
          submenu6_sp,
          submenu7_sp,
          submenu8_sp,
          submenu9_sp,
          submenu0_sp,
          offerccb,
          virtualvoicemail,
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
          const modelFieldsToSave = {
            presentlangoption: modelFields.presentlangoption,
            isholiday: modelFields.isholiday,
            isafterhours: modelFields.isafterhours,
            issecondaryclosed: modelFields.issecondaryclosed,
            epiccontext: modelFields.epiccontext,
            usecorporateholidays: modelFields.usecorporateholidays,
            offerccb: modelFields.offerccb,
            virtualvoicemail: modelFields.virtualvoicemail,
            menu0: modelFields.menu0
              ? JSON.parse(modelFields.menu0)
              : modelFields.menu0,
            submenu1: modelFields.submenu1
              ? JSON.parse(modelFields.submenu1)
              : modelFields.submenu1,
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
          await DataStore.save(
            ContactCenterModel.copyOf(contactCenterModelRecord, (updated) => {
              Object.assign(updated, modelFieldsToSave);
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
      {...getOverrideProps(overrides, "UpdateMenuForm")}
      {...rest}
    >
      <TextAreaField
        label="Menu0"
        descriptiveText="Read at the Main Menu, Example: To speeak to a memeber of the Clinical support team press 0"
        isRequired={false}
        isReadOnly={false}
        value={menu0}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0: value,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
      <SelectField
        label="Menu0 Type"
        placeholder="Please select an option"
        value={Field0}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0: value,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
            };
            const result = onChange(modelFields);
            value = result?.Field0 ?? value;
          }
          if (errors.Field0?.hasError) {
            runValidationTasks("Field0", value);
          }
          setField0(value);
        }}
        onBlur={() => runValidationTasks("Field0", Field0)}
        errorMessage={errors.Field0?.errorMessage}
        hasError={errors.Field0?.hasError}
        {...getOverrideProps(overrides, "Field0")}
      >
        <option
          children="MSG"
          value="MSG"
          {...getOverrideProps(overrides, "Field0option0")}
        ></option>
        <option
          children="FORWARD"
          value="FORWARD"
          {...getOverrideProps(overrides, "Field0option1")}
        ></option>
        <option
          children="QUEUE"
          value="QUEUE"
          {...getOverrideProps(overrides, "Field0option2")}
        ></option>
        <option
          children="SUBMENU"
          value="SUBMENU"
          {...getOverrideProps(overrides, "Field0option3")}
        ></option>
      </SelectField>
      <TextField
        label="Menu0 Value"
        value={Field1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1: value,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
            };
            const result = onChange(modelFields);
            value = result?.Field1 ?? value;
          }
          if (errors.Field1?.hasError) {
            runValidationTasks("Field1", value);
          }
          setField1(value);
        }}
        onBlur={() => runValidationTasks("Field1", Field1)}
        errorMessage={errors.Field1?.errorMessage}
        hasError={errors.Field1?.hasError}
        {...getOverrideProps(overrides, "Field1")}
      ></TextField>
      <SwitchField
        label="Presentlangoption"
        defaultChecked={false}
        isDisabled={false}
        isChecked={presentlangoption}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption: value,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        label="Isholiday"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isholiday}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday: value,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours: value,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed: value,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        label="Epiccontext"
        isRequired={false}
        isReadOnly={false}
        value={epiccontext}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext: value,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
      ></TextField>
      <SwitchField
        label="Usecorporateholidays"
        defaultChecked={false}
        isDisabled={false}
        isChecked={usecorporateholidays}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays: value,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
            };
            const result = onChange(modelFields);
            value = result?.usecorporateholidays ?? value;
          }
          if (errors.usecorporateholidays?.hasError) {
            runValidationTasks("usecorporateholidays", value);
          }
          setUsecorporateholidays(value);
        }}
        onBlur={() =>
          runValidationTasks("usecorporateholidays", usecorporateholidays)
        }
        errorMessage={errors.usecorporateholidays?.errorMessage}
        hasError={errors.usecorporateholidays?.hasError}
        {...getOverrideProps(overrides, "usecorporateholidays")}
      ></SwitchField>
      <TextAreaField
        label="Submenu1"
        isRequired={false}
        isReadOnly={false}
        value={submenu1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1: value,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        label="Submenu3"
        isRequired={false}
        isReadOnly={false}
        value={submenu3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3: value,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        value={submenu4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4: value,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        value={submenu5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5: value,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        value={submenu6}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6: value,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        value={submenu7}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7: value,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        value={submenu8}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8: value,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        value={submenu9}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9: value,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        value={submenu0}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0: value,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        value={submenu1_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp: value,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        label="Submenu3 sp"
        isRequired={false}
        isReadOnly={false}
        value={submenu3_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp: value,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        value={submenu4_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp: value,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        value={submenu5_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp: value,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        value={submenu6_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp: value,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        value={submenu7_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp: value,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        value={submenu8_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp: value,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        value={submenu9_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp: value,
              submenu0_sp,
              offerccb,
              virtualvoicemail,
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
        value={submenu0_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp: value,
              offerccb,
              virtualvoicemail,
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
      <SwitchField
        label="Offerccb"
        defaultChecked={false}
        isDisabled={false}
        isChecked={offerccb}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb: value,
              virtualvoicemail,
            };
            const result = onChange(modelFields);
            value = result?.offerccb ?? value;
          }
          if (errors.offerccb?.hasError) {
            runValidationTasks("offerccb", value);
          }
          setOfferccb(value);
        }}
        onBlur={() => runValidationTasks("offerccb", offerccb)}
        errorMessage={errors.offerccb?.errorMessage}
        hasError={errors.offerccb?.hasError}
        {...getOverrideProps(overrides, "offerccb")}
      ></SwitchField>
      <TextField
        label="Virtualvoicemail"
        isRequired={false}
        isReadOnly={false}
        value={virtualvoicemail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              menu0,
              Field0,
              Field1,
              presentlangoption,
              isholiday,
              isafterhours,
              issecondaryclosed,
              epiccontext,
              usecorporateholidays,
              submenu1,
              submenu3,
              submenu4,
              submenu5,
              submenu6,
              submenu7,
              submenu8,
              submenu9,
              submenu0,
              submenu1_sp,
              submenu3_sp,
              submenu4_sp,
              submenu5_sp,
              submenu6_sp,
              submenu7_sp,
              submenu8_sp,
              submenu9_sp,
              submenu0_sp,
              offerccb,
              virtualvoicemail: value,
            };
            const result = onChange(modelFields);
            value = result?.virtualvoicemail ?? value;
          }
          if (errors.virtualvoicemail?.hasError) {
            runValidationTasks("virtualvoicemail", value);
          }
          setVirtualvoicemail(value);
        }}
        onBlur={() => runValidationTasks("virtualvoicemail", virtualvoicemail)}
        errorMessage={errors.virtualvoicemail?.errorMessage}
        hasError={errors.virtualvoicemail?.hasError}
        {...getOverrideProps(overrides, "virtualvoicemail")}
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
