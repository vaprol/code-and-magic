(function () {
    var addSimilarWizards = function (wizards) {
        var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
        var similarWizardsFragment = document.createDocumentFragment();
        for (var i = 0; i < window.wizardsData.numberOfWizards; i++) {
            var wizardNode = wizardTemplate.cloneNode(true);
            wizardNode.querySelector('.setup-similar-label').textContent = wizards[i].name;
            wizardNode.querySelector('.wizard-coat').style.fill = wizards[i].colorCoat;
            wizardNode.querySelector('.wizard-eyes').style.fill = wizards[i].colorEyes;
            similarWizardsFragment.appendChild(wizardNode);
        }
        return similarWizardsFragment;
    };
    var getWizardsData = function (wizards) {
        window.similarWizards = addSimilarWizards(window.utils.randomizeArray(wizards));
    };
    var showError = function (errorMessage) {
        console.error(errorMessage);
    };

    window.backend.load(getWizardsData, showError);
})();