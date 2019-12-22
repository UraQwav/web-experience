//флаг выдвинутости окна диалога
var dialogOn = false;
//подготовка диалогового модуля
function prepare_environment(){
	//добавление диалогового модуля на страницу
	// document.body.innerHTML+="<div id='dialog' class='dialog' style='margin-left:-25px;'>"+
	// 	"<div class='label' onclick='toggleDialog()'>Нажми, чтобы спросить!</div>"+
	// 	"<div class='header'>История:</div>"+
	// 	"<div class='history' id='history'></div>"+
	// 	"<div class='question'><input id='Qdialog' placeholder='Введите вопрос'/><br>"+
	// 		"<button onclick='ask(\"Qdialog\")'>Спросить</button>"
	// 	"</div>"+
	// "</div>";
	// //добавление окна для отображения изображений крупным планом
	// document.body.innerHTML+="<div id='imgalert'  style='display:none'>"+
	// 	"<div class='bg' onclick='hide(\"imgalert\")'>&nbsp;</div>"+
	// 	"<img id='img_in_alert' src='' />"+
	// "</div>";

	//РАСПОЗНАВАНИЕ РЕЧИ
	//поле с распознаванием речи
	// Задаем API-ключ
	window.ya.speechkit.settings.apikey = '5c6d6536-b453-4589-9bc7-f16c7a795106';
	// Добавление элемента управления "Поле для голосового ввода".
	var textline = new ya.speechkit.Textline(
		'Qdialog', {
			onInputFinished: function(text) {
			ask("Qdialog");
		  }
		});
	//КОНЕЦ РАСПОЗНАВАНИЯ РЕЧИ
}

//автоматический запуск подготовки диалогового модуля при загрузке страницы
window.onload = function(){ 
	setTimeout(function(){
		var preloader = document.getElementById('page-preloader');
		if(!preloader.classList.contains('done')){
		  preloader.classList.add('done');
		}
	  },1000);
	  prepare_environment();
};

//скрытие окна крупного плана при щелчке на фон
function hide(elem_id){
	$("#"+elem_id).css({"display":"none"});
}

