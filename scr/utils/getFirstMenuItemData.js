import {SetMenuItem} from '../components/SetMenuItem.js';
import {
  configMenu,
  configSetMenuItem}
from './constants.js';
//ITEM DATA START
export const itemData = new SetMenuItem ({
  config: configMenu,
  extend: configSetMenuItem
});
export function getFirstMenuItemData(){
  return itemData.getData('.menu-item');
};
//ITEM DATA END