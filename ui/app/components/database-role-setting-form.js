/**
 * @module DatabaseRoleSettingForm
 * DatabaseRoleSettingForm components are used to handle the role settings section on the database/role form
 *
 * @example
 * ```js
 * <DatabaseRoleSettingForm @requiredParam={requiredParam} @optionalParam={optionalParam} @param1={{param1}}/>
 * ```
 * @param {Array<object>} attrs - all available attrs from the model to iterate over
 * @param {object} model - ember data model which should be updated on change
 * @param {string} [roleType] - role type controls which attributes are shown
 * @param {string} [mode=create] - mode of the form (eg. create or edit)
 * @param {string} [dbType=default] - type of database, eg 'mongodb-database-plugin'
 */

import Component from '@glimmer/component';
import { getStatementFields, getRoleFields } from '../utils/database-role-fields';

export default class DatabaseRoleSettingForm extends Component {
  get settingFields() {
    if (!this.args.roleType) return null;
    let dbValidFields = getRoleFields(this.args.roleType);
    return this.args.attrs.filter(a => {
      return dbValidFields.includes(a.name);
    });
  }

  get statementFields() {
    const type = this.args.roleType;
    const plugin = this.args.dbType;
    if (!type) return null;
    let dbValidFields = getStatementFields(type, plugin);
    return this.args.attrs.filter(a => {
      return dbValidFields.includes(a.name);
    });
  }
}
