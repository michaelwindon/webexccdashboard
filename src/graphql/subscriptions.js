/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQueueModel = /* GraphQL */ `
  subscription OnCreateQueueModel(
    $filter: ModelSubscriptionQueueModelFilterInput
  ) {
    onCreateQueueModel(filter: $filter) {
      id
      name
      group
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateQueueModel = /* GraphQL */ `
  subscription OnUpdateQueueModel(
    $filter: ModelSubscriptionQueueModelFilterInput
  ) {
    onUpdateQueueModel(filter: $filter) {
      id
      name
      group
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteQueueModel = /* GraphQL */ `
  subscription OnDeleteQueueModel(
    $filter: ModelSubscriptionQueueModelFilterInput
  ) {
    onDeleteQueueModel(filter: $filter) {
      id
      name
      group
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUserModel = /* GraphQL */ `
  subscription OnCreateUserModel(
    $filter: ModelSubscriptionUserModelFilterInput
  ) {
    onCreateUserModel(filter: $filter) {
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
export const onUpdateUserModel = /* GraphQL */ `
  subscription OnUpdateUserModel(
    $filter: ModelSubscriptionUserModelFilterInput
  ) {
    onUpdateUserModel(filter: $filter) {
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
export const onDeleteUserModel = /* GraphQL */ `
  subscription OnDeleteUserModel(
    $filter: ModelSubscriptionUserModelFilterInput
  ) {
    onDeleteUserModel(filter: $filter) {
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
export const onCreateContactCenterModel = /* GraphQL */ `
  subscription OnCreateContactCenterModel(
    $filter: ModelSubscriptionContactCenterModelFilterInput
  ) {
    onCreateContactCenterModel(filter: $filter) {
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
export const onUpdateContactCenterModel = /* GraphQL */ `
  subscription OnUpdateContactCenterModel(
    $filter: ModelSubscriptionContactCenterModelFilterInput
  ) {
    onUpdateContactCenterModel(filter: $filter) {
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
export const onDeleteContactCenterModel = /* GraphQL */ `
  subscription OnDeleteContactCenterModel(
    $filter: ModelSubscriptionContactCenterModelFilterInput
  ) {
    onDeleteContactCenterModel(filter: $filter) {
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
export const onCreateContactCenterModelUserModel = /* GraphQL */ `
  subscription OnCreateContactCenterModelUserModel(
    $filter: ModelSubscriptionContactCenterModelUserModelFilterInput
  ) {
    onCreateContactCenterModelUserModel(filter: $filter) {
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
export const onUpdateContactCenterModelUserModel = /* GraphQL */ `
  subscription OnUpdateContactCenterModelUserModel(
    $filter: ModelSubscriptionContactCenterModelUserModelFilterInput
  ) {
    onUpdateContactCenterModelUserModel(filter: $filter) {
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
export const onDeleteContactCenterModelUserModel = /* GraphQL */ `
  subscription OnDeleteContactCenterModelUserModel(
    $filter: ModelSubscriptionContactCenterModelUserModelFilterInput
  ) {
    onDeleteContactCenterModelUserModel(filter: $filter) {
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
