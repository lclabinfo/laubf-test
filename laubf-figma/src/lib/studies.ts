export interface StudySection {
  id: string;
  title: string;
  content: string; // HTML content for the questions
  guide?: string; // HTML content for the guide/answers
}

export interface BibleStudy {
  id: string;
  title: string;
  passage: string;
  date: string;
  messenger: string;
  series: string;
  keyVerse?: {
    verse: string;
    text: string;
  };
  sections: StudySection[];
  pdfUrl: string; // Primary PDF document
  docxUrl?: string; // Primary DOCX document
  videoId?: string;
  transcript?: string; // HTML content
  bibleText?: string; // HTML content
  attachments?: {
    name: string;
    url: string;
    type: 'pdf' | 'docx' | 'image' | 'other';
  }[];
  relatedEvents?: {
    id: string;
    title: string;
    date: string;
    passage?: string;
    messenger?: string;
  }[];
}

const sampleSections: StudySection[] = [
  {
    id: "s1",
    title: "Look at verses 11-12",
    content: `<p>When Moses grew up, where did he go? What did he see? What did he do when he saw this? Why do you think he did this?</p>`,
    guide: `<p class="mb-2"><strong>** Verses 11-12.</strong> Moses went out to his people and looked on their burdens.</p>
            <p>He saw an Egyptian beating a Hebrew, one of his people. He struck down the Egyptian and hid him in the sand.</p>`
  },
  {
    id: "s2",
    title: "Look at verses 13-14",
    content: `<p>What did Moses encounter the next day? What did he try to do? How did the man in the wrong respond to Moses? How did Moses’s way of handling the Egyptian shape the man’s opinion of him? How did this man’s response affect Moses?</p>`,
    guide: `<p class="mb-2"><strong>** Verses 13-14.</strong> The next day he saw two Hebrews struggling together.</p>
            <p>He tried to make peace. But the man in the wrong rejected him, asking "Who made you a prince and a judge over us?"</p>`
  },
  {
    id: "s3",
    title: "Look at verse 15",
    content: `<p>Who else heard about what Moses did and how did he respond? What does this reveal about the seriousness of Moses's actions? Where did Moses go and eventually find himself at?</p>`,
    guide: `<p class="mb-2"><strong>** Verse 15.</strong> Pharaoh heard of it and sought to kill Moses.</p>
            <p>Moses fled from Pharaoh and stayed in the land of Midian. He sat down by a well.</p>`
  },
  {
    id: "s4",
    title: "Look at verses 16-17",
    content: `<p>What happened at the well? What did Moses do? Why do you think he did this?</p>`,
    guide: `<p class="mb-2"><strong>** Verses 16-17.</strong> The priest of Midian had seven daughters who came to draw water.</p>
            <p>The shepherds drove them away, but Moses stood up and saved them, and watered their flock.</p>`
  },
  {
    id: "s5",
    title: "Look at verses 18-20",
    content: `<p>What did the 7 sisters do? What did Reuel their father do, when he heard that Moses had rescued his daughters and watered their flocks? Why did Reuel respond in this way?</p>`,
    guide: `<p>The sisters returned to their father Reuel. He invited Moses to eat bread.</p>`
  },
  {
    id: "s6",
    title: "Look at verses 21-22",
    content: `<p>How was this event different than when Moses tried to stand up for his fellow Hebrews? What were the results? What happened to Moses?</p>`,
    guide: `<p>Moses was content to dwell with the man, and he gave Moses his daughter Zipporah. She gave birth to a son, Gershom.</p>`
  },
  {
    id: "s7",
    title: "Reflection",
    content: `<p>What role do you think the well and watering the flocks have in this outcome? Contrast the well and watering the flocks vs. striking down the Egyptian and speaking to the Hebrew man “in the wrong”, what do you think Moses learned from these experiences?</p>`,
    guide: `<p>God was training Moses. He learned that human strength and anger cannot achieve God's righteousness. He learned to be a shepherd.</p>`
  }
];

const john17Sections: StudySection[] = [
  {
    id: "j1",
    title: "V14-19",
    content: `<ul class="list-disc pl-5 space-y-2 marker:text-[#3667B1]">
        <li>What has Jesus given us?(14a) How does the world treat those who follow Jesus’s words and why?(14b) What does it mean to be ‘not of the world’? (16)</li>
        <li>What did Jesus not ask God for? (15a) Instead, what did he ask God to do for his disciples and why? (15b-17) What can we learn from this? What does it mean to ‘sanctify us in the truth’?</li>
        <li>What purpose does Jesus have for sending us into the world?(18, 20) How might we live differently knowing we are “not of the world” and are being “sent into the world”?(18) Why did Jesus consecrate himself and how is it related to our sanctification?(19)</li>
      </ul>`,
    guide: `<p><strong>** Verse 14.</strong> Jesus gave them God's word. The world hates them because they are not of the world.</p>`
  },
  {
    id: "j2",
    title: "V20-23",
    content: `<ul class="list-disc pl-5 space-y-2 marker:text-[#3667B1]">
        <li>For whom did Jesus also ask God for these things?(20) Why does Jesus want all believers to be united as one?(21 & 23) What glory did Jesus give his disciples and how does that glory help the disciples to be one?(22)Why do you think that when the disciples become perfectly one, the world will know that God sent Jesus and love believers? (23)</li>
      </ul>`,
    guide: `<p><strong>** Verse 20.</strong> Jesus prays for those who will believe through their word.</p>`
  },
  {
    id: "j3",
    title: "V24-26",
    content: `<ul class="list-disc pl-5 space-y-2 marker:text-[#3667B1]">
        <li>What does Jesus desire and why? (24) What does the world not know, and what do Jesus and his disciples know (25) and what is the significance of this? What did Jesus make known to his disciples, and why does he continue to make it known?(26)</li>
      </ul>`,
    guide: `<p><strong>** Verse 24.</strong> Jesus desires that they may be with him to see his glory.</p>`
  }
];

