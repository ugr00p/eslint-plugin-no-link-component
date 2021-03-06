/**
 * @fileoverview Checks your JSX for <Link /> components and outputs an error if it finds one
 * @author Julien Benchetrit
 */
"use strict";

var elementType = require('jsx-ast-utils/elementType');

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var ELEMENT = 'NavLink';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Checks your JSX for <NavLink /> components and outputs an error if it finds one",
      category: "Post-Compilation Errors",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [{
      type: 'object',
      properties: {},
      additionalProperties: false
    }]
  },

  create: function(context) {

    return {

      JSXOpeningElement: function(node) {
        var name = elementType(node);

        if (ELEMENT === name) {
          context.report({
            node: node,
            message: 'Please use the custom NavLink component instead of the defaut one from React Router.'
          });
        }
      }

    };
  }
};
