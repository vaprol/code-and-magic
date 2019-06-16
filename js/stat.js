window.renderStatistics = function (ctx, names, times) {
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
        // ctx.stroke();
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

    renderPillow({x: 130, y: 10}, 'rgba(0, 0, 0, 0.7)');
    renderPillow({x: 120, y: 0}, 'rgba(255, 255, 255, 1.0)');
    renderTextFragment({x: 250, y: 25});
};
