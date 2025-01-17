/*
 * File: app/view/CrawlInfo.js
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

Ext.define('MyApp.view.CrawlInfo', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.CrawlInfo',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.toolbar.Paging',
        'Ext.form.Panel'
    ],

    height: 440,
    width: 757,
    autoScroll: true,
    layout: 'border',
    title: '查看检索信息',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    region: 'west',
                    width: 446,
                    title: '检索信息列表',
                    forceFit: true,
                    store: 'landinfo1',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'title'
                        },
                        {
                            xtype: 'gridcolumn',
                            hidden: true,
                            dataIndex: 'url',
                            text: 'url'
                        },
                        {
                            xtype: 'gridcolumn',
                            hidden: true,
                            dataIndex: 'region',
                            text: 'region'
                        },
                        {
                            xtype: 'numbercolumn',
                            width: 40,
                            dataIndex: 'acre',
                            text: '面积（亩）'
                        },
                        {
                            xtype: 'numbercolumn',
                            width: 40,
                            dataIndex: 'year',
                            text: '年限（年）'
                        },
                        {
                            xtype: 'datecolumn',
                            hidden: true,
                            dataIndex: 'releasedate',
                            text: 'releasedate'
                        },
                        {
                            xtype: 'gridcolumn',
                            hidden: true,
                            dataIndex: 'price',
                            text: 'price'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'textfield',
                                    id: 'JssearchField',
                                    fieldLabel: ''
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, event) {
                                        //Ext.Msg.alert('find');
                                        var mystore = Ext.StoreMgr.get('landinfo1');
                                        var outSearch=Ext.getCmp('JssearchField').getValue();

                                        mystore.on('beforeload', function (store, options) {
                                            var new_params = {  searchField: outSearch};
                                            Ext.apply(store.proxy.extraParams, new_params);
                                        });
                                        mystore.load({ params: { start: 0, limit: 10} });
                                    },
                                    width: 64,
                                    text: '检索'
                                }
                            ]
                        },
                        {
                            xtype: 'pagingtoolbar',
                            dock: 'bottom',
                            width: 360,
                            displayInfo: true,
                            emptyMsg: '没有数据',
                            store: 'landinfo1'
                        }
                    ],
                    listeners: {
                        cellclick: {
                            fn: me.onGridpanelCellClick,
                            scope: me
                        }
                    }
                },
                {
                    xtype: 'form',
                    flex: 1,
                    region: 'center',
                    id: 'allmap',
                    bodyPadding: 10,
                    title: '地图定位显示',
                    listeners: {
                        resize: {
                            fn: me.onAllmapResize,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    onGridpanelCellClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var adress = null;
        adress = record.data.region;
        title = record.data.title;
        //text = record.data.text;
        price = record.data.price;
        acre = record.data.acre;
        transtyle = record.data.transtyle;
        releasedate = record.data.releasedate;
        url = record.data.url;
        year = record.data.year;
        //Ext.Msg.alert('title',adress);


        var map = new BMap.Map("allmap");
        map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件
        map.enableScrollWheelZoom();    //启用滚轮放大缩小，默认禁用
        //var point = new BMap.Point(116.331398,39.897445);


        // 创建地址解析器实例
        var myGeo = new BMap.Geocoder();
        //var adress=Ext.getCmp('adress_field').getValue();
        if(adress){
            bdGEO(adress);
        }
        if(!adress){
            Ext.Msg.alert('提醒','此条数据无定位信息！');
        }

        function bdGEO(adress){
            // 将地址解析结果显示在地图上,并调整地图视野
            myGeo.getPoint(adress, function(point){
                if (point) {
                    map.centerAndZoom(point, 14);
                    map.addOverlay(new BMap.Marker(point));


                    //添加纯文本信息窗口
                    var opts = {
                        width : 480,     // 信息窗口宽度
                        height: 80,     // 信息窗口高度
                        offset:new BMap.Size(0, -20),
                        title: "<h3 style='margin:0 0 10px 0;padding:0.2em 0;color:red;size:'>"+title +'   '+ '<a target="_blank" style="fontsize:15px" href='+url+'>查看详情</a></h3>', // 信息窗口标题
                        enableMessage:false//设置允许信息窗发送短息

                    }
                    var infoWindow = new BMap.InfoWindow("流转方式：" + transtyle +"   "+"地理位置："+adress + "\r\n"
                    + "面积：" + acre+"  " + "年限：" + year  + "  "+ "价格："+ price, opts);  // 创建信息窗口对象
                    map.openInfoWindow(infoWindow,point); //开启信息窗口
                }
            });
        }

    },

    onAllmapResize: function(component, width, height, oldWidth, oldHeight, eOpts) {
        var map = new BMap.Map("allmap");            // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);

        map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件
        map.enableScrollWheelZoom();    //启用滚轮放大缩小，默认禁用
        var point = new BMap.Point(116.331398,39.897445);
    }

});