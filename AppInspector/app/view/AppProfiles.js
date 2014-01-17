/*
 * File: app/view/AppProfiles.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
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

Ext.define('AI.view.AppProfiles', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.appprofiles',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.tab.Tab',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Spacer'
    ],

    itemId: 'ProfilesPanel',
    title: 'Layout Profiling',
    activeTab: 0,
    tabPosition: 'right',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    itemId: 'Overnested',
                    title: 'Overnesting',
                    store: 'Overnested',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'cmpId',
                            text: 'Component ID',
                            flex: 1
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'xtype',
                            text: 'XType',
                            flex: 1
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'ProfileOvernesting',
                                    iconCls: 'x-tbar-loading',
                                    text: 'Profile'
                                },
                                {
                                    xtype: 'tbspacer',
                                    flex: 1
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        Ext.Msg.alert(
                                        'Overnesting',
                                        'Utility to find components which may be overnested inside the application.'
                                        );
                                    },
                                    text: '?'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    itemId: 'BoxLayouts',
                    title: 'Box Layouts',
                    store: 'BoxLayouts',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'cmpId',
                            text: 'Component ID',
                            flex: 1
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'xtype',
                            text: 'XType',
                            flex: 1
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'ProfileBoxLayouts',
                                    iconCls: 'x-tbar-loading',
                                    text: 'Profile'
                                },
                                {
                                    xtype: 'tbspacer',
                                    flex: 1
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        Ext.Msg.alert(
                                        'Box Layouts',
                                        'Utility to find nested box layouts inside the application which may contribute to performance issues.'
                                        );
                                    },
                                    text: '?'
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