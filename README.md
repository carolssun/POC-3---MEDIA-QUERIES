# <h1 align="center">POC 3- Média Queries</h1>

## Sumário
* [Objetivo](#objetivo)
*  [O que é?](#oque)
* [Características do Média Querie](#caracteristicas)
   * [Mobile](#mobile)
   * [Tablet](#tablet)
   * [Desktop](#desktop)
   * [Impressão](#impressao)
   
* [Autoras](#autoras)

<div id="objetivo">

## Objetivo
Esta Prova de Conceito tem como objetivo demonstrar a aplicação na prática de media queries no CSS para criar uma página web responsiva. O objetivo é garantir que o layout e o estilo da página se ajustem de maneira certa em diversos tamanhos de tela e dispositivos. A Prova de Conceito vai mostrar como utilizar as média queries para modificar elementos do design, como fontes, cores de fundo e disposição dos blocos, de acordo com o tamanho da tela.

</div> 

<div id="oque">
  
## O que é

Média Queries são uma ferramenta de estrutura do CSS que permite ajustar o estilo de uma página web de acordo com o tamanho da tela ou tipo de dispositivo, tornando o site mais responsivo e adaptável. Basicamente, elas funcionam como um filtro que define qual estilo CSS será aplicado em cada situação, seja em celulares, tablets ou desktops. Isso ajuda a garantir que seu site tenha uma aparência boa e funcional em qualquer dispositivo. 

Sintaxe:
```css
@media only mediatype and (media feature){
  /*código css*/ ;
}
```

Recomenda-se sempre começar o design responsivo pela menor até a maior, observe o exemplo de um site de adoção de gatos:

</div> 


<div id="caracteristicas">
  
## Características  do Média Queries


<div id="mobile">
  
### Mobile
Criar um design geral
```css
/*design geral*/
nav ul {
    list-style: none;
    padding: 0;
}

.card {
    border: 1px solid #ccc;
    border-radius: 30px;
    padding: 10px;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    width: 300px;
    height: auto;
    margin: 10px;
    box-shadow: 1px 3px 2px rgb(255, 182, 193); 
    background-color: #fff; /* Fundo branco dos cards */
}

.card:hover {
    transform: translateY(-5px); 
    box-shadow: 0 6px 12px rgba(0,0,0,0.3); 
}

.card-img {
    width: 100px; 
    height: 100px;
}
```
Após criado um design gera, definir as característocas específicas para a tela de um celular

``` css
/*MOBILE*/

#galeria {
    display: flex;
    flex-direction: column;
    align-items: center;
}
body{
    background-color: var(--moblie_bg_color) ;
}

nav ul li {
    cursor: pointer;
    background-color: var(--nav_color);
    color: var(--fgcolor);
    border-radius: 30px;

    padding: 10px;
    margin: 10px; 

    font-size: var(--mobile_p_font_size);
    font-weight: bold;
    text-align: center;
}

.card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0;
    gap: 0;
}
p {
    font-size: var(--mobile_p_font_size);
}
h1{
    font-size: var(--mobile_h1);
}
```
</div> 
Visão da tela de um celular:

![image](https://github.com/user-attachments/assets/d517077a-9bc1-480a-b50b-2ae2f3e2b79d)




<div id="tablet">
  
### Tablet
Como o design geral já foi definido, a gente adapta somente as caracteristas necessárias. Para acionar a media query, definimos uma largura mínima de 768 pixels como um ponto de partida para essas mudanças.

``` css
/*TABLET*/
@media screen and (min-width: 768px) {
    #galeria {
        display: flex;
        flex-wrap: wrap; /* Permite que os cards "quebrem" para a linha de baixo */
        justify-content: center;
        flex-direction: row; /* Alinha os cards em linha */
        align-items: center;
    }

    body{
        background-color: var(--tablet_bg_color);
    }

    nav ul li {
        cursor: pointer;
        background-color: var(--fgcolor);
        color: var(--nav_color);
        border-radius: 30px;
    
        padding: 10px;
        margin: 10px; 
    
        font-size: var(--tablet_font_size);
        font-weight: bold;
        text-align: center;
    }
    p {
        font-size: var(--tablet_font_size);
    }
    h1{
        font-size: var(--tablet_h1);
    }
    
}
```
</div>

Visão da tela de um Tablet:

![image](https://github.com/user-attachments/assets/2dcd2c19-1add-4464-b2b4-8e3c930f3c0f)



<div id="desktop">
  
### Desktop
Como o design geral já foi definido, a gente adapta somente as caracteristas necessárias. Para acionar a media query, definimos uma largura mínima de 1200 pixels como um ponto de partida para essas mudanças.

``` css
@media screen and (min-width: 1200px) {
    #galeria {
        display: flex;
        flex-wrap: wrap; /* Permite que os cards "quebrem" para a linha de baixo */
        justify-content: space-around;
        flex-direction: row; /* Alinha os cards em linha */
    }
    body{
        background-color: var(--desktop_bg_color)
    }
    nav{
        background-color: pink;
        border-radius: 30px;
        margin:15px;
    }
    nav ul{
        display:flex;
        justify-content: space-around;
        padding: 15px;
    }

    nav ul li {
        cursor: pointer;
        background-color: var(--nav_color);
        color: var(--fg_color);
     
        font-size: var(--desktop_font_size);
        font-weight: bold;
        text-align: center;
    }
    p {
        font-size: var(--desktop_font_size);
    }
    h1{
        font-size: var(--desktop_h1);
    }
    
}
```
</div>
Visão da tela no desktop:

![image](https://github.com/user-attachments/assets/6c9cdd54-0b88-4227-b703-3433f16c8ae3)


<div id ="impressao">
  
### Impressão
Com a media query tambem é posível mudar os elementos da página na hora da impressão, observe o exemplo em que tiramos o nav e definimos características especificas para impressão na horizontal e na vertical:
``` css
@media print and (orientation:landscape) {
    nav ul{
        display:none;
    }
    #galeria {
        display: flex;
        flex-wrap: wrap; /* Permite que os cards "quebrem" para a linha de baixo */
        justify-content: center;
        flex-direction: row; /* Alinha os cards em linha */
        align-items: center;
    }
    .card{
        max-height: 400px;
    }
}
    @media print and (orientation:portrait) {
        nav ul{
            display:none;
        }
        #galeria {
            display: flex;
            flex-wrap: wrap; /* Permite que os cards "quebrem" para a linha de baixo */
            justify-content: center;
            flex-direction: row; /* Alinha os cards em linha */
            align-items: center;
        }
         

}

```
Impresão Portrait
![image](https://github.com/user-attachments/assets/c99f3410-90bc-4cfc-ab96-739b8f387a64)


Impressão Landscape
![image](https://github.com/user-attachments/assets/511e9c6c-365b-4d52-b7e0-9735e9a872b7)


</div> 

</div>

<div id='autoras'/>
   
## Autoras:
* Carolina Sun Ramos Nantes de Castilho 
* Clara Beatriz Aguiar 
* Erica Gonçalves de Oliveira
* Laura Carolina Balbachan dos Santos
</div>
