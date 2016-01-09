
import * as path from 'path';
import { Foo1 } from 'ts-lib1';

export class Foo2 {
  talk(): string {
    const foo1 = new Foo1();
    const exe = process.execPath;
    const name = path.basename(exe);
    return `I am Foo2. This process running this is ${name}. Calling Foo1:` +
      foo1.talk();
  }
}
