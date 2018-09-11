let main = document.getElementById('main');
//
// load();
//
// function load() {
//   let req = new XMLHttpRequest();
//
//
//   req.onreadystatechange = function() {
//     if (req.readyState === 4) {
//       if (req.status === 200) {
//         let data = JSON.parse(req.response);
//         for (let person in data.people) {
//           let div = document.createElement('div');
//           let h2 = document.createElement('h2');
//           let h3 = document.createElement('h3');
//           let h4 = document.createElement('h4');
//           let p = document.createElement('p');
//           let img = document.createElement('img');
//
//           let h2text = document.createTextNode(data.people[person].name);
//           let h3text = document.createTextNode(data.people[person].role);
//           let h4text = document.createTextNode(data.people[person].hometown);
//           let ptext = document.createTextNode(data.people[person].name.split(' ')[0] + '\'s favorite holiday is ' + data.people[person].favoriteHoliday + '.');
//
//           img.setAttribute('src', data.people[person].imgUrl);
//           h2.appendChild(h2text);
//           h3.appendChild(h3text);
//           h4.appendChild(h4text);
//           p.appendChild(ptext);
//
//           div.appendChild(img);
//           div.appendChild(h2);
//           div.appendChild(h3);
//           div.appendChild(h4);
//           div.appendChild(p);
//
//           main.appendChild(div);
//
//         }
//       }
//       else {
//         console.log('something went wrong. please try again later.');
//       }
//     }
//   }
//
//   req.open('GET', 'https://tallgrassschool.com/cohort_3/data/people.json', true  );
//
//   req.send();
// }

// document.getElementById('newdog').addEventListener('click', loadDog);
//
// function loadDog() {
//   let req = new XMLHttpRequest();
//
//   req.onreadystatechange = function() {
//     if (req.readyState === 4) {
//       if (req.status === 200) {
//         let data = JSON.parse(req.response);
//         if (document.getElementById('dogimage')) {
//           document.getElementById('dogimage').setAttribute('src', data.message)
//         }
//         else {
//           let img = document.createElement('img');
//           img.setAttribute('src', data.message);
//           img.setAttribute('id', 'dogimage');
//           main.appendChild(img);
//         }
//       }
//       else {
//         console.log('Oops, something went wrong. Please try again later');
//       }
//     }
//   }
//
//   req.open('GET', 'https://dog.ceo/api/breed/beagle/images/random', true);
//
//   req.send();
// }

let search = document.getElementById('search');
search.addEventListener('click', loadBreweries);

function loadBreweries() {
  let req = new XMLHttpRequest();

  req.onreadystatechange = function() {
    if (req.readyState === 4) {
      if (req.status === 200) {
        main.innerHTML = '';
        let breweries = JSON.parse(req.response);
        for (let brewery in breweries) {
          let div = document.createElement('div');
          let name = document.createElement('h2');
          let cat = document.createElement('h3');
          let address = document.createElement('p');
          let phone = document.createElement('p');
          let website = document.createElement('p');

          let nametext = document.createTextNode(breweries[brewery].name);
          let cattext = document.createTextNode(breweries[brewery].brewery_type);
          let addresstext = document.createTextNode(breweries[brewery].street + ' ' + breweries[brewery].city + ', ' + breweries[brewery].state + ' ' + breweries[brewery].postal_code);
          let phonetext = document.createTextNode(breweries[brewery].phone);
          let websitetext = document.createTextNode(breweries[brewery].website_url);

          name.appendChild(nametext);
          cat.appendChild(cattext);
          address.appendChild(addresstext);
          phone.appendChild(phonetext);
          website.appendChild(websitetext);

          div.appendChild(name);
          div.appendChild(cat);
          div.appendChild(address);
          div.appendChild(phone);
          div.appendChild(website);

          div.setAttribute('class', 'card');

          main.appendChild(div);

        }
      }
      else {

      }
    }
  }

  req.open('GET', 'https://api.openbrewerydb.org/breweries?by_state=' + document.getElementById('state').value, true);

  req.send();



}























//
