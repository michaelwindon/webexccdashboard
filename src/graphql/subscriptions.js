/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroupModel = /* GraphQL */ `
  subscription OnCreateGroupModel(
    $filter: ModelSubscriptionGroupModelFilterInput
  ) {
    onCreateGroupModel(filter: $filter) {
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
export const onUpdateGroupModel = /* GraphQL */ `
  subscription OnUpdateGroupModel(
    $filter: ModelSubscriptionGroupModelFilterInput
  ) {
    onUpdateGroupModel(filter: $filter) {
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
export const onDeleteGroupModel = /* GraphQL */ `
  subscription OnDeleteGroupModel(
    $filter: ModelSubscriptionGroupModelFilterInput
  ) {
    onDeleteGroupModel(filter: $filter) {
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
export const onCreateQueueModel = /* GraphQL */ `
  subscription OnCreateQueueModel(
    $filter: ModelSubscriptionQueueModelFilterInput
  ) {
    onCreateQueueModel(filter: $filter) {
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
export const onUpdateQueueModel = /* GraphQL */ `
  subscription OnUpdateQueueModel(
    $filter: ModelSubscriptionQueueModelFilterInput
  ) {
    onUpdateQueueModel(filter: $filter) {
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
export const onDeleteQueueModel = /* GraphQL */ `
  subscription OnDeleteQueueModel(
    $filter: ModelSubscriptionQueueModelFilterInput
  ) {
    onDeleteQueueModel(filter: $filter) {
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
export const onCreateManagerModel = /* GraphQL */ `
  subscription OnCreateManagerModel(
    $filter: ModelSubscriptionManagerModelFilterInput
  ) {
    onCreateManagerModel(filter: $filter) {
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
export const onUpdateManagerModel = /* GraphQL */ `
  subscription OnUpdateManagerModel(
    $filter: ModelSubscriptionManagerModelFilterInput
  ) {
    onUpdateManagerModel(filter: $filter) {
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
export const onDeleteManagerModel = /* GraphQL */ `
  subscription OnDeleteManagerModel(
    $filter: ModelSubscriptionManagerModelFilterInput
  ) {
    onDeleteManagerModel(filter: $filter) {
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
export const onCreateGroupModelManagerModel = /* GraphQL */ `
  subscription OnCreateGroupModelManagerModel(
    $filter: ModelSubscriptionGroupModelManagerModelFilterInput
  ) {
    onCreateGroupModelManagerModel(filter: $filter) {
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
export const onUpdateGroupModelManagerModel = /* GraphQL */ `
  subscription OnUpdateGroupModelManagerModel(
    $filter: ModelSubscriptionGroupModelManagerModelFilterInput
  ) {
    onUpdateGroupModelManagerModel(filter: $filter) {
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
export const onDeleteGroupModelManagerModel = /* GraphQL */ `
  subscription OnDeleteGroupModelManagerModel(
    $filter: ModelSubscriptionGroupModelManagerModelFilterInput
  ) {
    onDeleteGroupModelManagerModel(filter: $filter) {
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
export const onCreateContactCenterModelManagerModel = /* GraphQL */ `
  subscription OnCreateContactCenterModelManagerModel(
    $filter: ModelSubscriptionContactCenterModelManagerModelFilterInput
  ) {
    onCreateContactCenterModelManagerModel(filter: $filter) {
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
export const onUpdateContactCenterModelManagerModel = /* GraphQL */ `
  subscription OnUpdateContactCenterModelManagerModel(
    $filter: ModelSubscriptionContactCenterModelManagerModelFilterInput
  ) {
    onUpdateContactCenterModelManagerModel(filter: $filter) {
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
export const onDeleteContactCenterModelManagerModel = /* GraphQL */ `
  subscription OnDeleteContactCenterModelManagerModel(
    $filter: ModelSubscriptionContactCenterModelManagerModelFilterInput
  ) {
    onDeleteContactCenterModelManagerModel(filter: $filter) {
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
