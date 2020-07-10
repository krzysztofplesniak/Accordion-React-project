# 1. Webpack: 
   - Babel konfiguracja,
   - SCSS kompilacja do CSS, css-loader, sass-loader,style-loader, postcss-loader, node-sass,
   - minifikacja pliku bundle.js,
   - mini-css-extract-plugin", autoprefixer, nanocss, html-webpack-plugin,
   - mapy SASS w celu debugowania kodu,
   - mode develompent/production,     
   - concurrently dla backendu i dla front "npm run dev"  => concurrently #1npm run dev-server #2json-server
   
# 2. BEM 
  - 2 komponenty <Header> i <Accordion> oraz klasa container   
  - struktura: 
    - BLOCK => accordion,
    - ELEMENTS => accordion__content, accordion__button, accordion__info, accordion__info-text, accordion__title, accordion__icon, 
    - MODIFIER => accordion--title, accordion--subtitle, accordion--open, accordion--dark-theme, accordion--light-theme 
    
# 3. SASS podział na pliki    
   - style.scss  =>  główny plik, kaskadowe importy plików .scss 
   - podział na pliki i struktura katalogów: base, variables, header, acccordion, containers, buttons, mediaqueries   
   - body.scss : boxsizing, resety padding i margin, 
   - variables.scss: fonty, kolory, spacingi , paddingi/marginy, breakpointy
# 4. Animacje transistion/transform/rotate 
   - pojawienie się bloku accordion__content =>  transistion: max-height 0.2s easy-in-out, 
   - animacja po najechaniu na strzałkę chevron => transform: rotate(90deg),
   
# 5. Backend fake'owego JSON-server npm package
   - JSON-server package jako backend w pliku db.json 
   - useEffect asynchroniczny na axios 
   
# 6. Responsywność
   - mediaqueries.scss osbny plik,
   - container => szerokość mniejsza dla ekranu poniżej 900px,
   - accordion__button => bez paddingów i mniejszy, 
   - accordion__text-info i accordion__ title => czcionki mniejsza, 
   
# 7. GitHub & Heroku
    - automatyczny build przy pushowaniu zmian oraz deploy na heroku (do zrobienia)
    
# 8. Inne
  - biblioteki: axios, uuid, boostrap, react-spinners
