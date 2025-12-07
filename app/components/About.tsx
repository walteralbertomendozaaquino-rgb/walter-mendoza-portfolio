"use client";

import { motion } from "framer-motion";
import { Building2, Code2, Globe } from "lucide-react";

export default function About() {
    const companies = ["BBVA", "Tata Consultancy Services", "NTT DATA"];

    return (
        <section id="about" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <span className="text-accent text-sm font-medium tracking-wider uppercase">Sobre Mí</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Ingeniería & Estrategia</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main Bio Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="md:col-span-2 bg-muted/30 border border-muted-foreground/10 rounded-3xl p-8 hover:bg-muted/40 transition-colors"
                >
                    <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-full bg-accent/10 text-accent">
                            <Code2 className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground">Senior Engineer</h3>
                            <p className="text-sm text-muted-foreground">Trayectoria</p>
                        </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                        Ingeniero de Software Senior especializado en <span className="text-foreground font-medium">Java y Arquitectura de Microservicios</span> con una década de experiencia en el sector bancario. He liderado migraciones críticas, pipelines de CI/CD y equipos bajo metodologías Scrum.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {companies.map((company) => (
                            <span key={company} className="px-3 py-1 rounded-full bg-background border border-muted-foreground/20 text-xs font-medium text-muted-foreground">
                                {company}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Current Focus Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-accent text-white rounded-3xl p-8 flex flex-col justify-between"
                >
                    <div className="mb-6">
                        <div className="p-3 rounded-full bg-white/20 w-fit mb-6 text-white">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">El Futuro</h3>
                        <p className="text-blue-100 leading-relaxed">
                            Redefiniendo el desarrollo integrando <span className="font-semibold text-white">Agentic Workflows</span> y LLMs.
                        </p>
                    </div>
                    <div className="text-sm bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                        <p>"Acelerando la creación de productos robustos."</p>
                    </div>
                </motion.div>

                {/* Location/Remote Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="md:col-span-3 bg-muted/30 border border-muted-foreground/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-muted/40 transition-colors"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-green-500/10 text-green-500">
                            <Globe className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-foreground">Disponible Globalmente</h3>
                            <p className="text-muted-foreground">Base en España, operando en remoto.</p>
                        </div>
                    </div>
                    <div className="px-6 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-medium border border-green-500/20">
                        Open to Work
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
