"use strict";

const halfDiamondStarPattern = function (rows) {
  console.log("Half Diamond Star Pattern:");
  let line = "";
  for (let i = rows; i > 0; i--) {
    line = "";
    for (let j = 1; j < i; j++) line = line + "";
    for (let k = i - 1; k < rows; k++) line = line + "*";
    console.log(line);
  }
  for (let i = 2; i <= rows; i++) {
    line = "";
    for (let j = 1; j < i; j++) line = line + "";
    for (let k = i - 1; k < rows; k++) line = line + "*";
    console.log(line);
  }
};

const mirroredHalfDiamondStarPattern = function (rows) {
  console.log("Mirrored Half Diamond Star Pattern:");
  let line = "";
  for (let i = rows; i > 0; i--) {
    line = "";
    for (let j = 1; j < i; j++) line = line + " ";
    for (let k = i - 1; k < rows; k++) line = line + "*";
    console.log(line);
  }
  for (let i = 2; i <= rows; i++) {
    line = "";
    for (let j = 1; j < i; j++) line = line + " ";
    for (let k = i - 1; k < rows; k++) line = line + "*";
    console.log(line);
  }
};

const pyramidStarPattern = function (n) {
  console.log("Pyramid Star Pattern:");
  const rows = n * 2 - 1;
  let line = "";
  for (let i = rows; i > 0; i = i - 2) {
    line = "";
    for (let j = 1; j < i / 2; j++) line = line + " ";
    for (let k = i - 1; k < rows; k++) line = line + "*";
    console.log(line);
  }
};

const invertedPyramidStarPattern = function (n) {
  console.log("Inverted Pyramid Star Pattern:");
  const rows = n * 2 - 1;
  let line = "";
  for (let i = 1; i <= rows; i = i + 2) {
    line = "";
    for (let j = 1; j < i / 2; j++) line = line + " ";
    for (let k = i - 1; k < rows; k++) line = line + "*";
    console.log(line);
  }
};

const HollowPyramidStarPattern = function (n) {
  console.log("Hollow Pyramid Star Pattern:");
  const rows = n * 2 - 1;
  let line = "";
  for (let i = 1; i <= rows; i = i + 2) {
    line = "";
    for (let j = 1; j < i / 2; j++) line = line + " ";
    line = line + "*";
    if (i === 1) {
      for (let k = i - 1; k < rows - 2; k++) line = line + "*";
      line = line + "*";
    } else if (i !== rows) {
      for (let k = i - 1; k < rows - 2; k++) line = line + " ";
      line = line + "*";
    }
    console.log(line);
  }
};

const hollowInvertedPyramidStarPattern = function (n) {
  console.log("Inverted Hollow Pyramid Star Pattern:");
  const rows = n * 2 - 1;
  let line = "";
  for (let i = rows; i >= 1; i = i - 2) {
    line = "";
    for (let j = 1; j < i / 2; j++) line = line + " ";
    line = line + "*";
    if (i === 1) {
      for (let k = i - 1; k < rows - 2; k++) line = line + "*";
      line = line + "*";
    } else if (i !== rows) {
      for (let k = i - 1; k < rows - 2; k++) line = line + " ";
      line = line + "*";
    }
    console.log(line);
  }
};

const rowsNumber = prompt("How many rows do u want?");
halfDiamondStarPattern(rowsNumber);
mirroredHalfDiamondStarPattern(rowsNumber);
pyramidStarPattern(rowsNumber);
invertedPyramidStarPattern(rowsNumber);
HollowPyramidStarPattern(rowsNumber);
hollowInvertedPyramidStarPattern(rowsNumber);
