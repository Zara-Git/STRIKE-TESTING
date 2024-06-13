# STRIKE-BOWLING
It is a react testing project.


acceptanskriterier för App-komponenten

1.Boka med giltigt datum och tid
Given: Användaren är på bokningssidan.
When: Användaren fyller i datumfältet med "2024-05-27" och tidsfältet med "12:00".
Then: Datumfältet ska visa "2024-05-27" och tidsfältet ska visa "12:00".
Boka med giltigt antal bowlare och banor
Given: Användaren är på bokningssidan.
When: Användaren fyller i fältet för antal bowlare med "2" och fältet för antal banor med "1".
Then: Fältet för antal bowlare ska visa "2" och fältet för antal banor ska visa "1".
Visa felmeddelande för ofullständiga fält
Given: Användaren har inte fyllt i alla obligatoriska fält.
When: Användaren klickar på "strIIIIIike!"-knappen.
Then: Ett felmeddelande med texten "Fill out all the fields and make sure that people and shoes is the same number." ska visas.

2.Acceptanskriterier för Booking-komponenten
Visa felmeddelande om bokning görs utan att alla fält är ifyllda
Förutsättning: En användare har inte fyllt i alla obligatoriska fält i bokningsformuläret.
När: Användaren klickar på "strIIIIIike!"-knappen.
Då: Ett felmeddelande med texten "Fill out all the fields and make sure that people and shoes is the same number." ska visas.
Visa felmeddelande
Förutsättning: En användare har inte fyllt i alla obligatoriska fält i bokningsformuläret.
När: Användaren klickar på "strIIIIIike!"-knappen.
Då: Minst ett element med klassen "error-message" ska finnas i DOM.
Navigera tillbaka till startsidan
Förutsättning: Användaren har fyllt i alla obligatoriska fält korrekt och tryckt på "strIIIIIike!"-knappen.
När: Bokningen är bekräftad och användaren klickar på knappen för att gå tillbaka till startsidan.
Då: Alla fält i bokningsformuläret ska rensas.
Och: Följande element ska finnas i DOM:
Datumfältet.
Tidsfältet.
Fältet för antal bowlare.
Fältet för antal banor.
Plus-knappen för att lägga till skor.
Knappen med texten "strIIIIIike!".
Dessa kriterier säkerställer en konsekvent användarupplevelse och att nödvändiga valideringar och funktioner fungerar.

3.acceptanskriterier för BookingInfo-komponenten
Visa bokningsinformation
Given: Användaren är på sidan med bokningsinformationen.
When: Komponentens inmatningsfält fylls i med uppgifter från ett bokningsobjekt.
Then: Fälten för datum, tid, antal bowlare och antal banor ska visa rätt värden:
Datum ska vara "2024-05-27".
Tid ska vara "12:00".
Antal bowlare ska vara "2".
Antal banor ska vara "1".

4.vändaren har skickat iväg en bokning och mottagit bekräftelsen, ska det finnas en tydlig och synlig knapp eller länk med texten "Tillbaka till bokning" på bekräftelsesidan.
Denna knapp/länk ska vara klickbar och tillgänglig på alla enheter, inklusive mobila enheter och datorer.
Navigering Tillbaka till Bokningsvyn:
Vid klick på "Tillbaka till bokning" knappen/länken ska användaren omedelbart navigeras tillbaka till bokningsvyn där de kan göra en ny bokning.


5.Bokningsvyn ska återställas till sitt ursprungliga tillstånd, utan förifyllda fält eller tidigare inmatade uppgifter.
Acceptanskriterier för dessa testfall kan vara:
När användaren öppnar sidan ska de kunna lägga till skostorlekar för varje spelare genom att klicka på "+"-knappen.
När användaren anger skostorlekar och klickar på "+"-knappen ska de visas korrekt i inmatningsfälten.
När användaren lägger till flera skostorlekar ska de alla visas på skärmen.
Användaren ska kunna ta bort en överflödig skostorlek genom att klicka på "-"-knappen bredvid den.
När en skostorlek tas bort ska den inte längre visas på skärmen.
När användaren öppnar sidan för första gången ska inga skostorleksfält finnas synliga.
Användaren ska kunna se en "+"-knapp för att lägga till skostorlekar.
Dessa kriterier täcker funktionaliteten för att lägga till, visa och ta bort skostorlekar på ett användarvänligt sätt.

