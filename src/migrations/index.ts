import * as migration_20261116_091855_init from './20261116_091855_init';

export const migrations = [
  {
    up: migration_20261116_091855_init.up,
    down: migration_20261116_091855_init.down,
    name: '20261116_091855_init'
  },
];
