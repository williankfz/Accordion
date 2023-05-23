function initAccordion(){
  const question = document.querySelectorAll('[data-faq="question"]');

  if(question.length){
    question[0].classList.add('active');
    question[0].nextElementSibling.classList.add('active');
  }

  function accordion(){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  }

  question.forEach((item)=>{
    item.addEventListener('click', accordion);
  });
}

initAccordion();