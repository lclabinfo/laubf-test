import { BibleStudy } from './studies';
import { Sermon } from './sermons';

// HTML Content for Bible Text (John 21:1-25)
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

const john21Questions = `
<div class="max-w-none">
  <div class="bg-blue-50/50 border-l-4 border-[#3667B1] p-4 mb-8 rounded-r-lg">
    <p class="text-sm font-bold text-[#3667B1] uppercase tracking-wide mb-1">Key Verse 15</p>
    <p class="text-lg font-serif italic text-gray-800">“When they had finished eating, Jesus said to Simon Peter, “Simon son of John, do you truly love me more than these?” “Yes, Lord,” he said, “you know that I love you.” Jesus said, “Feed my lambs.”</p>
  </div>

  <div class="w-full h-px bg-gray-200 my-8"></div>

  <div class="space-y-8">
    <div class="group">
      <h4 class="flex items-center gap-2 font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">
        <span class="w-1.5 h-1.5 rounded-full bg-[#3667B1]"></span>
        Read verses 1-6
      </h4>
      <p class="text-gray-700 leading-relaxed pl-3.5 border-l border-gray-100 group-hover:border-[#3667B1]/30 transition-colors">
        Where and to whom did the risen Jesus appear again? (1-2, 14; Mt 26:32) What did Peter and the disciples want to do and what was the result? (3) How might they have felt when they caught nothing? How did Jesus help to restore them after their failure? (4-6)
      </p>
    </div>

    <div class="group">
      <h4 class="flex items-center gap-2 font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">
        <span class="w-1.5 h-1.5 rounded-full bg-[#3667B1]"></span>
        Read verses 7-14
      </h4>
      <p class="text-gray-700 leading-relaxed pl-3.5 border-l border-gray-100 group-hover:border-[#3667B1]/30 transition-colors">
        Who recognized Jesus first? (7a; Lk 5:1-11) What did Peter and the other disciples do? (7b-8) How did Jesus serve the disciples? (9-13) How successful was their fishing? (11) How might they have felt when Jesus served them? (12-13)
      </p>
    </div>

    <div class="group">
      <h4 class="flex items-center gap-2 font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">
        <span class="w-1.5 h-1.5 rounded-full bg-[#3667B1]"></span>
        Read verse 15-17
      </h4>
      <p class="text-gray-700 leading-relaxed pl-3.5 border-l border-gray-100 group-hover:border-[#3667B1]/30 transition-colors">
        After eating, to whom did Jesus speak and why? (15) What did Jesus ask Peter? (15-17) What did he mean by, “Do you truly love me more than these”? Why did Jesus ask Peter three times? What was Peter’s response and Jesus’ command each time? (15-17)
      </p>
    </div>

    <div class="group">
      <h4 class="flex items-center gap-2 font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">
        <span class="w-1.5 h-1.5 rounded-full bg-[#3667B1]"></span>
        Read verses 18-25
      </h4>
      <p class="text-gray-700 leading-relaxed pl-3.5 border-l border-gray-100 group-hover:border-[#3667B1]/30 transition-colors">
        What will happen to Peter when he is old? (18,19a) What did Jesus say to Peter? (19b) Why did Peter ask about John? (20-21) What was Jesus’ answer? (22-23) How did the author conclude? (24-25)
      </p>
    </div>
  </div>
</div>
`;

