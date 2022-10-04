let searchInput = document.querySelector("#searchText");
let searchBtn = document.getElementById("button");
let mainDiv = document.querySelector("#cards")

const creatElem = (item) => {
    let myElem = `<div class="col">
    <div class="card">
      <img src="${item.avatar_url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.login}</h5>
      </div>
    </div>
</div>`
mainDiv.innerHTML += myElem}




searchBtn.addEventListener("click", async ()=>{

let url= `https://api.github.com/users/${searchInput.value}/followers?per_page=100`
// value atanmış ise işlemleri yap
        if(searchInput.value){
            try{
                let response = await fetch(url) //apidenn çek ve bitene kadar bekle
                if(response.ok){
                    let myData = await response.json();
                    myData.map(item => creatElem(item));
                }else{
                    let message = "kullanıcı bulunamadı";
                    console.log(myData)
                }
            }catch(error) {
                console.log(message)
            }

        }
    const 

})