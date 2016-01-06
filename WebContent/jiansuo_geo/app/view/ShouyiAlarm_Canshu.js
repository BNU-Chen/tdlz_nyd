/*
 * File: app/view/ShouyiAlarm_Canshu.js
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

Ext.define('MyApp.view.ShouyiAlarm_Canshu', {
    extend: 'Ext.form.Panel',
    alias: 'widget.ShouyiAlarm_Canshu',

    requires: [
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    autoRender: true,
    autoShow: true,
    height: 303,
    id: 'ShouyiAlarm_Canshu',
    width: 542,
    autoScroll: true,
    layout: 'absolute',
    title: '收益分配异常监测阈值设置',
    jsonSubmit: true,
    url: '../getBenefitList19',

    initComponent: function() {
        var me = this;

        me.initialConfig = Ext.apply({
            jsonSubmit: true,
            url: '../getBenefitList19'
        }, me.initialConfig);

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'textfield',
                    x: 20,
                    y: 20,
                    width: 240,
                    fieldLabel: '交易结束后农户资金到账最长天数',
                    labelWidth: 150,
                    name: 'dzzcts',
                    emptyText: '请填写'
                },
                {
                    xtype: 'textfield',
                    x: 280,
                    y: 20,
                    width: 240,
                    fieldLabel: '单位面积建设成本最高价格',
                    labelWidth: 150,
                    name: 'cbzgjg',
                    emptyText: '请填写'
                },
                {
                    xtype: 'textfield',
                    x: 20,
                    y: 80,
                    width: 240,
                    fieldLabel: '建设单位最高收益比例',
                    labelWidth: 150,
                    name: 'jsbl',
                    emptyText: '请填写'
                },
                {
                    xtype: 'textfield',
                    x: 280,
                    y: 80,
                    width: 240,
                    fieldLabel: '政府最高收益比例',
                    labelWidth: 150,
                    name: 'zfbl',
                    emptyText: '请填写'
                },
                {
                    xtype: 'textfield',
                    x: 20,
                    y: 130,
                    width: 240,
                    fieldLabel: '农户最高收益比例',
                    labelWidth: 150,
                    name: 'nhbl',
                    emptyText: '请填写'
                },
                {
                    xtype: 'textfield',
                    x: 280,
                    y: 130,
                    width: 240,
                    fieldLabel: '交易中心最高收益比例',
                    labelWidth: 150,
                    name: 'zxbl',
                    emptyText: '请填写'
                },
                {
                    xtype: 'textfield',
                    x: 20,
                    y: 180,
                    width: 240,
                    fieldLabel: '资金流动手续可允许最大缺失项数',
                    labelWidth: 150,
                    name: 'zdqsx',
                    emptyText: '请填写'
                },
                {
                    xtype: 'textfield',
                    x: 280,
                    y: 180,
                    width: 240,
                    fieldLabel: '举报次数',
                    labelWidth: 150,
                    name: 'jb',
                    emptyText: '请填写'
                },
                {
                    xtype: 'textfield',
                    x: 280,
                    y: 180,
                    hidden: true,
                    width: 240,
                    fieldLabel: '序号',
                    labelWidth: 150,
                    name: 'xh'
                },
                {
                    xtype: 'button',
                    handler: function(button, event) {
                        var form = Ext.getCmp('ShouyiAlarm_Canshu').getForm(); // get the basic form
                        if (form.isValid()) { // make sure the form contains valid data before submitting
                            form.submit({
                                url:'getBenefitList19',
                                success: function(form, action) {
                                    Ext.Msg.alert('提示', '收益分配异常参数更新成功！');
                                    var mystore = Ext.StoreMgr.get('ShouyiAlarm_Canshu'); //获得store对象
                                    mystore.load();
                                },
                                failure: function(form, action) {
                                    Ext.Msg.alert('提示', '收益分配异常参数更新失败！');
                                }
                            });
                        } else { // display error alert if the data is invalid
                            Ext.Msg.alert('提示', '数据无效，请修改出现的错误！');
                        }

                    },
                    x: 90,
                    y: 230,
                    width: 90,
                    text: '更新'
                },
                {
                    xtype: 'button',
                    handler: function(button, event) {
                        var tabs = this.up('tabpanel');
                        tabs.removeAll(true);
                        //用tabs.add()新增加一个tab页面,通过Ext.widget(xtype)得到文章回收站的页面
                        var newtab = tabs.add(Ext.widget('ShouyiAlarm'));


                    },
                    x: 340,
                    y: 230,
                    width: 90,
                    text: '返回'
                }
            ]
        });

        me.callParent(arguments);
    }

});