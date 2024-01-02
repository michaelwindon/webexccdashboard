/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGroupModel = /* GraphQL */ `
  query GetGroupModel($id: ID!) {
    getGroupModel(id: $id) {
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
export const listGroupModels = /* GraphQL */ `
  query ListGroupModels(
    $filter: ModelGroupModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncGroupModels = /* GraphQL */ `
  query SyncGroupModels(
    $filter: ModelGroupModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGroupModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getQueueModel = /* GraphQL */ `
  query GetQueueModel($id: ID!) {
    getQueueModel(id: $id) {
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
export const listQueueModels = /* GraphQL */ `
  query ListQueueModels(
    $filter: ModelQueueModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQueueModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        queueModelGroupId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncQueueModels = /* GraphQL */ `
  query SyncQueueModels(
    $filter: ModelQueueModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQueueModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        queueModelGroupId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getManagerModel = /* GraphQL */ `
  query GetManagerModel($id: ID!) {
    getManagerModel(id: $id) {
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
export const listManagerModels = /* GraphQL */ `
  query ListManagerModels(
    $filter: ModelManagerModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManagerModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncManagerModels = /* GraphQL */ `
  query SyncManagerModels(
    $filter: ModelManagerModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncManagerModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getContactCenterModel = /* GraphQL */ `
  query GetContactCenterModel($id: ID!) {
    getContactCenterModel(id: $id) {
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
export const listContactCenterModels = /* GraphQL */ `
  query ListContactCenterModels(
    $filter: ModelContactCenterModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactCenterModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
      menu0 {
        msg
        type
        value
      }
      menu0_sp {
        msg
        type
        value
      }
      menu1 {
        msg
        type
        value
      }
      menu2 {
        msg
        value
        type
      }
      menu1_sp {
        msg
        type
        value
      }
      menu9_sp {
        value
        type
        msg
      }
      override {
        value
        type
        msg
      }
      menu9 {
        type
        value
        msg
      }
      menu8_sp {
        type
        value
        msg
      }
      menu8 {
        msg
        type
        value
      }
      menu7_sp {
        msg
        type
        value
      }
      menu7 {
        msg
        type
        value
      }
      menu6_sp {
        msg
        type
        value
      }
      menu6 {
        msg
        type
        value
      }
      menu5_sp {
        msg
        type
        value
      }
      menu5 {
        msg
        type
        value
      }
      menu4_sp {
        msg
        type
        value
      }
      menu3_sp {
        type
        value
        msg
      }
      menu4 {
        value
        type
        msg
      }
      menu3 {
        msg
        type
        value
      }
      menu2_sp {
        msg
        type
        value
      }
    }
  }
`;
export const syncContactCenterModels = /* GraphQL */ `
  query SyncContactCenterModels(
    $filter: ModelContactCenterModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContactCenterModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getGroupModelManagerModel = /* GraphQL */ `
  query GetGroupModelManagerModel($id: ID!) {
    getGroupModelManagerModel(id: $id) {
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
export const listGroupModelManagerModels = /* GraphQL */ `
  query ListGroupModelManagerModels(
    $filter: ModelGroupModelManagerModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupModelManagerModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupModelId
        managerModelId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncGroupModelManagerModels = /* GraphQL */ `
  query SyncGroupModelManagerModels(
    $filter: ModelGroupModelManagerModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGroupModelManagerModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        groupModelId
        managerModelId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const groupModelManagerModelsByGroupModelId = /* GraphQL */ `
  query GroupModelManagerModelsByGroupModelId(
    $groupModelId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupModelManagerModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupModelManagerModelsByGroupModelId(
      groupModelId: $groupModelId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupModelId
        managerModelId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const groupModelManagerModelsByManagerModelId = /* GraphQL */ `
  query GroupModelManagerModelsByManagerModelId(
    $managerModelId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupModelManagerModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupModelManagerModelsByManagerModelId(
      managerModelId: $managerModelId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupModelId
        managerModelId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getContactCenterModelManagerModel = /* GraphQL */ `
  query GetContactCenterModelManagerModel($id: ID!) {
    getContactCenterModelManagerModel(id: $id) {
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
export const listContactCenterModelManagerModels = /* GraphQL */ `
  query ListContactCenterModelManagerModels(
    $filter: ModelContactCenterModelManagerModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactCenterModelManagerModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        managerModelId
        contactCenterModelId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncContactCenterModelManagerModels = /* GraphQL */ `
  query SyncContactCenterModelManagerModels(
    $filter: ModelContactCenterModelManagerModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContactCenterModelManagerModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        managerModelId
        contactCenterModelId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const contactCenterModelManagerModelsByManagerModelId = /* GraphQL */ `
  query ContactCenterModelManagerModelsByManagerModelId(
    $managerModelId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContactCenterModelManagerModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contactCenterModelManagerModelsByManagerModelId(
      managerModelId: $managerModelId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        managerModelId
        contactCenterModelId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const contactCenterModelManagerModelsByContactCenterModelId = /* GraphQL */ `
  query ContactCenterModelManagerModelsByContactCenterModelId(
    $contactCenterModelId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContactCenterModelManagerModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contactCenterModelManagerModelsByContactCenterModelId(
      contactCenterModelId: $contactCenterModelId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        managerModelId
        contactCenterModelId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
