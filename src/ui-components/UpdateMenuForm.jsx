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
  SwitchField,
  TextAreaField,
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
    menu1: "",
    menu2: "",
    menu3: "",
    menu4: "",
    menu5: "",
    menu6: "",
    menu7: "",
    menu8: "",
    menu9: "",
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
    issecondaryclosed: false,
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
    presentlangoption: false,
  };
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
  const [issecondaryclosed, setIssecondaryclosed] = React.useState(
    initialValues.issecondaryclosed
  );
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
  const [presentlangoption, setPresentlangoption] = React.useState(
    initialValues.presentlangoption
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
    setMenu1(
      typeof cleanValues.menu1 === "string" || cleanValues.menu1 === null
        ? cleanValues.menu1
        : JSON.stringify(cleanValues.menu1)
    );
    setMenu2(
      typeof cleanValues.menu2 === "string" || cleanValues.menu2 === null
        ? cleanValues.menu2
        : JSON.stringify(cleanValues.menu2)
    );
    setMenu3(
      typeof cleanValues.menu3 === "string" || cleanValues.menu3 === null
        ? cleanValues.menu3
        : JSON.stringify(cleanValues.menu3)
    );
    setMenu4(
      typeof cleanValues.menu4 === "string" || cleanValues.menu4 === null
        ? cleanValues.menu4
        : JSON.stringify(cleanValues.menu4)
    );
    setMenu5(
      typeof cleanValues.menu5 === "string" || cleanValues.menu5 === null
        ? cleanValues.menu5
        : JSON.stringify(cleanValues.menu5)
    );
    setMenu6(
      typeof cleanValues.menu6 === "string" || cleanValues.menu6 === null
        ? cleanValues.menu6
        : JSON.stringify(cleanValues.menu6)
    );
    setMenu7(
      typeof cleanValues.menu7 === "string" || cleanValues.menu7 === null
        ? cleanValues.menu7
        : JSON.stringify(cleanValues.menu7)
    );
    setMenu8(
      typeof cleanValues.menu8 === "string" || cleanValues.menu8 === null
        ? cleanValues.menu8
        : JSON.stringify(cleanValues.menu8)
    );
    setMenu9(
      typeof cleanValues.menu9 === "string" || cleanValues.menu9 === null
        ? cleanValues.menu9
        : JSON.stringify(cleanValues.menu9)
    );
    setMenu0_sp(
      typeof cleanValues.menu0_sp === "string" || cleanValues.menu0_sp === null
        ? cleanValues.menu0_sp
        : JSON.stringify(cleanValues.menu0_sp)
    );
    setMenu1_sp(
      typeof cleanValues.menu1_sp === "string" || cleanValues.menu1_sp === null
        ? cleanValues.menu1_sp
        : JSON.stringify(cleanValues.menu1_sp)
    );
    setMenu2_sp(
      typeof cleanValues.menu2_sp === "string" || cleanValues.menu2_sp === null
        ? cleanValues.menu2_sp
        : JSON.stringify(cleanValues.menu2_sp)
    );
    setMenu3_sp(
      typeof cleanValues.menu3_sp === "string" || cleanValues.menu3_sp === null
        ? cleanValues.menu3_sp
        : JSON.stringify(cleanValues.menu3_sp)
    );
    setMenu4_sp(
      typeof cleanValues.menu4_sp === "string" || cleanValues.menu4_sp === null
        ? cleanValues.menu4_sp
        : JSON.stringify(cleanValues.menu4_sp)
    );
    setMenu5_sp(
      typeof cleanValues.menu5_sp === "string" || cleanValues.menu5_sp === null
        ? cleanValues.menu5_sp
        : JSON.stringify(cleanValues.menu5_sp)
    );
    setMenu6_sp(
      typeof cleanValues.menu6_sp === "string" || cleanValues.menu6_sp === null
        ? cleanValues.menu6_sp
        : JSON.stringify(cleanValues.menu6_sp)
    );
    setMenu7_sp(
      typeof cleanValues.menu7_sp === "string" || cleanValues.menu7_sp === null
        ? cleanValues.menu7_sp
        : JSON.stringify(cleanValues.menu7_sp)
    );
    setMenu8_sp(
      typeof cleanValues.menu8_sp === "string" || cleanValues.menu8_sp === null
        ? cleanValues.menu8_sp
        : JSON.stringify(cleanValues.menu8_sp)
    );
    setMenu9_sp(
      typeof cleanValues.menu9_sp === "string" || cleanValues.menu9_sp === null
        ? cleanValues.menu9_sp
        : JSON.stringify(cleanValues.menu9_sp)
    );
    setIssecondaryclosed(cleanValues.issecondaryclosed);
    setSubmenu1(
      typeof cleanValues.submenu1 === "string" || cleanValues.submenu1 === null
        ? cleanValues.submenu1
        : JSON.stringify(cleanValues.submenu1)
    );
    setSubmenu2(
      typeof cleanValues.submenu2 === "string" || cleanValues.submenu2 === null
        ? cleanValues.submenu2
        : JSON.stringify(cleanValues.submenu2)
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
    setSubmenu2_sp(
      typeof cleanValues.submenu2_sp === "string" ||
        cleanValues.submenu2_sp === null
        ? cleanValues.submenu2_sp
        : JSON.stringify(cleanValues.submenu2_sp)
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
    setPresentlangoption(cleanValues.presentlangoption);
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
    menu1: [{ type: "JSON" }],
    menu2: [{ type: "JSON" }],
    menu3: [{ type: "JSON" }],
    menu4: [{ type: "JSON" }],
    menu5: [{ type: "JSON" }],
    menu6: [{ type: "JSON" }],
    menu7: [{ type: "JSON" }],
    menu8: [{ type: "JSON" }],
    menu9: [{ type: "JSON" }],
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
    issecondaryclosed: [],
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
    presentlangoption: [],
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
          menu1,
          menu2,
          menu3,
          menu4,
          menu5,
          menu6,
          menu7,
          menu8,
          menu9,
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
          issecondaryclosed,
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
          presentlangoption,
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
            issecondaryclosed: modelFields.issecondaryclosed,
            presentlangoption: modelFields.presentlangoption,
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
        isRequired={false}
        isReadOnly={false}
        value={menu0}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={menu1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={menu2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={menu3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={menu4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={menu5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={menu6}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={menu7}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={menu8}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={menu9}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
      <TextAreaField
        label="Menu0 sp"
        isRequired={false}
        isReadOnly={false}
        value={menu0_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={menu1_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={menu2_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={menu3_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={menu4_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={menu5_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={menu6_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={menu7_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={menu8_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={menu9_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
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
              issecondaryclosed: value,
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
              presentlangoption,
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
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={submenu2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={submenu3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
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
              issecondaryclosed,
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
              presentlangoption,
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
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
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
              issecondaryclosed,
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
              presentlangoption,
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
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
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
              issecondaryclosed,
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
              presentlangoption,
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
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
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
              issecondaryclosed,
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
              presentlangoption,
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
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
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
              issecondaryclosed,
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
              presentlangoption,
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
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
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
              issecondaryclosed,
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
              presentlangoption,
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
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
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
              issecondaryclosed,
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
              presentlangoption,
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
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={submenu2_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
        value={submenu3_sp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption,
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
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
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
              issecondaryclosed,
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
              presentlangoption,
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
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
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
              issecondaryclosed,
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
              presentlangoption,
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
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
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
              issecondaryclosed,
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
              presentlangoption,
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
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
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
              issecondaryclosed,
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
              presentlangoption,
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
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
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
              issecondaryclosed,
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
              presentlangoption,
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
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
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
              issecondaryclosed,
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
              presentlangoption,
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
              menu1,
              menu2,
              menu3,
              menu4,
              menu5,
              menu6,
              menu7,
              menu8,
              menu9,
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
              issecondaryclosed,
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
              presentlangoption,
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
        label="Presentlangoption"
        defaultChecked={false}
        isDisabled={false}
        isChecked={presentlangoption}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
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
              issecondaryclosed,
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
              presentlangoption: value,
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
