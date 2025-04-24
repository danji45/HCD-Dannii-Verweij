# Web-based toetsenbord voor Eric
<br>

## Over dit project
Dit project betreft het ontwerpen en bouwen van een webgebaseerd toetsenbord voor Eric, een 52-jarige man met een lichamelijke aandoening waardoor 
zijn pezen en spieren niet goed ontwikkeld zijn. Het toetsenbord is speciaal ontwikkeld voor Eric. Ik heb rekening gehouden met minimale beweging, maar toch grote knoppen, en een toetsenboard dieeenvoudig te 
bedienen is. 

Eric woont zelfstandig in een Fokuswoning en gebruikt zijn telefoon intensief voor podcasts, appen en sociale media. Door de vering van zijn rolstoel en zijn beperkte motoriek 
is een traditioneel toetsenbord of swipe-interface niet geschikt. Spraakbediening werkt niet goed in rumoerige omgevingen, zoals de trein. Daarom is een webgebaseerde oplossing
gebouwd die werkt in de browser van zijn smartphone.

![eric_typen_gif](https://github.com/user-attachments/assets/79ce42ce-a613-4604-b793-384972310266)

<br>

## Probleemdefinitie
Persoonlijke situatie:
<li>Eric is mobiel en zelfstandig, maar kan zijn telefoon niet vasthouden én tegelijk typen.

<li>Als er veel beweging is wordt typen practisch gezien onmogelijk.

<li>Spraakbediening werkt niet, doordat het vaak te druk is in de trein.
  
<br><br>

## Gebruikersbehoeften:

<li>Grote, duidelijke knoppen.

<li>Zo min mogelijk tikken.

<li> Zo min mogelijk swipen, want dan gaat zijn styles snel kapot, en ze zijn specifieke styles niet meer.

<li>Hij wilt eerder goed typen, dan snel typen.

<li>Woordvoorspelling en eenvoudige spraakoptie gewenst (optioneel).

<li>Geen pinch- of zoombewegingen, dat kan hij namelijk niet in de trein

<li>Toetsenbord moet eenvoudig te leren zijn.

<br><br>

##  Weekindeling
###  Week 1 – Onderzoek & gebruikersinterviews



In deze week heb ik Eric geïnterviewd, dit zodat ik duidelijk had wat hij wou hebben.


Behoeften: minimale interactie, minder corrigeren, grotere knoppen.

Technologiekeuze: webapplicatie, zodat deze werkt op elk toestel (Android, iPhone, Pixel (uiteindelijk is het alleen voor de Pixel gemaakt, omdat hij deze het meest gebruikt)).

Opzet gemaakt voor toetsenbordstructuur: zes knoppen, elk met 6 letters, en/of cijfers.




### Week 2 – Prototype & layout

![versie1 0_demo](https://github.com/user-attachments/assets/8601dc36-4547-4422-a9b1-2bf2b13b1c15)



HTML- en CSS-opbouw van het toetsenbord voltooid:

In deze week heb ik met Eric in de metro gezeten. We zouden eerst met de trein gaan, maar door gedoe bij Castricum konden ze hem daar de trein niet uitkeringen. Dus zijn we met de metro gegaan.

Dit zijn de dingen die ik had toegevoegd:

<li> JavaScript-functies:
Klik op knop = activeer letterset.
Tweede klik = kies specifieke letter.

<li> De knoppen meer inzet midden, zodat er makkelijker op de backspace knop gedrukt kan worden.

![versie1 0_test](https://github.com/user-attachments/assets/3d0d26c3-ee04-4867-be25-7ea1bfe66d1f)



### Week 3 – Functionaliteit en interactie


![versie2 0_demo](https://github.com/user-attachments/assets/19ee3337-7157-4cf0-b040-ce633a187398)

Toevoeging van:
In de derde week was de rolstoel van Eric stuk, daardoor moesten we zelf gaan testen in de trein. We kwamen er achter dat de trein toch veel meer beweegt dan dat we dachten. En hier ben ik op verder gaan ontwikkelen

<li>Long-press detectie voor hoofdletters en speciale tekens (zoals !).

<li> Visuele feedback bij klikken (kleurverandering).

![versie2 0_test](https://github.com/user-attachments/assets/e3b3488e-bb42-4f24-900d-01aee0659b58)

### Week 4 – Finetuning en gebruikersfeedback



https://github.com/user-attachments/assets/f4b3d611-9802-48f9-b45f-d06963c62001



Eric heeft het toetsenbord getest in het klas lokaal.Hij wilde eerst nog voor de laatste keer in de trein, maar doordat er mensen een feedback gesprek hadden, was dat niet mogelijk. Dus we zijn uiteindelijk helemaal niet met de Eric in de trein geweest.

Feedback die ik had toegepast voor deze test:

<li> Copy-knop voor eenvoudig kopiëren van tekst naar het klembord.

<li> Popup-melding na succesvol kopiëren.

<li> Lange klik voor hoofdletter of alternatief teken.

<li> Responsive maken.

<li> Enkele letters groter maken.

<li> Identicate lijntje, die laat zien waar je aan het typen bent.

<li> Layout verder geoptimaliseerd voor bediening met stylus of vingers.


## Conclusie
De applictie biedt Eric een gemakkelijke manier om tekst te schrijven . En dit zonder te swipen, met grotere toetsen. Mijn nadruk lag voornamelijk  nadruk lag op makkelijkheid, en precisie.

## Meer tijd

Als ik meer tijd had gehad, had ik een tekentje op de backspace en de spatie toegevoegd, zodat dat wat duidelijker zou zijn. 

Ook had ik een optie toegevoegd om meer tekens te typen, want op dit moment kan alleen een punt "." En een uitroepteken "!" Getyped worden. 

Naast al dut vind ik dat mijn toetsenbord goed gelukt is.

## Technische samenvatting
Talen: HTML, CSS, JavaScript

Platform: Mobiele browsers (Android/iOS)

Kenmerken:

Touch- en click-ondersteuning.

Responsieve interface.

Contenteditable tekstveld.

Clipboard API.

Lettermodus met long-press.  
