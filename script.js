/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

    function onClick(event)
    {   
        const div =event.currentTarget;
        const section=div.parentElement;
        const divs = section.querySelectorAll("div");
        const img = div.querySelector(".checkbox");
        for(let i=0;i<divs.length;i++)
        {
            divs[i].classList.add("unselected");
            const img = divs[i].querySelector(".checkbox");
            divs[i].classList.remove("selected");
            img.src="images/unchecked.png"
            
        }
        div.classList.add("selected");
        div.classList.remove("unselected");
        img.src="images/checked.png";
        Result();
        console.log("div");
        
    }

    function Result()
    {
        const scelte=document.querySelectorAll(".selected");
        

        console.log(scelte.length);
        if(scelte.length==3)
        {
            const primo=document.querySelector("[data-question-id='one'].selected").dataset.choiceId;
        
            for(let i=0;i<choice.length;i++)
            {
                choice[i].removeEventListener("click",onClick);
            } 
            for(let i=0;i<scelte.length;i++)
            {
                if(tempmap[scelte[i].dataset.choiceId]!=null)
                {
                    tempmap[scelte[i].dataset.choiceId]+=1;
                }
                else
                    tempmap[scelte[i].dataset.choiceId]=1;
            }
            console.log(tempmap);
            let value=0;
            let key="";
             for (let a in tempmap)
             {  
                console.log(a);
                
                 if(tempmap[a]>value)
                 {
                     key=a;
                     value=tempmap[a];
                 }
                 
             }
             
            result=document.querySelector(".Result")
            result.classList.remove("hidden");
            if(tempmap[key]==1)
            {
            h1=result.querySelector("h1");
            h1.textContent=RESULTS_MAP[primo].title;
            p=result.querySelector("p");
            p.textContent=RESULTS_MAP[primo].contents;}
            else{
                h1=result.querySelector("h1");
                h1.textContent=RESULTS_MAP[key].title;
                p=result.querySelector("p");
                p.textContent=RESULTS_MAP[key].contents;
            }
        }
        
    }

    function start()
    {
        scrollTo(0,0);
        const selezionati=document.querySelectorAll(".selected");
        const nonselezionati=document.querySelectorAll(".unselected");
        result=document.querySelector(".Result").classList.add("hidden");
        tempmap={};
        for (let i=0;i<selezionati.length;i++)
        {
            selezionati[i].classList.remove("selected");
            const img = selezionati[i].querySelector(".checkbox");
            img.src="images/unchecked.png"
        }
        for (let i=0;i<nonselezionati.length;i++)
        {
            nonselezionati[i].classList.remove("unselected");
        }
        for(let i=0;i<choice.length;i++)
            {
                choice[i].addEventListener("click",onClick);
            } 
    }

var tempmap={}
const choice=document.querySelectorAll("section div");
for(let i=0;i<choice.length;i++)
{
    choice[i].addEventListener("click",onClick);
}

const restart=document.querySelector(".button");
restart.addEventListener("click",start);








             