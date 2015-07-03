/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

eventGroups = {
    EVTS_CHECKPOINT: ['EVT_CHECKPOINT_SAVED', 'EVT_CHECKPOINT_LOADED', 'EVT_CHECKPOINT_REMOVED'],
    EVTS_DEPLOYMENT: ['EVT_CLASS_DEPLOYED', 'EVT_CLASS_UNDEPLOYED', 'EVT_CLASS_DEPLOY_FAILED', 'EVT_TASK_DEPLOYED',
        'EVT_TASK_UNDEPLOYED', 'EVT_TASK_DEPLOY_FAILED'],
    EVTS_ERROR: ['EVT_JOB_TIMEDOUT', 'EVT_JOB_FAILED', 'EVT_JOB_FAILED_OVER', 'EVT_JOB_REJECTED', 'EVT_JOB_CANCELLED',
        'EVT_TASK_TIMEDOUT', 'EVT_TASK_FAILED', 'EVT_CLASS_DEPLOY_FAILED', 'EVT_TASK_DEPLOY_FAILED',
        'EVT_TASK_DEPLOYED', 'EVT_TASK_UNDEPLOYED', 'EVT_CACHE_REBALANCE_STARTED', 'EVT_CACHE_REBALANCE_STOPPED'],
    EVTS_DISCOVERY: ['EVT_NODE_JOINED', 'EVT_NODE_LEFT', 'EVT_NODE_FAILED', 'EVT_NODE_SEGMENTED',
        'EVT_CLIENT_NODE_DISCONNECTED', 'EVT_CLIENT_NODE_RECONNECTED'],
    EVTS_JOB_EXECUTION: ['EVT_JOB_MAPPED', 'EVT_JOB_RESULTED', 'EVT_JOB_FAILED_OVER', 'EVT_JOB_STARTED',
        'EVT_JOB_FINISHED', 'EVT_JOB_TIMEDOUT', 'EVT_JOB_REJECTED', 'EVT_JOB_FAILED', 'EVT_JOB_QUEUED',
        'EVT_JOB_CANCELLED'],
    EVTS_TASK_EXECUTION: ['EVT_TASK_STARTED', 'EVT_TASK_FINISHED', 'EVT_TASK_FAILED', 'EVT_TASK_TIMEDOUT',
        'EVT_TASK_SESSION_ATTR_SET', 'EVT_TASK_REDUCED'],
    EVTS_CACHE: ['EVT_CACHE_ENTRY_CREATED', 'EVT_CACHE_ENTRY_DESTROYED', 'EVT_CACHE_OBJECT_PUT',
        'EVT_CACHE_OBJECT_READ', 'EVT_CACHE_OBJECT_REMOVED', 'EVT_CACHE_OBJECT_LOCKED', 'EVT_CACHE_OBJECT_UNLOCKED',
        'EVT_CACHE_OBJECT_SWAPPED', 'EVT_CACHE_OBJECT_UNSWAPPED', 'EVT_CACHE_OBJECT_EXPIRED'],
    EVTS_CACHE_REBALANCE: ['EVT_CACHE_REBALANCE_STARTED', 'EVT_CACHE_REBALANCE_STOPPED',
        'EVT_CACHE_REBALANCE_PART_LOADED', 'EVT_CACHE_REBALANCE_PART_UNLOADED', 'EVT_CACHE_REBALANCE_OBJECT_LOADED',
        'EVT_CACHE_REBALANCE_OBJECT_UNLOADED', 'EVT_CACHE_REBALANCE_PART_DATA_LOST'],
    EVTS_CACHE_LIFECYCLE: ['EVT_CACHE_STARTED', 'EVT_CACHE_STOPPED', 'EVT_CACHE_NODES_LEFT'],
    EVTS_CACHE_QUERY: ['EVT_CACHE_QUERY_EXECUTED', 'EVT_CACHE_QUERY_OBJECT_READ'],
    EVTS_SWAPSPACE: ['EVT_SWAP_SPACE_CLEARED', 'EVT_SWAP_SPACE_DATA_REMOVED', 'EVT_SWAP_SPACE_DATA_READ',
        'EVT_SWAP_SPACE_DATA_STORED', 'EVT_SWAP_SPACE_DATA_EVICTED'],
    EVTS_IGFS: ['EVT_IGFS_FILE_CREATED', 'EVT_IGFS_FILE_RENAMED', 'EVT_IGFS_FILE_DELETED', 'EVT_IGFS_FILE_OPENED_READ',
        'EVT_IGFS_FILE_OPENED_WRITE', 'EVT_IGFS_FILE_CLOSED_WRITE', 'EVT_IGFS_FILE_CLOSED_READ', 'EVT_IGFS_FILE_PURGED',
        'EVT_IGFS_META_UPDATED', 'EVT_IGFS_DIR_CREATED', 'EVT_IGFS_DIR_RENAMED', 'EVT_IGFS_DIR_DELETED']
};

jdbcTypes = {
    BIT: {value: "BIT", code: -7, label: "BIT"},
    TINYINT: {value: "TINYINT", code: -6, label: "TINYINT"},
    SMALLINT: {value: "SMALLINT", code: 5, label: "SMALLINT"},
    INTEGER: {value: "INTEGER", code: 4, label: "INTEGER"},
    BIGINT: {value: "BIGINT", code: -5, label: "BIGINT"},
    FLOAT: {value: "FLOAT", code: 6, label: "FLOAT"},
    REAL: {value: "REAL", code: 7, label: "REAL"},
    DOUBLE: {value: "DOUBLE", code: 8, label: "DOUBLE"},
    NUMERIC: {value: "NUMERIC", code: 2, label: "NUMERIC"},
    DECIMAL: {value: "DECIMAL", code: 3, label: "DECIMAL"},
    CHAR: {value: "CHAR", code: 1, label: "CHAR"},
    VARCHAR: {value: "VARCHAR", code: 12, label: "VARCHAR"},
    DATE: {value: "DATE", code: 91, label: "DATE"},
    TIME: {value: "TIME", code: 92, label: "TIME"},
    TIMESTAMP: {value: "TIMESTAMP", code: 93, label: "TIMESTAMP"},
    BINARY: {value: "BINARY", code: -2, label: "BINARY"}
};

javaTypes = {
    INTEGER: {value: "java.lang.Integer", label: "Integer"},
    LONG: {value: "java.lang.Long", label: "Long"},
    BIGDECIMAL: {value: "java.math.BigDecimal", label: "BigDecimal"},
    FLOAT: {value: "java.lang.Float", label: "Float"},
    DOUBLE: {value: "java.lang.Double", label: "Double"},
    STRING: {value: "java.lang.String", label: "String"},
    BOOLEAN: {value: "java.lang.Boolean", label: "Boolean"},
    BYTE_ARRAY: {value: "byte[]", label: "byte[]"},
    DATE: {value: "java.sql.Date", label: "Date"},
    TIME: {value: "java.sql.Time", label: "Time"},
    TIMESTAMP: {value: "java.sql.Timestamp", label: "Timestamp"}
};

if (typeof window === 'undefined') {
    exports.eventGroups = eventGroups;
    exports.jdbcTypes = jdbcTypes;
    exports.javaTypes = javaTypes;
}