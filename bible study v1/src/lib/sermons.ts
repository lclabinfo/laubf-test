import { Sermon, TranscriptSegment } from './sermons';

export interface Sermon {
  id: string;
  videoId: string; // YouTube ID
  title: string;
  speaker: string;
  date: string;
  passage: string;
  series: string;
  description: string;
  tags: string[];
  transcript?: TranscriptSegment[];
  manuscript?: string; // Full text manuscript/prepared transcript
  studyId?: string; // ID of the related Bible study
  event: string;
}

export interface TranscriptSegment {
  time: number; // Seconds
  text: string;
}

// Reuse the content from studies.ts implicitly by copying it or just referencing the study
// Since I can't import from studies.ts easily without circular deps or restructuring, I'll just use a placeholder text or the same text.
// However, the `StudyDetailPage` looks for `linkedSermon` to show the "Watch Sermon" button and the Transcript tab content if it's there.
// But wait, in `studies.ts` I added `transcript: john21Transcript`.
// Let's check StudyDetailPage logic again.

/*
case 'transcript':
  return (
      // ...
      {linkedSermon ? (
          <p>Sermon: {linkedSermon.title} ...</p>
      ) : ( ... )}
      
      {linkedSermon?.manuscript ? (
          <div dangerouslySetInnerHTML={{ __html: linkedSermon.manuscript }} />
      ) : ( ... )}
  )
*/

// It *only* displays `linkedSermon.manuscript`. It does *not* display `study.transcript`.
// So I MUST provide the manuscript in the sermon object.

