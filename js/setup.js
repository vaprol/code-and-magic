var NUMBER_OF_WIZARDS = 4;
var WIZARD_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
];
var WIZARD_SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
];
var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
];
var EYE_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
];

var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = document.querySelector('.setup-close');
var setupOverlay = document.querySelector('.setup');

var generateWizardsArrow = function (numberOfWizards) {
    var wizards = [];
    for (var i = 0; i < numberOfWizards; i++) {
        var wizard = {
            name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' +
                WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
            coatColor: COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)],
            eyesColor: EYE_COLORS[Math.floor(Math.random() * EYE_COLORS.length)]
        };
        wizards.push(wizard);
    }
    return wizards;
};
var addSimilarWizards = function (wizards) {
    var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
    var wizardsDocFragment = document.createDocumentFragment();
    for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
        var wizardNode = wizardTemplate.cloneNode(true);
        wizardNode.querySelector('.setup-similar-label').textContent = wizards[i].name;
        wizardNode.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
        wizardNode.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
        wizardsDocFragment.appendChild(wizardNode);
    }
    return wizardsDocFragment;

};

var showSetupOverlay = function () {
    if (Array.from(setupOverlay.querySelector('.setup-similar').classList).indexOf('hidden') !== -1) {
        setupOverlay.querySelector('.setup-similar-list').appendChild(addSimilarWizards(generateWizardsArrow(NUMBER_OF_WIZARDS)));
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

    document.removeEventListener('keydown', onDocumentEscKeydown);
};
var onDocumentEscKeydown = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
        hideSetupOverlay();
    }
};
var onCloseButtonEnterKeydown = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        hideSetupOverlay();
    }
};

setupOpenButton.addEventListener('click', showSetupOverlay);
setupOpenButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        showSetupOverlay();
    }
});
