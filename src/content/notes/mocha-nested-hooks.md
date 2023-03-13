---
title: "Mocha hooks execution order"
description: "JS snippet for getting idea for Mocha hooks"
pubDate: "Aug 13 2022"
---

```js
describe('mocha before hooks', function () {
    before(() => console.log('*** top-level before()'));
    beforeEach(() => console.log('*** top-level beforeEach()'));
    describe('nesting', function () {
        before(() => console.log('*** nested before()'));
        beforeEach(() => console.log('*** nested beforeEach()'));
        it('is a nested spec', () => true);
    });
});
```

Output:<br>

```
//   mocha before hooks
// *** top-level before()
//     nesting
// *** nested before()
// *** top-level beforeEach()
// *** nested beforeEach()
//       ✓ is a nested spec
//
//
//   1 passing (8ms)
```

___

Referenced
from [GitHub Gist](https://gist.github.com/harto/c97d2fc9d0bfaf20706eb2acbf48c908)
by [harto](https://gist.github.com/harto)
