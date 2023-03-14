/**
 * @fileoverview eslint rule to detect import from legacy modules
 * @author iLavs
 */
"use strict";

/* Requirements */

const rule = require("../../../lib/rules/no-legacy-import"),
  RuleTester = require("eslint").RuleTester;

/* Tests */


const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module"
  }
});

ruleTester.run("no-legacy-imports", rule.rules["no-legacy-imports"], {
  valid: [
    {
      code: 'import { foo } from "./module/bar";',
      filename: "example.ts"
    },
    {
      code: 'import { foo } from "./bar";',
      filename: "example.ts"
    },
    {
      code: 'import foo from "./bar";',
      filename: "example.ts"
    }
  ],
  invalid: [
    {
      code: 'import { foo } from "./legacy/bar";',
      filename: "example.ts",
      errors: [
        {
          message: "Import of './legacy/bar' contains 'legacy' directory.",
          type: "ImportDeclaration"
        }
      ]
    },
    {
      code: 'export { foo } from "./legacy/bar";',
      filename: "example.ts",
      errors: [
        {
          message: "Import of './legacy/bar' contains 'legacy' directory.",
          type: "ExportNamedDeclaration"
        }
      ]
    },
    {
      code: 'export * from "./legacy/bar";',
      filename: "example.ts",
      errors: [
        {
          message: "Import of './legacy/bar' contains 'legacy' directory.",
          type: "ExportAllDeclaration"
        }
      ]
    },
    {
      code: 'import { foo } from "./legacy/submodule/bar";',
      filename: "example.ts",
      errors: [
        {
          message: "Import of './legacy/submodule/bar' contains 'legacy' directory.",
          type: "ImportDeclaration"
        }
      ]
    }
  ]
});
