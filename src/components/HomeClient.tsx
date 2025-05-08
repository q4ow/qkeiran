"use client";

import { TextGenerateEffect } from "~/components/ui/text-generate-effect";
import { Button } from "~/components/ui/button";
import { LuGithub, LuMail } from "react-icons/lu";
import { motion } from "framer-motion";
import { PageTransition } from "~/components/PageTransition";
import { z } from "zod";
import {
  fadeUpVariant,
  staggerContainerVariant,
  scaleFadeVariant,
  slideInLeftVariant,
  slideInRightVariant,
} from "~/lib/animations";

function handleButtonLink(
  link: string,
  params: string = "",
): React.MouseEventHandler<HTMLButtonElement> {
  return () => {
    const urlSchema = z.string().url();

    try {
      urlSchema.parse(link);
    } catch (error) {
      console.error("Invalid URL:", error);
      return;
    }

    const url = params
      ? `${link}${link.includes("?") ? "&" : "?"}${params}`
      : link;

    const newWindow = window.open(url, "_blank", "noopener,noreferrer");

    if (newWindow) {
      newWindow.focus();
    }
  };
}

export default function HomeClient() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col bg-background">
        <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <div className="text-6xl">Hey, I&apos;m Keiran</div>
            <motion.h2
              variants={fadeUpVariant}
              className="text-2xl md:text-4xl font-light text-muted-foreground mt-4"
            >
              Full Stack Developer
            </motion.h2>
            <motion.p
              variants={fadeUpVariant}
              className="mx-auto text-muted-foreground"
            >
              <TextGenerateEffect
                words="at least 15% of my code works 50% of the time"
                filter
              />
            </motion.p>
            <motion.div
              variants={staggerContainerVariant}
              initial="hidden"
              animate="visible"
              className="flex gap-4 justify-center mt-8"
            >
              <motion.div variants={scaleFadeVariant}>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleButtonLink("https://github.com/q4ow")}
                >
                  <LuGithub className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
              </motion.div>
              <motion.div variants={scaleFadeVariant}>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleButtonLink("mailto:me@keiran.cc")}
                >
                  <LuMail className="mr-2 h-5 w-5" />
                  Contact
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8"
            >
              About Me
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={slideInLeftVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                <p className="text-lg text-muted-foreground">
                  I'm a passionate Full Stack Developer with expertise in
                  building modern web applications. My focus is on creating
                  scalable solutions that provide exceptional user experiences.
                </p>
                <p className="text-lg text-muted-foreground">
                  With a strong foundation in both frontend and backend
                  technologies, I enjoy tackling complex problems and turning
                  ideas into reality.
                </p>
              </motion.div>
              <motion.div
                variants={slideInRightVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative h-[400px] rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12"
            >
              What I can do
            </motion.h2>
            <motion.div
              variants={staggerContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={scaleFadeVariant}
                  className="p-4 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="font-medium text-lg mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section> */}
      </main>
    </PageTransition>
  );
}

const technologies = [
  {
    name: "React & Next.js",
    description: "Modern full stack web development",
  },
  {
    name: "TypeScript",
    description: "Type-safe JavaScript development",
  },
  {
    name: "Node.js",
    description: "Backend development and API creation",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development",
  },
  {
    name: "PostgreSQL",
    description: "Relational database management",
  },
  {
    name: "Git",
    description: "Version control and collaboration",
  },
  {
    name: "Go",
    description: "Fast, asynchronous backend with goroutines",
  },
  {
    name: "Communication",
    description: "I am fantastic at communicating with others",
  },
];
