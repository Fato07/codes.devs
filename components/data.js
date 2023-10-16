import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "You will get access to",
  // desc: "This section provides an overview of the contents of the ebook. It includes detailed questions and answers, pre-interview checklists, and post-interview strategies.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Master the Technical Interview",
      desc: "With 100+ detailed questions and answers covering HTML, CSS, Javascript, and general web development. Plus, some invaluable non-technical insights we couldn’t resist sharing!",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Pre-Interview Power-up:",
      desc: "Your essential checklist before the big day. From resume optimization to the art of curating an outstanding portfolio, we've got you covered.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Post-Interview Mastery",
      desc: "No more silence after an interview. Craft thank-you notes, emails, and follow-up strategies that linger in a hiring manager's memory.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Showcase Your Brilliance:",
      desc: "Tips and techniques to effectively present your skills, weave compelling stories, and highlight achievements.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Communicate Your Value",
      desc: "Seamlessly fit into your dream role. Discover how to resonate with company culture and prove that you're the perfect match",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Project Ideas to Impress",
      desc: "Dive into real-world projects that not only enrich your portfolio but also set you apart in the competitive landscape.",
      icon: <SunIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };
