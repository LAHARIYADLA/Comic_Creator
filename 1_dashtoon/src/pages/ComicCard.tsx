// ... (other imports)
"use client";
import { lazy, Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/seperator";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bubble,
  BubbleContent,
  BubbleDescription,
} from "@/components/ui/bubble";
import { saveAs } from 'file-saver';
import Draggable from "react-draggable";
import { ComicData } from "@/lib/interfaces";
import Shimmer from "@/components/Shimmer";
import InstructionDialog from "@/components/InstructionDialog";
import Spinner from "@/components/ui/spinner";
import { BookText, PlusSquare } from "lucide-react";
const SheetForm = lazy(() => import("@/components/SheetForm"));

// Import saveAs from 'file-saver';


// ... (other imports)

// Define the ComicCard component with the download button
const ComicCard = ({ card }) => {
  const handleDownload = () => {
    const imageUrl = card.img;

    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, 'comic_image.png');
      })
      .catch((error) => {
        console.error('Error downloading image:', error);
      });
  };

  return (
    <Card key={card.id} className="md:w-[100%/3] lg:w-[100%/5] relative">
      <CardContent className="h-[280px] p-[0px] bg-no-repeat">
        <img className="h-full w-full bg-no-repeat object-cover rounded-lg" src={card.img} alt={`Comic ${card.id}`} />
      </CardContent>
      {card.text !== "" && (
        <Draggable bounds="parent">
          <Bubble className="absolute left-0 top-0" variant={card.bubble}>
            <BubbleContent>
              <BubbleDescription>{card.text}</BubbleDescription>
            </BubbleContent>
          </Bubble>
        </Draggable>
      )}
      <button onClick={handleDownload} className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded">
        Download
      </button>
    </Card>
  );
};
export default ComicCard;