const john21Sections: StudySection[] = [
  {
    id: "j21-1",
    title: "Read verses 1-6",
    content: `
      <ul class="list-disc pl-5 space-y-3 marker:text-[#3667B1]">
        <li>Where and to whom did the risen Jesus appear again? (1-2, 14; Mt 26:32)</li>
        <li>What did Peter and the disciples want to do and what was the result? (3)</li>
        <li>How might they have felt when they caught nothing? How did Jesus help to restore them after their failure? (4-6)</li>
      </ul>
    `,
    guide: `
      <div class="space-y-4">
        <div>
          <p class="font-bold text-gray-900 mb-1">Where and to whom did the risen Jesus appear again?</p>
          <p>By the sea of Tiberias (Sea of Galilee). It was the place Jesus called his disciples and promised he would go ahead of them into Galilee after resurrection. It was the third time that he appeared to his disciples.</p>
        </div>
        <div>
          <p class="font-bold text-gray-900 mb-1">What did Peter and the disciples want to do and what was the result?</p>
          <p>The disciples did not know what to do, so they went fishing. That night they caught nothing. They experienced a miserable failure, learning that apart from Jesus they can do nothing.</p>
        </div>
        <div>
          <p class="font-bold text-gray-900 mb-1">How did Jesus help to restore them after their failure?</p>
          <p>Jesus took the initiative and called to them: "Friends, haven't you any fish?" He gave a command with a promise: "Throw your net on the right side of the boat and you will find some." When they obeyed they caught an enormous number of fish, reminding them of the success they had experienced with Jesus before (Luke 5).</p>
        </div>
      </div>
    `
  },
  {
    id: "j21-2",
    title: "Read verses 7-14",
    content: `
      <ul class="list-disc pl-5 space-y-3 marker:text-[#3667B1]">
        <li>Who recognized Jesus first? (7a; Lk 5:1-11)</li>
        <li>What did Peter and the other disciples do? (7b-8)</li>
        <li>How did Jesus serve the disciples? (9-13)</li>
        <li>How successful was their fishing? (11)</li>
        <li>How might they have felt when Jesus served them? (12-13)</li>
      </ul>
    `,
    guide: `
      <div class="space-y-4">
        <div>
          <p class="font-bold text-gray-900 mb-1">Who recognized Jesus first?</p>
          <p>The disciple whom Jesus loved (John) discerned the identity of the stranger.</p>
        </div>
        <div>
          <p class="font-bold text-gray-900 mb-1">What did Peter and the other disciples do?</p>
          <p>Peter wrapped his outer garment around him and jumped into the water. The other disciples followed in the boat, towing the net full of fish.</p>
        </div>
        <div>
          <p class="font-bold text-gray-900 mb-1">How did Jesus serve the disciples?</p>
          <p>The risen Jesus had already prepared a charcoal fire with bread and fish. He invited them to "Come and have breakfast" and served them bread and fish, echoing the feeding of the 5,000.</p>
        </div>
        <div>
           <p class="font-bold text-gray-900 mb-1">How successful was their fishing?</p>
           <p>It was full of large fish, 153, but even with so many the net was not torn. This speaks of the abundance that God provides.</p>
        </div>
      </div>
    `
  },
  {
    id: "j21-3",
    title: "Read verses 15-17",
    content: `
      <ul class="list-disc pl-5 space-y-3 marker:text-[#3667B1]">
        <li>After eating, to whom did Jesus speak and why? (15)</li>
        <li>What did Jesus ask Peter? (15-17)</li>
        <li>What did he mean by, “Do you truly love me more than these”?</li>
        <li>Why did Jesus ask Peter three times?</li>
        <li>What was Peter’s response and Jesus’ command each time? (15-17)</li>
      </ul>
    `,
    guide: `
      <div class="space-y-4">
        <div>
          <p class="font-bold text-gray-900 mb-1">To whom did Jesus speak?</p>
          <p>He spoke to Peter, calling him "Simon son of John," his name before meeting Jesus.</p>
        </div>
        <div>
          <p class="font-bold text-gray-900 mb-1">What did Jesus ask?</p>
          <p>"Do you truly love me more than these?" (agapao), then "Do you truly love me?", then "Do you love me?" (phileo).</p>
        </div>
        <div>
          <p class="font-bold text-gray-900 mb-1">Meaning of "More than these"?</p>
          <p>It likely refers to the other disciples, challenging Peter's previous boast that he would never fall away even if others did. Jesus gets at the root of pride.</p>
        </div>
        <div>
          <p class="font-bold text-gray-900 mb-1">Why ask three times?</p>
          <p>To correspond to Peter's three denials. It was a painful but necessary surgery to heal Peter's heart.</p>
        </div>
        <div>
          <p class="font-bold text-gray-900 mb-1">Peter's response and Jesus' command</p>
          <p>Peter appealed to Jesus' knowledge: "You know that I love you." Jesus commanded him to "Feed my lambs," "Take care of my sheep," and "Feed my sheep."</p>
        </div>
      </div>
    `
  },
  {
    id: "j21-4",
    title: "Read verses 18-25",
    content: `
      <ul class="list-disc pl-5 space-y-3 marker:text-[#3667B1]">
        <li>What will happen to Peter when he is old? (18, 19a)</li>
        <li>What did Jesus say to Peter? (19b)</li>
        <li>Why did Peter ask about John? (20-21)</li>
        <li>What was Jesus’ answer? (22-23)</li>
        <li>How did the author conclude? (24-25)</li>
      </ul>
    `,
    guide: `
      <div class="space-y-4">
        <div>
          <p class="font-bold text-gray-900 mb-1">What will happen to Peter?</p>
          <p>When old, he will stretch out his hands and be led where he does not want to go. This indicated the kind of death by which Peter would glorify God (crucifixion).</p>
        </div>
        <div>
          <p class="font-bold text-gray-900 mb-1">Jesus' command</p>
          <p>"Follow me!" - A call to recommit himself to following Jesus.</p>
        </div>
        <div>
          <p class="font-bold text-gray-900 mb-1">Regarding John</p>
          <p>Peter asked "Lord, what about him?" Jesus answered, "If I want him to remain alive until I return, what is that to you? You must follow me." The call to follow is personal.</p>
        </div>
      </div>
    `
  }
];

