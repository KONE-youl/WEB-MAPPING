var wms_layers = [];

var format_District_exociv_admbnda_adm1_cntig_20160527_0 = new ol.format.GeoJSON();
var features_District_exociv_admbnda_adm1_cntig_20160527_0 = format_District_exociv_admbnda_adm1_cntig_20160527_0.readFeatures(json_District_exociv_admbnda_adm1_cntig_20160527_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_exociv_admbnda_adm1_cntig_20160527_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_exociv_admbnda_adm1_cntig_20160527_0.addFeatures(features_District_exociv_admbnda_adm1_cntig_20160527_0);
var lyr_District_exociv_admbnda_adm1_cntig_20160527_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_District_exociv_admbnda_adm1_cntig_20160527_0, 
                style: style_District_exociv_admbnda_adm1_cntig_20160527_0,
                popuplayertitle: 'District_exo — civ_admbnda_adm1_cntig_20160527',
                interactive: true,
                title: '<img src="styles/legend/District_exociv_admbnda_adm1_cntig_20160527_0.png" /> District_exo — civ_admbnda_adm1_cntig_20160527'
            });
var format_Donnes_QGIS_1 = new ol.format.GeoJSON();
var features_Donnes_QGIS_1 = format_Donnes_QGIS_1.readFeatures(json_Donnes_QGIS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Donnes_QGIS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Donnes_QGIS_1.addFeatures(features_Donnes_QGIS_1);
var lyr_Donnes_QGIS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Donnes_QGIS_1, 
                style: style_Donnes_QGIS_1,
                popuplayertitle: 'Données_QGIS',
                interactive: true,
                title: '<img src="styles/legend/Donnes_QGIS_1.png" /> Données_QGIS'
            });

lyr_District_exociv_admbnda_adm1_cntig_20160527_0.setVisible(true);lyr_Donnes_QGIS_1.setVisible(true);
var layersList = [lyr_District_exociv_admbnda_adm1_cntig_20160527_0,lyr_Donnes_QGIS_1];
lyr_District_exociv_admbnda_adm1_cntig_20160527_0.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'admin1Name': 'admin1Name', 'admin1Pcod': 'admin1Pcod', 'admin1RefN': 'admin1RefN', 'admin1AltN': 'admin1AltN', 'admin1Al_1': 'admin1Al_1', 'admin0Name': 'admin0Name', 'admin0Pcod': 'admin0Pcod', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Rowcacode1': 'Rowcacode1', });
lyr_Donnes_QGIS_1.set('fieldAliases', {'DRENA': 'DRENA', 'X': 'X', 'Y': 'Y', 'NB_ETAB': 'NB_ETAB', 'NB_ENS_SIM': 'NB_ENS_SIM', 'ENS_ETAB_HYP': 'ENS_ETAB_HYP', 'NATURE': 'NATURE', 'field_8': 'field_8', });
lyr_District_exociv_admbnda_adm1_cntig_20160527_0.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'admin1Name': 'TextEdit', 'admin1Pcod': 'TextEdit', 'admin1RefN': 'TextEdit', 'admin1AltN': 'TextEdit', 'admin1Al_1': 'TextEdit', 'admin0Name': 'TextEdit', 'admin0Pcod': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Rowcacode1': 'TextEdit', });
lyr_Donnes_QGIS_1.set('fieldImages', {'DRENA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NB_ETAB': 'Range', 'NB_ENS_SIM': 'Range', 'ENS_ETAB_HYP': 'TextEdit', 'NATURE': 'TextEdit', 'field_8': 'TextEdit', });
lyr_District_exociv_admbnda_adm1_cntig_20160527_0.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'admin1Name': 'no label', 'admin1Pcod': 'no label', 'admin1RefN': 'no label', 'admin1AltN': 'no label', 'admin1Al_1': 'no label', 'admin0Name': 'no label', 'admin0Pcod': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Rowcacode1': 'no label', });
lyr_Donnes_QGIS_1.set('fieldLabels', {'DRENA': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'NB_ETAB': 'hidden field', 'NB_ENS_SIM': 'header label - always visible', 'ENS_ETAB_HYP': 'hidden field', 'NATURE': 'hidden field', 'field_8': 'no label', });
lyr_Donnes_QGIS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});