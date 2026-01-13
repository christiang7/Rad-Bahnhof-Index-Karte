var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Radverkehrsanlagen_1 = new ol.format.GeoJSON();
var features_Radverkehrsanlagen_1 = format_Radverkehrsanlagen_1.readFeatures(json_Radverkehrsanlagen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Radverkehrsanlagen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radverkehrsanlagen_1.addFeatures(features_Radverkehrsanlagen_1);
var lyr_Radverkehrsanlagen_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radverkehrsanlagen_1, 
                style: style_Radverkehrsanlagen_1,
                popuplayertitle: 'Radverkehrsanlagen',
                interactive: false,
    title: 'Radverkehrsanlagen<br />\
    <img src="styles/legend/Radverkehrsanlagen_1_0.png" /> Bussonderfahrstreifen<br />\
    <img src="styles/legend/Radverkehrsanlagen_1_1.png" /> Radfahrstreifen<br />\
    <img src="styles/legend/Radverkehrsanlagen_1_2.png" /> Radwege<br />\
    <img src="styles/legend/Radverkehrsanlagen_1_3.png" /> Schutzstreifen<br />\
    <img src="styles/legend/Radverkehrsanlagen_1_4.png" /> <br />' });
var format_VerkehrsmengeEintreffend_2 = new ol.format.GeoJSON();
var features_VerkehrsmengeEintreffend_2 = format_VerkehrsmengeEintreffend_2.readFeatures(json_VerkehrsmengeEintreffend_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VerkehrsmengeEintreffend_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VerkehrsmengeEintreffend_2.addFeatures(features_VerkehrsmengeEintreffend_2);
var lyr_VerkehrsmengeEintreffend_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VerkehrsmengeEintreffend_2, 
                style: style_VerkehrsmengeEintreffend_2,
                popuplayertitle: 'Verkehrsmenge: Eintreffend',
                interactive: false,
    title: 'Verkehrsmenge: Eintreffend<br />\
    <img src="styles/legend/VerkehrsmengeEintreffend_2_0.png" /> 0 - 500<br />\
    <img src="styles/legend/VerkehrsmengeEintreffend_2_1.png" /> 500 - 1000<br />\
    <img src="styles/legend/VerkehrsmengeEintreffend_2_2.png" /> 1000 - 2000<br />\
    <img src="styles/legend/VerkehrsmengeEintreffend_2_3.png" /> 2000 - 4500<br />\
    <img src="styles/legend/VerkehrsmengeEintreffend_2_4.png" /> 4500 - 6500<br />\
    <img src="styles/legend/VerkehrsmengeEintreffend_2_5.png" /> 6500 - 10000<br />\
    <img src="styles/legend/VerkehrsmengeEintreffend_2_6.png" /> 10000 - 21776<br />' });
