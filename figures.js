/*
    Last updated data: April 21, 2024
*/

// 0 - 100 Historical Figures
const peopleInCentury1 = [
  {
    name: "Nero Claudius Caesar Augustus Germanicus",
    description:
      "Nero Claudius Caesar Augustus Germanicus, commonly known as Nero, was Roman Emperor from 54 to 68 AD, and the last ruler of the Julio-Claudian dynasty. Notorious for his tyrannical rule, he is often remembered for his extravagance, oppressive policies, and the alleged role he played in the Great Fire of Rome in 64 AD, which he reputedly used as an excuse to persecute Christians and rebuild the city according to his designs. Nero's reign included significant diplomatic and military struggles, including the Boudiccan Revolt in Britain and conflicts with Parthia. His rule gradually grew more erratic and despotic, leading to a loss of support among the Senate, the military, and the populace. Facing a revolt, Nero was declared a public enemy by the Senate and committed suicide in 68 AD, bringing an end to the Julio-Claudian dynasty.",
    type: "module",
  },
  {
    name: "Boudica",
    description:
      "Boudica was a queen of the Iceni tribe who led a major uprising against the occupying Roman forces in Britain around AD 60-61. After her husband, King Prasutagus, died, the Roman Empire took control of the Iceni kingdom, disregarding his will that had left his kingdom jointly to his daughters and the Roman emperor. The Roman annexation was brutal—Boudica was flogged, and her daughters were raped. In retaliation, Boudica led a revolt that gathered multiple tribes and resulted in the destruction of Camulodunum (modern Colchester), Londinium (London), and Verulamium (St. Albans), causing extensive Roman casualties and considerable destruction. The rebellion was eventually suppressed by the Roman governor Suetonius Paulinus, who defeated Boudica's forces in a decisive battle. Despite the defeat, Boudica is celebrated today as a symbol of the struggle for justice and independence.",
    type: "module",
  },
  {
    name: "Trajan",
    description:
      "Trajan, born in 53 AD, was Roman Emperor from 98 AD until his death in 117 AD. Renowned for his successful military campaigns and benevolent rule, Trajan is often remembered as one of the greatest Roman emperors. His reign marked the greatest territorial extent of the Roman Empire, which expanded to include large areas of the Middle East and the Dacian regions (modern-day Romania). Trajan's major military campaigns included two significant wars against Dacia, whose riches bolstered Rome's economy, and expeditions into the Parthian Empire, extending Roman influence into Mesopotamia. Domestically, he was known for extensive public building programs and social welfare policies, including the alimenta, which helped feed and educate poor children. Trajan's leadership style was marked by pragmatism and a focus on civil administration, earning him a reputation for justice and respect for the Senate.",
    type: "module",
  },
];

// 101 - 200 Historical Figures
const peopleInCentury2 = [
  {
    name: "Marcus Aurelius",
    description:
      'Marcus Aurelius, born in 121 AD, was a Roman emperor known for his Stoic philosophy and his reign marked by military campaigns, administrative reforms, and philosophical writings. As the last of the "Five Good Emperors," Marcus ruled with wisdom and benevolence, often prioritizing the well-being of his subjects over personal ambition. His philosophical work, "Meditations," reflects his commitment to Stoic principles, advocating for self-discipline, rationality, and acceptance of fate. Despite facing challenges such as wars and political turmoil, Marcus Aurelius is remembered as a philosopher-king whose legacy extends beyond his time, inspiring generations with his wisdom and virtue.',
  },
  {
    name: "Septimius Severus",
    description:
      "Septimius Severus, born in 145 AD, was a Roman emperor remembered for his military prowess, ambitious reforms, and significant contributions to the stability of the Roman Empire during his reign from 193 to 211 AD. Rising to power through a combination of military skill and political maneuvering, Severus established himself as a strong and capable ruler. He implemented reforms aimed at strengthening the military, centralizing power, and stabilizing the economy. Severus also expanded the frontiers of the empire through successful military campaigns in Africa, Britain, and the Near East. Despite his achievements, his reign was marked by political intrigue and increasing authoritarianism, setting precedents for later imperial rule.",
  },
  {
    name: "Galen",
    description:
      "Galen, born in 129 AD in Pergamon (modern-day Turkey), was a prominent ancient Greek physician whose medical theories and practices profoundly influenced Western medicine for centuries. Trained in philosophy and anatomy, Galen became one of the most renowned medical practitioners of his time, serving as a physician to gladiators in Rome and later as a personal physician to several Roman emperors. His works, which encompassed a wide range of medical topics including anatomy, physiology, pharmacology, and pathology, were foundational in shaping medical knowledge and practice in the ancient world and beyond. Galen's emphasis on empirical observation, systematic experimentation, and the importance of understanding the body's natural processes laid the groundwork for the development of modern medicine. His writings remained influential throughout the Middle Ages and Renaissance, earning him the title of one of the most important figures in the history of medicine.",
  },
];