//ДИАЛОГ
//показ-скрытие диалогового модуля
function toggleDialog(){
	//закрытие
	if(dialogOn){
		$("#dialog").animate({"margin-left":"1px"}, 300, function() {});
		dialogOn=false;
	}
	//открытие
	else{
		$("#dialog").animate({"margin-left":"-450px"}, 300, function() {});
		dialogOn=true;
	}
	console.log(knowledge.length);
}
// [ "измерения ЭДС концентрационных гальванических элементов", 
// "являются", 
// "очень удобным, надёжным и точным методом экспериментального определения " +
// 		"различных свойств веществ и растворов электролитов" ], 
// [ "схемы материального баланса в электродных пространствах", 
// "можно составить", 
// "пользуясь числами переноса ионов для любых концентрационных элементов "+
// // 		"с переносом" ], 
// [ "электрохимия", 
// "- это", 
// "раздел химической науки, в котором рассматриваются системы и межфазные границы при протекании через них электрического тока, исследуются процессы в проводниках, на электродах и в ионных проводниках." ], 
// [ "электрохимия", 
// "- это", 
// "раздел химической науки, в котором рассматриваются системы и межфазные границы при протекании через них электрического тока, исследуются процессы в проводниках, на электродах и в ионных проводниках." ], 
// [ "электрохимия", 
// "- это", 
// "раздел химической науки, в котором рассматриваются системы и межфазные границы при протекании через них электрического тока, исследуются процессы в проводниках, на электродах и в ионных проводниках." ], 
// [ "общий объем программных средств", 
// "рассчитывается", 
// "по формуле: <br><img src='image/21591.jpg'><br>где V<sub>о</sub> – общий объем программного средства, условных машино-команд; <br>V<sub>i</sub> – объем i-ой функции ПС, условных машино-команд;<br>n – общее число функций.<br>" ], 
// [ "правильно разомкнутые гальванические цепи, эквивалентные между собой", 
// "выглядят", 
// "следующим образом: <br><img src='image/21591.jpg'>" ], 
// //связь с картинкой в ответе - как выглядит схема измерения ЭДС ГЭ
// [ "схема измерения ЭДС ГЭ компенсационным методом", 
// "показана", 
// "на рисунке: <br><img src='image/21591.jpg'/>" ], 
// //связь с картинкой в ответе - как выглядят интегральные и дифференциальные кривые титрования щелочью кислот
// [ "интегральные (а, в) и дифференциальные (б, г) кривые титрования щелочью сильной кислоты (а, б) и смеси сильной и слабой кислот (в, г)", 
// "показаны", 
// "на рисунке: <br><img src='image/21591.jpg'/>" ], 
// //связь с анимацией в ответе - кто является первооткрывателем микробов
// [ "первооткрывателем мира микробов", 
// "считается", 
// "Антони ван Левенгук (Antony van Leeuwenhoek,  1632-1723), который жил в Голландии и занимался, в основном, пошивом одежды: <br><embed src='1a.swf'/>" ],
// ['Формула (1) при использовании современных терминов выражает <b>закон Ома для полной цепи</b>:',
// 'записывается',
// '<img src="Index_files/image/21591.jpg"style=" width:80%" alt="{\varepsilon \!}">'],
// ['В векторном виде в формулировке Ш. Кулона закон записывается следующим образом:',
// 'записывается',
// ' <dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow class="MJX-TeXAtom-ORD"> <mstyle displaystyle="true" scriptlevel="0"> <msub> <mrow class="MJX-TeXAtom-ORD"> <mrow class="MJX-TeXAtom-ORD"> <mover> <mi>F</mi> <mo stretchy="false">→<!-- → --></mo> </mover> </mrow> </mrow> <mrow class="MJX-TeXAtom-ORD"> <mn>12</mn> </mrow> </msub> <mo>=</mo> <mi>k</mi> <mo>⋅<!-- ⋅ --></mo> <mrow class="MJX-TeXAtom-ORD"> <mfrac> <mrow> <msub> <mi>q</mi> <mrow class="MJX-TeXAtom-ORD"> <mn>1</mn> </mrow> </msub> <mo>⋅<!-- ⋅ --></mo> <msub> <mi>q</mi> <mrow class="MJX-TeXAtom-ORD"> <mn>2</mn> </mrow> </msub> </mrow> <msubsup> <mi>r</mi> <mrow class="MJX-TeXAtom-ORD"> <mn>12</mn> </mrow> <mrow class="MJX-TeXAtom-ORD"> <mn>2</mn> </mrow> </msubsup> </mfrac> </mrow> <mo>⋅<!-- ⋅ --></mo> <mrow class="MJX-TeXAtom-ORD"> <mfrac> <msub> <mrow class="MJX-TeXAtom-ORD"> <mrow class="MJX-TeXAtom-ORD"> <mover> <mi>r</mi> <mo stretchy="false">→<!-- → --></mo> </mover> </mrow> </mrow> <mrow class="MJX-TeXAtom-ORD"> <mn>12</mn> </mrow> </msub> <msub> <mi>r</mi> <mrow class="MJX-TeXAtom-ORD"> <mn>12</mn> </mrow> </msub> </mfrac> </mrow> <mo>,</mo> </mstyle> </mrow> <annotation encoding="application/x-tex">{\displaystyle {\vec {F}}_{12}=k\cdot {\frac {q_{1}\cdot q_{2}}{r_{12}^{2}}}\cdot {\frac {{\vec {r}}_{12}}{r_{12}}},}</annotation> </semantics> </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d950de9c22bcf12eea996a626f940f693ecd9868" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -3.005ex; width:22.728ex; height:6.676ex;" alt="\vec{F}_{12}=k\cdot\frac{q_1 \cdot q_2}{r_{12}^2} \cdot \frac{\vec{r}_{12}}{r_{12}},"></span></dd> где <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow class="MJX-TeXAtom-ORD"> <mstyle displaystyle="true" scriptlevel="0"> <msub> <mrow class="MJX-TeXAtom-ORD"> <mrow class="MJX-TeXAtom-ORD"> <mover> <mi>F</mi> <mo stretchy="false">→<!-- → --></mo> </mover> </mrow> </mrow> <mrow class="MJX-TeXAtom-ORD"> <mn>12</mn> </mrow> </msub> </mstyle> </mrow> <annotation encoding="application/x-tex">{\displaystyle {\vec {F}}_{12}}</annotation> </semantics> </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/02692d91696638b124e69ce91adc174c9eb1b825" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:3.667ex; height:3.343ex;" alt="\vec{F}_{12}"></span>&nbsp;— сила, с которой заряд 1 действует на заряд 2; <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow class="MJX-TeXAtom-ORD"> <mstyle displaystyle="true" scriptlevel="0"> <msub> <mi>q</mi> <mrow class="MJX-TeXAtom-ORD"> <mn>1</mn> </mrow> </msub> <mo>,</mo> <msub> <mi>q</mi> <mrow class="MJX-TeXAtom-ORD"> <mn>2</mn> </mrow> </msub> </mstyle> </mrow> <annotation encoding="application/x-tex">{\displaystyle q_{1},q_{2}}</annotation> </semantics> </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/797a010650ebabd81cd867b5a883b4ae455e4157" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:5.263ex; height:2.009ex;" alt="q_1, q_2"></span>&nbsp;— величина зарядов; <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow class="MJX-TeXAtom-ORD"> <mstyle displaystyle="true" scriptlevel="0"> <msub> <mrow class="MJX-TeXAtom-ORD"> <mrow class="MJX-TeXAtom-ORD"> <mover> <mi>r</mi> <mo stretchy="false">→<!-- → --></mo> </mover> </mrow> </mrow> <mrow class="MJX-TeXAtom-ORD"> <mn>12</mn> </mrow> </msub> </mstyle> </mrow> <annotation encoding="application/x-tex">{\displaystyle {\vec {r}}_{12}}</annotation> </semantics> </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/45dfb37b529cb59454cc81ffa9dacca705904c95" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:3.114ex; height:2.676ex;" alt="\vec{r}_{12}"></span>&nbsp;— радиус-вектор (вектор, направленный от заряда 1 к заряду 2, и равный, по модулю, расстоянию между зарядами&nbsp;— <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow class="MJX-TeXAtom-ORD"> <mstyle displaystyle="true" scriptlevel="0"> <msub> <mi>r</mi> <mrow class="MJX-TeXAtom-ORD"> <mn>12</mn> </mrow> </msub> </mstyle> </mrow> <annotation encoding="application/x-tex">{\displaystyle r_{12}}</annotation> </semantics> </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/2342fe122ce8e4694f81037e3d07eec0c4454715" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:2.95ex; height:2.009ex;" alt="r_{12}"></span>); <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow class="MJX-TeXAtom-ORD"> <mstyle displaystyle="true" scriptlevel="0"> <mi>k</mi> </mstyle> </mrow> <annotation encoding="application/x-tex">{\displaystyle k}</annotation> </semantics> </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:1.222ex; height:2.176ex;" alt="k"></span>&nbsp;— коэффициент пропорциональности.']

//база знаний
var knowledge = [ 
    [ "идеальный газ", 
        "- это", 
        " теоретическая модель, широко применяемая для описания свойств и поведения реальных газов при умеренных давлениях и температурах." ], 
		[ "скорость", 
        "- это", 
        "векторная физическая величина, характеризующая быстроту перемещения и направление движения материальной точки относительно выбранной системы отсчёта; по определению, равна производной радиус-вектора точки по времени." ], 
		[ "молекулярно кинетическая теория", 
        "- это", 
        "раздел молекулярной физики, который рассматривает свойства веществ на основании определенных законов взаимодействия между атомами, из которых состоит вещество и на основе представлений о молекулярном строении веществ." ], 
		[ "молекула", 
        "- это", 
        "минимальная частица любого вещества, которая только может существовать самостоятельно." ], 
		[ "электрон", 
        "- это", 
		"стабильная отрицательно заряженная элементарная частица." ],
		[ "атом", 
        "- это", 
        "частица вещества микроскопических размеров и массы, наименьшая часть химического элемента, являющаяся носителем его свойств." ],  
		[ "равновесным стационарным состоянием газа ", 
        "называется", 
        "такое состояние, при котором количество молекул, приходящихся на заданный интервал скоростей, остается постоянным с течением времени." ], 
		[ "Экстремум функции", 
        "- это", 
        "максимальное или минимальное значение функции." ], 
		[ "энергия", 
        "- это", 
        " скалярная физическая величина, являющаяся единой мерой различных форм движения и взаимодействия материи, мерой перехода движения материи из одних форм в другие." ], 
		[ "кинетическая энергия", 
        "- это", 
        "скалярная функция, являющаяся мерой движения материальных точек, образующих рассматриваемую механическую систему, и зависящая только от масс и модулей скоростей этих точек." ], 
		[ "электронная лампа", 
        "- это", 
        "электровакуумный прибор (точнее, вакуумный электронный прибор), работающий за счёт управления интенсивностью потока электронов, движущихся в вакууме или разрежённом газе между электродами. " ], 
		[ "электровакуумный прибор", 
        "- это", 
        " устройство, предназначенное для генерации, усиления и преобразования электромагнитной энергии, в котором рабочее пространство освобождено от воздуха и защищено от окружающей атмосферы непроницаемой оболочкой. " ], 
		[ "термоэлектронная эмиссия", 
        "- это", 
        " явление выхода электронов из твёрдого тела, металла или карбидов или боридов переходных металлов в свободное пространство, обычно в вакуум или разрежённый газ при нагреве его до высокой температуры." ], 
		[ "диод", 
        "- это", 
        " электронный элемент, обладающий нелинейной вольт-амперной характеристикой." ], 
		[ "электрический ток", 
        "- это", 
        " направленное (упорядоченное) движение частиц или квазичастиц — носителей электрического заряда." ], 
		[ "катод", 
        "- это", 
        "электрод некоторого прибора, из которого вытекает электрический ток (в его конвенциональном понимании как поток положительных зарядов), в противоположность аноду в который он втекает. " ], 
		[ "анод", 
        "- это", 
        " электрод некоторого прибора, в который втекает электрический ток (в его конвенциональном понимании как поток положительных зарядов), в противоположность катоду из которого он вытекает." ], 
		[ "электронное облако", 
        "- это", 
        "наглядная модель, отражающая распределение функции плотности вероятности обнаружения электрона в атоме или молекуле в зависимости от энергии электрона" ], 
		[ "электрическое напряжение", 
        "- это", 
        " физическая величина, значение которой равно работе эффективного электрического поля (включающего сторонние поля), совершаемой при переносе единичного пробного электрического заряда из точки A в точку B." ], 
		[ "электрическое сопротивление", 
        "- это", 
        " физическая величина, характеризующая свойство проводника препятствовать прохождению электрического тока и равная отношению напряжения на концах проводника к силе тока, протекающего по нему" ], 
		[ "реостат", 
        "- это", 
        "<p>электрический аппарат, изобретённый Иоганном Христианом Поггендорфом, служащий для регулировки силы тока и напряжения в электрической цепи путём получения требуемой величины сопротивления.</p><img src='Index_files/image/274px-Johann_Christian_Poggendorff.jpg'/><p>И.Х. Поггендорф </p>" ], 
		[ "запирающие напряжение", 
        "- это", 
        " такое минимальное напряжение, при котором фотоэлектроны перестают вылетать из металла." ], 
		[ "ускоряющие напряжение", 
        "- это", 
        "  разность потенциалов между катодом и анодом, генерирующая электрическое поле для ускорения электронов." ], 
		[ "амперметр", 
        "- это", 
        " прибор для измерения силы тока в амперах." ], 
		[ "1 ампер", 
        "- это", 
        " единица измерения силы электрического тока в Международной системе единиц (СИ), одна из семи основных единиц СИ." ], 
		[ "вольтметр", 
        "- это", 
        " электроизмерительный прибор непосредственного отсчёта для определения напряжения или ЭДС в электрических цепях." ], 
		[ "1 вольт", 
        "- это", 
        " <p>в Международной системе единиц (СИ) единица измерения электрического потенциала, разности потенциалов, электрического напряжения и электродвижущей силы. Названа в честь итальянского физика и физиолога Алессандро Вольты</p><img src='Index_files/image/220px-Alessandro_Volta.jpeg'/><p>Алессандро Вольта</p>" ], 
		[ "резистор", 
        "- это", 
        "  пассивный элемент электрических цепей, обладающий определённым или переменным значением электрического сопротивления, предназначенный для линейного преобразования силы тока в напряжение и напряжения в силу тока, ограничения тока, поглощения электрической энергии и др." ], 
		[ "вольт-амперная характеристика", 
        "- это", 
        " зависимость тока, протекающего через двухполюсник, от напряжения на этом двухполюснике. Описывает поведение двухполюсника на постоянном токе." ], 		
		[ "распределение Максвелла", 
        "- это", 
        "  распределение вероятности, встречающееся в физике и химии. Оно лежит в основании кинетической теории газов, которая объясняет многие фундаментальные свойства газов, включая давление и диффузию." ], 
		[ "Максвелл", 
        "выглядит", 
        "<p>как на фото:</p><img src='Index_files/image/James_Clerk_Maxwell.png'/>" ], 
		[ "максвелл", 
        "выглядит", 
        "<p>как на фото:</p><img src='Index_files/image/James_Clerk_Maxwell.png'/>" ], 
		[ "функция распределения Максвелла", 
        "записывается", 
		"<p>как :</p><img src='Index_files/image/Annotation 2019-12-11 105030.png'/>" ], 
		[ "Вольта", 
        "выглядит", 
		"<p>как на фото:</p><img src='Index_files/image/220px-Alessandro_Volta.jpeg'/>" ], 
		[ "вольта", 
        "выглядит", 
		"<p>как на фото:</p><img src='Index_files/image/220px-Alessandro_Volta.jpeg'/>" ], 
		[ "Поггендорф", 
        "выглядит", 
		"<p>как на фото:</p><img src='Index_files/image/274px-Johann_Christian_Poggendorff.jpg'/>" ],
		[ "Ом", 
        "выглядит", 
		"<p>как на фото:</p><img src='Index_files/image/274px-Johann_Christian_Poggendorff.jpg'/>" ],
		[ "ом", 
        "выглядит", 
		"<p>как на фото:</p><img src='Index_files/image/274px-Johann_Christian_Poggendorff.jpg'/>" ],
		[ "амперметр", 
        "выглядит", 
		"<p>как на фото:</p><img src='Index_files/image/274px-Johann_Christian_Poggendorff.jpg'/>" ],
		[ "установка", 
        "выглядит", 
		"<p>как на фото:</p><img src='Index_files/image/274px-Johann_Christian_Poggendorff.jpg'/>" ],
		[ "вольтметр", 
        "выглядит", 
		"<p>как на фото:</p><img src='Index_files/image/274px-Johann_Christian_Poggendorff.jpg'/>" ],
		[ "Цель работы", 
        "звучит", 
		"<p>как : Вычислить скорость электронного газа</p>" ],
		[ "Обрудование установки", 
        "включает", 
		"<p>в себя амперметр, вольтметр, диод, реостат</p>" ],
		[ "формула Минимальной скорости", 
        "записывается", 
		"<p>как на фото:</p><img src='Index_files/image/274px-Johann_Christian_Poggendorff.jpg'/>" ],
		[ "сила тока", 
        "измеряется", 
		"<p>в Амперах</p>" ],
		[ "напряжение", 
        "измеряется", 
		"<p>в вольтах</p>" ],
		[ "поггендорф", 
        "выглядит", 
		"<p>как на фото:</p><img src='Index_files/image/274px-Johann_Christian_Poggendorff.jpg'/>" ],
		[ "вакуум", 
        "- это", 
		" пространство, свободное от вещества." ],
		[ "электронный газ", 
        "- это", 
		" модель в физике твердого тела, описывающая поведение электронов в телах с электронной проводимостью. " ],
	];

