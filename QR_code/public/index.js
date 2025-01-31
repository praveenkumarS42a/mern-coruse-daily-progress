let link = document.getElementById("link");
let btn = document.getElementById("btn");
let qrCode = document.getElementById("qrCode");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    generateQRCode();
})


async function generateQRCode(){
    let response = await fetch("http://localhost:3000/qr",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({data:link.value})
    })
    response = await response.json();
    console.log(response);
    let img = document.createElement("img");
    img.src=response
    qrCode.append(img);
}