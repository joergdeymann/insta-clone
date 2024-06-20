Todo
- save Data 
- new Story

 
Hallo ! Ich möchte gerne mein Insta-Clone abgeben
Funktion: 
- Alle Herzen: sind klick bar
- Die Klammer setzt die Karten voran (2 Durchläufe) 
- Suchen ist aktiviert, Zeigt nur Karten mit eingegebenen Text an
- Das Profilbild ist klick bar: Usernamen wechseln 
- @Einträge werden automatisch farbig dargestellt
- Verkürzte Texte können erweitert werden -> "...mehr" funktioniert auch
- "alle Beiträge sehen ,ist auch klick bar 
- Zeiten sind nicht statisch, sondern werden dynamisch angepasst
- Home: alles Neu Rendern
- Die Zeiten der Kommentare und des Ursprünglichen Posts werden bei jedem Rendern angepasst
- Die Daten werden im Local Storage gespeichert
- im Video habe ich nicht alle Funktionen aufgelistet
- Mein Universum hat nur 4 User, deswegen gibt es auch nur maximal 4 Likes

- Jetzt habe ich das Projekt fertig und lese gerade die Checkliste, hoffe es gefällt trotzdem.


Feature:
- Overlayzeile in Bild, die weiterverlinkt

Links hierzu: 
Projekt: https://joerg-deymann.developerakademie.net/projekte/insta-clone
Loom: https://www.loom.com/share/43588bca86fe4db5be1137e091637d7a?sid=87879898-ed69-4ac0-ab41-7b4e8bfed757




Kommentar: 
Leider musste ich das Array vergewaltigen, da hier weder noch keine Benutzerverwaltung enthalten ist, und auch kein Server existiert.
- Die Datenbank ist also nicht normalisiert.
    - Es gibt keine eigene Nutzertabelle
    - Es gibt keine eigene LikeListe, sondern die Likes werden einfach im Profil des Erstellers geschrieben
    
    -> OK jetzt habe ich eine Nutzeliste hinzugefügt
    -> Jeder Post und Kommentar hat jetzt eine Likeliste bekommen

- Es werden keine zusätzliche Daten öffentlich gesichert, sondern nur im LocalStorage
 (keine Likes, keine Texte, usw.)

- Es sind kaum Links belegt die eine Funktion haben sollten

Das würde den Rahmen der Übung sprengen.
Daher finde ich das Projekt als nicht Representierbar bei einer Bewerbung.
-> Was würdet Ihr machen um es so zu gestalten, dass men es Päsentieren kann ?


Probleme die Zeit gekostet haben:
- Reguläre Ausdrücke in Java umzusetzen hat mich 2 Stunden suche gekostet
    /w bei der Suche ein Wort zb = /w 
    /s ist wohl nicht alles Text
    $& ist die gesamte Fundstelle die ich im Replace Teil verwenden kann
    $1 die erste Klammer ()

- Suchen ersetzen:
    string.replace(suche,ersetze)
    hat ganz gut geklappt

- letztes Child Element löschen   
    habe ich erst mit einer verkettung Versucht: document.getEmelentById().lastChild().remove()
    Bei der Suche bin ich aus Lösungen gekommen die nicht geholfen haben:
    document.getElementById().removeChild(doument.getElementId().lastChild);

    die Lösung zum Ziel hat mich 3 Stunden gekostet, ist aber so einfach wie erwartet:
    document.getElementById().lastElementChild.remove();


