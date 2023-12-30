

const chemein = './scriptes/donne.json';
async function getISS() {
  const response = await fetch(chemein);
  const data = await response.json();
  const ListeNbr=[];
  for (let i = 0; i < data.length; i++) {
    ListeNbr.push(data[i].nbrPersonnesEspace);
  }
  const max = ListeNbr.reduce((a, b) => Math.max(a, b), -Infinity);

  for (let i = 0; i < data.length; i++) {
    document.querySelector('.zone').innerHTML+= `<div class="fusee">
          <div class="vol">
              <img class="hautF" src="images/HautFuseeFichier 5.svg" alt="hautFusee"/>
              <div class="tronc" style="--taille: ${80+(520/max)*data[i].nbrPersonnesEspace}px;--FuseeColor: var(${ i%2 == 0 ? '--Bleu':'--BleuClaire'})"><p class="nbrFusee">${data[i].nbrPersonnesEspace}</p></div>
              <img class="basF" src="images/BasFuseeFichier 6.svg" alt="basFusee"/>
              <div class="boost">
                  <div class="feu1">
                      <div class="feu2">
                          <div class="feu3">
                          </div>
                      </div>
                  </div>
                  <div class="petitBoost">
                      <div class="feu2">
                          <div class="feu3">
                          </div>
                      </div>
                  </div>
                  <div class="petitBoost">
                      <div class="feu2">
                          <div class="feu3">
                          </div>
                      </div>
                  </div>
                  <div class="feu1">
                      <div class="feu2">
                          <div class="feu3">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <p>${data[i].date}</p>
      </div>`;

  }
  
}

getISS();
