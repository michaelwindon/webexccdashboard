/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQueueModel = /* GraphQL */ `
  mutation CreateQueueModel(
    $input: CreateQueueModelInput!
    $condition: ModelQueueModelConditionInput
  ) {
    createQueueModel(input: $input, condition: $condition) {
      id
      name
      group
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateQueueModel = /* GraphQL */ `
  mutation UpdateQueueModel(
    $input: UpdateQueueModelInput!
    $condition: ModelQueueModelConditionInput
  ) {
    updateQueueModel(input: $input, condition: $condition) {
      id
      name
      group
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteQueueModel = /* GraphQL */ `
  mutation DeleteQueueModel(
    $input: DeleteQueueModelInput!
    $condition: ModelQueueModelConditionInput
  ) {
    deleteQueueModel(input: $input, condition: $condition) {
      id
      name
      group
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUserModel = /* GraphQL */ `
  mutation CreateUserModel(
    $input: CreateUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    createUserModel(input: $input, condition: $condition) {
      id
      name
      email
      telephone
      profilepic
      role
      group
      contactcentermodels {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserModel = /* GraphQL */ `
  mutation UpdateUserModel(
    $input: UpdateUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    updateUserModel(input: $input, condition: $condition) {
      id
      name
      email
      telephone
      profilepic
      role
      group
      contactcentermodels {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserModel = /* GraphQL */ `
  mutation DeleteUserModel(
    $input: DeleteUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    deleteUserModel(input: $input, condition: $condition) {
      id
      name
      email
      telephone
      profilepic
      role
      group
      contactcentermodels {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createContactCenterModel = /* GraphQL */ `
  mutation CreateContactCenterModel(
    $input: CreateContactCenterModelInput!
    $condition: ModelContactCenterModelConditionInput
  ) {
    createContactCenterModel(input: $input, condition: $condition) {
      id
      mainnumber
      menu0 {
        msg
        type
        value
        __typename
      }
      menu1 {
        msg
        type
        value
        __typename
      }
      menu2 {
        msg
        type
        value
        __typename
      }
      menu3 {
        msg
        type
        value
        __typename
      }
      menu4 {
        msg
        type
        value
        __typename
      }
      menu5 {
        msg
        type
        value
        __typename
      }
      menu6 {
        msg
        type
        value
        __typename
      }
      menu7 {
        msg
        type
        value
        __typename
      }
      menu8 {
        msg
        type
        value
        __typename
      }
      menu9 {
        msg
        type
        value
        __typename
      }
      holiday
      secondarytodclose
      secondarytodopen
      daysopen
      daystodopen
      daystodclose
      welcomeprompt
      afterhours {
        msg
        type
        value
        __typename
      }
      ccdescription
      ccname
      defaultroute
      holidayoption {
        msg
        type
        value
        __typename
      }
      isoverride
      submenu2 {
        option0
        option1
        option2
        option3
        opiton4
        option5
        option6
        option7
        option8
        option9
        __typename
      }
      welcomeprompt_sp
      submenu2_sp {
        option0
        option1
        option2
        option3
        opiton4
        option5
        option6
        option7
        option8
        option9
        __typename
      }
      menu0_sp
      menu1_sp {
        msg
        type
        value
        __typename
      }
      menu2_sp {
        msg
        type
        value
        __typename
      }
      menu3_sp {
        msg
        type
        value
        __typename
      }
      menu4_sp {
        msg
        type
        value
        __typename
      }
      menu5_sp {
        msg
        type
        value
        __typename
      }
      menu6_sp {
        msg
        type
        value
        __typename
      }
      menu7_sp {
        msg
        type
        value
        __typename
      }
      menu8_sp {
        msg
        type
        value
        __typename
      }
      menu9_sp {
        msg
        type
        value
        __typename
      }
      group
      version
      UserModels {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateContactCenterModel = /* GraphQL */ `
  mutation UpdateContactCenterModel(
    $input: UpdateContactCenterModelInput!
    $condition: ModelContactCenterModelConditionInput
  ) {
    updateContactCenterModel(input: $input, condition: $condition) {
      id
      mainnumber
      menu0 {
        msg
        type
        value
        __typename
      }
      menu1 {
        msg
        type
        value
        __typename
      }
      menu2 {
        msg
        type
        value
        __typename
      }
      menu3 {
        msg
        type
        value
        __typename
      }
      menu4 {
        msg
        type
        value
        __typename
      }
      menu5 {
        msg
        type
        value
        __typename
      }
      menu6 {
        msg
        type
        value
        __typename
      }
      menu7 {
        msg
        type
        value
        __typename
      }
      menu8 {
        msg
        type
        value
        __typename
      }
      menu9 {
        msg
        type
        value
        __typename
      }
      holiday
      secondarytodclose
      secondarytodopen
      daysopen
      daystodopen
      daystodclose
      welcomeprompt
      afterhours {
        msg
        type
        value
        __typename
      }
      ccdescription
      ccname
      defaultroute
      holidayoption {
        msg
        type
        value
        __typename
      }
      isoverride
      submenu2 {
        option0
        option1
        option2
        option3
        opiton4
        option5
        option6
        option7
        option8
        option9
        __typename
      }
      welcomeprompt_sp
      submenu2_sp {
        option0
        option1
        option2
        option3
        opiton4
        option5
        option6
        option7
        option8
        option9
        __typename
      }
      menu0_sp
      menu1_sp {
        msg
        type
        value
        __typename
      }
      menu2_sp {
        msg
        type
        value
        __typename
      }
      menu3_sp {
        msg
        type
        value
        __typename
      }
      menu4_sp {
        msg
        type
        value
        __typename
      }
      menu5_sp {
        msg
        type
        value
        __typename
      }
      menu6_sp {
        msg
        type
        value
        __typename
      }
      menu7_sp {
        msg
        type
        value
        __typename
      }
      menu8_sp {
        msg
        type
        value
        __typename
      }
      menu9_sp {
        msg
        type
        value
        __typename
      }
      group
      version
      UserModels {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteContactCenterModel = /* GraphQL */ `
  mutation DeleteContactCenterModel(
    $input: DeleteContactCenterModelInput!
    $condition: ModelContactCenterModelConditionInput
  ) {
    deleteContactCenterModel(input: $input, condition: $condition) {
      id
      mainnumber
      menu0 {
        msg
        type
        value
        __typename
      }
      menu1 {
        msg
        type
        value
        __typename
      }
      menu2 {
        msg
        type
        value
        __typename
      }
      menu3 {
        msg
        type
        value
        __typename
      }
      menu4 {
        msg
        type
        value
        __typename
      }
      menu5 {
        msg
        type
        value
        __typename
      }
      menu6 {
        msg
        type
        value
        __typename
      }
      menu7 {
        msg
        type
        value
        __typename
      }
      menu8 {
        msg
        type
        value
        __typename
      }
      menu9 {
        msg
        type
        value
        __typename
      }
      holiday
      secondarytodclose
      secondarytodopen
      daysopen
      daystodopen
      daystodclose
      welcomeprompt
      afterhours {
        msg
        type
        value
        __typename
      }
      ccdescription
      ccname
      defaultroute
      holidayoption {
        msg
        type
        value
        __typename
      }
      isoverride
      submenu2 {
        option0
        option1
        option2
        option3
        opiton4
        option5
        option6
        option7
        option8
        option9
        __typename
      }
      welcomeprompt_sp
      submenu2_sp {
        option0
        option1
        option2
        option3
        opiton4
        option5
        option6
        option7
        option8
        option9
        __typename
      }
      menu0_sp
      menu1_sp {
        msg
        type
        value
        __typename
      }
      menu2_sp {
        msg
        type
        value
        __typename
      }
      menu3_sp {
        msg
        type
        value
        __typename
      }
      menu4_sp {
        msg
        type
        value
        __typename
      }
      menu5_sp {
        msg
        type
        value
        __typename
      }
      menu6_sp {
        msg
        type
        value
        __typename
      }
      menu7_sp {
        msg
        type
        value
        __typename
      }
      menu8_sp {
        msg
        type
        value
        __typename
      }
      menu9_sp {
        msg
        type
        value
        __typename
      }
      group
      version
      UserModels {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createContactCenterModelUserModel = /* GraphQL */ `
  mutation CreateContactCenterModelUserModel(
    $input: CreateContactCenterModelUserModelInput!
    $condition: ModelContactCenterModelUserModelConditionInput
  ) {
    createContactCenterModelUserModel(input: $input, condition: $condition) {
      id
      userModelId
      contactCenterModelId
      userModel {
        id
        name
        email
        telephone
        profilepic
        role
        group
        createdAt
        updatedAt
        __typename
      }
      contactCenterModel {
        id
        mainnumber
        holiday
        secondarytodclose
        secondarytodopen
        daysopen
        daystodopen
        daystodclose
        welcomeprompt
        ccdescription
        ccname
        defaultroute
        isoverride
        welcomeprompt_sp
        menu0_sp
        group
        version
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateContactCenterModelUserModel = /* GraphQL */ `
  mutation UpdateContactCenterModelUserModel(
    $input: UpdateContactCenterModelUserModelInput!
    $condition: ModelContactCenterModelUserModelConditionInput
  ) {
    updateContactCenterModelUserModel(input: $input, condition: $condition) {
      id
      userModelId
      contactCenterModelId
      userModel {
        id
        name
        email
        telephone
        profilepic
        role
        group
        createdAt
        updatedAt
        __typename
      }
      contactCenterModel {
        id
        mainnumber
        holiday
        secondarytodclose
        secondarytodopen
        daysopen
        daystodopen
        daystodclose
        welcomeprompt
        ccdescription
        ccname
        defaultroute
        isoverride
        welcomeprompt_sp
        menu0_sp
        group
        version
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteContactCenterModelUserModel = /* GraphQL */ `
  mutation DeleteContactCenterModelUserModel(
    $input: DeleteContactCenterModelUserModelInput!
    $condition: ModelContactCenterModelUserModelConditionInput
  ) {
    deleteContactCenterModelUserModel(input: $input, condition: $condition) {
      id
      userModelId
      contactCenterModelId
      userModel {
        id
        name
        email
        telephone
        profilepic
        role
        group
        createdAt
        updatedAt
        __typename
      }
      contactCenterModel {
        id
        mainnumber
        holiday
        secondarytodclose
        secondarytodopen
        daysopen
        daystodopen
        daystodclose
        welcomeprompt
        ccdescription
        ccname
        defaultroute
        isoverride
        welcomeprompt_sp
        menu0_sp
        group
        version
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
