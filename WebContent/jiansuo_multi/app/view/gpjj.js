/*
 * File: app/view/gpjj.js
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

Ext.define('MyApp.view.gpjj', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.gpjj',

    requires: [
        'Ext.Img',
        'Ext.form.Panel',
        'Ext.form.field.Display',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.View'
    ],

    height: 719,
    width: 900,
    layout: 'absolute',
    title: '我的指标>>我的购买指标>>挂牌竞价',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'image',
                    x: 110,
                    y: 30,
                    height: 40,
                    width: 540,
                    src: 'images/lc4.png'
                },
                {
                    xtype: 'form',
                    x: 40,
                    y: 120,
                    height: 410,
                    width: 510,
                    layout: 'absolute',
                    bodyPadding: 10,
                    title: '竞拍信息',
                    items: [
                        {
                            xtype: 'displayfield',
                            x: 20,
                            y: 30,
                            width: 220,
                            fieldLabel: '批次编号',
                            value: '01'
                        },
                        {
                            xtype: 'displayfield',
                            x: 260,
                            y: 30,
                            width: 230,
                            fieldLabel: '单位额度',
                            value: '100亩'
                        },
                        {
                            xtype: 'displayfield',
                            x: 20,
                            y: 90,
                            width: 220,
                            fieldLabel: '本批次总数量',
                            value: '10'
                        },
                        {
                            xtype: 'displayfield',
                            x: 260,
                            y: 90,
                            fieldLabel: '申购数量',
                            value: '3'
                        },
                        {
                            xtype: 'displayfield',
                            x: 20,
                            y: 150,
                            width: 220,
                            fieldLabel: '底价',
                            value: '10万'
                        },
                        {
                            xtype: 'displayfield',
                            x: 260,
                            y: 150,
                            fieldLabel: '最高出价',
                            value: '101000'
                        },
                        {
                            xtype: 'textfield',
                            x: 20,
                            y: 280,
                            width: 220,
                            fieldLabel: '我的出价'
                        },
                        {
                            xtype: 'displayfield',
                            x: 20,
                            y: 210,
                            style: {
                                fontColor: 'red'
                            },
                            width: 220,
                            fieldLabel: '状态',
                            value: '挂牌期间',
                            fieldStyle: ''
                        },
                        {
                            xtype: 'displayfield',
                            x: 260,
                            y: 210,
                            width: 220,
                            fieldLabel: '剩余时间',
                            value: '10天'
                        },
                        {
                            xtype: 'button',
                            x: 270,
                            y: 280,
                            height: 20,
                            width: 100,
                            text: '出价'
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    x: 590,
                    y: 120,
                    height: 410,
                    width: 250,
                    title: '历史记录',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            width: 70,
                            dataIndex: 'string',
                            text: '用户'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 74,
                            dataIndex: 'string',
                            text: '日期'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'string',
                            text: '出价'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});