// 201 - 300 Historical Figures
const peopleInCentury3 = [
  {
    name: "Constantine I the Great",
    description:
      "Constantine I, also known as Constantine the Great, was a Roman Emperor who ruled from 306 to 337 AD. He is renowned for being the first Roman Emperor to convert to Christianity and for playing a pivotal role in the transformation of the Roman Empire. Constantine is best known for issuing the Edict of Milan in 313 AD, which granted religious tolerance to Christians and effectively ended the persecution they faced. He also played a crucial role in the Council of Nicaea in 325 AD, where early Christian doctrine was discussed and established. Constantine's reign marked a significant turning point in Roman history, as he centralized power, promoted Christianity, and established Constantinople (modern-day Istanbul) as the new capital of the Roman Empire, shifting focus away from Rome.",
  },
  {
    name: " Diocletian",
    description:
      "Diocletian, born Diocles, was a Roman Emperor who ruled from 284 to 305 AD, during a period known as the Crisis of the Third Century. He rose to power after the chaotic reigns of several emperors and instituted significant reforms to stabilize the empire. Diocletian is most famous for his administrative reforms, which included the division of the Roman Empire into eastern and western halves, each with its own emperor, and the establishment of the Tetrarchy, a system of rule by four co-emperors. He also implemented economic reforms, such as price controls and reforms to the tax system, to address issues of inflation and economic instability. Additionally, Diocletian initiated one of the most severe persecutions of Christians in Roman history, though he later issued the Edict of Toleration in 311 AD, which granted Christians some legal rights. After reigning for over two decades, Diocletian abdicated the throne in 305 AD, setting a precedent for the peaceful transfer of power in the Roman Empire.",
  },
  {
    name: "Aurelian",
    description:
      'Aurelian, also known as Lucius Domitius Aurelianus, was a Roman Emperor who ruled from 270 to 275 AD. He rose to power during a period of crisis known as the Crisis of the Third Century, characterized by frequent usurpations, civil wars, and external threats to the Roman Empire. Aurelian is best remembered for his military prowess and his efforts to reunify and stabilize the empire. He is credited with successfully repelling invasions by barbarian tribes, particularly the Goths and Vandals, and restoring Roman control over the breakaway Palmyrene and Gallic Empires. Aurelian also implemented significant administrative reforms, including the reorganization of the Roman army and the introduction of the gold coin known as the aureus. His reign saw the construction of several impressive public works, including the Aurelian Walls around Rome, which helped to defend the city from external attacks. Despite his accomplishments, Aurelian\'s reign was cut short when he was assassinated in 275 AD, but his efforts to restore the unity and strength of the Roman Empire earned him the title "Restorer of the World" (Restitutor Orbis).',
  },
];

