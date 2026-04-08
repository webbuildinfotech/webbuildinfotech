import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Jonathan Yombo",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    quote:
      "Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.",
  },
  {
    name: "Yves Kalume",
    role: "GDE - Android",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=300&auto=format&fit=crop",
    quote:
      "With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Tailus.",
  },
  {
    name: "Yucel Faruksahan",
    role: "Tailkits Creator",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
    quote:
      "Great work on tailfolio template. This is one of the best personal website that I have seen so far :)",
  },
  {
    name: "Anonymous author",
    role: "Doing something",
    image:
      "https://images.unsplash.com/photo-1542204625-de293a06df1f?q=80&w=300&auto=format&fit=crop",
    quote:
      "I am really new to Tailwind and I want to give a go to make some page on my own. I searched a lot of hero pages and blocks online. However, most of them are not giving me a clear view or needed some HTML/CSS coding background to make some changes from the original or too expensive to have.",
  },
  {
    name: "Shekinah Tshiokufila",
    role: "Senior Software Engineer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    quote:
      "Tailus is redefining the standard of web design, with these blocks it provides an easy and efficient way for those who love beauty but may lack the time to implement it.",
  },
  {
    name: "Oketa Fred",
    role: "Fullstack Developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    quote:
      "I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.",
  },
  {
    name: "Zeki",
    role: "Founder of ChatExtend",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop",
    quote:
      "Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility.",
  },
  {
    name: "Joseph Kitheka",
    role: "Fullstack Developer",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=300&auto=format&fit=crop",
    quote:
      "Tailus has transformed the way I develop web applications. Their extensive collection of UI components has significantly accelerated my workflow.",
  },
  {
    name: "Khatab Wedaa",
    role: "MerakiUI Creator",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=300&auto=format&fit=crop",
    quote:
      "Tailus is an elegant, clean, and responsive set of Tailwind CSS components and is very helpful to start fast with your project.",
  },
  {
    name: "Rodrigo Aguilar",
    role: "TailwindAwesome Creator",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=300&auto=format&fit=crop",
    quote:
      "I love Tailus. The component blocks are well-structured, simple to use, and beautifully designed.",
  },
  {
    name: "Eric Ampire",
    role: "Mobile Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300&auto=format&fit=crop",
    quote:
      "Tailus templates are easy to use, customizable, and responsive. I highly recommend them to anyone looking to create a website fast.",
  },
  {
    name: "Roland Tubonge",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=300&auto=format&fit=crop",
    quote:
      "Tailus is so well designed that even with very little web design knowledge you can do miracles.",
  },
];

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3));

export default function WallOfLoveSection() {
  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-title text-3xl font-semibold">Loved by the Community</h2>
            <p className="text-body mt-6">Harum quae dolore orrupti aut temporibus ariatur.</p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-3">
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage alt={name} src={image} loading="lazy" width="120" height="120" />
                        <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>
                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>
                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