const john21Transcript = `
<p>Today's passage is our final Easter/resurrection message. It is also the final chapter of John's gospel. What is the concluding message of the gospel? I feel very privileged because I could serve the message based on the first chapter of John's gospel and now I can serve the message based on the last chapter. What have we seen from chapter 1 to the end? We see that God has loved us; he became flesh, he taught us, he suffered and died for us, and now calls us to follow me, to love him and feed his sheep. He came down to lift us up. In this final chapter, Jesus again calls Peter to love him by feeding his sheep, and to follow him.</p>

<p>We hear many messages with this title, "Follow me." We heard this message at the conference with Levi the tax collector. We have had a "Follow Me" message at the conferences once a year for a few years now. It's because Jesus said it a lot. Remember, Jesus came to call sinners. From today's passage we can learn about Jesus who loved us and calls us to follow him.</p>

<p>First, we can learn about the kind of love Jesus has; Jesus invited his disciples to breakfast (1-14).</p>

<p>Verse 1 says that afterward Jesus appeared "again" to his disciples. Previously, he met them in Jerusalem behind locked doors. At that time he helped them to believe that he rose from the dead. He met them twice in this way because one of them, named Thomas, wasn't there the first time. I think Jesus purposely went while Thomas was out because he knew how to help Thomas best. But what happened to them after they saw Jesus and even Thomas believed?</p>

<p>Well, in this passage Jesus comes and meets them in Galilee, at the sea of Tiberias, which is the sea of Galilee. They had gone there because Jesus told them he would meet the in Galilee after he had risen. So they did a good thing by going to Galilee. But they really didn't know what they were doing.</p>

<p>At this time seven of the disciples were together and Peter said he was going out to fish with the others following him. With Peter was Thomas, Nathanael, James and John, and the other two unnamed disciples who are likely Andrew, Peter's brother and an experienced fishermen, and their friend Philip, who was also a Galilean.</p>

<p>This scene is very significant. Jesus had first called them to follow him while they were out fishing. And at that time they had left their nets and their boats and business behind. It became their old life and following Jesus became their new life. But now back in Galilee without Jesus, we can really see that they didn't know what to do because Peter is there and says, I'm going out to fish, and the others go with him. Most likely they hadn't fished at all since Jesus had called them. Was he trying to pick up his boat and nets where he left off? Verse 3 says, but that night they caught nothing. At least they thought they could go out fishing. But they caught nothing.</p>

<p>Then Jesus appeared to them. Look at verses 4-6. "[4] Early in the morning, Jesus stood on the shore, but the disciples did not realize that it was Jesus. [5] He called out to them, 'Friends, haven't you any fish?' 'No,' they answered. [6] He said, 'Throw your net on the right side of the boat and you will find some.' When they did, they were unable to haul the net in because of the large number of fish."</p>

<p>They didn't realize it was Jesus at first. Strangely, a man was calling out to them, friends, from the shore and asking about if they had any fish. They answered no. Then Jesus told them to throw their net on the right side of the boat and they would find some. When they did it, they were unable to haul the net in because of the large number of fish.</p>

<p>Immediately, John recognized that it was Jesus. He said, "It is the Lord!" (7). And as soon as Peter heard those words, he wrapped himself up, jumped into the water and swam to Jesus. I recently went out on the water in a boat early in the morning, around 4am. And it is very cold. I had on two jackets and wished I had not forgotten my beanie cap. The captain said, if we crash and sink, you probably won't make it out here.</p>

<p>This was a really amazing scene. John recognized Jesus right away because what happened was just like what happened when he had first called them. Let's look at that passage for comparison's sake. (Luke 5:1-11)</p>

<p>It was just like that first time. At that time Peter told Jesus to go away from him because he was sinful. But now Peter jumped into the water and swam to Jesus defying nature.</p>

<p>What did they find once they got to shore? Look at verse 9. "When they landed, they saw a fire of burning coals there with fish on it, and some bread." Although Jesus asked if they had any fish, he already had some. And he had prepared this fire and fish and bread for them. But still he asked for some of their fish anyway and said to them, "Come and have breakfast" (12). And as they sat with him, they knew it was him. He did this so that they would recognize him.</p>

<p>They went through such anguish and fear and guilt since the time of death and first appearance of resurrection. Some, like Peter, felt guilty for how they had acted when Jesus was arrested. He hadn't followed Jesus to death like he had promised. But as they sat around this fire, it must have warmed not only their bodies but their hearts. Jesus had called them, "Friends." He helped them to make such a big catch. Look at verse 10. When he said, "Bring some of the fish you have caught," they recognized humble Jesus. They could not catch anything on their own, but by Jesus' help they could. They could remember his words that if they obey him they would be very fruitful. These were the actions of a friend they knew. They were the actions of the same Jesus who called them about 3 years prior and called them to a new life of following him. John even counted and remembered the number of fish they caught. Isn't that very interesting? It numbered 153 "large fish," but what he wanted to say was that with so many fish the net still did not break. It must have represented his heart that was suddenly getting so filled with Jesus' love for them that he thought it would burst, but it didn't.</p>

<p>Through this catch of fish and invitation Jesus revealed himself to them. He was the same Jesus who had come to them and called them. His love did not change. Although they had faltered and weren't sure what to do now, Jesus was the same. And he still loved them.</p>

<p>Look at verses 13-14. "[13] Jesus came, took the bread and gave it to them, and did the same with the fish. [14] This was now the third time Jesus appeared to his disciples after he was raised from the dead."</p>

<p>He served them a nice warm breakfast. Then Jesus was quiet as they ate. This was the third time he appeared to them. He was patient with them. He humbly served them and helped them when they didn't catch anything. It took three visits to rekindle the fire in them for him and his calling.</p>

<p>We can learn from Jesus here that eating fellowships are one of the best ways to mend a broken relationship. Like Jesus we should do our best to incite others to come and eat with us, and we should do the preparations. And if someone asks us to eat with them, we should accept their invitation by all means.</p>

<p>At this point they might have expected Jesus to share a great vision for them as he had done before. But first he had to clear up some matter with Simon Peter. Previously, Simon Peter brought his problem to Jesus. Look again at Luke 5:8. When he had a large catch of fish, he knelt before Jesus and said first, "Go away from me, Lord, I am a sinful man." But now Simon Peter was quiet. He was quiet the whole time. Something was wrong.</p>

<p>Second, Jesus asked Peter if he truly loved him (15-17).</p>

<p>Look at verse 15. "When they had finished eating, Jesus said to Simon Peter, 'Simon son of John, do you truly love me more than these?' 'Yes, Lord,' he said, 'you know that I love you.' Jesus said, 'Feed my lambs.'"</p>

<p>Jesus asked about Peter's love for him.</p>

<p>Peter had loved in his own way. He had said, "I will lay down my life for you" (John 13:37). But he had failed to do that. Now he could love Jesus in Jesus' way. Jesus had previously told them, "Remain in my love" (John 15:9). To remain in Jesus' love (or anyone else's) he had to not only accept Jesus' love but love Jesus. So we can see that this question was not for Jesus' sake but for Peter's. Peter understood this and said, "Yes, Lord, you know that I love you."</p>

<p>Peter loved Jesus. Peter knew that Jesus knew. Then why did Jesus ask? To understand this we can think about why Jesus asked Peter, "Do you truly love me more than these?" To help Peter, Jesus went deeper to make clear what Peter loved most. Why did he add, "more than these?" What do "these" refer to? It was not to the other disciples, but to the fish and the nets lying there. I don't think Peter would ever say, I love fish more than Jesus. But these fish and nets represented him, Peter. In a way, Jesus was asking if Peter "truly" loved Jesus even more than himself.</p>

<p>Peter replied, "Yes, Lord, you know that I love you." Here we notice a difference in the love mentioned. Jesus asked, do you "truly" love me (agapao), but he responded, you know that I love you (phileo). He did love Jesus and knew that Jesus knew it. But he didn't know how to show it. He could say only, "you know..."</p>

<p>Jesus said, "Feed my lambs." Jesus accepted his answer but gave him a way how Peter could show his love to Jesus. What a loving direction from Jesus. He showed his forgiveness and love to Peter and his trust in him. Thankfully, Jesus didn't say, you have to keep your word and die for me. But he gave him the direction to feed his lambs. That's how he could show his love. Jesus is the good shepherd. And a good shepherd doesn't entrust his sheep to just anyone, just like a parent doesn't entrust their children to just any babysitter. Who are Jesus' lambs? All those whom he died for. Those who listen to his voice.</p>

<p>Then Jesus asked Simon Peter a second time, "Do you truly love me?" Again Jesus said, "truly" but this time he did not say, "more than these?" and Peter again replied, "Yes, Lord, you know that I love you." But this time Jesus said, "Take care of my sheep." Taking care of sheep is a lot more involved than just feeding them. To take care of them you need to know each of them, their habits, when to sleep, how to get them to the right places for eating and drinking, getting them exercise, checking their health, protecting them from all harms, and helping them to reproduce. This was so perfectly helpful for Peter.</p>

<p>Then, Jesus asked Simon Peter a third time, "Do you love me?" Was it because Peter did not give any acknowledgment, like, yes, I will feed and take care of your sheep? Peter was hurt because Jesus had asked him a third time, "do you love me?" This time Jesus did not ask if Peter "truly" loved him, just if he loved him at all. Finally, Peter answered differently. Look at verse 17. He said, “Lord, you know all things; you know that I love you.” Then Jesus said, "Feed my sheep."</p>

<p>Loving Jesus is really the best thing for us. Like Peter, it requires us to accept his love first. And this passage shows us how good his love is because it is unchanging and faithful. Proverbs says, "what a man desires is unfailing love, but a faithful man who can find?" (Proverbs 19:22; 20;6). We can find one, Jesus! He is faithful and his love was the same. We change, and it's our problem, but because he is the same we can go to him. And his love fills the deepest of our heart's desires and satisfies.</p>

<p>In our UBF ministry we use the phrase "feed sheep," even referring to Bible students as sheep. This is sometimes offense to people because portraying people as sheep is often used in a derogatory manner to mean that people are dumb and mindless and follow whatever. But we use it because Jesus used it. Actually, we do have a problem of following the wrong thing and going astray like sheep. Jesus came as our good shepherd. Like Peter, by feeding Jesus' sheep we can show our love to him, and we can learn of his love by practicing it in obedience and faith.</p>

<p>Third, follow me (18-25).</p>

<p>Then Jesus finished by saying, "Follow me!" look at verses 18-19. "[18] I tell you the truth, when you were younger you dressed yourself and went where you wanted; but when you are old you will stretch out your hands, and someone else will dress you and lead you where you do not want to go." [19] Jesus said this to indicate the kind of death by which Peter would glorify God. Then he said to him, "Follow me!"</p>

<p>Finally, Jesus said it again, "Follow me!" By finishing up by saying, "Follow me!" Jesus put the direction to love him in the context of the call to follow Jesus. It was the same call as in the beginning, "Follow me!" but Peter was not to follow any way he wanted. He had to follow in Jesus' way. He had to keep his love to Jesus and feed his sheep. It shows us that following Jesus is about loving him and keeping his direction and mission. We cannot follow Jesus any other way. Otherwise we're just following our own ideas and ways. That's why he says, "Follow me."</p>

<p>Simon Peter got the message, although it hurt him at first. Later he loved and fed and cared for Jesus' sheep very well. Sometimes Jesus' help hurts. It's because we learn about who we are. But it's for our good.</p>

<p>Look at verses 20-23. "[20] Peter turned and saw that the disciple whom Jesus loved was following them. (This was the one who had leaned back against Jesus at the supper and had said, "Lord, who is going to betray you?") [21] When Peter saw him, he asked, "Lord, what about him?" [22] Jesus answered, "If I want him to remain alive until I return, what is that to you? You must follow me." [23] Because of this, the rumor spread among the brothers that this disciple would not die. But Jesus did not say that he would not die; he only said, "If I want him to remain alive until I return, what is that to you?"</p>

<p>The call the follow is personal. We follow based on his love and calling and not based on other people.</p>

<p>The other disciple is the apostle John. He is the one who witnessed these things and testified to them by writing them down. And his testimony was verified by others. Although Jesus did so many things that the world would not have enough room for all the books to be written, John chose to focus on these events. They shows that he loved so much. God became flesh and came to us so that we could go to him and have eternal life with him. And now he concludes with the call to follow Jesus by loving him and obeying him by feeding his sheep.</p>

<p>This passage shows us that Jesus loved us and calls us, and his love is the same. His love did not change although theirs had faltered. He wants us to accept his love and follow him, caring for his sheep with the same level of his love. When we feed his sheep we can learn of him, love him, and glorify God and be a blessing to others.</p>

<p>This passage reminded me of how great Jesus' love is, especially when he first called me. Many things have happened in the past twelve years. Many really good, miraculous times and joyful times, many challenges, and I also have made and keep making so many mistakes. I changed a lot. But I learned today that Jesus did not change and his love and calling did not change. So, like Peter, I can accept and rely on his love. The question, "Do you truly love me?" stumped me. Jesus knows that I love him. But it wasn't really in my heart. What was motivating me a lot lately was just don't mess up. I don't want to mess up anymore. So I didn't want to be a bad example for my children or sheep. But it wasn't from my love to Jesus. And I just think about all my past mistakes. And yet I also wanted to have time for myself, complaining that I don't get to do things I want to do, I'm always doing something for someone else. William said that he would rejoin the message rotation from summer time, and I even thought that I could use him as my way to take a break. But 1 Timothy daily bread says to devote yourself to preaching and teaching and not neglect it. So I can't stop. I thought Jesus changes because I changed, but he is the same. And I changed, but it's okay because he knows and by feeding his sheep, following him, and loving him, I can learn of him and become more like him, and overcome myself and this world.</p>
`;

const sampleTranscript = `
<p>Good morning everyone. Today we are going to study Psalm 136. It is a psalm of thanksgiving. The psalmist invites God's people to give thanks to the Lord. Why? Because "he is good," and "his steadfast love endures forever."</p>

<p>This refrain is repeated 26 times in this psalm. It emphasizes the enduring nature of God's love. No matter what happens, his love remains.</p>

<p>Let's look at the first section, verses 1-3. The psalmist calls God the "God of gods" and "Lord of lords." He is supreme. He is above all earthly powers and spiritual forces.</p>

<p>Then in verses 4-9, the psalmist praises God as the Creator. He made the heavens, the earth, the sun, moon, and stars. Creation testifies to his power and wisdom. When we look at nature, we should be moved to give thanks to the Creator.</p>

<p>In verses 10-22, the psalmist recounts Israel's history. God struck down the Egyptian firstborn and brought Israel out from among them. He divided the Red Sea and led them through the wilderness. He gave them victory over powerful kings like Sihon and Og.</p>

<p>Finally, in verses 23-26, the psalmist brings it to the present. God remembered us in our low estate. He rescues us from our foes. He gives food to all flesh.</p>

<p>Let us give thanks to the God of heaven, for his steadfast love endures forever. Amen.</p>
`;

const sampleBibleText = `
<h4>Psalm 136 (ESV)</h4>
<p>
  <span class="verse-num">1</span> Give thanks to the Lord, for he is good,<br/>
  for his steadfast love endures forever.<br/>
  <span class="verse-num">2</span> Give thanks to the God of gods,<br/>
  for his steadfast love endures forever.<br/>
  <span class="verse-num">3</span> Give thanks to the Lord of lords,<br/>
  for his steadfast love endures forever;
</p>
<p>
  <span class="verse-num">4</span> to him who alone does great wonders,<br/>
  for his steadfast love endures forever;<br/>
  <span class="verse-num">5</span> to him who by understanding made the heavens,<br/>
  for his steadfast love endures forever;<br/>
  <span class="verse-num">6</span> to him who spread out the earth above the waters,<br/>
  for his steadfast love endures forever;<br/>
  <span class="verse-num">7</span> to him who made the great lights,<br/>
  for his steadfast love endures forever;<br/>
  <span class="verse-num">8</span> the sun to rule over the day,<br/>
  for his steadfast love endures forever;<br/>
  <span class="verse-num">9</span> the moon and stars to rule over the night,<br/>
  for his steadfast love endures forever;
</p>
<p>
  <span class="verse-num">10</span> to him who struck down the firstborn of Egypt,<br/>
  for his steadfast love endures forever;<br/>
  <span class="verse-num">11</span> and brought Israel out from among them,<br/>
  for his steadfast love endures forever;<br/>
  <span class="verse-num">12</span> with a strong hand and an outstretched arm,<br/>
  for his steadfast love endures forever;<br/>
  <span class="verse-num">13</span> to him who divided the Red Sea in two,<br/>
  for his steadfast love endures forever;<br/>
  <span class="verse-num">14</span> and made Israel pass through the midst of it,<br/>
  for his steadfast love endures forever;<br/>
  <span class="verse-num">15</span> but overthrew Pharaoh and his host in the Red Sea,<br/>
  for his steadfast love endures forever;<br/>
  <span class="verse-num">16</span> to him who led his people through the wilderness,<br/>
  for his steadfast love endures forever;
</p>
`;

