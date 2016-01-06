/*
 * File: app/store/ShouyiRegisterHtbh.js
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

Ext.define('MyApp.store.ShouyiRegisterHtbh', {
    extend: 'Ext.data.Store',
    alias: 'store.ShouyiRegisterHtbh',

    requires: [
        'MyApp.model.ShouyiCombox'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'MyApp.model.ShouyiCombox',
            storeId: 'ShouyiRegisterHtbh',
            data: [
                [
                    '1',
                    '2013040101'
                ],
                [
                    '2',
                    '2014040101'
                ],
                [
                    '3',
                    '2014042008'
                ],
                [
                    '4',
                    '2014042106'
                ],
                [
                    '5',
                    '2014030801'
                ],
                [
                    '6',
                    '2014022413'
                ],
                
            ]
        }, cfg)]);
    }
});