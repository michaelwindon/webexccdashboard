/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQueueModel = /* GraphQL */ `
  query GetQueueModel($id: ID!) {
    getQueueModel(id: $id) {
      id
      name
      group
      createdAt
      updatedAt
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
        group
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserModel = /* GraphQL */ `
  query GetUserModel($id: ID!) {
    getUserModel(id: $id) {
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
export const listUserModels = /* GraphQL */ `
  query ListUserModels(
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
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
      nextToken
      __typename
    }
  }
`;
export const getContactCenterModelUserModel = /* GraphQL */ `
  query GetContactCenterModelUserModel($id: ID!) {
    getContactCenterModelUserModel(id: $id) {
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
export const listContactCenterModelUserModels = /* GraphQL */ `
  query ListContactCenterModelUserModels(
    $filter: ModelContactCenterModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactCenterModelUserModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userModelId
        contactCenterModelId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const contactCenterModelUserModelsByUserModelId = /* GraphQL */ `
  query ContactCenterModelUserModelsByUserModelId(
    $userModelId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContactCenterModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contactCenterModelUserModelsByUserModelId(
      userModelId: $userModelId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userModelId
        contactCenterModelId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const contactCenterModelUserModelsByContactCenterModelId = /* GraphQL */ `
  query ContactCenterModelUserModelsByContactCenterModelId(
    $contactCenterModelId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContactCenterModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contactCenterModelUserModelsByContactCenterModelId(
      contactCenterModelId: $contactCenterModelId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userModelId
        contactCenterModelId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
