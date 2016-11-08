leenzzeApp.controller('indexCtrl',function($scope, $location,sharedData){
    $scope.menu = [
        {icon: 'ion-ios-home', name: 'Home'},
        {icon: 'ion-person', name: 'Profile'},
        {icon: 'ion-mouse', name: 'Skills'},
        {icon: 'ion-filing', name: 'Portfolio'},
        {icon: 'ion-ios-list', name: 'Experience'}
    ];

    if(!sessionStorage.getItem('index')){
        sessionStorage.setItem('index',sharedData.barClickIndex);
    }
    $scope.click = sessionStorage.getItem('index');

    $scope.goPage = function(name,i){
        var name = '/'+name;
        $location.path(name);
        sharedData.barClickIndex = i;
        $scope.click = i;
        sessionStorage.setItem('index',i);
    };

    $scope.$on('barClickIndex', function (e, data) {
        console.log('into the broadcast',data);
        $scope.click = data;
    });
});
