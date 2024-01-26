// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const RoleEnum = {
  "ADMIN": "ADMIN",
  "MANAGER": "MANAGER",
  "VIEW": "VIEW"
};

const OptionTypeEnum = {
  "MSG": "MSG",
  "FORWARD": "FORWARD",
  "QUEUE": "QUEUE",
  "NONE": "NONE"
};

const MenuTypeEnum = {
  "MSG": "MSG",
  "FORWARD": "FORWARD",
  "QUEUE": "QUEUE",
  "SUBMENU": "SUBMENU",
  "NONE": "NONE"
};

const { KeyStore, GroupModel, QueueModel, ManagerModel, ContactCenterModel, GroupModelManagerModel, ContactCenterModelManagerModel, OptionMenuType, MenuType, SubmenuType } = initSchema(schema);

export {
  KeyStore,
  GroupModel,
  QueueModel,
  ManagerModel,
  ContactCenterModel,
  GroupModelManagerModel,
  ContactCenterModelManagerModel,
  RoleEnum,
  OptionTypeEnum,
  MenuTypeEnum,
  OptionMenuType,
  MenuType,
  SubmenuType
};