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
var format_vaxt_3 = new ol.format.GeoJSON();
var features_vaxt_3 = format_vaxt_3.readFeatures(json_vaxt_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vaxt_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vaxt_3.addFeatures(features_vaxt_3);
var lyr_vaxt_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vaxt_3, 
                style: style_vaxt_3,
                popuplayertitle: "vaxt",
                interactive: true,
                title: '<img src="styles/legend/vaxt_3.png" /> vaxt'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleMaps_1.setVisible(false);lyr_Googlesatellite_2.setVisible(true);lyr_vaxt_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr_Googlesatellite_2,lyr_vaxt_3];
lyr_vaxt_3.set('fieldAliases', {'Växter': 'Växter', 'lat': 'lat', 'lon': 'lon', });
lyr_vaxt_3.set('fieldImages', {'Växter': '', 'lat': '', 'lon': '', });
lyr_vaxt_3.set('fieldLabels', {'Växter': 'inline label - visible with data', 'lat': 'hidden field', 'lon': 'hidden field', });
lyr_vaxt_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});