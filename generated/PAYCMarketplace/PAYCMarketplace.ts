// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PaycBidEntered extends ethereum.Event {
  get params(): PaycBidEntered__Params {
    return new PaycBidEntered__Params(this);
  }
}

export class PaycBidEntered__Params {
  _event: PaycBidEntered;

  constructor(event: PaycBidEntered) {
    this._event = event;
  }

  get paycIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get fromAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class PaycBidWithdrawn extends ethereum.Event {
  get params(): PaycBidWithdrawn__Params {
    return new PaycBidWithdrawn__Params(this);
  }
}

export class PaycBidWithdrawn__Params {
  _event: PaycBidWithdrawn;

  constructor(event: PaycBidWithdrawn) {
    this._event = event;
  }

  get paycIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get fromAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class PaycBought extends ethereum.Event {
  get params(): PaycBought__Params {
    return new PaycBought__Params(this);
  }
}

export class PaycBought__Params {
  _event: PaycBought;

  constructor(event: PaycBought) {
    this._event = event;
  }

  get paycIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get fromAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get toAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class PaycNoLongerForSale extends ethereum.Event {
  get params(): PaycNoLongerForSale__Params {
    return new PaycNoLongerForSale__Params(this);
  }
}

export class PaycNoLongerForSale__Params {
  _event: PaycNoLongerForSale;

  constructor(event: PaycNoLongerForSale) {
    this._event = event;
  }

  get paycIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class PaycOffered extends ethereum.Event {
  get params(): PaycOffered__Params {
    return new PaycOffered__Params(this);
  }
}

export class PaycOffered__Params {
  _event: PaycOffered;

  constructor(event: PaycOffered) {
    this._event = event;
  }