var format_StationsMultiModalAccessibility_3 = new ol.format.GeoJSON();
var features_StationsMultiModalAccessibility_3 = format_StationsMultiModalAccessibility_3.readFeatures(json_StationsMultiModalAccessibility_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StationsMultiModalAccessibility_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationsMultiModalAccessibility_3.addFeatures(features_StationsMultiModalAccessibility_3);
var lyr_StationsMultiModalAccessibility_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StationsMultiModalAccessibility_3, 
                style: style_StationsMultiModalAccessibility_3,
                popuplayertitle: 'Stations: MultiModalAccessibility',
                interactive: true,
    title: 'Stations: MultiModalAccessibility<br />\
    <img src="styles/legend/StationsMultiModalAccessibility_3_0.png" /> 0,07 - 0,355<br />\
    <img src="styles/legend/StationsMultiModalAccessibility_3_1.png" /> 0,355 - 0,371<br />\
    <img src="styles/legend/StationsMultiModalAccessibility_3_2.png" /> 0,371 - 0,396<br />\
    <img src="styles/legend/StationsMultiModalAccessibility_3_3.png" /> 0,396 - 0,467<br />\
    <img src="styles/legend/StationsMultiModalAccessibility_3_4.png" /> 0,467 - 0,547<br />\
    <img src="styles/legend/StationsMultiModalAccessibility_3_5.png" /> 0,547 - 0,582<br />\
    <img src="styles/legend/StationsMultiModalAccessibility_3_6.png" /> 0,582 - 0,597<br />\
    <img src="styles/legend/StationsMultiModalAccessibility_3_7.png" /> 0,597 - 0,621<br />\
    <img src="styles/legend/StationsMultiModalAccessibility_3_8.png" /> 0,621 - 0,674<br />\
    <img src="styles/legend/StationsMultiModalAccessibility_3_9.png" /> 0,674 - 0,77<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Radverkehrsanlagen_1.setVisible(false);lyr_VerkehrsmengeEintreffend_2.setVisible(true);lyr_StationsMultiModalAccessibility_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Radverkehrsanlagen_1,lyr_VerkehrsmengeEintreffend_2,lyr_StationsMultiModalAccessibility_3];
lyr_Radverkehrsanlagen_1.set('fieldAliases', {'importid': 'importid', 'sobj_kz': 'sobj_kz', 'segm_segm': 'segm_segm', 'segm_bez': 'segm_bez', 'stst_str': 'stst_str', 'stor_name': 'stor_name', 'ortstl': 'ortstl', 'rva_typ': 'rva_typ', 'sorvt_typ': 'sorvt_typ', 'laenge': 'laenge', 'b_pflicht': 'b_pflicht', });
lyr_VerkehrsmengeEintreffend_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'capacity_int': 'capacity_int', 'anzahl_diebstaehle': 'anzahl_diebstaehle', 'mikromobilitaetsangebote': 'mikromobilitaetsangebote', 'unfaelle': 'unfaelle', 'mobility_access': 'mobility_access', 'Column 17': 'Column 17', 'volume_incoming': 'volume_incoming', 'volume_outgoing': 'volume_outgoing', 'capacity_index': 'capacity_index', 'diebstaehle_index': 'diebstaehle_index', 'acsess_index': 'acsess_index', 'unfaelle_index': 'unfaelle_index', 'Mikromobilität_index': 'Mikromobilität_index', 'Gesamtindex': 'Gesamtindex', });
lyr_StationsMultiModalAccessibility_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'capacity_int': 'capacity_int', 'anzahl_diebstaehle': 'anzahl_diebstaehle', 'mikromobilitaetsangebote': 'mikromobilitaetsangebote', 'unfaelle': 'unfaelle', 'mobility_access': 'mobility_access', 'Column 17': 'Column 17', 'volume_incoming': 'volume_incoming', 'volume_outgoing': 'volume_outgoing', 'capacity_index': 'Indexwert Radabstellplätze', 'diebstaehle_index': 'Indexwert Diebstähle', 'acsess_index': 'Indexwert Barrierefreiheit', 'unfaelle_index': 'Indexwert Unfälle', 'Mikromobilität_index': 'Indexwert Mikromobilität', 'Gesamtindex': 'MMA-Gesamtindex', });
lyr_Radverkehrsanlagen_1.set('fieldImages', {'importid': 'Range', 'sobj_kz': 'TextEdit', 'segm_segm': 'TextEdit', 'segm_bez': 'TextEdit', 'stst_str': 'TextEdit', 'stor_name': 'TextEdit', 'ortstl': 'TextEdit', 'rva_typ': 'TextEdit', 'sorvt_typ': 'TextEdit', 'laenge': 'Range', 'b_pflicht': 'TextEdit', });
lyr_VerkehrsmengeEintreffend_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'capacity_int': 'Range', 'anzahl_diebstaehle': 'Range', 'mikromobilitaetsangebote': 'Range', 'unfaelle': 'Range', 'mobility_access': 'TextEdit', 'Column 17': 'TextEdit', 'volume_incoming': 'TextEdit', 'volume_outgoing': 'TextEdit', 'capacity_index': 'TextEdit', 'diebstaehle_index': 'TextEdit', 'acsess_index': 'TextEdit', 'unfaelle_index': 'TextEdit', 'Mikromobilität_index': 'TextEdit', 'Gesamtindex': 'TextEdit', });
lyr_StationsMultiModalAccessibility_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'capacity_int': 'Range', 'anzahl_diebstaehle': 'Range', 'mikromobilitaetsangebote': 'Range', 'unfaelle': 'Range', 'mobility_access': 'TextEdit', 'Column 17': 'TextEdit', 'volume_incoming': 'TextEdit', 'volume_outgoing': 'TextEdit', 'capacity_index': 'TextEdit', 'diebstaehle_index': 'TextEdit', 'acsess_index': 'TextEdit', 'unfaelle_index': 'TextEdit', 'Mikromobilität_index': 'TextEdit', 'Gesamtindex': 'TextEdit', });
lyr_Radverkehrsanlagen_1.set('fieldLabels', {'importid': 'no label', 'sobj_kz': 'no label', 'segm_segm': 'no label', 'segm_bez': 'no label', 'stst_str': 'no label', 'stor_name': 'no label', 'ortstl': 'no label', 'rva_typ': 'no label', 'sorvt_typ': 'no label', 'laenge': 'no label', 'b_pflicht': 'no label', });
lyr_VerkehrsmengeEintreffend_2.set('fieldLabels', {'id': 'hidden field', 'name': 'hidden field', 'capacity_int': 'hidden field', 'anzahl_diebstaehle': 'hidden field', 'mikromobilitaetsangebote': 'hidden field', 'unfaelle': 'hidden field', 'mobility_access': 'hidden field', 'Column 17': 'hidden field', 'volume_incoming': 'hidden field', 'volume_outgoing': 'hidden field', 'capacity_index': 'inline label - always visible', 'diebstaehle_index': 'inline label - always visible', 'acsess_index': 'inline label - always visible', 'unfaelle_index': 'inline label - always visible', 'Mikromobilität_index': 'inline label - always visible', 'Gesamtindex': 'inline label - always visible', });
lyr_StationsMultiModalAccessibility_3.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', 'capacity_int': 'hidden field', 'anzahl_diebstaehle': 'hidden field', 'mikromobilitaetsangebote': 'hidden field', 'unfaelle': 'hidden field', 'mobility_access': 'hidden field', 'Column 17': 'hidden field', 'volume_incoming': 'hidden field', 'volume_outgoing': 'hidden field', 'capacity_index': 'inline label - always visible', 'diebstaehle_index': 'inline label - always visible', 'acsess_index': 'inline label - always visible', 'unfaelle_index': 'inline label - always visible', 'Mikromobilität_index': 'inline label - always visible', 'Gesamtindex': 'inline label - always visible', });
lyr_StationsMultiModalAccessibility_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});