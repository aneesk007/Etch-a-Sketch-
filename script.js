const containerDiv=document.querySelector('.container')
const button=document.createElement('button')
button.textContent="Resize";


function resize(squaresPerSide)
{
    containerDiv.innerHTML="";
    containerDiv.appendChild(button)
    const cellSize = 960 / parseInt(squaresPerSide);

    for (let i=0;i<256;i++)
{
    const cell=document.createElement('div')
    cell.classList.add('cell')
    cell.textContent=`${i+1}`;
    cell.style.width=cell.style.height=`${cellSize}px`;
    cell.addEventListener('mouseover',()=>{
         const r = Math.floor(Math.random() * 256); // 0–255
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        cell.style.backgroundColor=`rgb(${r},${g},${b})`
    })
    containerDiv.appendChild(cell);

}
}

resize(10)

button.addEventListener('click',()=>{
    let value=prompt("please enter a value")
    resize(value)
})
