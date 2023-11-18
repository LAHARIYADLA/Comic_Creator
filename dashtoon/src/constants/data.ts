import { BubbleType } from "@/lib/interfaces"

export const comicSteps = [
  "Begin your comic creation by clicking the 'Add a comic' button.",
  "Generate an image based on your provided prompt to kickstart your comic.",
  "Add dialogue and captions to your comic by entering text for the speech bubbles.",
  "Choose the desired speech bubble type from the available options.",
  "Arrange and position the speech bubbles on your comic card as per your preference.",
  "Perfect the composition of your comic by adjusting the placement to your liking.",
  "Experience the joy of using the comic creator app."
];


export const bubbleType: BubbleType[] = [
    {
      id: 0,
      val: "Speech bubble pointing left",
      type: "left",
    },
    {
      id: 1,
      val: "Speech bubble pointing right",
      type: "right",
    },
    {
      id: 2,
      val: "Thinking bubble pointing left",
      type: "thinkLeft",
    },
    {
      id: 3,
      val: "Thinking bubble pointing right",
      type: "thinkRight",
    },
  ];
  