const john21Transcript = `
<div class="space-y-6">
  <p><strong>Then he said to him, "Follow me!"</strong></p>
  
  <p>Today's passage is our final Easter/ resurrection message. It is also the final chapter of John's gospel. What is the concluding message of the gospel? I feel very privileged because I could serve the message based on the first chapter of John's gospel and now I can serve the message based on the last chapter. What have we seen from chapter 1 to the end? We see that God has loved us; he became flesh, he taught us, he suffered and died for us, and now calls us to follow me, to love him and feed his sheep. He came down to lift us up. In this final chapter, Jesus again calls Peter to love him by feeding his sheep, and to follow him.</p>

  <p>We hear many messages with this title, "Follow me." we heard this message at the conference with Levi the tax collector. We have had a "Follow Me" message at the conferences once a year for a few years now. It's because Jesus said it a lot. Remember, Jesus came to call sinners. From today's passage we can learn about Jesus who loved us and calls us to follow him.</p>
  
  <p><strong>First, we can learn about the kind of love Jesus has; Jesus invited his disciples to breakfast (1-14).</strong></p>
  
  <p>Verse 1 says that afterward Jesus appeared "again" to his disciples. Previously, he met them in Jerusalem behind locked doors. At that time he helped them to believe that he rose from the dead. He met them twice in this way because one of them, named Thomas, wasn't there the first time. I think Jesus purposely went while Thomas was out because he knew how to help Thomas best. But what happened to them after they saw Jesus and even Thomas believed?</p>

  <p>Well, in this passage Jesus comes and meets them in Galilee, at the sea of Tiberias, which is the sea of Galilee. They had gone there because Jesus told them he would meet the in Galilee after he had risen. So they did a good thing by going to Galilee. But they really didn't know what they were doing.</p>

  <p>At this time seven of the disciples were together and Peter said he was going out to fish with the others following him. With Peter was Thomas, Nathanael, James and John, and the other two unnamed disciples who are likely Andrew, Peter's brother and an experienced fishermen, and their friend Philip, who was also a Galilean.</p>

  <p>This scene is very significant. Jesus and first called them to follow him while they were out fishing. And at that time they had left their nets and their boats and business behind. It became their old life and following Jesus became their new life. But now back in Galilee without Jesus, we can really see that they didn't know what to do because Peter is there and says, I'm going out to fish, and the others go with him. Most likely they hadn't fished at all since Jesus had called them. Was he trying to pick up his boat and nets where he left off? Verse 3 says, but that night they caught nothing. At least they thought they could go out fishing. But they caught nothing.</p>

  <p>Then Jesus appeared to them. Look at verses 4-6. "[4] Early in the morning, Jesus stood on the shore, but the disciples did not realize that it was Jesus. [5] He called out to them, 'Friends, haven't you any fish?' 'No,' they answered. [6] He said, 'Throw your net on the right side of the boat and you will find some.' When they did, they were unable to haul the net in because of the large number of fish."</p>

  <p>They didn't realize it was Jesus at first. Strangely, a man was calling out to them, friends, from the shore and asking about if they had any fish. They answered no. Then Jesus told them to throw their net on the right side of the boat and they would find some. When they did it, they were unable to haul the net in because of the large number of fish.</p>

  <p>Immediately, John recognized that it was Jesus. He said, "It is the Lord!" (7). And as soon as Peter heard those words, he wrapped himself up, jumped into the water and swam to Jesus. I recently went out on the water in a boat early in the morning, around 4am. And it is very cold. I had on two jackets and wished I had not forgotten my beanie cap. The captain said, if we crash and sink, you probably won't make it out here.</p>

  <p>This was a really amazing scene. John recognized Jesus right away because what happened was just like what happened when he had first called them. Let's look at that passage for comparison's sake.</p>

  <p><strong>Luke 5:1-11.</strong><br/>
  One day as Jesus was standing by the Lake of Gennesaret, with the people crowding around him and listening to the word of God, [2] he saw at the water's edge two boats, left there by the fishermen, who were washing their nets. [3] He got into one of the boats, the one belonging to Simon, and asked him to put out a little from shore. Then he sat down and taught the people from the boat. [4] When he had finished speaking, he said to Simon, "Put out into deep water, and let down the nets for a catch." [5] Simon answered, "Master, we've worked hard all night and haven't caught anything. But because you say so, I will let down the nets." [6] When they had done so, they caught such a large number of fish that their nets began to break. [7] So they signaled their partners in the other boat to come and help them, and they came and filled both boats so full that they began to sink. [8] When Simon Peter saw this, he fell at Jesus' knees and said, "Go away from me, Lord; I am a sinful man!" [9] For he and all his companions were astonished at the catch of fish they had taken, [10] and so were James and John, the sons of Zebedee, Simon's partners. Then Jesus said to Simon, "Don't be afraid; from now on you will catch men." [11] So they pulled their boats up on shore, left everything and followed him.</p>

  <p>It was just like that first time. At that time Peter told Jesus to go away from him because he was sinful. But now Peter jumped into the water and swam to Jesus defying nature.</p>

  <p>What did they find once they got to shore? Look at verse 9. "When they landed, they saw a fire of burning coals there with fish on it, and some bread." although Jesus asked if they had any fish, he already had some. And he had prepared this fire and fish and bread for them. But still he asked for some of heir fish anyway and said to them, "Come and have breakfast" (12). And as they sat with him, they knew it was him. He did this so that they would recognize him.</p>

  <p>They went through such anguish and fear and guilt since the time of death and first appearance of resurrection. Some, like Peter, felt guilty for how they had acted when Jesus was arrested. He hadn't followed Jesus to death like he had promised. But as they sat around this fire, it must have warmed not only their bodies but their hearts. Jesus had called them, "Friends." He helped them to make such a big catch. Look at verse 10. When he said, "Bring some of the fish you have caught," they recognized humble Jesus. They could not catch anything on their own, but by Jesus' help they could. They could remember his words that if they obey him they would be very fruitful. These were the actions of a friend they knew. They were the actions of the same Jesus who called them about 3 years prior and called them to a new life of following him. John even counted and remembered the number of fish they caught. Isn't that very interesting? It numbered 153 "large fish," but what he wanted to say was that with so many fish the net still did not break. It must have represented his heart that was suddenly getting so filled with Jesus' love for them that he thought it would burst, but it didn't.</p>

  <p>Through this catch of fish and invitation Jesus revealed himself to them. He was the same Jesus who had come to them and called them. His love did not change. Although they had faltered and weren't sure what to do now, Jesus was the same. And he still loved them.</p>

  <p>Look at verses 13-14.<br/>
  [13] Jesus came, took the bread and gave it to them, and did the same with the fish. [14] This was now the third time Jesus appeared to his disciples after he was raised from the dead.</p>

  <p>He served them a nice warm breakfast. Then Jesus was quiet as they ate. This was the third time he appeared to them. He was patient with them. He humbly served them and helped them when they didn't catch anything. It took three visits to rekindle the fire in them for him and his calling.</p>

  <p>We can learn from Jesus here that eating fellowships are one of the best ways to mend a broken relationship. Like Jesus we should do our best to incite others to come and eat with us, and we should do the preparations. And if someone asks us to eat with them, we should accept their invitation by all means. Last Friday, David Park invited me to dinner. I had been thinking about this passage at the time, so I looked at him and asked, "Is something wrong?"</p>

  <p>At this point they might have expected Jesus to share a great vision for them as he had done before. But first he had to clear up some matter with Simon Peter. Previously, Simon Peter brought his problem to Jesus. Look again at Luke 5: 8. When he had a large catch of fish, he knelt before Jesus and said first, "Go away from me, Lord, I am a sinful man." But now Simon Peter was quiet. He was quiet the whole time. Something was wrong.</p>

  <p><strong>Second, Jesus asked Peter if he truly loved him (15-17).</strong></p>

  <p>Look at verse 15.<br/>
  When they had finished eating, Jesus said to Simon Peter, "Simon son of John, do you truly love me more than these?" "Yes, Lord," he said, "you know that I love you." Jesus said, "Feed my lambs."</p>

  <p>Jesus asked about Peter's love for him.</p>

  <p>Peter had loved in his own way. He had said, "I will lay down my life for you" (John 13:37). But he had failed to do that. Now he could love Jesus in Jesus' way. Jesus had previously told them, "Remain in my love" (John 15:9). To remain in Jesus' love (or anyone else's) he had to not only accept Jesus' love but love Jesus. So we can see that this question was not for Jesus' sake but for Peter's. Peter understood this and said, "Yes, Lord, you know that I love you."</p>

  <p>Peter loved Jesus. Peter knew that Jesus knew. Then why did Jesus ask? To understand this we can think about why Jesus asked Peter, "Do you truly love me more than these?" To help Peter, Jesus went deeper to make clear what Peter loved most. Why did he add, "more than these?" What do "these" refer to? It was not to the other disciples, but to the fish and the nets lying there. I don't think Peter would ever say, I love fish more than Jesus. But these fish and nets represented him, Peter. In a way, Jesus was asking if Peter "truly" loved Jesus even more than himself.</p>

  <p>Peter replied, "Yes, Lord, you know that I love you." here we notice a difference in the love mentioned. Jesus and asked, do you "truly" love me, but he responded, you know that I love you--not, you know that I truly love you, or, yes, I do truly love you. But, yes, Lord, you know that I love you. he did love Jesus and knew that Jesus knew it. But he didn't know how to show it. He could say only, "you know..."</p>

  <p>Jesus said, "Feed my lambs." jesus accepted his answer but gave him a way how Peter could show his love to Jesus. What a loving direction from Jesus. He showed his forgiveness and love to Peter and his trust in him. Thankfully, Jesus didn't say, you have to keep your word and die for me. But he gave him the direction to feed his lambs. That's how he could show his love. Jesus is the good shepherd. And a good shepherd doesn't entrust his sheep to just anyone, just like a parent doesn't entrust their children to just any babysitter. Who are Jesus' lambs? All those whom he died for. Those who listen to his voice.</p>

  <p>This was divine help for Peter. Jesus knew that Peter had the tendency to compete with others, especially fellow disciples. And even as we see in today's passage, he was leading them in a wrong direction. The new direction for Peter frees him from trying to prove himself and think only about showing himself off, but to feed Jesus' lambs. Feeding is a big task. You have to learn what they can and cannot eat and how much they should eat. You have to learn when are the feeding times and understand well about the lambs. I find it stressful if I have to feed my kids instead of my wife feeding them. I have to feed at the right time and make sure their food is good and healthy and enough portions. There is no part of feeding where you get to think about yourself. Only others.</p>

  <p>Then Jesus asked Simon Peter a second time, "Do you truly love me?" Again Jesus said, "truly" but this time he did not say, "more than these?" and Peter again replied, "Yes, Lord, you know that I love you." But this time Jesus said, "Take care of my sheep." Taking care of sheep is a lot more involved than just feeding them. To take care of them you need to know each of them, their habits, when to sleep, how to get them to the right places for eating and drinking, getting them exercise, checking their health, protecting them from all harms, and helping them to reproduce. This was so perfectly helpful for Peter.</p>

  <p>Then, Jesus asked Simon Peter a third time, "Do you love me?" Was it because Peter did not give any acknowledgment, like, yes, I will feed and take care of your sheep? Peter was hurt because Jesus had asked him a third time, "do you love me?" This time Jesus did not ask if Peter "truly" loved him, just if he loved him at all. Finally, Peter answered differently. Look at verse 17. He said, “Lord, you know all things; you know that I love you.” Then Jesus said, "Feed my sheep." he didn't say, "you're right, I know. I'm sorry you're hurt." Look how strongly he emphasized to Peter to love him by feeding and taking care of his sheep. It tells us that we have to love Jesus. John wrote that he wrote these things down so that we would believe that Jesus is the Son of God and have life in his name (John 20:31). And each story in this gospel revolves around believing. But not chapter 21. This story revolves around loving Jesus and following him. Faith is important and necessary. But we need to love Jesus who has loved us. It is for our benefit. To have a relationship with someone and get the benefits of that relationship, you have to love back.</p>

  <p>Loving Jesus is really the best thing for us. Like Peter, it requires us to accept his love first. And this passage shows us how good his love is because it is unchanging and faithful. Proverbs says, "what a man desires is unfailing love, but a faithful man who can find?" (Proverbs 19:22; 20;6). We can find one, Jesus! He is faithful and his love was the same. We change, and it's our problem, but because he is the same we can go to him. And his love fills the deepest of our heart's desires and satisfies.</p>

  <p>Like Simon Peter, we tend to use this phrase a lot, "Jesus knows __________." as an excuse. For example, we say, "Jesus knows that I'm weak in this particular area, he'll forgive me," and we try to justify our sin. We say, "Jesus knows I love him, it's okay if I just rest and I'll serve him another time. Someone else can do it today." it is important that if we know Jesus love us, then to remain in his love we have to love him back and show that love properly by leaving the old life and feeding his sheep.</p>

  <p>Since they are Jesus' sheep, it requires loving as he loves. This is the love that is self-sacrificial and from above. It is not self-serving. It is demonstrated best in Jesus' death on the cross, laying down his life for the sheep. Jesus wanted Peter to know Jesus' love and to love and feed with sheep with that same love as Jesus'. Jesus also fed Peter with his word, the word of God. Peter came to know that Jesus alone has the words of eternal life (John 6:68). Jesus did many things with his disciples and with Peter. But he fed them God's word and he cared for them with his sacrificial love. Now it was time for Peter to feed Jesus' sheep and to care for Jesus' sheep, all as Jesus had done for him.</p>

  <p>In our UBF ministry we use the phrase "feed sheep," even referring to Bible students as sheep. This is sometimes offense to people because portraying people as sheep is often used in a derogatory manner to mean that people are dumb and mindless and follow whatever. But we use it because Jesus used it. Actually, we do have a problem of following the wrong thing and going astray like sheep. Jesus came as our good shepherd. Like Peter, by feeding Jesus' sheep we can show our love to him, and we can learn of his love by practicing it in obedience and faith. It is his way to know and love him. The sheep Jesus has given us are the students on the college campuses and the abundance of children. We are all Jesus' sheep, so we are directed to feed his sheep with the word of God and care for them with his love.</p>

  <p><strong>Third, follow me (18-25).</strong></p>

  <p>Then Jesus finished by saying, "Follow me!" look at verses 18-19.<br/>
  [18] I tell you the truth, when you were younger you dressed yourself and went where you wanted; but when you are old you will stretch out your hands, and someone else will dress you and lead you where you do not want to go." [19] Jesus said this to indicate the kind of death by which Peter would glorify God. Then he said to him, "Follow me!"</p>

  <p>Finally, Jesus said it again, "Follow me!" By finishing up by saying, "Follow me!" Jesus put the direction to love him in the context of the call to follow Jesus. It was the same call as in the beginning, "Follow me!" but Peter was not to follow any way he wanted. He had to follow in Jesus' way. He had to keep his love to Jesus and feed his sheep. It shows us that following Jesus is about loving him and keeping his direction and mission. We cannot follow Jesus any other way. Otherwise we're just following our own ideas and ways. That's why he says, "Follow me."</p>

  <p>As verse 18 says, following Jesus also involves denying ourselves and doing what we do not want to do. Verse 19 tells us that this refers to the kind of death by which Peter would glorify God. He could also glorify God in his death just as Jesus did. This tells us we cannot do just what we want to do. "Follow me," not, "Follow me and sometimes yourself."</p>

  <p>Simon Peter got the message, although it hurt him at first. Later he loved and fed and cared for Jesus' sheep very well. Sometimes Jesus' help hurts. It's because we learn about who we are. But it's for our good.</p>

  <p>When we read Peter's letters to the early church members, he encouraged them to do what they didn't want to do and to keep suffering for Jesus and to be shepherds of God's flock under their care (1 Peter 5:2). It may have been hard to ask that of them, but he did it. He cared for them like a shepherd, as Jesus had directed him. He lived and died to love Jesus and feed his flock. He realized that the call to be a shepherd for Jesus' sheep was not just for him but all who believe in Jesus. He taught the flock to love Jesus and be shepherds and to deny themselves. He learned and taught other believers to see that people need shepherds. He even died in a way he didn't want. He was sentenced to die by crucifixion, but he asked that he be crucified upside down because he was not worthy to die in the same way his Lord died.</p>

  <p>Peter glorified God in this way. Jesus helped peter to glorify God and not himself. Following Jesus is for our whole lives, till the time is up. When we follow Jesus with our whole life we can glorify God. But man's glory last only as long as the flowers of the field or the grass.</p>

  <p>Look at verses 20-23.<br/>
  [20] Peter turned and saw that the disciple whom Jesus loved was following them. (This was the one who had leaned back against Jesus at the supper and had said, "Lord, who is going to betray you?") [21] When Peter saw him, he asked, "Lord, what about him?" [22] Jesus answered, "If I want him to remain alive until I return, what is that to you? You must follow me." [23] Because of this, the rumor spread among the brothers that this disciple would not die. But Jesus did not say that he would not die; he only said, "If I want him to remain alive until I return, what is that to you?"</p>

  <p>The call the follow is personal. We follow based on his love and calling and not based on other people.</p>

  <p>The other disciple is the apostle John. He is the one who witnessed these things and testified to them by writing them down. And his testimony was verified by others. Although Jesus did so many things that the world would not have enough room for all the books to be written, John chose to focus on these events. They shows that he loved so much. God became flesh and came to us so that we could go to him and have eternal life with him. And now he concludes with the call to follow Jesus by loving him and obeying him by feeding his sheep.</p>

  <p>This passage shows us that Jesus loved us and calls us, and his love is the same. His love did not change although theirs had faltered. He wants us to accept his love and follow him, caring for his sheep with the same level of his love. When we feed his sheep we can learn of him, love him, and glorify God and be a blessing to others.</p>

  <p>This passage reminded me of how great Jesus' love is, especially when he first called me. Many things have happened in the past twelve years. Many really good, miraculous times and joyful times, many challenges, and I also have made and keep making so many mistakes. I changed a lot. But I learned today that Jesus did not change and his love and calling did not change. So, like Peter, I can accept and rely on his love. The question, "Do you truly love me?" stumped me. Jesus knows that I love him. But it wasn't really in my heart. What was motivating me a lot lately was just don't mess up. I don't want to mess up anymore. So I didn't want to be a bad example for my children or sheep. But it wasn't from my love to Jesus. And I just think about all my past mistakes. And yet I also wanted to have time for myself, complaining that I don't get to do things I want to do, I'm always doing something for someone else. William said that he would rejoin the message rotation from summer time, and I even thought that I could use him as my way to take a break. But 1 Timothy daily bread says to devote yourself to preaching and teaching and not neglect it. So I can't stop. I thought Jesus changes because I changed, but he is the same. And I changed, but it's okay because he knows and by feeding his sheep, following him, and loving him, I can learn of him and become more like him, and overcome myself and this world.</p>
</div>
`;

export const sermons: Sermon[] = [
  {
    id: 'sermon-john-21',
    videoId: 'O1oAoyIH_qQ', // Placeholder or real ID if known, user said "LA UBF Youtube page" for the button, but videoId is used for embed.
    title: 'Do You Truly Love Me More Than These?',
    speaker: 'P. William Larsen',
    date: 'Jan 11, 2026',
    passage: 'John 21:1-25',
    series: 'John',
    description: 'Do You Truly Love Me More Than These?',
    tags: ['Love', 'Shepherding', 'Mission'],
    event: 'Sunday Service',
    transcript: [],
    manuscript: john21Transcript,
    studyId: 'john-21'
  }
];
