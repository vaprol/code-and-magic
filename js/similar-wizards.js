(function () {
    var generateWizardsArrow = function (numberOfWizards) {
        var wizards = [];
        for (var i = 0; i < numberOfWizards; i++) {
            var wizard = {
                name: window.wizardsData.wizardNames[Math.floor(Math.random() * window.wizardsData.wizardNames.length)] + ' ' +
                    window.wizardsData.wizardSurnames[Math.floor(Math.random() * window.wizardsData.wizardSurnames.length)],
                coatColor: window.wizardsData.coatColors[Math.floor(Math.random() * window.wizardsData.coatColors.length)],
                eyesColor: window.wizardsData.eyeColors[Math.floor(Math.random() * window.wizardsData.eyeColors.length)]
            };
            wizards.push(wizard);
        }
        return wizards;
    };

    var addSimilarWizards = function (wizards) {
        var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
        var similarWizardsFragment = document.createDocumentFragment();
        for (var i = 0; i < window.wizardsData.numberOfWizards; i++) {
            var wizardNode = wizardTemplate.cloneNode(true);
            wizardNode.querySelector('.setup-similar-label').textContent = wizards[i].name;
            wizardNode.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
            wizardNode.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
            similarWizardsFragment.appendChild(wizardNode);
        }
        return similarWizardsFragment;
    };

    window.similarWizards = addSimilarWizards(generateWizardsArrow(window.wizardsData.numberOfWizards));
})();