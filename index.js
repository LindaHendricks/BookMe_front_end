const apiFashiongirls = `http://localhost:3000/fashiongirls`;
const createProfileForm = document.querySelector(`form#createprofile`);

const enter = document.querySelector(`#enter`);
enter.addEventListener(`click`, (event) => {
  renderEntryForm();
});

function renderEntryForm() {
  const parentDiv = document.querySelector(`#entryform`);
  const div = document.createElement(`div`);
  parentDiv.textContent = "";

  div.innerHTML = `
     
        <form id="createprofile">
        <h1 id="entertitle2">CREATE YOUR PROFILE</h1>
        <label for="fname">Name:</label><br>
        <input type="text" id="fname" name="name"><br>
           
        <label for="lage">Age:</label><br>
        <input type="text" id="lage" name="age"><br>
           
        <label for="llocaton">Location:</label><br>
        <input type="text" id="flocation" name="location"><br>
           
        <label for="fportfolio">Portfolio:</label><br>
        <input type="img" id="lportfolio" name="portfolio"><br>
        <button>submit</button>
       </form> 
       `;

  parentDiv.append(div);

  const createProfileForm = document.querySelector(`form#createprofile`);
  createProfileForm.addEventListener(`submit`, (event) => {
    event.preventDefault();
    
    const inputName = document.querySelector(`#fname`);
    const inputAge = document.querySelector(`#lage`);
    const inputLocation = document.querySelector(`#flocation`);
    const inputPortfolio = document.querySelector(`#lportfolio`);

    const newUserName = inputName.value;
    const newUserAge = inputAge.value;
    const newUserLocation = inputLocation.value;
    const newUserPortfolio = inputPortfolio.value;

    fetch(apiFashiongirls, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: newUserName,
        age: newUserAge,
        location: newUserLocation,
        portfolio: newUserPortfolio,
      }),
    })
      .then((response) => response.json())
      .then((modelDetails) => renderOneModelinfo(modelDetails));
  });

  function renderOneModelinfo(modelDetails) {
    const parentDiv = document.querySelector(`div.info`);
    const div = document.createElement(`div`);
    div.dataset.id = modelDetails.id;

    div.innerHTML = `
<div class="createmodelinfo">
<div class="format">
<p class="name">${modelDetails.name}</p>
<p class="age">${modelDetails.age}</p>
<p class="location">${modelDetails.location}</p>
<img id="portfoliomodel" src=${modelDetails.portfolio} alt=${modelDetails.name}/>
</div>
<div class="buttonprofile">
<button id="apho">See all photographers</button>
<button id="aShoot">See all platform shootings</button>
<button id="upd">Update Your Profile</button>
<button id="dlt">Delete Your Profile</button>
</div>
</div> 
`;
    createProfileForm.reset();
    parentDiv.append(div);

    div.addEventListener("click", (event) => {
      if (event.target.matches("button#dlt")) {
        const id = modelDetails.id;
        fetch(`${apiFashiongirls}/${id}`, {
          method: "DELETE",
        });
        const createModelInfodelete =
          document.querySelector(`.createmodelinfo`);
        // div.remove()
        createModelInfodelete.remove();
      } else if (event.target.matches("button#upd")) {
        const id = modelDetails.id;

        const inputName = document.querySelector(`#fname`);
        const inputAge = document.querySelector(`#lage`);
        const inputLocation = document.querySelector(`#flocation`);
        const inputPortfolio = document.querySelector(`#lportfolio`);

        const newUserName = inputName.value;
        const newUserAge = inputAge.value;
        const newUserLocation = inputLocation.value;
        const newUserPortfolio = inputPortfolio.value;

        fetch(`http://localhost:3000/fashiongirls/${id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: newUserName,
            age: newUserAge,
            location: newUserLocation,
            portfolio: newUserPortfolio,
          }),
        })
          .then((response) => response.json())
          .then((response) => renderUpdatedInfo(response));

        function renderUpdatedInfo(response) {
          const newName = document.querySelector(`p.name`);
          newName.innerText = response.name;

          console.log(newAge);
          const newAge = document.querySelector(`p.age`);
          newAge.textContent = response.age;

          const newPlace = document.querySelector(`p.location`);
          newPlace.textContent = response.location;

          const newPortfolio = document.querySelector(`p.portfolio`);
          newPortfolio.textContent = response.portfolio;
        }

        const createProfileFormBye =
          document.querySelector(`form#createprofile`);
        // createProfileFormBye.textContent = "";

        createProfileFormBye.remove()

      } else if (event.target.matches(`button#apho`)) {
        fetch(`http://localhost:3000/photographers`)
          .then((response) => response.json())
          .then((arrayOfPhotographers) =>
            renderPhotographerInfo(arrayOfPhotographers)
          );

        function renderPhotographerInfo(arrayOfPhotographers) {
          const createProfileParentDiv = document.querySelector(
            "body > div.info > div > div.createmodelinfo"
          );
          createProfileParentDiv.textContent = "";

          arrayOfPhotographers.forEach((photographer) => {
            const parentDivPho = document.querySelector(
              `body > div.allphotographers`
            );
            const phoDiv = document.createElement(`div.pho`);

            const parentBookingConfirmation = document.querySelector(
              `body > div.createbooking`
            );
            parentBookingConfirmation.textContent = "";

            const createProfileFormBye =
              document.querySelector(`form#createprofile`);
            createProfileFormBye.textContent = "";

            const createModelInfodelete =
              document.querySelector(`.createmodelinfo`);
            createModelInfodelete.textContent = "";

            phoDiv.dataset.id = photographer.id;

            const id = photographer.id;

            phoDiv.innerHTML = `
                
   
                 <div class="onephotographer">
                   <h2> DISCOVER ${photographer.name}'S BOOK </h2> 
                     <p class="name">Name: ${photographer.name}</p>
                     <p class="location">Location: ${photographer.location}</p>
                     <p class="age">Popularity: ${photographer.popularity}/5⭐</p>
                     <img class="image" src=${photographer.portfolio} alt=${photographer.name}/>
                      <form class="newShooting">
                        <h4> BOOK A SHOOTING WITH ${photographer.name}</h4> 
                        <label for="fname">Date:</label><br>
                        <input type="text" id="fdate" name="date"><br>                    
                        <label for="llocaton">Location:</label><br>
                        <input type="text" id="flocation" name="location"><br>
                        <button>Book Me</button>
                      </form>
                 </div>
                 <div>
                 </div>`;
const entryFormDiv = document.querySelector(`#entryform`)
                 entryFormDiv.append(phoDiv)

            const bookPhoForm = phoDiv.querySelector(`form.newShooting`);

            bookPhoForm.dataset.id = photographer.id;

            bookPhoForm.addEventListener("submit", (event) => {
              event.preventDefault();

              if (event.target.matches(`form.newShooting`)) {
                const id = event.target.id;
                const userDateInput = event.target.querySelector(`#fdate`);
                const userDateInputValue = userDateInput.value;

                const userLocationInput =
                  event.target.querySelector(`#flocation`);

                const userLocationInputValue = userLocationInput.value;

                fetch(`http://localhost:3000/shootings/${id}`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: JSON.stringify({
                    date: userDateInputValue,
                    location: userLocationInputValue,
                  }),
                })
                  .then((response) => response.json())
                  .then((shootingDetails) =>
                    renderOneNewShooting(shootingDetails)
                  );

                function renderOneNewShooting(shootingDetails) {
                  const parentDivPho = document.querySelector(
                    `body > div.allphotographers`
                  );
                  parentDivPho.textContent = "";

                  const parentDivCreateBooking = document.querySelector(
                    `body > div.createbooking`
                  );
                  const divNewBook = document.createElement("div.newBook");

                  divNewBook.innerHTML = `
                            <div class="shootingconfirmed">
                            <h2> YOUR SHOOTING IS CONFIRMED WITH ${photographer.name}!</h2> 
                            <p><strong>Location:</strong> ${shootingDetails.location}</p><br>
                            <p><strong>Date:</strong> ${shootingDetails.date}</p>
                            
                            </div>`;

                  parentDivCreateBooking.append(divNewBook);
                }
              }
            });
            parentDivPho.append(phoDiv);
          });
        }
      } else if (event.target.matches(`button#aShoot`)) {
        fetch(`http://localhost:3000/shootings`)
          .then((response) => response.json())
          .then((arrayOfShootings) => renderShootingsInfo(arrayOfShootings));

        function renderShootingsInfo(arrayOfShootings) {
          const parentBookingConfirmation = document.querySelector(
            `body > div.createbooking`
          );
          parentBookingConfirmation.textContent = "";

          const parentDivPho = document.querySelector(
            `body > div.allphotographers`
          );
          parentDivPho.textContent = "";

          arrayOfShootings.forEach((shooting) => {
            const parentDivShot = document.querySelector(`body > div.shooting`);
            const shotDiv = document.createElement(`div.shot`);
            shotDiv.dataset.id = shooting.id;
            shotDiv.innerHTML = `
                       <div class="divcard">
                       <p class="dateandlocation"><strong>Date:</strong> ${shooting.date} - <strong>Location:</strong> ${shooting.location}</p>
                       </div>`;
            parentDivShot.append(shotDiv);
          });
          const createProfileFormBye =
            document.querySelector(`form#createprofile`);
          createProfileFormBye.textContent = "";

          const createModelInfodelete =
            document.querySelector(`.createmodelinfo`);
          createModelInfodelete.textContent = "";
        }
      }
    });
  }
}

///// Notes

//function renderSomethingEmpty(){
//parentDiv.textContent = " "
//}
//renderSomethingEmpty()

//find where the profile information is located with  the (qureyselect ) put it in a variable
//when const parentDivInfo
// parentDivInfo.textContent = "" .
