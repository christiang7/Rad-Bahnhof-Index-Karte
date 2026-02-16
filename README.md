# Rad-Bahnhof-Index-Karte
MMA ist eine Methode und ein Tool zur Beurteilung der Qualität multimodaler Reiseketten zwischen Fahrrad und Bahn an Bahnhöfen. Fahrräder sind tolle Verkehrsmittel, um von und zu Bahnhöfen reisen zu können. Sie helfen dabei, die erste und letzte Meile eines Weges schneller zu überbrücken und machen aktive sowie öffentliche Verkehre attraktiver. So leistet sie einen wichtigen Beitrag zur Mobilitätswende und zur Verringerung von CO2-Emissionen.

Allerdings ist Fahrradfahren hin und von Bahnhöfen nicht einwandfrei: ein chaotisches Bahnhofsumfeld mit viel Autoverkehr und unsichere Fahrradinfrastruktur, unsichere oder überfüllte Radabstellplätze, fehlende oder kaputte Aufzüge hindern gerade diese Rad+ÖPNV-Wege. Multimodales Reisen kann besser! In der Wissenschaft ist dies schon länger bekannt und auch in der öffentlichen Hand erscheint diese Vision zunehmend selbstverständlich. Die EU-Kommission hat in ihrem Forschungsprogramm Horizon Europe und Ziel festgesetzt:

**Multimodal and sustainable transport systems for passengers and goods**:
> Enhanced resilience of transport networks through improved operational efficiency for both passenger and intermodal freight transport, future-proofed mobility systems supporting EU competitiveness while ensuring affordable and accessible transport for all passengers.


Doch wo fangen wir an umzusetzen - welche Daten und Informationen gibt es zu diesem Zweck, und welche brauchen wir eigentlich, damit ein Weg mit Rad und Bahn genau die richtige Art von Abenteuer ist?

MMA bietet Einsichte in konkrete Daten und Kriterien, um Radtauglichkeit von Bahnhöfen zu beurteilen und visualisiert diese. 
MMA wirkt dabei in zwei Richtungen:
1.	Für User bietet sie Infos dazu, wie bequem die Multimodalität mit dem Rad für ein Bahnhof ist, u.a. durch Infos über:
  a.	Verfügbarkeit von Radstellplätze
  b.	Verfügbarkeit von Aufzügen
  c.	Verkehrssicherheit im Bahnhofsumfeld
2.	Für Planung bietet sie gleichzeitig ein starkes Kommunikationstool und eine Checkliste, um Bahnhöfe noch radtauglicher zu machen.

Ein Prototyp wurde entwickelt beim Rad-Daten-Hackathon im November 2025 in Potsdam, mit Unterstützung von DB InfraGO, die Landeshauptstadt Potsdam (Urbane Datenplatfform, Smart City sowie Radverkehrsplanung) und das Potsdam Lab.

Zum jetzigen Zeitpunkt ist MMA als statisches Web-App abrufbar. Wir haben viele Ideen zur Weiterentwicklung, und freuen uns über Unterstützung jeglicher Art bei der Weiterentwicklung!

![Tool](https://christiang7.github.io/Rad-Bahnhof-Index-Karte/)

## Formel zur Indexberechnung

Der Index wird wie folgt berechnet:

$I$ - Index, $x$ - Datenpunkt, $M$ - maximaler Wert der Datenreihe

$$ I = \frac{x}{M} $$

Bei Datenreihen, wo der maximale Wert, von der Interpretation her der schlechteste ist, haben wir die Datenpunkte umgekehrt berechnet:

$$ I = \frac{(M-x)}{M} $$

Das $M$ - maximaler Wert der Datenreihe, sollte dann ersetzt werden mit einer Kombination aus Nachfrage und Angebot der Bahnhöfe. Zum Schluss wurde dann der Gesamtindex durch eine Mittelwertberechnung ermittelt:

$I_k$ - Indizes, $N_I$ - Gesamtanzahl an Indizes 

$$ I = \frac{(I_1 + I_2 + ... I_N)}{N_I} $$

Der Gesamtindex sollte dann später gewichtet werden nach bestimmten Kriterien mit den Gewichtungsfaktoren:

g_k - Gewichtungsfaktoren

I_Gesamt = (I_1*g_1 + I_2*g_2 + ... I_N*g_N) / N_I mit g_1 + g_2 + ... g_N = 1


I = z/N*g
I = (x-mu)/(sigma*N)*g
Gesamtindex
I_G = Summe(I_k)/M

Maximalwert ist der Optimalwert
Minimalwert ist der schlechteste Wert
falls höchster Wert der schlechteste ist, dann mit Formel
z_neu = N - z 
Tabelle Format
Wert | I_1 | I_2 | I_3 | I_4 | … | I_G 


Mehr zu unserer Idee:
![Pitch](./MMA_Rad-Bhf-Index_Elevator-Pitch.png)

Die Karte:
![Vorschau Karte](./Vorschau-Karte.png)
