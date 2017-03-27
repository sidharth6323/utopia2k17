app.controller("homeCtrl", function($scope, $state) {
    $("#back2").hide();
    $("#back3").hide();
    $(".heading").addClass('headinganim');
    $(".subhead").addClass("fadeinanim");
    setTimeout(function() {
        $(".subhead").css("opacity", "1");
        $(".heading").css('top', '-133%');
        $(".subhead").removeClass("fadeinanim");
        $(".heading").removeClass('headinganim');
    }, 2300);

    function changeback() {
        setTimeout(function() {
            $("#back1").fadeOut(1000);
            $("#back2").show();
        }, 2000);
        setTimeout(function() {
            $("#back2").fadeOut(1000);
            $("#back3").show();
        }, 5000);
        setTimeout(function() {
            $("#back3").fadeOut(1000);
            $("#back1").fadeIn();
        }, 8000);
    }
    changeback();
    setInterval(changeback, 8002);

    $scope.gotosecond = function() {
        $state.go('days');
    }

});

app.controller("eventslistCtrl", function($scope, $state) {
    $scope.currentday = window.localStorage.getItem('currentday');
    console.log($scope.currentday);
    $scope.gotoevent = function(event, category) {
        console.log(event);
        window.localStorage.setItem('currentevent', event);
        window.localStorage.setItem('currentcategory', category);
        $state.go('event');
    }
    $scope.eventsday1 = { "event Name 1": ["cultural", "2:00am"], "event Name 2": ["tech", "2:30pm"], "event Name 3": ["fun", "3:00pm"], "event name 4": ["sports", "2:00pm"], "event name 5": ["literary", "2:00am"] };
    $scope.getEvents = function(id) {
        console.log("eventsday" + id);
        return $scope["eventsday" + id]
    }
});

app.controller("daysCtrl", function($scope, $state) {

    $scope.days = { 8: 1, 9: 2, 10: 3, 11: 4, 12: 5, 13: 6, 14: 7, 15: 8 };
    $scope.gotodays = function(event) {
        console.log(event);
        $scope.currentday = event;
        window.localStorage.setItem('currentday', $scope.currentday);
        $state.go('eventslist');

    }
});

app.controller("eventCtrl", function($scope) {

    console.log("in event controller");
    $scope.currentevent = window.localStorage.getItem('currentevent');
    $scope.currentcategory = window.localStorage.getItem('currentcategory');
    $scope.eventarray = {
        "event Name 1": { "venue": "xyz", "timings": "2:00pm", "contact": ["Sid", "Nagpal", "Shubham", "Deora"], "rules": ["some shit", "soome more shit", "extra shit", "shit ended"] }
    }
    $scope.currentdict = $scope.eventarray[$scope.currentevent];
    console.log($scope.currentcategory);
});

app.controller("resultsCtrl", function($scope, $http) {
    console.log("in results controller");
    $http.get("https://raw.githubusercontent.com/sidharth6323/utopia2k17/master/results.json").then(function(data) {
        console.log(data.data);
        $scope.results = data.data;
    });


    $scope.doRefresh = function() {
        $http.get("https://raw.githubusercontent.com/sidharth6323/utopia2k17/master/results.json").then(function(data) {
                console.log(data.data);
                $scope.results = data.data;
            })
            .finally(function() {
                // Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');
            });
    };

})
