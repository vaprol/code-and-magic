window.renderStatistics = function (ctx, names, times) {
    var columnWidth = 40;
    var gapBtwColumns = 50;
    var columnMaxHeight = 150;

    var renderPillow = function (coords, fillColor) {
        var width = 450;
        var height = 280;

        ctx.beginPath();
        ctx.moveTo(coords.x, coords.y);
        ctx.bezierCurveTo(coords.x + 10, coords.y + 10,
            coords.x + width - 10, coords.y + 10,
            coords.x + width, coords.y);
        ctx.bezierCurveTo(coords.x + width - 10, coords.y + 10,
            coords.x + width - 10, coords.y + height - 10,
            coords.x + width, coords.y + height);
        ctx.bezierCurveTo(coords.x + width - 10, coords.y + height - 10,
            coords.x + 10, coords.y + height - 10,
            coords.x, coords.y + height);
        ctx.bezierCurveTo(coords.x + 10, coords.y + height - 10,
            coords.x + 10, coords.y + 10,
            coords.x, coords.y);
        ctx.closePath();
        ctx.fillStyle = fillColor;
        ctx.fill();
    };
    var renderTextFragment = function (coords) {
        ctx.font = '16px PT Mono';
        ctx.fillStyle = '#000';
        ctx.textBaseline = 'hanging';
        ctx.fillText('Ура, Вы победили!', coords.x + 10, coords.y);
        ctx.fillText('Список результатов:', coords.x, coords.y + 20);
    };
    var findMaxTime = function () {
        var maxTime = 0;
        for (var i = 0; i < times.length; i++) {
            if (times[i] > maxTime) {
                maxTime = times[i];
            }
        }
        return Math.round(maxTime);
    };
    var renderColumn = function(playerIndex, name, time) {
        if (name === 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        } else {
            ctx.fillStyle = 'rgba(0, 0, 255, ' + ((Math.random() + 0.1) / 1.1).toFixed(1) + ')'
        }
        var coordX = 190 + playerIndex * (columnWidth + gapBtwColumns);
        var coordY = (80 + columnMaxHeight) - time;
        ctx.fillRect(coordX, coordY, columnWidth, time);

        ctx.fillStyle = '#000';
        ctx.fillText(name, coordX, 240);
    };

    renderPillow({x: 130, y: 10}, 'rgba(0, 0, 0, 0.7)');
    renderPillow({x: 120, y: 0}, 'rgba(255, 255, 255, 1.0)');
    renderTextFragment({x: 250, y: 25});

    var maxTime = findMaxTime();
    for (var i = 0; i < names.length; i++) {
        renderColumn(i, names[i], Math.round(times[i]) * columnMaxHeight / maxTime);
    }
};
