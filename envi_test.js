// should have error import/no-unresolved because we had eslint-plugin-import in package.json
// note that error has 2 things, 1 is import -> tell what eslint plugins; 2 is no-unresolved is the error of that plugin
const express = require("express");

// Should shows warning about assigning a value but never used here
const asd = 1;
