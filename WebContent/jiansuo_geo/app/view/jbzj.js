/*
 * File: app/view/jbzj.js
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

Ext.define('MyApp.view.jbzj', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.jbzj',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.Img',
        'Ext.form.Label',
        'Ext.form.Panel',
        'Ext.form.field.Display',
        'Ext.form.field.File',
        'Ext.button.Button'
    ],

    height: 750,
    id: 'jbzj',
    width: 950,
    autoScroll: true,
    layout: 'absolute',
    title: '<font size=2.5px>交保证金</font>',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    x: 137,
                    y: 8,
                    dock: 'top',
                    height: 50,
                    items: [
                        {
                            xtype: 'image',
                            height: 40,
                            width: 618,
                            src: 'images/lc3.png'
                        },
                        {
                            xtype: 'label',
                            height: 12,
                            style: {
                                fontSize: '12px',
                                cursor: 'pointer',
                                color: 'blue'
                            },
                            width: 84,
                            text: '我的购买指标',
                            listeners: {
                                click: {
                                    fn: me.onLabelClick11,
                                    element: 'el',
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'form',
                    x: 90,
                    y: 20,
                    height: 270,
                    id: 'bzj',
                    width: 740,
                    layout: 'absolute',
                    bodyPadding: 10,
                    title: '指标信息',
                    url: '../scbzj',
                    items: [
                        {
                            xtype: 'displayfield',
                            x: 40,
                            y: 20,
                            fieldLabel: '批次编号',
                            name: 'zbpcbh',
                            submitValue: true
                        },
                        {
                            xtype: 'displayfield',
                            x: 430,
                            y: 20,
                            fieldLabel: '总数量',
                            name: 'sl'
                        },
                        {
                            xtype: 'displayfield',
                            x: 430,
                            y: 70,
                            fieldLabel: '申购数量',
                            name: 'sgsl'
                        },
                        {
                            xtype: 'displayfield',
                            x: 40,
                            y: 120,
                            itemId: 'sgze',
                            fieldLabel: '申购总额',
                            name: 'dj'
                        },
                        {
                            xtype: 'displayfield',
                            x: 40,
                            y: 170,
                            itemId: 'yjbzj',
                            fieldLabel: '应交保证金',
                            name: 'yjbzj'
                        },
                        {
                            xtype: 'displayfield',
                            x: 40,
                            y: 210,
                            width: 630,
                            fieldLabel: '备注',
                            name: 'pcbz'
                        },
                        {
                            xtype: 'displayfield',
                            x: 40,
                            y: 70,
                            fieldLabel: '单位额度',
                            name: 'dwed'
                        },
                        {
                            xtype: 'displayfield',
                            x: 430,
                            y: 120,
                            fieldLabel: '竞价开始日期',
                            name: 'jjksrq'
                        },
                        {
                            xtype: 'filefield',
                            x: 430,
                            y: 170,
                            width: 240,
                            fieldLabel: '上传支付凭证',
                            name: 'sczfpz',
                            allowBlank: false,
                            blankText: '不能为空',
                            regex: /(.jpg)$/,
                            regexText: '必须为JPG格式',
                            buttonText: '浏览',
                            clearOnSubmit: false,
                            listeners: {
                                change: {
                                    fn: me.onFilefieldChange,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'label',
                            x: 555,
                            y: 25,
                            text: '张'
                        },
                        {
                            xtype: 'label',
                            x: 170,
                            y: 75,
                            text: '公顷/张'
                        }
                    ]
                },
                {
                    xtype: 'image',
                    x: 90,
                    y: 300,
                    height: 290,
                    width: 740,
                    alt: '保证金支付凭证'
                },
                {
                    xtype: 'button',
                    handler: function(button, event) {
                        var panel=Ext.getCmp('contentPanel');

                        var zbsg=Ext.widget('wdsglb');
                        panel.removeAll();
                        panel.add(zbsg);
                    },
                    x: 300,
                    y: 620,
                    height: 25,
                    width: 100,
                    text: '<font size=2.5>上一步</font>'
                },
                {
                    xtype: 'button',
                    handler: function(button, event) {
                        var zbpcbh=Ext.getCmp('jbzj').items.get(0).items.get(0).getValue();
                        var form=Ext.getCmp('bzj');
                        if(form.isValid())
                        {

                            Ext.Ajax.request(
                            {
                                url:'bzjsh',
                                method:'get',
                                headers:{

                                    'Content-Type':'application/json'
                                },

                                success:function(response){


                                    var store=Ext.StoreMgr.get('zbgmstore');
                                    var n=store.find('zbpcbh',zbpcbh);
                                    store.getAt(n).set('pczt','待审核');

                                    Ext.MessageBox.alert('提示','已经提交保证金交纳凭证，正在等待管理员审核',function(){
                                        var panel=Ext.getCmp('contentPanel');

                                        var zbsg=Ext.widget('wdsglb');
                                        panel.removeAll();
                                        panel.add(zbsg);

                                    });
                                },


                                failure:function(){
                                    //Ext.MessageBox.alert('错误','操作失败！');
                                },
                                params:{'bh':zbpcbh}

                            });
                        }
                        else
                        {
                            Ext.MessageBox.alert('提示','请先上传所有凭证');
                        }
                    },
                    x: 490,
                    y: 620,
                    height: 25,
                    style: {
                        background: '#ffa500',
                        border: 'none',
                        borderColor: 'white'
                    },
                    width: 100,
                    text: '<font size=2.5 color=\'white\'>提交</font>'
                }
            ]
        });

        me.callParent(arguments);
    },

    onLabelClick11: function(label) {

        var panel=Ext.getCmp('contentPanel');

        var zbsg=Ext.widget('wdsglb');
        panel.removeAll();
        panel.add(zbsg);

    },

    onFilefieldChange: function(filefield, value, eOpts) {
        var form=Ext.getCmp('bzj');

        if(form.isValid())
        form.getForm().submit(
        {

            // method:'post',
            waitMsg: '正在上传......',
            success:function(form, action){

                var photoUrl=action.result.msg;
                // alert(photoUrl);
                var photo=Ext.getCmp('jbzj').items.get(1);
                //alert(photo.getId());
                photo.getEl().dom.src=photoUrl;

            },
            failure:function(){
                Ext.MessageBox.alert('提示','操作失败！');
            }

        }
        );
    }

});