 leenzzeApp.directive('barsChart', function ($parse) {
    var directiveDefinitionObject = {
        restrict: 'E',
        replace: false,
        link: function (scope, element, attrs) {
            var data = attrs.chartData;
            var chart = d3.select(element[0]);
            chart.append("div").attr("class", "chart")
            .selectAll('div')
            .data(data).enter().append("div")
            .transition().ease("elastic")
            .style("width", function(d) { return d*10 + "%"; })
            .text(function(d) { return d + "/10"; });
        } 
    };
    return directiveDefinitionObject;
});