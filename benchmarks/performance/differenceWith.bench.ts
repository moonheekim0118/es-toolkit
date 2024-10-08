import { bench, describe } from 'vitest';
import { differenceWith as differenceWithToolkit_ } from 'es-toolkit';
import { differenceWith as differenceWithLodash_ } from 'lodash';

const differenceWithToolkit = differenceWithToolkit_;
const differenceWithLodash = differenceWithLodash_;

describe('differenceWith', () => {
  bench('es-toolkit/differenceWith', () => {
    differenceWithToolkit([1.2, 2.3, 3.4], [1.2], (x, y) => Math.floor(x) === Math.floor(y));
  });

  bench('lodash/differenceWith', () => {
    differenceWithLodash([1.2, 2.3, 3.4], [1.2], (x, y) => Math.floor(x) === Math.floor(y));
  });
});