// 301 - 400 Historical Figures
const peopleInCentury4 = [
  {
    name: "Augustine of Hippo",
    description:
      'Augustine of Hippo, also known as Saint Augustine, was a prominent theologian and philosopher of the late Roman Empire and early Christian Church. Born in 354 AD in present-day Algeria, Augustine played a significant role in shaping Western Christian thought and theology. He is best known for his influential works such as "Confessions" and "The City of God," which explore themes of sin, grace, free will, and the nature of God. Augustine\'s theological writings had a profound impact on Christian doctrine, particularly in the areas of original sin and predestination. He also engaged in debates with other Christian thinkers of his time, including Pelagius, over issues such as the nature of salvation and the role of human will. Augustine\'s legacy extends beyond theology; he is also recognized for his contributions to philosophy, including his ideas on the nature of time and memory. His writings continue to be studied and revered by theologians, philosophers, and scholars around the world. Augustine was canonized as a saint by the Catholic Church and is venerated as one of the most important figures in Christian history.',
  },
  {
    name: "Emperor Ōjin",
    description:
      "Emperor Ōjin, also known as Homutawake no Mikoto, was a legendary figure in Japanese history, believed to have ruled during the early 3rd century, around 270 AD, according to traditional accounts. He is considered the 15th Emperor of Japan according to the traditional order of succession. Ōjin is revered as a significant figure in Japanese mythology and history, often depicted as a wise and benevolent ruler. According to legend, he promoted the development of agriculture, introduced military reforms, and expanded the authority of the imperial court. Ōjin is also associated with the cult of Hachiman, the Shinto deity of war and divine protection, and is sometimes identified as Hachiman himself. While the historical accuracy of Ōjin's reign is debated among scholars, his legendary status continues to play a significant role in Japanese culture, particularly in the veneration of Hachiman and the imperial institution.",
  },
  {
    name: "Emperor Min of Jin",
    description:
      "Emperor Min of Jin, also known as Sima Ye, was the second emperor of the Eastern Jin dynasty in China, reigning from 313 to 316 AD. He succeeded his father, Emperor Yuan of Jin, and his reign was marked by political instability and military conflict. Emperor Min faced challenges from powerful regional warlords, particularly the warlord Wang Dun, who controlled significant territories in the south. Despite efforts to consolidate power and restore stability, Emperor Min's rule was characterized by internal strife and external threats. In 316 AD, Wang Dun's forces captured the capital city of Jiankang (modern-day Nanjing), leading to Emperor Min's capture and subsequent death. His short reign contributed to the ongoing fragmentation of China during the Sixteen Kingdoms period, a turbulent era of division and warfare following the fall of the Western Jin dynasty.",
  },
];

