let incrementEl = document.getElementById("increment");
let decrementEl = document.getElementById("decrement");
let counterValue = document.getElementById("counterValue")


incrementEl.addEventListener("click", function(){
    let value = parseInt(counterValue.textContent); 
    counterValue.textContent = value +1;
});

decrementEl.addEventListener("click", function(){
    let value = parseInt(counterValue.textContent); 
    counterValue.textContent = value -1;
});





class CounterComponenet{
    constructor(id){
        let containerEl = document.getElementById(id);
        this,count = 0;
    }

    increment(){
       this.count = this.count +1;
       this.updateDisplay();
    }

    decrement(){
        this.count = this.count -1;
        this.updateDisplay();
    }

    updateDisplay(){
        this.counterValue.textContent = this.count
    }

    render(){
        this.containerEl.innerHTML = `<button type="button" id="increment ${this.containerEl.id}">+</button>
        <span id="counterValue ${this.containerEl.id}">0</span>
        <button type="button" id="decrement ${this.containerEl.id}">-</button>`

        this.counterValue = document.querySelector(`#counterValue ${this.containerEl.id}`);

        document.querySelector(`#increment ${this.containerEl.id}`).addEventListener("click", () => this.increment());

        document.querySelector(`#decrement ${this.containerEl.id}`).addEventListener("click", () => this.decrement());
    }
}

let counterOne = new CounterComponenet("counterOne");
let counterTwo = new CounterComponenet("counterTwo");
counterOne.render();
counterTwo.render();