  get paycIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get minValue(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get toAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PAYCMarketplace__paycBidsResult {
  value0: boolean;
  value1: BigInt;
  value2: Address;
  value3: BigInt;

  constructor(
    value0: boolean,
    value1: BigInt,
    value2: Address,
    value3: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getHasBid(): boolean {
    return this.value0;
  }

  getPaycIndex(): BigInt {
    return this.value1;
  }

  getBidder(): Address {
    return this.value2;
  }

  getValue(): BigInt {
    return this.value3;
  }
}

export class PAYCMarketplace__paycOfferedForSaleResult {
  value0: boolean;
  value1: BigInt;
  value2: Address;
  value3: BigInt;
  value4: Address;

  constructor(
    value0: boolean,
    value1: BigInt,
    value2: Address,
    value3: BigInt,
    value4: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    return map;
  }

  getIsForSale(): boolean {
    return this.value0;
  }

  getPaycIndex(): BigInt {
    return this.value1;
  }

  getSeller(): Address {
    return this.value2;
  }

  getMinValue(): BigInt {
    return this.value3;
  }

  getOnlySellTo(): Address {
    return this.value4;
  }
}

export class PAYCMarketplace extends ethereum.SmartContract {
  static bind(address: Address): PAYCMarketplace {
    return new PAYCMarketplace("PAYCMarketplace", address);
  }

  getPaycOnSaleStatus(): Array<boolean> {
    let result = super.call(
      "getPaycOnSaleStatus",
      "getPaycOnSaleStatus():(bool[10000])",
      []
    );

    return result[0].toBooleanArray();
  }

  try_getPaycOnSaleStatus(): ethereum.CallResult<Array<boolean>> {
    let result = super.tryCall(
      "getPaycOnSaleStatus",
      "getPaycOnSaleStatus():(bool[10000])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBooleanArray());
  }

  isPaycOnSale(paycIndex: BigInt): boolean {
    let result = super.call("isPaycOnSale", "isPaycOnSale(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(paycIndex)
    ]);

    return result[0].toBoolean();
  }

  try_isPaycOnSale(paycIndex: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPaycOnSale", "isPaycOnSale(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(paycIndex)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  paycAddress(): Address {
    let result = super.call("paycAddress", "paycAddress():(address)", []);

    return result[0].toAddress();
  }

  try_paycAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("paycAddress", "paycAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paycBids(param0: BigInt): PAYCMarketplace__paycBidsResult {
    let result = super.call(
      "paycBids",
      "paycBids(uint256):(bool,uint256,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new PAYCMarketplace__paycBidsResult(
      result[0].toBoolean(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt()
    );
  }

  try_paycBids(
    param0: BigInt
  ): ethereum.CallResult<PAYCMarketplace__paycBidsResult> {
    let result = super.tryCall(
      "paycBids",
      "paycBids(uint256):(bool,uint256,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PAYCMarketplace__paycBidsResult(
        value[0].toBoolean(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBigInt()
      )
    );
  }

  paycOfferedForSale(
    param0: BigInt
  ): PAYCMarketplace__paycOfferedForSaleResult {
    let result = super.call(
      "paycOfferedForSale",
      "paycOfferedForSale(uint256):(bool,uint256,address,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new PAYCMarketplace__paycOfferedForSaleResult(
      result[0].toBoolean(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toAddress()
    );
  }

  try_paycOfferedForSale(
    param0: BigInt
  ): ethereum.CallResult<PAYCMarketplace__paycOfferedForSaleResult> {
    let result = super.tryCall(
      "paycOfferedForSale",
      "paycOfferedForSale(uint256):(bool,uint256,address,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PAYCMarketplace__paycOfferedForSaleResult(
        value[0].toBoolean(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toAddress()
      )
    );
  }

  paycOnSaleStatus(param0: BigInt): boolean {
    let result = super.call(
      "paycOnSaleStatus",
      "paycOnSaleStatus(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBoolean();
  }

  try_paycOnSaleStatus(param0: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "paycOnSaleStatus",
      "paycOnSaleStatus(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  pendingWithdrawals(param0: Address): BigInt {
    let result = super.call(
      "pendingWithdrawals",
      "pendingWithdrawals(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_pendingWithdrawals(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pendingWithdrawals",
      "pendingWithdrawals(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get initialPaycAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptBidForPaycCall extends ethereum.Call {
  get inputs(): AcceptBidForPaycCall__Inputs {
    return new AcceptBidForPaycCall__Inputs(this);
  }

  get outputs(): AcceptBidForPaycCall__Outputs {
    return new AcceptBidForPaycCall__Outputs(this);
  }
}

export class AcceptBidForPaycCall__Inputs {
  _call: AcceptBidForPaycCall;

  constructor(call: AcceptBidForPaycCall) {
    this._call = call;
  }

  get paycIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get minPrice(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AcceptBidForPaycCall__Outputs {
  _call: AcceptBidForPaycCall;

  constructor(call: AcceptBidForPaycCall) {
    this._call = call;
  }
}

export class BuyPaycCall extends ethereum.Call {
  get inputs(): BuyPaycCall__Inputs {
    return new BuyPaycCall__Inputs(this);
  }

  get outputs(): BuyPaycCall__Outputs {
    return new BuyPaycCall__Outputs(this);
  }
}

export class BuyPaycCall__Inputs {
  _call: BuyPaycCall;

  constructor(call: BuyPaycCall) {
    this._call = call;
  }

  get paycIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BuyPaycCall__Outputs {
  _call: BuyPaycCall;

  constructor(call: BuyPaycCall) {
    this._call = call;
  }
}

export class EnterBidForPaycCall extends ethereum.Call {
  get inputs(): EnterBidForPaycCall__Inputs {
    return new EnterBidForPaycCall__Inputs(this);
  }

  get outputs(): EnterBidForPaycCall__Outputs {
    return new EnterBidForPaycCall__Outputs(this);
  }
}

export class EnterBidForPaycCall__Inputs {
  _call: EnterBidForPaycCall;

  constructor(call: EnterBidForPaycCall) {
    this._call = call;
  }

  get paycIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class EnterBidForPaycCall__Outputs {
  _call: EnterBidForPaycCall;

  constructor(call: EnterBidForPaycCall) {
    this._call = call;
  }
}

export class OfferPaycForSaleCall extends ethereum.Call {
  get inputs(): OfferPaycForSaleCall__Inputs {
    return new OfferPaycForSaleCall__Inputs(this);
  }

  get outputs(): OfferPaycForSaleCall__Outputs {
    return new OfferPaycForSaleCall__Outputs(this);
  }
}

export class OfferPaycForSaleCall__Inputs {
  _call: OfferPaycForSaleCall;

  constructor(call: OfferPaycForSaleCall) {
    this._call = call;
  }

  get paycIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get minSalePriceInWei(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class OfferPaycForSaleCall__Outputs {
  _call: OfferPaycForSaleCall;

  constructor(call: OfferPaycForSaleCall) {
    this._call = call;
  }
}

export class OfferPaycForSaleToAddressCall extends ethereum.Call {
  get inputs(): OfferPaycForSaleToAddressCall__Inputs {
    return new OfferPaycForSaleToAddressCall__Inputs(this);
  }

  get outputs(): OfferPaycForSaleToAddressCall__Outputs {
    return new OfferPaycForSaleToAddressCall__Outputs(this);
  }
}

export class OfferPaycForSaleToAddressCall__Inputs {
  _call: OfferPaycForSaleToAddressCall;

  constructor(call: OfferPaycForSaleToAddressCall) {
    this._call = call;
  }

  get paycIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get minSalePriceInWei(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get toAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class OfferPaycForSaleToAddressCall__Outputs {
  _call: OfferPaycForSaleToAddressCall;

  constructor(call: OfferPaycForSaleToAddressCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PaycNoLongerForSaleCall extends ethereum.Call {
  get inputs(): PaycNoLongerForSaleCall__Inputs {
    return new PaycNoLongerForSaleCall__Inputs(this);
  }

  get outputs(): PaycNoLongerForSaleCall__Outputs {
    return new PaycNoLongerForSaleCall__Outputs(this);
  }
}

export class PaycNoLongerForSaleCall__Inputs {
  _call: PaycNoLongerForSaleCall;

  constructor(call: PaycNoLongerForSaleCall) {
    this._call = call;
  }

  get paycIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class PaycNoLongerForSaleCall__Outputs {
  _call: PaycNoLongerForSaleCall;

  constructor(call: PaycNoLongerForSaleCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetPaycContractCall extends ethereum.Call {
  get inputs(): SetPaycContractCall__Inputs {
    return new SetPaycContractCall__Inputs(this);
  }

  get outputs(): SetPaycContractCall__Outputs {
    return new SetPaycContractCall__Outputs(this);
  }
}

export class SetPaycContractCall__Inputs {
  _call: SetPaycContractCall;

  constructor(call: SetPaycContractCall) {
    this._call = call;
  }

  get newPaycAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPaycContractCall__Outputs {
  _call: SetPaycContractCall;

  constructor(call: SetPaycContractCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawBidForPaycCall extends ethereum.Call {
  get inputs(): WithdrawBidForPaycCall__Inputs {
    return new WithdrawBidForPaycCall__Inputs(this);
  }

  get outputs(): WithdrawBidForPaycCall__Outputs {
    return new WithdrawBidForPaycCall__Outputs(this);
  }
}

export class WithdrawBidForPaycCall__Inputs {
  _call: WithdrawBidForPaycCall;

  constructor(call: WithdrawBidForPaycCall) {
    this._call = call;
  }

  get paycIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawBidForPaycCall__Outputs {
  _call: WithdrawBidForPaycCall;

  constructor(call: WithdrawBidForPaycCall) {
    this._call = call;
  }
}
