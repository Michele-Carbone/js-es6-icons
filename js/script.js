const icons = [
    {
        name: 'cat',
        preferix: 'fa-',
        type: 'animal',
        family: 'fas',
    },

    {
        name: 'crow',
        preferix: 'fa-',
        type: 'animal',
        family: 'fas',
    },

    {
        name: 'dog',
        preferix: 'fa-',
        type: 'animal',
        family: 'fas',
    },

    {
        name: 'dove',
        preferix: 'fa-',
        type: 'animal',
        family: 'fas',
    },

    {
        name: 'dragon',
        preferix: 'fa-',
        type: 'animal',
        family: 'fas',
    },

    {
        name: 'horse',
        preferix: 'fa-',
        type: 'animal',
        family: 'fas',
    },

    {
        name: 'hippo',
        preferix: 'fa-',
        type: 'animal',
        family: 'fas',
    },

    {
        name: 'fish',
        preferix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        preferix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        preferix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        preferix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        preferix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        preferix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        preferix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        preferix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        preferix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];


//console.log(icons);

// FUNZIONE
const renderIcons = (arr, targetElement) => {
    let iconsTemplate = '';
    arr.forEach((icon, index) => {

        const hasOffset = !index || index % 5 === 0 ? 'offset-md-1' : '';

        iconsTemplate += `
        <div class="col col-sml-4 col-md-2 m-3 ${hasOffset}">
            <div class="card rounded-3">
                <div class="card-body">
                    <i class="fas ${icon.preferix}${icon.name} fa-2x ${icon.type}"></i>
                    <h2 class="h6">${icon.name.toUpperCase()}</h2>
                </div>
            </div>
        </div>
        `;
    });
    targetElement.innerHTML = iconsTemplate;
};


//sezione filtri

const selectField = document.getElementById('type-filter');

selectField.addEventListener('change', () => {
    const filterValue = selectField.value;

    if (filterValue === 'all') {
        renderIcons(icons, iconSection);
        return;
    }

    const filteredIcons = icons.filter((icon) => {

        if (filterValue === icon.type) {
            return true;
        }

    });
    renderIcons(filteredIcons, iconSection);
});



const renderOptions = (iconsArray, targetElement) => {

    const iconTypes = [];
    iconsArray.forEach((icon) => {
        if (!iconTypes.includes(icon.type)) {
            iconTypes.push(icon.type);
        }
    });

    console.log('iconType:', iconTypes);

    let options = '<option selected value="all">All</option>';
    iconTypes.forEach((type) => {
        options += `<option value="${type}">${type}</option>`;
    });

    targetElement.innerHTML = options;
}



//STAMPO IN PAGINA
const iconSection = document.querySelector('#icons .row');
renderIcons(icons, iconSection);


renderOptions(icons, selectField);