//поиск и вывод ответа и вопроса
function ask(questionInput){
	var question=document.getElementById(questionInput).value.trim();
	//выдвижение диалогового модуля
	$("#dialog").animate({"margin-left":"-450px"}, 300, function() {});
	dialogOn=true;
	//вывод вопроса
	//document.getElementById("history").innerHTML+="<div class='question'>"+question+"</div>";
	var newDiv=document.createElement("div");
	newDiv.className='question';
	newDiv.innerHTML=question;
	document.getElementById("history").appendChild(newDiv);
	//поиск и вывод ответа
	//document.getElementById("history").innerHTML+="<div class='answer'>"+getAnswer(question)+"</div>";
	//создаем блок <div>
	newDiv=document.createElement("div");
	//задаем класс оформления созданного блока
	newDiv.className='answer';
	//получаем ответ на вопрос и наполняем им созданный блок
	newDiv.innerHTML=getAnswer(question);
	//ОЗВУЧКА - СИНТЕЗ РЕЧИ
	//флаг, нужна ли озвучка (не нужна, если есть анимация)
	var needSound=true;
	//проходим по элементам HTML-кода ответа
	for(var i=0;i<newDiv.childNodes.length;i++){
		//если находим элемент <embed>
		if(newDiv.childNodes[i].tagName=="EMBED"){
			//alert("EMBED detected.");
			//сбрасываем флаг и выходим из цикла
			needSound=false;
			break;
		}
	}
	//если флаг не был сброшен
	if(needSound){
		//добавляем в ответ тег аудио, ссылающийся на звук от мостика на синтезатор речи Яндекса
		//alert("Incoming transmission.");
		newDiv.innerHTML+="<audio autoplay='true' src='https://distrib.belstu.by/yandex-tts-bridge/?text="+(newDiv.innerText||newDiv.textContent)+"'></audio>";
	}
	// КОНЕЦ ОЗВУЧКИ
	document.getElementById("history").appendChild(newDiv);
	// ЕЩЕ КУСОЧЕК ДЛЯ ОЗВУЧКИ
	//запуск звука
	if(newDiv.lastChild.tagName=="AUDIO"){
		newDiv.lastChild.play();
	}
	//прокрутка истории в самый низ
	document.getElementById("history").scrollTop = document.getElementById("history").scrollHeight;
	//очистка текстового поля для ввода вопроса
	document.getElementById(questionInput).value="";
}

