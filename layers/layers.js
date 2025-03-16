var wms_layers = [];

var format_NGETAL_YURIDIS_0 = new ol.format.GeoJSON();
var features_NGETAL_YURIDIS_0 = format_NGETAL_YURIDIS_0.readFeatures(json_NGETAL_YURIDIS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NGETAL_YURIDIS_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NGETAL_YURIDIS_0.addFeatures(features_NGETAL_YURIDIS_0);
var lyr_NGETAL_YURIDIS_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NGETAL_YURIDIS_0, 
                style: style_NGETAL_YURIDIS_0,
                popuplayertitle: 'NGETAL_YURIDIS',
                interactive: true,
    title: 'NGETAL_YURIDIS<br />\
    <img src="styles/legend/NGETAL_YURIDIS_0_0.png" /> K3.3<br />\
    <img src="styles/legend/NGETAL_YURIDIS_0_1.png" /> K4<br />\
    <img src="styles/legend/NGETAL_YURIDIS_0_2.png" /> <br />' });

lyr_NGETAL_YURIDIS_0.setVisible(true);
var layersList = [lyr_NGETAL_YURIDIS_0];
lyr_NGETAL_YURIDIS_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'ID': 'ID', 'NIB': 'NIB', 'NUB': 'NUB', 'SHM': 'SHM', 'NIB_K4': 'NIB_K4', 'PEMILIK': 'PEMILIK', 'SURAT_UKUR': 'SURAT_UKUR', 'KLUSTER': 'KLUSTER', 'Text': 'Text', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'KETERANGAN': 'KETERANGAN', });
lyr_NGETAL_YURIDIS_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'ID': 'TextEdit', 'NIB': 'TextEdit', 'NUB': 'TextEdit', 'SHM': 'TextEdit', 'NIB_K4': 'TextEdit', 'PEMILIK': 'TextEdit', 'SURAT_UKUR': 'TextEdit', 'KLUSTER': 'TextEdit', 'Text': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'KETERANGAN': 'TextEdit', });
lyr_NGETAL_YURIDIS_0.set('fieldLabels', {'OBJECTID': 'no label', 'Join_Count': 'no label', 'TARGET_FID': 'no label', 'ID': 'inline label - always visible', 'NIB': 'no label', 'NUB': 'no label', 'SHM': 'no label', 'NIB_K4': 'no label', 'PEMILIK': 'no label', 'SURAT_UKUR': 'no label', 'KLUSTER': 'no label', 'Text': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'KETERANGAN': 'no label', });
lyr_NGETAL_YURIDIS_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});