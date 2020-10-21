const express = require("express");
const mongoose = require("mongoose");

const logger = require("morgan");

const db = require("./models");

const app = express();

const path = require("path");

app.use(logger("dev"));