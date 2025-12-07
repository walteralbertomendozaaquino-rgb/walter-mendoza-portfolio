"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Zap } from "lucide-react";
import Link from "next/link";

export default function ProjectShowcase() {
    const tags = ["AI Agents", "LLM Integration", "MVP Architecture", "Scalable Backend"];

    return (
        <section id="project" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <span className="text-accent text-sm font-medium tracking-wider uppercase">Project Showcase</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Featured Work</h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="group relative rounded-3xl bg-muted/20 border border-muted-foreground/10 overflow-hidden"
            >
                {/* Decorative Background Gradients */}
                <div className="absolute top-0 right-0 p-32 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 p-32 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-700" />

                <div className="relative z-10 p-8 md:p-12 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
                            <Zap className="w-3 h-3" />
                            MVP Release
                        </div>

                        <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                            Auto Tutor AI
                        </h3>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                            Un sistema de tutoría inteligente impulsado por <span className="text-foreground">IA Generativa</span>.
                            Diseñado para ofrecer educación personalizada y adaptativa sin depender de conexión constante,
                            priorizando la privacidad y la lógica local.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span key={tag} className="px-4 py-2 rounded-lg bg-background/50 border border-muted-foreground/10 text-sm text-muted-foreground backdrop-blur-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Link
                                href="https://github.com/walteralbertomendozaaquino-rgb/auto-tutor-ai-mvp"
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition-all group-hover:pl-8"
                            >
                                <Github className="w-5 h-5" />
                                <span>Ver Repositorio</span>
                                <ArrowUpRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Visual Placeholder for Project - Abstract Code/Graph */}
                    <div className="relative aspect-video rounded-2xl bg-black/50 border border-muted-foreground/10 overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                        {/* Abstract UI representation */}
                        <div className="absolute inset-4 rounded-xl border border-white/5 bg-muted/20 backdrop-blur-md p-6 flex flex-col gap-4">
                            <div className="w-1/3 h-4 bg-white/10 rounded-full" />
                            <div className="w-full h-32 bg-gradient-to-br from-accent/5 to-transparent rounded-lg border border-white/5 p-4 relative overflow-hidden">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent/20 font-mono text-xs">
                                    Thinking Process... {`{ model: "gemini-flash" }`}
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-full bg-white/10" />
                                <div className="flex-1 h-8 rounded-lg bg-white/5" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
