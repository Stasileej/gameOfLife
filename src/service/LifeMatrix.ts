export default class LifeMatrix {
  constructor(private _numbers: number[][]) {}
  get numbers() {
    return this._numbers;
  }
  nextStep(): number[][] {
    this._numbers = this._numbers.map((row, i) => {
      return row.map((cell, j) => {
        let rate = 0;
        let indexes = [
          [i - 1, j - 1], [i - 1, j], [i - 1, j + 1],
          [i, j - 1],                     [i, j + 1],
          [i + 1, j - 1], [i + 1, j], [i + 1, j + 1],
        ];
        for (let [ii, jj] of indexes) {
          rate += this._numbers[ii]?.[jj] || 0;
        }
        return checkCell(rate, cell);
      });
    });
    return this._numbers;
  }
}

function checkCell(rate: number, value: number): number {
  return value === 1 ? (rate < 2 || rate > 3 ? 0 : 1) : rate === 3 ? 1 : 0;
}
