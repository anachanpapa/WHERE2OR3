// Set up a collection to contain post information. On the server,
// it is backed by a MongoDB collection named "posts".


Posts = new Meteor.Collection("posts");

if (Meteor.isClient) {

  // client-side
  incrementLimit = function(inc) {
    inc = 3;
    newLimit = Session.get('limit') + inc;
    Session.set('limit', newLimit);
  }

  Template.Posts.created = function() {  
    Session.setDefault('limit', 3);

    // Deps.autorun() automatically rerun the subscription whenever Session.get('limit') changes
    // http://docs.meteor.com/#deps_autorun
    Deps.autorun(function() {
      Meteor.subscribe('getPosts', Session.get('limit'));
    });
  };

  Template.Posts.rendered = function() {  
    // is triggered every time we scroll
    $(window).scroll(function() {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        incrementLimit();
      }
    });
  }

  Template.Posts.events({  
    'click .give-me-more': function(evt) {
      incrementLimit();
    }
  });

  Template.Posts.helpers({  
    posts: function() {
      return Posts.find({ }, {limit: Session.get('limit')});
    }
  });

}


// On server startup, create some posts if the database is empty.
if (Meteor.isServer) {

  Meteor.startup(function () {
  Posts.remove({});

// data
var data = [
[
1,
"Oct. 16\, 2014",
"Bhutan",
"https://www.icommittopray.com/sync/graphics/pb/alerts/149_PASTORTANDIN.jpg?_nc=1",
"Pray for Pastor Tandin\'s Court Hearing",
"Pastor Tandin and his wife\, Nengboi\, have three young sons\, and minister to those in the Buddhist nation of Bhutan.",
"Pastor Tandin Wangyal\, who was sentenced to nearly four years in prison on charges of receiving money for spreading Christianity\, has his next hearing on Monday\, Oct. 20. As several wise advisors thought best\, Pastor Tandin will defend himself in court. VOM contacts ask that you pray that the judge will overturn the two felony convictions and declare Tandin not guilty and return his laptop\, cell phone\, and overhead projector. Also continue to pray for his wife\, Nengboi\, and their three young sons. Pray for favor for Pastor Tandin. He has seen God\'s work in his life through this situation already. He told VOM\, \"Every day has been a gift to me from God\, and I am making use of it. ...I am on bail\, but this is God\'s graciousness on my life through the prayer support of the worldwide body of Christ.\""
],
[
2,
"Oct. 16\, 2014",
"Sudan",
"https://www.icommittopray.com/sync/graphics/pb/alerts/150_KUMI.jpg?_nc=1",
"Pray for Kumi",
"Kumi\, a Christian refugee driven out by violence in the Nuba Mountains in Sudan\, no longer has to crawl after receiving a gift of a hand-operated wheelchair.",
"Kumi is a 35-year-old Christian man who fled the Nuba Mountains in Sudan where Christians have been repeatedly attacked. He and his brother fled the area and arrived in a refugee camp in April 2012. He is unable to use his legs\, but the gift of a wheelchair\, which is a hand-operated tricycle\, has given him much more mobility. He says\, \"I have been crawling for 35 years. I don’t need any other thing now. I only thank God\, and my sincere thanks again to those who brought this wheelchair to me.\""
],
[
3,
"Oct. 16\, 2014",
"Yemen",
"https://www.icommittopray.com/sync/graphics/pb/alerts/151_TONYANDHENTSCHELFAMILY.jpg?_nc=1",
"Pray for Tony and for German Family\'s Daughters",
"Tony\, a British citizen (inset) and the Hentschel family\, were abducted in June 2009 in Yemen. While the two daughters were rescued in 2010\, it was confirmed this past month that the girls\' parents and brother were killed. Tony\'s whereabouts are unknown.",
"The German Ministry for Foreign Affairs received word last month that three German citizens\, kidnapped in Yemen in 2009\, are confirmed dead. Dr. Johannes Hentschel\, his wife Sabine and their three children\, Anna\, Lydia and Simon\, were abducted along with four other foreigners by Yemeni insurgents on June 12\, 2009. All of the adult hostages had worked at a hospital and were part of an international aid group\, and sources state that Dr. Johannes had been threatened for his evangelism to Muslims in the area. The group was targeted for their Christian activities. The bodies of three of the women kidnapped were found shortly after their abduction along with Christian literature in their belongings. The couple’s two older children\, ages 4 and 6\, were rescued by security forces in May 2010 and now live with relatives in Germany. The whereabouts of the last kidnap victim\, Tony\, a British engineer\, remain unknown. Pray for his well-being or for closure for his family. And pray for the family of the Hentschels\, including their surviving daughters."
],
[
4,
"Oct. 09\, 2014",
"Laos",
"https://www.icommittopray.com/sync/graphics/pb/alerts/146_TOULYANDFAICHO.jpg?_nc=2",
"Pray for Tou Ly and Fai Cho",
"These two Hmong Christian men\, \"Tou Ly\" and \"Fai Cho\" were arrested\, thrown out of their village\, and are facing many difficulties as a result of their commitment to Christ.",
"Two Hmong Christian men\, \"Tou Ly\" and \"Fai Cho\,\" were forced by relatives to leave their homes because they refused to renounce Christ and return to ancestor worship. They were then arrested by local authorities and detained for two weeks. After their release\, on Aug. 25\, the men rented a place to live outside the village\, but their struggles continued when Fai Cho\'s father died\, on Sept. 27. Local authorities issued Fai Cho’s family a large fine\, claiming they had not obtained the proper burial permit. The two men are being helped by their church\, but they have little to no food or clothing and are in desperate need."
],
[
5,
"Oct. 09\, 2014",
"Egypt",
"https://www.icommittopray.com/sync/graphics/pb/alerts/147_EMANSAROUFIM.jpg?_nc=1",
"Pray for Eman Saroufim",
"Sarah was just 14 when she was taken from her Christian family by radical Muslims and forced to marry one of the abductors and convert to Islam. In a recent update\, VOM contacts ask us to continue to pray for her as she has not been returned to her family.",
"Eman Morco Saroufim\, a 39-year-old Christian mother of five children\, was kidnapped from her village in Menia\, Egypt\, on Sept. 3 by an armed Muslim man. Officials initially denied that Eman had been kidnapped\, reporting that she had willingly left her family and converted to Islam. Eman escaped her captors on Sept. 26 and has publicly stated that she is a Christian and will never convert to Islam. Eman’s abductor has threatened to kidnap her children if she does not return to him."
],
[
6,
"Oct. 09\, 2014",
"Syria",
"https://www.icommittopray.com/sync/graphics/pb/alerts/148_CHRISTIANSINSYRIA.jpg?_nc=1",
"Pray for Christians in Battle Zones",
"A group of Syrian women pray together.",
"A pastor in the area of Aleppo\, Syria\, has asked believers to pray for those living in areas where government and rebel forces are engaged in battle. Three buildings near the pastor\'s home have been damaged by mortar shells. Electricity is available for less than an hour per day\, and food and water are in limited supply. Those remaining in Aleppo are often forced to hide\, as it is not safe to enter the streets. The pastor and others in the area continually ask themselves questions that could mean the difference in life or death: \"Shall I stay in my bed so I\'ll rest in peace on my bed\, or should I go down to the ground floor? But how long should I stay there? Should I sleep or is it better to stay awake?\""
],
[
7,
"Oct. 03\, 2014",
"Sudan",
"https://www.icommittopray.com/sync/graphics/pb/alerts/145_MERIAMIBRAHIMSLAWYERS.jpg?_nc=1",
"Pray for Meriam Ibrahim\'s Lawyers",
"Meriam Ibrahim\, her husband\, and their two children are surrounded by part of their legal team shortly after her release on June 23. Five of her defense attorneys have been banned from leaving Sudan and may lose their license to practice law.",
"Five lawyers who defended Meriam Ibrahim\, a Christian woman who was sentenced to death for apostasy in Sudan\, have been accused of tarnishing \"the image of Sudan by allowing human rights organizations to put pressure on the government.\" On Sept. 15\, they were prohibited from leaving Sudan and face the possibility of having their licenses revoked. Since Meriam Ibrahim\'s death penalty was overturned in June\, the lawyers have received threats from extremist groups accusing the attorneys of being un-Islamic. The lawyers are not Christians but defend Christians and other minorities in Sudan. [Photo source: Hardwired]"
],
[
8,
"Oct. 03\, 2014",
"Pakistan",
"https://www.icommittopray.com/sync/graphics/pb/alerts/143_PASTORFAIZANDFAMILY.jpg?_nc=1",
"Pray for Pastor Faiz and Family",
"Pastor Faiz and his family are still in hiding after he was beaten by radical Muslims and forced to leave an area he had lived and ministered in for more than 25 years.",
"Pastor \"Faiz\" and his family remain in hiding nearly one year after the pastor was beaten by a group of radical Muslims and forced to leave his village. In October 2013\, a group of Muslims and the village leader began to threaten Pastor Faiz when they learned that he had told Christians not to eat sacrificed meat. Before threatening the pastor\, the Muslims beat a Christian man who had refused his Muslim neighbor’s offering of food\, saying that eating sacrificed meat was wrong according to his pastor’s recent teaching. On Oct. 29\, after a week of threats\, the Muslims chased and beat Pastor Faiz\, forcing him to leave the village he had lived in for almost 25 years. Pastor Faiz\'s church has been closed\, but Christians continue to meet privately."
],
[
9,
"Oct. 03\, 2014",
"Korea\, North",
"https://www.icommittopray.com/sync/graphics/pb/alerts/144_CHRISTIANMISSIONARIESTONORTHKOREANWORKERS.jpg?_nc=1",
"Pray for Missionaries to North Korean Workers",
"This North Korean worker burst into tears after missionaries gave him money for medicine he could not afford.",
"Missionaries continue to reach out in parts of Asia where North Korean workers are sent on short-term labor contracts. Between July 1 and July 4\, missionaries worked in a city where North Korean workers are surviving on a pack of rice a day and have no access to medicine. A sick North Korean man burst into tears when a missionary gave him some money to help buy medicine. The missionaries spoke openly about God with the North Koreans and distributed gospel materials and other assistance."
],
[
10,
"Sep. 26\, 2014",
"Nigeria",
"https://www.icommittopray.com/sync/graphics/pb/alerts/140_NIGERIANCHRISTIANS.jpg?_nc=1",
"Pray for Believers Attacked by Boko Haram",
"A young man escaped Boko Haram militants in a July 2014 attack but sustained serious burns on his back while fleeing a home that had been set on fire.",
"In late August\, more than 100 Boko Haram insurgents stormed a church in Adamawa state\, Nigeria\, killing more than 70 people and kidnapping an unknown number of teenage girls. The insurgents charged into the church in the village of Madagali during Sunday morning worship\, ordered women and children to get out and began firing on worshipers. The gunmen then left the church\, continuing to shoot those fleeing\, and set fire to several houses. They also kidnapped a number of teenage girls and stole food\, livestock and a large amount of cash from the villagers."
],
[
11,
"Sep. 26\, 2014",
"India",
"https://www.icommittopray.com/sync/graphics/pb/alerts/141_SHRIANDASHA.jpg?_nc=1",
"Pray for Shri and Asha",
"This pastor was injured in a separate attack by Hindu extremists in India. Shown with a large bandage on his back\, he suffered multiple stab wounds when radicals attacked him and his family.",
"A Christian couple in northeastern India\'s Bihar state were hospitalized after being beaten by Hindu extremists who vowed to kill them. The extremists stormed the home of Shri Lal Khatiyan and his wife\, Asha Devi\, and attacked Shri\, accusing him of paganism. When Asha intervened\, she too was severely beaten. Later that day\, about 100 Hindu extremists armed with clubs reportedly took up positions around the village and threatened to kill any Christian trying to file a police complaint. A new tactic by extremists is to wound pastors and other Christians in ways that will cause them to die."
],
[
12,
"Sep. 26\, 2014",
"Iran",
"https://www.icommittopray.com/sync/graphics/pb/alerts/142_IRANIANCHRISTIANS.jpg?_nc=1",
"Pray for Five Arrested Believers",
"Behnam Irani\, who is serving six years in prison in Iran\, was given 18 additional charges\, including “spreading corruption on Earth.” This charge\, along with the charge of “enmity against God” can carry the death penalty.",
"Iranian Christians continue to face persecution\, including charges that can carry the death penalty. Five Christians -- Mohammad Taslimi; Hamidreza Borhani and his wife\, Zainab Akbari; Moluk Ruhani; and Sepideh Morshedi -- were arrested on Sept. 2 and are being held without charge. Authorities seized their Bibles\, computer equipment and mobile phones. Several other Christians have been arrested since August\, and Iranian officials have charged several church leaders with crimes of \"enmity against God\" and \"spreading corruption on Earth\,\" both of which can carry the death penalty."
],
[
13,
"Sep. 18\, 2014",
"Bhutan",
"https://www.icommittopray.com/sync/graphics/pb/alerts/137_PASTORTANDIN.jpg?_nc=2",
"Pray for Pastor Tandin\, Sentenced to Prison\, but on Bail",
"Pastor Tandin stands with his wife. He is on bail\, but was sentenced to spend nearly four years in prison for spreading Christianity in Bhutan.",
"On Sept. 10\, Pastor Tandin Wangyal was sentenced to nearly four years in prison on charges of receiving money for spreading Christianity in the Buddhist nation of Bhutan. The charges were added after Pastor Tandin was detained for conducting an illegal religious gathering. The pastor has been released on bail but may still be forced to serve the prison term. The pastor\'s co-worker\, M. B. Thapa\, was sentenced to two years and four months or a fine equivalent to $1\,678. He was released after paying the fine. VOM contacts are concerned for the welfare of Pastor Tandin’s wife\, Nengboi\, and their three young sons\, especially if the pastor is required to serve his sentence."
],
[
14,
"Sep. 18\, 2014",
"Pakistan",
"https://www.icommittopray.com/sync/graphics/pb/alerts/138_ASIABIBI.jpg?_nc=1",
"Pray for Asia Bibi\, Appeal Postponed for Sixth Time",
"Asia Bibi\, a Christian woman sentenced to death in Pakistan for blasphemy\, is still waiting for her appeal to be heard after her hearing on Sept. 9 was postponed.",
"Asia Bibi\'s appellate hearing scheduled for Sept. 9\, 2014\, was again postponed\, this time at the request of her husband\, Ashiq Masih. Asia Bibi was arrested in June 2009 and sentenced to death on a blasphemy conviction. Her appellate hearing\, which has been scheduled and postponed five times\, has now been rescheduled for Oct. 16. Although Asia\'s legal team was present for the Sept. 9 hearing\, Ashiq requested the postponement because his private attorney could not attend. The Pakistan Christian Post reported that the judge has issued an order declaring that the Oct. 16 hearing will be final\, with no further adjournments."
],
[
15,
"Sep. 18\, 2014",
"Uzbekistan",
"https://www.icommittopray.com/sync/graphics/pb/alerts/139_PASTORKIM.jpg?_nc=1",
"Pray for Pastor Kim\, Facing Fines for Christian Activities",
"Two young children look at a media player in Uzbekistan where it is illegal to own Christian materials.",
"Authorities raided the home of Pastor Stanislav Kim on Aug. 2 in Chirchik\, Uzbekistan\, detaining 11 teenagers and three adults who had gathered for a volleyball game. Although Pastor Kim\, who leads an unregistered church\, and his son were not taken into custody\, they are expected to face heavy fines. The adults and teenagers were questioned for more than four hours before being released. The authorities confiscated a New Testament\, a complete Bible\, several Christian books\, more than 100 slides of hymns and computer equipment."
],
[
16,
"Sep. 12\, 2014",
"Laos",
"https://www.icommittopray.com/sync/graphics/pb/alerts/135_KANOA.jpg?_nc=1",
"Pray for Kanoa and Continued Church Growth",
"Two Christian men pray during a house church meeting in Laos.",
"A Bible school student named “Kanoa” recently told VOM sources that a house church in his home village continues to grow in the face of persecution. While Kanoa was home for summer break\, the village shaman and village headman called Kanoa and some other Christians to a meeting. The shaman told the Christians to “stop believing.” They replied that although following Christ wasn’t easy\, they couldn’t stop. The next day\, a group of soldiers arrived and again pressured them to give up their faith. Finally\, the village headman said he could find no legal reason to arrest the believers. Enraged\, the shaman threatened to kill them. Kanoa and the others told him\, “Kill us then. We all have to die\, and we know we will go to heaven.” Since the incident\, their house church of 10 families has grown to more than 60 people."
],
[
17,
"Sep. 12\, 2014",
"Malaysia",
"https://www.icommittopray.com/sync/graphics/pb/alerts/136_ARNEANDBERNADETTE.jpg?_nc=1",
"Pray for Arne and Bernadette\, Christians Under Investigation",
"A VOM worker (center) stands with Christian workers\, “Bernadette” and “Arne” who face scrutiny from police in Malaysia after a rumor circulated that a nearby church was allowing a Malay girl to attend services.",
"VOM contacts “Arne” and “Bernadette” are under police investigation after a rumor circulated that a church in the area was allowing a Malay girl to attend services. In Malaysia\, ethnic Malays are considered Muslim and are prohibited from converting to Christianity. When news of the Malay girl spread\, authorities began to look into the activities of Arne and Bernadette. The couple are quietly sharing the gospel in the area\, but they are not affiliated with the church that the Malay girl was attending. Despite the extra attention\, the couple told a VOM worker that they are not afraid\, though they are being extra careful. Church members had thought the girl was Indonesian\, and when they discovered that she was Malay they asked her to leave. The VOM worker said\, “I’m very disappointed with the church that rejected the girl.” She appears to have left the area."
],
[
18,
"Sep. 12\, 2014",
"Kenya",
"https://www.icommittopray.com/sync/graphics/pb/alerts/134_PASTORNTHURIMAFABIAN.jpg?_nc=1",
"Pray for Pastor Nthurima Fabian Whose Church and Home were Burnt to Ground",
"Rev. Nthurima Fabian lost everything when his church\, Full Gospel Church in Marsabit\, Kenya\, and his home were burned down on Aug. 24 by unknown arsonists.",
"The Full Gospel Church in Marsabit\, Kenya\, was burned by unknown arsonists in the early hours of Sunday\, Aug. 24\, along with Rev. Nthurima Fabian’s home adjacent to the church. Although the church is located in a Muslim community\, the pastor and congregation were surprised by the attack because there had been no threats or previous animosity between Christians and Muslims in the area. Earlier this year\, someone threw stones at the church during a prayer service\, but members did not see the event as noteworthy."
],
[
19,
"Sep. 04\, 2014",
"India",
"https://www.icommittopray.com/sync/graphics/pb/alerts/131_KOLLOL.jpg?_nc=1",
"Pray for Kollol\, Christian Forced to Perform Hindu Ritual",
"Kollol and his wife were beaten and forced to perform a Hindu ritual. Their two teenage daughters were beaten after trying to stop the radical Hindus.",
"\"Kollol\" and his wife were attacked by 15 radical Hindus during a June 4 prayer meeting in their home. The couple were beaten and then dragged to a Hindu temple\, where they were forced to undergo a ritual cleansing. The Hindus poured water on them to symbolize outward cleansing and put red powder on their foreheads to mark them as devout Hindus. When the Hindus force-fed the couple with food sacrificed to idols\, Kollol\'s two teenage daughters protested. They were then beaten\, too\, and they were all later treated at a hospital. Community members evicted the family from the village\, threatening to kill them if they return."
],
[
20,
"Sep. 04\, 2014",
"Philippines",
"https://www.icommittopray.com/sync/graphics/pb/alerts/132_ALJON.jpg?_nc=1",
"Pray for Aljon\, Escaped from Kidnappers",
"A man prays at a recent pastor’s conference in the Philippines.",
"In early August\, suspected Islamists attempted to kidnap a church elder serving in a Muslim community in Mindanao. \"Aljon\" was followed by a van and two men on a motorcycle after he left his store\, but he received a call warning him of the danger and was able to escape. According to a VOM-supported pastor\, Aljon believes he was spared through God\'s intervention. Due to continued threats\, he has since relocated\, leaving the church and his store. The pastor asks that we pray for believers in the region\, many of whom are relocating because of threats and violence."
],
[
21,
"Sep. 04\, 2014 ",
"Ukraine",
"https://www.icommittopray.com/sync/graphics/pb/alerts/133_UKRAINIANSEMINARYSTAFF.jpg?_nc=1",
"Pray for Staff of Ukrainian Seminary",
"Donetsk Christian University staff members who had been residing in the campus housing were forced out by pro-Russian separatists on July 9.",
"On July 9\, armed men from a pro-Russian separatist group demanded that all staff leave the Donetsk Christian University\, a seminary in Ukraine\, warning that any who resisted would be severely punished. In addition to the seminary\, the separatists took over several other buildings owned by Christian groups even though vacant buildings were available. A seminary staff member explained that the separatists have targeted evangelicals as their \"worst enemies\" because of their \"pro-Western\" origin. Sources have stated that students had already been sent home earlier in the year."
],
[
22,
"Aug. 28\, 2014 ",
"India",
"https://www.icommittopray.com/sync/graphics/pb/alerts/128_RANJAY.jpg?_nc=1",
"Pray for \"Ranjay\" and Christian Leaders",
"\"Ranjay\" used to be a leader with a radical Hindu group\, but is now an evangelist and shares the Gospel with many throughout India. Now RSS leaders in India want to see all Christians convert back to Hinduism or leave the country.",
"\"Ranjay\" was once an area leader for the Shiv Sena\, a radical political group in India which\, like the Hindu nationalist RSS group\, seeks to establish India as an entirely Hindu country in which no other religious or political organization is welcome. Now\, after receiving a New Testament\, he is a dedicated follower and an evangelist who has used his own money to distribute 3\,000 Gospel tracts and 1\,700 New Testaments. He and other Christian leaders may face persecution in the months to come from members of the RSS. Speaking at an event on Aug. 10\, RSS leader Mohan Bhagwat said\, \"The cultural identity of all Indians is Hindutva\,\" a fundamentalist Hindu ideology that views all other religions as invalid. Two days later\, an RSS coordinator in Uttar Pradesh told a local news agency that the group plans to use Dec. 25 to convert Christians to Hinduism and believes that the area will be entirely free of Christians and other minority religious groups within two to three years."
],
[
23,
"Aug. 28\, 2014",
"Cameroon",
"https://www.icommittopray.com/sync/graphics/pb/alerts/129_PASTORKESVERESFAMILY.jpg?_nc=1",
"Pray for Family of Pastor Kesvere; Kidnapped and Killed by Boko Haram",
"Pastor Jean Marcel Kesvere leaves a wife and eight children behind after he was kidnapped and killed by Boko Haram militants who attacked an area in Cameroon. (Photo used with permission of World Watch Monitor.)",
"Boko Haram militants attacked the village of Bargaram\, Cameroon\, on July 24\, killing dozens\, including Pastor Jean Marcel Kesvere. The militants kidnapped pastor Kesvere during the raid\, and authorities discovered his body four days later in a rural area a few miles from the village. The pastor is survived by his wife and eight children. Boko Haram\, an Islamic militant group\, has displaced thousands of Nigerian Christians\, many of whom have fled to refugee camps in nearby Cameroon."
],
[
24,
"Aug. 28\, 2014",
"Iraq",
"https://www.icommittopray.com/sync/graphics/pb/alerts/130_ASIM.jpg?_nc=1",
"Pray for \"Asim\" a Church Planter from Iraq",
"Christian refugees from Mosul\, Iraq take refuge in a church courtyard in Erbil. Churches in the region have taken in many of the refugees who were forced to flee their homes when Islamic State overran Mosul in July.",
"Pastor \"Asim\,\" who was planting a church in Mosul\, was forced to flee the city in July when the Islamic State (IS) began threatening to kill Christians and other non-Muslims. The U.N. estimates that 500\,000 people have fled Mosul for Erbil\, in the Kurdistan Region. Churches in the region have taken in many Christian refugees\, and some believers in Kurdistan have turned their businesses and office buildings into shelters. Many Syrian Christian refugees have provided the Iraqi refugees with supplies from whatever extra they had. Pastor Asim has now had to relocate four times."
],
[
25,
"Aug. 21\, 2014",
"China",
"https://www.icommittopray.com/sync/graphics/pb/alerts/125_HUANG.jpg?_nc=1",
"Pray for Huang\, a Christian Arrested for Going to Police",
"Huang\, not pictured\, was arrested for trying to reclaim illegally seized church property. Pictured is Zhang Rongliang while he was in prison for involvement with a house church; he served more than seven years in prison and was released in late 2011.",
"A Christian man was arrested in western China when he and a group of other church members tried to reclaim Bibles and other illegally confiscated church property from a police station. Authorities arrested \"Huang\" after one of the other church members apparently grabbed the collar of an officer. Government officials told Huang’s wife\, \"Li\,\" that if she would pretend not to be a believer\, Huang would be released early. Li has refused to deny Christ."
],
[
26,
"Aug. 21\, 2014",
"Nigeria",
"https://www.icommittopray.com/sync/graphics/pb/alerts/126_JOHNYAKUBU.jpg?_nc=1",
"Pray for John Yakubu\, Tortured for Faith",
"John Yakubu\, a Nigerian Christian\, was tortured by Boko Haram for refusing to convert to Islam\, and is still recovering from wounds to his head\, hands and legs.",
"John Yakubu\, a Nigerian Christian\, was tortured by Boko Haram terrorists recently for refusing to convert to Islam. After surviving multiple attacks by Boko Haram in the Gwoza area\, the 43-year-old believer had escaped with his family to a refugee camp in Cameroon. Unable to feed his family\, he returned home to sell some of his animals. When members of Boko Haram saw him enter his house\, they captured him and demanded that he convert to Islam or suffer the consequences. John refused to convert\, so the terrorists tied him to a tree and cut both of his hands with large knives. When they again demanded that he convert to Islam\, he replied that they could kill only his body. The terrorists continued to cut him on the head\, back and legs\, finally leaving him to bleed to death. John was later rescued and taken to a hospital. Speaking to a VOM contact\, he said\, \"I have forgiven the Islamic militants because they did not know what they were doing.\""
],
[
27,
"Aug. 21\, 2014",
"Ukraine",
"https://www.icommittopray.com/sync/graphics/pb/alerts/127_CHRISTIANMARTYRSFAMILIES.jpg?_nc=1",
"Pray for Families of Four Christian Martyrs",
"Pray for the families of four Christians who were dragged away from church and found murdered.",
"Four Christian men who had volunteered with a Christian radio station were captured and beaten to death by pro-Russian separatists in eastern Ukraine. The four men were kidnapped from a church\, and their bodies were later found in a mass grave. Two of the men were brothers\, and the men all leave families behind. Several weeks before their murders\, an a Christian broadcast tower was destroyed\, preventing gospel broadcasts into eastern Ukraine."
],
[
28,
"Aug. 15\, 2014",
"Kenya",
"https://www.icommittopray.com/sync/graphics/pb/alerts/122_KENYANCHRISTIANS.jpg?_nc=1",
"Pray for Christians Being Targeted for Faith",
"This woman is hospitalized with serious injuries as a result of an attack by Islamic militants in Kenya earlier this year.",
"On July 5\, suspected Islamic militants attacked Christians in Hindi\, Kenya\, leaving at least 12 dead. Islamists also attacked two other towns\, leaving homes of Muslims undisturbed and attacking those known to be owned by Christians. At least 3\,000 people have fled their homes in Hindi\, fearing further attacks."
],
[
29,
"Aug. 15\, 2014",
"India",
"https://www.icommittopray.com/sync/graphics/pb/alerts/123_MAINA.jpg?_nc=1",
"Pray for \"Maina\"",
"Maina and her daughter were abandoned when Hindu nationalists threatened the family.",
"On July 15\, members of a radical Hindu group abused and tortured a Christian woman for sharing the gospel in their village. When \"Maina\" refused to stop witnessing\, village leaders began to threaten her husband. Maina\'s husband then beat her\, demanded that she return to the Hindu faith\, and threatened to leave her and their 22-month-old daughter. She still refused to leave her Christian faith\, so her husband abandoned the family for fear of retribution by the radical Hindus."
],
[
30,
"Aug. 15\, 2014",
"Israel",
"https://www.icommittopray.com/sync/graphics/pb/alerts/124_CHRISTIANSINISRAEL.jpg?_nc=1",
"Pray for the Witness of Local Evangelist",
"A photograph taken by the evangelist who was accosted by a Muslim storekeeper and police officer.",
"An evangelist and group of visitors were harassed by a shop owner and a policeman for distributing Christian materials during Ramadan. The group was distributing Christian literature\, CDs and DVDs in Jericho when a Muslim man came out of his store and threw one of the Christian CDs at the evangelist. He shouted at the group and called a police officer to arrest them for \"blasphemy against Allah.\" As the police officer warned the evangelist that the group could be harmed by Muslims\, a Palestinian detective arrived and helped prevent the group’s arrest. Ramadan\, which lasted from June 28 to July 28\, is Islam\'s holiest month. Although tensions remained high\, many people accepted the literature\, CDs and DVDs\, and some even asked if they could meet with the evangelist privately at a later time."
],
[
31,
"Aug. 08\, 2014",
"Nepal",
"https://www.icommittopray.com/sync/graphics/pb/alerts/119_JAYA.jpg?_nc=1",
"Pray for Jaya\, Attacked For Evangelizing",
"Jaya was beaten by 20 Hindu women from her village in Nepal who were angry with her for evangelizing and leading people to Christ.",
"A Christian woman in western Nepal was attacked recently for spreading her “foreign” religion. “Jaya\,” an evangelist who has led 32 people to Christ in the past two years\, was beaten by nearly 20 Hindu women and then kicked out of her village. Her father is said to have taken part in the beating. Jaya is currently in the care of her pastor\, and VOM will soon be moving her to a safe house where she can heal from her wounds."
],
[
32,
"Aug. 08\, 2014",
"Iran",
"https://www.icommittopray.com/sync/graphics/pb/alerts/120_AMIR.jpg?_nc=1",
"Pray for Amir\, Christian Scheduled for Execution",
"A Christian man who lives in Iran cries out to God during a time of prayer and worship",
"UPDATE: Amir\'s execution has been postponed indefinitely after the original two week postponement. For now\, this is very good news\, as his execution is no longer imminent and there are no plans to schedule it at this time. Amir and his family appreciate your continued prayers. Iranian authorities have set Aug. 12 as the execution date for a Christian man who is imprisoned outside Tehran. “Amir” was imprisoned two years ago after being caught transporting a truckload of Bibles. Publishing\, importing or reprinting Bibles or Christian literature is illegal in Iran. A VOM partner asks that we pray for Amir and his family\, for his deliverance and for all Christians living in Iran."
],
[
33,
"Aug. 08\, 2014",
"Afghanistan",
"https://www.icommittopray.com/sync/graphics/pb/alerts/121_TWOCHRISTIANWOMEN.jpg?_nc=1",
"Pray for Families of Christian Aid Workers Killed",
"The two women who were killed in Afghanistan were Christian aid workers helping the people of Afghanistan\, particularly women as well as children like these two Afghan schoolgirls.",
"Two women who worked for a Christian aid organization were murdered in Herat on July 24 by gunmen who fired into their taxi. The women\, both citizens of Finland\, had served with the International Assistance Mission (IAM) for more than 15 years in the mental health and community development sectors. While no one has claimed responsibility for their murders\, the Taliban has previously attacked IAM staff members\, killing eight workers in 2010 for being Christian missionaries."
],
[
34,
"Aug. 01\, 2014",
"Cuba",
"https://www.icommittopray.com/sync/graphics/pb/alerts/117_PASTORESMIR.jpg?_nc=1",
"Pray for Pastor Esmir & Family After Authorities Destroy Home",
"Pastor Esmir stands in the ruins of his home and church shortly after Cuban authorities destroyed the home.",
"Pastor Esmir Torreblanca\, his wife\, Marieta\, and their two children\, ages 7 and 11\, were left homeless on July 2 after Cuban authorities raided and demolished their home\, which also served as a church. Government authorities\, including state security and Cuban Communist Party officials\, broke through the front door of their home in Santiago de Cuba at about 6 a.m. while the family was still sleeping. Officials were seen loading church property and the family’s belongings into trucks before bulldozing the building. Authorities also confiscated identification cards from church members who tried to interfere."
],
[
35,
"Aug. 01\, 2014",
"Iraq",
"https://www.icommittopray.com/sync/graphics/pb/alerts/118_CHRISTIANREFUGEES.jpg?_nc=1",
"Pray for Christian Refugees",
"A refugee has been forced from his home",
"More than 200 families fled Mosul\, Iraq\, after members of the so-called Islamic State demanded that Christians remaining in Mosul after noon on July 19 convert to Islam\, agree to pay a tax or face execution. The fleeing Christians left most of their possessions behind\, and many who were stopped at checkpoints were stripped of items such as money\, vehicles\, jewelry\, phones\, IDs\, and even food and medicine. Some Christians\, such as the elderly and infirm\, were unable to leave Mosul. While Muslim neighbors have protected some of those remaining in the city\, other Christians have been forced to convert to Islam by reciting the Islamic prayer of faith in a Sharia court."
],
[
36,
"Aug. 01\, 2014",
"Tajikistan",
"https://www.icommittopray.com/sync/graphics/pb/alerts/116_LOCALBELIEVERS.jpg?_nc=1",
"Pray for Local Church Members",
"Tajikistan\'s believers have difficulty accessing Bibles",
"On Sunday\, July 20\, officials from the Committee on Religion interrupted a worship service of the International Church in Tajikistan\, which meets in a building owned by the Russian Baptist Church\, to question leaders about the church’s government registration. They continued to question the building’s manager as well as worshipers in attendance for about an hour before leaving. Leaders from the International Church said local believers are even more vulnerable to harassment and intimidation than the foreigners who attend the international services. They requested prayers not only for their own congregation but also for those who attend the Russian Baptist Church. At least three other churches have received similar visits in the past month."
],
[
37,
"Jul. 24\, 2014",
"Colombia",
"https://www.icommittopray.com/sync/graphics/pb/alerts/113_COLOMBIANWIDOWERS.jpg?_nc=1",
"Pray for Widower Pastor",
"James is now caring for his four daughters alone.",
"The wife of a pastor serving in one of Colombia\'s red zones was shot to death recently by FARC guerrillas. Two men on a motorcycle stopped by Pastor James\'s home one night at 9:30 p.m.\, after the family had gone to bed. They lured him outside by asking him to help them fix their motorcycle. When the pastor went to take a look at the motorcycle\, he heard the men behind him ask his wife what her name was. When she replied\, they shot her twice at point-blank range. Pastor James and his family were the only Christians in their village\, and his wife was very active in sharing Christ with everyone she met. The pastor and his four daughters are being cared for by a VOM contact in another city as they mourn their loss. Pray for comfort and restoration."
],
[
38,
"Jul. 24\, 2014",
"China",
"https://www.icommittopray.com/sync/graphics/pb/alerts/114_CHINESECHRISTIANS.jpg?_nc=1",
"Pray for Seven Detained Ministry Workers",
"While Chinese Christians are often harassed\, they aren\'t often detained for so long.",
"Seven ministry workers have been arrested in Xian\, China\, for an illegal worship gathering. Public Security officers arrested the workers at about 5 p.m. on Sunday\, July 13. Christians are often detained and questioned for several hours before being released\, but they aren\'t usually held for this long. Church leaders are concerned that the leader of the group\, Li Yue Si\, may be held for an extended period. Authorities have also threatened to imprison Li Yue\'s wife. Pray that God will use the ministry workers to share the Gospel while they are detained."
],
[
39,
"Jul. 24\, 2014",
"Sudan",
"https://www.icommittopray.com/sync/graphics/pb/alerts/115_SUDANESECHRISTIANS.jpg?_nc=1",
"Pray for Sudanese Christians and Churches",
"Many Christians fled to South Sudan where they can worship freely.",
"A Sudanese government minister reaffirmed a ban on new church construction recently\, after authorities demolished a large church building near Khartoum. On July 1\, government officials destroyed the Sudanese Church of Christ in North Khartoum\, where 600 people met for worship. Religious Affairs Minister Shalil Abdullah said Sudan had enough churches to serve the Christians who remain in Sudan. One year ago\, the government announced that it would no longer issue building permits for Christian churches. One Christian told an American news outlet that the threats have driven people away from Sudan\'s churches. \"The church is now contaminated with terror. You don\'t feel safe in prayer\,\" he said. Pray for revival in Sudan."
],
[
40,
"Jul. 17\, 2014",
"Ukraine",
"https://www.icommittopray.com/sync/graphics/pb/alerts/110_PASTORSERGIEKOSYAK.jpg?_nc=1",
"Pray for Pastor Sergie Kosyak",
"Pastor Sergei was beaten for four hours. Photo courtesy of marosh.org.",
"Evangelical churches in the eastern Ukrainian city of Donetsk are being targeted by pro-Russian forces\, which view the evangelicals as \"sects\" that support the Ukrainian government by praying for peace. VOM has received reports of at least nine attacks on Christians\, churches and church-run drug and alcohol rehabilitation centers. Pastor Sergei Kosyak\, pastor of an Assemblies of God church in Donetsk and founder of the \"Prayer for Ukraine\" movement\, was detained and beaten for four hours. In another incident\, on June 17\, gunmen broke into a Christian rehabilitation center and held 29 people hostage\, before later releasing them. Pro-Russian rebels have detained other pastors and have robbed and looted churches. Many evangelicals in the region refuse to take up weapons on principle\, and some congregations have been very public about the fact that they are praying for unity in Ukraine."
],
[
41,
"Jul. 17\, 2014",
"Iran",
"https://www.icommittopray.com/sync/graphics/pb/alerts/111_PASTORBEHNAMIRANI.jpg?_nc=1",
"Pray for Pastor Behnam Irani Who is Back in Prison",
"The younger brother of Pastor Behnam Irani visited him in the hospital after he had abdominal surgery. Behnam was handcuffed to the bed.",
"Pastor Behnam Irani has been returned to prison after being held in solitary confinement for weeks at an undisclosed location. Religious police reportedly beat him on June 7 and threatened him with further prison time. The pastor\, who was accused of communicating with the media\, was interrogated repeatedly for hours at a time. He began serving his six-year prison sentence in 2011 after being convicted of \"action against the state.\" He underwent stomach and colon surgery earlier in 2014."
],
[
42,
"Jul. 17\, 2014",
"Mali",
"https://www.icommittopray.com/sync/graphics/pb/alerts/112_CHRISTIANSINMALI.jpg?_nc=1",
"Pray for Christians Facing Severe Difficulties",
"A Muslim background believer (left) shares his story of being persecuted for his Christian faith in Mali.",
"The conflict between government forces and Islamic rebel groups in northern Mali has left Christians vulnerable to persecution\, especially Christian converts from Islam. Medical workers and other aid organizations have left the area\, travel is difficult\, and resources are few\, leaving many hungry and sick. Government forces deliver humanitarian aid to Muslims first and often have nothing left for Christians. In addition to facing discrimination by the government\, Christian converts from Islam are threatened by family members and often must flee for their lives."
],
[
43,
"Jul. 10\, 2014",
"Laos",
"https://www.icommittopray.com/sync/graphics/pb/alerts/107_LAOTIANCHRISTIANTEENS.jpg?_nc=1",
"Pray for Teenage Christians Denied Education",
"Three young Christian women from Laos.",
"A village chief in Laos refused to allow three female students to take their final exams on May 20 because the girls are Christians. He said the three girls\, two aged 15 and one 14\, had forfeited their right to an education because they believe in Jesus Christ. A Christian leader in the village has appealed to the district education chief\, who will work with the village chief and the director of the girls’ school to determine whether the girls can complete their education."
],
[
44,
"Jul. 10\, 2014",
"Korea\, North",
"https://www.icommittopray.com/sync/graphics/pb/alerts/108_INSUANDOTHERNORTHKOREADEFECTORS.jpg?_nc=1",
"Pray for Missionaries Reaching North Korean Defectors",
"This Korean Parallel Bible uses both dialects of the language\, making it easier for South Koreans to evangelize to North Korean defectors.",
"In May\, a North Korean defector\, \"In-su\,\" who is serving time in a prison in South Korea\, received a parallel Bible and shared his testimony of how he had longed for a Bible of his own. Though there are many North Korean defectors in South Korean prisons\, they are rarely reached by churches. In-su said he had been taught that foreign missionaries were spies. Although he had once seen a person shot to death for having a Bible\, he was curious about what was in this forbidden book. He was so glad to read it for the first time. Parallel Bibles are given to missionaries so they can reach out to defectors like In-su as well as to defectors in refugee camps located in South Korea and other areas."
],
[
45,
"Jul. 10\, 2014",
"Colombia",
"https://www.icommittopray.com/sync/graphics/pb/alerts/109_CHRISTIANSINCOLOMBIA.jpg?_nc=1",
"Pray for Family of Murdered Pastor and Teenage Son",
"The widow of a pastor in Colombia mourns her husband and teenage son\, who were killed by FARC guerillas when he stood up for his children and his church. She is left to take care of three daughters.",
"Members of the Revolutionary Armed Forces of Colombia (FARC) killed a pastor and his oldest son recently after the pastor refused to shut down his church or allow them to recruit his oldest son and daughter. The FARC guerrillas confronted the pastor three months ago because he had reopened a church located in a red zone. They told the pastor that if he didn\'t allow them to recruit his two oldest children he would have to close his church. When he refused to do either\, they immediately killed the pastor and his son. The pastor\'s wife is now left to care for the couple\'s three daughters alone."
],
[
46,
"Jul. 03\, 2014",
"Uganda",
"https://www.icommittopray.com/sync/graphics/pb/alerts/104_SUSANITHUNGU.jpg?_nc=1",
"Pray for Susan Ithungu and Her Testimony",
"Susan\, who survived persecution from her own father in Uganda\, is shown hugging her guardian\, Dedra",
"Susan Ithungu was 13 years old in 2009 when she accepted Christ. The Ugandan teen stood up for her faith even though her father beat her and locked her in a room for six months with little food or water. She weighed just 45 pounds when she was rescued\, and it has taken time for her to recover physically and emotionally. Susan is now thriving in her new boarding school and is in good health and spirits. She clings to her faith in Jesus\, has hope for her future and shares her faith with classmates and peers. Her guardian\, Dedra Biira\, is doing well in her business and is able to help provide for Susan as well as her other children."
],
[
47,
"Jul. 03\, 2014",
"Nepal",
"https://www.icommittopray.com/sync/graphics/pb/alerts/105_PASTORMICHAELANDHISWIFE.jpg?_nc=1",
"Pray for Pastor\'s Faithful Endurance",
"A church leader in Nepal faces persecution in his country.",
"Pastor \"Michael\" and his wife have been beaten\, burglarized and threatened with death if they didn\'t leave their city\, but God continues to provide for them as they serve in an area of Nepal where few Christians would go. Within a year of being called to the area\, which is known for violence\, the pastor had gained the respect of many in the town and had seen 10 people come to Christ. Soon\, however\, he began to face persecution by those opposed to his work. The pastor persevered through many difficulties\, and a new believer recently contributed a large sum of money to help him continue his work in the church\, which now has 150 members. Although the church faces great opposition\, the pastor hopes to see it grow to 500 members. He said he has seen the love of Jesus transform the worst of offenders."
],
[
48,
"Jul. 03\, 2014",
"Tanzania",
"https://www.icommittopray.com/sync/graphics/pb/alerts/106_TANZANIANPASTORS.jpg?_nc=1",
"Pray for Pastors Charged with Blasphemy",
"A pastor in Tanzania shows some of the rubble after his church was destroyed.",
"A group of 43 Tanzanian pastors\, most former Muslims\, have been accused with blasphemy for teaching biblical foundations to their church members. In addition\, they have been fined the equivalent of nearly $3\,000\, which they are paying in order to continue their ministry work and to avoid multiple court hearings. If convicted of breaching the peace by \"shaking the faith of Muslims\,\" they could face up to 14 years in prison. Many of the pastors have been persecuted by their families and continue to face pressure in the largely Muslim areas where they work."
],
[
49,
"Jun. 26\, 2014",
"Vietnam",
"https://www.icommittopray.com/sync/graphics/pb/alerts/101_PASTORQUANG.jpg?_nc=1",
"Pray for Pastor Quang",
"Pastor Quang\, the Bible school founder and outspoken Christian leader\, was recently injured in an attack on the school.",
"Several hundred people\, including police and local officials\, attacked a Bible School in southern Vietnam on June 9\, injuring more than 20 pastors and students. The mob\, which broke through a gate to enter the school\, beat the believers\, ransacked the building and tore off several doors before leaving nearly two hours later. The school’s founder\, Pastor Nguyen Hong Quang\, suffered injuries to his head and chest during the attack. Pastor Quang\, an outspoken Christian leader in the area\, has been arrested in the past and had his home demolished by authorities. He is determined to continue the work of the college despite the attack and intimidation."
],
[
50,
"Jun. 26\, 2014",
"Syria",
"https://www.icommittopray.com/sync/graphics/pb/alerts/102_SYRIANCHRISTIANS.jpg?_nc=1",
"Pray for Christians Suffering Amid Civil War",
"Many homes in Aleppo\, Syria have been damaged or destroyed by mortar shells\, including this home of a Christian woman.",
"Christians in Syria continue to suffer as a result of the ongoing civil war there. On June 12\, a Christian worker living in Aleppo\, Syria\, lost her home when it was destroyed by a mortar shell\, and a VOM contact reported that five families in his church also have lost their homes recently as a result of bombings in the city. In addition\, Aleppo has been without running water for more than two weeks. Families often must wait in line for up to three hours to get a couple gallons of water."
],
[
51,
"Jun. 26\, 2014",
"Sri Lanka",
"https://www.icommittopray.com/sync/graphics/pb/alerts/103_CHRISTIANSINSRILANKA.jpg?_nc=1",
"Pray for Pastor and Christians Beaten during Worship Meeting",
"This Sri Lankan pastor is committed to sharing the Gospel despite threats of attacks.",
"A pastor and three other believers were severely beaten on May 12 when more than 40 people in their Sri Lankan village broke through a security fence and began attacking them with poles. The day before the attack\, the villagers had warned the Christians to stop their worship meetings. After knocking the pastor unconscious with a blow to the head\, the attackers dispersed\, thinking they had killed him. Police questioned the Christians for more than seven hours\, and the magistrate\'s office finally ordered the arrest of the attackers. The pastor was hospitalized for four days\, and the three injured believers were hospitalized for two days."
],
[
52,
"Jun. 20\, 2014",
"Uganda",
"https://www.icommittopray.com/sync/graphics/pb/alerts/98_PASTORUMARMULINDE.jpg?_nc=1",
"Pray for Pastor Umar Mulinde",
"After surviving an attack by radicals who poured acid on his face and back\, Pastor Umar Mulinde is returning to his family and church home in Uganda.",
"After spending more than two years in Israel receiving treatment for severe acid burns\, Pastor Umar Mulinde was welcomed home to Uganda by his family and church on May 25. On Christmas Eve 2011\, Pastor Umar was walking to his church when he was attacked by a group of Muslim men. One man poured acid on his face while others poured it down his back. The men shouted \"Allahu Akbar!\" (God is great!) as they ran from the scene. Pastor Umar lost his right eye in the attack and underwent extensive facial reconstruction at a hospital in Israel before returning home to Uganda. Pastor Umar said his recovery is \"a turn of events for a wonderful testimony.\""
],
[
53,
"Jun. 20\, 2014",
"Laos",
"https://www.icommittopray.com/sync/graphics/pb/alerts/99_SORT.jpg?_nc=1",
"Pray for Sort\, Believer Tied to Post",
"A Christian leader in Laos has faced persecution for following God.",
"A Christian man in Laos was arrested on May 29 and tied to a post after refusing to recant his faith. Sort\, who has been a Christian for the past year\, was approached by a police official and the village leader on May 15 and threatened with expulsion from the village if he would not give up his Christian faith. \"I\'ve embraced the Christian faith over a year\, and I have not broken any law!\" he told authorities. They then took the equivalent of $500 from Sort and tied him to a post as punishment."
],
[
54,
"Jun. 20\, 2014",
"Kazakhstan",
"https://www.icommittopray.com/sync/graphics/pb/alerts/100_VIKTORKANDYBA.jpg?_nc=1",
"Pray for Viktor Kandyba\, Imprisoned for Faith",
"Believers in Kazakhstan who gather to pray or read the Bible must register or face severe fines and imprisonment.",
"Viktor Kandyba\, leader of a Baptist congregation in Kazakhstan\, was sentenced to 10 days in prison for refusing to pay a fine his church received last year for holding unregistered prayer meetings. The prayer meetings were considered illegal because all religious activity in Kazakhstan must be registered."
],
[
55,
"Jun. 12\, 2014",
"Vietnam",
"https://www.icommittopray.com/sync/graphics/pb/alerts/95_PRAYFORQHUAHA.jpg?_nc=1",
"Pray for Qhua Ha\, a Hmong believer",
"This Hmong family lives in Vietnam\, where Hmong believers frequently face persecution from family members and village authorities.",
"On April 14\, a family of Hmong believers in Vietnam were beaten and forced from their home. For months\, local authorities and villagers had pressured Qhua Ha\, 37\, his wife and their four children to renounce their faith\, but they refused. After beating the couple and their 9-year-old son\, authorities forced the family to leave\, seizing their home and property\, including 10 bags of rice and 125 chickens. Qhua Ha and his wife became Christians in February 2013 and were the only Christians in the village. VOM contacts ask for prayer for Qhua\, his wife and their four children\, ages 9\, 6\, 4 and 1."
],
[
56,
"Jun. 12\, 2014",
"Nigeria",
"https://www.icommittopray.com/sync/graphics/pb/alerts/96_CHRISTIANSINNIGERIA.jpg?_nc=1",
"Pray for Christians Killed in Two Attacks",
"Gabriel Stephen survived a gunshot wound to his hip when his village in Nigeria was attacked by Boko Haram militants in February 2014.",
"Dozens of Christians were killed and many others injured in two attacks by Boko Haram in Borno state\, Nigeria on June 1 and June 3. On June 1\, at least 27 believers were killed and another 50 severely injured when hundreds of militants invaded the Christian community of Attagara during church services. Two days later\, Boko Haram militants disguised as army officials entered the same village and lured Christians to a supposed meeting about security problems. All 45 Christians that came to the meeting were shot to death. Militants also attacked the north of the village and some surrounding Christian communities\, killing dozens of women and children who tried to flee into the hills."
],
[
57,
"Jun. 12\, 2014",
"China",
"https://www.icommittopray.com/sync/graphics/pb/alerts/97_ALIMUJIANGYIMITIANDHISFAMILY.jpg?_nc=1",
"Pray for Prisoner Alimujiang Yimiti and family",
"Gulinuer and her two sons\, now ages 15 and 8\, need prayer and are awaiting the return of husband and father Alimujiang Ymiti\, who is serving 15 years in a Chinese prison for his faith.",
"The wife of Uyghur Christian Alimujiang Yimiti reports that her husband\, who is being held in a prison in China\, has lost a lot of weight since her last visit to the prison and that he looks pale. However\, she said he is still doing well spiritually. She asks that we continue to pray for Alimujiang’s strength to overcome the difficulties he faces in prison\, such as unkind guards. Gulinuer and her two children are allowed to visit Alimujiang for only 15 minutes every three months. The couple’s oldest son\, who is 15\, is sad and discouraged about his father’s continued imprisonment\, and their 8-year-old son misses his dad and remains anxious for his return. Alimujiang was arrested in 2008 and sentenced to 15 years for \"illegally providing state secrets to foreign nationals.\""
],
[
58,
"Jun. 05\, 2014",
"Indonesia",
"https://www.icommittopray.com/sync/graphics/pb/alerts/92_PASTORDAVIDANDHISCHURCH.jpg?_nc=1",
"Pray for Pastor and Reopened Church",
"Pastor Ujang of Indonesia protests church closings",
"Pastor David has spent the last 10 years ministering to believers in Central Java\, but a local mosque recently sent him a letter indicating that his church building was illegal and could no longer hold services. After being summoned to the village office\, Pastor David informed the head of the village that the church had been in existence prior to a decree that requires houses of worship to attain permission from locals in the community. In addition\, the pastor told authorities that locals were not opposed to the church and that even the country\'s former president had approved it. As a result\, authorities decided that the church could continue to hold services."
],
[
59,
"Jun. 05\, 2014",
"South Asia",
"https://www.icommittopray.com/sync/graphics/pb/alerts/93_BHUTANESEREFUGEES.jpg?_nc=1",
"Pray for Bible Distribution to Bhutanese Refugees",
"A group of believers gather for a recent Bible distribution.",
"VOM workers recently distributed 6\,000 Bibles to Bhutanese refugees in South Asia and left another 3\,000 Bibles for pastors and church leaders to distribute as needed. When the refugees learned that they would receive their own Bibles\, some of them said\, \"We never thought that there are people who love us.\""
],
[
60,
"Jun. 05\, 2014",
"Azerbaijan",
"https://www.icommittopray.com/sync/graphics/pb/alerts/94_CHRISTIANSINAZERBAIJAN.jpg?_nc=1",
"Pray for Believers as Old Testament Banned",
"The Old Testament found within this Azeri Bible is listed amongst 28 other banned books in Azerbaijan.",
"On May 5\, a news agency in Baku\, Azerbaijan\, published a list of banned religious books\, including the Old Testament. The list\, said to be produced by state police and expert analysts\, includes 28 titles claimed to be \"some of the most radical and dangerous\" religious books. Many believers are concerned that police in some areas of Azerbaijan may use the list of banned books as a reason to conduct raids and confiscate Bibles and other Christian literature. Religious literature is tightly controlled in Azerbaijan\, and those caught with \"illegal\" materials often face criminal charges. \"We need to pray to God for wisdom as to how to respond to this ban on the Holy Scriptures in Azerbaijan\,\" one believer said."
],
[
61,
"May. 29\, 2014",
"Sudan",
"https://www.icommittopray.com/sync/graphics/pb/alerts/89_MERIAMYAHIAIBRAHIM.jpg?_nc=1",
"Pray for Christian Mother Sentenced to Death for Apostasy",
"The wedding photo of Meriam Ibrahim and Daniel Wani. (Photo credit: Gabriel Wani)",
"A 27-year-old Sudanese woman\, Meriam Yahia Ibrahim\, was sentenced to death in early May for apostasy. Eight months pregnant at the time of her sentencing\, she gave birth to a baby girl on May 26. Ibrahim explained to the court that she had grown up as a Christian under her Christian mother\'s care\, but the court convicted her of apostasy because her father is Muslim. In addition\, she is to receive 100 lashes for a charge of adultery\, relating to her 2011 marriage to a South Sudanese Christian man. Since Ibrahim\'s father is Muslim\, the marriage is not recognized under Sharia law. Her own family filed the complaint about her marriage\, resulting in the charges. The court gave her three days to recant her Christian faith\, but she refused to do so. Ibrahim\'s 20-month old son\, Martin\, and newborn daughter the couple named Maya\, will be held in prison with her until her execution."
],
[
62,
"May. 29\, 2014",
"China",
"https://www.icommittopray.com/sync/graphics/pb/alerts/90_WENXILISWIFEANDFAMILY.jpg?_nc=1",
"Pray for Wenxi Li\'s Wife and Family",
"Cai Hong Li is the wife of prisoner Wenxi Li\, who is imprisoned for involvement with a Christian bookstore.",
"In December 2012\, Wenxi Li was arrested and sentenced to two years in prison for his involvement with a Christian book store in Taiyuan\, the capital of Shanxi province. His wife\, Cai Hong Li\, said the most important thing right now is that her Christian brothers and sisters continue to pray for her family. \"Prayer is the most precious thing\,\" she said."
],
[
63,
"May. 29\, 2014",
"Egypt",
"https://www.icommittopray.com/sync/graphics/pb/alerts/91_CHRISTIANGIRLSANDWOMEN.jpg?_nc=1",
"Pray for Christian Girls and Women",
"Young Christians pray during a worship service. Christian girls like are often at risk of being kidnapped because of their faith.",
"A Christian woman in Cairo narrowly escaped being kidnapped in early May after a man ran her down with his van. Refka\, who was wearing a necklace with a large cross that identified her as a Christian\, was walking along a road when a man in a van chased her down\, struck her with the van and attempted to kidnap her. Another man came to Refka\'s rescue\, taking her in his taxi to the nearest hospital\, where she received treatment for her injured leg. Kidnappings of young Christian women have become an almost daily occurrence in Egypt."
],
[
64,
"May. 23\, 2014",
"Laos",
"https://www.icommittopray.com/sync/graphics/pb/alerts/86_THEJESUSGUY.jpg?_nc=1",
"Pray for Evangelist",
"A man from Laos prays during a church service.",
"An Laotian evangelist known locally as \"The Jesus Guy\,\" who often faces pressure from local authorities and police\, said two policemen stopped to investigate the large gathering of Hmong people at his Easter service and ended up staying. Rather than trying to end the services\, the officers were intrigued and remained for the duration of the evangelist\'s sermon about the death and resurrection of Jesus for the salvation and deliverance of all who believe. Although the officers declined the evangelist\'s invitation to stay\, eat and talk further\, one of the officers exclaimed\, \"Wow\, Jesus talked pretty tough on sin\, didn\'t He?\""
],
[
65,
"May. 23\, 2014",
"Tanzania",
"https://www.icommittopray.com/sync/graphics/pb/alerts/87_PASTOROMBENIANDHISCHURCH.jpg?_nc=1",
"Pray for Members of Area\'s Only Church",
"The EAGT church in Mafia was burned by radicals.",
"A church in the predominantly Muslim area of Mafia\, Tanzania\, was burned down on Friday\, May 9\, just hours before a scheduled prayer meeting. Radicals had threatened the pastor\, Ombeni Omari\, and the church for the past two years. Pastor Omari\, a Christian convert from Islam\, escaped to Dar es Salaam with his wife and three children after learning of the attack. He had founded the almost 60-member church\, the only Christian church in the area\, and nearly all of its members were converts from Islam. Although the church building was destroyed\, Pastor Omari said he will return to the area because the work he was called to is not yet finished."
],
[
66,
"May. 23\, 2014",
"Algeria",
"https://www.icommittopray.com/sync/graphics/pb/alerts/88_CHRISTIANSINTIZIOZOU.jpg?_nc=1",
"Pray for Believers Seeking Safety of House Churches",
"Algerian Christians have started a house church to protect children from being injured in attacks by radicals.",
"Attacks on members of a church in Tizi Ozou have caused many members\, especially families with young children\, to begin attending house churches. On several occasions\, radical Muslims have thrown stones at church members entering and leaving services. While the Algerian government requires churches to register\, most house churches operate openly without interference from authorities. Algerian Christians are often persecuted by Muslim family members\, and the church in Tizi Ozou supports several believers who were kicked out of their homes because of their faith."
],
[
67,
"May. 16\, 2014",
"Serbia",
"https://www.icommittopray.com/sync/graphics/pb/alerts/84_CHRISTIANBEINGTHREATENED.jpg?_nc=1",
"Pray for Church Members Being Threatened",
"These children stand in their Sunday classroom with their new copies of the Right Choice Bible.",
"Attackers threw Molotov cocktails at a church in Serbia on April 21\, causing minor damage and frightening local believers. One of the Molotov cocktails landed inside the church\, partially burning the carpet. Church members are thankful that the damage wasn\'t more severe. The attackers were arrested and sentenced to 30 days in jail\, but the church continues to receive threats."
],
[
68,
"May. 16\, 2014",
"Sierra Leone",
"https://www.icommittopray.com/sync/graphics/pb/alerts/85_CHRISTIANSINSIERRALEONE.jpg?_nc=1",
"Pray for Christians Whose Homes Were Burned",
"A village chief in Sierra Leone who was baptized; many Christians in Sierra Leone face persecution",
"Christians in two villages lost their homes and possessions recently in fires thought to be set by arsonists. When VOM contacts arrived to help Christians in the first village\, they learned that the homes of recent converts in a second village had also been burned. Almost all of those living in the first village converted to Christianity two years ago after hearing the gospel from a local evangelist. Those who lost their homes in the second village became followers of Christ only six months ago."
],
[
69,
"May. 15\, 2014",
"Uzbekistan",
"https://www.icommittopray.com/sync/graphics/pb/alerts/83_CHRISTIANSINUZBEKISTAN.jpg?_nc=1",
"Pray for Families Fined for Illegal Religious Activities",
"A house church member participates in worship where both unregistered activities and Christian literature are considered illegal.",
"Four believers were fined in late April after being caught holding unregistered religious services. Authorities had previously confiscated property\, including a car\, vacuum cleaner and other household items\, from the Christians\' families because they had refused to pay fines received in 2012 for the same offense. Uzbek authorities stated that the two families will have to pay the fines if they expect their property to be returned. Unregistered religious activities are illegal in Uzbekistan\, and offenders are frequently fined several months\' wages."
],
[
70,
"May. 09\, 2014",
"Middle East",
"https://www.icommittopray.com/sync/graphics/pb/alerts/80_CHRISTIANSINTHEMIDDLEEAST.jpg?_nc=1",
"Pray for Families of Women Killed for Faith",
"This Christian woman from the Middle East continues to pray despite the risks.",
"On April 30 and May 1\, three Christian women were killed in separate incidents by Muslim family members. A 38-year-old woman was shot to death by her two brothers shortly after they learned that she had been talking with a missionary over Skype and that she had a Bible. In a second incident\, a man stabbed to death his 22-year-old sister when he caught her with a Christian CD. The woman had previously talked with her brother about Jesus. The man left his sister\'s body in front of a hospital before seeking treatment for his own hand wound at a government hospital. In the third incident\, a man beat his daughter to death by hitting her on the head with a stone. He turned himself over to police and confessed to the killing\, knowing that he probably would not face serious punishment. He reportedly told police that his daughter had continued to attend church despite his warnings. Please pray for those impacted by the women\'s deaths\, their fellow believers\, friends and loved ones. Please also pray for those leading this group of believers during this very difficult time."
]
];

	  for (var i = 0; i < data.length; i++){
	    var one = data[i];
      var prayerID = one[0];
	    var date = one[1];
	    var country = one[2];
	    var imgUrl = one[3];
	    var title = one[4];
	    var shortDesc = one[5];
	    var longDesc = one[6];
	    var hurl = 'https://plus.google.com/hangouts/_?gid=231886625852&gd={"pid":"' + prayerID + '"}';
	    var circle = "Open the Prayer Group";
      var OpenOrJoin = "open";
	    var btnClass = "btn-danger";
	    var state = "standby";
      var memberImg = "img/member.jpg";
      if(date && country && title && shortDesc && longDesc) {
	      Posts.insert({prayerID: prayerID, date: date, country: country, imgUrl: imgUrl, 
        title: title, shortDesc: shortDesc, longDesc: longDesc, hurl: hurl, 
        circle: circle, OpenOrJoin: OpenOrJoin, btnClass: btnClass, state: state,
        member1: memberImg, member2: memberImg, member3: memberImg, member4: memberImg,
        member5: memberImg, member6: memberImg, member7: memberImg, 
        member8: memberImg, member9: memberImg, member10: memberImg
        });
      }
	  }
   });   

  Meteor.publish("getPosts", function (limit) {
    if (limit > Posts.find().count()) {
      limit = 0;
    }
    return Posts.find({ }, { sort: {prayerID: 1},  limit: limit });
  })

  function clearHangout(){
    var cursor = Posts.find();
    cursor.forEach(function(post) {
      if (post.state != "standy"){
        //console.log(post.title);  
        var pid = post.prayerID;
        var hurl = 'https://plus.google.com/hangouts/_?gid=231886625852&gd={"pid":"' + pid + '"}';
        var now　=　new Date();
        var before = post.state;
        var gap = now - before;
        if(gap > 15000){
          Posts.update({ prayerID: pid }, { $set: { circle: "Open the Prayer Group" }});
          Posts.update({ prayerID: pid }, { $set: { OpenOrJoin: "open" }});
          Posts.update({ prayerID: pid }, { $set: { hurl: hurl }});  
          Posts.update({ prayerID: pid }, { $set: { state: "standby" }});  
          Posts.update({ prayerID: pid }, { $set: { btnClass: "btn-danger" }});
          Posts.update({ prayerID: pid }, { $set: { member1: "img/member.jpg" }});
          Posts.update({ prayerID: pid }, { $set: { member2: "img/member.jpg" }});
          Posts.update({ prayerID: pid }, { $set: { member3: "img/member.jpg" }});
          Posts.update({ prayerID: pid }, { $set: { member4: "img/member.jpg" }});
          Posts.update({ prayerID: pid }, { $set: { member5: "img/member.jpg" }});
          Posts.update({ prayerID: pid }, { $set: { member6: "img/member.jpg" }});
          Posts.update({ prayerID: pid }, { $set: { member7: "img/member.jpg" }});
          Posts.update({ prayerID: pid }, { $set: { member8: "img/member.jpg" }});
          Posts.update({ prayerID: pid }, { $set: { member9: "img/member.jpg" }});
          Posts.update({ prayerID: pid }, { $set: { member10: "img/member.jpg" }});
        }
      }
    });
  }
   
  Meteor.setInterval(clearHangout, 5000);
}