//псевдоокончания сказуемых (глаголов, кратких причастий и прилагательных )
var endings = [ ["ет","(ет|ут|ют)"], ["ут","(ет|ут|ют)"], ["ют","(ет|ут|ют)"],//1 спряжение
        ["ит","(ит|ат|ят)"], ["ат","(ит|ат|ят)"], ["ят","(ит|ат|ят)"],//2 спряжение
        ["ется","(ет|ут|ют)ся"], ["утся","(ет|ут|ют)ся"], ["ются","(ет|ут|ют)ся"],//1 спряжение, возвратные
        ["ится","(ит|ат|ят)ся"], ["атся","(ит|ат|ят)ся"], ["ятся","(ит|ат|ят)ся"],//2 спряжение, возвратные
        ["ен","ен"], ["ена","ена"], ["ено","ено"], ["ены","ены"],//краткие прилагательные
        ["ан","ан"], ["ана","ана"], ["ано","ано"], ["аны","аны"],//краткие прилагательные
        ["жен","жен"], ["жна","жна"], ["жно","жно"], ["жны","жны"],//краткие прилагательные
		["такое","- это"]];//для вопроса "что такое А?" ответ - "А - это ..."
//черный список слов, распознаваемых как сказуемые по ошибке
var blacklist = [ "замена", "замены", "атрибут", "маршрут", "член", "нет" ];

