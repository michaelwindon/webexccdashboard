import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum RoleEnum {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  VIEW = "VIEW"
}

export enum OptionTypeEnum {
  MSG = "MSG",
  FORWARD = "FORWARD",
  QUEUE = "QUEUE",
  NONE = "NONE"
}

export enum MenuTypeEnum {
  MSG = "MSG",
  FORWARD = "FORWARD",
  QUEUE = "QUEUE",
  SUBMENU = "SUBMENU",
  NONE = "NONE"
}

type EagerOptionMenuType = {
  readonly msg?: string | null;
  readonly type?: OptionTypeEnum | keyof typeof OptionTypeEnum | null;
  readonly value?: string | null;
}

type LazyOptionMenuType = {
  readonly msg?: string | null;
  readonly type?: OptionTypeEnum | keyof typeof OptionTypeEnum | null;
  readonly value?: string | null;
}

export declare type OptionMenuType = LazyLoading extends LazyLoadingDisabled ? EagerOptionMenuType : LazyOptionMenuType

export declare const OptionMenuType: (new (init: ModelInit<OptionMenuType>) => OptionMenuType)

type EagerMenuType = {
  readonly msg?: string | null;
  readonly type?: MenuTypeEnum | keyof typeof MenuTypeEnum | null;
  readonly value?: string | null;
}

type LazyMenuType = {
  readonly msg?: string | null;
  readonly type?: MenuTypeEnum | keyof typeof MenuTypeEnum | null;
  readonly value?: string | null;
}

export declare type MenuType = LazyLoading extends LazyLoadingDisabled ? EagerMenuType : LazyMenuType

export declare const MenuType: (new (init: ModelInit<MenuType>) => MenuType)

type EagerSubmenuType = {
  readonly option0?: OptionMenuType | null;
  readonly option1?: OptionMenuType | null;
  readonly option2?: OptionMenuType | null;
  readonly option3?: OptionMenuType | null;
  readonly option4?: OptionMenuType | null;
  readonly option5?: OptionMenuType | null;
  readonly option6?: OptionMenuType | null;
  readonly option7?: OptionMenuType | null;
  readonly option8?: OptionMenuType | null;
  readonly option9?: OptionMenuType | null;
}

type LazySubmenuType = {
  readonly option0?: OptionMenuType | null;
  readonly option1?: OptionMenuType | null;
  readonly option2?: OptionMenuType | null;
  readonly option3?: OptionMenuType | null;
  readonly option4?: OptionMenuType | null;
  readonly option5?: OptionMenuType | null;
  readonly option6?: OptionMenuType | null;
  readonly option7?: OptionMenuType | null;
  readonly option8?: OptionMenuType | null;
  readonly option9?: OptionMenuType | null;
}

export declare type SubmenuType = LazyLoading extends LazyLoadingDisabled ? EagerSubmenuType : LazySubmenuType

export declare const SubmenuType: (new (init: ModelInit<SubmenuType>) => SubmenuType)

type EagerKeyStore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<KeyStore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly org_id?: string | null;
  readonly access_token?: string | null;
  readonly expires_in?: number | null;
  readonly refresh_token?: string | null;
  readonly refresh_token_expires_in?: number | null;
  readonly token_type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyKeyStore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<KeyStore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly org_id?: string | null;
  readonly access_token?: string | null;
  readonly expires_in?: number | null;
  readonly refresh_token?: string | null;
  readonly refresh_token_expires_in?: number | null;
  readonly token_type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type KeyStore = LazyLoading extends LazyLoadingDisabled ? EagerKeyStore : LazyKeyStore

export declare const KeyStore: (new (init: ModelInit<KeyStore>) => KeyStore) & {
  copyOf(source: KeyStore, mutator: (draft: MutableModel<KeyStore>) => MutableModel<KeyStore> | void): KeyStore;
}

type EagerGroupModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullname?: string | null;
  readonly abbreviatedname?: string | null;
  readonly Managers?: (GroupModelManagerModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGroupModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullname?: string | null;
  readonly abbreviatedname?: string | null;
  readonly Managers: AsyncCollection<GroupModelManagerModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GroupModel = LazyLoading extends LazyLoadingDisabled ? EagerGroupModel : LazyGroupModel

export declare const GroupModel: (new (init: ModelInit<GroupModel>) => GroupModel) & {
  copyOf(source: GroupModel, mutator: (draft: MutableModel<GroupModel>) => MutableModel<GroupModel> | void): GroupModel;
}

type EagerQueueModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QueueModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly Group?: GroupModel | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly queueModelGroupId?: string | null;
}

type LazyQueueModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QueueModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly Group: AsyncItem<GroupModel | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly queueModelGroupId?: string | null;
}

export declare type QueueModel = LazyLoading extends LazyLoadingDisabled ? EagerQueueModel : LazyQueueModel

export declare const QueueModel: (new (init: ModelInit<QueueModel>) => QueueModel) & {
  copyOf(source: QueueModel, mutator: (draft: MutableModel<QueueModel>) => MutableModel<QueueModel> | void): QueueModel;
}

type EagerManagerModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ManagerModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly telephone?: string | null;
  readonly profilepic?: string | null;
  readonly role?: RoleEnum | keyof typeof RoleEnum | null;
  readonly ContactCenters?: (ContactCenterModelManagerModel | null)[] | null;
  readonly Groups?: (GroupModelManagerModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyManagerModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ManagerModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly telephone?: string | null;
  readonly profilepic?: string | null;
  readonly role?: RoleEnum | keyof typeof RoleEnum | null;
  readonly ContactCenters: AsyncCollection<ContactCenterModelManagerModel>;
  readonly Groups: AsyncCollection<GroupModelManagerModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ManagerModel = LazyLoading extends LazyLoadingDisabled ? EagerManagerModel : LazyManagerModel

export declare const ManagerModel: (new (init: ModelInit<ManagerModel>) => ManagerModel) & {
  copyOf(source: ManagerModel, mutator: (draft: MutableModel<ManagerModel>) => MutableModel<ManagerModel> | void): ManagerModel;
}

type EagerContactCenterModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactCenterModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ccname?: string | null;
  readonly mainnumber: string;
  readonly ccdescription?: string | null;
  readonly Managers?: (ContactCenterModelManagerModel | null)[] | null;
  readonly AssignedGroup?: GroupModel | null;
  readonly presentlangoption?: boolean | null;
  readonly isoverride?: boolean | null;
  readonly isholiday?: boolean | null;
  readonly isafterhours?: boolean | null;
  readonly issecondaryclosed?: boolean | null;
  readonly epiccontext?: string | null;
  readonly welcomeprompt?: string | null;
  readonly welcomeprompt_sp?: string | null;
  readonly menu0?: MenuType | null;
  readonly menu1?: MenuType | null;
  readonly menu2?: MenuType | null;
  readonly menu3?: MenuType | null;
  readonly menu4?: MenuType | null;
  readonly menu5?: MenuType | null;
  readonly menu6?: MenuType | null;
  readonly menu7?: MenuType | null;
  readonly menu8?: MenuType | null;
  readonly menu9?: MenuType | null;
  readonly usecorporateholidays?: boolean | null;
  readonly holiday?: (string | null)[] | null;
  readonly secondarytodclose?: (string | null)[] | null;
  readonly secondarytodopen?: (string | null)[] | null;
  readonly daystodopen?: (string | null)[] | null;
  readonly daystodclose?: (string | null)[] | null;
  readonly daysopen?: (string | null)[] | null;
  readonly holidayoption?: MenuType | null;
  readonly afterhours?: MenuType | null;
  readonly secondaryclose?: MenuType | null;
  readonly override?: MenuType | null;
  readonly defaultroute?: string | null;
  readonly updateduser?: string | null;
  readonly menu0_sp?: MenuType | null;
  readonly menu1_sp?: MenuType | null;
  readonly menu2_sp?: MenuType | null;
  readonly menu3_sp?: MenuType | null;
  readonly menu4_sp?: MenuType | null;
  readonly menu5_sp?: MenuType | null;
  readonly menu6_sp?: MenuType | null;
  readonly menu7_sp?: MenuType | null;
  readonly menu8_sp?: MenuType | null;
  readonly menu9_sp?: MenuType | null;
  readonly submenu1?: SubmenuType | null;
  readonly submenu2?: SubmenuType | null;
  readonly submenu3?: SubmenuType | null;
  readonly submenu4?: SubmenuType | null;
  readonly submenu5?: SubmenuType | null;
  readonly submenu6?: SubmenuType | null;
  readonly submenu7?: SubmenuType | null;
  readonly submenu8?: SubmenuType | null;
  readonly submenu9?: SubmenuType | null;
  readonly submenu0?: SubmenuType | null;
  readonly submenu1_sp?: SubmenuType | null;
  readonly submenu2_sp?: SubmenuType | null;
  readonly submenu3_sp?: SubmenuType | null;
  readonly submenu4_sp?: SubmenuType | null;
  readonly submenu5_sp?: SubmenuType | null;
  readonly submenu6_sp?: SubmenuType | null;
  readonly submenu7_sp?: SubmenuType | null;
  readonly submenu8_sp?: SubmenuType | null;
  readonly submenu9_sp?: SubmenuType | null;
  readonly submenu0_sp?: SubmenuType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly contactCenterModelAssignedGroupId?: string | null;
}

type LazyContactCenterModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactCenterModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ccname?: string | null;
  readonly mainnumber: string;
  readonly ccdescription?: string | null;
  readonly Managers: AsyncCollection<ContactCenterModelManagerModel>;
  readonly AssignedGroup: AsyncItem<GroupModel | undefined>;
  readonly presentlangoption?: boolean | null;
  readonly isoverride?: boolean | null;
  readonly isholiday?: boolean | null;
  readonly isafterhours?: boolean | null;
  readonly issecondaryclosed?: boolean | null;
  readonly epiccontext?: string | null;
  readonly welcomeprompt?: string | null;
  readonly welcomeprompt_sp?: string | null;
  readonly menu0?: MenuType | null;
  readonly menu1?: MenuType | null;
  readonly menu2?: MenuType | null;
  readonly menu3?: MenuType | null;
  readonly menu4?: MenuType | null;
  readonly menu5?: MenuType | null;
  readonly menu6?: MenuType | null;
  readonly menu7?: MenuType | null;
  readonly menu8?: MenuType | null;
  readonly menu9?: MenuType | null;
  readonly usecorporateholidays?: boolean | null;
  readonly holiday?: (string | null)[] | null;
  readonly secondarytodclose?: (string | null)[] | null;
  readonly secondarytodopen?: (string | null)[] | null;
  readonly daystodopen?: (string | null)[] | null;
  readonly daystodclose?: (string | null)[] | null;
  readonly daysopen?: (string | null)[] | null;
  readonly holidayoption?: MenuType | null;
  readonly afterhours?: MenuType | null;
  readonly secondaryclose?: MenuType | null;
  readonly override?: MenuType | null;
  readonly defaultroute?: string | null;
  readonly updateduser?: string | null;
  readonly menu0_sp?: MenuType | null;
  readonly menu1_sp?: MenuType | null;
  readonly menu2_sp?: MenuType | null;
  readonly menu3_sp?: MenuType | null;
  readonly menu4_sp?: MenuType | null;
  readonly menu5_sp?: MenuType | null;
  readonly menu6_sp?: MenuType | null;
  readonly menu7_sp?: MenuType | null;
  readonly menu8_sp?: MenuType | null;
  readonly menu9_sp?: MenuType | null;
  readonly submenu1?: SubmenuType | null;
  readonly submenu2?: SubmenuType | null;
  readonly submenu3?: SubmenuType | null;
  readonly submenu4?: SubmenuType | null;
  readonly submenu5?: SubmenuType | null;
  readonly submenu6?: SubmenuType | null;
  readonly submenu7?: SubmenuType | null;
  readonly submenu8?: SubmenuType | null;
  readonly submenu9?: SubmenuType | null;
  readonly submenu0?: SubmenuType | null;
  readonly submenu1_sp?: SubmenuType | null;
  readonly submenu2_sp?: SubmenuType | null;
  readonly submenu3_sp?: SubmenuType | null;
  readonly submenu4_sp?: SubmenuType | null;
  readonly submenu5_sp?: SubmenuType | null;
  readonly submenu6_sp?: SubmenuType | null;
  readonly submenu7_sp?: SubmenuType | null;
  readonly submenu8_sp?: SubmenuType | null;
  readonly submenu9_sp?: SubmenuType | null;
  readonly submenu0_sp?: SubmenuType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly contactCenterModelAssignedGroupId?: string | null;
}

export declare type ContactCenterModel = LazyLoading extends LazyLoadingDisabled ? EagerContactCenterModel : LazyContactCenterModel

export declare const ContactCenterModel: (new (init: ModelInit<ContactCenterModel>) => ContactCenterModel) & {
  copyOf(source: ContactCenterModel, mutator: (draft: MutableModel<ContactCenterModel>) => MutableModel<ContactCenterModel> | void): ContactCenterModel;
}

type EagerGroupModelManagerModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupModelManagerModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groupModelId?: string | null;
  readonly managerModelId?: string | null;
  readonly groupModel: GroupModel;
  readonly managerModel: ManagerModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGroupModelManagerModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupModelManagerModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groupModelId?: string | null;
  readonly managerModelId?: string | null;
  readonly groupModel: AsyncItem<GroupModel>;
  readonly managerModel: AsyncItem<ManagerModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GroupModelManagerModel = LazyLoading extends LazyLoadingDisabled ? EagerGroupModelManagerModel : LazyGroupModelManagerModel

export declare const GroupModelManagerModel: (new (init: ModelInit<GroupModelManagerModel>) => GroupModelManagerModel) & {
  copyOf(source: GroupModelManagerModel, mutator: (draft: MutableModel<GroupModelManagerModel>) => MutableModel<GroupModelManagerModel> | void): GroupModelManagerModel;
}

type EagerContactCenterModelManagerModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactCenterModelManagerModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly managerModelId?: string | null;
  readonly contactCenterModelId?: string | null;
  readonly managerModel: ManagerModel;
  readonly contactCenterModel: ContactCenterModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContactCenterModelManagerModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactCenterModelManagerModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly managerModelId?: string | null;
  readonly contactCenterModelId?: string | null;
  readonly managerModel: AsyncItem<ManagerModel>;
  readonly contactCenterModel: AsyncItem<ContactCenterModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ContactCenterModelManagerModel = LazyLoading extends LazyLoadingDisabled ? EagerContactCenterModelManagerModel : LazyContactCenterModelManagerModel

export declare const ContactCenterModelManagerModel: (new (init: ModelInit<ContactCenterModelManagerModel>) => ContactCenterModelManagerModel) & {
  copyOf(source: ContactCenterModelManagerModel, mutator: (draft: MutableModel<ContactCenterModelManagerModel>) => MutableModel<ContactCenterModelManagerModel> | void): ContactCenterModelManagerModel;
}