const john17BibleText = `
<h4>John 17:14-26 (ESV)</h4>
<p>
  <span class="verse-num">14</span> I have given them your word, and the world has hated them because they are not of the world, just as I am not of the world.<br/>
  <span class="verse-num">15</span> I do not ask that you take them out of the world, but that you keep them from the evil one.<br/>
  <span class="verse-num">16</span> They are not of the world, just as I am not of the world.<br/>
  <span class="verse-num">17</span> Sanctify them in the truth; your word is truth.<br/>
  <span class="verse-num">18</span> As you sent me into the world, so I have sent them into the world.<br/>
  <span class="verse-num">19</span> And for their sake I consecrate myself, that they also may be sanctified in truth.
</p>
<p>
  <span class="verse-num">20</span> “I do not ask for these only, but also for those who will believe in me through their word,<br/>
  <span class="verse-num">21</span> that they may all be one, just as you, Father, are in me, and I in you, that they also may be in us, so that the world may believe that you have sent me.<br/>
  <span class="verse-num">22</span> The glory that you have given me I have given to them, that they may be one even as we are one,<br/>
  <span class="verse-num">23</span> I in them and you in me, that they may become perfectly one, so that the world may know that you sent me and loved them even as you loved me.
</p>
<p>
  <span class="verse-num">24</span> Father, I desire that they also, whom you have given me, may be with me where I am, to see my glory that you have given me because you loved me before the foundation of the world.<br/>
  <span class="verse-num">25</span> O righteous Father, even though the world does not know you, I know you, and these know that you have sent me.<br/>
  <span class="verse-num">26</span> I made known to them your name, and I will continue to make it known, that the love with which you have loved me may be in them, and I in them.”
</p>
`;

