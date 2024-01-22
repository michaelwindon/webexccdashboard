export const schema = {
    "models": {
        "GroupModel": {
            "name": "GroupModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "fullname": {
                    "name": "fullname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "abbreviatedname": {
                    "name": "abbreviatedname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Managers": {
                    "name": "Managers",
                    "isArray": true,
                    "type": {
                        "model": "GroupModelManagerModel"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "groupModel"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "GroupModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "QueueModel": {
            "name": "QueueModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Group": {
                    "name": "Group",
                    "isArray": false,
                    "type": {
                        "model": "GroupModel"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "queueModelGroupId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "queueModelGroupId": {
                    "name": "queueModelGroupId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "QueueModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ManagerModel": {
            "name": "ManagerModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": true,
                    "attributes": []
                },
                "telephone": {
                    "name": "telephone",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "profilepic": {
                    "name": "profilepic",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "role": {
                    "name": "role",
                    "isArray": false,
                    "type": {
                        "enum": "RoleEnum"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "ContactCenters": {
                    "name": "ContactCenters",
                    "isArray": true,
                    "type": {
                        "model": "ContactCenterModelManagerModel"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "managerModel"
                        ]
                    }
                },
                "Groups": {
                    "name": "Groups",
                    "isArray": true,
                    "type": {
                        "model": "GroupModelManagerModel"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "managerModel"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ManagerModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ContactCenterModel": {
            "name": "ContactCenterModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "ccname": {
                    "name": "ccname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "mainnumber": {
                    "name": "mainnumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ccdescription": {
                    "name": "ccdescription",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Managers": {
                    "name": "Managers",
                    "isArray": true,
                    "type": {
                        "model": "ContactCenterModelManagerModel"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "contactCenterModel"
                        ]
                    }
                },
                "AssignedGroup": {
                    "name": "AssignedGroup",
                    "isArray": false,
                    "type": {
                        "model": "GroupModel"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "contactCenterModelAssignedGroupId"
                        ]
                    }
                },
                "presentlangoption": {
                    "name": "presentlangoption",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "isoverride": {
                    "name": "isoverride",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "isholiday": {
                    "name": "isholiday",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "isafterhours": {
                    "name": "isafterhours",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "issecondaryclosed": {
                    "name": "issecondaryclosed",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "epiccontext": {
                    "name": "epiccontext",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "welcomeprompt": {
                    "name": "welcomeprompt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "welcomeprompt_sp": {
                    "name": "welcomeprompt_sp",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "menu0": {
                    "name": "menu0",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "menu1": {
                    "name": "menu1",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "menu2": {
                    "name": "menu2",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "menu3": {
                    "name": "menu3",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "menu4": {
                    "name": "menu4",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "menu5": {
                    "name": "menu5",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "menu6": {
                    "name": "menu6",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "menu7": {
                    "name": "menu7",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "menu8": {
                    "name": "menu8",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "menu9": {
                    "name": "menu9",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "holiday": {
                    "name": "holiday",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "secondarytodopen": {
                    "name": "secondarytodopen",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "secondarytodclose": {
                    "name": "secondarytodclose",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "daystodopen": {
                    "name": "daystodopen",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "daystodclose": {
                    "name": "daystodclose",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "daysopen": {
                    "name": "daysopen",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "holidayoption": {
                    "name": "holidayoption",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "afterhours": {
                    "name": "afterhours",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "secondaryclose": {
                    "name": "secondaryclose",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "override": {
                    "name": "override",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "defaultroute": {
                    "name": "defaultroute",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "updateduser": {
                    "name": "updateduser",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "menu0_sp": {
                    "name": "menu0_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "menu1_sp": {
                    "name": "menu1_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "menu2_sp": {
                    "name": "menu2_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "menu3_sp": {
                    "name": "menu3_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "menu4_sp": {
                    "name": "menu4_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "menu5_sp": {
                    "name": "menu5_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "menu6_sp": {
                    "name": "menu6_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "menu7_sp": {
                    "name": "menu7_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "menu8_sp": {
                    "name": "menu8_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "menu9_sp": {
                    "name": "menu9_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "MenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu1": {
                    "name": "submenu1",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu2": {
                    "name": "submenu2",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu3": {
                    "name": "submenu3",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu4": {
                    "name": "submenu4",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu5": {
                    "name": "submenu5",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu6": {
                    "name": "submenu6",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu7": {
                    "name": "submenu7",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu8": {
                    "name": "submenu8",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu9": {
                    "name": "submenu9",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu0": {
                    "name": "submenu0",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu1_sp": {
                    "name": "submenu1_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu2_sp": {
                    "name": "submenu2_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu3_sp": {
                    "name": "submenu3_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu4_sp": {
                    "name": "submenu4_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu5_sp": {
                    "name": "submenu5_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu6_sp": {
                    "name": "submenu6_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu7_sp": {
                    "name": "submenu7_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu8_sp": {
                    "name": "submenu8_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu9_sp": {
                    "name": "submenu9_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "submenu0_sp": {
                    "name": "submenu0_sp",
                    "isArray": false,
                    "type": {
                        "nonModel": "SubmenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "contactCenterModelAssignedGroupId": {
                    "name": "contactCenterModelAssignedGroupId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "ContactCenterModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "GroupModelManagerModel": {
            "name": "GroupModelManagerModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "groupModelId": {
                    "name": "groupModelId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "managerModelId": {
                    "name": "managerModelId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "groupModel": {
                    "name": "groupModel",
                    "isArray": false,
                    "type": {
                        "model": "GroupModel"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "groupModelId"
                        ]
                    }
                },
                "managerModel": {
                    "name": "managerModel",
                    "isArray": false,
                    "type": {
                        "model": "ManagerModel"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "managerModelId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "GroupModelManagerModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byGroupModel",
                        "fields": [
                            "groupModelId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byManagerModel",
                        "fields": [
                            "managerModelId"
                        ]
                    }
                }
            ]
        },
        "ContactCenterModelManagerModel": {
            "name": "ContactCenterModelManagerModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "managerModelId": {
                    "name": "managerModelId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "contactCenterModelId": {
                    "name": "contactCenterModelId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "managerModel": {
                    "name": "managerModel",
                    "isArray": false,
                    "type": {
                        "model": "ManagerModel"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "managerModelId"
                        ]
                    }
                },
                "contactCenterModel": {
                    "name": "contactCenterModel",
                    "isArray": false,
                    "type": {
                        "model": "ContactCenterModel"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "contactCenterModelId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ContactCenterModelManagerModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byManagerModel",
                        "fields": [
                            "managerModelId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byContactCenterModel",
                        "fields": [
                            "contactCenterModelId"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "RoleEnum": {
            "name": "RoleEnum",
            "values": [
                "ADMIN",
                "MANAGER",
                "VIEW"
            ]
        },
        "OptionTypeEnum": {
            "name": "OptionTypeEnum",
            "values": [
                "MSG",
                "FORWARD",
                "QUEUE"
            ]
        },
        "MenuTypeEnum": {
            "name": "MenuTypeEnum",
            "values": [
                "MSG",
                "FORWARD",
                "QUEUE",
                "SUBMENU"
            ]
        }
    },
    "nonModels": {
        "OptionMenuType": {
            "name": "OptionMenuType",
            "fields": {
                "msg": {
                    "name": "msg",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "OptionTypeEnum"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "MenuType": {
            "name": "MenuType",
            "fields": {
                "msg": {
                    "name": "msg",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "MenuTypeEnum"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "SubmenuType": {
            "name": "SubmenuType",
            "fields": {
                "option0": {
                    "name": "option0",
                    "isArray": false,
                    "type": {
                        "nonModel": "OptionMenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "option1": {
                    "name": "option1",
                    "isArray": false,
                    "type": {
                        "nonModel": "OptionMenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "option2": {
                    "name": "option2",
                    "isArray": false,
                    "type": {
                        "nonModel": "OptionMenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "option3": {
                    "name": "option3",
                    "isArray": false,
                    "type": {
                        "nonModel": "OptionMenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "option4": {
                    "name": "option4",
                    "isArray": false,
                    "type": {
                        "nonModel": "OptionMenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "option5": {
                    "name": "option5",
                    "isArray": false,
                    "type": {
                        "nonModel": "OptionMenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "option6": {
                    "name": "option6",
                    "isArray": false,
                    "type": {
                        "nonModel": "OptionMenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "option7": {
                    "name": "option7",
                    "isArray": false,
                    "type": {
                        "nonModel": "OptionMenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "option8": {
                    "name": "option8",
                    "isArray": false,
                    "type": {
                        "nonModel": "OptionMenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "option9": {
                    "name": "option9",
                    "isArray": false,
                    "type": {
                        "nonModel": "OptionMenuType"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.4.4",
    "version": "f4e9c817bff06f0b9503004f2fc86cce"
};