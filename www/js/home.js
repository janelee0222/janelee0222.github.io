leenzzeApp.controller('homeCtrl',function($scope,$rootScope, $location, $ionicSlideBoxDelegate, sharedData){
    $scope.aaa = 'hello my name is leenzze';

    $scope.pageList = ['Profile','Skills','Portfolio','Experience'];
    $scope.slides = [
                     {list:'Profile', img:'www/img/introduce.jpg', text:'나를 소개합니다.'},
                     {list:'Skills', img:'www/img/skill.jpg', text:'나의 기술을 알고 싶나요 ?'},
                     {list:'Portfolio', img:'www/img/meeting.jpg', text:'구현한 프로젝트를 소개합니다.'},
                     {list:'Experience', img:'www/img/experience1.jpg', text:'지금껏 보고 배우고 익혀온 경험을 소개합니다.'}
                    ];

    // $scope.click;                
    $scope.goPage = function(name,i){
        var name = '/'+name;
        $location.path(name);
        sharedData.barClickIndex = i;
        $rootScope.$broadcast('barClickIndex', i);
        sessionStorage.setItem('index',i);
    };
    
    $scope.doSomething=function(tem){
        $ionicSlideBoxDelegate.slide(tem);
        console.log('next',tem);
    }


});