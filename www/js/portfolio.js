leenzzeApp.controller('portfolioCtrl',function($timeout, $scope, $location, $ionicSlideBoxDelegate){

    $scope.clickItem = 0;

    $scope.scrollTop = function(id,index) {
        $location.hash(id); 
        $scope.clickItem = index;
    };

    $scope.portfolioList = [
                                {
                                    name:'아동출석패드',
                                    period:'2015/12 ~ 2016/1(2개월)',
                                    member:'2명',
                                    contribute:'20%',
                                    working:['레이아웃 작업','기능 확인'],
                                    skills:['androidSDK','JAVA','git'],
                                    img:['../img/masterpad/0list.png','../img/masterpad/0eye.png','../img/masterpad/0exercise.png','../img/masterpad/0mission.png','../img/masterpad/0result.png','../img/masterpad/0reward.png'],
                                    explain:'안드로이드 sdk를 사용하여 예약된 아동의 출석을 체크하고, 아동의 정보를 보여주도록 구현한 어플이다. '
                                },
                                {
                                    name:'아동운동패드',
                                    period:'2016/2 ~ 2016/5(4개월)',
                                    member:'2명',
                                    contribute:'90%',
                                    working:['타이머 기능','플로우 구조 작업','동영상 자동재생 오류확인','결과 업데이트','전체적인 레이아웃 작업'],
                                    skills:['angularjs','ionic','javascript','cordova','git','php','html5','css3','jquery','mvc pattern','mysql','agile'],
                                    img:['../img/masterpad/0list.png','../img/masterpad/0eye.png','../img/masterpad/0exercise.png','../img/masterpad/0mission.png','../img/masterpad/0result.png','../img/masterpad/0reward.png'],
                                    explain:'아동출석패드의 업그레이드버전, 아동의 검사 결과에 따른 운동로직으로 정해진 시간과 플로우에 맞게 운동을 보조해주는 어플이다.'
                                },
                                {
                                    name:'운동사패드',
                                    period:'2016/4 ~ 2016/5(2개월)',
                                    member:'2명',
                                    contribute:'20%',
                                    working:['운동 로직 구현','레이아웃 작업','검사 쿼리문 추가 작업'],
                                    skills:['angularjs','ionic','javascript','cordova','git','php','html5','css3','jquery','mvc pattern','mysql','agile'],
                                    img:['../img/trainerpad/01_list.png','../img/trainerpad/02_missionresult.png','../img/trainerpad/03_testresult.png','../img/trainerpad/04_symptom.png','../img/trainerpad/05_record.png'],
                                    explain:'출석 기능과 아동이 운동할 때 미션 결과값을 컨트롤 할 수 있으며, 운동 검사 결과값을 입력하여 결과 페이지를 통해 부모님과 상담을 돕는 어플이다.'
                                },
                                {
                                    name:'e-brosure앱',
                                    period:'2016/5 ~ 2016/5(1개월)',
                                    member:'1명',
                                    contribute:'100%',
                                    working:['초기 구조 작업','레이아웃 작업','슬라이드 구현'],
                                    skills:['angularjs','ionic','javascript','cordova','git','html5','css3','mvc pattern','agile'],
                                    img:['../img/ebrosure/main.png','../img/ebrosure/list.png','../img/ebrosure/itemlist.png','../img/ebrosure/item.png'],
                                    explain:'센터에 비치된 판매 물품의 정보를 보여주는 어플이다.'
                                },
                                {
                                    name:'CRM앱',
                                    period:'2016/6 ~ 2016/8(3개월)',
                                    member:'3명',
                                    contribute:'30%',
                                    working:['초기 구조 작업','차트 커스터마이징','운동리스트 쿼리문 작업','레이아웃 작업','반응형 구현'],
                                    skills:['angularjs2','ionic2','typescript','cordova','node.js','chart.js','git','html5','sass','agile'],
                                    img:['../img/crm/login.png','../img/crm/findidpw.png','../img/crm/selecchild3.png','../img/crm/report.png','../img/crm/reservation.png','../img/crm/exchart.png','../img/crm/exdetail.png','../img/crm/testrecord.png','../img/crm/setting.png'],
                                    explain:'센터를 이용하는 부모님의 편의를 위한 예약 확인, 결제 확인, 아동 상태 확인등의 정보를 전달하는 어플이다.'
                                },
                                {
                                    name:'아동사회성검사앱',
                                    period:'2016/9 ~ 2016/10(2개월)',
                                    member:'2명',
                                    contribute:'40%',
                                    working:['검사 기능 구현','prograssbar/ajax directive로 변경','레이아웃 작업'],
                                    skills:['angularjs','ionic','javascript','cordova','node.js','git','html5','css3','jquery','mvc pattern','mysql','agile'],
                                    img:['../img/testapp/list.png','../img/testapp/testlist.png','../img/testapp/symbol.png','../img/testapp/hearing.png','../img/testapp/line.png','../img/testapp/cctt.png'],
                                    explain:'아동의 사회성을 검사하는 앱으로 지면으로 하던 검사를 앱화한 것이다.'
                                },

                           ];

    $scope.doSomething=function(tem){
        $ionicSlideBoxDelegate.slide(tem);
        console.log('next',tem);
    }

});