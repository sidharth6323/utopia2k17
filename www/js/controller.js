app.controller("homeCtrl",function($scope, $state){


  
 	$(".heading").addClass('headinganim');
 	$(".subhead").addClass("fadeinanim");
 	setTimeout(function(){
 		$(".subhead").css("opacity","1");
 		$(".heading").css('top','-133%');
 		$(".subhead").removeClass("fadeinanim");
 		$(".heading").removeClass('headinganim');
 	}, 2300);
	  
  $scope.gotosecond=function()
  {
  	$state.go('days');
  }

});

app.controller("eventslistCtrl",function($scope,$state){
		$scope.currentday = window.localStorage.getItem('currentday');
		console.log($scope.currentday);
		$scope.gotoevent = function(event){
				console.log(event);
				window.localStorage.setItem('currentevent', event);
				$state.go('event');
		}
		$scope.eventsday1={"event Name 1":["cultural","2:00am"],"event Name 2":["tech","2:30pm"],"event Name 3":["fun","3:00pm"],"event name 4":["sports","2:00pm"],"event name 5":["literary","2:00am"]};	
		$scope.getEvents = function(id){
			console.log("eventsday"+id); 
			return $scope["eventsday"+id]}
});

app.controller("daysCtrl",function($scope,$state){

	$scope.days = {8:1,9:2,10:3,11:4,12:5,13:6,14:7,15:8};
	$scope.gotodays = function(event){
		console.log(event);
		$scope.currentday = event;
		window.localStorage.setItem('currentday', $scope.currentday);
		$state.go('eventslist');

	}
});

app.controller