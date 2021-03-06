import {ICOState, RefundVaultState} from "../contracts";

export type NU = null | undefined;
// tslint:disable-next-line:interface-over-type-literal
export type KVMap = {
  [option: string]: any;
};
export * from './utils/files';
export * from './utils/strings';

export function toIcoStateIdToName(val: BigNumber.BigNumber): string {
  switch (val.toNumber()) {
    case ICOState.Unknown:
      return 'Unknown';
    case ICOState.Ico:
      return 'Ico';
    case ICOState.Success:
      return 'Success';
    case ICOState.Failed:
      return 'Failed';
    default:
      throw new Error(`Unknown ico state: ${val}`);
  }
}

export function toRefundVaultStateIdToName(val: BigNumber.BigNumber): string {
  switch (val.toNumber()) {
    case RefundVaultState.Active:
      return 'Active';
    case RefundVaultState.Refunding:
      return 'Refunding';
    case RefundVaultState.Closed:
      return 'Closed';
    default:
      throw new Error(`Unknown ico state: ${val}`);
  }
}
