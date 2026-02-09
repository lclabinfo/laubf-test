import type { BibleStudy } from "@/lib/types/bible-study";

/* ================================================================
 * MOCK DATA — Bible Study Resources
 * In production, this data comes from PostgreSQL via CMS API.
 *
 * Each bible study has:
 *  - metadata (title, dates, series, passage, messenger)
 *  - questions (rich text HTML — from TinyMCE)
 *  - answers (rich text HTML)
 *  - transcript (rich text HTML)
 *  - attachments (PDFs, DOCXs, images)
 * ================================================================ */

export const MOCK_BIBLE_STUDIES: BibleStudy[] = [
  {
    id: "john-21",
    slug: "do-you-truly-love-me",
    title: "Do You Truly Love Me More Than These?",
    book: "John",
    passage: "John 21:1-25",
    datePosted: "2026-04-10",
    dateFor: "2026-04-12",
    series: "Sunday Message",
    messenger: "P. Kevin Albright",
    keyVerse: {
      verse: "John 21:15",
      text: "When they had finished eating, Jesus said to Simon Peter, \u201CSimon son of John, do you truly love me more than these?\u201D \u201CYes, Lord,\u201D he said, \u201Cyou know that I love you.\u201D Jesus said, \u201CFeed my lambs.\u201D",
    },
    bibleText: `<h4>John 21:1-25 (ESV)</h4>
<p>1 Afterward Jesus appeared again to his disciples, by the Sea of Tiberias. It happened this way: 2 Simon Peter, Thomas (called Didymus), Nathanael from Cana in Galilee, the sons of Zebedee, and two other disciples were together. 3 \u201CI\u2019m going out to fish,\u201D Simon Peter told them, and they said, \u201CWe\u2019ll go with you.\u201D So they went out and got into the boat, but that night they caught nothing.</p>
<p>4 Early in the morning, Jesus stood on the shore, but the disciples did not realize that it was Jesus. 5 He called out to them, \u201CFriends, haven\u2019t you any fish?\u201D \u201CNo,\u201D they answered. 6 He said, \u201CThrow your net on the right side of the boat and you will find some.\u201D When they did, they were unable to haul the net in because of the large number of fish.</p>
<p>7 Then the disciple whom Jesus loved said to Peter, \u201CIt is the Lord!\u201D As soon as Simon Peter heard him say, \u201CIt is the Lord,\u201D he wrapped his outer garment around him (for he had taken it off) and jumped into the water. 8 The other disciples followed in the boat, towing the net full of fish, for they were not far from shore, about a hundred yards. 9 When they landed, they saw a fire of burning coals there with fish on it, and some bread. 10 Jesus said to them, \u201CBring some of the fish you have just caught.\u201D</p>
<p>11 Simon Peter climbed aboard and dragged the net ashore. It was full of large fish, 153, but even with so many the net was not torn. 12 Jesus said to them, \u201CCome and have breakfast.\u201D None of the disciples dared ask him, \u201CWho are you?\u201D They knew it was the Lord. 13 Jesus came, took the bread and gave it to them, and did the same with the fish. 14 This was now the third time Jesus appeared to his disciples after he was raised from the dead.</p>
<p>15 When they had finished eating, Jesus said to Simon Peter, \u201CSimon son of John, do you truly love me more than these?\u201D \u201CYes, Lord,\u201D he said, \u201Cyou know that I love you.\u201D Jesus said, \u201CFeed my lambs.\u201D 16 Again Jesus said, \u201CSimon son of John, do you truly love me?\u201D He answered, \u201CYes, Lord, you know that I love you.\u201D Jesus said, \u201CTake care of my sheep.\u201D 17 The third time he said to him, \u201CSimon son of John, do you love me?\u201D Peter was hurt because Jesus asked him the third time, \u201CDo you love me?\u201D He said, \u201CLord, you know all things; you know that I love you.\u201D Jesus said, \u201CFeed my sheep.\u201D</p>
<p>18 Very truly I tell you, when you were younger you dressed yourself and went where you wanted; but when you are old you will stretch out your hands, and someone else will dress you and lead you where you do not want to go.\u201D 19 Jesus said this to indicate the kind of death by which Peter would glorify God. Then he said to him, \u201CFollow me!\u201D</p>
<p>20 Peter turned and saw that the disciple whom Jesus loved was following them. (This was the one who had leaned back against Jesus at the supper and had said, \u201CLord, who is going to betray you?\u201D) 21 When Peter saw him, he asked, \u201CLord, what about him?\u201D 22 Jesus answered, \u201CIf I want him to remain alive until I return, what is that to you? You must follow me.\u201D 23 Because of this, the rumor spread among the brothers that this disciple would not die. But Jesus did not say that he would not die; he only said, \u201CIf I want him to remain alive until I return, what is that to you?\u201D</p>
<p>24 This is the disciple who testifies to these things and who wrote them down. We know that his testimony is true. 25 Jesus did many other things as well. If every one of them were written down, I suppose that even the whole world would not have room for the books that would be written.</p>`,
    questions: `<h3>Read verses 1-6</h3>
<ul>
<li>Where and to whom did the risen Jesus appear again? (1-2, 14; Mt 26:32)</li>
<li>What did Peter and the disciples want to do and what was the result? (3)</li>
<li>How might they have felt when they caught nothing? How did Jesus help to restore them after their failure? (4-6)</li>
</ul>
<h3>Read verses 7-14</h3>
<ul>
<li>Who recognized Jesus first? (7a; Lk 5:1-11)</li>
<li>What did Peter and the other disciples do? (7b-8)</li>
<li>How did Jesus serve the disciples? (9-13)</li>
<li>How successful was their fishing? (11)</li>
<li>How might they have felt when Jesus served them? (12-13)</li>
</ul>
<h3>Read verses 15-17</h3>
<ul>
<li>After eating, to whom did Jesus speak and why? (15)</li>
<li>What did Jesus ask Peter? (15-17)</li>
<li>What did he mean by, \u201CDo you truly love me more than these\u201D?</li>
<li>Why did Jesus ask Peter three times? What was Peter\u2019s response and Jesus\u2019 command each time? (15-17)</li>
</ul>
<h3>Read verses 18-25</h3>
<ul>
<li>What will happen to Peter when he is old? (18,19a)</li>
<li>What did Jesus say to Peter? (19b)</li>
<li>Why did Peter ask about John? (20-21)</li>
<li>What was Jesus\u2019 answer? (22-23)</li>
<li>How did the author conclude? (24-25)</li>
</ul>`,
    answers: `<h3>Verses 1-6</h3>
<p>Jesus appeared by the Sea of Tiberias to seven disciples. Peter said he was going fishing and the others followed. They caught nothing all night. Jesus called from shore and told them to cast the net on the right side. They caught an enormous number of fish.</p>
<p>The disciples did not know what to do, so they did what was necessary. In taking this initiative they put themselves in a place where Christ met them. When we are uncertain what to do, we should simply do our duty and God will guide.</p>
<h3>Verses 7-14</h3>
<p>It was the Beloved Disciple (John) who recognized the stranger on the shore. Peter wrapped his outer garment around him and jumped into the water. Jesus had already prepared a charcoal fire with bread and fish for them. He knew the disciples were very hungry after a long night of work. He served them breakfast\u2014another sign of his grace and provision.</p>
<h3>Verses 15-17</h3>
<p>Jesus asked Peter three times \u201CDo you love me?\u201D corresponding to Peter\u2019s three denials. Each time Peter affirmed his love, Jesus commanded him to feed/care for his sheep. The key qualification for this task is a true love for Jesus.</p>
<p>Peter\u2019s pride was cut to the quick. The light was shining in the darkness of Peter\u2019s heart, bringing life. Without such brokenness we are full of self and unable to hear the guidance of the Chief Shepherd.</p>
<h3>Verses 18-25</h3>
<p>Jesus contrasts Peter\u2019s youth with what is coming. He has been able to go wherever he wanted, but when he is old, someone else will lead him where he does not want to go. This indicated the kind of death by which Peter would glorify God.</p>
<p>The call to follow is personal. We follow based on his love and calling, not based on other people.</p>`,
    transcript: `<p><strong>Then he said to him, \u201CFollow me!\u201D</strong></p>

<p>Today\u2019s passage is our final Easter/resurrection message. It is also the final chapter of John\u2019s gospel. What is the concluding message of the gospel? We see that God has loved us; he became flesh, he taught us, he suffered and died for us, and now calls us to follow him, to love him and feed his sheep.</p>

<p><strong>First, we can learn about the kind of love Jesus has; Jesus invited his disciples to breakfast (1-14).</strong></p>

<p>Jesus appeared \u201Cagain\u201D to his disciples at the sea of Tiberias, which is the sea of Galilee. They had gone there because Jesus told them he would meet them in Galilee after he had risen. But they really didn\u2019t know what they were doing. Peter said he was going out to fish and the others followed him. They fished all night but caught nothing.</p>

<p>Then Jesus appeared. He called out from shore, \u201CFriends, haven\u2019t you any fish?\u201D He told them to throw their net on the right side of the boat. When they did, they were unable to haul the net in because of the large number of fish. John recognized Jesus right away because what happened was just like what happened when he had first called them.</p>

<p>When they got to shore, Jesus had already prepared a fire with fish and bread. He served them breakfast. This was the third time he appeared to his disciples after he was raised from the dead.</p>

<p><strong>Second, Jesus asked Peter if he truly loved him (15-17).</strong></p>

<p>After breakfast, Jesus asked Simon Peter, \u201CDo you truly love me more than these?\u201D He asked three times, corresponding to Peter\u2019s three denials. Peter was hurt because Jesus asked him the third time. But this was a necessary surgery to heal Peter\u2019s heart.</p>

<p>Each time Peter affirmed his love, Jesus gave him a command: \u201CFeed my lambs,\u201D \u201CTake care of my sheep,\u201D \u201CFeed my sheep.\u201D Jesus showed Peter how to express his love: by caring for others.</p>

<p><strong>Third, follow me (18-25).</strong></p>

<p>Jesus finished by saying, \u201CFollow me!\u201D Following Jesus involves denying ourselves and doing what we do not want to do. The call to follow is personal. We follow based on his love and calling, not based on other people.</p>

<p>This passage shows us that Jesus loved us and calls us, and his love is the same. His love did not change although theirs had faltered. He wants us to accept his love and follow him, caring for his sheep with the same level of his love.</p>`,
    attachments: [
      { name: "John 21 Study Guide.pdf", url: "#", type: "pdf" },
      { name: "John 21 Study Guide.docx", url: "#", type: "docx" },
      { name: "John 21 Message Transcript.docx", url: "#", type: "docx" },
    ],
    hasQuestions: true,
    hasAnswers: true,
    hasTranscript: true,
  },
  {
    id: "psalms-23",
    slug: "the-lord-is-my-shepherd",
    title: "The Lord is My Shepherd",
    book: "Psalms",
    passage: "Psalms 23:1-6",
    datePosted: "2026-02-20",
    dateFor: "2026-02-22",
    series: "Sunday Message",
    messenger: "P. Samuel Lee",
    keyVerse: {
      verse: "Psalms 23:1",
      text: "The Lord is my shepherd, I lack nothing.",
    },
    questions: `<h3>Look at verse 1</h3><ul><li>What does it mean that the Lord is my shepherd?</li><li>What does \u201CI lack nothing\u201D really mean in the context of our daily lives?</li></ul><h3>Look at verses 2-3</h3><ul><li>Where does the shepherd lead his sheep and why?</li><li>What does it mean that he restores my soul?</li></ul><h3>Look at verses 4-6</h3><ul><li>What is the valley of the shadow of death?</li><li>Why does the psalmist fear no evil?</li><li>What is the significance of the prepared table?</li></ul>`,
    answers: `<p>The Lord as shepherd means he personally cares for and guides each of us. He leads us to green pastures and quiet waters — places of nourishment and peace.</p>`,
    transcript: `<p>Psalm 23 is perhaps the most beloved psalm. David, a former shepherd himself, describes God as the perfect shepherd who provides, protects, and guides.</p>`,
    attachments: [
      { name: "Psalm 23 Study Guide.pdf", url: "#", type: "pdf" },
    ],
    hasQuestions: true,
    hasAnswers: true,
    hasTranscript: true,
  },
  {
    id: "matthew-5",
    slug: "blessed-are-the-poor-in-spirit",
    title: "The Sermon on the Mount: Blessed Are the Poor in Spirit",
    book: "Matthew",
    passage: "Matthew 5:1-12",
    datePosted: "2026-02-13",
    dateFor: "2026-02-15",
    series: "Sunday Message",
    messenger: "P. David Kim",
    questions: `<h3>Look at verses 1-2</h3><ul><li>Where did Jesus go and what did he do?</li><li>Who were his audience?</li></ul><h3>Look at verses 3-6</h3><ul><li>What does it mean to be \u201Cpoor in spirit\u201D?</li><li>Why are those who mourn blessed?</li><li>What does it mean to hunger and thirst for righteousness?</li></ul>`,
    attachments: [
      { name: "Matthew 5 Study Guide.pdf", url: "#", type: "pdf" },
    ],
    hasQuestions: true,
    hasAnswers: false,
    hasTranscript: false,
  },
  {
    id: "romans-8",
    slug: "more-than-conquerors",
    title: "More Than Conquerors",
    book: "Romans",
    passage: "Romans 8:31-39",
    datePosted: "2026-02-06",
    dateFor: "2026-02-08",
    series: "Sunday Message",
    messenger: "P. William Larsen",
    questions: `<h3>Look at verses 31-34</h3><ul><li>What does Paul mean by \u201CIf God is for us, who can be against us?\u201D</li><li>How does God\u2019s giving of his own Son prove his love?</li></ul><h3>Look at verses 35-39</h3><ul><li>What are the things that cannot separate us from the love of Christ?</li><li>What does it mean to be \u201Cmore than conquerors\u201D?</li></ul>`,
    transcript: `<p>Romans 8 is the pinnacle of Paul\u2019s letter to the Romans. After explaining the problem of sin and the solution of grace, Paul reaches a triumphant conclusion.</p>`,
    attachments: [
      { name: "Romans 8 Study Guide.pdf", url: "#", type: "pdf" },
    ],
    hasQuestions: true,
    hasAnswers: false,
    hasTranscript: true,
  },
  {
    id: "john-15",
    slug: "remain-in-my-love",
    title: "Remain in My Love",
    book: "John",
    passage: "John 15:9-17",
    datePosted: "2026-01-30",
    dateFor: "2026-02-01",
    series: "Sunday Message",
    messenger: "P. Kevin Albright",
    questions: `<h3>Look at verses 9-11</h3><ul><li>How has Jesus loved us?</li><li>What is the condition for remaining in his love?</li><li>Why did Jesus tell us these things?</li></ul><h3>Look at verses 12-17</h3><ul><li>What is Jesus\u2019 command?</li><li>What is the greatest love?</li><li>What does Jesus call us and why?</li></ul>`,
    answers: `<p>Jesus loved us as the Father loved him \u2014 unconditionally and sacrificially. We remain in his love by keeping his commands. The greatest expression of love is laying down one\u2019s life for friends.</p>`,
    transcript: `<p>In John 15, Jesus uses the imagery of the vine and branches. Here in verses 9-17, he focuses on the theme of love \u2014 his love for us, and our love for one another.</p>`,
    attachments: [
      { name: "John 15 Study Guide.pdf", url: "#", type: "pdf" },
      { name: "John 15 Study Guide.docx", url: "#", type: "docx" },
    ],
    hasQuestions: true,
    hasAnswers: true,
    hasTranscript: true,
  },
  {
    id: "genesis-12",
    slug: "the-call-of-abram",
    title: "The Call of Abram",
    book: "Genesis",
    passage: "Genesis 12:1-9",
    datePosted: "2026-01-23",
    dateFor: "2026-01-25",
    series: "Sunday Message",
    messenger: "P. Abraham Kim",
    questions: `<h3>Look at verses 1-3</h3><ul><li>What did God command Abram to do?</li><li>What promises did God make to Abram?</li><li>What is the significance of \u201CAll peoples on earth will be blessed through you\u201D?</li></ul><h3>Look at verses 4-9</h3><ul><li>How did Abram respond to God\u2019s call?</li><li>What did Abram do when he arrived in Canaan?</li></ul>`,
    attachments: [
      { name: "Genesis 12 Study Guide.pdf", url: "#", type: "pdf" },
    ],
    hasQuestions: true,
    hasAnswers: true,
    hasTranscript: false,
  },
  {
    id: "acts-2",
    slug: "the-day-of-pentecost",
    title: "The Day of Pentecost",
    book: "Acts",
    passage: "Acts 2:1-21",
    datePosted: "2026-01-16",
    dateFor: "2026-01-18",
    series: "Sunday Message",
    messenger: "P. Samuel Lee",
    questions: `<h3>Look at verses 1-4</h3><ul><li>What happened on the day of Pentecost?</li><li>What were the signs of the Holy Spirit\u2019s coming?</li></ul><h3>Look at verses 5-13</h3><ul><li>Who was present and how did they react?</li><li>What did the crowd think was happening?</li></ul><h3>Look at verses 14-21</h3><ul><li>How did Peter explain the event?</li><li>What Old Testament prophecy did he quote?</li></ul>`,
    answers: `<p>The Holy Spirit came with the sound of wind and tongues of fire. The disciples spoke in other languages, amazing the international crowd in Jerusalem. Peter explained it as the fulfillment of Joel\u2019s prophecy.</p>`,
    transcript: `<p>Acts 2 describes the birth of the church. The Holy Spirit came upon the disciples, empowering them to be witnesses.</p>`,
    attachments: [
      { name: "Acts 2 Study Guide.pdf", url: "#", type: "pdf" },
    ],
    hasQuestions: true,
    hasAnswers: true,
    hasTranscript: true,
  },
  {
    id: "ephesians-2",
    slug: "saved-by-grace-through-faith",
    title: "Saved by Grace Through Faith",
    book: "Ephesians",
    passage: "Ephesians 2:1-10",
    datePosted: "2026-01-09",
    dateFor: "2026-01-11",
    series: "Sunday Message",
    messenger: "P. David Kim",
    questions: `<h3>Look at verses 1-3</h3><ul><li>How does Paul describe our former condition?</li><li>What does it mean to be \u201Cdead in transgressions\u201D?</li></ul><h3>Look at verses 4-7</h3><ul><li>What motivated God to save us?</li><li>What did God do for us through Christ?</li></ul><h3>Look at verses 8-10</h3><ul><li>How are we saved?</li><li>What is the purpose of our salvation?</li></ul>`,
    transcript: `<p>Ephesians 2 contains the clearest summary of the gospel in Paul\u2019s letters. By grace you have been saved through faith \u2014 and this is not from yourselves, it is the gift of God.</p>`,
    attachments: [
      { name: "Ephesians 2 Study Guide.pdf", url: "#", type: "pdf" },
    ],
    hasQuestions: true,
    hasAnswers: false,
    hasTranscript: true,
  },
  {
    id: "john-17",
    slug: "not-of-the-world",
    title: "Not Of The World",
    book: "John",
    passage: "John 17:14-26",
    datePosted: "2026-01-02",
    dateFor: "2026-01-04",
    series: "Sunday Message",
    messenger: "P. William Larsen",
    keyVerse: {
      verse: "John 17:14",
      text: "I have given them your word, and the world has hated them because they are not of the world, just as I am not of the world.",
    },
    questions: `<h3>V14-19</h3><ul><li>What has Jesus given us? How does the world treat those who follow Jesus\u2019s words and why?</li><li>What did Jesus not ask God for? Instead, what did he ask God to do for his disciples and why?</li><li>What purpose does Jesus have for sending us into the world?</li></ul><h3>V20-23</h3><ul><li>For whom did Jesus also ask God for these things?</li><li>Why does Jesus want all believers to be united as one?</li></ul><h3>V24-26</h3><ul><li>What does Jesus desire and why?</li><li>What did Jesus make known to his disciples, and why does he continue to make it known?</li></ul>`,
    answers: `<p>Jesus gave them God\u2019s word. The world hates them because they are not of the world. Jesus prays not to take them out of the world but to protect them from the evil one and sanctify them in truth.</p>`,
    attachments: [
      { name: "John 17 Study Guide.pdf", url: "#", type: "pdf" },
      { name: "John 17 Study Guide.docx", url: "#", type: "docx" },
    ],
    hasQuestions: true,
    hasAnswers: true,
    hasTranscript: false,
  },
  {
    id: "psalm-136",
    slug: "his-steadfast-love-endures-forever",
    title: "His Steadfast Love Endures Forever",
    book: "Psalms",
    passage: "Psalms 136:1-26",
    datePosted: "2025-12-12",
    dateFor: "2025-12-14",
    series: "Sunday Message",
    messenger: "Paul Kim",
    keyVerse: {
      verse: "Psalms 136:1",
      text: "Give thanks to the Lord, for he is good, for his steadfast love endures forever.",
    },
    questions: `<h3>Look at verses 1-3</h3><ul><li>Why should we give thanks to the Lord?</li><li>What titles are given to God and what do they mean?</li></ul><h3>Look at verses 4-9</h3><ul><li>What does God\u2019s work of creation reveal about him?</li></ul><h3>Look at verses 10-22</h3><ul><li>What events from Israel\u2019s history does the psalmist recount?</li><li>What is the refrain and why is it repeated?</li></ul>`,
    answers: `<p>The Lord is good, the God of gods and Lord of lords. His creation reveals his power and wisdom. The refrain \u201CHis steadfast love endures forever\u201D is repeated 26 times to emphasize the enduring nature of God\u2019s love.</p>`,
    transcript: `<p>Psalm 136 is a psalm of thanksgiving. The psalmist invites God\u2019s people to give thanks to the Lord because he is good and his steadfast love endures forever.</p>`,
    attachments: [
      { name: "Psalm 136 Study Guide.pdf", url: "#", type: "pdf" },
    ],
    hasQuestions: true,
    hasAnswers: true,
    hasTranscript: true,
  },
  {
    id: "advent-3",
    slug: "to-worship-him",
    title: "To Worship Him: Joy for a Broken World",
    book: "Matthew",
    passage: "Matthew 2:1-12",
    datePosted: "2025-12-05",
    dateFor: "2025-12-07",
    series: "Advent 2025",
    messenger: "Theo Woessner",
    questions: `<h3>Look at verses 1-6</h3><ul><li>Who came to Jerusalem and why?</li><li>How did King Herod respond to the news?</li></ul><h3>Look at verses 7-12</h3><ul><li>What did the Magi do when they found Jesus?</li><li>What is the significance of the gifts they brought?</li></ul>`,
    answers: `<p>The Magi came from the East, following a star, to worship the newborn King. Herod was disturbed because he saw Jesus as a threat. The Magi worshipped Jesus and offered gold, frankincense, and myrrh.</p>`,
    transcript: `<p>In Advent we prepare our hearts for Christmas. Today we look at the Magi who traveled far to worship Jesus, bringing joy to a broken world.</p>`,
    attachments: [
      { name: "Advent Week 3 Study Guide.pdf", url: "#", type: "pdf" },
    ],
    hasQuestions: true,
    hasAnswers: true,
    hasTranscript: true,
  },
  {
    id: "advent-2",
    slug: "prepare-the-way",
    title: "Prepare the Way for the Lord",
    book: "Mark",
    passage: "Mark 1:1-8",
    datePosted: "2025-11-28",
    dateFor: "2025-11-30",
    series: "Advent 2025",
    messenger: "David Kim",
    questions: `<h3>Look at verses 1-3</h3><ul><li>How does Mark begin his gospel?</li><li>What Old Testament prophecy does he quote?</li></ul><h3>Look at verses 4-8</h3><ul><li>Who was John the Baptist and what was his message?</li><li>How did John describe the one coming after him?</li></ul>`,
    attachments: [
      { name: "Advent Week 2 Study Guide.pdf", url: "#", type: "pdf" },
    ],
    hasQuestions: true,
    hasAnswers: false,
    hasTranscript: false,
  },
  {
    id: "colossians-3",
    slug: "christ-is-all",
    title: "Christ is All, and is in All",
    book: "Colossians",
    passage: "Colossians 3:1-17",
    datePosted: "2025-11-21",
    dateFor: "2025-11-23",
    series: "Sunday Message",
    messenger: "Sarah Park",
    questions: `<h3>Look at verses 1-4</h3><ul><li>What should we set our hearts and minds on?</li><li>What does it mean that our life is hidden with Christ in God?</li></ul><h3>Look at verses 5-11</h3><ul><li>What should we put to death and take off?</li><li>What is the new self?</li></ul><h3>Look at verses 12-17</h3><ul><li>What should we clothe ourselves with?</li><li>What is the \u201Cperfect bond of unity\u201D?</li></ul>`,
    answers: `<p>We should set our minds on things above because our life is now hidden with Christ. We put off the old self with its practices and put on the new self, being renewed in knowledge after the image of its creator.</p>`,
    transcript: `<p>Paul calls the Colossians to live out their new identity in Christ by setting their minds on things above and putting on the virtues of Christ.</p>`,
    attachments: [
      { name: "Colossians 3 Study Guide.pdf", url: "#", type: "pdf" },
    ],
    hasQuestions: true,
    hasAnswers: true,
    hasTranscript: true,
  },
  {
    id: "colossians-3b",
    slug: "set-your-minds-on-things-above",
    title: "Set Your Minds on Things Above",
    book: "Colossians",
    passage: "Colossians 3:1-4",
    datePosted: "2025-11-14",
    dateFor: "2025-11-16",
    series: "Sunday Message",
    messenger: "John Doe",
    questions: `<h3>Look at verses 1-2</h3><ul><li>What is the condition: \u201CSince you have been raised with Christ\u201D?</li><li>What does it mean practically to set our hearts on things above?</li></ul><h3>Look at verses 3-4</h3><ul><li>What does it mean that we have died and our life is hidden with Christ?</li><li>What promise does verse 4 hold?</li></ul>`,
    attachments: [
      { name: "Colossians 3:1-4 Study Guide.pdf", url: "#", type: "pdf" },
    ],
    hasQuestions: true,
    hasAnswers: false,
    hasTranscript: false,
  },
  {
    id: "exodus-2",
    slug: "watered-the-flock",
    title: "Watered The Flock",
    book: "Exodus",
    passage: "Exodus 2:11-22",
    datePosted: "2024-01-22",
    dateFor: "2024-01-24",
    series: "Sunday Message",
    messenger: "P. Abraham Kim",
    keyVerse: {
      verse: "Exodus 2:17",
      text: "The shepherds came and drove them away, but Moses stood up and saved them, and watered their flock.",
    },
    questions: `<h3>Look at verses 11-12</h3><ul><li>When Moses grew up, where did he go? What did he see?</li><li>What did he do when he saw this? Why do you think he did this?</li></ul><h3>Look at verses 13-14</h3><ul><li>What did Moses encounter the next day?</li><li>How did the man in the wrong respond to Moses?</li></ul><h3>Look at verses 15-17</h3><ul><li>Who else heard about what Moses did and how did he respond?</li><li>What happened at the well?</li></ul><h3>Reflection</h3><ul><li>Contrast the well and watering the flocks vs. striking down the Egyptian. What do you think Moses learned?</li></ul>`,
    answers: `<p>Moses went out to his people and saw their burdens. He struck down an Egyptian who was beating a Hebrew. The next day, a Hebrew man rejected Moses\u2019 authority. Pharaoh sought to kill Moses, so he fled to Midian. At a well, Moses helped Reuel\u2019s daughters and watered their flock. God was training Moses to be a shepherd.</p>`,
    transcript: `<p>Moses tried to help his people with his own strength by striking down the Egyptian. But God trained him through the experience of shepherding at the well in Midian, teaching him that human strength cannot achieve God\u2019s righteousness.</p>`,
    attachments: [
      { name: "Exodus 2 Study Guide.pdf", url: "#", type: "pdf" },
      { name: "Supplemental Map.png", url: "#", type: "image" },
    ],
    hasQuestions: true,
    hasAnswers: true,
    hasTranscript: true,
  },
];
