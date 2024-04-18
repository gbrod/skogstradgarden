var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Googlesatellite_2 = new ol.layer.Tile({
            'title': 'Google satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Vxt_3 = new ol.format.GeoJSON();
var features_Vxt_3 = format_Vxt_3.readFeatures(json_Vxt_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vxt_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vxt_3.addFeatures(features_Vxt_3);
var lyr_Vxt_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vxt_3, 
                style: style_Vxt_3,
                popuplayertitle: "Växt",
                interactive: true,
                title: '<img src="styles/legend/Vxt_3.png" /> Växt'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleMaps_1.setVisible(true);lyr_Googlesatellite_2.setVisible(true);lyr_Vxt_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr_Googlesatellite_2,lyr_Vxt_3];
lyr_Vxt_3.set('fieldAliases', {'Växter': 'Växter', 'lat': 'lat', 'lon': 'lon', });
lyr_Vxt_3.set('fieldImages', {'Växter': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_Vxt_3.set('fieldLabels', {'Växter': 'no label', 'lat': 'no label', 'lon': 'no label', });
lyr_Vxt_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});