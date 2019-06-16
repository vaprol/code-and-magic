document.querySelector('.setup').classList.remove('hidden');

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

console.log(generateWizardsArrow(4));