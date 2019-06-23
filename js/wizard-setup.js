(function () {
    var setupOpenButton = document.querySelector('.setup-open');
    var setupCloseButton = document.querySelector('.setup-close');
    var setupOverlay = document.querySelector('.setup');
    var dialogHandler = setupOverlay.querySelector('input[name=avatar]');

    var showSetupOverlay = function () {
        if (Array.from(setupOverlay.querySelector('.setup-similar').classList).indexOf('hidden') !== -1) {
            setupOverlay.querySelector('.setup-similar-list').appendChild(window.similarWizards);
            setupOverlay.querySelector('.setup-similar').classList.remove('hidden');
        }
        setupOverlay.classList.remove('hidden');
        setupCloseButton.addEventListener('click', hideSetupOverlay);
        setupCloseButton.addEventListener('keydown', onCloseButtonEnterKeydown);
        document.addEventListener('keydown', onDocumentEscKeydown);
        setupOverlay.querySelector('.setup-user-name').addEventListener('focus', function () {
            document.removeEventListener('keydown', onDocumentEscKeydown);
        });
        setupOverlay.querySelector('.setup-user-name').addEventListener('blur', function () {
            document.addEventListener('keydown', onDocumentEscKeydown);
        });
    };
    var hideSetupOverlay = function () {
        setupOverlay.classList.add('hidden');
        setupOverlay.style.left = '';
        setupOverlay.style.top = '';
        document.removeEventListener('keydown', onDocumentEscKeydown);
    };
    var onDocumentEscKeydown = function (evt) {
        if (evt.keyCode === window.utils.escKeyCode) {
            hideSetupOverlay();
        }
    };
    var onCloseButtonEnterKeydown = function (evt) {
        if (evt.keyCode === window.utils.enterKeycode) {
            hideSetupOverlay();
        }
    };
    setupOpenButton.addEventListener('click', showSetupOverlay);
    setupOpenButton.addEventListener('keydown', function (evt) {
        if (evt.keyCode === window.utils.enterKeycode) {
            showSetupOverlay();
        }
    });

    var onUserpicMousedown = function (evt) {
        var isMoved = false;
        evt.preventDefault();
        var startCoords  = {
            x: evt.clientX,
            y: evt.clientY
        };
        var onDocumentMousemove = function (moveEvt) {
            moveEvt.preventDefault();
            var coordsShift = {
                x: moveEvt.clientX - startCoords.x,
                y: moveEvt.clientY - startCoords.y
            };
            if (coordsShift.x > 0 || coordsShift.y > 0) {
                isMoved = true;
            }
            setupOverlay.style.left = (setupOverlay.offsetLeft + coordsShift.x) + 'px';
            setupOverlay.style.top = (setupOverlay.offsetTop + coordsShift.y) + 'px';
            startCoords.x = moveEvt.clientX;
            startCoords.y = moveEvt.clientY;
        };
        var onUserpicMouseup = function (evt) {
            evt.preventDefault();
            document.removeEventListener('mousemove', onDocumentMousemove);
            document.removeEventListener('mouseup', onUserpicMouseup);
        };
        var onAvatarInputClick = function (evt) {
            if (isMoved) {
                evt.preventDefault();
            }
            dialogHandler.removeEventListener('click', onAvatarInputClick);
        };
        dialogHandler.addEventListener('click', onAvatarInputClick);
        document.addEventListener('mousemove', onDocumentMousemove);
        document.addEventListener('mouseup', onUserpicMouseup);
    };
    dialogHandler.addEventListener('mousedown', onUserpicMousedown);

    var onCoatClick = function () {
        var coatColor = window.utils.pickElementFromArray(window.wizardsData.coatColors);
        setupOverlay.querySelector('.setup-wizard .wizard-coat').style.fill = coatColor;
        setupOverlay.querySelector('input[name=coat-color]').value = coatColor;
    };
    var onEyesClick = function () {
        var eyeColor = window.utils.pickElementFromArray(window.wizardsData.eyeColors);
        setupOverlay.querySelector('.setup-wizard .wizard-eyes').style.fill = eyeColor;
        setupOverlay.querySelector('input[name=eyes-color]').value = eyeColor;
    };
    var onFireballClick = function () {
        var fireballColor = window.utils.pickElementFromArray(window.wizardsData.fireballColors);
        setupOverlay.querySelector('.setup-fireball-wrap').style.backgroundColor = fireballColor;
        setupOverlay.querySelector('input[name=fireball-color]').value = fireballColor;
    };
    setupOverlay.querySelector('.setup-wizard .wizard-coat').addEventListener('click', onCoatClick);
    setupOverlay.querySelector('.setup-wizard .wizard-eyes').addEventListener('click', onEyesClick);
    setupOverlay.querySelector('.setup-fireball-wrap').addEventListener('click', onFireballClick);
})();