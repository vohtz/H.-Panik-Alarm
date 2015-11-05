$.ajax({
    url:'http://localhost/HesehusAlarm/data.json',
    dataType: 'json',
    type: 'get',
    cache: 'false',
    success: function(obj) {
        var sensors = obj.sensors;
        var counter = 0;
        var sortedObj = sortJSON(sensors,'priority', 'des'); // asc or des
            
        function sortJSON(key, value, way) {
            return sensors.sort(function(a, b) {
                var x = a[value]; var y = b[value];
                if (way === 'asc' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); } // ascend
                if (way === 'des') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); } // descend
            });
        }

        function insertContent(){
	        $.each(sortedObj, function(key, value){
	            var $status = value.status;
	            var $name = value.group;
	            var $time = value.downtimesince;
	            var $team = value.tags;
	            var $priority = value.priority;

	            if ($status.indexOf("Down") === 0 && $priority >= 3){
	                $(".indicator").addClass("red");
	                    $("#list").append('<div class="listItem"><div class="name">' + $name + '</div><div class="team">' + $team + '</div><div class="time">' + $time + '</div></div>');
	                    counter++;
	            } else {
	                $(".indicator").addClass("green");
	            };
	        });
    	}
    	function addCounter(){
	        if (counter >= 3) {
	            $(".circle").append("<span>" + counter + "</span>");
	            //console.log(counter);
	        };  
    	}
    	insertContent();
    	addCounter();
    }
});