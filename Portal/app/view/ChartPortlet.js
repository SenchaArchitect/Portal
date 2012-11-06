/*
 * File: app/view/ChartPortlet.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.ChartPortlet', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.chartportlet',

    isPortlet: true,
    cls: 'x-portlet',
    draggable: {
        moveOnDrag: false
    },
    frame: true,
    height: 300,
    layout: {
        type: 'fit'
    },
    closable: true,
    collapsible: true,
    title: 'Chart Portlet',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'chart',
                    shadow: false,
                    animate: false,
                    insetPadding: 20,
                    store: 'ChartStore',
                    axes: [
                        {
                            type: 'Numeric',
                            fields: [
                                'djia'
                            ],
                            position: 'left',
                            title: 'Dow Jones Average'
                        },
                        {
                            type: 'Numeric',
                            fields: [
                                'sp500'
                            ],
                            grid: false,
                            position: 'right',
                            title: 'S&P 500'
                        }
                    ],
                    series: [
                        {
                            type: 'line',
                            xField: 'name',
                            yField: [
                                'djia'
                            ],
                            fill: true,
                            showMarkers: false,
                            smooth: 3,
                            style: {
                                'stroke-width': 1,
                                stroke: 'rgb(148, 174, 10)'
                            }
                        },
                        {
                            type: 'line',
                            axis: 'right',
                            xField: 'name',
                            yField: [
                                'sp500'
                            ],
                            fill: false,
                            showMarkers: false,
                            smooth: 3,
                            style: {
                                'stroke-width': 1,
                                stroke: 'rgb(17, 95, 166)'
                            }
                        }
                    ],
                    legend: {

                    }
                }
            ]
        });

        me.callParent(arguments);
    }

});