//функция определения сказуемых по соответствующим псевдоокончаниям
function getEnding(word)
{
    //проверка по черному списку
    if (blacklist.indexOf(word)!==-1) return -1;
    //перебор псевдоокончаний
    for (var j = 0; j < endings.length; j++)
    {
		//alert(word.substring(word.length-endings[j][0].length)+"-"+endings[j][0]);
        //проверка, оканчивается ли i-ое слово на j-ое псевдоокончание
        if(word.substring(word.length-endings[j][0].length)==endings[j][0]){
            return j;   //возврат номера псевдоокончания
        }
    }
    return -1;  //если совпадений нет - возврат -1
}

//функция, которая делает первую букву маленькой
function small1(str)
{
    return str.substring(0, 1).toLowerCase() + str.substring(1);
}

//функция, которая делает первую букву большой
function big1(str)
{
    return str.substring(0, 1).toUpperCase() + str.substring(1);
}

//главная функция, обрабатывающая запросы клиентов
function getAnswer(question)
{
    //знаки препинания
    var separators = "'\",.!?()[]\\/";
    //получение текста из параметра запроса
    var txt = small1(question);
    //добавление пробелов перед знаками препинания
    for (var i = 0; i < separators.length; i++)
       txt = txt.replace(separators[i], " " + separators[i]);
    //массив слов и знаков препинания
    var words = txt.split(' ');
    //флаг, найден ли ответ
    var result = false;
    //формируемый функцией ответ на вопрос
    var answer="";
    //перебор слов
    for (var i = 0; i < words.length; i++)
    {
		//alert(words[i]);
        //поиск номера псевдоокончания 
        var ending = getEnding(words[i]);
		
        //если псевдоокончание найдено – это сказуемое, подлежащее в вопросе после него
        if (ending >= 0)
        {
			//---ТОЧНЫЙ ПОИСК---
			var subject_array = words.slice(i + 1);
			var subject_text = subject_array.join(" ");
			for (var j = 0; j < knowledge.length; j++) 
				if ((words[i]==knowledge[j][1] || // точное совпадение сказуемого
					words[i].substring(0, words[i].length - endings[ending][0].length) + 
					endings[ending][1]==knowledge[j][1]) && //совпадение сказуемого с подстановкой (такое->- это)
					(subject_text==knowledge[j][0]) || (subject_text==knowledge[j][2])) {//совпадение подлежащего
					//создание простого предложения из семантической связи
					answer+=big1(knowledge[j][0] + " " +
						knowledge[j][1] + " " + knowledge[j][2] + ". ");
					result = true;
					//alert("точное");
				}
			if (result == false) {
				//---ПОИСК С ПОМОЩЬЮ РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ---
				//замена псевдоокончания на набор возможных окончаний
				words[i] = words[i].substring(0, words[i].length -
					endings[ending][0].length) + endings[ending][1];
				//создание регулярного выражения для поиска по сказуемому из вопроса
				var predicate = new RegExp(words[i]);
				//для кратких прилагательных захватываем следующее слово
				if (endings[ending][0] == endings[ending][1])
				{
					predicate = new RegExp(words[i] + " " + words[i + 1]);
					i++;
				}
				var subject_array = words.slice(i + 1);
				var subject_text = subject_array.join(" ");
				//создание регулярного выражения для поиска по подлежащему из вопроса
				//из слов подлежащего выбрасываем короткие предлоги (периметр у квадрата = периметр квадрата)
				for (var j = 0; j < subject_array.length; j++){
					if(subject_array[j].length < 3){
						subject_array.splice(j);
						j--;
					}
				}
				var subject_string = subject_array.join(".*");
				//только если в послежащем больше трех символов
				if (subject_string.length>3)
				{
					var subject = new RegExp(".*" +
						subject_string +
						".*");
					//поиск совпадений с шаблонами среди связей семантической сети
					for (var j = 0; j < knowledge.length; j++)
					{
						if (predicate.test(knowledge[j][1]) &&
							(subject.test(knowledge[j][0]) ||
								subject.test(knowledge[j][2])))
						{
							//создание простого предложения из семантической связи
							answer+=big1(knowledge[j][0] + " " +
								knowledge[j][1] + " " + knowledge[j][2] + ". ");
							result = true;
							//alert("регулярки для сказуемого и подлежащего");
						}
					}
					//если совпадений с двумя шаблонами нет,
					if (result == false){
						//поиск совпадений только с шаблоном подлежащего
						for (var j = 0; j < knowledge.length; j++)
						{
							if ((subject.test(knowledge[j][0]) ||
									subject.test(knowledge[j][2])))
							{
								//создание простого предложения из семантической связи
								answer+=big1(knowledge[j][0] + " " +
									knowledge[j][1] + " " + knowledge[j][2] + ". ");
								result = true;
								//alert("регулярка только для подлежащего");
							}
						}
					}
				}
			}
        }
    }
    //если ответа нет
    if(!result)
    	answer = "Ответ не найден. <br/>";
	//если ответ есть - добавляем увеличение картинок
	else
		answer = answer.replace("<img ", "<img onclick='zoom(this.src)'");
    return answer;
}

function zoom(src){
	document.getElementById("img_in_alert").src=src;
	$("#imgalert").css({"display":"block"});
	clearInterval(timer);
}

