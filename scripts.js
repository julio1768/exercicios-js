const button = document.getElementById ('botão')
const select = document.getElementById ('currency-select')

const dolar = 5.2;
const euro = 5.9;
const btc = 134.438;

const convertervalores = () => {
    const input = document.getElementById ('valorparaconverter').value
    const realcorrete = document.getElementById ('valorreal')
    const dolarcorrete = document.getElementById ('valordolar')
     

    
  

    realcorrete.innerHTML = new Intl.NumberFormat ('pt-BR',{
        style: "currency",
        currency:"BRL",
    }).format (input);

    if (select.value === 'bt') {
        dolarcorrete.innerHTML = new Intl.NumberFormat ('en-US',{
            style: "currency",
            currency:"USD",
        }).format (input / btc);
        };
    

    if (select.value === 'Dollar') {
    dolarcorrete.innerHTML = new Intl.NumberFormat ('en-US',{
        style: "currency",
        currency:"USD",
    }).format (input / dolar);
    };

    if (select.value === 'Euro')  {
    dolarcorrete.innerHTML = new Intl.NumberFormat ('de-DE',{
        style: "currency",
        currency:"EUR",
    }).format (input / euro);
    };
};

changeselect = () =>{
    const moedaeua = document.getElementById ('moedadolar')
    const Bandeira = document.getElementById ('bandeira')

    if(select.value === 'Euro'){
        moedaeua.innerHTML = "Euro"
        Bandeira.src = "./imagens/Design sem nome 1.png"

    }
    if(select.value === 'Dollar'){
        moedaeua.innerHTML = "Dolar"
        Bandeira.src= "/imagens/estados-unidos (1) 1.png"
    }
     
    if(select.value === 'bt'){
        moedaeua.innerHTML = "Bitcoin"
        Bandeira.src= "./imagens/Design sem nome (1) 1.png"
    }
     

    }
     
   
    




  button.addEventListener('click',convertervalores)
  select.addEventListener("change",changeselect)
