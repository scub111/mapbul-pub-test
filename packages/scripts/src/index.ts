// export * from './buildServer'
// export * from './deployServer'
import { test, sleep } from '@mapbul-pub/common';

// import { test } from 'common'
// import { test } from '../../common'
// import { test } from '../../common/src'

export const main = async () => {
  await sleep(500);
  console.log('starting2');

  test();
  const t = 79;
  console.log(t);
  console.log(t);
};

// require('make-runnable')
main();
// test()
