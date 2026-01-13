var size = 0;
var placement = 'point';

var style_VerkehrsmengeEintreffend_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("volume_incoming");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 500.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(28,90,178,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 500.000000 && value <= 1000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.033333333333333 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(28,90,178,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1000.000000 && value <= 2000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0666666666666655 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(28,90,178,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2000.000000 && value <= 4500.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.099999999999998 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(28,90,178,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 4500.000000 && value <= 6500.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.133333333333331 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(28,90,178,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 6500.000000 && value <= 10000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 12.166666666666664 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(28,90,178,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 10000.000000 && value <= 21776.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 14.199999999999998 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(28,90,178,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
