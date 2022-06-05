const Base_URl ='https://thatcopy.pw/catapi/rest/';
const paisBtn = document.getElementById('change-country');
const paisImg = document.getElementById('country');

const getPais = async() => {
    try{
    const data = await fetch(Base_URl);
    const json = await data.json();

    return json.webpurl;
    }
    catch(e){
        console.log(e.message);
    }
};

const loadImg = async() => {
    paisImg.src = await getPais();
}

paisBtn.addEventListener('click',loadImg);

loadImg();