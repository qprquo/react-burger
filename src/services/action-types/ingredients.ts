import { TIngredient } from '../api';

export const GET_ITEMS_PENDING: 'GET_ITEMS_PENDING' = 'GET_ITEMS_PENDING';
export const GET_ITEMS_FULFILLED: 'GET_ITEMS_FULFILLED' = 'GET_ITEMS_FULFILLED';
export const GET_ITEMS_ERROR: 'GET_ITEMS_ERROR' = 'GET_ITEMS_ERROR';
export const INCREMENT_ITEM: 'INCREMENT_ITEM' = 'INCREMENT_ITEM';
export const DECREMENT_ITEM: 'DECREMENT_ITEM' = 'DECREMENT_ITEM';
export const CLEAR_COUNT: 'CLEAR_COUNT' = 'CLEAR_COUNT';

export type TGetItemsPendingAction = {
  readonly type: typeof GET_ITEMS_PENDING;
};

export type TGetItemsFulFilledAction = {
  readonly type: typeof GET_ITEMS_FULFILLED;
  readonly payload: TIngredient[];
};

export type TGetItemsErrorAction = {
  readonly type: typeof GET_ITEMS_ERROR;
};

export type TIncrementItemAction = {
  readonly type: typeof INCREMENT_ITEM;
  readonly payload: string;
};

export type TDecrementItemAction = {
  readonly type: typeof DECREMENT_ITEM;
  readonly payload: string;
};

export type TClearCountAction = {
  readonly type: typeof CLEAR_COUNT;
};

export type TIngredientActions =
  | TGetItemsPendingAction
  | TGetItemsFulFilledAction
  | TGetItemsErrorAction
  | TIncrementItemAction
  | TDecrementItemAction
  | TClearCountAction;
