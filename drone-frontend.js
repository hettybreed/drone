function init() {
    tracker = initTracker("#example");
    tracking.track("#example .drone", tracker);
}

function initTracker(element) {
    // Initialise a color tracker
    var tracker = new tracking.ColorTracker();
    TrackerUtils.addTrackingColor("#56A967", "green", tracker);
    TrackerUtils.addTrackingColor("#53AD76", "green", tracker);
    TrackerUtils.addTrackingColor("#45823C", "green", tracker);
    //TrackerUtils.addTrackingColor("#A34641", "red", tracker);
    //TrackerUtils.addTrackingColor("#B34F46", "red", tracker);
    //TrackerUtils.addTrackingColor("#CC7E82", "red", tracker);
    TrackerUtils.addTrackingColor("#A84B49", "red", tracker);
    TrackerUtils.addTrackingColor("#CB8083", "lightred", tracker);
    TrackerUtils.addTrackingColor("#C7BD47", "yellow", tracker);
    TrackerUtils.addTrackingColor("#A89A2F", "yellow", tracker);
    TrackerUtils.addTrackingColor("#C7BD47", "yellow", tracker);
    TrackerUtils.startTrackingColors(tracker);



    // Whenever there is a new color detected, mark them
    tracker.on('track', function(event) {
      //  console.log(event.data);
        markColors(event.data, element);
    });

    return tracker;
}
function markColors(colors, element){
    var canvas = $(element + ' .canvas').get(0);
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, context.width, context.height);

    for (var i = 0; i < colors.length; i++) {
        drawRectangle(colors[i], context);
        writeRectangle(colors[i], element + " .output");
    }


    function drawRectangle(rect, context) {
        context.strokeStyle = rect.color;
        context.strokeRect(rect.x, rect.y, rect.width, rect.height);
    }

function writeRectangle(rect, element){
    $(element)
        .append("<p>")
        .append(rect.color + ": " + rect.width + "X" + rect.height)
        .append(" @ " + rect.x + ":" + rect.y)
}


    //do the marking
}

window.addEventListener("load", init);
