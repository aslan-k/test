class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    
    addElement(){
        let myDiv = document.createElement('div');
        myDiv.innerHTML = "<div>New div with some text</div>";

        myDiv.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg};
                               font-size: ${this.fontSize}; text-align: ${this.textAlign};`; 
        
        let before_div = document.getElementById("id-div");
        document.body.insertBefore(myDiv, before_div);
    }
}
let div1 = new Options("200px", "200px", "yellow", "15px", "center" );
div1.addElement();
