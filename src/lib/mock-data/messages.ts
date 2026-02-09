import type { Message } from "@/lib/types/message";

/* ================================================================
 * MOCK DATA — Sunday Messages
 * In production, this data comes from PostgreSQL via CMS API.
 *
 * Each message has:
 *  - metadata (title, speaker, series, passage, date, duration)
 *  - YouTube video ID for embedding/thumbnail
 *  - rawTranscript (always present — prepared/written version)
 *  - liveTranscript (optional — auto-generated from audio)
 *  - optional link to related bible study
 * ================================================================ */

export function getMessageBySlug(slug: string): Message | undefined {
  return MOCK_MESSAGES.find((m) => m.slug === slug);
}

export const MOCK_MESSAGES: Message[] = [
  {
    id: "msg-1",
    slug: "do-you-truly-love-me-message",
    title: "Do You Truly Love Me More Than These?",
    youtubeId: "O1oAoyIH_qQ",
    speaker: "P. William",
    series: "Sunday Message",
    passage: "John 21:1-25",
    dateFor: "2026-04-12",
    description:
      "Jesus restores Peter after his denial and calls him to feed his sheep — a message of grace, love, and mission.",
    rawTranscript: `<p>Today's passage is our final Easter/resurrection message. Jesus again calls Peter to love him by feeding his sheep, and to follow him.</p><p>First, we can learn about the kind of love Jesus has; Jesus invited his disciples to breakfast (1-14). He prepared a fire with fish and bread for them, showing his unchanging love.</p><p>Second, Jesus asked Peter if he truly loved him (15-17). Three times to correspond to Peter's three denials, a painful but necessary surgery to heal Peter's heart.</p><p>Third, follow me (18-25). The call to follow is personal. We follow based on his love and calling, not based on other people.</p>`,
    liveTranscript: `<p>[Auto-generated] Good morning everyone. Today we come to the final chapter of the Gospel of John, chapter 21. Jesus appears to his disciples by the Sea of Tiberias after his resurrection. Peter, who had denied Jesus three times, is about to have a very personal encounter with the risen Lord...</p>`,
    relatedStudyId: "do-you-truly-love-me",
    duration: "42:15",
  },
  {
    id: "msg-2",
    slug: "the-bread-of-life",
    title: "The Bread of Life",
    youtubeId: "O1oAoyIH_qQ",
    speaker: "P. William",
    series: "Sunday Message",
    passage: "John 6:22-59",
    dateFor: "2026-04-05",
    description:
      "Jesus declares himself the bread of life — the only source of true spiritual nourishment and eternal satisfaction.",
    rawTranscript: `<p>In John chapter 6, after feeding the five thousand, Jesus confronts the crowd about their true motivations. They came looking for more bread, but Jesus offers something far greater.</p><p>He says, "I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty." This is one of the seven "I am" statements in John's Gospel.</p><p>The bread of life is not about physical satisfaction — it's about spiritual life that only Jesus can give.</p>`,
    liveTranscript: `<p>[Auto-generated] Good morning. Today we continue our study through the Gospel of John. We come to one of the most profound declarations Jesus ever made. After the miracle of feeding five thousand people, the crowd follows Jesus across the lake...</p>`,
    relatedStudyId: "the-bread-of-life",
    duration: "38:47",
  },
  {
    id: "msg-3",
    slug: "walking-on-water",
    title: "Walking on Water",
    youtubeId: "O1oAoyIH_qQ",
    speaker: "P. William",
    series: "Sunday Message",
    passage: "John 6:16-21",
    dateFor: "2026-03-29",
    description:
      "When the disciples were terrified in the storm, Jesus came to them walking on the water and said, 'It is I; don't be afraid.'",
    rawTranscript: `<p>The disciples found themselves in a storm on the Sea of Galilee. It was dark, the wind was strong, and they had rowed three or four miles. Then they saw Jesus walking on the water.</p><p>Jesus said to them, "It is I; don't be afraid." And immediately the boat reached the shore where they were heading.</p><p>In our storms of life, Jesus comes to us. He is sovereign over nature, over our circumstances, and over our fears.</p>`,
    duration: "35:22",
  },
  {
    id: "msg-4",
    slug: "feeding-the-five-thousand",
    title: "Feeding the Five Thousand",
    youtubeId: "O1oAoyIH_qQ",
    speaker: "P. William",
    series: "Sunday Message",
    passage: "John 6:1-15",
    dateFor: "2026-03-22",
    description:
      "Jesus performs one of his greatest miracles — feeding five thousand with five loaves and two fish — revealing his power and compassion.",
    rawTranscript: `<p>John chapter 6 begins with one of the most well-known miracles. A large crowd followed Jesus because they saw the signs he performed on the sick. Jesus asked Philip, "Where shall we buy bread for these people to eat?"</p><p>Andrew found a boy with five small barley loaves and two small fish. Jesus took the loaves, gave thanks, and distributed to those who were seated. Everyone ate and was satisfied, with twelve baskets of leftovers.</p><p>Jesus can take our small offerings and multiply them beyond imagination.</p>`,
    liveTranscript: `<p>[Auto-generated] Good morning church. We are in John chapter 6 today, one of the most familiar passages in the entire Bible. The feeding of the five thousand is the only miracle recorded in all four Gospels...</p>`,
    relatedStudyId: "feeding-the-five-thousand",
    duration: "40:08",
  },
  {
    id: "msg-5",
    slug: "the-healing-at-bethesda",
    title: "The Healing at the Pool of Bethesda",
    youtubeId: "O1oAoyIH_qQ",
    speaker: "P. William",
    series: "Sunday Message",
    passage: "John 5:1-18",
    dateFor: "2026-03-15",
    description:
      "Jesus heals a man who had been an invalid for 38 years, revealing his authority over sickness and the Sabbath.",
    rawTranscript: `<p>At the pool of Bethesda, there lay a great number of disabled people — the blind, the lame, the paralyzed. One man had been there for 38 years. Jesus asked him, "Do you want to get well?"</p><p>The man made excuses, but Jesus simply said, "Get up! Pick up your mat and walk." And at once the man was cured.</p><p>Jesus doesn't ask us to understand everything. He asks us to trust and obey.</p>`,
    duration: "37:55",
  },
  {
    id: "msg-6",
    slug: "living-water",
    title: "Living Water",
    youtubeId: "O1oAoyIH_qQ",
    speaker: "P. William",
    series: "Sunday Message",
    passage: "John 4:1-42",
    dateFor: "2026-03-08",
    description:
      "Jesus offers living water to a Samaritan woman at the well — breaking social barriers and revealing the gift of eternal life.",
    rawTranscript: `<p>Jesus, tired from his journey, sat down by Jacob's well. A Samaritan woman came to draw water. Jesus said to her, "Will you give me a drink?"</p><p>This was scandalous — Jews didn't associate with Samaritans, and men didn't speak to women in public. But Jesus broke every social barrier to reach this woman.</p><p>"Everyone who drinks this water will be thirsty again, but whoever drinks the water I give them will never thirst. Indeed, the water I give them will become in them a spring of water welling up to eternal life."</p>`,
    liveTranscript: `<p>[Auto-generated] Today we come to one of the most beautiful encounters in the entire Gospel of John. Jesus is traveling from Judea to Galilee and he "had to go through Samaria." This was unusual because most Jews would take a detour to avoid Samaria...</p>`,
    duration: "44:30",
  },
  {
    id: "msg-7",
    slug: "you-must-be-born-again",
    title: "You Must Be Born Again",
    youtubeId: "O1oAoyIH_qQ",
    speaker: "P. William",
    series: "Sunday Message",
    passage: "John 3:1-21",
    dateFor: "2026-03-01",
    description:
      "Nicodemus comes to Jesus by night and learns about the necessity of being born again — the heart of the Gospel message.",
    rawTranscript: `<p>Nicodemus was a Pharisee, a member of the Jewish ruling council. He came to Jesus at night and said, "Rabbi, we know you are a teacher who has come from God."</p><p>Jesus replied, "Very truly I tell you, no one can see the kingdom of God unless they are born again." Nicodemus was confused — "How can someone be born when they are old?"</p><p>Jesus explained that being born again is a spiritual birth by the Holy Spirit. And then he spoke the most famous verse in all of Scripture: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."</p>`,
    duration: "41:12",
  },
  {
    id: "msg-8",
    slug: "the-wedding-at-cana",
    title: "The Wedding at Cana",
    youtubeId: "O1oAoyIH_qQ",
    speaker: "P. William",
    series: "Sunday Message",
    passage: "John 2:1-12",
    dateFor: "2026-02-22",
    description:
      "Jesus performs his first miracle at a wedding, turning water into wine — revealing his glory and the abundance of his grace.",
    rawTranscript: `<p>On the third day, a wedding took place at Cana in Galilee. Jesus' mother was there, and Jesus and his disciples were also invited. When the wine ran out, Mary said to Jesus, "They have no more wine."</p><p>Jesus told the servants, "Fill the jars with water." Then he told them, "Now draw some out and take it to the master of the banquet." The master tasted it and was amazed — the best wine had been saved for last.</p><p>This first sign reveals that Jesus brings abundance where there is lack, joy where there is shame, and glory where there is need.</p>`,
    liveTranscript: `<p>[Auto-generated] Good morning everyone. We continue our journey through the Gospel of John. Today we come to chapter 2, the wedding at Cana, where Jesus performs his very first miracle...</p>`,
    duration: "36:40",
  },
  {
    id: "msg-9",
    slug: "the-lamb-of-god",
    title: "The Lamb of God",
    youtubeId: "O1oAoyIH_qQ",
    speaker: "P. William",
    series: "Sunday Message",
    passage: "John 1:29-42",
    dateFor: "2026-02-15",
    description:
      "John the Baptist points to Jesus as the Lamb of God who takes away the sin of the world — the foundation of our faith.",
    rawTranscript: `<p>The next day John saw Jesus coming toward him and said, "Look, the Lamb of God, who takes away the sin of the world!"</p><p>This title connects Jesus to the entire Old Testament sacrificial system. The lambs sacrificed in the temple were temporary. But Jesus is the final, perfect sacrifice.</p><p>Two of John's disciples heard this and followed Jesus. When Jesus turned and asked them, "What do you want?" they said, "Rabbi, where are you staying?" Jesus replied, "Come, and you will see."</p>`,
    duration: "39:15",
  },
  {
    id: "msg-10",
    slug: "in-the-beginning-was-the-word",
    title: "In the Beginning Was the Word",
    youtubeId: "O1oAoyIH_qQ",
    speaker: "P. William",
    series: "Sunday Message",
    passage: "John 1:1-18",
    dateFor: "2026-02-08",
    description:
      "The prologue of John's Gospel — Jesus is the eternal Word of God, the light of the world, who became flesh and dwelt among us.",
    rawTranscript: `<p>"In the beginning was the Word, and the Word was with God, and the Word was God." John opens his Gospel with one of the most profound statements in all of literature.</p><p>Jesus is not just a great teacher or prophet. He is the eternal Word — the very expression of God himself. He was with God from the beginning, and through him all things were made.</p><p>"The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth."</p>`,
    liveTranscript: `<p>[Auto-generated] Good morning church family. Today we begin a new series through the Gospel of John. We start at the very beginning, the prologue, which is one of the most theologically rich passages in all of Scripture...</p>`,
    relatedStudyId: "in-the-beginning-was-the-word",
    duration: "43:50",
  },
  {
    id: "msg-11",
    slug: "light-of-the-world-advent",
    title: "Light of the World",
    youtubeId: "O1oAoyIH_qQ",
    speaker: "P. William",
    series: "Advent 2025",
    passage: "Isaiah 9:2-7",
    dateFor: "2025-12-21",
    description:
      "An Advent message reflecting on Isaiah's prophecy — the people walking in darkness have seen a great light.",
    rawTranscript: `<p>Isaiah prophesied, "The people walking in darkness have seen a great light; on those living in the land of deep darkness a light has dawned."</p><p>In the season of Advent, we wait and prepare for the coming of the Light. Jesus is that light. He came into a world of darkness — sin, suffering, and death — and brought the light of hope, redemption, and eternal life.</p><p>"For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace."</p>`,
    duration: "38:20",
  },
  {
    id: "msg-12",
    slug: "prepare-the-way-advent",
    title: "Prepare the Way",
    youtubeId: "O1oAoyIH_qQ",
    speaker: "P. William",
    series: "Advent 2025",
    passage: "Isaiah 40:1-11",
    dateFor: "2025-12-14",
    description:
      "The second Advent message — comfort my people, and prepare the way of the Lord in the wilderness.",
    rawTranscript: `<p>"Comfort, comfort my people, says your God." Isaiah 40 opens with one of the most tender passages in the Old Testament.</p><p>"A voice of one calling: In the wilderness prepare the way for the Lord; make straight in the desert a highway for our God."</p><p>Advent is a season of preparation. We prepare our hearts for the King. We make straight the crooked paths of our lives. We remove the obstacles that prevent us from fully receiving the gift of Christ.</p>`,
    liveTranscript: `<p>[Auto-generated] Welcome to our second week of Advent. Today we turn to Isaiah chapter 40, one of the most beloved passages in the entire Old Testament. The prophet speaks words of comfort to a people who have experienced great suffering...</p>`,
    duration: "36:15",
  },
  {
    id: "msg-13",
    slug: "the-cost-of-discipleship",
    title: "The Cost of Discipleship",
    youtubeId: "O1oAoyIH_qQ",
    speaker: "P. Abraham Kim",
    series: "Sunday Message",
    passage: "Luke 14:25-33",
    dateFor: "2026-01-18",
    description:
      "What does it truly mean to follow Jesus? We explore the radical call to prioritize Christ above all else.",
    rawTranscript: `<p>Large crowds were traveling with Jesus, and turning to them he said: "If anyone comes to me and does not hate father and mother, wife and children, brothers and sisters — yes, even their own life — such a person cannot be my disciple."</p><p>Jesus is not calling us to literal hatred. He's using hyperbole to make a point: our love for him must be so great that all other loves seem like hate by comparison.</p><p>"Whoever does not carry their cross and follow me cannot be my disciple." The cross is not an inconvenience — it's a death sentence. Following Jesus costs everything, but it gains everything that matters.</p>`,
    duration: "41:45",
  },
  {
    id: "msg-14",
    slug: "christmas-special-emmanuel",
    title: "Emmanuel — God With Us",
    youtubeId: "O1oAoyIH_qQ",
    speaker: "P. William",
    series: "Christmas Special",
    passage: "Matthew 1:18-25",
    dateFor: "2025-12-25",
    description:
      "A Christmas Day message on the miracle of the incarnation — God chose to dwell among us.",
    rawTranscript: `<p>The angel said to Joseph, "She will give birth to a son, and you are to give him the name Jesus, because he will save his people from their sins."</p><p>Matthew tells us this fulfilled Isaiah's prophecy: "The virgin will conceive and give birth to a son, and they will call him Immanuel — which means 'God with us.'"</p><p>Christmas is not just about a baby in a manger. It's about the infinite God choosing to become finite. The Creator entering his creation. The eternal Word becoming flesh. God is with us — Emmanuel.</p>`,
    liveTranscript: `<p>[Auto-generated] Merry Christmas everyone. What a joy it is to gather together on this special day to celebrate the birth of our Lord and Savior Jesus Christ. Today we look at Matthew's account of the birth of Jesus...</p>`,
    duration: "35:00",
  },
  {
    id: "msg-15",
    slug: "spring-conference-keynote",
    title: "Go and Make Disciples",
    youtubeId: "O1oAoyIH_qQ",
    speaker: "P. Kevin Albright",
    series: "Conference",
    passage: "Matthew 28:16-20",
    dateFor: "2026-01-25",
    description:
      "Spring conference keynote on the Great Commission — Jesus sends us out to make disciples of all nations.",
    rawTranscript: `<p>Then Jesus came to them and said, "All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you."</p><p>The Great Commission is not just for missionaries overseas. It's for every believer, in every context, in every generation. We are all called to go — whether across the street or across the ocean.</p><p>"And surely I am with you always, to the very end of the age." This is the promise that sustains us in the mission.</p>`,
    duration: "48:30",
  },
];
