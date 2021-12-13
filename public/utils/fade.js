const replaceClass = (element, add, remove) => {
  element.classList.add(add);
  element.classList.remove(remove);
};

replaceClass(document.querySelector(".username-block"), "fade-appear", "fade")

class FadeEffect{
  constructor(className) {
    this.fades = document.querySelectorAll(`.${className}`);
    this.visibleElements = [];
  }

  isVisible(element){
    const scrollYPos = window.scrollY;
    const rect = element?.getBoundingClientRect();
    const top = rect.top;
    return (scrollYPos >= top);
  }

  getAllVisibleElements(){
    this.fades.forEach(fade => {
      if(this.isVisible(fade) && !this.visibleElements.includes(fade)){
        this.visibleElements.push(fade);
      }
    });
    console.log(this.visibleElements)
    return this;
  }

  fadeEffect(){
    this.visibleElements.forEach(element => {
      replaceClass(element, "fade-appear", "fade")
    });
    return this;
  }
}

const fadeEffect = () => {
  return new FadeEffect("fade")
    .getAllVisibleElements()
    .fadeEffect();
}

window.onload = fadeEffect;

document.addEventListener("scroll", fadeEffect)
