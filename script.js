const containerEl = document.querySelector("#blocks_container");
const createBlocksBtn = document.querySelector("#create_blocks_btn");
const removeBlocksBtn = document.querySelector("#remove_blocks_btn");

const blockScales = [
  "0.89",
  "0.55",
  "0.6",
  "0.8",
  "0.52",
  "0.72",
  "0.64",
  "0.7"
]
const background_colors = [
  "yellow",
  "orange",
  "lavender",
  "coral",
  "skyblue",
  "pink",
  "green",
  "blue"
]

console.log(containerEl)

function createBlocks() {
  // first, remove the example blocks
  containerEl.innerHTML = "";
  console.log("create blocks");


for(let i = 0; i < blockScales.length; i++) {

  let blockEl =`
  <div class="block" style="background-color: ${background_colors[i]}; transform: scale(${blockScales[i]});">
  
   ${blockScales[i]}
 ${background_colors[i]}
  </div>
`;
containerEl.insertAdjacentHTML('beforeend', blockEl)
}
}

function removeBlocks() {
  console.log("remove blocks");
  containerEl.innerHTML = "";
}

createBlocksBtn.addEventListener("click", createBlocks);
removeBlocksBtn.addEventListener("click", removeBlocks);