// 401 - 500 Historical Figures
const peopleInCentury5 = [
  {
    name: "Benedict of Nursia",
    description:
      "Benedict of Nursia, also known as Saint Benedict, was a Christian saint and monk who lived in Italy during the 6th century. He is best known for founding the Benedictine Order and writing the Rule of Saint Benedict, a set of guidelines for monastic life that has profoundly influenced Western Christian monasticism. Born into a noble family in Nursia (now Norcia, Italy) around 480 AD, Benedict abandoned his studies and fled to Subiaco to pursue a life of solitude and prayer. There, he attracted followers and established several monasteries. Benedict's Rule emphasized a balanced life of work, prayer, and study, promoting values such as humility, obedience, and hospitality. His monastic community at Monte Cassino became a center of learning and spirituality, playing a key role in preserving and transmitting knowledge during the tumultuous early Middle Ages. Benedict's influence extended far beyond his lifetime, and the Benedictine Order remains one of the most enduring and influential monastic traditions in Christianity. He is venerated as the patron saint of Europe and is celebrated for his contributions to Christian spirituality, education, and communal living.",
  },
  {
    name: "Attila the Hun",
    description:
      "Attila the Hun was a fearsome ruler who led the Hunnic Empire during the 5th century AD. Born around 406 AD, Attila rose to power alongside his brother Bleda following the death of their uncle, Rugila, in 434 AD. Under Attila's leadership, the Hunnic Empire expanded its territory across Eastern Europe and posed a significant threat to the Roman Empire. Attila's military campaigns were marked by ruthless tactics and devastating raids, earning him the nickname \"Scourge of God.\" He launched invasions into the Eastern and Western Roman Empires, sacking numerous cities and instilling terror among the populace. Despite facing setbacks, such as the defeat at the Battle of the Catalaunian Plains in 451 AD, Attila remained a formidable force until his death in 453 AD. His sudden demise, possibly due to a severe nosebleed on his wedding night, brought an end to his reign of terror and contributed to the eventual decline of the Hunnic Empire. Attila's legacy continues to captivate historians and inspire fascination with his larger-than-life persona and his role in shaping the course of European history during the late ancient period.",
  },
  {
    name: "Clovis I",
    description:
      "Clovis I, also known as Chlodovech or Chlodwig, was the first king of the Franks to unite all the Frankish tribes under one ruler, establishing the Merovingian dynasty. Born around 466 AD, Clovis succeeded his father as king of the Salian Franks in 481 AD. He expanded his kingdom through military conquests, defeating neighboring tribes and consolidating power in the region that would become modern-day France. Clovis is best known for his conversion to Christianity around 496 AD, which was a significant event in European history. His baptism by the Bishop of Reims marked the beginning of the Christianization of the Franks and laid the foundation for the alliance between the Frankish monarchy and the Catholic Church. Clovis's reign was characterized by his astute political and military leadership, as well as his efforts to establish a centralized Frankish state. His legacy as the founder of the Merovingian dynasty and the first Christian king of the Franks played a crucial role in shaping the future of France and Europe.",
  },
];

// 501 - 600 Historical Figures
const peopleInCentury6 = [
  {
    name: "Pope Gregory I",
    description:
      'Pope Gregory I, also known as Gregory the Great, was one of the most influential popes in the history of the Catholic Church. Born around 540 AD into a noble Roman family, Gregory initially pursued a career in government and served as the Prefect of Rome before abandoning worldly pursuits to become a monk. In 590 AD, he was elected pope and served until his death in 604 AD. Gregory is renowned for his efforts to strengthen the authority of the papacy and promote the spread of Christianity. He implemented extensive reforms within the Church, including improvements to liturgy, the organization of ecclesiastical affairs, and the establishment of monastic communities. Gregory also played a crucial role in shaping Western spirituality and theology through his writings and teachings. His most famous work, "Dialogues," recounts the lives of saints and miracles, while his "Pastoral Rule" provides guidance for the pastoral care of souls. Gregory\'s missionary efforts extended beyond Rome, as he sent missionaries to evangelize pagan tribes in Britain, leading to the conversion of Anglo-Saxon kingdoms. He is venerated as a saint in both the Catholic and Eastern Orthodox Churches and is honored as one of the four Latin Doctors of the Church for his theological contributions. Gregory\'s legacy as a pope, theologian, and spiritual leader continues to inspire Christians around the world.',
  },
  {
    name: "Arnulf of Metz",
    description:
      "Arnulf of Metz, also known as Saint Arnulf, was a Frankish bishop and advisor to the Merovingian kings during the 6th and 7th centuries. Born around 582 AD in Austrasia (present-day France), Arnulf was a member of the nobility and served as a courtier to the Merovingian kings. He is best known for his role in reconciling the conflicting factions within the Frankish kingdom and for his efforts to promote peace and justice. Arnulf played a significant role in the conversion of the Frankish people to Christianity and was instrumental in spreading the faith throughout the region. He was appointed bishop of Metz, where he worked tirelessly to evangelize the populace and establish churches and monasteries. Arnulf's reputation for holiness and piety earned him the veneration of the people, and he was eventually canonized as a saint in the Catholic Church. He is celebrated for his humility, charity, and devotion to God, and his feast day is observed on July 18th. Arnulf's legacy as a bishop and peacemaker continues to inspire Christians to this day.",
  },
  {
    name: "Heraclius",
    description:
      "Heraclius was a Byzantine emperor who ruled from 610 to 641 AD, during a period of intense conflict and upheaval in the Eastern Roman Empire. Born around 575 AD, Heraclius rose to power through military prowess and political maneuvering. His reign was marked by significant military campaigns, most notably against the Sassanian Persian Empire and the rising Islamic Caliphate. Heraclius is best known for his successful defense of the Byzantine Empire against these formidable adversaries and for his efforts to restore the unity and stability of the empire. He achieved a remarkable victory over the Persians in the Byzantine-Sassanian War, culminating in the recapture of Jerusalem and the recovery of the True Cross in 629 AD. However, Heraclius faced a new threat with the emergence of the Islamic Caliphate and the rapid expansion of Muslim forces into Byzantine territories. Despite initial setbacks, Heraclius managed to rally his forces and launch counteroffensives against the Caliphate. However, his later years were marred by internal strife, including challenges from rival claimants to the throne and the devastating impact of the Arab-Byzantine wars. Heraclius's reign represents a pivotal moment in Byzantine history, marked by both military triumphs and profound challenges to the empire's survival. His legacy as a determined and resourceful ruler continues to be studied and debated by historians.",
  },
];

// 601 - 700 Historical Figures
const peopleInCentury7 = [
  {
    name: "Begga of Landen",
    description:
      "Begga of Landen, also known as Saint Begga, was a Frankish noblewoman and Christian saint who lived during the 7th century. Born into the noble family of Pepin of Landen around 615 AD, Begga was renowned for her piety, charity, and devotion to the Christian faith. She was married to Ansegisel, a nobleman and mayor of the palace in the Frankish kingdom, and together they had several children, including Pepin of Herstal, who would become a powerful ruler in the Frankish realm. After the death of her husband, Begga devoted herself to works of charity and founded several monasteries, including the Abbey of Andenne, where she served as abbess. Begga is revered as a saint in the Catholic Church for her exemplary Christian life and her contributions to the spread of Christianity in the Frankish territories. She is celebrated for her compassion towards the poor and needy, as well as her dedication to the religious life. Begga's legacy as a saint and noblewoman continues to inspire Christians to this day, and she is honored as a patron saint of several towns and regions in Belgium.",
  },
  {
    name: "Charles Martel",
    description:
      "He was a Frankish statesman and military leader who lived during the 8th century. Born around 688 AD, Charles Martel rose to prominence as the Mayor of the Palace of the Frankish kingdom, effectively serving as the de facto ruler. He is best known for his victory over the invading Muslim forces at the Battle of Tours in 732 AD, which halted the Muslim advance into Western Europe and preserved Christianity in the region. Charles Martel's military successes solidified his power and established the Carolingian dynasty, which would later produce notable rulers such as Charlemagne. He is celebrated as a hero in European history for his defense of Christendom and his role in shaping the course of medieval Europe. Charles Martel's legacy as a strong and capable leader continues to be remembered and honored to this day.",
  },
  {
    name: "Childeric III",
    description:
      "Childeric III was the last Merovingian king of the Franks, reigning from 743 to 751 AD. He ascended to the throne following the death of his father, Theuderic IV, and his reign marked the final years of Merovingian rule in Frankish territories. Childeric III's reign was characterized by political instability and the decline of Merovingian power. He was a weak ruler who wielded little real authority, as power had largely shifted to the mayors of the palace, particularly Pepin the Short, who effectively governed the kingdom. Childeric III's reign came to an end in 751 AD when Pepin the Short, with the support of the papacy, deposed him and declared himself king, inaugurating the Carolingian dynasty. Childeric III was forced into a monastery, where he spent the remainder of his life in obscurity. His reign marked the end of the Merovingian dynasty and the beginning of Carolingian rule in the Frankish kingdom, a pivotal moment in the history of medieval Europe.",
  },
];

