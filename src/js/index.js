
// this function split the id to return only the index
function returnIndexFromId(id){
    return id.split('-')[1]
}

// this function is meant to change the view of the article we click 
// it take a "e" variable from html page, its the even variable
// it alow me to recover the article the user clicked on by using e.target
function changeArticle(e){
    var article = document.getElementById('article')
    // this line of code is used to removed all the actual content
    // I could use the .remove() function from JS library but like this it's a lot faster to code
    article.innerHTML = ''
    var target = e.target
    var index = returnIndexFromId(target.id)
    var newArticleView = createNewArticle(index)
    article.appendChild(newArticleView)
    // here I focus the actual link selected to add "active" to the class and remove it from the others
    var actions = document.getElementById('actions').children
    for (let i = 0; i < actions.length; i++){
        // i+1 because we start the selection into the table from 0 but my id into 
        // the html document start from 1
        if (i+1 == index){
            actions[i].className = "list-group-item list-group-item-action active"
        }
        else {
            actions[i].className = "list-group-item list-group-item-action"
        }
    }
}

// this create a new article and push it into te DOM of the article tag, it return a element from an index
function createNewArticle(index){
    // i use a switch, it's clearly not the best way to do, but actualy this
    // site is static, i will not implement more content, but i could use a for loop or while loop
    switch (index){
        case "1":
            var article = document.createElement('div')
            article.id = "articleView"
            article.className = "paragraphe row justify-content-center"

            var p1 = document.createElement('p')
            p1.className = "col-8"
            p1.innerHTML = "Des invasions normandes et bretonnes à l'Empire Plantagenêt. Vue du château d'Angers et de la Porte des champs. Le château d'Angers, édifié à partir du XIIIe siècle. En périphérie de la Cité, des nécropoles sont érigées à partir du IVe siècle pour accueillir les premiers évêques de la ville (sur le site de l’actuelle place du Ralliement). Vingt-cinq sarcophages mérovingiens y ont été mis au jour en 200813. Vers le milieu du VIe siècle est consacrée la première abbaye (Saint-Aubin) – selon la légende par l'évêque de Paris, saint Germain – afin d’abriter le tombeau d'Aubin. L'abbaye Saint-Serge est créée environ un siècle plus tard par les rois mérovingiens Clovis II et Thierry III11. L'église cathédrale de la ville est dédicacée à Saint-Maurice en 77014. Le milieu du IXe siècle voit apparaitre des temps troublés. Tant les Bretons que les Normands font d’incessantes incursions en Anjou. Le comte s’installe même à l’emplacement actuel du château afin de surveiller la rivière11. La ville sera néanmoins pillée par le chef viking Hasting en 845, puis à nouveau en 85215. Après la bataille de Jengland, Charles le Chauve et Erispoë, chef breton, se rencontrent à Angers en septembre 851 pour signer le traité d'Angers qui donne à la Bretagne les pays rennais, nantais et de Retz, fixant ainsi les limites frontalières de la Bretagne16. Charles le Chauve décide alors en 853 d’établir une marche autour des territoires de l'Anjou, de la Touraine, du Maine et du pays de Sées. Il la confie à Robert le Fort qui sera tué en 866 au cours de la bataille de Brissarthe11. Finalement, en 872, les Normands prennent la ville et s’y installent pendant près d’un an16. Charles le Chauve intervient lui-même aux côtés de Salomon de Bretagne pour les en déloger. Le roi de Bretagne détourne alors la Maine, ce qui met les bateaux viking à sec et ôte une protection au château. Hasting négocie son départ en offrant une part du butin17. Ce détournement est à l'origine du canal de la tannerie, comblé seulement au XIXe siècle14,18. Les derniers Carolingiens, rois des Francs et comtes d’Anjou, délèguent la gestion du comté à des vicomtes à partir de la fin du IXe siècle. L’un d’entre eux, Foulque le Roux, deviendra Foulque Ier d'Anjou en 929 et fondera ainsi la première dynastie des comtes d’Anjou. La région s’apaise et le rôle militaire d’Angers aux marches du Royaume disparait pour plusieurs siècles."

            var p2 = document.createElement('p')
            p2.innerHTML = "<br>Le calme retrouvé, la ville se développe par le biais de nombreux bourgs et faubourgs. Au XIe siècle, Foulque Nerra, comte d’Anjou, laisse à Angers une empreinte considérable. Il fait restaurer l’église Saint-Martin, le plus vieux monument actuel de la ville ; favorise la fondation d’abbayes bénédictines (Saint-Nicolas et Notre-Dame-de-la-Charité, future abbaye du Ronceray)19 – il fait également creuser l’étang Saint-Nicolas sur le Brionneau14 – ; enfin, il fait édifier le premier pont de pierre à l’emplacement du pont de Verdun. Toutes ces installations en rive droite de la Maine sont à l’origine du quartier de la Doutre19. Son surnom – « le noir » – lui a été attribué postérieurement, au XIIe siècle. De son vivant, il était appelé « l’Ancien » ou le « Jérosolimitain » du fait de plusieurs pèlerinages à Jérusalem. Carte de l'empire Plantagenêt sous le règne d'Henri II, allant de la Navarre à l'Angleterre et l'Irlande orientale. L'empire Plantagenêt sous Henri II d'Angleterre (XIIe siècle)."

            var img = document.createElement('img')
            img.src = "../images/chateau1.JPG"
            img.className = "col-xl-4 col-md-12"
            img.alt = "image chateau angers"

            article.appendChild(img)
            article.appendChild(p1)
            article.appendChild(p2)
            
            return article
        case "2":
            var article = document.createElement('div')
            article.id = "articleView"
            article.className = "paragraphe row justify-content-center"

            var p1 = document.createElement('p')
            p1.className = "col"
            p1.innerHTML = " Le XIXe siècle voit se poursuivre ces profondes modifications du paysage urbain. Dans la foulée du décret napoléonien, la ceinture de boulevard est achevée vers 1850-1860 et des ponts sont construits dans son prolongement53. Ils prennent les noms de ponts de la Basse-Chaîne et de la Haute-Chaîne en raison de celles qui barraient la rivière au Moyen Âge afin d'empêcher toute intrusion dans la ville. Les chaînes amont étaient arrimées sur la Tour des Anglais dans la Doutre. En 1850, le pont de la Basse-Chaîne s’effondre lors d’une revue et provoque la mort de 225 personnes, principalement des soldats du 3e bataillon du 11e régiment d'infanterie légère54. Le pont des Treilles, en ruine depuis 1711, est quant à lui définitivement démoli en 1855 puis 189055 alors que le Grand pont, le plus ancien de la ville, est reconstruit entre 1846 et 184856. Dessin aérien montrant le port Ayrault et l'ancienne île des Luisettes en cours d'urbanisation (1848). Le port Ayrault en 1848 avant son comblement et l'urbanisation des Luisettes (Alfred Guesdon). Le quartier des Luisettes (actuel quartier Thiers-Boisnet) s’urbanise à compter de 184057. Jusqu’en 1623, il s’agissait d’une île faite de prairies inondables près de laquelle fut construit l’ancien port Ayrault, comblé à la fin des années 186034. De la même manière, l’ancien Canal des Tanneries est comblé en 1866 et laisse place à l’actuel boulevard Henri-Arnauld ; par conséquent, l’ancienne île des Carmes est rattachée à la Doutre58. Le bâti médiéval y est profondément remanié. En 1849, c’est le chemin de fer qui fait son apparition dans la ville en présence de Louis-Napoléon Bonaparte. La gare Saint-Laud est inaugurée en 1853 et la gare Saint-Serge en 1878."

            var p2 = document.createElement('p')
            p2.innerHTML = "Le Second Empire voit un accroissement de ces travaux d’urbanisation : de nouvelles artères sont percées, notamment dans le centre-ville qui est totalement réaménagé autour d’immeubles de style haussmannien. En parallèle, la ville reste un centre culturel et intellectuel. Plusieurs sociétés savantes sont créées et le Grand-Cercle accueille Gounod, Delibes, Saint-Saëns, etc. De nombreuses écoles s’y installent : Arts et Métiers dès 1815 puis Beaux-Arts, notariat ou encore agriculture. Surtout une nouvelle université apparait en 1875, l’Université catholique de l’Ouest53. Première « faculté libre » de France, elle succède à l’université médiévale disparue sous la Révolution – celle-ci avait supprimé les universités et malgré leur renouveau sous Napoléon, il n’y en avait plus à Angers. Lors de ses échanges épistolaires avec son homologue d’Angers, Monseigneur Freppel, l’évêque de Quimper donne une image de la ville des plus étonnantes : « Angers est une des villes les plus dangereuses pour la jeunesse. C’est une ville de plaisirs plutôt que d’études. La vie y est fort légère ». À partir de 1835 sont organisées des expositions industrielles et artistiques. Fort de sa tradition pépiniériste et horticole, Angers organise en 1842 des expositions de roses et de dahlias et en 1849, la poire « Doyenné du Comice » est inventée au Jardin fruitier. André Leroy possède à la même époque la plus grande pépinière d’Europe et concevra le jardin du Mail en 1858. La vie économique s’organise autour de ces activités agricoles mais également dans le domaine de la distillerie (Cointreau, Giffard), de l’extraction ardoisière, du parapluie et du textile (transformation du chanvre et du lin). En 1901, la Société anonyme des filatures, corderies et tissages Bessonneau emploie ainsi plus de cinq mille personnes."

            var img = document.createElement('img')
            img.src = "../images/Le_port_Ayrault_d'Angers_en_1848.jpg"
            img.className = "col-xl-4 col-md-12"
            img.alt = "image port ayrault"

            article.appendChild(p1)
            article.appendChild(img)
            article.appendChild(p2)

            return article
        case "3":
            var article = document.createElement('div')
            article.id = "articleView"
            article.className = "paragraphe row justify-content-center"

            var p1 = document.createElement('p')
            p1.className = "col-12"
            p1.innerHTML = "La ville se spécialise dorénavant dans les technologies de la santé et plus encore la filière végétale. L'horticulture est l'un des principaux secteurs d'activité de l'économie angevine et était remarquable dès le XIXe siècle comme l'atteste cet extrait d'un document de 1865 : « Si la Touraine a été appelée à juste titre le jardin de la France, on a pu dire non moins de raison que l'Anjou en est la pépinière. Le climat exceptionnel dont jouit cette province, la nature de son sol, la position de sa capitale, (...) en un mot un concours heureux de circonstances naturelles ou économiques, ont beaucoup contribué à étendre et à propager dans ce beau pays un genre de culture dont l'importance s'accroit tous les jours. »84 L'importance de l'horticulture s'est renforcée jusqu'à faire d'Angers le premier pôle horticole d’Europe85. En effet, la ville accueille un pôle de compétitivité à vocation mondiale spécialisé dans le végétal – Végépolys – regroupant 450 chercheurs86. Celui-ci s'appuie d'une part sur le haut niveau de formation et d'études supérieures dispensé dans ce domaine à Angers et d'autre part sur la forte concentration de laboratoires de recherche. On y rencontre ainsi plusieurs écoles spécialisées (ESA, Agrocampus Ouest, etc.), des laboratoires de recherche du CNRS, l’INRA mais aussi la Station nationale d'essais de semences61, Plantes&Cité (le centre technique national sur les espaces verts et le paysage urbain)87 ou encore l'office communautaire des variétés végétales88 dont le rôle est de protéger les nouvelles variétés végétales au sein de l'Union européenne. Enfin, un parc à thème orienté vers le monde du végétal et la biodiversité, Terra Botanica, a été inauguré en 2010"

            var img = document.createElement('img')
            img.src = "../images/ch-angers-maternite-chu-wikimedia.jpg"
            img.className = "col-12"
            img.alt = "image chu angers"

            article.appendChild(p1)
            article.appendChild(img)

            return article
    }
}