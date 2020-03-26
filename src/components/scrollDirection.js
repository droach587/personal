class scrollDirection {
  constructor() {
    this.lastScrollTop = 0;
    this.direction = "down";
    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener("scroll", () => { // or window.addEventListener("scroll"....
       const st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
       if (st > this.lastScrollTop){
          this.direction = "down";
       } else {
          this.direction = "up";
       }
       this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
  }
  getDirection (){
    return this.direction;
  }
}

export default scrollDirection;