// 701 - 800 Historical Figures
const peopleInCentury8 = [
  {
    name: "Charlemagne",
    description:
      "Charlemagne, also known as Charles the Great, was King of the Franks from 768 and Emperor of the Romans from 800 until his death in 814, significantly shaping the course of European history. He united much of Western Europe during his reign and is often credited with founding the Carolingian Empire. Under his rule, there was a cultural and intellectual revival known as the Carolingian Renaissance. Charlemagne's administration innovated with a strong, organized government and he promoted the Christianization of his empire. His crowning as Emperor by Pope Leo III marked a pivotal moment, symbolizing the union of church and state and laying the groundwork for future European monarchies, including the Holy Roman Empire. His legacy includes the impact of his reform policies on education, administration, and culture throughout Europe.",
  },
  {
    name: "Pepin III the Short",
    description:
      "Pepin III, known as Pepin the Short, was a Frankish king who reigned from 751 to 768 and is notable for being the first of the Carolingian dynasty to become king. The son of Charles Martel, Pepin rose to power by first serving as Mayor of the Palace, a position that held actual power over the Frankish kingdom while the Merovingian kings were reduced to figureheads. In 751, with the support of the Frankish nobility and the approval of Pope Zachary, Pepin deposed the last Merovingian king, Childeric III, and was subsequently anointed as king by the bishops of the realm, setting a precedent for the divine right of kings in Western Europe. His reign was marked by significant reforms in church and state relations and expansions of the kingdom's boundaries, including the conquest of Lombardy and the donation of land to the Pope, which laid the foundation for the Papal States. Pepin’s successful reign and policies bolstered the power and prestige of the Carolingian dynasty, setting the stage for the future accomplishments of his son, Charlemagne.",
  },
  {
    name: "Lothair I",
    description:
      "Lothair I was the eldest son of Charlemagne who became Holy Roman Emperor and King of Italy upon his father's death in 814. His reign, which lasted from 814 until his death in 855, was marked by struggles over the control of the Carolingian Empire with his brothers, Louis the German and Charles the Bald, which culminated in the Treaty of Verdun in 843. This treaty divided the Empire among the three brothers, effectively fragmenting Charlemagne’s territories and shaping the political landscape of medieval Europe. Lothair retained the title of Emperor and control over the middle portion of the Empire, which stretched from the North Sea to Italy, including the regions that would become modern-day Belgium, the Netherlands, Luxembourg, Lorraine, Alsace, Burgundy, Provence, and parts of northern Italy. Lothair's reign was challenged by continuous warfare, both with external enemies and internal conflicts with his brothers, reflecting the difficulty of maintaining unity in the vast empire Charlemagne had built.",
  },
];

// 801 - 900 Historical Figures
const peopleInCentury9 = [
  {
    name: "Idris II",
    description:
      "Idris II was the founder of the city of Fez and a major figure in the establishment of the Idrisid dynasty in Morocco, ruling from 803 to 828. Born in Volubilis shortly after his father, Idris I, the founder of the Idrisid dynasty, had been assassinated, Idris II was proclaimed imam by the Berbers of the region at the age of 11. Under his leadership, Idris II significantly expanded the territory under Idrisid control, consolidating power and securing his kingdom against external threats, particularly from the Abbasids. His rule is noted for the strengthening of Islam in Morocco, bolstering the country’s urban centers, and promoting economic and cultural exchanges across the region. Idris II’s founding of Fez in 808 helped it become one of the leading cultural and religious centers in the Islamic world. His effective governance laid the groundwork for the continued prominence of the Idrisid dynasty in Moroccan history.",
  },
  {
    name: "Emperor Jingzong of Tang",
    description:
      "Emperor Jingzong of Tang, born Li Zhan, was an emperor of the Tang dynasty in China, reigning from 824 to 827. Ascending the throne at the age of 15 following the death of his father, Emperor Muzong, Jingzong's reign was short-lived and marked by relative inactivity and a lack of substantial governance. His tenure as emperor saw the continuation of the power struggles and decline that had begun to afflict the Tang dynasty in its later years. The young emperor was more interested in leisure and entertainment than in state affairs, heavily relying on eunuchs and court officials who furthered their own interests. His neglect of imperial duties led to increased power struggles within the court and the weakening of central authority. Emperor Jingzong’s reign came to an abrupt end when he was assassinated by his own guards in 827, a mere three years after taking the throne, underscoring the instability and factionalism that characterized the late Tang dynasty.",
  },
  {
    name: "Emperor Junna",
    description:
      "Emperor Junna, reigning from 823 to 833 during Japan's Heian period, succeeded his brother Emperor Saga and presided over a period of relative peace and cultural growth. His reign continued the Heian-period reforms aimed at consolidating imperial authority, and he played a crucial role in maintaining stability within the court. Junna's decision to abdicate in favor of his nephew, Emperor Nimmyo, exemplified the tradition of peaceful succession, ensuring the continuity of governance. Despite his relatively short reign, Emperor Junna's contributions to the stability and cultural development of the Heian court left a lasting impact on Japanese history.",
  },
];

