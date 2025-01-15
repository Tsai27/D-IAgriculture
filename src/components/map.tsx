/*
 * @Author: Tsai27
 * @Date: 2024-12-23 10:47:53
 */
'use client'
import React, { useEffect } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';

const AMapExample = () => {
    useEffect(() => {
        AMapLoader.load({
            "key": "8d90e61c2a69ebafd61a3ced4bd01876",   // 申请好的Web端开发者Key，首次调用 load 时必填
            "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            "plugins": ["AMap.MapType", "AMap.ToolBar"]  // 加载地图类型切换插件和工具栏插件
        }).then((AMap) => {
            // 创建地图实例
            let amap = new AMap.Map('mapContainer', {
                zoom: 16,  // 初始化地图层级
                center: [116.3280, 39.96203]  // 初始化地图中心点
            });

            // 创建标记
            let marker = new AMap.Marker({
                position: [116.3280, 39.96203]  // 标记位置
            });

            // 将标记添加到地图
            amap.add(marker);

            // 创建地图类型控件
            let mapType = new AMap.MapType({
                defaultType: AMap.MapType.HYBRID // 默认显示卫星图
            });

            // 将地图类型控件添加到地图上
            amap.addControl(mapType);

            // 创建并添加工具栏控件
            let toolBar = new AMap.ToolBar();
            amap.addControl(toolBar);  // 将工具栏控件添加到地图上
        }).catch(e => {
            console.log(e);
        });
    }, []);

    return (
        <div id="mapContainer" style={{ width: '100%', height: '400px' }}></div>
    );
};

export default AMapExample;
