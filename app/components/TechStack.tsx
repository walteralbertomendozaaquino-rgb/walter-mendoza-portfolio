"use client";

import { motion } from "framer-motion";
import { Cpu, Server } from "lucide-react";

export default function TechStack() {
    const coreStack = [
        "Java (Expert)",
        "Spring Boot",
        "Microservices",
        "Oracle / PL-SQL",
        "Docker & Kubernetes",
        "Jenkins / CI-CD"
    ];

    const modernStack = [
        "AI Agents & Workflows",
        "RAG Pipelines",
        "Large Language Models (LLMs)",
        "Python",
        "React / Next.js",
        "GitHub Copilot Advanced"
    ];

    return (
        <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 text-center md:text-left"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Hybrid Stack</h2>
                <p className="text-muted-foreground mt-4 max-w-2xl">
                    Bridging the gap between robust Enterprise Architecture and cutting-edge AI Innovation.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {/* Core Engineering Group */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-muted/20 rounded-xl">
                            <Server className="w-6 h-6 text-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold">Core Engineering</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        {coreStack.map((tech, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 p-4 rounded-xl bg-muted/10 border border-muted-foreground/5 hover:border-muted-foreground/20 transition-colors"
                            >
                                <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
                                <span className="text-muted-foreground font-medium">{tech}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* AI & Modern Tech Group */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-accent/10 rounded-xl text-accent">
                            <Cpu className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold">AI & Modern Tech</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        {modernStack.map((tech, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 p-4 rounded-xl bg-accent/5 border border-accent/10 hover:border-accent/30 transition-colors"
                                title="Innovation Layer"
                            >
                                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                                <span className="text-foreground font-medium">{tech}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
