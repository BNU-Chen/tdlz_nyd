/*
 * File: app/view/MyViewport.js
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

Ext.define('MyApp.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.chart.Chart',
        'Ext.util.Point',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.Legend',
        'Ext.form.Panel',
        'Ext.form.field.Date',
        'Ext.form.field.ComboBox',
        'Ext.button.Button'
    ],

    layout: 'fit',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    height: 499,
                    width: 692,
                    layout: 'border',
                    items: [
                        {
                            xtype: 'panel',
                            region: 'center',
                            title: '交易价格趋势图',
                            items: [
                                {
                                    xtype: 'chart',
                                    autoRender: true,
                                    height: 352,
                                    width: 691,
                                    animate: true,
                                    insetPadding: 20,
                                    store: 'TaishiPrice',
                                    axes: [
                                        {
                                            type: 'Category',
                                            fields: [
                                                'jysj'
                                            ],
                                            label: {
                                                rotation: {
                                                    degrees: 45
                                                }
                                            },
                                            title: '交易时间',
                                            position: 'bottom'
                                        },
                                        {
                                            type: 'Numeric',
                                            fields: [
                                                'jesum'
                                            ],
                                            title: '交易总价价格（万元）',
                                            position: 'left'
                                        },
                                        {
                                            type: 'Numeric',
                                            fields: [
                                                'djavg'
                                            ],
                                            position: 'right',
                                            title: '交易单价价格（万元）'
                                        }
                                    ],
                                    series: [
                                        {
                                            type: 'line',
                                            highlight: {
                                                size: 7,
                                                radius: 7
                                            },
                                            tips: {
                                                trackMouse: true,
                                                width: 350,
                                                height: 20,
                                                renderer: function(storeItem, item) {
                                                    this.setTitle(storeItem.get('jysj') +storeItem.get('jyqy')+ '的交易总价为: ' + storeItem.get('jesum') + ' 万元');
                                                }
                                            },
                                            title: '总价',
                                            xField: 'jysj',
                                            yField: 'jesum',
                                            markerConfig: {
                                                type: 'circle',
                                                size: 4,
                                                radius: 4,
                                                'stroke-width': 0
                                            }
                                        },
                                        {
                                            type: 'line',
                                            highlight: {
                                                size: 7,
                                                radius: 7
                                            },
                                            tips: {
                                                trackMouse: true,
                                                width: 350,
                                                height: 20,
                                                renderer: function(storeItem, item) {
                                                    this.setTitle(storeItem.get('jysj') +storeItem.get('jyqy')+ '的交易单价平均为: ' + storeItem.get('djavg') + ' 万元');
                                                }
                                            },
                                            title: '单价',
                                            axis: 'right',
                                            xField: 'jysj',
                                            yField: 'djavg',
                                            markerConfig: {
                                                type: 'circle',
                                                size: 4,
                                                radius: 4,
                                                'stroke-width': 0
                                            }
                                        }
                                    ],
                                    legend: {
                                        position: 'right'
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            region: 'north',
                            height: 90,
                            layout: 'absolute',
                            bodyPadding: 10,
                            title: '查询条件',
                            items: [
                                {
                                    xtype: 'datefield',
                                    x: 10,
                                    y: 20,
                                    id: 'TaishiPriceDateField1',
                                    width: 180,
                                    fieldLabel: '起始时间',
                                    labelWidth: 60,
                                    emptyText: '请选择日期',
                                    format: 'Y-m-d'
                                },
                                {
                                    xtype: 'datefield',
                                    x: 220,
                                    y: 20,
                                    id: 'TaishiPriceDateField2',
                                    width: 180,
                                    fieldLabel: '结束时间',
                                    labelWidth: 60,
                                    emptyText: '请选择日期',
                                    format: 'Y-m-d'
                                },
                                {
                                    xtype: 'combobox',
                                    x: 430,
                                    y: 20,
                                    id: 'TaishiPriceTextField',
                                    width: 180,
                                    fieldLabel: '交易区域',
                                    labelWidth: 60,
                                    name: 'TaishiPriceTextField',
                                    emptyText: '请选择区域',
                                    displayField: 'name',
                                    queryMode: 'local',
                                    store: 'TaishiPriceCombox',
                                    valueField: 'value'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, event) {
                                        var getDate1 = Ext.util.Format.date(Ext.getCmp('TaishiPriceDateField1').getValue(),'Y-m-d');
                                        var getDate2 = Ext.util.Format.date(Ext.getCmp('TaishiPriceDateField2').getValue(),'Y-m-d');
                                        var getKeyword = Ext.getCmp('TaishiPriceTextField').getRawValue();
                                        var mystore=Ext.StoreMgr.get('TaishiPrice'); //获得store对象
                                        /*/在load事件中添加参数
                                        mystore.load(
                                        {params:{
                                            searchDate1:getDate1,
                                            searchDate2:getDate2,
                                            searchKeyword:getKeyword
                                        }
                                    }
                                    );
                                    /*/
                                    mystore.on('beforeload', function (store, options) {
                                        var new_params1 = {searchDate1:getDate1};
                                        var new_params2 = {searchDate2:getDate2};
                                        var new_params3 = {searchKeyword:getKeyword};
                                        Ext.apply(store.proxy.extraParams, new_params1);
                                        Ext.apply(store.proxy.extraParams, new_params2);
                                        Ext.apply(store.proxy.extraParams, new_params3);
                                    });
                                    mystore.load({ params: { start: 0, limit: 20} });

                                    },
                                    x: 640,
                                    y: 20,
                                    width: 60,
                                    text: '查询'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});