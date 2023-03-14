/**
 * @fileoverview eslint rule to detect import from legacy modules
 * @author no-legacy-import
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */

module.exports = {
    rules: {
        "no-legacy-imports": {
            meta: {
                type: 'problem', // `problem`, `suggestion`, or `layout`
                docs: {
                    description: "eslint rule to prevent import from legacy modules",
                    category: "Possible Errors",
                    recommended: true,
                    url: '../../docs/rules/no-legacy-import.md', // URL to the documentation page for this rule
                },
                fixable: null,
                schema: [
                    {
                        type: "object",
                        properties: {
                            targetName: {
                                type: "string"
                            }
                        },
                        additionalProperties: false
                    }
                ],
            },

            create(context) {
                const {targetName = "legacy"} = context.options[0] || {};

                function checkImport(node) {
                    const importPath = node.source.value;
                    if (importPath.includes(`/${targetName}/`)) {
                        context.report({
                            node,
                            message: `Import of '${importPath}' contains '${targetName}' directory.`
                        });
                    }
                }

                return {
                    ImportDeclaration: checkImport,
                    ExportNamedDeclaration: checkImport,
                    ExportAllDeclaration: checkImport
                };
            }
        }
    }
};
