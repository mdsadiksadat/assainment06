const loadFiels = async () =>{
    
    const responce =await fetch("https://openapi.programming-hero.com/api/videos/categories");


    const data = await responce.json();
    const tabContainer = document.getElementById('tab-container');
    for (let i = 0; i < data.data.length; i++) {
        console.log(data.data[i]);
        const containerDiv = document.createElement('div');
        containerDiv.innerHTML=`
        <button onclick="cardLoad('${data.data[i].category_id}')" class="btn bg-slate-300 p-3 rounded-md text-white font-semibold mb-10">${data.data[i].category}</button>
        `;

        tabContainer.appendChild(containerDiv);
        
    }
    

};
const cardLoad = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    const cardContainer = document.getElementById("class-container");
    cardContainer.textContent = '';
    data.data.forEach((card) => {
        console.log(card);
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="w-64 rounded-lg h-auto mb-5 container mx-auto">
        <figure><img class=rounded mb-3 w-full h-[200px] src="${card?.thumbnail}" alt="Shoes" /></figure>
        <div class="card-body">
            <div class="w-11 h-11 rounded-full flex gap-2 mt-7">
                <img src="${card?.authors[0].profile_picture}" alt="">
                <h1 class="card-title">${card?.title}</h1>
            </div>
            <div class="ml-14">
                <p class="">${card?.authors[0].profile_name}</p>
                <img class="" src="Twitter_verified_Badge.svg" alt="">
                <p>${card?.others.views}</p>
            </div>
        </div>
    </div>
        `;
        cardContainer.appendChild(div);
    });
    const noData = document.getElementById('not-found');
    if(data.data.length === 0){
        noData.classList.remove('hidden');
    }
    else{
        noData.classList.add('hidden');
    }
};

















loadFiels();
tabLoad("1000");