class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    // .getContext() 메소드는 캔버스의 드로잉 컨텍스트를 반환합니다.
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    // resize 이벤트는 document view의 크기가 변경될 때 발생합니다.
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    // window.requestAnimationFrame()은 브라우저에게 수행하기를 원하는 애니메이션을 알리고 다음 리페인트가 진행되기 전에 해당 애니메이션을 업데이트하는 함수를 호출하게 합니다.
    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize(){
      this.stageWidth = document.body.clientWidth;
    //   엘리먼트의 내부 높이를 픽셀로 반환
      this.stageHeight = document.body.clientHeight;

      this.canvas.width = this.stageWidth * 2;
      this.canvas.height = this.stageHeight *2;
      this.ctx.scale(2, 2)
  }

    // 애니매이션을 실제로 구동시키는 함수  
  animate(t){
      window.requestAnimationFrame(this.animate.bind(this))
  }

  window.onload = () => {
      new App();
  }
}
