# eslint rule to detect import from legacy modules (`no-legacy-import`)

While developing your application and updating it with new technologies or redesigning, it's a good idea to separate new
modules from the old ones. Let's imagine you want to prevent your devs to use the old (legacy) codebase in the new
modules. This rule is to rescue. You can specify your legacy modules folder name, and see the error in the terminal if
someone uses modules from a forbidden folder



## Rule Details

I.e. all your legacy code are stored in a `legacy` folder. 

Examples of **incorrect** code for this rule:

```js
import foo from "./legacy/bar";
// or
import {foo} from "./legacy/bar";
// or
import {foo} from "./legacy/submodule/bar";
// or
export {foo} from "./legacy/bar";
// or    
export * from "./legacy/bar";
```

Examples of **correct** code for this rule:

```js
import {foo} from "./bar";
// or
import {foo} from "./module/bar";
// or
import foo from "./module/bar";
```

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.
