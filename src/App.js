import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

const h1 = <h1 id='alguma coisa'>Ronald</h1>

const myDiv = (
  <div>
    <h1>Hello World</h1>
  </div>
)

const myList = (
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>
)

const myBig = <h1 className = "big_red"> ESSE TEXTO É BIG </h1>

const profile = (
  <div className='big_red'>
    <h1>Rônald Gostoso</h1>
    <article>
      Eu gosto de PW
    </article>
    <br/>
    <article>
      Eu não gosto de PW
    </article>

  </div>
)

const js = <h1>3+2 = {3+2}</h1>

const theBestString = 'O melhor estado do mundo';

function mudaFoto(e) {
  e.target.setAttribute('src', 'https://s2.glbimg.com/T59xmzq010emU6Yz9QLQ_-I6kVM=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/d/p/5f2cNnRHy7ZaMIe4OFLg/master-chief-fortnite-outfit-1920x1080-8ff20e89e5e3.jpg');
  e.target.setAttribute('alt', 'Masterchief hehe boy')
}

const foasdto = (
  <img onClick = {mudaFoto} src='https://www.einerd.com.br/wp-content/uploads/2022/03/halo-master-chief.jpg' alt='Masterchief2 hehe boy 2'></img>
)

const fotasdo2 = (
  <img onClick = {mudaFoto} src='https://www.einerd.com.br/wp-content/uploads/2022/03/halo-master-chief.jpg' alt='Masterchief2 hehe boy 2'></img>
)

// function caraouCoroa() {
//   return Math.random() 
// }

// let img;

// if (caraouCoroa() === 'cara') {

// }

const julgamento = Math.random() < 0.5;

const comidasFavoritas = (
  <div>
    <lu>
      <li>Pizza</li>
      <li>Hambúrguer</li>
      {!julgamento && <li>Sushi</li>}
      <li>Lasanha</li>
      <li>Pudim</li>
    </lu>
  </div>
)

// function infinito() {
//   const i = 1;
//   while (i = 1) {
//     const c = true;
//     if (c=true) {
//       const foto = 'https://www.einerd.com.br/wp-content/uploads/2022/03/halo-master-chief.jpg'
//     } else {
//       const foto ='https://www.einerd.com.br/wp-content/uploads/2022/03/halo-master-chief.jpg'
//     }
//   }
//   return 
// }

// infinito()


class MyComponentsClass extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
          Rônald é o mais gostosão!!
        </p>
      <cite>
        <a target='_blank' href='www.google.com.br'>Google</a>
      </cite>
      </blockquote>
    )
  }
};

const owl = {
  title: 'Coruja',
  src: 'https://static.wikia.nocookie.net/harrypotter/images/6/6b/Hedwig_Snowy_Owl_PM.webp/revision/latest?cb=20220717061707&path-prefix=pt-br'
};

class Owl extends React.Component {
  render() {
    return (
      <div>
        <h1>{owl.title}</h1>
        <img src={owl.src} alt={owl.title}/>
      </div>
    )
  }
};

const teste = new Owl

const harryPotter = [
  {
    title: 'Coruja',
    src: 'https://static.wikia.nocookie.net/harrypotter/images/6/6b/Hedwig_Snowy_Owl_PM.webp/revision/latest?cb=20220717061707&path-prefix=pt-br'
  },
  {
    title: 'Hermione',
    src: 'https://static.wikia.nocookie.net/harrypotter/images/5/56/Hermione-granger-deathly-hallows-part-1-portrait-1.jpg/revision/latest?cb=20220621185536&path-prefix=pt-br'
  },
  {
    title: 'Harry Potter',
    src: 'https://ogimg.infoglobo.com.br/in/24440303-24f-31c/FT1086A/87996533_SCAtor-Daniel-Redcliff-como-Harry-Potter.-Foto-Divulgacao.jpg'
  }
];

class Harry extends React.Component{
  render() {
    const elemento = harryPotter[2];
    return(
      <div>
        <h1>{elemento.title}</h1>
        <img src={elemento.src}/>
      </div> 
    )
  }
}

ReactDOM.render(<Harry/>, document.getElementById('Teste'));

// ReactDOM.render(<h1>{foto2}</h1>, document.getElementById('Teste'));


// ReactDOM.render(<h1 align = 'center'>{js}</h1>, document.getElementById('Teste'));