// 901 - 1000 Historical Figures
const peopleInCentury10 = [
  {
    name: "Canute the Great",
    description:
      "Canute the Great, also known as Cnut, was a Danish king who became the ruler of a vast North Sea empire, including Denmark, England, Norway, and parts of Sweden, during the 11th century. Ascending to the throne of Denmark in 1018, Canute expanded his domain through military conquests and strategic alliances. In 1016, he also claimed the throne of England after the death of Edmund II, solidifying his position as one of the most powerful monarchs of his time. Canute's reign is remembered for his effective governance, religious tolerance, and efforts to unite his diverse realms. He enacted reforms to improve administration, fostered economic growth, and maintained peace within his territories. Despite his reputation as a ruthless warrior, Canute is perhaps best known for the legendary story of him commanding the tides to halt, demonstrating the limits of human power in the face of nature. His death in 1035 marked the end of an era of Scandinavian dominance in Northern Europe, but his legacy as a skilled statesman and ruler endured for centuries.",
  },
  {
    name: "Shayban ibn Ahmad ibn Tulun",
    description:
      "Shayban ibn Ahmad ibn Tulun was a prominent figure in the Tulunid dynasty, which ruled Egypt and parts of Syria from 868 to 905. He was the son of Ahmad ibn Tulun, the founder of the dynasty, and succeeded his father as ruler of the Tulunid domains. Shayban's reign was marked by both internal consolidation and external conflicts with neighboring powers, including the Abbasid Caliphate and the Byzantine Empire. He continued his father's policies of promoting agriculture, commerce, and cultural development, overseeing a period of relative stability and prosperity in Egypt. However, his reign was also marked by challenges, including revolts by provincial governors and struggles for power within the ruling family. Despite these challenges, Shayban's leadership helped maintain the Tulunid dynasty's influence in the region until its eventual decline and absorption into the Abbasid Caliphate.",
  },
  {
    name: "Dae Inseon",
    description:
      "Dae Inseon, also known as Dae In-seon, was indeed the last king of Balhae, ruling from 927 to 936. During his reign, Balhae faced increasing pressure from the rising Khitan Empire, which ultimately led to its downfall. Dae Inseon attempted to resist Khitan incursions, but in 926, the Khitans launched a massive invasion that culminated in the fall of the Balhae capital of Dongmo Mountain (present-day Ji'an in Jilin, China) in 926. Dae Inseon and his court fled to the northeast, but Balhae's territory was gradually overrun, leading to the collapse of the kingdom. Dae Inseon's fate after the fall of Balhae is uncertain, as historical records vary. Some accounts suggest that he fled to Goryeo (present-day Korea) or sought refuge with other regional powers, while others claim that he was captured or killed by the Khitans. Regardless, Dae Inseon's reign marked the end of Balhae's existence as an independent kingdom, and its territory was absorbed into the Khitan Empire.",
  },
];

