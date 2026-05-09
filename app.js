 
document.body.appendChild(Object.assign(document.createElement('div'), { id: 'moreElement' }));
const mainContainer = Object.assign(document.createElement('div'), { className: 'container' });

document.getElementById("root").appendChild(mainContainer);

const moreEl = document.getElementById('moreElement');

let load = 0;  

/* main card */
function createEl(authName, imageUrl, title,summary) {
  const card =  Object.assign(document.createElement('div'), { className: 'card'  })
  card.setAttribute('data-summary', summary || ''); 
  card.setAttribute('data-image', imageUrl);
  card.setAttribute('data-title', title);

  mainContainer.appendChild(
    Object.assign(document.createElement('div'), { className: 'card-wrapper'})
  ).appendChild(
    card
  ).appendChild(
    Object.assign(document.createElement('div'), { className: 'card-top' })
  ).appendChild(
    Object.assign(document.createElement('img'), { src: imageUrl, alt: 'img' })
  ).closest('.card').appendChild(
    Object.assign(document.createElement('div'), { className: 'card-middle' })
  ).appendChild(
    Object.assign(document.createElement('p'), { textContent: title })
  ).closest('.card').appendChild(
    Object.assign(document.createElement('div'), { className: 'card-bottom' })
  ).appendChild(
    Object.assign(document.createElement('p'), { textContent: authName })
  );

}

/* card overlay */
document.body.appendChild(
  Object.assign(document.createElement('div'), {className:'overlay-container', id: 'overlay-container'})
).appendChild(
  Object.assign(document.createElement('div'),{className:'overlay'})
).appendChild(
  Object.assign(document.createElement('div'), {className: 'top'})
).appendChild(
  Object.assign(document.createElement('img'), {src:'', alt:'img', id: 'imgOverlay'})
).closest('.overlay').appendChild(
  Object.assign(document.createElement('div'), {className:'middle'})
).appendChild(
  Object.assign(document.createElement('h2'), {textContent: '', id: 'overlayTitle'})
).closest('.overlay').appendChild(
  Object.assign(document.createElement('div'), {className:'bottom'})
).appendChild(
  Object.assign(document.createElement('p'), {textContent: 'content goes here', id: 'overlayContent'})
)
 
/* error-message */
document.body.appendChild(
  Object.assign(document.createElement('div'),{className:'error-container', id: 'error-message'})
).appendChild(
  Object.assign(document.createElement('div'),{className:'error-message'})
).appendChild(
  Object.assign(document.createElement('h2'),{textContent:'Something went wrong'})
)

/* loading spinner */
document.body.appendChild(
  Object.assign(document.createElement('div'), {className:'loader-container', id: 'loader'})
).appendChild(
  Object.assign(document.createElement('span'), {className:'loader'})
)

async function loadData() {

  document.getElementById('loader').classList.add('activate');

  try {
    const res = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=${load * 10}`);
    const getNews = await res.json();
  
    if (!res.ok) {
      throw new Error('Response failed')
    }
    
    getNews.results.forEach(({authors, image_url, title,summary }) => {
    const authorName = authors.map(authName => authName.name)[0];
    createEl(authorName, image_url, title, summary);
    
  })
    document.querySelector('.loader-container').classList.remove('activate');
    load++;
  
  } catch (error) {
    document.getElementById('error-message').classList.add('active');
    document.getElementById('loader').classList.remove('activate');
  }
   
}

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    loadData();
  }
});

observer.observe(moreEl);
 
 
document.body.addEventListener('click', (e) => {

  const elValue = e.target.closest('.card');
  
  if (elValue) {
    const getSummary = elValue.getAttribute('data-summary')
    const getImage = elValue.getAttribute('data-image')
    const getTitle = elValue.getAttribute('data-title')

    document.getElementById('overlayContent').textContent = getSummary
    document.getElementById('imgOverlay').src = getImage
    document.getElementById('overlayTitle').textContent = getTitle

    document.getElementById('overlay-container').classList.add('active');
  } else {
    document.getElementById('overlay-container').classList.remove('active');  
  }
})
 
loadData()
 