const john21BibleText = `
<h4>John 21:1-25 (NIV)</h4>
<p>
  <span class="verse-num">1</span> Afterward Jesus appeared again to his disciples, by the Sea of Tiberias. It happened this way:<br/>
  <span class="verse-num">2</span> Simon Peter, Thomas (called Didymus), Nathanael from Cana in Galilee, the sons of Zebedee, and two other disciples were together.<br/>
  <span class="verse-num">3</span> “I’m going out to fish,” Simon Peter told them, and they said, “We’ll go with you.” So they went out and got into the boat, but that night they caught nothing.<br/>
  <span class="verse-num">4</span> Early in the morning, Jesus stood on the shore, but the disciples did not realize that it was Jesus.<br/>
  <span class="verse-num">5</span> He called out to them, “Friends, haven’t you any fish?” “No,” they answered.<br/>
  <span class="verse-num">6</span> He said, “Throw your net on the right side of the boat and you will find some.” When they did, they were unable to haul the net in because of the large number of fish.
</p>
<p>
  <span class="verse-num">7</span> Then the disciple whom Jesus loved said to Peter, “It is the Lord!” As soon as Simon Peter heard him say, “It is the Lord,” he wrapped his outer garment around him (for he had taken it off) and jumped into the water.<br/>
  <span class="verse-num">8</span> The other disciples followed in the boat, towing the net full of fish, for they were not far from shore, about a hundred yards.<br/>
  <span class="verse-num">9</span> When they landed, they saw a fire of burning coals there with fish on it, and some bread.<br/>
  <span class="verse-num">10</span> Jesus said to them, “Bring some of the fish you have just caught.”<br/>
  <span class="verse-num">11</span> Simon Peter climbed aboard and dragged the net ashore. It was full of large fish, 153, but even with so many the net was not torn.<br/>
  <span class="verse-num">12</span> Jesus said to them, “Come and have breakfast.” None of the disciples dared ask him, “Who are you?” They knew it was the Lord.<br/>
  <span class="verse-num">13</span> Jesus came, took the bread and gave it to them, and did the same with the fish.<br/>
  <span class="verse-num">14</span> This was now the third time Jesus appeared to his disciples after he was raised from the dead.
</p>
<p>
  <span class="verse-num">15</span> When they had finished eating, Jesus said to Simon Peter, “Simon son of John, do you truly love me more than these?” “Yes, Lord,” he said, “you know that I love you.” Jesus said, “Feed my lambs.”<br/>
  <span class="verse-num">16</span> Again Jesus said, “Simon son of John, do you truly love me?” He answered, “Yes, Lord, you know that I love you.” Jesus said, “Take care of my sheep.”<br/>
  <span class="verse-num">17</span> The third time he said to him, “Simon son of John, do you love me?” Peter was hurt because Jesus asked him the third time, “Do you love me?” He said, “Lord, you know all things; you know that I love you.” Jesus said, “Feed my sheep.
</p>
<p>
  <span class="verse-num">18</span> I tell you the truth, when you were younger you dressed yourself and went where you wanted; but when you are old you will stretch out your hands, and someone else will dress you and lead you where you do not want to go.”<br/>
  <span class="verse-num">19</span> Jesus said this to indicate the kind of death by which Peter would glorify God. Then he said to him, “Follow me!”<br/>
  <span class="verse-num">20</span> Peter turned and saw that the disciple whom Jesus loved was following them. (This was the one who had leaned back against Jesus at the supper and had said, “Lord, who is going to betray you?”)<br/>
  <span class="verse-num">21</span> When Peter saw him, he asked, “Lord, what about him?”<br/>
  <span class="verse-num">22</span> Jesus answered, “If I want him to remain alive until I return, what is that to you? You must follow me.”<br/>
  <span class="verse-num">23</span> Because of this, the rumor spread among the brothers that this disciple would not die. But Jesus did not say that he would not die; he only said, “If I want him to remain alive until I return, what is that to you?”<br/>
  <span class="verse-num">24</span> This is the disciple who testifies to these things and who wrote them down. We know that his testimony is true.<br/>
  <span class="verse-num">25</span> Jesus did many other things as well. If every one of them were written down, I suppose that even the whole world would not have room for the books that would be written.
</p>
`;

