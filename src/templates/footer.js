import getData from "../utils/getData"

const Footer = async() => {
  const data = await getData();

  let numberPages = [];

  for (let i = 1; i <= data.info.pages; i++){
    numberPages.push(i);
  }

  let a = 0;
  const view = `
  <div class="Footer-pages">
    <h4>All Pages</h4>
    <div class="pages__div">
      ${numberPages.map(() => 
      `<a href="#/?page=${++a}/">${a}</a>`
      ).join('')}
    </div>
  </div>
  `
  return view

}

export default Footer;