const john21Guide = `
<div class="space-y-8">
  <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
    <p class="font-serif text-lg text-gray-700 italic text-center">
      It appears that John’s gospel concludes in John 20. However, John showed us how the risen Jesus displayed the full extent of his love to his disciples (John 13:1) and restored Peter as the shepherd of his flock this chapter.
    </p>
  </div>

  <div class="space-y-10">
    <!-- Section 1 -->
    <div>
      <h3 class="font-black text-xl text-gray-900 uppercase mb-4 tracking-tight">1. Read verses 1-6</h3>
      <div class="bg-gray-50 p-4 rounded-lg mb-6 text-sm text-gray-600 font-serif italic border-l-4 border-gray-300">
        <span class="font-bold not-italic text-gray-900 block mb-1">Verses 1-6</span>
        1 Afterward Jesus appeared again to his disciples, by the Sea of Tiberias... 6 He said, “Throw your net on the right side of the boat and you will find some.” When they did, they were unable to haul the net in because of the large number of fish.
      </div>
      
      <div class="space-y-6">
        <div>
          <p class="font-bold text-gray-900 mb-2">Where and to whom did the risen Jesus appear again? (1-2, 14; Mt 26:32)</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed">
            <p><strong>By the sea of Tiberias:</strong> It probably was the official Roman name, while Sea of Galilee was the popular name. The name came from the town of Tiberias (the name after the 2nd emperor of Rome). This was the place Jesus called his disciples (Mark 1:16, Lk 5:1-11) and he promised he would go ahead of them into Galilee after resurrection (Mt26:32). It was the third time (14) that he appeared to his disciples.</p>
          </div>
        </div>

        <div>
          <p class="font-bold text-gray-900 mb-2">What did Peter and the disciples want to do and what was the result? (3)</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed space-y-2">
            <p>The disciples did not know what to do, so they did that which was necessary, and in taking this initiative they put themselves in a place where Christ met them. Here is the truth, attested to by the disciples, that when we are uncertain what to do we should simply do our duty and God will guide.</p>
            <p><strong>That night they catch nothing (v. 3).</strong> They have done what they thought they could do best but experienced a miserable failure. This prepared them to learn one of the most important lessons of discipleship--apart from Jesus they can do nothing (15:5). Jesus had taught this lesson before, for "never in the Gospels do the disciples catch a fish without Jesus' help." But they needed the lesson repeated, as we often do as well.</p>
          </div>
        </div>

        <div>
          <p class="font-bold text-gray-900 mb-2">How might they have felt when they caught nothing?</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed">
            <p>They may have felt deep sense of failure. We look up God only when we experience a complete failure and utter helplessness; it is God’s time.</p>
          </div>
        </div>

        <div>
          <p class="font-bold text-gray-900 mb-2">How did Jesus help to restore them after their failure? (4-6)</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed space-y-2">
            <p>The turning point comes early in the morning, perhaps symbolizing the dawning of spiritual light. Jesus is described again as simply standing there, without a description of his arrival on the spot (v. 4, 20:14, 19, 26).</p>
            <p>Jesus took the initiative and called to them: <strong>Friends, haven't you any fish? (v. 5).</strong> The word translated friends (paidiai) is more literally "children" or even "little children." This usage, unique to John, is probably the sense here in John 21 also. Thus, this greeting was unusual and so would have sounded strange to the disciples.</p>
            <p>The disciples admitted they had failed at fishing (v. 5), and Jesus told them, <strong>Throw your net on the right side of the boat and you will find some (v. 6).</strong> He didn't offer a suggestion; he gave a promise that in fact they would find fish where he directed them to cast. When they obeyed they could not even get the net into the boat because there were so many fish enclosed in it (v. 6). Such abundance reminded them the enormous success they had experienced with Jesus (Lk 5:1-11).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 2 -->
    <div>
      <h3 class="font-black text-xl text-gray-900 uppercase mb-4 tracking-tight">2. Read verses 7-14</h3>
      <div class="bg-gray-50 p-4 rounded-lg mb-6 text-sm text-gray-600 font-serif italic border-l-4 border-gray-300">
        <span class="font-bold not-italic text-gray-900 block mb-1">Verses 7-14</span>
        7 Then the disciple whom Jesus loved said to Peter, “It is the Lord!”... 14 This was now the third time Jesus appeared to his disciples after he was raised from the dead.
      </div>
      
      <div class="space-y-6">
        <div>
          <p class="font-bold text-gray-900 mb-2">Who recognized Jesus first? (7a; Lk 5:1-11)</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed">
            <p>It is the Beloved Disciple (John) who was able to discern the identity of the stranger on the shore (v. 7).</p>
          </div>
        </div>

        <div>
          <p class="font-bold text-gray-900 mb-2">What did Peter and the other disciples do? (7b-8)</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed">
            <p>Peter wrapped his outer garment around him (for he had taken it off) and jumped into the water (v. 7). The text says literally that Peter was naked (en gar gymnos), and this seems to have been typical for such work. Most likely, then, he had been working naked and had put on a loincloth before swimming to shore. The other disciples follow in the boat, towing the catch (v. 8).</p>
          </div>
        </div>

        <div>
          <p class="font-bold text-gray-900 mb-2">How did Jesus serve the disciples? (9-13)</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed space-y-2">
            <p>The risen Jesus had already prepared for a charcoal fire with bread and (v. 9). There is no indication of where Jesus got the bread and fish; the appearance of the food is as mysterious as his own. He knew the disciples were very hungry after all night’s hard work. He knew their big appetite. We experience that our temper is short and however beneficial the lesson is we can’t concentrate on it when our stomachs are empty. The Lord had breakfast ready for them, another sign of his grace and provision.</p>
            <p>The first one to speak was Jesus, and he told them to bring some of the fish they have caught (v. 10). Although Jesus addressed all the disciples, it was Peter who brought the catch ashore, apparently by himself (v. 11). Rather, Jesus spoke yet another command--an invitation to have breakfast (v. 12). Throughout this encounter with Jesus the disciples had not said anything. The scene was one of great awe, with none of them daring to ask him, Who are you? (v. 12).</p>
            <p>After inviting them to come and eat, he himself came to the fire. He took the bread and gave it to them, and did the same with the fish (v. 13). This description echoes his action at the feeding of the five thousand (6:11) and provides the climax of this story. It answers their unasked questions--he is recognized in this breaking of the bread as in Luke.</p>
          </div>
        </div>

        <div>
          <p class="font-bold text-gray-900 mb-2">How successful was their fishing? (11)</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed">
            <p><strong>11 Simon Peter climbed aboard and dragged the net ashore. It was full of large fish, 153, but even with so many the net was not torn.</strong></p>
            <p>Various suggestions have been made over the years for the significance of the number 153. The emphasis in the story, however, is simply on how many fish there were and the fact that the net did not break. On the simplest level, these details speak of the abundance that the gracious God provides and how he also enables the abundance to be received. If more specific symbolism is present, perhaps the fish represent a large influx of believers from various nations and the unbroken net may represent the unity of God’s people (or church).</p>
          </div>
        </div>

        <div>
          <p class="font-bold text-gray-900 mb-2">How might they have felt when Jesus served them? (12-13)</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed">
            <p>They could not say anything; in one hand, they were embarrassed just like children who are caught by father in the midst of mischief and in another, they were so grateful and moved by his grace. The Lord who ought to be their master also served them, continuing a theme found during the ministry (for example, 13:5, 13).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 3 -->
    <div>
      <h3 class="font-black text-xl text-gray-900 uppercase mb-4 tracking-tight">3. Read verse 15-17</h3>
      <div class="bg-gray-50 p-4 rounded-lg mb-6 text-sm text-gray-600 font-serif italic border-l-4 border-gray-300">
        <span class="font-bold not-italic text-gray-900 block mb-1">Verses 15-17</span>
        15 When they had finished eating, Jesus said to Simon Peter, “Simon son of John, do you truly love me more than these?”... 17 The third time he said to him, “Simon son of John, do you love me?” Peter was hurt because Jesus asked him the third time, “Do you love me?” He said, “Lord, you know all things; you know that I love you.” Jesus said, “Feed my sheep.
      </div>
      
      <div class="space-y-6">
        <div>
          <p class="font-bold text-gray-900 mb-2">After eating, to whom did Jesus speak and why? (15)</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed">
            <p>He asked Peter, calling “Simon son of John” (not Simon Peter), which was his name before he had met Jesus. Peter denied that he was Simon Peter (Jesus’ disciple) three times when he was challenged.</p>
          </div>
        </div>

        <div>
          <p class="font-bold text-gray-900 mb-2">What did Jesus ask Peter? (15-17)</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed">
            <p>“Simon son of John, do you truly love me more than these?” “Simon son of John, do you truly love me?” “Simon son of John, do you love me?”</p>
            <p>There are two Greek verbs used for love here; truly love (agapao) and love (phileo). In the past it was common to find a great distinction between these two words; agapao is divine love and phileo a lower, human love, although in recent years it is thought that they are close synonyms. However, John clearly recorded Jesus asking Peter twice using ‘agapao’.</p>
          </div>
        </div>

        <div>
          <p class="font-bold text-gray-900 mb-2">What did he mean by, “Do you truly love me more than these”?</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed space-y-2">
            <p>Jesus’ question is extremely challenging one, indeed, it is the ultimate question in life. What does these refer to? If it is his net and boat (i.e., his job), family, friends, honor, money, future security, human achievement, national dream or even including his life, Then this question gets at the central point of discipleship and reveals a person's heart. It is also related to our purpose of life. (Deut 6:5) What do we love the most? Have we abandoned all to follow Jesus? Every time we are faced with a temptation this question is raised. Every time we become preoccupied with even the good things God gives us this question is raised.</p>
            <p>But, while all of these are true, it is probably not the specific point here. By these Jesus probably means "these other disciples." According to the other Gospels, Peter had boasted that though all the others fall away, he would not. John does not record this boast, but Peter's actions in swimming to shore and hauling up the net by himself reveal the same attitude. Jesus' question, therefore, goes even deeper than the issue of false attachments. He gets at the root of all sin, namely, pride.</p>
          </div>
        </div>

        <div>
          <p class="font-bold text-gray-900 mb-2">Why did Jesus ask Peter three times?</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed">
            <p>Peter denied Jesus three times, which was very painful memory. When the third time Jesus asked whether he loves him, Peter was hurt, that was, deeply grieved (elypethe, v. 17). Peter's pride was cut to the quick. Here we see the Great Surgeon performing painful but necessary surgery. The light is shining in the darkness of Peter's heart, bringing life. This is "joy-producing sorrow" (The Ladder of Divine Ascent, chap. 7), the repentance that enables one to experience the Lord's love and salvation. Without such brokenness we are full of self and unable to hear and receive the guidance of the Chief Shepherd, our Lord.</p>
          </div>
        </div>

        <div>
          <p class="font-bold text-gray-900 mb-2">What was Peter’s response and Jesus’ command each time? (15-17)</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed space-y-2">
            <p>Peter replies, Yes, Lord, . . . you know that I love you (v. 15). He did not claim to love Jesus more than the others do. He did not claim he truly love (agapao) Jesus. It suggests he became to know his human limitation through his failure.</p>
            <p>In response to the third question, Peter says, Lord, you know all things; you know that I love you (v. 17). Peter was dying to self and finding his confidence only in the Lord. It is the Lord who knows (cf. 1:42, 47-48; 2:25). Despite his failure, Peter did love Jesus.</p>
            <p>After each profession of love Jesus gives a similar command, using different words. First he is to feed [boske] lambs (arnia, v. 15); then he is to shepherd [poimaine] sheep (probata, v. 16). The third command includes a word from both of the previous commands (v. 17, boske/probata), thereby tying the three commands together. These commands suggest that we have a comprehensive image of shepherding. God himself was known as the shepherd of Israel, and under him the leaders of his people were known as shepherds. Jesus himself is the Good Shepherd (Jn 10:1-18), and now he commissions Peter to care for the flock that belongs to Jesus, for they are my lambs . . . my sheep. This was Jesus’ specific command for Peter, who would be the leader of the church and shepherd for his flock.</p>
            <p>The key qualification for this task, as this chapter indicates, is a true love for Jesus. Peter already had a devotion to Jesus, but he was still full of self will and was thrusting himself to the front. But Peter himself learned his lesson.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 4 -->
    <div>
      <h3 class="font-black text-xl text-gray-900 uppercase mb-4 tracking-tight">4. Read verses 18-25</h3>
      <div class="bg-gray-50 p-4 rounded-lg mb-6 text-sm text-gray-600 font-serif italic border-l-4 border-gray-300">
        <span class="font-bold not-italic text-gray-900 block mb-1">Verses 18-25</span>
        18 I tell you the truth, when you were younger you dressed yourself and went where you wanted... 25 Jesus did many other things as well. If every one of them were written down, I suppose that even the whole world would not have room for the books that would be written.
      </div>
      
      <div class="space-y-6">
        <div>
          <p class="font-bold text-gray-900 mb-2">What will happen to Peter when he is old? (18,19a)</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed">
            <p>After Peter professed his obedient love, Jesus spelled out the cost of that love. He contrasts Peter's youth, his life up to this point, with what is coming. He has been able to go wherever he wanted, but when he is old, Jesus tells him, you will stretch out your hands, and someone else will dress you and lead you where you do not want to go (v. 18). Here is an explicit contrast between Peter's life of self will and his coming under the will of another. He has just submitted to Jesus and his will, and now Jesus says such submission is going to include being taken where he does not want to go.</p>
            <p>John says this obscure saying is an indication of the kind of death by which Peter would glorify God (v. 19). According to tradition, Peter was crucified head down during the Nero’s persecution in the mid sixties A.D. So John, late in the first century, knows that Peter's hands were stretched out and tied to a cross. The word dress (zonnymi) which was used for getting dressed. It may refer here to the binding of a person's arms to the crossbeam as they are led to crucifixion. Jesus predicts that Peter also will glorify God by his death (v. 19).</p>
          </div>
        </div>

        <div>
          <p class="font-bold text-gray-900 mb-2">What did Jesus say to Peter? (19b)</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed">
            <p><strong>“Then he said to him, “Follow me!” (19b)</strong></p>
            <p>Having spelled out his will for Peter, Jesus calls him to follow him (v. 19). Peter had answered such a call at the outset of the ministry, but now he understands much more about who Jesus is and what following him entails. He has also received a commission from the Lord for leadership in the community of faith. So this is a call to recommit himself.</p>
          </div>
        </div>

        <div>
          <p class="font-bold text-gray-900 mb-2">Why did Peter ask about John? (20-21)</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed">
            <p>20 Peter turned and saw that the disciple whom Jesus loved was following them. (This was the one who had leaned back against Jesus at the supper and had said, “Lord, who is going to betray you?”) 21 When Peter saw him, he asked, “Lord, what about him?”</p>
          </div>
        </div>

        <div>
          <p class="font-bold text-gray-900 mb-2">What was Jesus’ answer? (22-23)</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed">
            <p>22 Jesus answered, “If I want him to remain alive until I return, what is that to you? You must follow me.”</p>
            <p>Jesus repeats his call: If I want him to remain alive until I return, what is that to you? You must follow me (v. 22). Jesus is indeed Lord, and his will shall be accomplished in the Beloved Disciple's life, but that is none of Peter's business. Peter can trust Jesus with the life of his friend.</p>
          </div>
        </div>

        <div>
          <p class="font-bold text-gray-900 mb-2">How did the author conclude? (24-25)</p>
          <div class="pl-4 border-l-2 border-[#3667B1]/30 text-gray-700 leading-relaxed">
            <p>24 This is the disciple who testifies to these things and who wrote them down. We know that his testimony is true. 25 Jesus did many other things as well. If every one of them were written down, I suppose that even the whole world would not have room for the books that would be written.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

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

export const studies: BibleStudy[] = [
  {
    id: "john-21",
    title: "Do You Truly Love Me More Than These?",
    passage: "John 21:1-25",
    date: "2026-01-11",
    messenger: "P. William Larsen",
    series: "John",
    questions: john21Questions,
    transcript: john21Transcript,
    bibleText: john21BibleText,
    leaderGuide: john21Guide,
    pdfUrl: "", 
    docxUrl: "",
    attachments: [
        { name: "Study Questions.docx", url: "#", type: "docx" },
        { name: "Study Answers.docx", url: "#", type: "docx" },
        { name: "Message Transcript.docx", url: "#", type: "docx" }
    ],
    videoId: undefined,
  },
  // Keep one example for reference
  {
    id: "exodus-2",
    title: "Watered The Flock",
    passage: "Exodus 2:11-22",
    date: "2024-01-24",
    messenger: "P. Abraham Kim",
    series: "Exodus",
    questions: john21Questions, // Just placeholder
    transcript: john21Transcript,
    bibleText: john21BibleText,
    leaderGuide: john21Guide,
    pdfUrl: "/downloads/exodus-2.pdf",
    videoId: "O1oAoyIH_qQ",
  }
];
