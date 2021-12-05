import React from "react";
import { Link } from "react-router-dom";

const text = `So it's two weeks from prom and you don't have a date. What are you going to do. Or maybe you have a job interview for that dream job and you really want to win the employer over. But how do you make sn the employer over. But how do you make sure the like you. Well there's actually a very simple solution and it's called not for you want to be. Not too you wahose someone else wants you to be. For thont to be twins you almost instantly into whose someone else wants you to be. For those last-minute date fiasco's important job interviews awkward meet the famihis product can come in handy in a multitulies you name it. Send me say you should always be who you are but take it from me this product can come in handy in a multitude of situation. All you have to trying to impress into the machine and how
do to a set interview have the family fall in love with you or get that date. Is simply program the name of the person you're trying to impress into the machinal filter for those boys who seem to lack e and how long you'll be with them. And out pops a pill and within 20 minutes. You'll be their favorite person in the world. This pill carefully works to instaFor short period of time. Do you want to bll a mental filter for those boys who seem to lack one. Bring the quiet girl out of her shell. Or quiet the incessant talker. Nothing else to make you so instay company that's brought you such productsntly pleasing to those people you have to impress. For short period of time. Do you want to be as recommended by 4 out of 10 marriage counselors. And 9 out of t. I can change your personality. Just lik
10 mother-in-law. Now he wants to be is brought to you by who would want to be you. The family company that's brought you such products as thanks. Hair dye andally change who you are. However unlike ou concealer. Who would want to be you was turning the expertise they possess and changing your physical exterior into a fantastic product. I can change your perinexpensive studies. You can be sure and nsonality. Just like spanx and concealer don't actually get rid of that extra chub you've got or that's it you just can't stop thinking about. Not who you want  of being not who you want to be. Do you w
to be doesn't actually change who you are. However unlike our other products that turn your interview the outwards. Do you want to beat turns your outer beauty in words. After years of laboratory research. Careful test inexpensive studies. You can be sure and not who you want to be. Subtly changes your personality. But never fails to return you back to normal. You can be who you want to be. After you've had your fill of being not who you want to be. Do you want to be is not recommended for people with multiple personality disorder. Now do you want to be when you feel like you're just not good enough. Thank you.`;
export default function Result() {
  return (
    <div>
      <h1>YOU DID ITTTT</h1>;<p>{text}</p>
      <Link to="/Home">
        <button className="btn m-4 btn-primary btn-lg">home page</button>
      </Link>
    </div>
  );
}