export const studies: BibleStudy[] = [
  {
    id: "john-21",
    title: "Do You Truly Love Me More Than These?",
    passage: "John 21:1-25",
    date: "2026-04-12",
    messenger: "P. Kevin Albright",
    series: "John",
    keyVerse: {
        verse: "15",
        text: "When they had finished eating, Jesus said to Simon Peter, “Simon son of John, do you truly love me more than these?” “Yes, Lord,” he said, “you know that I love you.” Jesus said, “Feed my lambs.”"
    },
    sections: john21Sections,
    transcript: john21Transcript,
    bibleText: john21BibleText,
    docxUrl: "#",
    videoId: undefined,
    pdfUrl: "#",
  },
  {
    id: "john-17",
    title: "Not Of The World",
    passage: "John 17:14-26",
    date: "2026-01-04",
    messenger: "P. William Larsen",
    series: "John",
    keyVerse: {
        verse: "14",
        text: "I have given them your word, and the world has hated them because they are not of the world, just as I am not of the world."
    },
    sections: john17Sections,
    transcript: undefined,
    bibleText: john17BibleText,
    docxUrl: "#",
    videoId: undefined,
    pdfUrl: "#",
  },
  {
    id: "exodus-2",
    title: "Watered The Flock",
    passage: "Exodus 2:11-22",
    date: "2024-01-24",
    messenger: "P. Abraham Kim",
    series: "Exodus",
    keyVerse: {
        verse: "17",
        text: "The shepherds came and drove them away, but Moses stood up and saved them, and watered their flock."
    },
    sections: sampleSections,
    transcript: sampleTranscript,
    bibleText: sampleBibleText,
    pdfUrl: "/downloads/exodus-2.pdf",
    videoId: "O1oAoyIH_qQ",
    attachments: [
        { name: "Supplemental Map.png", url: "#", type: "image" },
        { name: "Historical Context.pdf", url: "#", type: "pdf" }
    ]
  },
  {
    id: "his-steadfast-love",
    title: "HIS STEADFAST LOVE ENDURES FOREVER",
    passage: "Psalm 136:1-26",
    date: "2025-12-14",
    messenger: "Paul Kim",
    series: "Psalms",
    keyVerse: {
        verse: "1",
        text: "Give thanks to the Lord, for he is good, for his steadfast love endures forever."
    },
    sections: sampleSections,
    transcript: sampleTranscript,
    bibleText: sampleBibleText,
    pdfUrl: "/downloads/psalm-136.pdf",
    docxUrl: "/downloads/psalm-136.docx",
    videoId: "O1oAoyIH_qQ",
    attachments: [
        { name: "Worship Song Sheet.pdf", url: "#", type: "pdf" }
    ],
    relatedEvents: [
      {
        id: "upcoming-1",
        title: "United Christmas Worship Service (Advent #4)",
        date: "2025-12-21",
        passage: "1 John 3:1a",
        messenger: "Victor Rakotondranoro"
      },
      {
        id: "upcoming-2",
        title: "UBF Worldwide New Year's Message",
        date: "2025-12-28",
        passage: "John 13:1-38",
        messenger: "Ron Ward"
      }
    ]
  },
  {
    id: "advent-3",
    title: "To Worship Him: Joy for a Broken World",
    passage: "Matthew 2:1-12",
    date: "2025-12-07",
    messenger: "Theo Woessner",
    series: "Advent 2025",
    sections: sampleSections,
    transcript: sampleTranscript,
    bibleText: sampleBibleText,
    pdfUrl: "/downloads/matt-2.pdf",
    videoId: "O1oAoyIH_qQ",
  },
  {
    id: "advent-2",
    title: "Prepare the Way for the Lord",
    passage: "Mark 1:1-8",
    date: "2025-11-30",
    messenger: "David Kim",
    series: "Advent 2025",
    sections: sampleSections,
    transcript: sampleTranscript,
    bibleText: sampleBibleText,
    pdfUrl: "/downloads/mark-1.pdf",
    videoId: "O1oAoyIH_qQ",
  },
  {
    id: "colossians-1",
    title: "Christ is All, and is in All",
    passage: "Colossians 3:1-17",
    date: "2025-11-23",
    messenger: "Sarah Park",
    series: "Colossians",
    sections: sampleSections,
    transcript: sampleTranscript,
    bibleText: sampleBibleText,
    pdfUrl: "/downloads/col-3.pdf",
    videoId: "O1oAoyIH_qQ",
  },
  {
    id: "colossians-2",
    title: "Set Your Minds on Things Above",
    passage: "Colossians 3:1-4",
    date: "2025-11-16",
    messenger: "John Doe",
    series: "Colossians",
    sections: sampleSections,
    transcript: sampleTranscript,
    bibleText: sampleBibleText,
    pdfUrl: "/downloads/col-3-1-4.pdf",
    videoId: "O1oAoyIH_qQ",
  }
];
