/*
 * File: app/model/ccQueryStatisticModel.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.model.ccQueryStatisticModel', {
    extend: 'Ext.data.Model',
    alias: 'model.ccQueryStatisticModel',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            mapping: 'id',
            name: 'id',
            sortType: 'asInt',
            type: 'int'
        },
        {
            name: 'ticketId'
        },
        {
            name: 'isPush'
        },
        {
            name: 'publishDate'
        },
        {
            name: 'area'
        },
        {
            name: 'deadline'
        },
        {
            name: 'isMailPush'
        },
        {
            name: 'price'
        },
        {
            name: 'auction'
        },
        {
            name: 'supplier'
        },
        {
            name: 'others'
        },
        {
            name: 'region'
        }
    ]
});