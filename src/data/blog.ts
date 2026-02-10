export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: 'inspiration' | 'mental-health' | 'history' | 'resources';
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'women-breaking-barriers-2024-2025',
    title: 'Women Breaking Barriers: 15 Inspiring Achievements from 2024-2025',
    excerpt: 'From the Olympics to the boardroom, women around the world continue to shatter glass ceilings and redefine what\'s possible. Here are the stories that inspired us most.',
    category: 'inspiration',
    author: 'SHEROCIOUS Team',
    date: '2025-02-01',
    readTime: '8 min read',
    image: '/images/blog/women-breaking-barriers.jpg',
    content: `
## The Year Women Rewrote the Record Books

2024 and 2025 have been landmark years for women's achievements across every field imaginable. From historic Olympic performances to groundbreaking scientific discoveries, women continue to prove that barriers are meant to be broken.

### Sports: Shattering Records and Expectations

**Simone Biles** returned to the Olympics in Paris 2024 and reminded the world why she's considered the greatest gymnast of all time. At 27, she won three gold medals and a silver, bringing her total Olympic medal count to 11—the most decorated American gymnast in history.

**Sha'Carri Richardson** silenced her critics with a stunning 100m gold medal in Paris, becoming the fastest woman in the world with a time of 10.72 seconds.

**Caitlin Clark** transformed women's basketball, breaking the NCAA all-time scoring record and bringing unprecedented attention to the WNBA. Her rookie season drew record crowds and TV ratings, proving that women's sports can command the same excitement as men's.

### Business & Technology

**Mary Barra**, CEO of General Motors, led the company through its most successful electric vehicle launch to date, cementing her position as one of the most influential business leaders of our generation.

**Dr. Katalin Karikó** continued her groundbreaking work on mRNA technology, the science behind COVID-19 vaccines, earning continued recognition for research that has saved millions of lives.

**Bianca Bustamante** made motorsport history as the first female in McLaren's Driver Development Programme, opening doors for the next generation of women in racing.

### Science & Exploration

**Christina Koch** and the women of NASA's Artemis program prepared for humanity's return to the Moon, with Koch slated to become the first woman to walk on the lunar surface.

**Prof. Elsie Effah Kaufmann** became the first Ghanaian International Fellow of the Royal Academy of Engineering (UK), inspiring STEM students across Africa.

### What These Stories Teach Us

Every woman on this list faced doubt. Every one of them heard "you can't" before they proved "I can."

Their success didn't come from ignoring their challenges—it came from facing them head-on with resilience, determination, and an unshakeable belief in themselves.

That's what SHEROCIOUS is about. Every affirmation on our socks—"I Am Strong," "I Am Unstoppable," "Badass Goddess"—is a reminder that you carry the same power within you.

---

*What barrier are you breaking today? Share your story with us on Instagram @sherocious*
    `,
  },
  {
    slug: 'women-who-changed-history',
    title: 'Badass Goddesses: 10 Women Who Changed History Forever',
    excerpt: 'Long before hashtags and viral moments, these remarkable women defied expectations and changed the course of history. Their legacies continue to inspire us today.',
    category: 'history',
    author: 'SHEROCIOUS Team',
    date: '2025-01-15',
    readTime: '10 min read',
    image: '/images/blog/women-history.jpg',
    content: `
## The Original Badass Goddesses

History books have long overlooked the contributions of women. But the truth is, women have always been leaders, innovators, and changemakers. Here are 10 women whose courage and determination shaped the world we live in today.

### Harriet Tubman (1822-1913)
**"I freed a thousand slaves. I could have freed a thousand more if only they knew they were slaves."**

Born into slavery, Harriet Tubman escaped and then risked her life repeatedly to lead approximately 70 enslaved people to freedom via the Underground Railroad. During the Civil War, she became the first woman to lead an armed assault, liberating more than 700 slaves.

### Marie Curie (1867-1934)
**"Nothing in life is to be feared, it is only to be understood."**

The first woman to win a Nobel Prize—and the only person to win Nobel Prizes in two different sciences (Physics and Chemistry). Marie Curie's research on radioactivity laid the foundation for modern cancer treatment and nuclear energy.

### Amelia Earhart (1897-1937)
**"The most difficult thing is the decision to act, the rest is merely tenacity."**

The first female aviator to fly solo across the Atlantic Ocean, Amelia Earhart shattered expectations of what women could achieve. Her courage in the face of the unknown continues to inspire adventurers today.

### Rosa Parks (1913-2005)
**"I have learned over the years that when one's mind is made up, this diminishes fear."**

When Rosa Parks refused to give up her seat on a Montgomery bus in 1955, she sparked the Montgomery Bus Boycott and became an international icon of resistance to racial segregation. One act of defiance changed America forever.

### Frida Kahlo (1907-1954)
**"I am my own muse. I am the subject I know best."**

Despite suffering from polio as a child and a devastating bus accident that left her in chronic pain, Frida Kahlo created some of the most powerful and personal art of the 20th century. She turned her pain into beauty and became a symbol of strength and authenticity.

### Malala Yousafzai (1997-Present)
**"One child, one teacher, one book, one pen can change the world."**

Shot by the Taliban for advocating girls' education, Malala survived and became the youngest Nobel Prize laureate. She continues to fight for education rights worldwide through the Malala Fund.

### Katherine Johnson (1918-2020)
**"I counted everything. I counted the steps to the road, the steps up to church, the number of dishes and silverware I washed."**

The NASA mathematician whose calculations were critical to the success of the first American crewed spaceflights. Her story, told in "Hidden Figures," revealed the essential contributions of Black women to the space program.

### Ruth Bader Ginsburg (1933-2020)
**"Women belong in all places where decisions are being made."**

As a Supreme Court Justice, RBG fought tirelessly for gender equality and women's rights. Her dissents became rallying cries for justice, and her legacy continues to inspire legal advocates worldwide.

### Wangari Maathai (1940-2011)
**"Until you dig a hole, you plant a tree, you water it and make it survive, you haven't done a thing."**

The first African woman to receive the Nobel Peace Prize, Wangari Maathai founded the Green Belt Movement, which has planted over 51 million trees in Kenya and empowered countless women through environmental conservation.

### Serena Williams (1981-Present)
**"I really think a champion is defined not by their wins but by how they can recover when they fall."**

With 23 Grand Slam singles titles, Serena Williams is considered the greatest tennis player of all time. But beyond her athletic achievements, she's been a vocal advocate for equal pay, maternal health, and Black women's rights.

---

## The Common Thread

What connects all these women? They refused to accept "no" as a final answer. They faced opposition, discrimination, and doubt—but they kept going.

That's the spirit of SHEROCIOUS. When you wear our affirmations, you're connecting to a lineage of badass goddesses who came before you and paved the way.

*You are the next chapter in this story.*
    `,
  },
  {
    slug: 'mental-health-resources-mothers-women',
    title: 'You Are Not Alone: Mental Health Resources for Mothers and Women',
    excerpt: 'Maternal mental health affects 1 in 5 mothers. Here are real resources, real stories, and real support for the journey through motherhood and beyond.',
    category: 'mental-health',
    author: 'SHEROCIOUS Team',
    date: '2025-02-05',
    readTime: '7 min read',
    image: '/images/blog/mental-health.jpg',
    content: `
## Breaking the Silence on Maternal Mental Health

One in five mothers experiences a mental health condition during pregnancy or in the year after giving birth. Yet too many suffer in silence, believing they should just "push through" or that asking for help makes them a bad mother.

**It doesn't. Asking for help makes you a strong mother.**

This is why SHEROCIOUS donates 5% of every purchase to maternal mental health organizations. Because every mother deserves support.

### The Reality of Maternal Mental Health

**Postpartum Depression** affects approximately 1 in 7 new mothers. Symptoms can include:
- Persistent sadness or hopelessness
- Difficulty bonding with your baby
- Withdrawing from family and friends
- Overwhelming fatigue
- Changes in appetite or sleep (beyond normal newborn disruption)
- Thoughts of harming yourself or your baby

**Postpartum Anxiety** is equally common but less discussed. It can manifest as:
- Constant worry that something bad will happen
- Racing thoughts
- Inability to sit still or relax
- Physical symptoms like dizziness or nausea
- Disrupted sleep even when baby is sleeping

**You are not weak. You are not failing. You are experiencing a medical condition that is treatable.**

### Real Stories of Recovery

**Maria, 34, California:**
"I didn't recognize myself after my second child was born. I thought I was just tired. It took my husband saying 'this isn't you' for me to finally talk to my doctor. Medication and therapy gave me my life back. I wish I'd asked for help sooner."

**Jasmine, 28, Texas:**
"The anxiety was crushing. I couldn't stop checking if my baby was breathing. I'd check 20 times a night. My support group helped me realize I wasn't crazy—I was sick, and I could get better. Now I mentor other new moms going through the same thing."

**Priya, 31, New York:**
"In my culture, we don't talk about mental health. My mother told me to just be grateful. But I couldn't feel anything—not joy, not love, nothing. Finding a therapist who understood my background changed everything. Now I talk about PPD openly to help other South Asian moms."

### Resources That Can Help

**Crisis Support (24/7):**
- **National Maternal Mental Health Hotline:** 1-833-9-HELP4MOMS (1-833-943-5746)
- **Postpartum Support International:** 1-800-944-4773
- **Crisis Text Line:** Text HOME to 741741
- **National Suicide Prevention Lifeline:** 988

**Organizations Doing Vital Work:**
- **Postpartum Support International (PSI)** — postpartum.net
- **2020 Mom** — 2020mom.org
- **The Blue Dot Project** — thebluedotproject.org
- **Shades of Blue Project** (supporting Black mothers) — shadesofblueproject.org
- **Maternal Mental Health NOW** — maternalmentalhealthnow.org

**Finding a Therapist:**
- **Psychology Today's Therapist Finder** — Filter by "postpartum" specialty
- **Open Path Collective** — Affordable therapy ($30-$80/session)
- **Postpartum Support International Provider Directory**

### What You Can Do Today

**If you're struggling:**
1. Tell someone—your partner, a friend, your doctor
2. Call the Maternal Mental Health Hotline: 1-833-943-5746
3. Know that treatment works and you will feel better

**If you know a new mother:**
1. Check in regularly and listen without judgment
2. Offer specific help: "I'm bringing dinner Tuesday"
3. Learn the signs and gently encourage professional support
4. Remind her that getting help is strength, not weakness

### Our Commitment

SHEROCIOUS exists to remind women of their strength. But true strength includes knowing when to ask for help.

That's why 5% of every purchase supports maternal mental health organizations. When you buy our socks, you're not just treating yourself—you're helping another mother get the support she needs.

**You are not alone. You are strong. You will get through this.**

---

*If this article helped you, please share it. You never know who might need to hear these words today.*
    `,
  },
];

export const getBlogPosts = () => blogPosts;
export const getBlogPostBySlug = (slug: string) => blogPosts.find(p => p.slug === slug);
export const getBlogPostsByCategory = (category: BlogPost['category']) => 
  blogPosts.filter(p => p.category === category);
