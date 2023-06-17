import './services .css';
// import ContactModal from "../contact_modal/ContactModal";
import Cards from "../card/Cards";

import injection from "./injection (1).webp"
import massage_drensge from "./massage_drainage.webp";
import massage_celulit from "./massage_anticelulit.webp"
import mask from "./mask (1).webp"
import apparat_face from "./Apparat__technology_face.webp"
import massage_hend from "./massage_hend.webp"
import apparat_body from  "./apparat_body.webp"
import React from "react";

const certificates = [{
  procedure: 'ИНЪЕКЦИОННАЯ КОСМЕТОЛОГИЯ',
  promo:`Идеальное лицо без операций! Быстрые и безопасные процедуры с \n
    использованием инъекций для устранения морщин, корректировка формы губ, \n
    подтяжки контуров и моделирования овала лица. \n`,
  price: 10000,
  image: injection,
  description: "Быстрый уть к непревзойденной красоте! \n" +
    "Ботулотоксин: избавьтесь от мимических морщин на лбу, между бровями и вокруг глаз для молодого и свежего вида.\n" +
    "Дермальные наполнители: восстановите утраченный объем, подтяните овал лица и улучшите контуры.\n" +
    "Увеличение губ: придайте губам объем и форму, создавая соблазнительную улыбку.\n" +
    "Мезотерапия: питайте кожу полезными веществами для улучшения текстуры и цвета.\n" +
    "Биоревитализация: омолаживайте и увлажняйте кожу, снижайте пигментацию и улучшайте тонус.\n" +
    "Наши опытные косметологи применяют передовые методы и технологии, чтобы добиться естественных и " +
    "долгосрочных результатов. Приходите в Soffi Cosmetology и доверьте свою кожу профессионалам!\n"
},{
  procedure: 'ЭСТЕТИЧЕСКАЯ КОСМЕТОЛОГИЯ',
  promo: "Восстановление молодости вашей кожи! Пилинги, маски, мезотерапия и другие процедуры," +
    " способствуют уменьшению пигментации, повышению уровня увлажнения, улучшению цвета и структуры кожи.",
  price: 10000,
  image: mask,
  description: "Избавьтесь от нежелательных волос надолго быстро и безболезненно." +
    " Фотоомоложение: сократите пигментацию, улучшите текстуру и тонус кожи, верните ей молодость." +
    "Лечение акне: избавьтесь от воспалений, следов после акне и улучшите состояние кожи лица." +
    "Химический пилинг: освежите кожу, снизьте пигментацию, улучшите ее структуру и сияние." +
    "Контурная пластика: подчеркните контуры лица, устраните морщины и депрессии, создайте гармоничные пропорции." +
    "Наши высококвалифицированные специалисты используют инновационные методы и современное оборудование, чтобы достичь" +
    "потрясающих результатов."
},{
  procedure: 'КЛАССИЧЕСКИЙ МАССАЖ',
  promo: "Заслуженный отдых и расслабление. Непревзойденное сочетание оздоровительных техник помогает снять напряжение," +
    " улучшить кровообращение, снимает мышечные спазмы и улучшает тонус кожи. Почувствуйте себя помолодевшим",
  price: 10000,
  image: massage_hend,
  description: "Позвольте себе заслуженый отдых \n"+
    "Классический массаж тела: расслабьтесь и насладитесь глубоким расслаблением мышц, снятием напряжения и стресса." +
    "Массаж спины и шеи: устраните неприятные ощущения, снимите мышечное напряжение, улучшите осанку." +
    "Массаж ног: снимите усталость, снижение отеков, улучшите кровообращение и тонус мышц." +
    "Антицеллюлитный массаж: улучшите текстуру кожи, снизьте целлюлит, подтяните кожу." +
    "Релаксационный массаж: окунитесь в состояние глубокого релакса, снятия стресса и улучшения общего самочувствия.\n" +
    "Наши опытные массажисты используют разнообразные техники и масла."
},{
  procedure: 'АНТИЦЕЛЮЛИТНЫЙ МАССАЖ',
  promo: "Гладкая и упругая кожа! Профессиональный массаж, направленный на борьбу с целлюлитом, улучшение микроциркуляции," +
    " разглаживание кожи и придание ей более упругого вида.",
  price: 10000,
  image: massage_celulit,
  description: "Подтянутая и упругая кожа. Попробуйте наш антицеллюлитный массаж! " +
    "Мы предлагаем профессиональные услуги: Массаж проблемных зон: концентрируйтесь на тех областях, где целлюлит наиболее " +
    "заметен, таких как бедра, ягодицы и живот Массаж с применением антицеллюлитных средств: используйте специальные кремы, масла " +
    "или гели, которые помогут бороться с целлюлитом и улучшат состояние вашей кожи. Ручной лимфодренаж: улучшайте лимфатический " +
    "поток, уменьшайте отечность и помогайте организму избавляться от токсинов.Комплексный подход: наши опытные массажисты" +
    " разработают индивидуальную программу, сочетающую различные техники и средства, чтобы достичь наилучших результатов."

  },{
  procedure: 'ЛИМФОДРЕНАЖНЫЙ МАССАЖ',
  promo: "Лимфодренажный массаж: этот массаж способствует выведению токсинов и лишней жидкости из организма, помогая " +
    "более эффективно бороться с отеками, улучшая микроциркуляцию и тонизируя кожу.",
  price: 10000,
  image: massage_drensge,
  description: "Оздоровите свой организм с нашим лимфодренажным массажем! Мы предлагаем профессиональные услуги:\n" +
    "\n" +
    "Ручной лимфодренаж: активизируйте лимфатическую систему, улучшайте отток лимфы, снижайте отечность и улучшайте " +
    "общее состояние организма.\n" +
    "Лимфодренаж лица и шеи: освободите лицо от отечности, улучшьте цвет лица, подтяните кожу и стимулируйте обновление клеток.\n" +
    "Лимфодренаж ног: снижайте отечность, улучшайте кровообращение, уменьшайте ощущение тяжести в ногах.\n" +
    "Комплексный лимфодренаж: наши специалисты разработают индивидуальную программу, сочетающую различные техники и массажные движения, " +
    "чтобы достичь оптимальных результатов.\n" +
    "Расслабляющий лимфодренаж: насладитесь приятными ощущениями релаксации, снятия стресса и улучшения общего самочувствия.\n" +
    "Наши опытные массажисты проведут профессиональный лимфодренаж, который поможет вам почувствовать себя свежими, освобожденными от отечности и" +
    " с более здоровым организмом. " +
    "Приходите к нам и позвольте вашему организму насладиться благотворными эффектами лимфодренажного массажа!",
},{
  procedure: 'АППАРАТНАЯ КОСМЕТОЛОГИЯ ДЛЯ ТЕЛА',
  promo: "Улучшение форм и контуров! Безопасные и эффективные процедуры, такие как лазерное липолитическое омоложение, радиочастотный " +
    "массаж и другие, которые помогают уменьшить объемы, подтянуть кожу, улучшить эстетику тела.",
  price: 10000,
  image: apparat_body,
  description: "Оживите свою кожу и тело с нашей аппаратной косметологией! Мы предлагаем современные процедуры для тела, которые помогут вам достичь желаемых результатов:\n" +
    "\n" +
    "RF-лифтинг: мягко и эффективно улучшайте тонус кожи, устраняйте целлюлит и подтягивайте контуры тела с помощью радиочастотного лифтинга.\n" +
    "Кавитация: разрушайте жировые отложения и снижайте объемы с помощью ультразвуковой кавитации, не нарушая целостность кожи.\n" +
    "LPG-массаж: стимулируйте метаболические процессы, улучшайте лимфатический дренаж и разглаживайте кожу с помощью механического массажа LPG.\n" +
    "Дерматологический роликовый массаж: улучшайте микроциркуляцию, стимулируйте синтез коллагена и эластина, и повышайте упругость кожи с помощью роликового массажа.\n" +
    "Инъекции липолитиков: снижайте жировые отложения и целлюлит с помощью инъекций специальных препаратов, которые расщепляют жир.\n" +
    "Наши профессиональные косметологи применяют передовые технологии и методики, чтобы помочь вам достичь сияющей, упругой и более стройной фигуры. Приходите к нам и погрузитесь" +
    " в мир инновационной аппаратной косметологии для тела!"
},{
  procedure: 'АППАРАТНАЯ КОСМЕТОЛОГИЯ ДЛЯ ЛИЦА',
  promo: " Молодость и свежесть кожи! Инновационные методики, такие как ультразвуковой пилинг, RF-лифтинг, дермабразия и другие, которые помогают" +
    " улучшить текстуру кожи, повысить упругость, увлажнение",
  price: 10000,
  image: apparat_face,
  description: "Улучшьте свою кожу и придайте своему лицу молодость и свежесть с помощью нашей аппаратной косметологии!" +
    " Мы предлагаем передовые процедуры, которые помогут вам достичь желаемых результатов:\n" +
"RF-лифтинг лица: подтягивайте контуры лица, улучшайте тонус и упругость кожи с помощью радиочастотного лифтинга.\n" +
"Ультразвуковой пилинг: очищайте и омолаживайте кожу лица, снижайте морщины и улучшайте текстуру кожи с помощью ультразвукового пилинга.\n" +
"Микротоковая терапия: стимулируйте мышцы лица, повышайте тонус и упругость кожи, а также улучшайте микроциркуляцию с помощью микротоковой терапии.\n" +
"Дермабразия: удаляйте ороговевшие клетки кожи, выравнивайте текстуру и тон лица, а также стимулируйте процесс регенерации с помощью дермабразии.\n" +
"Фотоомоложение: улучшайте тон и текстуру кожи, снижайте пигментацию и стимулируйте процесс производства коллагена с помощью фотоомоложения.\n" +
"Наши опытные косметологи используют передовые аппаратные методики, чтобы помочь вашей коже выглядеть молодой, свежей и сияющей. Приходите к нам и насладитесь" +
" инновационными процедурами аппаратной косметологии для лица!"
}]

function Services(props) {

  return (
      <main  className="services__content">
        <h4 className="header-text">Наши услуги</h4><br/>
        <section className="services__list">
          <Cards arrData={certificates}/>
        </section>
      </main>
  );
}

export default Services;
