/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGroupModel = /* GraphQL */ `
  mutation CreateGroupModel(
    $input: CreateGroupModelInput!
    $condition: ModelGroupModelConditionInput
  ) {
    createGroupModel(input: $input, condition: $condition) {
      id
      fullname
      abbreviatedname
      Managers {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateGroupModel = /* GraphQL */ `
  mutation UpdateGroupModel(
    $input: UpdateGroupModelInput!
    $condition: ModelGroupModelConditionInput
  ) {
    updateGroupModel(input: $input, condition: $condition) {
      id
      fullname
      abbreviatedname
      Managers {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteGroupModel = /* GraphQL */ `
  mutation DeleteGroupModel(
    $input: DeleteGroupModelInput!
    $condition: ModelGroupModelConditionInput
  ) {
    deleteGroupModel(input: $input, condition: $condition) {
      id
      fullname
      abbreviatedname
      Managers {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createQueueModel = /* GraphQL */ `
  mutation CreateQueueModel(
    $input: CreateQueueModelInput!
    $condition: ModelQueueModelConditionInput
  ) {
    createQueueModel(input: $input, condition: $condition) {
      id
      name
      Group {
        id
        fullname
        abbreviatedname
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      queueModelGroupId
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
      Group {
        id
        fullname
        abbreviatedname
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      queueModelGroupId
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
      Group {
        id
        fullname
        abbreviatedname
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      queueModelGroupId
      __typename
    }
  }
`;
export const createManagerModel = /* GraphQL */ `
  mutation CreateManagerModel(
    $input: CreateManagerModelInput!
    $condition: ModelManagerModelConditionInput
  ) {
    createManagerModel(input: $input, condition: $condition) {
      id
      name
      email
      telephone
      profilepic
      role
      ContactCenters {
        nextToken
        startedAt
        __typename
      }
      Groups {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateManagerModel = /* GraphQL */ `
  mutation UpdateManagerModel(
    $input: UpdateManagerModelInput!
    $condition: ModelManagerModelConditionInput
  ) {
    updateManagerModel(input: $input, condition: $condition) {
      id
      name
      email
      telephone
      profilepic
      role
      ContactCenters {
        nextToken
        startedAt
        __typename
      }
      Groups {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteManagerModel = /* GraphQL */ `
  mutation DeleteManagerModel(
    $input: DeleteManagerModelInput!
    $condition: ModelManagerModelConditionInput
  ) {
    deleteManagerModel(input: $input, condition: $condition) {
      id
      name
      email
      telephone
      profilepic
      role
      ContactCenters {
        nextToken
        startedAt
        __typename
      }
      Groups {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      holidayoption {
        msg
        type
        value
        __typename
      }
      secondarytodopen
      secondarytodclose
      secondaryclose {
        msg
        type
        value
        __typename
      }
      daystodopen
      daystodclose
      daysopen
      afterhours {
        msg
        type
        value
        __typename
      }
      ccdescription
      defaultroute
      ccname
      welcomeprompt
      welcomeprompt_sp
      menu0_sp {
        msg
        type
        value
        __typename
      }
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
      override {
        msg
        type
        value
        __typename
      }
      updateduser
      issecondaryclosed
      Managers {
        nextToken
        startedAt
        __typename
      }
      AssignedGroup {
        id
        fullname
        abbreviatedname
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      isoverride
      isholiday
      isafterhours
      submenu1 {
        __typename
      }
      submenu2 {
        __typename
      }
      submenu3 {
        __typename
      }
      submenu4 {
        __typename
      }
      submenu5 {
        __typename
      }
      submenu6 {
        __typename
      }
      submenu7 {
        __typename
      }
      submenu8 {
        __typename
      }
      submenu9 {
        __typename
      }
      submenu0 {
        __typename
      }
      submenu1_sp {
        __typename
      }
      submenu2_sp {
        __typename
      }
      submenu3_sp {
        __typename
      }
      submenu4_sp {
        __typename
      }
      submenu5_sp {
        __typename
      }
      submenu6_sp {
        __typename
      }
      submenu7_sp {
        __typename
      }
      submenu8_sp {
        __typename
      }
      submenu9_sp {
        __typename
      }
      submenu0_sp {
        __typename
      }
      presentlangoption
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      contactCenterModelAssignedGroupId
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
      holidayoption {
        msg
        type
        value
        __typename
      }
      secondarytodopen
      secondarytodclose
      secondaryclose {
        msg
        type
        value
        __typename
      }
      daystodopen
      daystodclose
      daysopen
      afterhours {
        msg
        type
        value
        __typename
      }
      ccdescription
      defaultroute
      ccname
      welcomeprompt
      welcomeprompt_sp
      menu0_sp {
        msg
        type
        value
        __typename
      }
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
      override {
        msg
        type
        value
        __typename
      }
      updateduser
      issecondaryclosed
      Managers {
        nextToken
        startedAt
        __typename
      }
      AssignedGroup {
        id
        fullname
        abbreviatedname
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      isoverride
      isholiday
      isafterhours
      submenu1 {
        __typename
      }
      submenu2 {
        __typename
      }
      submenu3 {
        __typename
      }
      submenu4 {
        __typename
      }
      submenu5 {
        __typename
      }
      submenu6 {
        __typename
      }
      submenu7 {
        __typename
      }
      submenu8 {
        __typename
      }
      submenu9 {
        __typename
      }
      submenu0 {
        __typename
      }
      submenu1_sp {
        __typename
      }
      submenu2_sp {
        __typename
      }
      submenu3_sp {
        __typename
      }
      submenu4_sp {
        __typename
      }
      submenu5_sp {
        __typename
      }
      submenu6_sp {
        __typename
      }
      submenu7_sp {
        __typename
      }
      submenu8_sp {
        __typename
      }
      submenu9_sp {
        __typename
      }
      submenu0_sp {
        __typename
      }
      presentlangoption
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      contactCenterModelAssignedGroupId
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
      holidayoption {
        msg
        type
        value
        __typename
      }
      secondarytodopen
      secondarytodclose
      secondaryclose {
        msg
        type
        value
        __typename
      }
      daystodopen
      daystodclose
      daysopen
      afterhours {
        msg
        type
        value
        __typename
      }
      ccdescription
      defaultroute
      ccname
      welcomeprompt
      welcomeprompt_sp
      menu0_sp {
        msg
        type
        value
        __typename
      }
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
      override {
        msg
        type
        value
        __typename
      }
      updateduser
      issecondaryclosed
      Managers {
        nextToken
        startedAt
        __typename
      }
      AssignedGroup {
        id
        fullname
        abbreviatedname
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      isoverride
      isholiday
      isafterhours
      submenu1 {
        __typename
      }
      submenu2 {
        __typename
      }
      submenu3 {
        __typename
      }
      submenu4 {
        __typename
      }
      submenu5 {
        __typename
      }
      submenu6 {
        __typename
      }
      submenu7 {
        __typename
      }
      submenu8 {
        __typename
      }
      submenu9 {
        __typename
      }
      submenu0 {
        __typename
      }
      submenu1_sp {
        __typename
      }
      submenu2_sp {
        __typename
      }
      submenu3_sp {
        __typename
      }
      submenu4_sp {
        __typename
      }
      submenu5_sp {
        __typename
      }
      submenu6_sp {
        __typename
      }
      submenu7_sp {
        __typename
      }
      submenu8_sp {
        __typename
      }
      submenu9_sp {
        __typename
      }
      submenu0_sp {
        __typename
      }
      presentlangoption
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      contactCenterModelAssignedGroupId
      __typename
    }
  }
`;
export const createGroupModelManagerModel = /* GraphQL */ `
  mutation CreateGroupModelManagerModel(
    $input: CreateGroupModelManagerModelInput!
    $condition: ModelGroupModelManagerModelConditionInput
  ) {
    createGroupModelManagerModel(input: $input, condition: $condition) {
      id
      groupModelId
      managerModelId
      groupModel {
        id
        fullname
        abbreviatedname
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      managerModel {
        id
        name
        email
        telephone
        profilepic
        role
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateGroupModelManagerModel = /* GraphQL */ `
  mutation UpdateGroupModelManagerModel(
    $input: UpdateGroupModelManagerModelInput!
    $condition: ModelGroupModelManagerModelConditionInput
  ) {
    updateGroupModelManagerModel(input: $input, condition: $condition) {
      id
      groupModelId
      managerModelId
      groupModel {
        id
        fullname
        abbreviatedname
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      managerModel {
        id
        name
        email
        telephone
        profilepic
        role
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteGroupModelManagerModel = /* GraphQL */ `
  mutation DeleteGroupModelManagerModel(
    $input: DeleteGroupModelManagerModelInput!
    $condition: ModelGroupModelManagerModelConditionInput
  ) {
    deleteGroupModelManagerModel(input: $input, condition: $condition) {
      id
      groupModelId
      managerModelId
      groupModel {
        id
        fullname
        abbreviatedname
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      managerModel {
        id
        name
        email
        telephone
        profilepic
        role
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createContactCenterModelManagerModel = /* GraphQL */ `
  mutation CreateContactCenterModelManagerModel(
    $input: CreateContactCenterModelManagerModelInput!
    $condition: ModelContactCenterModelManagerModelConditionInput
  ) {
    createContactCenterModelManagerModel(input: $input, condition: $condition) {
      id
      managerModelId
      contactCenterModelId
      managerModel {
        id
        name
        email
        telephone
        profilepic
        role
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      contactCenterModel {
        id
        mainnumber
        holiday
        secondarytodopen
        secondarytodclose
        daystodopen
        daystodclose
        daysopen
        ccdescription
        defaultroute
        ccname
        welcomeprompt
        welcomeprompt_sp
        updateduser
        issecondaryclosed
        isoverride
        isholiday
        isafterhours
        presentlangoption
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        contactCenterModelAssignedGroupId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateContactCenterModelManagerModel = /* GraphQL */ `
  mutation UpdateContactCenterModelManagerModel(
    $input: UpdateContactCenterModelManagerModelInput!
    $condition: ModelContactCenterModelManagerModelConditionInput
  ) {
    updateContactCenterModelManagerModel(input: $input, condition: $condition) {
      id
      managerModelId
      contactCenterModelId
      managerModel {
        id
        name
        email
        telephone
        profilepic
        role
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      contactCenterModel {
        id
        mainnumber
        holiday
        secondarytodopen
        secondarytodclose
        daystodopen
        daystodclose
        daysopen
        ccdescription
        defaultroute
        ccname
        welcomeprompt
        welcomeprompt_sp
        updateduser
        issecondaryclosed
        isoverride
        isholiday
        isafterhours
        presentlangoption
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        contactCenterModelAssignedGroupId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteContactCenterModelManagerModel = /* GraphQL */ `
  mutation DeleteContactCenterModelManagerModel(
    $input: DeleteContactCenterModelManagerModelInput!
    $condition: ModelContactCenterModelManagerModelConditionInput
  ) {
    deleteContactCenterModelManagerModel(input: $input, condition: $condition) {
      id
      managerModelId
      contactCenterModelId
      managerModel {
        id
        name
        email
        telephone
        profilepic
        role
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      contactCenterModel {
        id
        mainnumber
        holiday
        secondarytodopen
        secondarytodclose
        daystodopen
        daystodclose
        daysopen
        ccdescription
        defaultroute
        ccname
        welcomeprompt
        welcomeprompt_sp
        updateduser
        issecondaryclosed
        isoverride
        isholiday
        isafterhours
        presentlangoption
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        contactCenterModelAssignedGroupId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
