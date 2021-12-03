const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A truly rich life contains love and art in abundance.",
    "Accept something that you cannot change, and you will feel better.",
    "Adventure can be real happiness.",
    "Don’t just spend time. Invest it.",
    "Every wise man started out by asking many questions."
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/horoscope/aries", (req, res) =>{
  const fortune = 'It’s a marathon, Aries, not a sprint! Take a break from that all-consuming project today, as the Sagittarius moon forms a cozy alignment with healing Chiron. If you’re on the verge of burnout, that’s a sign that you could benefit from a little self-care. No need to work through the weekend. Taking a step back could also help you gain a valuable new perspective on your efforts. This evening, find a way to unwind and truly disconnect from work. Draw yourself a soothing bubble bath, watch a VOD movie that’s an awards season contender, or bake a test batch of a healthy-ish holiday cooke recipe.'

  res.status(200).send(fortune)
})
app.get("/api/horoscope/taurus", (req, res) =>{
  const fortune ="Self-care is the name of the game today, Taurus, as the moon gets cozy with healer-feeler Chiron. Do whatever it takes to carve out some much needed “me time,” even if that means writing out a few rainchecks. True friends will understand if you need to bail on evening plans in order to recharge your depleted batteries. And if they don’t? Maybe they aren’t the real allies you thought. Regardless, don’t let anyone pressure you into doing something you don’t want to do. That being said, if you’re longing for a little socializing, plan a relaxed eve at home base. Friday movie night, anyone?"

  res.status(200).send(fortune)
})
app.get("/api/horoscope/gemini", (req, res) =>{
  const fortune ="If you’re pushing hard to meet an end-of-year deadline, joining forces with a savvy collaborator could help you get to that goal. Already have your dream team in place? Do a “wellness check” with your crew before you begin that last push to the finish line. A heartfelt alignment of the moon and soothsayer Chiron will help you iron out any miscommunications. If you discover unrest among your team, work to address the underlying issues before moving forward with your master plan. Positive reinforcement will boost team morale considerably, so don’t be shy about piling on the praise!"

  res.status(200).send(fortune)
})
app.get("/api/horoscope/cancer", (req, res) =>{
  const fortune ="It’s all about moderation, Cancer. If you’ve been trying to keep holiday season temptations at bay by depriving yourself, throw away that recipe. Today’s stars help you arrive at a more balanced wellness routine, as the moon in your vitality-boosting sixth house aligns with the healing comet Chiron. Stock your cupboards with healthier seasonal treats. For example: Could you swap out that heavy cream eggnog for a healthy “almond nog” substitute? Bring some joy to your fitness routine. How about doing a few lunges and squats while you listen to Christmas music?"

  res.status(200).send(fortune)
})
app.get("/api/horoscope/leo", (req, res) =>{
  const fortune ="People will find you irresistible under today’s magnetic skies, as the coquettish Sagittarius moon aligns with healing comet Chiron. Be careful how you wield your seductive powers and reserve the flirtatious banter for people who truly interest you. If you’re on the receiving end of someone’s hot-and-cold routine, stop playing into this confusing dynamic. Take a step back from the situation and view it through an objective lens. Is there a real future with this person or are they just a serial heart-breaker?"

  res.status(200).send(fortune)
})
app.get("/api/horoscope/virgo", (req, res) =>{
  const fortune ="Keep things “inner circle only” when it comes to sharing your deepest feelings today. That’s not to say new friends can’t be valuable in their own right! In fact, today’s starmap can help draw certain individuals deeper into your personal orbit, as the moon aligns with healer-feeler Chiron. Diving into heartfelt conversation with someone can help you discern whether or not they deserve a place in your core squad. Just resist the urge to overshare before you’ve determined if this person is trustworthy. And remember: That type of intimate rapport can take time to build. Allow your relationship to develop organically."

  res.status(200).send(fortune)
})
app.get("/api/horoscope/libra", (req, res) =>{
  const fortune ="Today you may learn that someone’s been undermining your efforts, saying one thing to your face and a completely different thing behind your back. While this betrayal may hurt, resist the urge to lash out impulsively. Instead, see how this situation develops over time. It’s possible that this person is simply trying to protect your feelings or is avoiding a hard-to-talk-about issue. If this is the case, pull them aside for a candid but diplomatic chat. Perhaps they’re simply scared to tell you the truth because they’re afraid of how you’ll react. This could be a sign that you need to be more graceful when absorbing bad news. Don’t kill the messenger!"

  res.status(200).send(fortune)
})
app.get("/api/horoscope/scorpio", (req, res) =>{
  const fortune ="It could be wildly difficult to focus on your work today, as the moon aligns with “wounded healer” comet Chiron. But that pressing deadline waits for no one, which means that you must do whatever it takes to reach the finish line in time. Power down your phone to avoid social media distraction, hang a “do not disturb” sign on your office door, and decline any calls from your squad’s resident drama queen. The slightest distraction could derail your entire day, so stay strict when it comes to avoidance. Once you’ve finished all your tasks, THEN you can reward yourself by having a fabulous night on the town. Bonus: This starmap could inspire a power player to come out of the woodwork and help you take a project to the next level."

  res.status(200).send(fortune)
})
app.get("/api/horoscope/sagittarius", (req, res) =>{
  const fortune ="Follow your bliss, Sag! Your spontaneous spirit comes out to play under today’s starmap, as the moon in your sign joins forces with healer-feeler Chiron. If you can swing it, wrap up your day  early and head off on an impromptu adventure with your favorite companions! Go explore a new restaurant or check out a show at a local spot. Just one warning: Be sure to give your crew a heads-up if you want to change your plans last-minute. They have a right to chime in as well!"

  res.status(200).send(fortune)
})
app.get("/api/horoscope/capricorn", (req, res) =>{
  const fortune ="Don’t get trapped by your martyr complex, Capricorn. Sacrifice is not a noble act  if it constantly comes at the expense of your own needs. And if it breeds resentment or passive-aggressive backlash, that’s even worse. Someone could attempt to take advantage of your generosity under today’s chaotic moon-Chiron trine. Before you rush to their rescue, ask yourself: Is this a problem that this person could solve on their own? Gently direct them to the tools they need to take care of this themselves. Sure they may bristle at your newly-established boundary, but don’t give in to any guilt trips. You deserve to have YOUR needs met too!"

  res.status(200).send(fortune)
})
app.get("/api/horoscope/aquarius", (req, res) =>{
  const fortune ="Be sensitive to those around you, Aquarius, especially if there’s a potential for your words or actions to hurt others. For example, if you know that someone in your circle is struggling with a deep-seated issue, avoid bringing up their triggers in a group conversation. Or maybe you’re trying to get everyone on board with a shared expense like a group vacation. There are ways to do this with grace and dignity for all. For example, if someone doesn’t have the funds to cover their portion of your preferred vacation house, suggest that they take the smaller room and pay a lesser amount. That way, everyone gets what they want and you don’t need to sacrifice the quality of your own experience."

  res.status(200).send(fortune)
})
app.get("/api/horoscope/pisces", (req, res) =>{
  const fortune ="You’re a natural born leader, Pisces, so don’t let a case of imposter syndrome prevent you from pursuing your dream. Instead of balking at that amazing opportunity just because you’re a little scared, employ a “fake it ‘till you make it” strategy. Once you’re actually wearing that crown, you’ll realize that it’s a perfect fit! Also, make sure that you’ve got a great team of collaborators backing you up. So much of your success hinges on surrounding yourself with brilliant minds!"

  res.status(200).send(fortune)
})











app.listen(4000, () => console.log("Server running on 4000"));
