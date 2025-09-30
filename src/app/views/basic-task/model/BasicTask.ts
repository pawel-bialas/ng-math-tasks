export class BasicTask {

  private _values:  Map<any, any> | undefined | null;
  private _isCorrect: boolean | undefined | null;
  private _userInputValueIndex: number | undefined | null;


  get values(): Map<any, any> | undefined | null {
    return this._values;
  }

  set values(value: Map<any, any> | undefined | null) {
    this._values = value;
  }

  get isCorrect(): boolean | undefined | null {
    return this._isCorrect;
  }

  set isCorrect(value: boolean | undefined | null) {
    this._isCorrect = value;
  }

  get userInputValueIndex(): number | undefined | null {
    return this._userInputValueIndex;
  }

  set userInputValueIndex(value: number | undefined | null) {
    this._userInputValueIndex = value;
  }

  public constructor(
    numbers: Map<any, any> | undefined | null,
    isCorrect:  boolean | undefined | null,
    userInputValueIndex: number | undefined | null,
                     ) {
    this._values = numbers;
    this._isCorrect = isCorrect;
    this._userInputValueIndex = userInputValueIndex;
  }


}