RESTstop.configure({
  use_auth: true
});

// Maps to, for example: /api/get_post/[string]
RESTstop.add('get_post/:post?', function() {
  console.log("kuru");
  if (! this.params.post) {
    return [403, {
      success: false,
      message: 'You need a post as a parameter!'
    }];
  }
  //console.log(this.params.post);

  var triple_str = this.params.post;
  var triple = triple_str.split("!!!");
  var ucode = triple[0];
  var pid = triple[1];
  pid = Number(pid);
  var imgUrls = triple[2];
  var hurl = 'https://plus.google.com/hangouts/_/' + ucode + '?gid=231886625852&gd={"pid":"' + pid + '"}';
  Posts.update({ prayerID: pid }, { $set: { circle: "Join in the Prayer Group" }});
  Posts.update({ prayerID: pid }, { $set: { OpenOrJoin: "join" }});
  Posts.update({ prayerID: pid }, { $set: { hurl: hurl }});
  Posts.update({ prayerID: pid }, { $set: { btnClass: "btn-success" }});

  var p = Posts.findOne({prayerID: pid}); 
  var hstr = p.prayerID + "$$$" +
            p.date + "$$$" +
            p.country + "$$$" +
            p.imgUrl + "$$$" +
            p.title + "$$$" +
            p.shortDesc + "$$$" +
            p.longDesc;
  hstr = hstr.replace(/\"/g,"\\\"");   
  hstr = hstr.replace(/\'/g,"\\\'");       
            
  return 'result("' + hstr + '")';
  //return 'result("kuru")';
});


RESTstop.add('check_alive/:pair?', function() {
  console.log("kuru");
  if (! this.params.pair) {
    return [403, {
      success: false,
      message: 'You need a post as a parameter!'
    }];
  }

  var _pair = this.params.pair;
  var pair = _pair.split("!!!");
  var pid = pair[0];
  pid = Number(pid);
  var imgUrls = pair[1];
  var now　=　new Date();
  Posts.update({ prayerID: pid }, { $set: { state: now }});
  var _imgUrls = imgUrls.split('(((');
  _imgUrls.sort();

  for(var i=1; i <= 10; i++){       
    if(_imgUrls[i-1] != null){
      switch(i){
        case 1:
        Posts.update({ prayerID: pid }, { $set: { member1: _imgUrls[i-1] }});
        break;

        case 2:
        Posts.update({ prayerID: pid }, { $set: { member2: _imgUrls[i-1] }});
        break;

        case 3:
        Posts.update({ prayerID: pid }, { $set: { member3: _imgUrls[i-1] }});
        break;

        case 4:
        Posts.update({ prayerID: pid }, { $set: { member4: _imgUrls[i-1] }});
        break;

        case 5:
        Posts.update({ prayerID: pid }, { $set: { member5: _imgUrls[i-1] }});
        break;

        case 6:
        Posts.update({ prayerID: pid }, { $set: { member6: _imgUrls[i-1] }});
        break;

        case 7:
        Posts.update({ prayerID: pid }, { $set: { member7: _imgUrls[i-1] }});
        break;

        case 8:
        Posts.update({ prayerID: pid }, { $set: { member8: _imgUrls[i-1] }});
        break;

        case 9:
        Posts.update({ prayerID: pid }, { $set: { member9: _imgUrls[i-1] }});
        break;

        case 10:
        Posts.update({ prayerID: pid }, { $set: { member10: _imgUrls[i-1] }});
        break;
      }
    } else {
      switch(i){
        case 1:
        Posts.update({ prayerID: pid }, { $set: { member1: "img/member.jpg" }});
        break;

        case 2:
        Posts.update({ prayerID: pid }, { $set: { member2: "img/member.jpg" }});
        break;

        case 3:
        Posts.update({ prayerID: pid }, { $set: { member3: "img/member.jpg" }});
        break;

        case 4:
        Posts.update({ prayerID: pid }, { $set: { member4: "img/member.jpg" }});
        break;

        case 5:
        Posts.update({ prayerID: pid }, { $set: { member5: "img/member.jpg" }});
        break;

        case 6:
        Posts.update({ prayerID: pid }, { $set: { member6: "img/member.jpg" }});
        break;

        case 7:
        Posts.update({ prayerID: pid }, { $set: { member7: "img/member.jpg" }});
        break;

        case 8:
        Posts.update({ prayerID: pid }, { $set: { member8: "img/member.jpg" }});
        break;

        case 9:
        Posts.update({ prayerID: pid }, { $set: { member9: "img/member.jpg" }});
        break;

        case 10:
        Posts.update({ prayerID: pid }, { $set: { member10: "img/member.jpg" }});
        break;
      }
    }
  }

});


  
