// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const RoleEnum = {
  "ADMIN": "ADMIN",
  "MANAGER": "MANAGER",
  "VIEW": "VIEW"
};

const SubmenuTypeEnum = {
  "MSG": "MSG",
  "FORWARD": "FORWARD",
  "QUEUE": "QUEUE"
};

const MenuTypeEnum = {
  "MSG": "MSG",
  "FORWARD": "FORWARD",
  "QUEUE": "QUEUE",
  "SUBMENU": "SUBMENU"
};

const { GroupModel, QueueModel, ManagerModel, ContactCenterModel, GroupModelManagerModel, ContactCenterModelManagerModel, SubmenuType, MenuType } = initSchema(schema);

export {
  GroupModel,
  QueueModel,
  ManagerModel,
  ContactCenterModel,
  GroupModelManagerModel,
  ContactCenterModelManagerModel,
  RoleEnum,
  SubmenuTypeEnum,
  MenuTypeEnum,
  SubmenuType,
  MenuType
};