// 1001 - 1100 Historical Figures
const peopleInCentury11 = [
  {
    name: "Bohemond I",
    description:
      "Bohemond I, also known as Bohemond of Taranto, was a Norman nobleman who played a prominent role in the First Crusade and the subsequent establishment of the Principality of Antioch. Born around 1058, Bohemond was the son of Robert Guiscard, Duke of Apulia and Calabria, and became known for his military prowess and ambitions for territorial expansion in the Eastern Mediterranean. In 1097, Bohemond led a Norman contingent to join the First Crusade, where he distinguished himself in battles and sieges, including the capture of Antioch in 1098. Following the Crusade's success, Bohemond asserted himself as the ruler of Antioch, founding the Principality of Antioch and consolidating his power in the region. His principality became a significant Crusader state and played a crucial role in subsequent Crusades. Bohemond's legacy as a Crusader leader and founder of Antioch remains influential in medieval history, shaping the geopolitics of the Eastern Mediterranean during the Crusades.",
  },
  {
    name: "Henry I Beauclerc",
    description:
      "Henry I Beauclerc, also known as Henry I of England, was a medieval English king who ruled from 1100 to 1135. Born in 1068, he was the fourth son of William the Conqueror and Matilda of Flanders. Henry's reign followed a period of turmoil after the death of his brother, William II, and he ascended to the throne following a disputed succession with his elder brother, Robert Curthose. Henry's reign was marked by efforts to consolidate royal authority and strengthen the English monarchy. He implemented administrative and legal reforms, including the issuing of the Charter of Liberties, which limited the power of feudal lords and established the rights of the king's subjects. Henry also oversaw the expansion of royal justice and the development of a centralized government bureaucracy. His reign was not without challenges, including conflicts with his barons and his own family members, particularly his nephews, who contested his rule. Henry I's reign laid the foundation for the Angevin Empire and the subsequent Plantagenet dynasty, shaping the course of medieval English history.",
  },
  {
    name: "Conrad III",
    description:
      "Conrad III, a member of the Hohenstaufen dynasty, was King of Germany from 1138 until his death in 1152 and Holy Roman Emperor from 1152. Born around 1093, Conrad was the son of Frederick I, Duke of Swabia, and Agnes of Germany. He played a significant role in the political and military affairs of the Holy Roman Empire during the turbulent period of the 12th century. Conrad faced challenges to his rule from rival claimants to the throne, including the Welf and Hohenstaufen factions, leading to civil strife and armed conflict. He also contended with external threats, such as the expansion of the Kingdom of Hungary and conflicts with the Byzantine Empire. Despite these challenges, Conrad sought to assert imperial authority and maintain stability within the empire. He participated in the Second Crusade alongside King Louis VII of France, although the campaign ultimately ended in failure. Conrad's reign marked a transitional period in the history of the Holy Roman Empire, as it grappled with the changing political dynamics of medieval Europe. His efforts to consolidate royal power and navigate complex diplomatic relationships laid the groundwork for future Hohenstaufen rulers, including his nephew Frederick Barbarossa.",
  },
];

// 1101 - 1200 Historical Figures
const peopleInCentury12 = [
  {
    name: "name",
    description: "description",
  },
  {
    name: "name",
    description: "description",
  },
  {
    name: "name",
    description: "description",
  },
];

export default {
  peopleInCentury1,
  peopleInCentury2,
  peopleInCentury3,
  peopleInCentury4,
  peopleInCentury5,
  peopleInCentury6,
  peopleInCentury7,
  peopleInCentury8,
  peopleInCentury9,
  peopleInCentury10,
  peopleInCentury11,
  peopleInCentury12,
  //   peopleInCentury13,
  //   peopleInCentury14,
  //   peopleInCentury15,
  //   peopleInCentury16,
  //   peopleInCentury17,
  //   peopleInCentury18,
  //   peopleInCentury19,
  //   peopleInCentury20,
  //   peopleInCentury21,
};
