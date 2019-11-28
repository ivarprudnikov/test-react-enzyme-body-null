Failing react test for #15691
================================

## Prerequisites

- Node v12.5 as in [.nvmrc](./.nvmrc), run `nvm use` otherwise
- specific versions of deps as in [package.json](./package.json) - run `npm i` to install

## About

This example is meant to help with issue in facebook/react https://github.com/facebook/react/issues/15691 "TypeError: Cannot read property 'body' of null"

Although issue was reproduced it still requires further inspection to understand what actually causes it as this depends of very specific version of third party library `react-jsonschema-form@1.8.0` and a mixture of `onError`,`ref={anyRef}` and `setHasErrors(true)`.

This exception disappears when using newer version of that library `v2.0.0-alpha.1` and might be related to:
> Removed setState, setImmediate, safeRenderCompletion helpers/hacks (#1454)

As mentioned in their [release notes](https://github.com/rjsf-team/react-jsonschema-form/releases/tag/v2.0.0-alpha.1)

## What to do to reproduce?

- Test `$ npm run test`

Test throws following error:

```shell script
 RUNS  src/foo.test.js
~/test-react-enzyme-body-null/node_modules/react-dom/cjs/react-dom.development.js:12212
      throw error;
      ^

TypeError: Cannot read property 'body' of null
    at getActiveElement (~/test-react-enzyme-body-null/node_modules/react-dom/cjs/react-dom.development.js:8609:16)
    at getActiveElementDeep (~/test-react-enzyme-body-null/node_modules/react-dom/cjs/react-dom.development.js:8897:17)
    at getSelectionInformation (~/test-react-enzyme-body-null/node_modules/react-dom/cjs/react-dom.development.js:8930:21)
    at prepareForCommit (~/test-react-enzyme-body-null/node_modules/react-dom/cjs/react-dom.development.js:9443:26)
    at commitRootImpl (~/test-react-enzyme-body-null/node_modules/react-dom/cjs/react-dom.development.js:25015:5)
    at unstable_runWithPriority (~/test-react-enzyme-body-null/node_modules/scheduler/cjs/scheduler.development.js:697:12)
    at runWithPriority$2 (~/test-react-enzyme-body-null/node_modules/react-dom/cjs/react-dom.development.js:12149:10)
    at commitRoot (~/test-react-enzyme-body-null/node_modules/react-dom/cjs/react-dom.development.js:24922:3)
    at finishSyncRender (~/test-react-enzyme-body-null/node_modules/react-dom/cjs/react-dom.development.js:24329:3)
    at performSyncWorkOnRoot (~/test-react-enzyme-body-null/node_modules/react-dom/cjs/react-dom.development.js:24307:9)
    at ~/test-react-enzyme-body-null/node_modules/react-dom/cjs/react-dom.development.js:12199:24
    at unstable_runWithPriority (~/test-react-enzyme-body-null/node_modules/scheduler/cjs/scheduler.development.js:697:12)
    at runWithPriority$2 (~/test-react-enzyme-body-null/node_modules/react-dom/cjs/react-dom.development.js:12149:10)
    at flushSyncCallbackQueueImpl (~/test-react-enzyme-body-null/node_modules/react-dom/cjs/react-dom.development.js:12194:7)
    at flushSyncCallbackQueue (~/test-react-enzyme-body-null/node_modules/react-dom/cjs/react-dom.development.js:12182:3)
    at scheduleUpdateOnFiber (~/test-react-enzyme-body-null/node_modules/react-dom/cjs/react-dom.development.js:23709:9)
    at setHasErrors (~/test-react-enzyme-body-null/node_modules/react-dom/cjs/react-dom.development.js:17076:5)
    at Object.handleError [as onError] (~/test-react-enzyme-body-null/src/foo.js:19:5)
    at Immediate.<anonymous> (~/test-react-enzyme-body-null/node_modules/react-jsonschema-form/lib/components/Form.js:199:27)
    at processImmediate (internal/timers.js:439:21)
npm ERR! Test failed.  See above for more details.
```
