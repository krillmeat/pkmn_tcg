let cardBody = document.getElementById("card-body");

const filterNav = document.getElementById("filter");

const cardTypeGroup = filterNav.querySelector("ul.card-types");
const setGroup = filterNav.querySelector("ul.sets");
const typeGroup = filterNav.querySelector("ul.types");

var cardTypeFilters = ["pkmn","energy","trainer"];
var setFilters = [];
var typeFilters = ["grass","fire","water","electric","psychic","fighting","rock","ground","poison","bug","ice","ghost","flying","dragon","dark","steel","fairy","normal"];
var currentFilters = [setFilters];

var cardList = [];

var runningDraw = false;

function addListeners(){
    let cardTypeFilters = cardTypeGroup.querySelectorAll("li");
    for(cardTypeFilter of cardTypeFilters){
        cardTypeFilter.addEventListener("click", toggleCardTypeFilter);
    }


    let setFilters = setGroup.querySelectorAll("li");
    for(setFilter of setFilters){
        setFilter.addEventListener("click",toggleSetFilter);
    }

    let typeFilters = typeGroup.querySelectorAll("li");
    for(typeFilter of typeFilters){
        typeFilter.addEventListener("click",toggleTypeFilter);
    }
}

function toggleCardTypeFilter(e){
    let selectedCardType = e.currentTarget.dataset.card;
    if(!runningDraw){
        if(!cardTypeFilters.includes(selectedCardType)){
            cardTypeFilters.push(selectedCardType);
            e.currentTarget.dataset.status = "selected";
            createCardList();
        }else{
            cardTypeFilters.splice(cardTypeFilters.indexOf(selectedCardType),1);
            e.currentTarget.dataset.status = "deselected";
            createCardList();
        }
    }

    console.log("CT FILTER: ",cardTypeFilters);
}

function toggleSetFilter(e){
    let selectedSet = e.currentTarget.dataset.set;
    console.log("SEL SET: ",selectedSet);
    if(!runningDraw){
        if(selectedSet == "all"){
            if(setFilters.length != 4){
                setFilters = ["rg","gs","rs","dp","xy","ss","eg"];
                e.currentTarget.dataset.status = "selected";
                createCardList();
            } else{
                e.currentTarget.dataset.status = "deselected";
                setFilters = [];
                createCardList();
            }
        }else if(selectedSet == "clear"){
            setFilters = [];
            createCardList();
        } else{
            if(!setFilters.includes(selectedSet)){
                setFilters.push(selectedSet);
                e.currentTarget.dataset.status = "selected";

                createCardList();
            }else{
                setFilters.splice(setFilters.indexOf(selectedSet),1);
                e.currentTarget.dataset.status = "deselected";

                createCardList();
            }
        }
    }
}

function toggleTypeFilter(e){
    let selectedType = e.currentTarget.dataset.type;
    if(!runningDraw){
        if(!typeFilters.includes(selectedType)){
            typeFilters.push(selectedType);
            e.currentTarget.dataset.status = "selected";

            createCardList();
        }else{
            typeFilters.splice(typeFilters.indexOf(selectedType),1);
            console.log("FILTERS: ",typeFilters)
            e.currentTarget.dataset.status = "deselected";

            createCardList();
        }
    }
}

function createCardList(){
    cardBody.innerHTML = "";
    cardList = [];
    for(let i = 0; i < setFilters.length; i++){
        let setData = cardData[setFilters[i]];
        for(var key of Object.keys(setData)){
            
            if(setData[key] instanceof PKMN && cardTypeFilters.includes("pkmn")){
                // if matches type
                if(typeFilters.includes(setData[key].types[0]) || typeFilters.includes(setData[key].types[1])){
                    cardList.push(setData[key]);
                }
            } else if(setData[key] instanceof TRAINER && cardTypeFilters.includes("trainer")) {
                cardList.push(setData[key]);
            } else{
                if(typeFilters.includes(setData[key].type)){
                    cardList.push(setData[key]);
                }
            }
        }
    }

    if(cardList.length > 0) drawCardList();
}


function drawCardList(){
    runningDraw = true;

    filterNav.classList.add("running");

    let counter = 0;

    let drawInterval = setInterval(function(){

        cardList[counter].drawCard(cardBody);

        counter++;

        if(counter >= cardList.length){
            counter = 0;
            runningDraw = false;
            filterNav.classList.remove("running");
            console.log("STOP DRAWING!");
            clearInterval(drawInterval);
        }
    },50);
}


addListeners();
// createCardList();