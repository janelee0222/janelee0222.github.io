leenzzeApp.controller('profileCtrl',function($scope,sharedData){
    $scope.vvv = 1;

     var aaa = sharedData.barClickIndex;

     sharedData.barClickIndex = 1;
     
    console.log('profile',aaa);
});