const images=[
    'https://images.unsplash.com/photo-1681217684376-82f841d33f18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1680114015093-b1975c470331?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1681064163182-bf94305ed41a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1680987082559-6b0f763913e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1680984580142-37e1ad42ea83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60'
   
];


const canvas=document.getElementById('canvas');
const container=document.getElementById('container');
const leftbtn=document.getElementById('left-btn');
const rightbtn=document.getElementById('right-btn');
const flexcontainer=document.getElementById('flex-container');


const n=images.length;
const containerWidth=75;
const flexcontainerwidth=n*containerWidth;
flexcontainer.style.width=flexcontainerwidth;


for(let i=0;i<n;i++)
{
    const newImg=document.createElement('img');
    newImg.src=images[i];
    newImg.classList.add('img-style');
    flexcontainer.appendChild(newImg);
    // console.log(newImg.innerHTML)

    
}
let curposition=0;

leftbtn.addEventListener('click',()=>{
    if(curposition>0)
    {
        curposition--;
    }
    else{
        curposition=n-1;
    }
    showImg();
});
rightbtn.addEventListener('click',()=>{
    if(curposition<n-1)
    {
        curposition++;
    }
    else{
        curposition=0;
    }
    showImg();
});

function showImg(){

      const distance=-containerWidth*curposition;
      flexcontainer.style.transform=`translateX(${distance}vw)`;

}
