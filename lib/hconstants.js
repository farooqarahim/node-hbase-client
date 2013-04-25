/*!
 * node-hbase-client - lib/hconstants.js
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var Long = require('long');
var Bytes = require('./util/bytes');

var CONST = {};

CONST.PROTOCOL = 'org.apache.hadoop.hbase.ipc.HRegionInterface';
CONST.CLIENT_VERSION = Long.fromNumber(29);

/**
 * Timestamp to use when we want to refer to the latest cell.
 * This is the timestamp sent by clients when no timestamp is specified on
 * commit.
 */
CONST.LATEST_TIMESTAMP = Long.MAX_VALUE;
/**
 * Timestamp to use when we want to refer to the oldest cell.
 */
CONST.OLDEST_TIMESTAMP = Long.MIN_VALUE;
/**
 * LATEST_TIMESTAMP in bytes form
 */
CONST.LATEST_TIMESTAMP_BYTES = Bytes.toBytes(CONST.LATEST_TIMESTAMP);
/** The root table's name.*/
CONST.ROOT_TABLE_NAME = Bytes.toBytes("-ROOT-");

/** The META table's name. */
CONST.META_TABLE_NAME = Bytes.toBytes(".META.");

/** delimiter used between portions of a region name */
CONST.META_ROW_DELIMITER = ',';

/** The catalog family as a string*/
CONST.CATALOG_FAMILY_STR = "info";

/** The catalog family */
CONST.CATALOG_FAMILY = Bytes.toBytes(CONST.CATALOG_FAMILY_STR);

/** long constant for zero */
// CONST.ZERO_L = Long.valueOf(0L);
CONST.NINES = "99999999999999";
CONST.ZEROES = "00000000000000";

// Other constants

/**
 * An empty instance.
 */
CONST.EMPTY_BYTE_ARRAY = new Buffer([0]);

/**
 * Used by scanners, etc when they want to start at the beginning of a region
 */
CONST.EMPTY_START_ROW = CONST.EMPTY_BYTE_ARRAY;

/**
 * Last row in a table.
 */
CONST.EMPTY_END_ROW = CONST.EMPTY_START_ROW;

/**
* Used by scanners and others when they're trying to detect the end of a
* table
*/
CONST.LAST_ROW = CONST.EMPTY_BYTE_ARRAY;


module.exports = CONST;